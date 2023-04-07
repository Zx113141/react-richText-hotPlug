import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@', replacement: path.resolve(__dirname, './src')
      },
      { find: /^~antd/, replacement: path.resolve('./', 'node_modules/antd/') },
    ]
  },
  css:{
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "antd/es/style/themes/default.less";',
        modifyVars: {
          // 'primary-color': 'rgb(62, 116, 174)',
          // 'link-color': '#0080FF',
          // 'border-radius-base': '4px',
        },
        javascriptEnabled: true,
      },
    }
  }
})
