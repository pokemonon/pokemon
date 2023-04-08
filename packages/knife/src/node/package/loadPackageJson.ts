/**
 * @copy https://github.com/antfu/local-pkg/blob/main/index.mjs
 */
import { existsSync, promises as fs } from 'fs'
import findUp from 'find-up'

/**
 * 加载package.json文件
 * @param cwd
 * @returns
 */
export async function loadPackageJSON(cwd = process.cwd()): Promise<Record<string, any> | null> {
  const path = await findUp('package.json', { cwd } as any)
  if (!path || !existsSync(path)) { return null }
  return JSON.parse(await fs.readFile(path, 'utf-8'))
}
