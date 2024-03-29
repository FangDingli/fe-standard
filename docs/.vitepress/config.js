import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/fe-standard/',
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
      {
        text: '编码规范',
        items: [
          { text: '写在前面', link: '/code-standard/getting-started' },
          { text: 'HTML规范', link: '/code-standard/HTML' },
          { text: 'CSS规范', link: '/code-standard/CSS' },
          { text: 'JavaScript规范', link: '/code-standard/JavaScript' },
        ],
      },
    ],
  },
})
