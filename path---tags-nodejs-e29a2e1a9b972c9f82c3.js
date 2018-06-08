webpackJsonp([45154319480143],{425:function(n,a){n.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2016-05-17-node-js-爬-Facebook-留言版.md absPath of file >>> MarkdownRemark",html:'<p>聽到網路爬蟲，有很多專案都是建立在 python 上面，在文字處理分析上， python 有很強大的套件可以使用，然而隨著 node.js 的發展越來越廣泛，也有許多因應的套件產生，今天將會介紹利用 FB 提供的 Graph API 來爬留言版。</p>\n<p><img src="https://i.imgur.com/2Qckxbc.jpg" alt="Facebook Comment Plugin"></p>\n<!-- more -->\n<p>本文並非會有教學範例檔，僅會針對 FB 提供的 Graph API 做簡單的範例。\n此處的範例會利用 ES6 的 <code class="language-text">template strings</code> 語法。</p>\n<h2 id="1-了解-fb-留言版架構"><a href="#1-%E4%BA%86%E8%A7%A3-fb-%E7%95%99%E8%A8%80%E7%89%88%E6%9E%B6%E6%A7%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 了解 FB 留言版架構</h2>\n<p>最近 FB 推出了可以回覆他人的功能，因此留言有可能會有巢狀情形，但可以觀察到的是，目前 FB 的機制就是至多一層的回覆。因此簡單的架構如下：</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">comment 1\n  - reply_comment 1\n  - reply_comment 2\ncomment 2\n  - reply_comment 1\n  _ reply_comment 2\n...\n...</code></pre>\n      </div>\n<h2 id="2-確定該網址的留言數"><a href="#2-%E7%A2%BA%E5%AE%9A%E8%A9%B2%E7%B6%B2%E5%9D%80%E7%9A%84%E7%95%99%E8%A8%80%E6%95%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 確定該網址的留言數</h2>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token template-string"><span class="token string">`http://graph.facebook.com/?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token constant">GET</span> <span class="token string">\'http://graph.facebook.com/?id=http://www.google.com\'</span>\n<span class="token punctuation">{</span>\n  id<span class="token punctuation">:</span> <span class="token string">"http://www.google.com"</span><span class="token punctuation">,</span>\n  shares<span class="token punctuation">:</span> <span class="token number">31205003</span><span class="token punctuation">,</span>\n  comments<span class="token punctuation">:</span> <span class="token number">1323</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>因此可以知道 www.google.com 在 FB Graph API 有 1323 筆留言數。</p>\n<h2 id="3-利用-graph-api-拿第一層留言"><a href="#3-%E5%88%A9%E7%94%A8-graph-api-%E6%8B%BF%E7%AC%AC%E4%B8%80%E5%B1%A4%E7%95%99%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. 利用 Graph API 拿第一層留言</h2>\n<p>Graph API 在留言版其實是公開，只要給定 URL 就可以拿到該網址的留言，\n這邊要注意的是需要確定該 URL 是 OG:URL 的參數給 FB 才拿的到。</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token template-string"><span class="token string">`http://graph.facebook.com/comments?id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;limit=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comments<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;filter=stream`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>底下是 return sample json</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">{</span>\n  created_time<span class="token punctuation">:</span> <span class="token string">"2012-04-16T12:45:03+0000"</span><span class="token punctuation">,</span>\n  <span class="token keyword">from</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">"Sunil Maheshwari"</span><span class="token punctuation">,</span>\n    id<span class="token punctuation">:</span> <span class="token string">"100000525493028"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  message<span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">,</span>\n  can_remove<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  like_count<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  user_likes<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  id<span class="token punctuation">:</span> <span class="token string">"381702034999_21746175"</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>若此處沒有加上 <code class="language-text">&amp;limit</code> 的話，會拿到比較少的數量。\n加上 <code class="language-text">&amp;filter=stream</code> 參數，則會一併將回覆狀態的留言拿回來。\n因為在此記錄部落格使用，在實作上並不會加上 <code class="language-text">&amp;filter=stream</code> 這個參數，以免拿第二層的時候重複還需要做額外處理。</p>\n<h2 id="4-拿-graph-api-第二層留言"><a href="#4-%E6%8B%BF-graph-api-%E7%AC%AC%E4%BA%8C%E5%B1%A4%E7%95%99%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. 拿 Graph API 第二層留言</h2>\n<p>在拿第一層的時候，因為是 public API 狀態，因此不需要 token，且網址利用 http 就可以。\n但在拿第二層留言，就需要 https + access_token 狀態。</p>\n<p>最簡單取得 access<em>token 方式是到 <a href="https://developers.facebook.com/tools/explorer/">FB graph explorer</a> 申請 access</em>token 來實作。</p>\n<p>接著需要串接的 API 格式為：</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token template-string"><span class="token string">`https://graph.facebook.com/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/comments?access_token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>上述 id 就是第一層拿回來的 json 格式內的 id，\ntoken 則是 access_token。</p>\n<p>在實作上因為無法透過第一層的 API 得到是否有無第二層留言，因此若要完整的拿取全部的留言，則需要將全部的 id 跑過一次才可以得到完整的結果。</p>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reference</h2>\n<ul>\n<li><a href="http://www.oneminuteinfo.com/2015/06/use-api-to-get-fb-comments-plugin-posts.html">Using Facebook Graph API To Crawl Comments from a Facebook Comments Plugin</a></li>\n<li><a href="https://developers.facebook.com/tools/explorer/">FB graph explorer</a></li>\n</ul>',fields:{slug:"/2016/05/17/node-js-爬-Facebook-留言版/"},frontmatter:{title:"node.js 爬 Facebook 留言版",date:"May 17, 2016",tags:["nodejs","api","facebook","parser"]}}},{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2014-09-23-nginx-移除-html-附檔名.md absPath of file >>> MarkdownRemark",html:'<p>Nginx 是一套輕量化的 web server，因為它的輕量、高效能而越來越多人喜歡使用它來做為網頁伺服器或是反向代理伺服器，本篇將介紹靜態網頁在 nginx 上移除.html 附檔名的作法。</p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="Nginx"></p>\n<!-- more -->\n<h3 id="一、start"><a href="#%E4%B8%80%E3%80%81start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、Start</h3>\n<p>本篇要做 nginx 這套 web server 的設定檔更改，來達到雖然存取靜態頁面，卻可以利用 mydomain.com/user 的 URL 來拿到所要的靜態頁面。</p>\n<blockquote>\n<p>其實是我單純是因為不想要看到.html 這樣的附檔名，這看起來不專業！</p>\n</blockquote>\n<p><em>本篇環境為 ubuntu14.04 下執行。</em></p>\n<h3 id="二、static-file-permission"><a href="#%E4%BA%8C%E3%80%81static-file-permission" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、Static file permission</h3>\n<p>在 nginx 下，你要將靜態檔案放在 server 哪邊都可以，在此我根據之前 apache 習慣的設定，放在/var/www</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">cd /var\nsudo mkdir www\nsudo chown -R www-data:www-data /var/www/mydomain.com\nsudo chmod 755 /var/www</code></pre>\n      </div>\n<p>如此一來你便可以將整個靜態網站檔案放在/var/www/mydomain.com 目錄底下。</p>\n<h3 id="三、nginx-conf-setting"><a href="#%E4%B8%89%E3%80%81nginx-conf-setting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、Nginx conf setting</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">cd /etc/nginx/sites-enabled\nsudo vim mydomain.com</code></pre>\n      </div>\n<p>修改底下內容為你要的設定</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">server {\n  listen        80;\n  root          /var/www/mydomain;\n  index         index.html index.htm;\n  server_name   mydomain;\n  location / {\n    try_files $uri $uri/ $uri.html;\n  }\n}</code></pre>\n      </div>\n<p>此設定將會當抓到$uri 時，nginx 會自動帶入<code class="language-text">$uri/</code>或是<code class="language-text">$uri.html</code>\n因此我們送出<code class="language-text">mydomain.com/user</code>，nginx 會試著搜尋<code class="language-text">mydomain.com/user/</code>或<code class="language-text">mydomain.com/user.html</code>。</p>\n<h3 id="四、remove-default-conf"><a href="#%E5%9B%9B%E3%80%81remove-default-conf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、Remove default conf</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">sudo rm /etc/nginx/sites-enabled/default</code></pre>\n      </div>\n<p>在我設定的時候，需把 default 刪除後，才可以正常的讀取到新設定的 mydomain.com 檔，歡迎各位先進補充這點。</p>\n<h3 id="五、restart-nginx"><a href="#%E4%BA%94%E3%80%81restart-nginx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>五、Restart Nginx</h3>\n<p><code class="language-text">/etc/init.d/nginx restart</code> || <code class="language-text">sudo service nginx restart</code></p>\n<p>如此一來你便可以利用<code class="language-text">mydomain.com/user</code>純取到相關的靜態頁面了！</p>\n<p><strong>reference</strong></p>\n<p><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-virtual-hosts-server-blocks-on-ubuntu-12-04-lts--3">How To Set Up nginx Virtual Hosts (Server Blocks) on Ubuntu 12.04 LTS</a></p>',fields:{slug:"/2014/09/23/nginx-移除-html-附檔名/"},frontmatter:{title:"Nginx remove .html filename",date:"Sep 23, 2014",tags:["nodejs","nginx","static file","server"]}}},{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2014-04-11-nginx-with-nodejs-in-different-port.md absPath of file >>> MarkdownRemark",html:'<p>Nginx 因為它的輕量、高效能而越來越多人喜歡使用它來做為網頁伺服器或是反向代理伺服器。</p>\n<p>由於近期想要把不同的 node.js 程式放在同一個 server，因此開始研究 nginx 用法，記錄下來我的實作方式。</p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="Nginx"></p>\n<!-- more -->\n<h3 id="一、domain-指向主機"><a href="#%E4%B8%80%E3%80%81domain-%E6%8C%87%E5%90%91%E4%B8%BB%E6%A9%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、Domain 指向主機</h3>\n<p>將不同的 domain 都指向你的主機 ip，此時都會指向 HTTP 預設的 80 port，後面再用 nginx 設定由不同的 port 去處理不同的 node.js 程式。</p>\n<h3 id="二、安裝-nginx-in-ubuntu"><a href="#%E4%BA%8C%E3%80%81%E5%AE%89%E8%A3%9D-nginx-in-ubuntu" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、安裝 Nginx in Ubuntu</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">sudo apt-get update\nsudo apt-get upgrade // 確定抓到套件\nsudo apt-get install nginx\nsudo service nginx start</code></pre>\n      </div>\n<p>在安裝的時候，記得你如果有其他 server 在 run 必須要停掉，不然佔住 80 port 是沒有辦法裝成功 nginx 的。</p>\n<h3 id="三、將-nodejs-設定不同-port"><a href="#%E4%B8%89%E3%80%81%E5%B0%87-nodejs-%E8%A8%AD%E5%AE%9A%E4%B8%8D%E5%90%8C-port" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、將 Node.js 設定不同 port</h3>\n<p>會寫 node.js 應該會將 port listen 在不同的 port，注意不要用常用的那些 port 即可。例如：80(HTTP)、22(SSH)。</p>\n<h3 id="四、設定-nginx-資料夾檔案"><a href="#%E5%9B%9B%E3%80%81%E8%A8%AD%E5%AE%9A-nginx-%E8%B3%87%E6%96%99%E5%A4%BE%E6%AA%94%E6%A1%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、設定 Nginx 資料夾檔案</h3>\n<p>進到<code class="language-text">/etc/nginx/sites-enabled</code>，然後創建跟你 domain 一樣的檔案，記得權限要用<code class="language-text">sudo</code>去創</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">sudo vim domain1.com</code></pre>\n      </div>\n<p>檔案內容</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">server {\n    listen 80;\n    server_name domain1.com;\n    access_log /var/log/nginx/domain1.access.log;\n    location / {\n        proxy_pass    http://127.0.0.1:4000/;\n    }\n}</code></pre>\n      </div>\n<p>同理創建 domain2.com，記得 4000 port 要改成你設定的 port。</p>\n<h3 id="五、重啟-nginx"><a href="#%E4%BA%94%E3%80%81%E9%87%8D%E5%95%9F-nginx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>五、重啟 Nginx</h3>\n<p><code class="language-text">/etc/init.d/nginx restart</code></p>\n<p>記得做過更動後，要重新啟動 nginx 才有用。\n如此一來，不同的 domain 就可以連到同一台 server 的不同支 node.js 去執行了。</p>\n<p><strong>reference</strong></p>\n<p><a href="http://stackoverflow.com/questions/5009324/node-js-nginx-and-now/5015178#5015178">node.js + nginx - And now?</a>\n<a href="http://zh.wikipedia.org/wiki/Nginx">wikipedia nginx</a></p>',fields:{slug:"/2014/04/11/nginx-with-nodejs-in-different-port/"},frontmatter:{title:"Nginx with Node.js in different port",date:"Apr 11, 2014",tags:["nodejs","nginx","server"]}}}]}},pathContext:{tag:"nodejs"}}}});
//# sourceMappingURL=path---tags-nodejs-e29a2e1a9b972c9f82c3.js.map