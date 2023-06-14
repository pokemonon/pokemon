import execa from 'execa'
import { memoize } from '../../common/function/memoize'

export const hasNpm = memoize(() => {
  try {
    execa.sync('npm', ['--version'], { stdio: 'ignore' })
    return true
  }
  catch (e) {
    return false
  }
})

