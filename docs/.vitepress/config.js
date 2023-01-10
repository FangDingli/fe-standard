import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '前端代码规范',
  description: '浙江亿点通研发部 - 前端组开发规范',
  lastUpdated: true,
  themeConfig: {
    outline: 'deep',
    sidebar: [
      {
        text: '开始阅读',
        items: [
          { text: '写在前面', link: '/getting-started' },
          { text: '命名规范', link: '/name-standard' },
        ],
      },
    ],
  },
})
