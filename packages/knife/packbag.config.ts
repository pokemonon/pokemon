import * as path from 'path'
import {
  defineConfig,
} from '@packbag/cli'
import common from '@packbag/cli-rollup-plugin-common'

const r = (...p) => path.resolve(__dirname, ...p)

export default defineConfig({
  plugins: [
    common(),
  ],
  config: {
    input: [
      r('src/types/index.ts'),
      r('src/common/index.ts'),
      r('src/browser/index.ts'),
      r('src/node/index.ts'),
    ],
    output: [
      {
        preserveModules: true,
        dir: r('dist/es'),
        format: 'esm',
      },
      {
        preserveModules: true,
        dir: r('dist/lib'),
        format: 'cjs',
        exports: 'named',
      },
    ],
  },
})
