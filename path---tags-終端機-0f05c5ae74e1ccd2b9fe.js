webpackJsonp([0xf5fd5ed7d7f8],{447:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2015-05-10-Linux-之-command-line-上手.md absPath of file >>> MarkdownRemark",html:'<p>開發者對於 command line 一定不陌生，然而 Mac OS 會受到許多開發者的青睞，是因為其本身就是依照 unix 系統做開發，因此對於虛擬主機需要用到 command line 自然不陌生，整合性很好。</p>\n<p>這篇 blog 記錄網站開發超過兩年半經驗的我，最常用到的終端機指令 (command line)。</p>\n<p><img src="https://i.imgur.com/hGb22rh.png"></p>\n<!-- more -->\n<p>本篇針對的讀者是 mac 新手。</p>\n<h2 id="環境設定"><a href="#%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>環境設定</h2>\n<p>建議下載 iterm2 來使用，有興趣可參考<a href="/2015/02/07/Sublime-%E8%88%87-iTerm-%E7%9A%84%E8%A6%96%E7%AA%97%E9%85%8D%E7%BD%AE/">設定</a></p>\n<h2 id="常用指令"><a href="#%E5%B8%B8%E7%94%A8%E6%8C%87%E4%BB%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>常用指令</h2>\n<p>前面加上錢字號($)代表此行為 command line 開始，真正在打的時候不用加入<code class="language-text">$</code></p>\n<p><code class="language-text">$ cd</code>: 移動 root 位置\n<code class="language-text">$ cd ..</code>: 移動到目前所在位置的上一層\n<code class="language-text">$ cd ../..</code>: 移動到目前所在位置的上兩層</p>\n<p><code class="language-text">$ pwd</code>: 列出目前完整路徑 --> 可以知道自己現在在哪邊，再決定要如何利用 <code class="language-text">cd</code> 移動</p>\n<p><code class="language-text">$ ls</code>: 列出所在目錄的檔案\n<code class="language-text">$ ls -a</code>: 列出的目錄檔案包含隱藏檔\n<code class="language-text">$ ls -al</code>: 列出的目錄檔案包含隱藏檔 &#x26; 檔案屬性和權限</p>\n<p><code class="language-text">$ vi(m) **.xx</code>: 創建檔名為<code class="language-text">**</code>，附檔名為<code class="language-text">xx</code>的檔案 --> 之後會進入 vi(m) 文字編輯模式，推薦查閱<a href="http://linux.vbird.org/linux_basic/0310vi.php">鳥哥 vim 教學</a></p>\n<p><code class="language-text">$ mkdir ***</code>: 創建名稱為<code class="language-text">***</code>的資料夾\n<code class="language-text">$ rmdir ***</code>: 移除名稱為<code class="language-text">***</code>的資料夾 --> 需確定資料夾為空</p>\n<p><code class="language-text">$ cp dest1 dest2</code>: 把 dest1 檔案複製到 dest2 的位置\n<code class="language-text">$ mv dest1 dest2</code>: 把 dest1 檔案移動到 dest2 的位置，亦可作為變更檔名使用，例如 <code class="language-text">$ mv test.txt no-test.txt</code>，就可以把檔名 test 的文字檔改變成為 no-test 檔名。</p>\n<p><code class="language-text">$ sudo su</code>: 取得 root 權限</p>\n<p>以上列出我最常用的指令，許多指令都可以帶有特殊的參數，unix base 底下的 command line 也不只這些，想要更進一步，可以再多去參考書籍或是教學。</p>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reference</h2>\n<p><a href="http://linux.vbird.org/linux_basic/0220filemanager.php#dir_path">鳥哥 Linux 檔案與目錄管理</a></p>',fields:{slug:"/2015/05/10/Linux-之-command-line-上手/"},frontmatter:{title:"Linux 之 command line 上手",date:"May 10, 2015",tags:["linux","command line","iterm2","終端機"]}}}]}},pathContext:{tag:"終端機"}}}});
//# sourceMappingURL=path---tags-終端機-0f05c5ae74e1ccd2b9fe.js.map