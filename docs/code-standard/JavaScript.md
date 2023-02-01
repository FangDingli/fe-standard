# JavaScript 规范

## 编码规范

#### 空格

从代码的易读性、可维护性等多方面考虑，以下情况需要加上空格

- 二元运算符前后，如 `=`, `||`, `??`, `?.` 等
- 三元运算符前后，如 `?`, `:` 等
- 代码块的 `{` 前
- 以下关键字前：`else`, `while`, `catch`, `finally`
- 以下关键字后：`const`, `let`, `var`, `if`, `else`, `for`, `while`, `do`, `switch`, `case`, `try`, `catch`, `finally`, `with`, `return`, `typeof`
- 单行注释 `//` 后（若单行注释和代码同行，则 `//` 前也需要），多行注释 `*` 后
- 对象的属性值前
- 逗号后
- 无论是函数声明还是函数表达式，`{` 前一定要有空格
- 函数的参数之间

```javascript
// this is a comment
function partition(array, ...filters) {
  const result = new Array(filters.length + 1).fill(null).map(() => [])

  array.forEach((e, index, arr) => {
    let i = 0

    for (const filter of filters) {
      if (filter(e, index, arr)) {
        result[i].push(e)
        return
      }
      i += 1
    }

    return result
  })
}
```

#### 空行

空白行对于分离代码逻辑有帮助，但过多的空行会占据屏幕的空间，影响可读性。约定最大连续空行数为 3。

#### 括号

在大多数的 JavaScript 项目中，花括号以 `Egyptian` 风格书写，即左花括号与相应的关键词在同一行上，而不是新起一行。

```javascript
// bad
if (foo)
{
  bar()
}
else
{
  baz()
}

// good
if (foo) {
  bar()
} else {
  baz()
}
```

#### 分号

在很多情况下，JavaScript 引擎可以确定一个分号应该在什么位置然后自动添加它。关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 `JS` 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。绝大多数情况下现有的 js format 工具也能检测到需要加分号的地方自动添加上。

```javascript
// bad
const test = 'good';
(function () {
  const str = 'hahaha';
})()

// good
const test = 'good'
;(() => {
  const str = 'hahaha'
})();
```

#### 缩进

团队统一使用空格进行2格缩进，禁止使用tab缩进

#### 箭头函数

对于箭头函数的写法采取最简形式

- 如果函数只有一个参数，省略参数的括号

- 如果函数体语句中只有一个返回语句，则省略函数体的大括号

```javascript
// bad
const result = [1, 2, 3].map((x) => {
  const y = x + 1
  return y
})

// good
const result = [1, 2, 3].map(x => x + 1)
```

#### 链式赋值

链式赋值容易造成代码的可读性差，所以团队约定禁止使用链式赋值

```javascript
// bad
const a = b = c =2

// good
const a = 2
const b = 2
const c = 2 
```

## 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则。 

#### 变量定义

`const` 和 `let` 都是块级作用域，`var` 是函数级作用域。团队规定所有变量定义均使用 `const` 或 `let` ，禁止使用 `var` 。

优先使用 `const` 保证基础数据类型在无意间变更时能及时收到报错，如数据确实需要变化再使用`let`

```javascript
// bad
var a = 1
var b = 2

// good
const a = 1
const b = 2
```

#### 对象

- 绝大多数情况下使用对象字面量创建对象（允许使用 `Object.create(null)` ）

- 对象的方法、属性值使用简写形式

- 对简写形式尽量分组保证可读性

```javascript
// bad
const item = new Object{}
const item = {
  department: department,
  value: 1,
  addValue: function(val){
    return item.value + val
  },
  job: job
}


// good
const item = {}
const item = {
  job,
  department,
  value: 1,
  addValue(val){
    return item.value + val
  }
}
```

#### 数组

- 绝大多数情况下使用字面量创建数组，除非需要往 `new Array()` 里传递参数

- 深拷贝数组时优先使用拓展运算符而不是循环，详见 [JSBEN.CH](https://jsben.ch/lO6C5) 

- 出于性能考虑，迭代数组时，明确需要处理后的返回值时才允许使用 `map`, `filter` 等具有返回值的函数，如果仅仅是修改原数组请使用 `forEach` 等不具有返回值的函数，`forEach` 与原生 `for` 循环具有相似的性能。 详见 [JSBEN.CH](https://jsben.ch/XLget) 

#### 解构赋值

[关于解构赋值](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 

- 当需要使用对象的多个属性时，请使用解构赋值

- 当需要使用数组的多个值时，请同样使用解构赋值

- 函数需要回传多个值时，请使用对象的解构，而不是数组的解构

```javascript
// bad
function getFullName (user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// good
function getFullName (user) {
  const { firstName, lastName } = user

  return `${firstName} ${lastName}`
}

// better
function getFullName ({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}

// ----------------------------------------

const arr = [1, 2, 3, 4]

// bad
const first = arr[0]
const second = arr[1]

// good
const [first, second] = arr

// -----------------------------------------

// bad
function doSomething () {
  return [top, right, bottom, left]
}

// 如果是数组解构，那么在调用时就需要考虑数据的顺序
const [top, xx, xxx, left] = doSomething()

// good
function doSomething () {
  return { top, right, bottom, left }
}

// 此时不需要考虑数据的顺序
const { top, left } = doSomething()
```

#### 字符串

- JS代码中所有字符串最外层优先使用单引号，这对于字符串中的HTML代码有更好的兼容性
- 程序化生成字符串时，请使用模板字符串

```javascript
const test = 'test'

// bad
const str = ['a', 'b', test].join()

// bad
const str = 'a' + 'b' + test

// good
const str = `ab${test}`
```
