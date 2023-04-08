import execa from 'execa'
import { hasYarn } from '../env/hasYarn'
import { hasPnpm } from '../env/hasPnpm'
import { hasProjectYarn } from '../env/hasProjectYarn'
import { hasProjectPnpm } from '../env/hasProjectPnpm'
import { hasProjectNpm } from '../env/hasProjectNpm'
import type { ItemOrArray } from '../../types'
import { sureArray } from '../../common/array/sureArray'

const PACKAGE_MANAGER_CONFIG = {
  yarn: {
    install: [],
    add: ['add'],
    upgrade: ['upgrade'],
    remove: ['remove'],
  },
  pnpm: {
    install: ['install'],
    add: ['install'],
    upgrade: ['update'],
    remove: ['uninstall'],
  },
  npm: {
    install: ['install'],
    add: ['install'],
    upgrade: ['update'],
    remove: ['uninstall'],
  },
}
type PackageManagerCommand = keyof typeof PACKAGE_MANAGER_CONFIG.yarn

enum PackageManagerEnum {
  yarn = 'yarn',
  pnpm = 'pnpm',
  npm = 'npm',
}
interface PackageManagerConfig {
  context?: string
  forcePackageManager?: PackageManagerEnum
}
export class PackageManager {
  bin!: PackageManagerEnum
  context!: string

  constructor(config: PackageManagerConfig) {
    const {
      context = process.cwd(),
      forcePackageManager,
    } = config
    this.context = context

    if (forcePackageManager) {
      this.bin = forcePackageManager
    }
    else {
      if (hasProjectYarn(this.context)) {
        this.bin = PackageManagerEnum.yarn
      }
      else if (hasProjectPnpm(this.context)) {
        this.bin = PackageManagerEnum.pnpm
      }
      else if (hasProjectNpm(this.context)) {
        this.bin = PackageManagerEnum.npm
      }
    }

    if (!this.bin) {
      this.bin = hasYarn() ? PackageManagerEnum.yarn : hasPnpm() ? PackageManagerEnum.pnpm : PackageManagerEnum.npm
    }
  }

  async runCommand(command: PackageManagerCommand, args: any[] = []) {
    return execa(this.bin, [
      ...PACKAGE_MANAGER_CONFIG[this.bin][command],
      ...args,
    ], {
      stdio: 'inherit',
      cwd: this.context,
    })
  }

  async install() {
    return this.runCommand('install')
  }

  async add(pkgNames: ItemOrArray<string>, args = []) {
    return this.runCommand('add', [
      ...sureArray(pkgNames),
      ...args,
    ])
  }

  async upgrade(pkgNames: ItemOrArray<string>) {
    return this.runCommand('upgrade', [
      ...sureArray(pkgNames),
    ])
  }

  async remove(pkgNames: ItemOrArray<string>) {
    return this.runCommand('remove', [
      ...sureArray(pkgNames),
    ])
  }
}

