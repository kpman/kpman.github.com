webpackJsonp([0xb9ff2d98899],{432:function(e,t){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2015-07-23-從Pocket-儲存全文到Evernote.md absPath of file >>> MarkdownRemark",html:'<p>Pocket 是一款可以稍候待讀的 app，其漂亮的介面和離線閱讀的功能，使我對於它愛不釋手。\n然而從英語語系出發的 Pocket 團隊，雖然在專業版提供全文檢索（full text search）的功能，但是在繁體中文上面還是略顯不足，常常找不到已經封存的文章內容，因此本篇記錄利用 Pocket 儲存到 Evernote 的過程。</p>\n<p><img src="http://i.imgur.com/g9vZzcB.png" alt="RSS to Evernote"></p>\n<!-- more -->\n<p>Pocket 的閱讀介面是它的一大優勢，而 Evernote 的搜尋功能是有目共睹的準確，我們將利用 IFTTT 這個自動化工具來實作「當我從 Pocket 封存項目後，自動儲存全文到 Evernote」。</p>\n<h2 id="0-ifttt-內建-pocket-問題所在"><a href="#0-ifttt-%E5%85%A7%E5%BB%BA-pocket-%E5%95%8F%E9%A1%8C%E6%89%80%E5%9C%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0. IFTTT 內建 Pocket 問題所在</h2>\n<p>有使用 <a href="https://ifttt.com">IFTTT</a> 的朋友應該知道說其實它有內建 Pocket 的選項，但是由於它提供的 Pocket 儲存只有所謂的 Excerpt 的功能，也就是只有部分的內容，並沒有辦法全文儲存到 Evernote 的 note 當中。</p>\n<p><img src="http://i.imgur.com/Q90mCAB.png" alt="ifttt pocket feature"></p>\n<p>因此我們的解決步驟為：</p>\n<ol>\n<li>建立 Pocket archive item 的 public full text RSS feed</li>\n<li>創建 RSS to Evernote 的 recipe</li>\n<li>問題解決</li>\n</ol>\n<p>未來就可以利用 Evernote 強大的搜尋功能來做到找到曾經閱讀封存的文章。</p>\n<h2 id="1-建立-pocket-的-full-text-rss-來源"><a href="#1-%E5%BB%BA%E7%AB%8B-pocket-%E7%9A%84-full-text-rss-%E4%BE%86%E6%BA%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 建立 Pocket 的 Full Text RSS 來源</h2>\n<ul>\n<li>首先到 <a href="https://getpocket.com/privacy_controls"><code class="language-text">Pocket &gt; Options &gt; Privacy</code></a> 把 RSS feed 設為 public</li>\n<li>點選 <code class="language-text">Archive feed</code> 取得 Pocket 帳戶底下封存項目的 RSS feed link，連結應該為 <code class="language-text">http://getpocket.com/users/&lt;你的帳號&gt;/feed/read</code></li>\n<li>到 <a href="http://fivefilters.org/content-only/"><code class="language-text">fivefilters</code></a> 建立 full text RSS，貼上你的 feed url 後，按下 Create feed</li>\n<li>把視窗連結記錄下來，這連結即為你的 full text RSS 來源</li>\n</ul>\n<h2 id="2-創建-rss-to-evernote-recipe"><a href="#2-%E5%89%B5%E5%BB%BA-rss-to-evernote-recipe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 創建 RSS to Evernote Recipe</h2>\n<ul>\n<li>根據此 <a href="https://ifttt.com/recipes/183722-save-full-text-of-new-pocket-item-to-evernote"><code class="language-text">recipe</code></a> 創建你自己的版本</li>\n<li>將上述的 full text RSS 連結貼上</li>\n<li>根據步驟創建你的 IFTTT recipe</li>\n</ul>\n<p>完成上述步驟後，即可在 Evernote 你所命名的筆記本內看到你在 pocket 所封存的項目囉。</p>\n<h2 id="使用心得"><a href="#%E4%BD%BF%E7%94%A8%E5%BF%83%E5%BE%97" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用心得</h2>\n<p>其實在 pocket mobile app 上面，有直接儲存到 Evernote 的選項，但我閱讀文章完如果值得存下來的，我習慣直接 archive 起來。\n實際使用這個 recipe 後，發現有一些網站的 full text RSS 抓的並不是很準確，速度也沒有很快，通常都要半個小時後才會在 Evernote 出現，但在網頁版並沒有存到 Evernote 的選項，在權衡下，我還是選擇使用此 recipe 來做為未來可以在 Evernote 搜尋的自動化工具。</p>\n<h3 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reference</h3>\n<p><a href="https://capeably.wordpress.com/2014/06/21/automate-full-text-of-pocket-backup-to-evernote-with-ifttt-and-fivefilters/">Automate Full Text of Pocket Backup to Evernote with IFTTT and FiveFilters</a></p>',fields:{slug:"/2015/07/23/從Pocket-儲存全文到Evernote/"},frontmatter:{title:"從 Pocket 儲存全文到 Evernote",date:"Jul 23, 2015",tags:["pocket","evernote","tool","ifttt"]}}}]}},pathContext:{tag:"tool"}}}});
//# sourceMappingURL=path---tags-tool-2edb1b32ba732987067a.js.map