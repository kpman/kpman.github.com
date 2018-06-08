webpackJsonp([0xed28d567e2ba],{400:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2017-07-03-利用-Hub-來自動發-GitHub-PR.md absPath of file >>> MarkdownRemark",html:'<h2 id="起源"><a href="#%E8%B5%B7%E6%BA%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>起源</h2>\n<p>因為工作和平時習慣的 Git 協作平台是 GitHub，因此常常發 pull request (以下簡稱 PR) 到 GitHub 上面，而這個流程對我來說不太順手，因此便想要利用更自動化的方式來做掉。</p>\n<p><img src="http://i.imgur.com/jEBYSRO.png"></p>\n<!-- more -->\n<h2 id="舊有流程"><a href="#%E8%88%8A%E6%9C%89%E6%B5%81%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>舊有流程</h2>\n<p>一般來說發 GitHub 的 PR 流程如下：</p>\n<ol>\n<li>在 local commit</li>\n<li>推 local branch 到 remote 上面</li>\n<li>打開 GitHub 網站</li>\n<li>進到你的 repo 頁面</li>\n<li>點開 PR 按鈕</li>\n<li>編輯 PR title</li>\n<li>按下按鈕確認發 PR</li>\n</ol>\n<p>這樣的流程除了需要在瀏覽器 和 terminal 間切換外，最麻煩的是需要操作滑鼠多點好幾下，整個流程會將思緒打斷。</p>\n<h2 id="hub"><a href="#hub" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hub</h2>\n<p>這是一套 GitHub 官方所維護的套件，用來加強原生 git 的功能，而這個套件剛好提供了\n<code class="language-text">$ hub pull-request</code> 的功能，可以在該 local branch 發 PR。</p>\n<p>使用 Hub 套件發 PR 流程如下：</p>\n<ol>\n<li>在 local commit</li>\n<li>推 local branch 到 remote 上面</li>\n<li>$ hub pull-request</li>\n<li>進入 vim 模式</li>\n<li>編輯 vim</li>\n<li>編輯完後需要存檔離開 vim ，Hub 才會自動發 PR</li>\n</ol>\n<p>使用 Hub 後流程已改善，把在瀏覽器上的操作帶回到 terminal，但整體使用卻依舊不便，因此我便思考能不能一鍵發 PR 到 GitHub 上面，而最後找到了下面這個解決方案，雖非最完善，但方便不少。</p>\n<h2 id="一鍵自動化流程"><a href="#%E4%B8%80%E9%8D%B5%E8%87%AA%E5%8B%95%E5%8C%96%E6%B5%81%E7%A8%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一鍵自動化流程</h2>\n<h3 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h3>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">$ vim ~/.oh-my-zsh/lib/aliases.zsh (in my case)\nalias pr=&#39;hub pull-request -m &quot;$(git reflog -1 | sed &#39;\\&#39;&#39;s/^.*: //&#39;\\&#39;&#39;)&quot; | xargs open&#39;\n$ source ~/.zshrc (in my case)</code></pre>\n      </div>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>usage</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">1. local commit\n2. git push origin &lt;branch-name&gt; &amp;&amp; pr</code></pre>\n      </div>\n<p>藉由 Hub 的 pull-request 加上自己所寫的 alias，\n此 alias 會將 commit message 的第一行拿出來自動當做 PR title，\n且會自動打開瀏覽器，可以再度進行檢視或做最後的修正。</p>\n<h2 id="結論"><a href="#%E7%B5%90%E8%AB%96" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>結論</h2>\n<p>能夠利用小技巧將繁瑣重複的事情給自動化，是每個人都很樂見的，在此分享，希望能幫助到可能也需要的你。</p>',fields:{slug:"/2017/07/03/利用-Hub-來自動發-GitHub-PR/"},frontmatter:{title:"利用 Hub 來自動發 GitHub PR",date:"Jul 03, 2017",tags:["github"]}}},{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-05-18-建立自己的github-project-pages.md absPath of file >>> MarkdownRemark",html:'<p>在 GitHub 使用上，我算是初新者，有疑問才有進步。每當看到有人把好玩的東西放到 GitHub 上面變成靜態頁面，都會很想知道他是怎樣辦到的。結果不難，就是利用 GitHub Pages 來做到。</p>\n<!-- more -->\n<h2 id="github-pages-介紹"><a href="#github-pages-%E4%BB%8B%E7%B4%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GitHub Pages 介紹</h2>\n<p>當你要有一個自己的 GitHub Pages，其實分成兩項。</p>\n<ol>\n<li>repo 的名字為<code class="language-text">yourname.github.com</code>，則會產生的 page 路徑為 <code class="language-text">yourname.github.io</code>。<a href="http://kpman.github.io">本部落格</a>是建立在 github 上面，就是利用這一個 GitHub Pages 模式去建立，可以參考<a href="http://code.kpman.cc/2013/04/26/hexo%E6%9E%B6blog%E5%88%9D%E9%AB%94%E9%A9%97/">hexo 架 blog 初體驗</a>、<a href="http://code.kpman.cc/2013/04/27/%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1blog%E7%9A%84subdomain/">建立自己 blog 的 subdomain</a>這兩篇文章。</li>\n<li>repo 的名字為<code class="language-text">repo-name</code>，則會產生的 page 路徑為 <code class="language-text">yourname.github.io/repo-name</code>，這邊的 repo name 就不像第一種模式，沒有固定名稱。</li>\n</ol>\n<h2 id="github-pages-建立"><a href="#github-pages-%E5%BB%BA%E7%AB%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>GitHub Pages 建立</h2>\n<p>在每一個新的 repo 下面，正常的情況都是在 mater 這一個 branch。分享一下我自己的作法。</p>\n<ol>\n<li>GitHub 頁面上建立一個新的 repo，這邊我取名為 first-repo。</li>\n</ol>\n<p><img src="http://i.imgur.com/6mFqQlc.png" alt="create new repo" title="new repo"></p>\n<ol start="2">\n<li>從本機端 clone 下來，參照自己的路徑，我的 repo 則是在 command line 底下打</li>\n</ol>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">git clone git@github.com:kpman/first-repo.git</code></pre>\n      </div>\n<ol start="3">\n<li>移到該資料夾</li>\n</ol>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">cd first-repo</code></pre>\n      </div>\n<ol start="4">\n<li>將 branch 移到<code class="language-text">gh-pages</code>，這步驟很重要，Github Pages 就是看這一個 branch 去決定頁面的。</li>\n</ol>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">git branch gh-pages\ngit checkout gh-pages</code></pre>\n      </div>\n<p>或者</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">git checkout --orphan gh-pages //建立一個沒有parent的branch，並移到該branch上</code></pre>\n      </div>\n<ol start="5">\n<li>將編輯好的檔案 push 上去。</li>\n</ol>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">git add .\ngit commit\ngit push origin gh-pages</code></pre>\n      </div>\n<ol start="6">\n<li>完成！</li>\n</ol>\n<h2 id="路徑差異"><a href="#%E8%B7%AF%E5%BE%91%E5%B7%AE%E7%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>路徑差異</h2>\n<p><a href="http://github.com/kpman/liteAccordion">http://github.com/kpman/liteAccordion</a>這樣代表連回 GitHub 的 code 頁面<br>\n<a href="http://kpman.github.io/liteAccordion">http://kpman.github.io/liteAccordion</a>因為新增到<code class="language-text">gh-pages</code>這一個 branch，所以可以看到靜態的 html 展示頁面。</p>\n<p>其他範例<br>\n<a href="http://jonobr1.github.io/two.js/">two.js</a><br>\n<a href="http://jschr.github.io/textillate/">textillate</a></p>\n<h3 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>reference</em></h3>\n<ol>\n<li><a href="https://help.github.com/articles/creating-project-pages-manually">官方文件</a></li>\n<li><a href="http://xlson.com/2010/11/09/getting-started-with-github-pages.html">Getting started with GitHub Pages</a></li>\n<li><a href="https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches">Create a new branch with git and manage branches</a></li>\n</ol>',fields:{slug:"/2013/05/18/建立自己的github-project-pages/"},frontmatter:{title:"建立自己的GitHub Project Pages",date:"May 18, 2013",tags:["github"]}}},{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-04-26-hexo架blog初體驗.md absPath of file >>> MarkdownRemark",html:'<p>是這樣的，一直想要找一個空間，可以清爽的放 code，可以跟其他人交流<br>\n有鑑於系上好朋友們紛紛都建立起自己的部落格，因此我也加入了這個行列。</p>\n<p>報著取之於人，回饋之於人的心情，我想要把自己從無到有架設這一個 blog 的過程記錄下來<br>\n謝謝那些願意指導我的朋友們！</p>\n<!-- more -->\n<h2 id="一、本機環境設定"><a href="#%E4%B8%80%E3%80%81%E6%9C%AC%E6%A9%9F%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、本機環境設定</h2>\n<ol>\n<li>\n<p>首先你要有 node.js，這是一套快速、簡單且功能強大的 Node.js 網誌框架。</p>\n</li>\n<li>\n<p>接著你要用 <code class="language-text">npm install -g hexo</code> 來安裝</p>\n</li>\n</ol>\n<p>理論上這樣就完成了，我個人在裝的時候 npm 不給裝，發現前面加上 <code class="language-text">sudo</code> 就可以解決。</p>\n<h2 id="二、github-帳號設定"><a href="#%E4%BA%8C%E3%80%81github-%E5%B8%B3%E8%99%9F%E8%A8%AD%E5%AE%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、github 帳號設定</h2>\n<ol>\n<li>\n<p>你要申請一個自己的 github 帳號</p>\n</li>\n<li>\n<p>在主頁右上方創建一個新的 repo</p>\n<p><img src="http://i.imgur.com/6mFqQlc.png" alt="create new repo" title="new repo"></p>\n</li>\n<li>\n<p>Repository name 填入 <code class="language-text">github帳號.github.com</code> 用來創建 github page</p>\n</li>\n</ol>\n<h2 id="三、開始使用-hexo"><a href="#%E4%B8%89%E3%80%81%E9%96%8B%E5%A7%8B%E4%BD%BF%E7%94%A8-hexo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、開始使用 hexo</h2>\n<p>建立 hexo</p>\n<p>{% codeblock %}\nhexo init\n{% endcodeblock %}</p>\n<p>建立一篇文章，將會是<a href="http://markdown.tw">Markdown</a>形式，可以到 source/_post/title.md 去修改</p>\n<p>{% codeblock %}\nhexo new "title"\n{% endcodeblock %}</p>\n<p>生成 public 檔</p>\n<p>{% codeblock %}\nhexo generate\n{% endcodeblock %}</p>\n<p>開啟 server 觀看（預設在 localhost:4000）</p>\n<p>{% codeblock %}\nhexo server\n{% endcodeblock %}</p>\n<h2 id="四、發佈到-github-上面"><a href="#%E5%9B%9B%E3%80%81%E7%99%BC%E4%BD%88%E5%88%B0-github-%E4%B8%8A%E9%9D%A2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、發佈到 github 上面</h2>\n<p>修改 <code class="language-text">_config.yml</code> 檔案，最下面加上</p>\n<p>{% codeblock %}\ndeploy:\ntype: github\nrepository: git@github.com:github 帳號/github 帳號.github.com.git\nbranch: master\n{% endcodeblock %}</p>\n<p>我那時候用 git 的時候，沒有 ssh 認證，如果遇到相同問題可以看<a href="https://help.github.com/articles/generating-ssh-keys">這篇</a>。<br>\n照著上面的指令走就可以完成，唯獨 mac 裡面似乎內建 <code class="language-text">id_rsa</code> 這把 key，這邊我不清楚 XD</p>\n<p>接著只要輸入</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">hexo deploy</code></pre>\n      </div>\n<p>等待 10 分鐘，你的網誌理論上就架好了！網址為 <code class="language-text">http://github帳號.github.io</code></p>\n<h3 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>reference</em></h3>\n<ol>\n<li>\n<p><a href="http://zespia.tw/hexo/zh-TW/">官方文件</a>非常詳盡，重點是<em>中文</em>！</p>\n</li>\n<li>\n<p>強者小熊<a href="http://eva0919.github.io/2013/04/21/%E4%BD%BF%E7%94%A8hexo%E4%BB%A5%E5%8F%8Agithub-page%E5%BB%BA%E7%AB%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E9%83%A8%E8%90%BD%E6%A0%BC/">教學文</a></p>\n</li>\n</ol>',fields:{slug:"/2013/04/26/hexo架blog初體驗/"},frontmatter:{title:"hexo架blog初體驗",date:"Apr 26, 2013",tags:["code","hexo","github"]}}}]}},pathContext:{tag:"github"}}}});
//# sourceMappingURL=path---tags-github-a4cc6134747096be76e1.js.map