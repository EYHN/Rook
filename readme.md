# echo

基于 `markdown-it` 的颜艺 `markdown` 解析器

# 特殊操作

下面是本解析器有异于标准 `markdown` 的特殊操作。

<details><summary>ruby</summary><br>

markdown:

``` markdown
*马猴烧酒^まほうしょうじょ*

*滑稽^zui qiang*
```

HTML:

``` html
<p><ruby>马猴烧酒<rp></rp><rt>まほうしょうじょ</rt><rp></rp></ruby></p>
<p><ruby>滑稽<rp></rp><rt>zui qiang</rt><rp></rp></ruby></p>
```

范例:

<p><ruby>马猴烧酒<rp></rp><rt>まほうしょうじょ</rt><rp></rp></ruby></p>
<p><ruby>滑稽<rp></rp><rt>zui qiang</rt><rp></rp></ruby></p>

</details>

<details><summary>sub</summary><br>

markdown:

``` markdown
H~2~0
```

HTML:

``` html
<p>H<sub>2</sub>0</p>
```

范例:
<p>H<sub>2</sub>0</p>

</details>

<details><summary>sup</summary><br>

markdown:

``` markdown
29^th^
```

HTML:

``` html
<p>29<sup>th</sup></p>
```

范例:
<p>29<sup>th</sup></p>

</details>

<details><summary>footnote</summary><br>

markdown:

``` markdown
Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.
```

HTML:

``` html
<p>Here is a footnote reference,<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> and another.<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Here is the footnote. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Here’s one with multiple blocks.</p>
<p>Subsequent paragraphs are indented to show that they
belong to the previous footnote. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
```

范例:

<p>Here is a footnote reference,<sup class="footnote-ref"><a href="#fn1" id="fnref1">[1]</a></sup> and another.<sup class="footnote-ref"><a href="#fn2" id="fnref2">[2]</a></sup></p>
<hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="fn1" class="footnote-item"><p>Here is the footnote. <a href="#fnref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="fn2" class="footnote-item"><p>Here’s one with multiple blocks.</p>
<p>Subsequent paragraphs are indented to show that they
belong to the previous footnote. <a href="#fnref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>

</details>

<details><summary>deflist</summary><br>

markdown:

``` markdown
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

Term 1
    ~ Definition 1

  Term 2
    ~ Definition 2a
    ~ Definition 2b
```

HTML:

``` html
<dl>
<dt>Term 1</dt>
<dd>
<p>Definition 1</p>
</dd>
<dt>Term 2 with <em>inline markup</em></dt>
<dd>
<p>Definition 2</p>
<pre><code>  { some code, part of Definition 2 }
</code></pre>
<p>Third paragraph of definition 2.</p>
</dd>
<dt>Term 1</dt>
<dd>
<p>Definition 1</p>
</dd>
<dt>Term 2</dt>
<dd>
<p>Definition 2a</p>
</dd>
<dd>
<p>Definition 2b</p>
</dd>
</dl>
```

范例:

<dl>
<dt>Term 1</dt>
<dd>
<p>Definition 1</p>
</dd>
<dt>Term 2 with <em>inline markup</em></dt>
<dd>
<p>Definition 2</p>
<pre><code>  { some code, part of Definition 2 }
</code></pre>
<p>Third paragraph of definition 2.</p>
</dd>
<dt>Term 1</dt>
<dd>
<p>Definition 1</p>
</dd>
<dt>Term 2</dt>
<dd>
<p>Definition 2a</p>
</dd>
<dd>
<p>Definition 2b</p>
</dd>
</dl>

</details>

<details><summary>abbr</summary><br>

markdown:

``` markdown
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

HTML:

``` html
<p>The <abbr title="Hyper Text Markup Language">HTML</abbr> specification
is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>
```

范例:

<p>The <abbr title="Hyper Text Markup Language">HTML</abbr> specification
is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.</p>

</details>

<details><summary>emoji</summary><br>

markdown:

``` markdown
:) :(
```

HTML:

``` html
<p><img class="emoji" draggable="false" alt="😃" src="https://twemoji.maxcdn.com/2/72x72/1f603.png"/> <img class="emoji" draggable="false" alt="😦" src="https://twemoji.maxcdn.com/2/72x72/1f626.png"/></p>
```

范例:

<p><img class="emoji" draggable="false" alt="😃" src="https://twemoji.maxcdn.com/2/72x72/1f603.png"/> <img class="emoji" draggable="false" alt="😦" src="https://twemoji.maxcdn.com/2/72x72/1f626.png"/></p>

</details>

<details><summary>container</summary><br>

markdown:

``` markdown
::: warning
*here be dragons*
:::
```

HTML:

``` html
<div class="warning">
<em>here be dragons</em>
</div>
```

范例:

<div class="warning">
<em>here be dragons</em>
</div>

</details>

<details><summary>ins</summary><br>

markdown:

``` markdown
++inserted++
```

HTML:

``` html
<p><ins>inserted</ins></p>
```

范例:

<p><ins>inserted</ins></p>

</details>

<details><summary>mark</summary><br>

markdown:

``` markdown
==marked==
```

HTML:

``` html
<p><mark>marked</mark></p>
```

范例:

<p><mark>marked</mark></p>

</details>

<details><summary>anchor</summary><br>

markdown:

``` markdown
# 123
```

HTML:

``` html
<h1 id="123">123 <a class="header-anchor" href="#123" aria-hidden="true">¶</a></h1>
```

范例:

<h1 id="123">123 <a class="header-anchor" href="#123" aria-hidden="true">¶</a></h1>

</details>

<details><summary>highlight</summary><br>

详情见 [highlight.js](https://highlightjs.org/)

</details>

<details><summary>linkify</summary><br>

markdown:

``` markdown
https://github.com/EYHN/echo
```

HTML:

``` html
<p><a href="https://github.com/EYHN/echo">https://github.com/EYHN/echo</a></p>
```

范例:

<p><a href="https://github.com/EYHN/echo">https://github.com/EYHN/echo</a></p>

</details>

<details><summary>typographer</summary><br>

markdown:

``` markdown
(c) (C) (r) (R) (tm) (TM) (p) (P) +-
```

HTML:

``` html
<p>© © ® ® ™ ™ § § ±</p>
```

范例:

<p>© © ® ® ™ ™ § § ±</p>

</details>