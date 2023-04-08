import execa from 'execa'
import { memoize } from '../../common/function/memoize'

export const hasPnpm = memoize(() => {
  try {
    execa('pnpm', ['--version'], { stdio: 'ignore' })
    return true
  }
  catch (e) {
    return false
  }
})

