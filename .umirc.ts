import { defineConfig } from 'umi'

export default defineConfig({
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {},

  // 存在预定式路由，所以，当没有编写routes时将会自动读取pages
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
})