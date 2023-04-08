import execa from 'execa'
import { memoize } from '../../common/function/memoize'

export const hasGit = memoize(() => {
  try {
    execa.sync('git', ['--version'], { stdio: 'ignore' })
    return true
  }
  catch (e) {
    return false
  }
})

