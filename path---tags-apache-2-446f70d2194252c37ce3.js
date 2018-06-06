webpackJsonp([0xefdabec68f8f],{383:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-08-22-wordpress解決permalink固定網址問題.md absPath of file >>> MarkdownRemark",html:'<p>本 case 為希望主目錄可以直接連到 wordpress，但是 wordpress 是另外放在一個資料夾。</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">主目錄：/var/www\nwordpress資料夾：/var/www/blog</code></pre>\n      </div>\n<!-- more -->\n<h2 id="一、htaccess"><a href="#%E4%B8%80%E3%80%81htaccess" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、.htaccess</h2>\n<p>wordpress 會利用.htaccess 去更改固定連結，是位在根目錄，也就是<code class="language-text">/var/www</code>底下，wordpress 會根據你的<code class="language-text">網站位置URL</code>去設定.htaccess</p>\n<p>利用終端機產生.htaccess</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">vi .htaccess\nchmod 777 .htaccess</code></pre>\n      </div>\n<h2 id="二、進入後台設定固定網址-permalink"><a href="#%E4%BA%8C%E3%80%81%E9%80%B2%E5%85%A5%E5%BE%8C%E5%8F%B0%E8%A8%AD%E5%AE%9A%E5%9B%BA%E5%AE%9A%E7%B6%B2%E5%9D%80-permalink" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、進入後台設定固定網址 permalink</h2>\n<p>這邊我選擇文章名稱的格式</p>\n<p><img src="https://i.imgur.com/XlEgUdT.png" alt="固定網址"></p>\n<p>因為剛剛上面有設定.htaccess 權限打開到最大，因此進後台設定完，記得把 chmod 改為 644，要注意安全性。</p>\n<h2 id="三、設定-mod_write"><a href="#%E4%B8%89%E3%80%81%E8%A8%AD%E5%AE%9A-mod_write" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、設定 mod_write</h2>\n<p>我的 wordpress 是架在 Amazon EC2 上的 ubuntu，server 是 apache2，因此上網搜尋相關資料，解決辦法如下：</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">sudo a2enmod rewrite\nsudo /etc/init.d/apache2 restart</code></pre>\n      </div>\n<p>只要兩行就可以解決!</p>\n<h3 id="後記"><a href="#%E5%BE%8C%E8%A8%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><strong><em>後記</em></strong></h3>\n<p>在解決這個問題的時候，找了很多資料，一來是不明白.htacces 真正的目錄，二來是不知道 ubuntu 的 rewrite 要打開，因此在這邊記錄下來，讓有相同困擾的人可以了解。</p>',fields:{slug:"/2013/08/22/wordpress解決permalink固定網址問題/"},frontmatter:{title:"wordpress解決permalink固定網址問題",date:"Aug 22, 2013",tags:["wordpress","apache2","htaccess"]}}}]}},pathContext:{tag:"apache2"}}}});
//# sourceMappingURL=path---tags-apache-2-446f70d2194252c37ce3.js.map