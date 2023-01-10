# 命名规范

## 前言

此处将对团队各场景下的命名进行约束，避免不同成员之间出现各种奇形怪状的命名，提高代码的可预测性和可维护性。

::: tip

由于业务特殊性，部分词语硬翻译成英文反而更难懂，徒增沟通成本。因此前端工程中允许文件名、变量名等使用拼音首字母命名。

:::

## 常见命名规范

- 小驼峰命名(camelCase)

- 大驼峰命名(PascalCase)

- 短横线命名(kebab-case)

- 下划线命名(snake_case)

## 文件结构

### 项目名称命名

- 确保命名总是以字母开头而不是数字

- 项目名称不得含有空格

- 名称均使用小写字母，不得有大写字母

- 多个单词使用kebab-case

```awk
// good
vue-naive-admin
react-antd-admin

// bad
vue_naive-admin
ReactAntdAdmin
```

## 项目目录命名

- 参考项目名称命名

- 有复数结构需采用复数单词

- 缩写可复数可不复数，但同一项目请统一

```awk
// good
scripts / styles / components / images / utils / layouts / demo-styles / img / doc

// bad
script / style / demo_scripts / demoStyles / imgs / doc
```

::: tip

vue项目中 `components` 目录下文件使用 `PascalCase` 命名，其余使用 `kebab-case` 命名

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
│   ├─ views       // 页面文件目录
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
├─ package.json    // 包管理器文件
├─ README.md       // 项目README文件
├─ vue.config.js   // vuecli配置文件
└─ yarn.lock/package-lock.json/pnpm-lock.yaml // 各包管理器锁定版本配置文件
```

## 文件命名

### html文件命名

参照项目命名规则

```awk
// good
user-info.html

// bad
userInfo.html
```

### css、less、scss、stylus文件命名

参照项目命名规则

```awk
// good
base-style.less

// bad
baseStyle.less
```

### JS、TS文件命名

由于大量使用ruoyi-ui，此处参照若依的命名规则，js文件统一使用 `camelCase` 命名

```awk
// good
loginValidate.js
userValidate.ts

// bad
loginvalidate.js
user-validate.ts
```

## 文件内容

### CSS及其预处理器中class、id、变量等命名

- class名统一使用小写并用下划线连接

- id使用 `camelCase` 命名

- 预处理器中 变量、函数、混合等采用 `camelCase` 命名

```scss
// good
.selector{}
.danger_message{}
#feedbackBtn{}
$primaryColor: #428bca;
@function getDouble(){}
@mixin darkTheme($theme:Dark){}


//bad
.SELECTOR{}
.dangerMessage{}
#feedbackbtn{}
$primary-color: #428bca;
@function get-double(){}
@mixin dark-theme($theme:Dark){}
```

### JavaScript、TypeScript 文件内容命名

#### 通常情况下命名规则

- 变量名、函数名应尽量详细，说清用途，不要怕长，所有变量名函数名在 uglify 后都将转换为无意义的字母

- 变量名、函数名、函数形参统一使用 `camelCase` 命名

- 常量使用全部字母大写的 `SNAKE_CASE` 命名。常量可以存在于函数中，也可以存在于全局。通常用于ajax请求url，vue中emit的触发词和一些不会改变的数据

- 以双下划线开头__ 并以双下划线结束 __ 的变量名为顶级特殊标识，非特殊情况绝对不得修改

- 通过ES5的构造函数、ES6的Class构建的类名使用 `PascalCase` 命名

- 类中私有成员变量命名以下划线 _ 开头
  
  ```javascript
  // 符合当前大多数成员的编码习惯，此处将不展示错误用法
  
  const activeKey=''
  
  const resolvePath=(route,basePath) => {}
  
  const MAX_COUNT=5
  
  class Queue {
    constructor(content = []){
      this._queue = [ ...content ]
    }
  }
  ```

#### 部分可能存在争议的命名

- `ID` 在变量名中全大写

- `URL`、`URI` 在变量名中全大写

- 以此类推，由多个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致

- 如果出现复数，后面的 s 小写
  
  ```javascript
  function XMLParser() {
  }
  
  function insertHTML(element, html) {
  }
  
  function getSelectedIDs(){}
  
  const httpRequest = new HTTPRequest()
  ```

- `Android` 在变量名中大写第一个字母

- `iOS` 在变量名中小写第一个，大写后两个字母

- 对上下文 this 的引用只能使用 `_this`、`that`、 `self`其中一个来命名

#### 更细粒度的规定

- 前缀为 `is` 或 `has` 的变量应为布尔值

- 术语 `init` 作为变量名应为初始化方法或变量

- 迭代时临时变量允许使用 `i`, `j`, `k`, `item`, `element` 等无意义名称，使用 `item`, `element`, `index` 等完整单词时，**不允许**简写，如 `index` 简写成 `idx`

- 对函数进行命名时应尽量使用动宾短语，如 `getListData` 

- hooks 或 composition 用途的函数大多数情况下以 `use` 开头

#### 函数方法常用的动词

```awk
增删改查详情： add / delete / update / get / detail 

get 获取/set 设置,
add 增加/remove 删除
create 创建/destory 移除
start 启动/stop 停止
open 打开/close 关闭,
read 读取/write 写入
load 载入/save 保存,
create 创建/destroy 销毁
begin 开始/end 结束,
backup 备份/restore 恢复
import 导入/export 导出,
split 分割/merge 合并
inject 注入/extract 提取,
attach 附着/detach 脱离
bind 绑定/separate 分离,
view 查看/browse 浏览
edit 编辑/modify 修改,
select 选取/mark 标记
copy 复制/paste 粘贴,
undo 撤销/redo 重做
insert 插入/delete 移除,
add 加入/append 添加
clean 清理/clear 清除,
index 索引/sort 排序
find 查找/search 搜索,
increase 增加/decrease 减少
play 播放/pause 暂停,
launch 启动/run 运行
compile 编译/execute 执行,
debug 调试/trace 跟踪
observe 观察/listen 监听,
build 构建/publish 发布
input 输入/output 输出,
encode 编码/decode 解码
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩
pack 打包/unpack 解包,
parse 解析/emit 生成
connect 连接/disconnect 断开,
send 发送/receive 接收
download 下载/upload 上传,
refresh 刷新/synchronize 同步
update 更新/revert 复原,
lock 锁定/unlock 解锁
check out 签出/check in 签入,
submit 提交/commit 交付
push 推/pull 拉,
expand 展开/collapse 折叠
begin 起始/end 结束,
start 开始/finish 完成
enter 进入/exit 退出,
abort 放弃/quit 离开
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```
