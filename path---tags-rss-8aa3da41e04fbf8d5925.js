webpackJsonp([91508227932975],{430:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-05-08-在hexo自訂rss.md absPath of file >>> MarkdownRemark",html:'<p>趁著好朋友在旁邊的情況下，請教他學會了在 hexo 自訂 rss，再次感受到技術這種東西，真的是當面交流才會發揮他的效益。</p>\n<!-- more -->\n<h3 id="一、本機環境"><a href="#%E4%B8%80%E3%80%81%E6%9C%AC%E6%A9%9F%E7%92%B0%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、本機環境</h3>\n<p>在終端機下輸入以下</p>\n<p>{% codeblock %}\nnpm install hexo-generator-feed --save\n{% endcodeblock %}</p>\n<p>權限沒有取得的記得前面加上<code class="language-text">sudo</code>。</p>\n<h3 id="二、修改_configyml"><a href="#%E4%BA%8C%E3%80%81%E4%BF%AE%E6%94%B9_configyml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、修改_config.yml</h3>\n<p>在主目錄底下的<code class="language-text">_config.yml</code>檔加上</p>\n<p>{% codeblock %}\nplugins:</p>\n<ul>\n<li>hexo-generator-feed\n{% endcodeblock %}</li>\n</ul>\n<p><img src="https://i.imgur.com/w39zkK6.png" alt="modify _config.yml" title="modify _config.yml"></p>\n<p>如此一來便完成了環境設置。</p>\n<h3 id="三、要怎樣找到？"><a href="#%E4%B8%89%E3%80%81%E8%A6%81%E6%80%8E%E6%A8%A3%E6%89%BE%E5%88%B0%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、要怎樣找到？</h3>\n<p>在 hexo generate 之後，會發現 public 資料夾底下多了 atom.xml<br>\n在<a href="http://www.feedly.com/">feedly</a>這類的閱讀收集器<br>\n只要輸入<code class="language-text">domain/atom</code>就可以找到<br>\n例如要訂閱我的 blog 只要輸入<code class="language-text">code.kpman.cc/atom</code>就可以搜尋到囉！</p>\n<p><img src="https://i.imgur.com/Hk12y1N.png" alt="rss" title="feedly rss search"></p>\n<p>突然發現我的 blog 只有一個人訂閱，那個人就是我自己...</p>\n<h3 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>reference</em></h3>\n<ol>\n<li><a href="https://github.com/tommy351/hexo/wiki/Plugins">hexo plugins</a></li>\n<li><a href="http://michaelhsu.tw/2013/05/05/rssatom-sitemap-for-seo/">RSS/Atom、Sitemap for SEO</a></li>\n</ol>\n<p>感謝強者阿志耐心面授機宜:)</p>',fields:{slug:"/2013/05/08/在hexo自訂rss/"},frontmatter:{title:"在hexo自訂rss",date:"May 08, 2013",tags:["rss","hexo"]}}}]}},pathContext:{tag:"rss"}}}});
//# sourceMappingURL=path---tags-rss-8aa3da41e04fbf8d5925.js.map