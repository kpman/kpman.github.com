webpackJsonp([0x742db6920d8c],{406:function(e,a){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"/Users/kpman/workspace/kpman.github.com/content/_posts/2016-04-18-在-slack-建立-hubot.md absPath of file >>> MarkdownRemark",html:'<p>slack 推出 bot 在 2016 這個時間點已經不算新鮮事，隨著 messenger 也推出自家的 bot 後，才真正開始接觸架設自己的 bot，網路上查到都是日文的資源較多，因此記錄這篇過程，希望能幫助到其他中文開發者。</p>\n<p><img src="http://i.imgur.com/qzHh7bb.png" alt="slakbot &#x26; hubot"></p>\n<!-- more -->\n<h2 id="零、懶人包指令"><a href="#%E9%9B%B6%E3%80%81%E6%87%B6%E4%BA%BA%E5%8C%85%E6%8C%87%E4%BB%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>零、懶人包指令</h2>\n<p>先把會用到的全部指令列在這邊，下面會分項目做解釋</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install -g hubot coffee-script yo generator-hubot\nmkdir hubot\ncd hubot\nyo hubot\nnpm install hubot-slack --save\ngit init\ngit add .\ngit commit -m &quot;Initial commit&quot;\nGET HUBOT_SLACK_TOKEN // https://my.slack.com/services/new/hubot\nInstall the Heroku Toolbelt // https://toolbelt.heroku.com/\nheroku create &quot;project-name&quot;\nheroku config:add HEROKU_URL=https://&quot;project-name&quot;.herokuapp.com\nheroku config:add HUBOT_SLACK_TOKEN=&quot;xoxb-********-********&quot;\ngit push heroku master</code></pre>\n      </div>\n<h2 id="一、安裝本地環境"><a href="#%E4%B8%80%E3%80%81%E5%AE%89%E8%A3%9D%E6%9C%AC%E5%9C%B0%E7%92%B0%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一、安裝本地環境</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install -g hubot coffee-script yo generator-hubot</code></pre>\n      </div>\n<p>hubot 會用到 coffee-script 和 yo 去產生整個專案，所以需要安裝在全域 <code class="language-text">-g</code></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">mkdir hubot\ncd hubot</code></pre>\n      </div>\n<p>此處創建資料夾可建立自己的名字</p>\n<h2 id="二、產生-hubot-專案"><a href="#%E4%BA%8C%E3%80%81%E7%94%A2%E7%94%9F-hubot-%E5%B0%88%E6%A1%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>二、產生 hubot 專案</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">yo hubot</code></pre>\n      </div>\n<p>這邊會問你一些問題，記得在 <code class="language-text">adapter</code> 打 <code class="language-text">slack</code>\n此舉會讓官方產生預設 heroku 的 <code class="language-text">Procfile</code> 裡面多了這一行</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">web: bin/hubot -a slack</code></pre>\n      </div>\n<p>這是為了讓 heroku 啟動時候知道怎樣運作的指令</p>\n<h2 id="三、安裝-hubot-slack-套件"><a href="#%E4%B8%89%E3%80%81%E5%AE%89%E8%A3%9D-hubot-slack-%E5%A5%97%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>三、安裝 hubot-slack 套件</h2>\n<p>這是 slack 官方維護的套件，穩定度應該頗高，安裝後一併做一個專案 git 初始化並 commit</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install hubot-slack --save\ngit init\ngit add .\ngit commit -m &quot;Initial commit&quot;</code></pre>\n      </div>\n<h2 id="四、取得-hubotslacktoken"><a href="#%E5%9B%9B%E3%80%81%E5%8F%96%E5%BE%97-hubotslacktoken" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>四、取得 HUBOT<em>SLACK</em>TOKEN</h2>\n<p>到<a href="https://my.slack.com/services/new/hubot">此處</a>建立新的 hubot service\n若有多個 team 帳號，請記得確定你登入的帳號是在哪一個 team 底下</p>\n<p>取一個 hubot 要在 slack 內的名字，下圖用 <code class="language-text">hubot</code> 做示範</p>\n<p><img src="http://i.imgur.com/bpsLcz7.png" alt="hubot"></p>\n<p>接著下一步就可以取得 HUBOT<em>SLACK</em>TOKEN，記得把這個 TOKEN 記下來</p>\n<h2 id="五、本機端測試"><a href="#%E4%BA%94%E3%80%81%E6%9C%AC%E6%A9%9F%E7%AB%AF%E6%B8%AC%E8%A9%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>五、本機端測試</h2>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">HUBOT_SLACK_TOKEN=xoxb-********-******** ./bin/hubot --adapter slack</code></pre>\n      </div>\n<p>本機端記得先安裝 redis，hubot 會用到，\n順利的話就可以在 slack 啟動 hubot 囉！</p>\n<p><img src="http://i.imgur.com/EWkWV3Q.png" alt="hubot in slack">\n可以打開 hubot 跟它對話，\n如果看到 <code class="language-text">PONG</code> 則代表成功</p>\n<h2 id="六、將本地端-server-放上-heroku"><a href="#%E5%85%AD%E3%80%81%E5%B0%87%E6%9C%AC%E5%9C%B0%E7%AB%AF-server-%E6%94%BE%E4%B8%8A-heroku" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>六、將本地端 server 放上 heroku</h2>\n<p>slack 官方推薦的平台是 heroku，這邊介紹如何運作，\n要記得的原理就是其實上述已經在本機端可以運行了，\n這個步驟就是將 server 放到 heroku 上面去跑而已。</p>\n<p>首先安裝 Heroku Toolbelt，這部份請看 <a href="https://toolbelt.heroku.com/">heroku 官方教學</a></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">heroku create &quot;project-name&quot;\nheroku config:add HEROKU_URL=https://&quot;project-name&quot;.herokuapp.com\nheroku config:add HUBOT_SLACK_TOKEN=&quot;xoxb-********-********&quot;\ngit push heroku master</code></pre>\n      </div>\n<p>這個 project-name 其實就是未來你的 herokuapp 的 URL，\n不能和其他人重複，因此名字可以想自己容易記得即可。</p>\n<p><code class="language-text">heroku config:add</code> 是將一些變數丟給遠端的 heroku 知道，\n讓他可以抓到 <code class="language-text">HEROKU_URL</code> <code class="language-text">HUBOT_SLACK_TOKEN</code> 等，\n接著就是將 local 這個 git repo push 到 heroku 上面。</p>\n<h2 id="七、注意事項"><a href="#%E4%B8%83%E3%80%81%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>七、注意事項</h2>\n<p>等到 heroku 跑完後，hubot 的 server 已經跑在 heroku 上面了，\n而免費的 heroku dyno 有每 24 小時一定要停機 6 小時的規定，\n因此若要拿來當正式的 bot 服務，\n建議自己架 server 或者就付費買 heroku 的服務。</p>\n<p>另外，在 hubot 專案底下的 <code class="language-text">hubot-heroku-keepalive</code> 就是會固定戳 heroku，避免 30 分鐘後這個 dyno 就休息了。</p>\n<p>在 heroku 上面有免費的 redis add-on 可以用，\n每個月有 30mb 的免費使用量。</p>\n<h2 id="reference"><a href="#reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reference</h2>\n<ul>\n<li><a href="https://hubot.github.com/docs/">hubot official doc</a></li>\n<li><a href="https://www.npmjs.com/package/hubot-slack">hubot-slack npm README</a></li>\n<li><a href="https://github.com/slackhq/hubot-slack#configuration">hubot configuration on heroku</a> 推薦看這份</li>\n</ul>\n<p>有任何問題，歡迎留言討論。</p>',fields:{slug:"/2016/04/18/在-slack-建立-hubot/"},frontmatter:{title:"在 slack 建立 hubot",date:"Apr 18, 2016",tags:["bot","slack","hubot","heroku"]}}}]}},pathContext:{tag:"hubot"}}}});
//# sourceMappingURL=path---tags-hubot-94acd7fb54db951d37e9.js.map