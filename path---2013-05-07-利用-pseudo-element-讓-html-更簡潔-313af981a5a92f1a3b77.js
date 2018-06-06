webpackJsonp([0x9fe0cd6ed51a],{351:function(e,n){e.exports={data:{site:{siteMetadata:{siteUrl:"https://code.kpman.cc",disqusShortname:"kpmancode"}},markdownRemark:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-05-07-利用-pseudo-element-讓-html-更簡潔.md absPath of file >>> MarkdownRemark",html:'<p>趁著記憶猶新的狀況，記錄自己使用偽元素 (pseudo-element)讓原本的 html 架構更加簡潔的方法。</p>\n<!-- more -->\n<h2 id="何謂-pseudo-element"><a href="#%E4%BD%95%E8%AC%82-pseudo-element" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>何謂 pseudo-element?</h2>\n<p>不會出現在 html 的文件裡面，而是利用 css 讓瀏覽器去實作。以下列出的都是可以使用的 pseudo-element。</p>\n<ol>\n<li>::first-line：若是 p 元素，則可以用來操作第一行。</li>\n<li>::first-letter：用來操作第一個字。</li>\n<li>::before：可以在所選元素之前插入樣式/內容。</li>\n<li>::after：同<code class="language-text">before</code>但是是在之後插入。</li>\n<li>::selection：用來自定反白後的效果。</li>\n</ol>\n<blockquote>\n<p>為了區分偽元素和偽類，CSS3 的 guildline 將偽元素的寫法修正，以往只要加一個冒號「:」，現在則是加兩個冒號「::」，部分可支援的瀏覽器包含 webkit, firefox, opera。)\n-- by <a href="http://www.mukispace.com/pseudo-elements-10-examples/">MUKI</a></p>\n</blockquote>\n<h2 id="修改過程"><a href="#%E4%BF%AE%E6%94%B9%E9%81%8E%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>修改過程</h2>\n<h3 id="原本的-html-code"><a href="#%E5%8E%9F%E6%9C%AC%E7%9A%84-html-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>原本的 html code</h3>\n<p>{% codeblock %}</p>\n<div class="icon">\n\t<img src="img/icon01.png" alt="正確觀念">\n\t<span>正確觀念</span>\n</div>\n{% endcodeblock %}\n<p>{% codeblock scss %}\n.icon{\ndisplay: inline-block;\nposition: relative;\npadding: 1em;\npadding-top: 5px;\nspan{\nposition: absolute;\nbottom: -7px;\nleft: 12px;\n}\n}\n{% endcodeblock %}</p>\n<p>原本利用 div > span 的效果去把中文字顯現出來，所以在 html 的架構下，需要多一個<code class="language-text">span</code>的 tag。<br>\n且利用<code class="language-text">img</code>去把圖片給 show 出來。</p>\n<h3 id="更改過後的-html-code"><a href="#%E6%9B%B4%E6%94%B9%E9%81%8E%E5%BE%8C%E7%9A%84-html-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更改過後的 html code</h3>\n<p>{% codeblock %}</p>\n<div data-text="正確觀念" class="concept_label icon"></div> <!-- html只剩一行！-->\n{% endcodeblock %}\n<p>{% codeblock scss %}\n.icon{\ndisplay: inline-block;\nposition: relative;\npadding: 1em;\npadding-top: 5px;</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&amp;:before{\n\tposition: absolute;\n\tbottom: -7px;\n\tleft: 12px;\n\tcontent: attr(data-text); &lt;!-- 關鍵作法 --&gt;\n}</code></pre>\n      </div>\n<p>}\n.concept<em>label{\nbackground-image: url(../img/icon01</em>c.png);\n}\n{% endcodeblock %}</p>\n<h3 id="觀念整理"><a href="#%E8%A7%80%E5%BF%B5%E6%95%B4%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>觀念整理</h3>\n<ol>\n<li>將中文字放入自訂的<code class="language-text">data-*</code>屬性</li>\n<li>CSS 中利用<code class="language-text">::before</code>取代原本的<code class="language-text">span</code></li>\n<li>利用<code class="language-text">content: attr(data-text);</code>將 date-text 文字取出來</li>\n<li>將背景圖片利用另外一個 class 取代，以後維護性提高。</li>\n</ol>\n<h3 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>reference</em></h3>\n<p><a href="http://www.mukispace.com/pseudo-elements-10-examples/">那些 CSS 偽元素可以幫你做的 10 個效果</a></p>',fields:{slug:"/2013/05/07/利用-pseudo-element-讓-html-更簡潔/"},frontmatter:{title:"利用pseudo element 讓html更簡潔",date:"May 07, 2013",tags:["code","css","html"]}}},pathContext:{slug:"/2013/05/07/利用-pseudo-element-讓-html-更簡潔/"}}}});
//# sourceMappingURL=path---2013-05-07-利用-pseudo-element-讓-html-更簡潔-313af981a5a92f1a3b77.js.map