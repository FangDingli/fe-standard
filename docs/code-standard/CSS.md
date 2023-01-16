# CSS规范

以下CSS的规范，在各种CSS预处理器中也请尽量遵守。

## 语法

- 对于多声明语句的声明块，所有声明语句以及声明块的 `}` 应当独占一行，每行语句应当以分号结尾

- 为了代码的易读性，以下情况下应插入空格：
  
  - 属性值前，也就是每个语句的 `:` 之后
  
  - 选择器 `>` , `+` , `~` 之后
  
  - `!important` 前
  
  - 属性值中的逗号后， 如 `rgba`, `box-shadow` 
  
  - 声明块的 `{` 前
  
  - 注释的 `*` 前后

- 当属性值中出现小于1的小数，省略小数点前的0。如 `0.5` -> `.5`

- 当属性值中出现0的属性值， 省略后面的单位。 如 `margin: 0px` -> `marin: 0`

- 当属性值中出现十六进制，如 `#fff` ，应全部小写，小写字符更易于分辨。对于可以简写的十六进制，应当尽量简写。如 `#ffffff` -> `#fff`, `#aa99ff` -> `#a9f`

```css
/* good */
.selector,
.selector_secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}

/* bad */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}
```

## 声明顺序

网上有部分文章说CSS的书写顺序会影响性能，进而要求大家按照一定的顺序书写CSS。 关于这点我并没有找到特别有力的证据，我们暂且认为CSS的书写顺序不影响性能。

> 上一篇内容，小伙伴：“wuhu” 留言说：“我记得样式的属性顺序最好按照重流>重绘，可以提高渲染性能”，在这里针对这个问题再次说下哈。关于这个问题起初我也不太敢确定，于是乎问了同事和查了大量的资料之后才得知，如果放到10年前，这个理论还是相当重要的，但是在现代浏览器本身的引擎和性能来讲，css的写作顺序对于渲染性能问题上几乎可以忽略不计。

但按一定的顺序书写CSS可以显著提高代码的可维护性，因此将顺序书写CSS也作为CSS规范的一部分。可以手动维护也可以借助插件，插件推荐 [stylelint](https://github.com/stylelint/stylelint) 以及 [stylelint-order](https://github.com/hudochenkov/stylelint-order)

相关的属性声明应当归为一组，此处结合部分开源的 `stylelint-order` 配置，CSS书写应当遵循以下顺序：

1. Position 布局定位属性

2. Box model 盒模型属性 / 自身属性

3. Typographic 文本属性

4. Misc 其他属性 （CSS3）

```css
.declaration_order {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
 } 
```

完整的属性列表及其排列顺序请参考 [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js) 

当遇到需要加入浏览器私有前缀的属性时，浏览器私有前缀在前，标准前缀在后

## 媒体查询

尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们

```css
.main_container{
  width: 80%;
}

@media (max-width: 639.9px){
  .main_container{
    width: 100%;
  }
}
```

## 属性简写

属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰

`margin` 和 `padding` 相反，最好使用简写。 `transition` 语义化较为清晰，也可简写。

常见的可简写属性包括

- background

- animation

- transition

- font

```css
/* good */
.element{
  background-image: url(../image.png);
  background-size: 100% 100%;
  background-position: 0 0;
}

/* bad */
.element{
  background: url(../image.png) 0 0 / 100% 100%;
}
```

## 预处理器规范

无论使用的是哪一种预处理器，请尽量遵循以下规则

- 代码须按如下顺序组织
  
  1. `@import`
  
  2. 变量声明
  
  3. 样式声明

- 代码嵌套尽量不要超过三层，绝对不要超过五层。虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。当class命名足够准确，过长的嵌套将变的毫无意义

## 其他杂项

- 尽量避免使用 `*` 选择器

- 不要使用id选择器，将id用于JS操作DOM
