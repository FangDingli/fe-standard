由此开始将规定团队成员在各个场景下对各类文件的编写规范

# 基本原则

## 结构、样式、行为分离

尽量确保文档和模板只包含 `HTML` 结构，样式都放到样式表里，行为都放到脚本里。

## 缩进

如无特殊规定，前端工程中所有编码文件统一 **两个空格** 缩进（总之缩进统一即可），不要使用 `Tab` 或者 `Tab`、空格混搭。

## 文件编码

**使用不带 `BOM` 的 UTF-8 编码。**

- 在 HTML中指定编码 `<meta charset="UTF-8">` ；
- 无需使用 `@charset` 指定CSS样式表的编码，它默认为 `UTF-8` （参考 [@charset](https://developer.mozilla.org/en-US/docs/Web/CSS/@charset)）；

> 请尽量统一写成标准的 “UTF-8”，不要写成 “utf-8” 或 “utf8” 或 “UTF8”。根据 [IETF对UTF-8的定义](http://www.ietf.org/rfc/rfc3629)，其编码标准的写法是 “UTF-8”；而 UTF8 或 utf8 的写法只是出现在某些编程系统中，如 .NET framework 的类 System.Text.Encoding 中的一个属性名就叫 UTF8。
