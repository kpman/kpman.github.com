webpackJsonp([0x5c759ccc1112],{378:function(e,a){e.exports={data:{site:{siteMetadata:{title:"kpman | code",siteUrl:"https://code.kpman.cc",disqusShortname:"kpmancode"}},markdownRemark:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2015-09-12-從deploy-node-js-專案所學.md absPath of file >>> MarkdownRemark",html:'<p>學習 Node.js 已經兩年之餘，這段時間陸陸續續在開發上遇到一些問題（雷），然而隨著時間累積的叫做經驗，因此藉由此篇文章記錄從本機 development 環境到遠端 Linux 上的 production 所得到的經驗。</p>\n<p><img src="https://i.imgur.com/GtZ5ROB.jpg" alt="Deploy"></p>\n<!-- more -->\n<p>以下的 localhost 環境皆為 Mac 10.10，express.js，\n而 deploy 的環境皆為 Linux 14.04 環境。</p>\n<h2 id="1-環境變數"><a href="#1-%E7%92%B0%E5%A2%83%E8%AE%8A%E6%95%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 環境變數</h2>\n<p>NODE<em>ENV 是運行 Node.js 重要的變數，在本機開發的時候預設為 `NODE</em>ENV=development`。</p>\n<p>在執行 <code class="language-text">app.js</code> (aka <code class="language-text">bin/www</code>) 時，選擇需要的變數 (development || production)，若要運行為 production 環境指令為</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ NODE_ENV=production node bin/www</code></pre>\n      </div>\n<p>當然這個 <code class="language-text">NODE_ENV</code> 值可以直接 export 在你所運行的環境當中，</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">$ export NODE_ENV=production\n$ node bin/www</code></pre>\n      </div>\n<p>而若不想每次開啟 shell 都要重新 export 一次，可以將 export 指令寫進 <code class="language-text">~/.bashrc</code> 內，之後開啟 shell 就會設定 NODE_ENV=production 了！</p>\n<hr>\n<p>Q：那如何在 express.js 框架下的 app.js 拿到環境變數呢？\nA：只要利用 express 框架為我們做好的 API 如下：</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">// app.js\napp.get(&#39;env&#39;)</code></pre>\n      </div>\n<p>即可得到 <code class="language-text">NODE_ENV</code> 值。</p>\n<h2 id="2-config-檔設定"><a href="#2-config-%E6%AA%94%E8%A8%AD%E5%AE%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. config 檔設定</h2>\n<p>關於 config 檔的設定，每個人有不同的習慣，我介紹我常用的 config 檔設定方式。</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">// config.js\nvar config = {\n  development: {\n    port: 3000,\n    // anything else\n  },\n  production: {\n    port: 3001,\n    // anything else\n  }\n};\nmodule.exports = config;</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">// app.js\nvar config = require(&#39;./config.js&#39;)[app.get(&#39;env&#39;)];\nvar port = config.port // production mode will return 3001</code></pre>\n      </div>\n<p>這樣設定 config 檔後，未來就可以利用 NODE_ENV 的不同來判斷應該要連接的資料，例如在 dev DB 和 production DB 的分開等等情況。</p>\n<h2 id="3-ejs-樣板引擎快取問題"><a href="#3-ejs-%E6%A8%A3%E6%9D%BF%E5%BC%95%E6%93%8E%E5%BF%AB%E5%8F%96%E5%95%8F%E9%A1%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. ejs 樣板引擎快取問題</h2>\n<p>在樣板引擎方面我習慣 ejs，而 ejs 會在 <code class="language-text">production</code> 的狀態下把 view template 快取起來，加速 render 的時間，因此需要做 restart node server 的情況才可以解決快取問題。</p>\n<p>ps. 或許這個問題有其他更好解法，非常歡迎協助補充。</p>\n<h2 id="4-node-執行-js-檔"><a href="#4-node-%E5%9F%B7%E8%A1%8C-js-%E6%AA%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. node 執行 .js 檔</h2>\n<p>因為曾經撞過這些雷，單純就是經驗不足，以致於值得記錄一下 XD</p>\n<p>直接提供 debug 經驗談：</p>\n<ul>\n<li>chmod -x yourfile.js // 權限問題</li>\n<li>讀檔＆寫檔 // 請確定<code class="language-text">相對路徑</code>和<code class="language-text">絕對路徑</code>在環境的問題</li>\n<li>第一行請加上 <code class="language-text">#!/usr/bin/env node</code> // 讓環境找得到 node 去執行它</li>\n</ul>\n<h2 id="5-mongodb-的匯出和匯入"><a href="#5-mongodb-%E7%9A%84%E5%8C%AF%E5%87%BA%E5%92%8C%E5%8C%AF%E5%85%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5. MongoDB 的匯出和匯入</h2>\n<p>Q：在本機端匯出和匯入都好好的，不知道為什麼到遠端的環境就沒有辦法匯入？\nA：原因是語系問題，記得在 DB 匯入前先執行 export 或寫入 bashrc 檔</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">export LC_ALL=&quot;en_US.UTF-8&quot;</code></pre>\n      </div>\n<h2 id="後記"><a href="#%E5%BE%8C%E8%A8%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>後記</h2>\n<p>花時間經歷過的才會印象深刻，上述這幾點都是我利用時間所換來的，將此記錄在這邊，也希望能或多或少幫助到一些人：）</p>',fields:{slug:"/2015/09/12/從deploy-node-js-專案所學/"},frontmatter:{title:"從 deploy node.js 專案所學",date:"Sep 12, 2015",tags:["node.js","deploy","tips"]}}},pathContext:{slug:"/2015/09/12/從deploy-node-js-專案所學/"}}}});
//# sourceMappingURL=path---2015-09-12-從deploy-node-js-專案所學-5c92b12bc70e3cbfaa8d.js.map