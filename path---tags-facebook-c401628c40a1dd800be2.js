webpackJsonp([0xf35efc6e0698],{408:function(n,a){n.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2016-05-17-node-js-爬-Facebook-留言版.md absPath of file >>> MarkdownRemark",html:'<p>聽到網路爬蟲，有很多專案都是建立在 python 上面，在文字處理分析上， python 有很強大的套件可以使用，然而隨著 node.js 的發展越來越廣泛，也有許多因應的套件產生，今天將會介紹利用 FB 提供的 Graph API 來爬留言版。</p>\n<p><img src="https://i.imgur.com/2Qckxbc.jpg" alt="Facebook Comment Plugin"></p>\n<!-- more -->\n<p>本文並非會有教學範例檔，僅會針對 FB 提供的 Graph API 做簡單的範例。\n此處的範例會利用 ES6 的 <code class="language-text">template strings</code> 語法。</p>\n<h2 id="1-了解-fb-留言版架構"><a href="#1-%E4%BA%86%E8%A7%A3-fb-%E7%95%99%E8%A8%80%E7%89%88%E6%9E%B6%E6%A7%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 了解 FB 留言版架構</h2>\n<p>最近 FB 推出了可以回覆他人的功能，因此留言有可能會有巢狀情形，但可以觀察到的是，目前 FB 的機制就是至多一層的回覆。因此簡單的架構如下：</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">comment 1\n  - reply_comment 1\n  - reply_comment 2\ncomment 2\n  - reply_comment 1\n  _ reply_comment 2\n...\n...</code></pre>\n      </div>\n<h2 id="2-確定該網址的留言數"><a href="#2-%E7%A2%BA%E5%AE%9A%E8%A9%B2%E7%B6%B2%E5%9D%80%E7%9A%84%E7%95%99%E8%A8%80%E6%95%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 確定該網址的留言數</h2>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token template-string"><span class="token string">`http://graph.facebook.com/?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token constant">GET</span> <span class="token string">\'http://graph.facebook.com/?id=http://www.google.com\'</span>\n<span class="token punctuation">{</span>\n  id<span class="token punctuation">:</span> <span class="token string">"http://www.google.com"</span><span class="token punctuation">,</span>\n  shares<span class="token punctuation">:</span> <span class="token number">31205003</span><span class="token punctuation">,</span>\n  comments<span class="token punctuation">:</span> <span class="token number">1323</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>因此可以知道 www.google.com 在 FB Graph API 有 1323 筆留言數。</p>\n<h2 id="3-利用-graph-api-拿第一層留言"><a href="#3-%E5%88%A9%E7%94%A8-graph-api-%E6%8B%BF%E7%AC%AC%E4%B8%80%E5%B1%A4%E7%95%99%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 利用 Graph API 拿第一層留言</h2>\n<p>Graph API 在留言版其實是公開，只要給定 URL 就可以拿到該網址的留言，\n這邊要注意的是需要確定該 URL 是 OG:URL 的參數給 FB 才拿的到。</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token template-string"><span class="token string">`http://graph.facebook.com/comments?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;limit=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comments<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;filter=stream`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>底下是 return sample json</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n  created_time<span class="token punctuation">:</span> <span class="token string">"2012-04-16T12:45:03+0000"</span><span class="token punctuation">,</span>\n  <span class="token keyword">from</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">"Sunil Maheshwari"</span><span class="token punctuation">,</span>\n    id<span class="token punctuation">:</span> <span class="token string">"100000525493028"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  message<span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>\n  can_remove<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  like_count<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  user_likes<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">"381702034999_21746175"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>若此處沒有加上 <code class="language-text">&amp;limit</code> 的話，會拿到比較少的數量。\n加上 <code class="language-text">&amp;filter=stream</code> 參數，則會一併將回覆狀態的留言拿回來。\n因為在此記錄部落格使用，在實作上並不會加上 <code class="language-text">&amp;filter=stream</code> 這個參數，以免拿第二層的時候重複還需要做額外處理。</p>\n<h2 id="4-拿-graph-api-第二層留言"><a href="#4-%E6%8B%BF-graph-api-%E7%AC%AC%E4%BA%8C%E5%B1%A4%E7%95%99%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 拿 Graph API 第二層留言</h2>\n<p>在拿第一層的時候，因為是 public API 狀態，因此不需要 token，且網址利用 http 就可以。\n但在拿第二層留言，就需要 https + access_token 狀態。</p>\n<p>最簡單取得 access<em>token 方式是到 <a href="https://developers.facebook.com/tools/explorer/">FB graph explorer</a> 申請 access</em>token 來實作。</p>\n<p>接著需要串接的 API 格式為：</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token template-string"><span class="token string">`https://graph.facebook.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/comments?access_token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>上述 id 就是第一層拿回來的 json 格式內的 id，\ntoken 則是 access_token。</p>\n<p>在實作上因為無法透過第一層的 API 得到是否有無第二層留言，因此若要完整的拿取全部的留言，則需要將全部的 id 跑過一次才可以得到完整的結果。</p>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reference</h2>\n<ul>\n<li><a href="http://www.oneminuteinfo.com/2015/06/use-api-to-get-fb-comments-plugin-posts.html">Using Facebook Graph API To Crawl Comments from a Facebook Comments Plugin</a></li>\n<li><a href="https://developers.facebook.com/tools/explorer/">FB graph explorer</a></li>\n</ul>',fields:{slug:"/2016/05/17/node-js-爬-Facebook-留言版/"},frontmatter:{title:"node.js 爬 Facebook 留言版",date:"May 17, 2016",tags:["nodejs","api","facebook","parser"]}}}]}},pathContext:{tag:"facebook"}}}});
//# sourceMappingURL=path---tags-facebook-c401628c40a1dd800be2.js.map