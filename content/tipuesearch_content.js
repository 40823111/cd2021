var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'Github:\xa0  許耀中的Github \n Website: 許耀中的 Website \n Youtube: 許耀中的Youtube Stage1 分組倉儲:  stage1 ag6 \n Stage2 \n 分組倉儲:  stage2 ag6 \n Stage3 \n 分組倉儲:  stage3 ag5 \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'leo', 'text': '', 'tags': '', 'url': 'leo.html'}, {'title': 'edit blog', 'text': '一開始你的leo是黑色的， 如果你想換成白色的 \n step1. 到File裡的 Open-Outline \n \n Step2.進到你的tmp →cd2021→config \n \n Step3. touch pelican.leo \n \n \n 新建disqus \n \n \n 改設定到遠端的pelican 劃紅線的是需要改的設定\xa0 discqus sitename 填你新建disqus的名字(Webside name) \n \n 指令 @others 就是可以當編輯這個網頁要編輯下一張的時候，下一張的開頭位置會是你上一張結尾的後面 \n 可以繼續編排不會亂 \n \n', 'tags': '', 'url': 'edit blog.html'}, {'title': 'edit\xa0Reveal', 'text': '1.先進入Leo \n \n 2.到cd2021 ➝config \n \n 3.選擇下面的reveal.leo \n \n 4.就可以開始編輯了 \n \n', 'tags': '', 'url': 'edit\xa0Reveal.html'}, {'title': 'old repositories update', 'text': '1.因為舊的repositiors和更新版只差7個更新檔案，所以只需要git pull 更新檔案就好、所以 \n Step1.到你的cmsimde  →\xa0 git pull origin master \n \n Step2.他就會顯示已經download 7個檔案 \n \n 檔案說明: \n \n init.py \xa0 - 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n http-server.py \xa0 - 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n cms.bat \xa0 - 讓使用者執行動態網站用的批次檔案. \n acp.bat \xa0 - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ., git commit -m "提交訊息", 以及 git push 等三個指令. \n \n \n Step3. 到你的 updir 把你的更新檔複製到你的cd2021 →\xa0complete→ 以後你的工作都在cd2021 \n \n Step4. \n 以後要開cmsimde(到你的cd2021)=cms(動態就會自己開) \n 以後要開上傳(到你的cd2021)=acp\xa0 \n', 'tags': '', 'url': 'old repositories update.html'}, {'title': 'repositories\xa0create', 'text': 'notice: 因為cmsimde改版 所以設定全部更新 \n (1)system  cd2021可攜系統\xa0 \n (2)download\xa0  kmol2021 spring\xa0 v2.7z \n (3) 改 gitconfig \xa0 \n \xa0 \n \n \n \n (4)Repository: \xa0 https://github.com/mdecourse/cmstemplate \n \xa0 利用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站方法為: \n \n 登入 Github 帳號 \n 將瀏覽器指向 \xa0 https://github.com/mdecourse/cmstemplate \n \n \n \xa0(5) inside the page 填寫資料 \n \n (6) 打指令\xa0git clone --recurse-submodules https://github.com/40823111/cd2021.git \n \n (7)進入 cd2021 →cmsimde→up_dir(裡面有5個檔案) \n \n \n (7) 完成後 就可以git push \n acp.bat 內容 \n echo off\nset message=%1\ngit add .\ngit commit -m %message%\ngit push \n \n \n \n', 'tags': '', 'url': 'repositories\xa0create.html'}, {'title': 'stage1', 'text': '', 'tags': '', 'url': 'stage1.html'}, {'title': 'week1', 'text': '第一階段分組協同實習: \n 每週分組報告必須包含 html, pdf 與 Youtube 影片: \n 標題: \xa0 2021-協同產品設計實習-stage1-ag1 \n 專題題目: \n 第一位組員學號:40823111 \n 第二位組員學號:40823139 \n \n \n 交付給各組的實習任務: \n \n 請在各組組長的 Github 帳號下建立各組的分組網站, 惟在 W1 進行各班定組序過程中, 發現即便採用 Ethercalc 以網際協同方式同步讓各班自選組員填入兩兩成組的學員學號, 但仍缺人工或自動定各班組序的有效方案, 在此責成各組在進行自選的協同產品開發項目之際 (W2-W4), 將此議題列為必選的題目之一, 詳細說明各組認為最有效率的第一階段與訂定組序的方法及流程. \n 此外, 為了讓各組在 stage1 分組協同實習過程, 能透過網誌發表各組組員在 W2-W4 過程中的各項作為與心得報告, 說明可利用 Leo Editor 協助 CMSiMDE 中的 Pelican 發表協同網誌, 其目的是讓各分組在協同期間, 能完整呈現各階段所留下的網誌紀錄. 但此方式必須熟悉 Leo Editor 的操作, 因此有關透過 Pelican 建立協同網誌一事, 除利用 Leo Editor 協助設定並建立 pelican 網誌外, 也將此議題列為各組在 Stage1 協同產品設計流程中必選題目之二, 請各組詳細說明採用或不採用 Leo Editor 的兩種情況下, 各組員在設定與建立協同網誌的過程所可能遭遇或產生的問題與解決方案. \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '我們的主題 及 進度說明 \n 題目:套圈遊樂器 動機:經常於夜市中看到的套圈圈，於軟體中進行模擬與參數調整，對其分析統整，求得各類結果 第二周:零件創建與機構改善 第三周:軟體模擬與程式編輯 第四周:統整結果與報告內容 \n \n 這是把圈圈送到上面的運輸機構 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '機構 程式 \n 1.機構完成 運送機構改善配合及組裝(inventor 組合圖) \n \n \xa0各種零件檔 \n 2.程式模擬(測試爪子的路徑和抓的力道) \n \n 改良 \n 1.因為前面設計的機構太過理想，雖然在inventor上可以模擬，但是到CoppeliaSim由於干涉太多及運動過程中會有震動，導致圈圈沒辦法正常運送 \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': '1.工程圖 \n \n \n 2.爆炸圖 \n \n \n 3.完成品 \n \n', 'tags': '', 'url': 'week4.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'week5', 'text': 'step2 題目 : 自動打球機及手動接球 \n 設計 自動送球機構 及 接球手套 機械手臂打球(打者) 和 手動機械手臂接球(防守者) \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '設計理想 \n \n 一個平台(棒球場) 球打出去後可以接球(防守者) 漏接的球可以自動流回輸送台，再次被送回來 \n 使用類似螺紋的概念把球輸送到想要的平台 \n 希望可以把球的軌跡沿著螺旋線上升 \n 做成一個循迴機構 \n \n 創建協同 \n step1 組長創一個創一個respoitory\xa0 \xa0 組員創一個和組長一模一樣的 respoitory的名子 \n step2 在github裡new respoitory 互相邀請\xa0 \n step3 組長 git clone --recurse-submodules https://github.com/40823111/cd2021.git \n \n step3\xa0 git remote add 組員的學號 https://github.com/ 組員的學號 /stage2-ag6.git \n \xa0 \xa0 \xa0 \xa0 \xa0 組長授權給組員 \n 流程示意圖 \n \n', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '\n 模擬失敗\xa0 \n \xa0問題 1. 因為我們是設計螺旋線的上升機構， 所以到輸送平台時把它用直線，導致不符合公差尺寸而跑掉 \n \xa0解決1.\xa0 改善後 把它改成符合螺旋線的入口 \n \xa0 \xa0 \n CoppeliaSim模擬與運送機構創建 \n 整體運用重點: \n \n 向本週主軸:CoppeliaSim模擬與運送機構創建 \n \n 整體運用重點: \n \n IK逆運動學 \n 正向運動學 \n 送球機構創建 \n \n 本週問題: \n \n 多軸手臂的運動預測 \n 送球機構創建未果 \n 球受力後的運動路徑預測 \n \n 問題改善: \n \n 藉由DH法做運動預期 \n 加入運動學運算 \n \n', 'tags': '', 'url': 'week7.html'}, {'title': 'week8', 'text': '送球機構 \n 問題1 :\xa0 球進不去 只能靠後面球的推力才可以勉強塞進去 \n \n \n \n 問題2. 球進去後機構也沒辦法把球推上去 因為斜角太斜導致球會網協度相對小的地方(入口)滾動 \n \n \n \n \n \n 改善: 斜度改小 把凹槽加長 使凹槽和倒角之間有一個倒三角形可以讓球跑到裡面卡住 不會往後滾 \n', 'tags': '', 'url': 'week8.html'}, {'title': 'week9', 'text': '\n \n \n 棒球模擬機.ttt \n', 'tags': '', 'url': 'week9.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'week10', 'text': '', 'tags': '', 'url': 'week10.html'}, {'title': 'task1', 'text': '讀取 stage3_2a.txt, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結 \n \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '採 Python remote API 進行操控 \n \n step1\xa0\xa0 \n 先把5個檔案放在同一個資料夾 \n \n \n step2 \n 打開CoppliaSim(4.2.0)把你要的檔案丟進去\xa0\xa0 \n \n \n step3 \n 把程式複製放在主體的上面(如果沒有可以自己新增) \n \n \n threadFunction=function()\n\t-- Put your thread code here (initialization and clean-up code should not be in here)\n\n\t\n\t-- Some EXTERNAL commands (e.g. socket commands provided by Lua libraries)\n\t-- might appear as blocking to the simulator. In that case, you can define\n\t-- a non-blocking section as following example shows:\n\t--\n\t-- sim.setThreadIsFree(true) -- Start of the non-blocking section\n\t--\n\t-- Following 2 lines are meant as an example of EXTERNAL blocking commands:\n\t-- http = require("socket.http")\n\t-- print(http.request("http://www.google.com"))\n\t--\n\t-- sim.setThreadIsFree(false) -- End of the non-blocking section\n\t--\n\t-- While in a non-blocking section, try to avoid calling sim-functions. Also\n\t-- never forget to close the blocking section, otherwise V-REP will hang.\n\t-- Make sure you read the information related to the sim.setThreadIsFree\n\t-- API function in V-REP\'s documentation.\n\n\n\t-- If you wish to synchronize a threaded loop with each simulation pass,\n\t-- set the thread switch timing in the initialization phase of this script\n\t-- to the maximum (200), and manually switch thread here with the\n\t-- sim.switchThread() command. \n\t-- ( sim.switchThread() will suspend this script\'s execution until next\n\t-- simulation pass, i.e. until the simulation time has changed )\n\t--\n\t-- Following example illustrates this:\n\t-- \n\t-- while true do\n\t--     local p=sim.getObjectPosition(objHandle,-1)\n\t--     p[1]=p[1]+0.001\n\t--     sim.setObjectPosition(objHandle,-1,p)\n\t--     sim.switchThread()\n\t-- end\nend\n\n-- Put some initialization code here:\nsim.setThreadSwitchTiming(2) -- Default timing for automatic thread switching\n\n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n\tsim.addStatusbarMessage(\'Lua runtime error: \'..err)\nend\n\n-- Put some clean-up code here:\nsimRemoteApi.start(19999)\n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'week11', 'text': '', 'tags': '', 'url': 'week11.html'}, {'title': 'task3', 'text': '影片直播 \n \n', 'tags': '', 'url': 'task3.html'}, {'title': 'week12', 'text': '', 'tags': '', 'url': 'week12.html'}, {'title': 'topic', 'text': '題目\xa0 \n \n 下載 RoboDK 5.2.2 及pick and place \n \xa0 下載 RoboDK 5.2.2 可攜程式 \xa0 ( 5.2.3 ) - 可用於工業機械手臂離線設計與模擬 \n Pick and Place 檔案下載 \n 開啟 Pick and Place 專案檔案後, Python 以 pip install robodk 後, 可以開啟下列控制程式, 逐一由機械手臂將球從 Table1 取放至 Table2, 圓球排列方式採\xa0 Square Pyramid . 使用者可精確送出各球座標位置, 導引機械手臂取放圓球 \n \n', 'tags': '', 'url': 'topic.html'}, {'title': '影片直播', 'text': '第一支 \n \n 第二支 \n \n', 'tags': '', 'url': '影片直播.html'}, {'title': 'week13', 'text': 'RoboDK 機械手臂 Pick and Place Python API 程式: \n 下載 RoboDK 5.2.2 可攜程式 \xa0 ( 5.2.3 )\xa0 \n 完整的\xa0 Pick and Place 檔案下載 \n 下載 CoppeliaSim 4.1.0 可攜程式 \xa0 (使用舊版的)\xa0 \n \n', 'tags': '', 'url': 'week13.html'}, {'title': 'week14', 'text': '創造第二個雲端 Gitlab(第二次備份) \n Gitlab 同步 \n 要利用 Gitlab 同步位於 Github 上的 CMSiMDE 倉儲與 Github Pages 網頁, 需要注意以下兩個要點: \n \n 完成 \xa0 \xa0 \xa0 帳號申請與驗證. \n 在原先 Github 倉儲中增加一個 .gitlab-ci.yml 檔案, 目的是用來產生與倉儲對應的 Gitlab Pages 網站. \n \n step1. 申請帳號 \n \n step2. 設定(記得設為Private) \n \n \n step3. 把github的資料推到Gitlab上面 \n \n \n Y:\\>G:\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2>cd data\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data>cd tmp\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data\\tmp>cd cd2021\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data\\tmp\\cd2021>git push gitlab\n \n \n', 'tags': '', 'url': 'week14.html'}, {'title': 'week15', 'text': '', 'tags': '', 'url': 'week15.html'}]};