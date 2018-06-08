webpackJsonp([73561874950329],{372:function(e,a){e.exports={data:{site:{siteMetadata:{title:"kpman | code",siteUrl:"https://code.kpman.cc",disqusShortname:"kpmancode"}},markdownRemark:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2014-09-23-nginx-移除-html-附檔名.md absPath of file >>> MarkdownRemark",html:'<p>Nginx 是一套輕量化的 web server，因為它的輕量、高效能而越來越多人喜歡使用它來做為網頁伺服器或是反向代理伺服器，本篇將介紹靜態網頁在 nginx 上移除.html 附檔名的作法。</p>\n<p><img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" alt="Nginx"></p>\n<!-- more -->\n<h3 id="一、start"><a href="#%E4%B8%80%E3%80%81start" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、Start</h3>\n<p>本篇要做 nginx 這套 web server 的設定檔更改，來達到雖然存取靜態頁面，卻可以利用 mydomain.com/user 的 URL 來拿到所要的靜態頁面。</p>\n<blockquote>\n<p>其實是我單純是因為不想要看到.html 這樣的附檔名，這看起來不專業！</p>\n</blockquote>\n<p><em>本篇環境為 ubuntu14.04 下執行。</em></p>\n<h3 id="二、static-file-permission"><a href="#%E4%BA%8C%E3%80%81static-file-permission" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、Static file permission</h3>\n<p>在 nginx 下，你要將靜態檔案放在 server 哪邊都可以，在此我根據之前 apache 習慣的設定，放在/var/www</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">cd /var\nsudo mkdir www\nsudo chown -R www-data:www-data /var/www/mydomain.com\nsudo chmod 755 /var/www</code></pre>\n      </div>\n<p>如此一來你便可以將整個靜態網站檔案放在/var/www/mydomain.com 目錄底下。</p>\n<h3 id="三、nginx-conf-setting"><a href="#%E4%B8%89%E3%80%81nginx-conf-setting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、Nginx conf setting</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">cd /etc/nginx/sites-enabled\nsudo vim mydomain.com</code></pre>\n      </div>\n<p>修改底下內容為你要的設定</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">server {\n  listen        80;\n  root          /var/www/mydomain;\n  index         index.html index.htm;\n  server_name   mydomain;\n  location / {\n    try_files $uri $uri/ $uri.html;\n  }\n}</code></pre>\n      </div>\n<p>此設定將會當抓到$uri 時，nginx 會自動帶入<code class="language-text">$uri/</code>或是<code class="language-text">$uri.html</code>\n因此我們送出<code class="language-text">mydomain.com/user</code>，nginx 會試著搜尋<code class="language-text">mydomain.com/user/</code>或<code class="language-text">mydomain.com/user.html</code>。</p>\n<h3 id="四、remove-default-conf"><a href="#%E5%9B%9B%E3%80%81remove-default-conf" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、Remove default conf</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">sudo rm /etc/nginx/sites-enabled/default</code></pre>\n      </div>\n<p>在我設定的時候，需把 default 刪除後，才可以正常的讀取到新設定的 mydomain.com 檔，歡迎各位先進補充這點。</p>\n<h3 id="五、restart-nginx"><a href="#%E4%BA%94%E3%80%81restart-nginx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>五、Restart Nginx</h3>\n<p><code class="language-text">/etc/init.d/nginx restart</code> || <code class="language-text">sudo service nginx restart</code></p>\n<p>如此一來你便可以利用<code class="language-text">mydomain.com/user</code>純取到相關的靜態頁面了！</p>\n<p><strong>reference</strong></p>\n<p><a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-virtual-hosts-server-blocks-on-ubuntu-12-04-lts--3">How To Set Up nginx Virtual Hosts (Server Blocks) on Ubuntu 12.04 LTS</a></p>',fields:{slug:"/2014/09/23/nginx-移除-html-附檔名/"},frontmatter:{title:"Nginx remove .html filename",date:"Sep 23, 2014",tags:["nodejs","nginx","static file","server"]}}},pathContext:{slug:"/2014/09/23/nginx-移除-html-附檔名/"}}}});
//# sourceMappingURL=path---2014-09-23-nginx-移除-html-附檔名-f271f376a27d0edd5d46.js.map