# 123

H~2~0

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

29^th^

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.

[^longnote]: Here's one with multiple blocks.

    Subsequent paragraphs are indented to show that they
belong to the previous footnote.

Here is an inline note.^[Inlines notes are easier to write, since
    you don't have to pick an identifier and move down to type the
    note.]

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

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.

:) :(

::: warning
*here be dragons*
:::

++inserted++

==marked==

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

https://github.com/EYHN/echo

``` js
const HTML = echo.render(markdown);

fs.open('./out.html', 'w', (err, fd) => {
    // tslint:disable-next-line:no-console
    if (err) console.log(err);
    fs.write(fd, HTML, (error) => {
        // tslint:disable-next-line:no-console
        if (error) console.log(error);
        // tslint:disable-next-line:no-console
        console.log(HTML);
    });
});
```

*马猴烧酒^まほうしょうじょ*

*滑稽^zui qiang*