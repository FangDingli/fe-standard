# HTML规范

尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。此标准同样适用于 Vue SFC

## 元素及标签闭合

为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

- 所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。

- `img` `input` `br` 等无结束标签的元素标签最后的 “/” 可加可不加，如果要加请务必在 “/”前加上一个空格（个人更倾向于不加但这与vscode默认生成的html5模板冲突，因此这项不做强制要求，影响并不大）

```html
<!-- good -->

<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>

<br />


<!-- bad -->

<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字，我有始无终，浏览器亦能正确解析
</div>

<br/>
```

## 书写风格

- HTML标签名、类名、标签属性和大部分属性值统一用小写，部分值允许大小写混合

- 不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含

- 标签属性值统一使用双引号包裹，不允许出现单引号或没有引号，此处将与后续js规范配合

- boolean类型的属性值为true时，无需写上具体属性值，此处与后续 vue 规范配合

```html
<!-- good -->
<meta charset="UTF-8" />
<div class="demo"></div>
<input type="radio" name="name" checked >


<!-- bad -->
<DIV CLASS="DEMO"></DIV>
<input type="radio" name="name" checked="checked" >
```

推荐将HTML属性按以下顺序书写

1. id

2. class

3. name

4. data-*

5. src, for, type, href, value , max-length, max, min, pattern

6. placeholder, title, alt

7. aria-*, role

8. required, readonly, disabled

## 代码嵌套

- 每个块状元素独立一行，内联元素可选

- 段落元素与标题元素只能嵌套内联元素

```html
<!-- good -->
<div>
  <h1></h1>
  <p></p>
</div>
<p><span></span><span></span></p>


<!-- bad -->
<div>
  <h1></h1><p></p>
</div>    

<h1><div></div></h1>
<p><div></div><div></div></p>
```

## 模板

- 使用 `HTML5` 的 `doctype` 来启用标准模式，建议使用大写的 `DOCTYPE` 
- 建议 `head` 的第一个直接子元素是设置charset的meta
- 建议PC端启用 `IE=Edge` 模式
- 建议手机端启用 `viewport-fit=cover` 以便适配iOS

### PC端模板

```html
<!DOCTYPE html>
<html lang="cmn-Hans-CN">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico">
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

### 移动端模板

```html
<!DOCTYPE html>
<html lang="cmn-Hans-CN">
  <head>
    <meta charset="UTF-8" />
    <meta content="telephone=no" name="format-detection" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover" />
    <title>My App</title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
  </body>
</html>
```
