import{_ as s,c as a,o as n,a as l}from"./app.0beb2061.js";const F=JSON.parse('{"title":"Vue 项目规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[{"level":3,"title":"通用文件与文件夹","slug":"通用文件与文件夹","link":"#通用文件与文件夹","children":[]},{"level":3,"title":"SFC 文件内部参数命名","slug":"sfc-文件内部参数命名","link":"#sfc-文件内部参数命名","children":[]}]}],"relativePath":"project-standard/Vue.md","lastUpdated":1685325124000}'),p={name:"project-standard/Vue.md"},e=l(`<h1 id="vue-项目规范" tabindex="-1">Vue 项目规范 <a class="header-anchor" href="#vue-项目规范" aria-hidden="true">#</a></h1><p>公司中绝大部分前后端分离项目基于 <code>Vue</code> ，此篇将对团队在 <code>Vue</code> 项目的开发进行强约束</p><h2 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-hidden="true">#</a></h2><h3 id="通用文件与文件夹" tabindex="-1">通用文件与文件夹 <a class="header-anchor" href="#通用文件与文件夹" aria-hidden="true">#</a></h3><p>项目命名、文件命名、文件内容命名 等请参照 <a href="./../name-standard.html">命名规范</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>vue项目中 <code>components</code> 目录下文件使用 <code>PascalCase</code> 命名，其余使用 <code>kebab-case</code> 或 <code>camelCase</code> 命名</p></div><p>以下为一个常见的 vue 项目目录</p><ul><li><p>页面文件放在 <code>views</code> 或 <code>pages</code> 文件夹下，两个文件夹只允许存在一个</p></li><li><p>项目通用组件放在 <code>src/components</code> 下，各模块单独使用的组件放在对应模块页面文件夹的 <code>components</code> 中</p></li></ul><div class="language-r"><button title="Copy Code" class="copy"></button><span class="lang">r</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">my</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">project</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ dist            </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 打包输出目录</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ node_modules    </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 下载的依赖包</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ public          </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 静态文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ index.html  </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 项目入口</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src             </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ api         </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 接口目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ assets      </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 静态文件目录，存放 css</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">images</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">font 等等</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ components  </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 全局组件目录，如全局使用的 Pagination 等等</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ mixins      </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> mixins 目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ router      </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 路由文件目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ store       </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> vuex</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pinia 等全局状态管理文件存放目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ utils       </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 通用函数集合目录</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ pages       </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 页面文件目录 或名为 views 两者只能存在一个</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├─ xxxx    </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 系统中某模块</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├─ components </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 此模块中单独使用的组件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├─ xxx.vue    </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 页面文件，页面过多可再建文件夹</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├─ App.vue     </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 根组件文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └─ main.js     </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> webpack</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">vite</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">rollup 等打包插件入口文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ babel.config.js </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> babel配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .editorconfig   </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 统一各编辑器设置，需配合 editorconfig 插件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintignore   </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> eslint 忽略文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintrc.js    </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> eslint 配置文件，需配合 eslint 插件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .gitignore      </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> git 忽略文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .prettierrc     </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> prettie 配置文件，需配合 prettier 插件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .prettierignore     </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> prettie 忽略，需配合 prettier 插件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ package.json    </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 包管理器文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ README.md       </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 项目README文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ vue.config.js   </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> vuecli配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">└─ yarn.lock</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">lock.json</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">pnpm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">lock.yaml </span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;"> 各包管理器锁定版本配置文件</span></span>
<span class="line"></span></code></pre></div><h3 id="sfc-文件内部参数命名" tabindex="-1">SFC 文件内部参数命名 <a class="header-anchor" href="#sfc-文件内部参数命名" aria-hidden="true">#</a></h3><h4 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h4><p>不强制要求写明 <code>name</code> 属性，但当此文件作为页面访问且位于动态路由中时，不写 <code>name</code> 可能会导致 <code>keep-alive</code> 失效，此情形下请务必为页面组件加上 <code>name</code> 属性</p><p><code>name</code> 命名应该始终是 <code>PascalCase</code> 的。根组件 App 以及 <code>&lt;transition&gt;</code>、<code>&lt;component&gt;</code> 之类的 Vue 内置组件除外。这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">  name:&#39;NewLogin&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="prop" tabindex="-1">prop <a class="header-anchor" href="#prop" aria-hidden="true">#</a></h4><p>对prop的声明应始终使用 <code>camelCase</code> , 而在 <code>template</code> 和 <code>JSX</code> 中应始终使用 <code>kebab-case</code> 。 我们单纯遵循每个语言的约定， 在 <code>JavaScript</code> 中更自然的是 <code>camelCase</code> 而在 <code>HTML</code> 中则更多的使用 <code>kebab-case</code></p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- Parent Component --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">Hello</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:show-text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">Hello</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Child Componet</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">prop</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">showText</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">Boolean</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,17),o=[e];function c(t,r,D,C,i,y){return n(),a("div",null,o)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};
