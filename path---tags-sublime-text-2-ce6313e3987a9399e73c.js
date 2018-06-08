webpackJsonp([32373232130839],{435:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-11-30-sublime-text-2-實用套件.md absPath of file >>> MarkdownRemark",html:'<p><img src="https://upload.wikimedia.org/wikipedia/en/4/4c/Sublime_Text_Logo.png" alt="Sublime Text 2" title="Sublime Text 2"></p>\n<p>Sublime Text 2 是網頁開發者都不陌生的一套編輯器，除了單純的文字編輯外，它還有很多實用的套件，這篇來介紹我平常常用的 Sublime Text 2 套件。</p>\n<!-- more -->\n<h2 id="編輯環境"><a href="#%E7%B7%A8%E8%BC%AF%E7%92%B0%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>編輯環境</h2>\n<ol>\n<li>Mac 10.9</li>\n<li>Sublime Text 2</li>\n</ol>\n<p>Mac 環境，所以快捷鍵會介紹 command 的配置，若 windows 版本請自行查閱。</p>\n<h3 id="安裝-package-control"><a href="#%E5%AE%89%E8%A3%9D-package-control" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安裝 Package Control</h3>\n<p>所謂 Package Control 就是 Sublime Text 2 用來裝套件的，因此在裝其他的套件之前，我們必須先來安裝 Package Control。</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">開啟Sublime Text 2\n開啟console，快捷鍵ctrl+`\n貼上以下程式碼\n\nimport urllib2,os; pf=&#39;Package Control.sublime-package&#39;; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), &#39;wb&#39; ).write( urllib2.urlopen( &#39;http://sublime.wbond.net/&#39; +pf.replace( &#39; &#39;,&#39;%20&#39; )).read()); print( &#39;Please restart Sublime Text to finish installation&#39;)</code></pre>\n      </div>\n<p>程式碼可以參照<a href="https://sublime.wbond.net/installation#st2">官網</a></p>\n<p>安裝完後，未來我們就可以使用<code class="language-text">cmd+shift+p</code>，打入<code class="language-text">install package</code>，即可啟用 Package Control，如下圖</p>\n<p><img src="https://i.imgur.com/5n76S9Q.png" alt="install package"></p>\n<h3 id="安裝套件步驟"><a href="#%E5%AE%89%E8%A3%9D%E5%A5%97%E4%BB%B6%E6%AD%A5%E9%A9%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安裝套件步驟</h3>\n<ol>\n<li>首先<code class="language-text">cmd+shift+p</code></li>\n<li>鍵入<code class="language-text">install package</code></li>\n<li>跳出新的輸入欄位後，在輸入你要的<code class="language-text">package名稱</code></li>\n<li>看著左下角，等它跑完</li>\n<li>重新啟動 Sublime Text 2 即安裝完成。</li>\n</ol>\n<h2 id="必裝套件"><a href="#%E5%BF%85%E8%A3%9D%E5%A5%97%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>必裝套件</h2>\n<h4 id="一、brackethighlighter"><a href="#%E4%B8%80%E3%80%81brackethighlighter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、BracketHighlighter</h4>\n<p><img src="https://i.imgur.com/2ovEcG8.png"></p>\n<p>這是一套超過 196K 人裝的套件，如圖所示，寫 html 常常遇到不知道 close tag 在哪邊，裡用它可以清楚的將 close tag 標示出來。<br>\n另外它有一個很好的地方，就是會在每一行的前面列出來目前的 tag，不同的語言還有不同的 icon，因此可以更快的知道自己的位置。</p>\n<h4 id="二、emmet"><a href="#%E4%BA%8C%E3%80%81emmet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、Emmet</h4>\n<p>以前它叫做 Zen coding，現在則改為 Emmet。</p>\n<p>可以將需要重複的 html 用很簡短的方式寫出來，例如：</p>\n<ol>\n<li><code class="language-text">.container&gt;.col-lg-4*3</code></li>\n<li>按下 tab 後便會出現</li>\n<li><img src="https://i.imgur.com/PP9vdmr.png" alt="Emmet"></li>\n</ol>\n<p>若你發現按下 tab 後竟然沒有用，記得確定自己是不是在 html 文件內。</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">view --&gt; syntax --&gt; HTML(5)</code></pre>\n      </div>\n<p>在 HTML5 的文件下，<code class="language-text">!+tab</code> 會有出現 HTML5 的 snippet 出現，非常好用！</p>\n<h4 id="三、pretty-json"><a href="#%E4%B8%89%E3%80%81pretty-json" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、Pretty Json</h4>\n<p>有利用到 JSON 的人，想必一定會為了格式上面的問題而煩惱，只要裝上這個，JSON 立刻變得很好看。</p>\n<p>裝完之後，把你要修改的 JSON 選取起來，按下快捷鍵</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">cmd+ctrl+j</code></pre>\n      </div>\n<p>立刻就可以把 JSON 變得很漂亮，也可以自行進去定義縮排大小。</p>\n<h4 id="四、flat-theme"><a href="#%E5%9B%9B%E3%80%81flat-theme" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、flat theme</h4>\n<p><img src="https://i.imgur.com/pvxRMlX.png" alt="flatland"></p>\n<p>其實這個套件全名是 flatland 才對，可以把 Sublime Text 2 的整體環境變得扁平化。</p>\n<p>安裝方法：</p>\n<ol>\n<li>打開 Package Control</li>\n<li>輸入 Theme - Flatland 即可</li>\n</ol>\n<hr>\n<p>以上介紹了一些我常用的 Sublime Text 2 套件，但一直沒有找到好看的主題，如果你有推薦的主題，非常歡迎交流！</p>',fields:{slug:"/2013/11/30/sublime-text-2-實用套件/"},frontmatter:{title:"Sublime Text 2 實用套件",date:"Nov 30, 2013",tags:["sublime text 2"]}}},{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-06-05-sublime-text-2-實用技巧.md absPath of file >>> MarkdownRemark",html:'<p><img src="https://upload.wikimedia.org/wikipedia/en/4/4c/Sublime_Text_Logo.png" alt="Sublime Text 2" title="Sublime Text 2"></p>\n<p>Sublime Text 2 是一套越來越火紅的編輯器，如果你是接觸網頁開發，想必對於這套軟體不陌生，以下分享幾個好用的技巧，都是我自己平常比較常使用的技巧，因為我本身是一個懶得看文件的人，所以就整理這篇與大家分享。</p>\n<!-- more -->\n<h2 id="編輯環境"><a href="#%E7%B7%A8%E8%BC%AF%E7%92%B0%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>編輯環境</h2>\n<ol>\n<li>Mac 10.7.5</li>\n<li>Sublime Text 2</li>\n</ol>\n<p>我是使用 mac，所以快捷鍵就會是 command 的配置。</p>\n<h2 id="技巧介紹"><a href="#%E6%8A%80%E5%B7%A7%E4%BB%8B%E7%B4%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>技巧介紹</h2>\n<h3 id="一、set-syntax"><a href="#%E4%B8%80%E3%80%81set-syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、Set Syntax</h3>\n<p>有發現你的 Sublime Text 2 右下角有你正在編輯的環境語言嗎？舉凡 JAVA、CSS、HTML5 等<br>\n比如說我現在要從 HTML5 切到 CSS 介面，除了由上方的 View->Sytax 切換外，可以利用快捷鍵</p>\n<p>切換到 CSS 範例：</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">shift+command+p\n鍵入sscss</code></pre>\n      </div>\n<p><img src="https://i.imgur.com/51PUAhD.png" alt="Set Syntax" title="Set Syntax"></p>\n<p>每一個 Color Scheme 都會針對不同的語言去做優化，因此值得學習。</p>\n<h3 id="二、html5-snippet"><a href="#%E4%BA%8C%E3%80%81html5-snippet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、HTML5 snippet</h3>\n<p>貼心的 Sublime Text 2 有內建 HTML5 的 snippet，方法如下：</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">! + tab</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">html:5 + tab</code></pre>\n      </div>\n<p>都可以達成 HTML5 快速生成已經預定的 snippet.</p>\n<p><img src="https://i.imgur.com/grLplgD.png"></p>\n<h3 id="三、multiple-selection-同時多個游標"><a href="#%E4%B8%89%E3%80%81multiple-selection-%E5%90%8C%E6%99%82%E5%A4%9A%E5%80%8B%E6%B8%B8%E6%A8%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、Multiple Selection 同時多個游標</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">按住command+點選你要的位置</code></pre>\n      </div>\n<p>推薦用在處理 Array 等結構重複性高的資料型態。</p>\n<h3 id="四、column-selection-同時直行游標"><a href="#%E5%9B%9B%E3%80%81column-selection-%E5%90%8C%E6%99%82%E7%9B%B4%E8%A1%8C%E6%B8%B8%E6%A8%99" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、Column Selection 同時直行游標</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">按住option+按著滑鼠左鍵直行往下拖曳選取</code></pre>\n      </div>\n<p>推薦用在處理 html 等修改固定 class 或其他部分。</p>\n<p><img src="https://i.imgur.com/1kLSh2P.png"></p>\n<h3 id="五、選取引號內字串"><a href="#%E4%BA%94%E3%80%81%E9%81%B8%E5%8F%96%E5%BC%95%E8%99%9F%E5%85%A7%E5%AD%97%E4%B8%B2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>五、選取引號內字串</h3>\n<p>通常你都怎樣選取雙引號內的字串呢？<code class="language-text">&quot;string&quot;</code>利用滑鼠從第一個引號拉到後面那個。</p>\n<p>輸入：<code class="language-text">command + d</code> 即可完成</p>\n<h3 id="六、分割畫面"><a href="#%E5%85%AD%E3%80%81%E5%88%86%E5%89%B2%E7%95%AB%E9%9D%A2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>六、分割畫面</h3>\n<p>有時候我時常左邊放 HTML 檔，右邊放 SCSS 檔，一邊看一邊編輯，這時候就要分割畫面。</p>\n<p>輸入：<code class="language-text">command+option+數量</code></p>\n<p>就可以把視窗分割成你要的數量。</p>\n<h3 id="七、貼上符合縮排"><a href="#%E4%B8%83%E3%80%81%E8%B2%BC%E4%B8%8A%E7%AC%A6%E5%90%88%E7%B8%AE%E6%8E%92" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>七、貼上符合縮排</h3>\n<p>有時候從網站上複製一段 code，常常貼上的部份本身就有縮排，貼完卻只有第一行有縮排，其他跑到前面。</p>\n<p>複製完後，輸入：<code class="language-text">shift+command+v</code></p>\n<p>也就是在原本的貼上加上 shift 就可以解決！</p>\n<h3 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>reference</em></h3>\n<ol>\n<li><a href="http://www.youtube.com/watch?v=41nY3RLBy3w&#x26;list=PL8dIIwCMF-SOaSb3_VYUlyULpPyk7iwlh&#x26;index=1">up chen in 2013 JSDC</a></li>\n<li><a href="https://gist.github.com/twosixcode/1988097">Paste and Indent</a></li>\n</ol>',fields:{slug:"/2013/06/05/sublime-text-2-實用技巧/"},frontmatter:{title:"Sublime Text 2 實用技巧",date:"Jun 05, 2013",tags:["sublime text 2"]}}}]}},pathContext:{tag:"sublime text 2"}}}});
//# sourceMappingURL=path---tags-sublime-text-2-ce6313e3987a9399e73c.js.map