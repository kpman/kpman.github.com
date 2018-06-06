webpackJsonp([47686057361756],{428:function(e,n){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2013-08-21-ec2利用tasksel架wordpress經驗分享.md absPath of file >>> MarkdownRemark",html:'<p>看了這麼久的雲端資源，總算開了算是自己真正學到東西的第一台 Amazon EC2 server，目的是想要練習把 wordpress 架到 EC2 上，在此分享我的架設經驗。</p>\n<p><img src="http://blog.programmableweb.com/wp-content/amazon-web-services1.png" alt="Amazon web service"></p>\n<!-- more -->\n<h2 id="一、擁有-aws-帳號"><a href="#%E4%B8%80%E3%80%81%E6%93%81%E6%9C%89-aws-%E5%B8%B3%E8%99%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、擁有 AWS 帳號</h2>\n<p>關於開啟 AWS 的過程，實際走過一遍之後，阿正老師的<a href="http://blog.soft.idv.tw/?p=823&#x26;page=2">這篇</a>，其內寫的不錯，推薦跟著走一遍，就會了解很多。</p>\n<h2 id="二、開啟自己的-instance"><a href="#%E4%BA%8C%E3%80%81%E9%96%8B%E5%95%9F%E8%87%AA%E5%B7%B1%E7%9A%84-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、開啟自己的 instance</h2>\n<p>在實際走過後，會發現阿正老師<a href="http://blog.soft.idv.tw/?p=824">這篇</a>真的超用心，因此接下來主要會利用這篇，再加上些我的補充。</p>\n<ul>\n<li>instance 地理位置</li>\n</ul>\n<p>提到將主機開的位置，現在已經有 tokyo 的據點，離台灣更近，所以建議將 instance 位置設在 tokyo</p>\n<blockquote>\n<p>建議將 instance 位置設在 tokyo</p>\n</blockquote>\n<ul>\n<li>instance 選擇方案</li>\n</ul>\n<p><img src="http://i.imgur.com/U4rs7wk.png" alt="EC2 ubuntu server for free"></p>\n<p>利用 VISA 卡，選擇免費方案（圖中有星星的都是免費方案），在這邊我選擇 ubuntu 來做為我的系統。</p>\n<ul>\n<li>key pair 創建＆下載</li>\n</ul>\n<p>在阿正老師的文章內看到關於 key pair 介紹，很重要，一定要記住要把下載下來的 pem 給管理好，未來是需要利用它來做 ssh 登入主機。</p>\n<blockquote>\n<p>.pem 檔需要存好，一台主機配對一個 key pair，且不能做更改，</p>\n</blockquote>\n<h2 id="三、設定-security-group"><a href="#%E4%B8%89%E3%80%81%E8%A8%AD%E5%AE%9A-security-group" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、設定 Security Group</h2>\n<p>在沒有設定 security group 的時候，新開的 instance 可能是鎖起來的，會有 SSH 連線上的問題。</p>\n<ol>\n<li>進入 console.aws.amazon.com</li>\n<li>左方導覽列選擇 security group</li>\n<li>選擇 instance 後，下方的 tab 選取<code class="language-text">Inbound</code></li>\n<li>分別加入<code class="language-text">SSH</code>&#x26;<code class="language-text">HTTP</code>，Source 部分都維持 0.0.0.0/0 即可，加入後記得要按<code class="language-text">Apply Rule Change</code>才生效</li>\n</ol>\n<blockquote>\n<p>記得開啟 SSH(20)、HTTP(80)</p>\n</blockquote>\n<h2 id="四、申請-elastic-ip"><a href="#%E5%9B%9B%E3%80%81%E7%94%B3%E8%AB%8B-elastic-ip" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、申請 Elastic IP</h2>\n<p>每一個 instance 都應該要綁定一個 elastice ip，未來可以作為連線使用。</p>\n<ol>\n<li>同上，進入 console.aws.amazon.com</li>\n<li>選擇 Elastic IPs</li>\n<li>選擇 Allocate New Address</li>\n<li>申請完之後記得要 associate 到你的 instance</li>\n</ol>\n<blockquote>\n<p>申請完 elastic ip 後，原本的 Public domain 前半部分會改變為新的 ip</p>\n</blockquote>\n<p>*<strong>_ 其實我在實作時，是先做了 SSH 連線，後來在去申請 elastic ip，結果 associate 完後，我又要 ssh 連線，發現沒有辦法登入，之後才瞭解是做了 elastic ip 後，連線的 ip 也需要一並跟著改變。_</strong></p>\n<h2 id="五、ssh-連線進入自己的-instance"><a href="#%E4%BA%94%E3%80%81ssh-%E9%80%A3%E7%B7%9A%E9%80%B2%E5%85%A5%E8%87%AA%E5%B7%B1%E7%9A%84-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>五、SSH 連線進入自己的 instance</h2>\n<ol>\n<li>打開終端機（推薦 iterm）</li>\n<li><code class="language-text">chmod 600 ~/.pem</code><br>\n要記得把.pem 檔改權限，不然會登不進去</li>\n<li>ssh 連線使用以下 command line<br>\n<code class="language-text">ssh -i ~/.pem ubuntu@ip</code>\n_ <code class="language-text">~/.pem</code>是此 instance 的 key pair .pem 檔的路徑\n_ <code class="language-text">ubuntu</code>是因為我用 ubuntu 當做 OS，如果當初選擇 Amazon linux 的話，則需要輸入<code class="language-text">ec2-user</code>取代 ubuntu * <code class="language-text">ip</code>則為 instance 的 ip，進到 console，左側選 instance，拉到底下看見<br>\n<code class="language-text">Public DNS: ec2-xx-xxx-xxx-xx.ap-northeast-1.compute.amazonaws.com</code><br>\n則 xx-xxx-xxx-xx 改成<code class="language-text">xx.xxx.xxx.xx</code>即為你的連線 ip</li>\n<li>連線成功會看到<code class="language-text">ubuntu@ip-xxx-xxx-xxx-xxx:~$</code>字眼！那就恭喜了！</li>\n</ol>\n<blockquote>\n<p>pem 檔的權限要更改為 600</p>\n</blockquote>\n<h2 id="六、環境設定"><a href="#%E5%85%AD%E3%80%81%E7%92%B0%E5%A2%83%E8%A8%AD%E5%AE%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>六、環境設定</h2>\n<p>剛進到 instance，記得將環境設定一下</p>\n<ol>\n<li><code class="language-text">sudo apt-get update</code> + <code class="language-text">sudo apt-get upgrade</code></li>\n<li>如果覺得一直 sudo 很麻煩，可以利用<code class="language-text">sudo su</code>取得 root 權限</li>\n</ol>\n<hr>\n<h3 id="-安裝-tasksel"><a href="#-%E5%AE%89%E8%A3%9D-tasksel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a># 安裝 tasksel</h3>\n<ol>\n<li>是 ubuntu 底下的 lamp 懶人包</li>\n<li>推薦<a href="http://howtounix.info/howto/LAMP-on-Ubuntu-with-tasksel-tool">教學文</a></li>\n<li>開始安裝 taskel <code class="language-text">sudo apt-get install tasksel</code></li>\n<li>安裝 lamp-server <code class="language-text">sudo tasksel install lamp-server</code></li>\n</ol>\n<h3 id="-安裝-phpmyadmin"><a href="#-%E5%AE%89%E8%A3%9D-phpmyadmin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a># 安裝 phpmyadmin</h3>\n<ol>\n<li><code class="language-text">sudo apt-get install phpmyadmin</code></li>\n<li><a href="http://linadonis.pixnet.net/blog/post/27585552-ubuntu-server-%E5%AE%89%E8%A3%9D-phpmyadmin">reference</a></li>\n</ol>\n<h3 id="-安裝-wordpress"><a href="#-%E5%AE%89%E8%A3%9D-wordpress" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a># 安裝 wordpress</h3>\n<p><img src="http://wow-wp.org/wp-content/uploads/2011/10/wordpress.png" alt="wordpress"></p>\n<ol>\n<li>\n<p><a href="https://www.digitalocean.com/community/articles/how-to-install-wordpress-on-ubuntu-12-04">超棒教學文</a> 我是跟著文章走，裡面紅色的字記得改成自己的</p>\n</li>\n<li>\n<p>cd /var/www</p>\n</li>\n<li>\n<p>下載 wordpress 包<br>\n<code class="language-text">wget http://wordpress.org/latest.tar.gz</code></p>\n</li>\n<li>\n<p>解壓縮<br>\n<code class="language-text">tar -xzvf latest.tar.gz</code></p>\n</li>\n<li>\n<p>進到 mysql mode<br>\n<code class="language-text">mysql -u root -p</code></p>\n</li>\n<li>\n<p>剩下有紅字，推薦看連結 XD</p>\n</li>\n</ol>\n<h2 id="七、測試連線"><a href="#%E4%B8%83%E3%80%81%E6%B8%AC%E8%A9%A6%E9%80%A3%E7%B7%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>七、測試連線</h2>\n<p>當你安裝完後，事實上可以利用 public domain 來連線看看<br>\n直接在 console 裡面找到 instance 的 public domian，連線看看是否成功</p>\n<ol>\n<li><code class="language-text">cd /var/www</code></li>\n<li><code class="language-text">sudo vi test.php</code> 創新 php 檔案，並進到 vim 模式</li>\n<li>按<code class="language-text">i</code> 進入編輯模式，記得看下面是否出現<code class="language-text">-- INSERT --</code></li>\n<li>打上這一行<code class="language-text">&lt;?php phpinfo(); ?&gt;</code></li>\n<li>按下 esc -> 打入<code class="language-text">:wq</code> -> enter 存檔(記得是看 iterm 下面)</li>\n<li>利用 public domain/test.php 連線測試，看到 php 的資訊就成功了！</li>\n<li>public domain/wordpress 也可以看見你的 wordpress 有沒有架成功！</li>\n</ol>\n<h2 id="ip-連接-instance"><a href="#ip-%E9%80%A3%E6%8E%A5-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>IP 連接 instance</h2>\n<p>如果你有自己的 ip，想要指到 EC2 的話，按照下面作法。</p>\n<ol>\n<li>\n<p>到 godday 的 DNS manager</p>\n</li>\n<li>\n<p>設定你的 IP 的<code class="language-text">A record</code></p>\n</li>\n<li>\n<p>指向 instance 的<code class="language-text">Elastic IP</code>即可</p>\n</li>\n</ol>\n<p><strong><em>reference</em></strong></p>\n<ul>\n<li><a href="http://blog.soft.idv.tw/?p=823&#x26;page=2">阿正老師上篇</a> 阿正老師這兩篇必讀</li>\n<li><a href="http://blog.soft.idv.tw/?p=824">阿正老師下篇</a> 主機實戰篇</li>\n<li><a href="http://blog.rx836.tw/blog/first-amazon-web-services/">免費玩 Amazon Web Service(AWS) EC2</a> 開機器寫的很詳細，圖文並茂</li>\n<li><a href="http://coenraets.org/blog/2012/01/setting-up-wordpress-on-amazon-ec2-in-5-minutes/">Setting Up WordPress on Amazon EC2 in 5 minutes</a> 根本神教學，我是受這篇感動才想要把自己的過程給記錄下來。</li>\n<li><a href="http://linadonis.pixnet.net/blog/post/27585552-ubuntu-server-%E5%AE%89%E8%A3%9D-phpmyadmin">Ubuntu Server 安裝 Phpmyadmin</a> phpmyadmin 圖文教學</li>\n<li><a href="http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory">Giving WordPress Its Own Directory</a> 更換 wordpress 的路徑位置指向</li>\n</ul>\n<blockquote>\n<p>如果有問題，或者我有寫錯的地方，歡迎留言讓我知道！</p>\n</blockquote>',fields:{slug:"/2013/08/21/ec2利用tasksel架wordpress經驗分享/"},frontmatter:{title:"EC2利用tasksel架wordpress經驗分享",date:"Aug 21, 2013",tags:["wordpress","amazon","ec2","tasksel","ubuntu","aws"]}}}]}},pathContext:{tag:"tasksel"}}}});
//# sourceMappingURL=path---tags-tasksel-a0195d82f69c187c9c7f.js.map