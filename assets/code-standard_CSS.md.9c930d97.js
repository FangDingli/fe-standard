import{_ as s,c as a,o as n,a as l}from"./app.0beb2061.js";const A=JSON.parse('{"title":"CSS规范","description":"","frontmatter":{},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"声明顺序","slug":"声明顺序","link":"#声明顺序","children":[]},{"level":2,"title":"媒体查询","slug":"媒体查询","link":"#媒体查询","children":[]},{"level":2,"title":"属性简写","slug":"属性简写","link":"#属性简写","children":[]},{"level":2,"title":"预处理器规范","slug":"预处理器规范","link":"#预处理器规范","children":[]},{"level":2,"title":"其他杂项","slug":"其他杂项","link":"#其他杂项","children":[]}],"relativePath":"code-standard/CSS.md","lastUpdated":1675243661000}'),p={name:"code-standard/CSS.md"},o=l(`<h1 id="css规范" tabindex="-1">CSS规范 <a class="header-anchor" href="#css规范" aria-hidden="true">#</a></h1><p>以下CSS的规范，在各种CSS预处理器中也请尽量遵守。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h2><ul><li><p>对于多声明语句的声明块，所有声明语句以及声明块的 <code>}</code> 应当独占一行，每行语句应当以分号结尾</p></li><li><p>为了代码的易读性，以下情况下应插入空格：</p><ul><li><p>属性值前，也就是每个语句的 <code>:</code> 之后</p></li><li><p>选择器 <code>&gt;</code> , <code>+</code> , <code>~</code> 之后</p></li><li><p><code>!important</code> 前</p></li><li><p>属性值中的逗号后， 如 <code>rgba</code>, <code>box-shadow</code></p></li><li><p>声明块的 <code>{</code> 前</p></li><li><p>注释的 <code>*</code> 前后</p></li></ul></li><li><p>当属性值中出现小于1的小数，省略小数点前的0。如 <code>0.5</code> -&gt; <code>.5</code></p></li><li><p>当属性值中出现0的属性值， 省略后面的单位。 如 <code>margin: 0px</code> -&gt; <code>marin: 0</code></p></li><li><p>当属性值中出现十六进制，如 <code>#fff</code> ，应全部小写，小写字符更易于分辨。对于可以简写的十六进制，应当尽量简写。如 <code>#ffffff</code> -&gt; <code>#fff</code>, <code>#aa99ff</code> -&gt; <code>#a9f</code></p></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* good */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector_secondary</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> inset </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* bad */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector-secondary</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">selector</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">15px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">CCC</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">inset </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FFFFFF</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="声明顺序" tabindex="-1">声明顺序 <a class="header-anchor" href="#声明顺序" aria-hidden="true">#</a></h2><p>网上有部分文章说CSS的书写顺序会影响性能，进而要求大家按照一定的顺序书写CSS。 关于这点我并没有找到特别有力的证据，我们暂且认为CSS的书写顺序不影响性能。</p><blockquote><p>上一篇内容，小伙伴：“wuhu” 留言说：“我记得样式的属性顺序最好按照重流&gt;重绘，可以提高渲染性能”，在这里针对这个问题再次说下哈。关于这个问题起初我也不太敢确定，于是乎问了同事和查了大量的资料之后才得知，如果放到10年前，这个理论还是相当重要的，但是在现代浏览器本身的引擎和性能来讲，css的写作顺序对于渲染性能问题上几乎可以忽略不计。</p></blockquote><p>但按一定的顺序书写CSS可以显著提高代码的可维护性，因此将顺序书写CSS也作为CSS规范的一部分。可以手动维护也可以借助插件，插件推荐 <a href="https://github.com/stylelint/stylelint" target="_blank" rel="noreferrer">stylelint</a> 以及 <a href="https://github.com/hudochenkov/stylelint-order" target="_blank" rel="noreferrer">stylelint-order</a></p><p>相关的属性声明应当归为一组，此处结合部分开源的 <code>stylelint-order</code> 配置，CSS书写应当遵循以下顺序：</p><ol><li><p>Position 布局定位属性</p></li><li><p>Box model 盒模型属性 / 自身属性</p></li><li><p>Typographic 文本属性</p></li><li><p>Misc 其他属性 （CSS3）</p></li></ol><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">declaration_order</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> Arial</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Helvetica Neue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Helvetica</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">333</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>完整的属性列表及其排列顺序请参考 <a href="https://github.com/stormwarning/stylelint-config-recess-order/blob/main/groups.js" target="_blank" rel="noreferrer">stylelint-config-recess-order</a></p><p>当遇到需要加入浏览器私有前缀的属性时，浏览器私有前缀在前，标准前缀在后</p><h2 id="媒体查询" tabindex="-1">媒体查询 <a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a></h2><p>尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main_container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@media</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">max-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">639.9px</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main_container</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="属性简写" tabindex="-1">属性简写 <a class="header-anchor" href="#属性简写" aria-hidden="true">#</a></h2><p>属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰</p><p><code>margin</code> 和 <code>padding</code> 相反，最好使用简写。 <code>transition</code> 语义化较为清晰，也可简写。</p><p>常见的可简写属性包括</p><ul><li><p>background</p></li><li><p>animation</p></li><li><p>transition</p></li><li><p>font</p></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* good */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">element</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">../image.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* bad */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">element</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">../image.png</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> / </span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>背景颜色属性请尽量写全称 <code>background-color</code> ，而不是 <code>background</code></p></div><h2 id="预处理器规范" tabindex="-1">预处理器规范 <a class="header-anchor" href="#预处理器规范" aria-hidden="true">#</a></h2><p>无论使用的是哪一种预处理器，请尽量遵循以下规则</p><ul><li><p>代码须按如下顺序组织</p><ol><li><p><code>@import</code></p></li><li><p>变量声明</p></li><li><p>样式声明</p></li></ol></li><li><p>代码嵌套尽量不要超过三层，绝对不要超过五层。虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。当class命名足够准确，过长的嵌套将变的毫无意义</p></li></ul><h2 id="其他杂项" tabindex="-1">其他杂项 <a class="header-anchor" href="#其他杂项" aria-hidden="true">#</a></h2><ul><li><p>尽量避免使用 <code>*</code> 选择器</p></li><li><p>不要使用id选择器，将id用于JS操作DOM</p></li></ul>`,29),e=[o];function c(t,r,C,D,y,F){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};