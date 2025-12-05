import { defineConfig } from '@vue/cli-service'
import Components from 'unplugin-vue-components/webpack'

export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      Components({
        dirs: [
          './src/components',
        ],
      }),
    ],
  },
})
