# Vue 项目规范

公司中绝大部分前后端分离项目基于 `Vue` ，此篇将对团队在 `Vue` 项目的开发进行强约束

## 命名规范

### 通用文件与文件夹

项目命名、文件命名、文件内容命名 等请参照 [命名规范](../name-standard)

::: tip

vue项目中 `components` 目录下文件使用 `PascalCase` 命名，其余使用 `kebab-case` 或 `camelCase` 命名

:::

以下为一个常见的 vue 项目目录

- 页面文件放在 `views` 或 `pages` 文件夹下，两个文件夹只允许存在一个

- 项目通用组件放在 `src/components` 下，各模块单独使用的组件放在对应模块页面文件夹的 `components` 中

```r
my-project-name
├─ dist            // 打包输出目录
├─ node_modules    // 下载的依赖包
├─ public          // 静态文件目录
│   ├─ index.html  // 项目入口
├─ src             // 源码目录
│   ├─ api         // 接口目录
│   ├─ assets      // 静态文件目录，存放 css/images/font 等等
│   ├─ components  // 全局组件目录，如全局使用的 Pagination 等等
│   ├─ mixins      // mixins 目录
│   ├─ router      // 路由文件目录
│   ├─ store       // vuex/pinia 等全局状态管理文件存放目录
│   ├─ utils       // 通用函数集合目录
│   ├─ pages       // 页面文件目录 或名为 views 两者只能存在一个
│   │   ├─ xxxx    // 系统中某模块
│   │   │   ├─ components // 此模块中单独使用的组件
│   │   │   ├─ xxx.vue    // 页面文件，页面过多可再建文件夹
│   ├─ App.vue     // 根组件文件
│   └─ main.js     // webpack/vite/rollup 等打包插件入口文件
├─ babel.config.js // babel配置文件
├─ .editorconfig   // 统一各编辑器设置，需配合 editorconfig 插件
├─ .eslintignore   // eslint 忽略文件
├─ .eslintrc.js    // eslint 配置文件，需配合 eslint 插件
├─ .gitignore      // git 忽略文件
├─ .prettierrc     // prettie 配置文件，需配合 prettier 插件
├─ .prettierignore     // prettie 忽略，需配合 prettier 插件
├─ package.json    // 包管理器文件
├─ README.md       // 项目README文件
├─ vue.config.js   // vuecli配置文件
└─ yarn.lock/package-lock.json/pnpm-lock.yaml // 各包管理器锁定版本配置文件
```

### SFC 文件内部参数命名

#### name

不强制要求写明 `name` 属性，但当此文件作为页面访问且位于动态路由中时，不写 `name` 可能会导致 `keep-alive` 失效，此情形下请务必为页面组件加上 `name` 属性

`name` 命名应该始终是 `PascalCase`  的。根组件 App 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的

```vue
export default {
  name:'NewLogin',
  // ...
}
```

#### prop

对prop的声明应始终使用 `camelCase` , 而在 `template` 和 `JSX` 中应始终使用 `kebab-case` 。 我们单纯遵循每个语言的约定， 在 `JavaScript` 中更自然的是 `camelCase` 而在  `HTML` 中则更多的使用 `kebab-case`

```vue
<!-- Parent Component -->
<template>
  <Hello :show-text="true"></Hello>
</template>


<script>
// Child Componet
export default {
  prop:{
    showText:{
      type:Boolean,
      required: true
    }
  }
}
</script>
```
