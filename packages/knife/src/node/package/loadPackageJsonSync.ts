// import { existsSync, promises as fs } from 'fs';
import fs from 'fs-extra'
import findUp from 'find-up'

/**
  * 加载package.json文件
  * @param cwd
  * @returns
  */
export function loadPackageJSONSync(cwd = process.cwd()): Record<string, any> | null {
  const path = findUp.sync('package.json', { cwd } as any)
  if (!path || !fs.existsSync(path)) { return null }
  return JSON.parse(fs.readFileSync(path, 'utf-8'))
}
