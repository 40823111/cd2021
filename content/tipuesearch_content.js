var tipuesearch = {"pages": [{'title': 'Introduction', 'text': 'Github:\xa0  許耀中的Github \n Website: 許耀中的 Website \n Youtube: 許耀中的Youtube Stage1 分組倉儲:  stage1 ag6 \n Stage2 \n 分組倉儲:  stage2 ag6 \n Stage3 \n 分組倉儲:  stage3 ag5 \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'leo', 'text': '', 'tags': '', 'url': 'leo.html'}, {'title': 'edit blog', 'text': '一開始你的leo是黑色的， 如果你想換成白色的 \n step1. 到File裡的 Open-Outline \n \n Step2.進到你的tmp →cd2021→config \n \n Step3. touch pelican.leo \n \n \n 新建disqus \n \n \n 改設定到遠端的pelican 劃紅線的是需要改的設定\xa0 discqus sitename 填你新建disqus的名字(Webside name) \n \n 指令 @others 就是可以當編輯這個網頁要編輯下一張的時候，下一張的開頭位置會是你上一張結尾的後面 \n 可以繼續編排不會亂 \n \n', 'tags': '', 'url': 'edit blog.html'}, {'title': 'edit\xa0Reveal', 'text': '1.先進入Leo \n \n 2.到cd2021 ➝config \n \n 3.選擇下面的reveal.leo \n \n 4.就可以開始編輯了 \n \n', 'tags': '', 'url': 'edit\xa0Reveal.html'}, {'title': 'old repositories update', 'text': '1.因為舊的repositiors和更新版只差7個更新檔案，所以只需要git pull 更新檔案就好、所以 \n Step1.到你的cmsimde  →\xa0 git pull origin master \n \n Step2.他就會顯示已經download 7個檔案 \n \n 檔案說明: \n \n init.py \xa0 - 其中的 site_title, ip 與 port 可以讓使用者自行修改, site_title 是網站標題, ip 為動態網站啟動時所使用的網路位址, 可設為內部或外部 IPv4 (IPv6), port 則是動態網站啟動時所佔用的埠號. \n http-server.py \xa0 - 執行後會使用內建的 localhost 與 port 8444 伺服 content 子目錄中的 CMSiMDE 靜態網頁. \n cms.bat \xa0 - 讓使用者執行動態網站用的批次檔案. \n acp.bat \xa0 - 若使用者已經將倉儲設為 ssh 連線, 且提供遠端與近端的認證模式, 則可以在執行此批次指令之後加上提交字串, 即可執行 git add ., git commit -m "提交訊息", 以及 git push 等三個指令. \n \n \n Step3. 到你的 updir 把你的更新檔複製到你的cd2021 →\xa0complete→ 以後你的工作都在cd2021 \n \n Step4. \n 以後要開cmsimde(到你的cd2021)=cms(動態就會自己開) \n 以後要開上傳(到你的cd2021)=acp\xa0 \n', 'tags': '', 'url': 'old repositories update.html'}, {'title': 'repositories\xa0create', 'text': 'notice: 因為cmsimde改版 所以設定全部更新 \n (1)system  cd2021可攜系統\xa0 \n (2)download\xa0  kmol2021 spring\xa0 v2.7z \n (3) 改 gitconfig \xa0 \n \xa0 \n \n \n \n (4)Repository: \xa0 https://github.com/mdecourse/cmstemplate \n \xa0 利用 cmstemplate 建立以 CMSiMDE 作為子模組的動態與靜態網站方法為: \n \n 登入 Github 帳號 \n 將瀏覽器指向 \xa0 https://github.com/mdecourse/cmstemplate \n \n \n \xa0(5) inside the page 填寫資料 \n \n (6) 打指令\xa0git clone --recurse-submodules https://github.com/40823111/cd2021.git \n \n (7)進入 cd2021 →cmsimde→up_dir(裡面有5個檔案) \n \n \n (7) 完成後 就可以git push \n acp.bat 內容 \n echo off\nset message=%1\ngit add .\ngit commit -m %message%\ngit push \n \n \n \n', 'tags': '', 'url': 'repositories\xa0create.html'}, {'title': 'stage1', 'text': '', 'tags': '', 'url': 'stage1.html'}, {'title': 'week1', 'text': '第一階段分組協同實習: \n 每週分組報告必須包含 html, pdf 與 Youtube 影片: \n 標題: \xa0 2021-協同產品設計實習-stage1-ag1 \n 專題題目: \n 第一位組員學號:40823111 \n 第二位組員學號:40823139 \n \n \n 交付給各組的實習任務: \n \n 請在各組組長的 Github 帳號下建立各組的分組網站, 惟在 W1 進行各班定組序過程中, 發現即便採用 Ethercalc 以網際協同方式同步讓各班自選組員填入兩兩成組的學員學號, 但仍缺人工或自動定各班組序的有效方案, 在此責成各組在進行自選的協同產品開發項目之際 (W2-W4), 將此議題列為必選的題目之一, 詳細說明各組認為最有效率的第一階段與訂定組序的方法及流程. \n 此外, 為了讓各組在 stage1 分組協同實習過程, 能透過網誌發表各組組員在 W2-W4 過程中的各項作為與心得報告, 說明可利用 Leo Editor 協助 CMSiMDE 中的 Pelican 發表協同網誌, 其目的是讓各分組在協同期間, 能完整呈現各階段所留下的網誌紀錄. 但此方式必須熟悉 Leo Editor 的操作, 因此有關透過 Pelican 建立協同網誌一事, 除利用 Leo Editor 協助設定並建立 pelican 網誌外, 也將此議題列為各組在 Stage1 協同產品設計流程中必選題目之二, 請各組詳細說明採用或不採用 Leo Editor 的兩種情況下, 各組員在設定與建立協同網誌的過程所可能遭遇或產生的問題與解決方案. \n \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '我們的主題 及 進度說明 \n 題目:套圈遊樂器 動機:經常於夜市中看到的套圈圈，於軟體中進行模擬與參數調整，對其分析統整，求得各類結果 第二周:零件創建與機構改善 第三周:軟體模擬與程式編輯 第四周:統整結果與報告內容 \n \n 這是把圈圈送到上面的運輸機構 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'week3', 'text': '機構 程式 \n 1.機構完成 運送機構改善配合及組裝(inventor 組合圖) \n \n \xa0各種零件檔 \n 2.程式模擬(測試爪子的路徑和抓的力道) \n \n 改良 \n 1.因為前面設計的機構太過理想，雖然在inventor上可以模擬，但是到CoppeliaSim由於干涉太多及運動過程中會有震動，導致圈圈沒辦法正常運送 \n \n', 'tags': '', 'url': 'week3.html'}, {'title': 'week4', 'text': '1.工程圖 \n \n \n 2.爆炸圖 \n \n \n 3.完成品 \n \n', 'tags': '', 'url': 'week4.html'}, {'title': 'stage2', 'text': '', 'tags': '', 'url': 'stage2.html'}, {'title': 'week5', 'text': 'step2 題目 : 自動打球機及手動接球 \n 設計 自動送球機構 及 接球手套 機械手臂打球(打者) 和 手動機械手臂接球(防守者) \n', 'tags': '', 'url': 'week5.html'}, {'title': 'week6', 'text': '設計理想 \n \n 一個平台(棒球場) 球打出去後可以接球(防守者) 漏接的球可以自動流回輸送台，再次被送回來 \n 使用類似螺紋的概念把球輸送到想要的平台 \n 希望可以把球的軌跡沿著螺旋線上升 \n 做成一個循迴機構 \n \n 創建協同 \n step1 組長創一個創一個respoitory\xa0 \xa0 組員創一個和組長一模一樣的 respoitory的名子 \n step2 在github裡new respoitory 互相邀請\xa0 \n step3 組長 git clone --recurse-submodules https://github.com/40823111/cd2021.git \n \n step3\xa0 git remote add 組員的學號 https://github.com/ 組員的學號 /stage2-ag6.git \n \xa0 \xa0 \xa0 \xa0 \xa0 組長授權給組員 \n 流程示意圖 \n \n', 'tags': '', 'url': 'week6.html'}, {'title': 'week7', 'text': '\n 模擬失敗\xa0 \n \xa0問題 1. 因為我們是設計螺旋線的上升機構， 所以到輸送平台時把它用直線，導致不符合公差尺寸而跑掉 \n \xa0解決1.\xa0 改善後 把它改成符合螺旋線的入口 \n \xa0 \xa0 \n CoppeliaSim模擬與運送機構創建 \n 整體運用重點: \n \n 向本週主軸:CoppeliaSim模擬與運送機構創建 \n \n 整體運用重點: \n \n IK逆運動學 \n 正向運動學 \n 送球機構創建 \n \n 本週問題: \n \n 多軸手臂的運動預測 \n 送球機構創建未果 \n 球受力後的運動路徑預測 \n \n 問題改善: \n \n 藉由DH法做運動預期 \n 加入運動學運算 \n \n', 'tags': '', 'url': 'week7.html'}, {'title': 'week8', 'text': '送球機構 \n 問題1 :\xa0 球進不去 只能靠後面球的推力才可以勉強塞進去 \n \n \n \n 問題2. 球進去後機構也沒辦法把球推上去 因為斜角太斜導致球會網協度相對小的地方(入口)滾動 \n \n \n \n \n \n 改善: 斜度改小 把凹槽加長 使凹槽和倒角之間有一個倒三角形可以讓球跑到裡面卡住 不會往後滾 \n', 'tags': '', 'url': 'week8.html'}, {'title': 'week9', 'text': '\n \n \n 棒球模擬機.ttt \n', 'tags': '', 'url': 'week9.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'week10', 'text': '', 'tags': '', 'url': 'week10.html'}, {'title': 'task1', 'text': '讀取 stage3_2a.txt, 建立 Stage3 的分組倉儲, 分組網頁, 以及各組員倉儲及網頁連結 \n \n \n \n with open("stage3_2a.txt") as gp:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = gp.readlines()\n    data = [d.replace(\'4823122\',\'40823122\') for d in data]\n    data = [v.replace(\'\\t\\t\\t\\t\',\'\') for v in data]\n#print(len(data))\nfor p in range(len(data)):\n    group = data[p].rstrip("\\n").split("\\t")\n    print(\'<p>\'+group[0]+\' | <a href="https://\'+group[1]+\'.github.io/stage3-ag\'+group[0][9]+\'">網站</a>  <a href="https://github.com/\'+group[2]+\'/stage3-ag\'+group[0][9]+\'">倉儲</a></p>\')\n    for  q in range(2,18,2):\n        try:\n              print(\'<p>\'+group[q]+\' | Website:\'+\'<a href="https://\'+group[q]+\'.github.io/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Repository:\'+\'<a href="https://github.com/\'+group[q]+\'/cd2021\'+\'">\'+group[q]+\'</a>\'+\' | Group Website:\'+\'<a href="https://\'+group[q]+\'.github.io/stage3-ag\'+group[0][9]+\'">\'+group[q]+\'</a></p>\' )\n        except:\n            continue \n \n \n stage3_ag1 |  網站   倉儲 \n 40823131 | Website: 40823131  | Repository: 40823131  | Group Website: 40823131 \n a40823112 | Website: a40823112  | Repository: a40823112  | Group Website: a40823112 \n 40823123 | Website: 40823123  | Repository: 40823123  | Group Website: 40823123 \n 40823145 | Website: 40823145  | Repository: 40823145  | Group Website: 40823145 \n 40823136 | Website: 40823136  | Repository: 40823136  | Group Website: 40823136 \n 40823109 | Website: 40823109  | Repository: 40823109  | Group Website: 40823109 \n 40823116 | Website: 40823116  | Repository: 40823116  | Group Website: 40823116 \n 40823108 | Website: 40823108  | Repository: 40823108  | Group Website: 40823108 \n stage3_ag2 |  網站   倉儲 \n 40823151 | Website: 40823151  | Repository: 40823151  | Group Website: 40823151 \n 40623121 | Website: 40623121  | Repository: 40623121  | Group Website: 40623121 \n 40871106 | Website: 40871106  | Repository: 40871106  | Group Website: 40871106 \n 40823102 | Website: 40823102  | Repository: 40823102  | Group Website: 40823102 \n 40823104 | Website: 40823104  | Repository: 40823104  | Group Website: 40823104 \n 40823106 | Website: 40823106  | Repository: 40823106  | Group Website: 40823106 \n 40823101 | Website: 40823101  | Repository: 40823101  | Group Website: 40823101 \n 40823132 | Website: 40823132  | Repository: 40823132  | Group Website: 40823132 \n stage3_ag3 |  網站   倉儲 \n 40823119 | Website: 40823119  | Repository: 40823119  | Group Website: 40823119 \n 40823150 | Website: 40823150  | Repository: 40823150  | Group Website: 40823150 \n 40823103 | Website: 40823103  | Repository: 40823103  | Group Website: 40823103 \n 40823107 | Website: 40823107  | Repository: 40823107  | Group Website: 40823107 \n 40523252 | Website: 40523252  | Repository: 40523252  | Group Website: 40523252 \n 40823154 | Website: 40823154  | Repository: 40823154  | Group Website: 40823154 \n stage3_ag4 |  網站   倉儲 \n 40823142 | Website: 40823142  | Repository: 40823142  | Group Website: 40823142 \n 40823144 | Website: 40823144  | Repository: 40823144  | Group Website: 40823144 \n 40823127 | Website: 40823127  | Repository: 40823127  | Group Website: 40823127 \n 40823148 | Website: 40823148  | Repository: 40823148  | Group Website: 40823148 \n 40823121 | Website: 40823121  | Repository: 40823121  | Group Website: 40823121 \n 40823135 | Website: 40823135  | Repository: 40823135  | Group Website: 40823135 \n 40823114 | Website: 40823114  | Repository: 40823114  | Group Website: 40823114 \n 40823146 | Website: 40823146  | Repository: 40823146  | Group Website: 40823146 \n stage3_ag5 |  網站   倉儲 \n 40823111 | Website: 40823111  | Repository: 40823111  | Group Website: 40823111 \n 40823115 | Website: 40823115  | Repository: 40823115  | Group Website: 40823115 \n 40823128 | Website: 40823128  | Repository: 40823128  | Group Website: 40823128 \n 40823120 | Website: 40823120  | Repository: 40823120  | Group Website: 40823120 \n 40823140 | Website: 40823140  | Repository: 40823140  | Group Website: 40823140 \n 40823124 | Website: 40823124  | Repository: 40823124  | Group Website: 40823124 \n 40823139 | Website: 40823139  | Repository: 40823139  | Group Website: 40823139 \n 40823126 | Website: 40823126  | Repository: 40823126  | Group Website: 40823126 \n stage3_ag6 |  網站   倉儲 \n 40823152 | Website: 40823152  | Repository: 40823152  | Group Website: 40823152 \n 40823110 | Website: 40823110  | Repository: 40823110  | Group Website: 40823110 \n 40823122 | Website: 40823122  | Repository: 40823122  | Group Website: 40823122 \n 40823125 | Website: 40823125  | Repository: 40823125  | Group Website: 40823125 \n 40823117 | Website: 40823117  | Repository: 40823117  | Group Website: 40823117 \n 40823129 | Website: 40823129  | Repository: 40823129  | Group Website: 40823129 \n 40823149 | Website: 40823149  | Repository: 40823149  | Group Website: 40823149 \n 40823153 | Website: 40823153  | Repository: 40823153  | Group Website: 40823153 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '採 Python remote API 進行操控 \n \n step1\xa0\xa0 \n 先把5個檔案放在同一個資料夾 \n \n \n step2 \n 打開CoppliaSim(4.2.0)把你要的檔案丟進去\xa0\xa0 \n \n \n step3 \n 把程式複製放在主體的上面(如果沒有可以自己新增) \n \n \n threadFunction=function()\n\t-- Put your thread code here (initialization and clean-up code should not be in here)\n\n\t\n\t-- Some EXTERNAL commands (e.g. socket commands provided by Lua libraries)\n\t-- might appear as blocking to the simulator. In that case, you can define\n\t-- a non-blocking section as following example shows:\n\t--\n\t-- sim.setThreadIsFree(true) -- Start of the non-blocking section\n\t--\n\t-- Following 2 lines are meant as an example of EXTERNAL blocking commands:\n\t-- http = require("socket.http")\n\t-- print(http.request("http://www.google.com"))\n\t--\n\t-- sim.setThreadIsFree(false) -- End of the non-blocking section\n\t--\n\t-- While in a non-blocking section, try to avoid calling sim-functions. Also\n\t-- never forget to close the blocking section, otherwise V-REP will hang.\n\t-- Make sure you read the information related to the sim.setThreadIsFree\n\t-- API function in V-REP\'s documentation.\n\n\n\t-- If you wish to synchronize a threaded loop with each simulation pass,\n\t-- set the thread switch timing in the initialization phase of this script\n\t-- to the maximum (200), and manually switch thread here with the\n\t-- sim.switchThread() command. \n\t-- ( sim.switchThread() will suspend this script\'s execution until next\n\t-- simulation pass, i.e. until the simulation time has changed )\n\t--\n\t-- Following example illustrates this:\n\t-- \n\t-- while true do\n\t--     local p=sim.getObjectPosition(objHandle,-1)\n\t--     p[1]=p[1]+0.001\n\t--     sim.setObjectPosition(objHandle,-1,p)\n\t--     sim.switchThread()\n\t-- end\nend\n\n-- Put some initialization code here:\nsim.setThreadSwitchTiming(2) -- Default timing for automatic thread switching\n\n-- Here we execute the regular thread code:\nres,err=xpcall(threadFunction,function(err) return debug.traceback(err) end)\nif not res then\n\tsim.addStatusbarMessage(\'Lua runtime error: \'..err)\nend\n\n-- Put some clean-up code here:\nsimRemoteApi.start(19999)\n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'week11', 'text': '', 'tags': '', 'url': 'week11.html'}, {'title': 'task3', 'text': '影片直播 \n \n', 'tags': '', 'url': 'task3.html'}, {'title': 'week12', 'text': '', 'tags': '', 'url': 'week12.html'}, {'title': 'topic', 'text': '題目\xa0 \n \n 下載 RoboDK 5.2.2 及pick and place \n \xa0 下載 RoboDK 5.2.2 可攜程式 \xa0 ( 5.2.3 ) - 可用於工業機械手臂離線設計與模擬 \n Pick and Place 檔案下載 \n 開啟 Pick and Place 專案檔案後, Python 以 pip install robodk 後, 可以開啟下列控制程式, 逐一由機械手臂將球從 Table1 取放至 Table2, 圓球排列方式採\xa0 Square Pyramid . 使用者可精確送出各球座標位置, 導引機械手臂取放圓球 \n \n', 'tags': '', 'url': 'topic.html'}, {'title': '影片直播', 'text': '第一支 \n \n 第二支 \n \n', 'tags': '', 'url': '影片直播.html'}, {'title': 'week13', 'text': '', 'tags': '', 'url': 'week13.html'}, {'title': 'RoboDK 機械手臂 Pick and Place Python API 程式:', 'text': '下載 RoboDK 5.2.2 可攜程式 \xa0 ( 5.2.3 )\xa0 \n 完整的\xa0 Pick and Place 檔案下載 \n 下載 CoppeliaSim 4.1.0 可攜程式 \xa0 (使用舊版的)\xa0 \n \n', 'tags': '', 'url': 'RoboDK 機械手臂 Pick and Place Python API 程式:.html'}, {'title': 'FANUC_M710iC_50 機械手臂Remote Api', 'text': 'FANUC_M710iC_50.ttt \n \n \n import sim as vrep\nimport sys\nimport keyboard\nimport math\nimport time\n# child threaded script: \n#simExtRemoteApiStart(19999)\n  \nvrep.simxFinish(-1)\nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\nerrorCode,left_motor_handle=vrep.simxGetObjectHandle(clientID,\'Revolute_joint\',vrep.simx_opmode_oneshot_wait)\nerrorCode,right_motor_handle=vrep.simxGetObjectHandle(clientID,\'Revolute_joint1\',vrep.simx_opmode_oneshot_wait)\n \n \nif clientID!= -1:\n    print("Connected to remote server")\n    while True: \n        try:\n            if keyboard.is_pressed(\'up\'):\n                  vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,-0.1, vrep.simx_opmode_oneshot_wait)\n                  vrep.simxSetJointTargetVelocity(clientID,right_motor_handle,-0.1, vrep.simx_opmode_oneshot_wait)\n                  print(\'up\')\n            if keyboard.is_pressed(\'down\'):     \n                  vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,0.1, vrep.simx_opmode_oneshot_wait)\n                  vrep.simxSetJointTargetVelocity(clientID,right_motor_handle,0.1, vrep.simx_opmode_oneshot_wait)\n                  print(\'down\')\n            if keyboard.is_pressed(\'space\'):\n                  vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,0 , vrep.simx_opmode_oneshot_wait)\n                  print(\'space\')\n            if keyboard.is_pressed(\'z\'):\n                 vrep.simxSetJointTargetVelocity(clientID,left_motor_handle,0 , vrep.simx_opmode_oneshot_wait)\n                 print(\'break \')\n                 break\n            else:\n                pass\n        except:\n            break\nelse: \n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \n \n \n', 'tags': '', 'url': 'FANUC_M710iC_50 機械手臂Remote Api.html'}, {'title': 'week14', 'text': '創造第二個雲端 Gitlab(第二次備份) \n Gitlab 同步 \n 要利用 Gitlab 同步位於 Github 上的 CMSiMDE 倉儲與 Github Pages 網頁, 需要注意以下兩個要點: \n \n 完成 \xa0 \xa0 \xa0 帳號申請與驗證. \n 在原先 Github 倉儲中增加一個 .gitlab-ci.yml 檔案, 目的是用來產生與倉儲對應的 Gitlab Pages 網站. \n \n step1. 申請帳號 \n \n step2. 設定(記得設為Private) \n \n \n step3. 把github的資料推到Gitlab上面 \n \n \n Y:\\>G:\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2>cd data\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data>cd tmp\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data\\tmp>cd cd2021\n\nG:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data\\tmp\\cd2021>git push gitlab\n \n \n', 'tags': '', 'url': 'week14.html'}, {'title': 'week15', 'text': '\n', 'tags': '', 'url': 'week15.html'}, {'title': 'part 1-joint', 'text': "\n We saw this simple two-link robot in the previous lecture about forward kinematics. \n 我們在上一堂關於正向運動學的講座中看到了這個簡單的雙連桿機器人 \n The tooltip pose of this robot is discribed simply by two number ,the coordinates x and y\xa0with \n respect to the world coordinate frame. \n 這個機器人的工具提示位姿簡單地由兩個數字來描述，坐標 x 和 y 與相對於世界坐標系。 \n So, the problem here is that given x and y, we want to determine the joined angles, Q1 and \n Q2.\xa0\xa0 \n 所以，這裡的問題是給定 x 和 y，我們想要確定連接角 Q1 和 Q2。 \n The solution that we're going to follow in this particular section is a geometric \n 我們將在本節中遵循的解決方案是幾何 \n ONE. We're going to start with a simple piece of construction. \n 一。 我們將從一個簡單的結構開始。 \n We're going to overlay the red triangle on top of our robot. \n 我們將在我們的機器人頂部覆蓋紅色三角形。 \n We know that the end point coordinate is x, y, so the vertical height of the triangle is y,horizontal width is x. \n 我們知道終點坐標是x，y，所以三角形的垂直高度是y，水平寬度是x。 \n And, using Pythagoras theorem, we can write thagoras r squared equals x squared plus y squared. \n 並且，使用畢達哥拉斯定理，我們可以寫出 畢氏定理\xa0 r 平方等於 x 平方加 y 平方。 \n So far.so easy. Now, we're going to look at this triangle highlighted here in red and we want to determine the angle alpha. \n 到目前為止，很容易。 現在，我們將查看此處以紅色突出顯示的三角形，我們要確定角度α。 \n In order to do that, we need to use the cosine rule. \n 為了做到這一點，我們需要使用 cos 規則。 \n And, if you're a little rusty on the cosine rule, here is a bit of a refresher. \n 而且，如果你對 cos 規則有點生疏，這裡有一點複習。 \n We have an arbitrary triangle. \n 我們有一個任意三角形。 \n We don't have to have any right angles in it and we're going to label the length of this edge as A and the angle opposite that edge, we're going to label as little a. \n 我們不必在其中有任何直角，我們將這條邊的長度標記為 A，而與該邊相對的角度，我們將標記為小 a。 \n And, we do the same for this edge and this angle, and this edge and this angle. \n 並且，我們對這條邊和這個角，以及這條邊和這個角做同樣的事情。 \n So, all together, the sides are labelled capitals A, B and C, and the angles are labelled little a, little b, and little c. \n 因此，所有邊都標記為大寫字母 A、B 和 C，角標記為小 a、小 b 和小 c。 \n So, the cosine rule is simply this relationship here. \n 所以，cos 規則就是這裡的這種關係。 \n It's a bit like Pythagoras' theorem except for this extra term on the end with the cos a in it. \n 它有點像畢達哥拉斯的定理，除了最後一個額外的術語，其中有 cos a。 \n Now, let's apply the cosine rule to the particular triangle we looked at a moment rul ago. \n 現在，讓我們將 cos 規則應用於我們剛才看到的特定三角形。 \n It's pretty straightforward to write down this particular relationship. \n 寫下這種特殊關係非常簡單。 \n We can isolate the term cos alpha which gives us the angle alpha that we're interested in. \n 我們可以分離出術語 cos α，它為我們提供了我們感興趣的角度 α。 \n And, it's defined in terms of the constant link lengths, A1 and A2 and the position of the end effector,x and y. \n 而且，它是根據恆定連桿長度 A1 和 A2 以及末端執行器的位置 x 和 y 定義的。 \n We can write this simple relationship between the angles alpha and Q2. \n 我們可以寫出角度 α 和 Q2 之間的這種簡單關係。 \n And, we know from the shape of the cosine function that cos of Q2 must be equal to negative of cos alpha. \n 而且，我們從餘弦函數的形狀知道，Q2 的 cos 必須等於 cos α 的負值。 \n This time, let's just write an expression for the cosine of the joined angle Q2. \n 這一次，讓我們為連接角 Q2 的cos寫一個表達式。 \n Now, we're going to draw yet another red triangle and we're going apply some simple trigonometry here. \n 現在，我們將繪製另一個紅色三角形，並在此處應用一些簡單的三角函數。 \n If we know Q2, then we know this length and this length of the red triangle. \n 如果我們知道 Q2，那麼我們就知道這個長度和這個紅色三角形的長度。 \n We can write this relationship for the sine of the joined angle Q2. \n 我們可以為連接角 Q2 的 sin 寫出這種關係。 \n Now, we can consider this bigger triangle whose angle is beta and this side length of the triangle is given here in blue. \n 現在，我們可以考慮這個更大的三角形，它的角是β，三角形的這條邊長在這裡用藍色給出。 \n And, the length of the other side of the triangle is this. \n 並且，三角形另一邊的長度是這個。 \n So, now we can write an expression for the angle beta in terms of these parameters here. \n 所以，現在我們可以在此處根據這些參數編寫角度\xa0 β \xa0的表達式。 \n Going back to the red triangle that we drew earlier, we can establish a relationship between Q1 and the angle beta. \n 回到我們之前畫的紅色三角形，我們可以建立 Q1和角度 β 之間的關係。 \n Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y. \n 引入另一個角度，這個 ɣ，我們可以寫出角度 ɣ 和工具提示坐標 x 和 y 之間的關係。 \n Now, we can write a simple relationship between the angles that we've constructed, gamma and beta and the joined angle we're interested in which is Q1. \n 現在，我們可以在我們構建的角度  ɣ\xa0 和  β  與我們感興趣的連接角度 Q1 之間寫出一個簡單的關係。 \n And, the total relationship looks something like this. \n 而且，整個關係看起來像這樣。 \n Quite a complex relationship, it gives us the angle of joined one, that's Q1 in terms of the end effector coordinates y and x, and a bunch of constants, a1 and a2, and it's also a function of the second joint angle, Q2. \n 相當複雜的關係，它為我們提供了連接的角度，即根據末端執行器坐標 y 和 x 的 Q1，以及一系列常量 a1 和 a2，它也是第二個關節角度 Q2 的函數。 \n So, let's summarize what it is that we have derived here.1 \n 所以，讓我們總結一下我們在這裡得出的結論。1 \n We have an expression for the cosine of Q2 and we have an expression for Q1. \n 我們有 Q2 的 cos 表達式和 Q1 的表達式。 \n Now, the cosine function is symmetrical about 0. \n 現在，cos 函數關於 0 對稱。 \n So, if we know the value of the cosine of Q2, then there are two possible solutions, a positive angle and a negative angle \n 所以，如果我們知道 Q2 的 cos 值，那麼有兩種可能的解，一個正角和一個負角 \n We're going to explicitly choose the positive angle, which means that I can write this expression here. \n 我們將明確選擇正角，這意味著我可以在這裡寫這個表達式。 \n And now, we have what we call the inverse kinematic solution for this two-link robot. \n 現在，我們有了這個雙連桿機器人的逆運動學解決方案。 \n We have an expression for the two joined angles, Q1 and Q2 in terms of the end effector pose x and y, and a bunch of constants. \n 我們有兩個連接角 Q1 和 Q2 的表達式，根據末端執行器姿勢 x 和 y 以及一系列常數。 \n You notice that the two equations are not independent. \n 你注意到這兩個方程不是獨立的。 \n The equation for Q1, in fact, depends on the solution for Q2. \n 事實上，Q1 的方程取決於 Q2 的解。 \n In this case, Q2 is negative and we're going to write the solution for Q2 with a negative sign in front of the inverse cosine. \n 在這種情況下，Q2 是負數，我們將在反 cos 前用負號編寫 Q2 的解。 \n Now, we need to solve for Q1, so we're going to introduce this particular red triangle, the angle beta that we solved previously, and the angle gamma which is defined in terms of y and x. \n 現在，我們需要求解 Q1，因此我們將介紹這個特定的紅色三角形、我們之前求解的角度  β  以及根據 y 和 x 定義的角度 ɣ。 \n Now, we write a slightly different relationship between q1, gamma and beta, different to what we had before. \n 現在，我們在 q1、ɣ\xa0 和 β 之間寫出略有不同的關係，與我們之前的關係不同。 \n There’s a change of sign involved. \n 涉及到符號的變化。 \n Then, we can substitute all that previous equation and come up with this expression for q1. \n 然後，我們可以替換之前的所有等式，並得出 q1 的這個表達式。 \n Again, there is a change of sign here. \n 同樣，這裡的符號發生了變化。 \n Previously, this was a negative sign. \n 以前，這是一個負面信號。 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration, where q2 is negative. \n 並且，這裡總結性地是我們的雙連桿機器人在這種特定配置下的逆運動學的解決方案，其中 q2 是負數。 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative. \n 讓我們比較兩個解決方案，q2 為正的情況和 q2 為負的情況。 \n", 'tags': '', 'url': 'part 1-joint.html'}, {'title': 'part 2-joint', 'text': "\n \n Here we have the same two link robot as we just looked at but this time we're going tosolve it using an analytical approach , that is we're going to rely much more on algebra ,particular linear algebra rather than geometry . \n 在這裡，我們有與剛剛看到的相同的兩連桿機器人，但這次我們將使用分析方法來解決它，也就是說，我們將更多地依賴代數，特別是線性代數而不是幾何。 \n We have an expression E , which is the homogeneous transformation which represents the pose of the robots endefector and we looked at this in the last lecture , we can write the endefector pose as a sequence of elementary homogeneous transformations . \n 我們有一個表達式 E，它是表示機器人末端位姿的齊次變換，我們在上一課中看到了這一點，我們可以將末端位姿寫為一系列基本齊次變換。 \n A rotation by Q1 , a translation along the X direction by A1 , a rotation by Q2 and then a translation in the X direction by A2 . \n Q1 旋轉，A1 沿 X 方向平移，Q2 旋轉，然後 A2 沿 X 方向平移。 \n If I expand this out , multiply all the transformations together , I get the expression shown here ; a three by three homogeneous transformation matrix representing the pose of the robot's endefector. \n 如果我將其展開，將所有變換相乘，就會得到此處所示的表達式； 一個三乘三的齊次變換矩陣，表示機器人的終結者的姿態 \n Now for this particular two link robot , we are only interested in the position of its endefector , it's X and Y co - ordinate and they are these two elements within the homogeneous transformation matrix , so I'm going to copy those out . \n 現在對於這個特殊的兩連桿機器人，我們只對它的末端位置感興趣，它是 X 和 Y 坐標，它們是齊次變換矩陣中的這兩個元素，所以我將把它們複製出來。 \n So here again is our expression for X and Y and what we're going to do is a fairly common trick , we're going to square and add these two equations and I get a relationship that looks like this . \n 所以這裡又是我們對 X 和 Y 的表達式，我們要做的是一個相當常見的技巧，我們要平方並添加這兩個方程，我得到一個看起來像這樣的關係。 \n Now I can solve for the joint angle Q2 in terms of the endefector pose X and Y and the robot's constants A1 and A2. \n 現在我可以根據末端姿勢 X 和 Y 以及機器人的常數 A1 和 A2 來求解關節角度 Q2。 \n Now what I'm going to do is apply the sum of angles identity . \n 現在我要做的是應用角度之和 。 \n I'm going to expand these terms, sine of Q1 plus Q2 or cos of Q1 plus Q2 and to make life a little bit easier, I'm going to make some substations, so where ever I had cos Q2, I'm going to write C2 and where ever I had sine Q2, I'm going to write S2. \n 我將擴展這些術語，Q1 的sin加 Q2 或 Q1 的 cos 加 Q2，為了讓生活更輕鬆一點，我將建造一些變電站，所以只要有 cos Q2，我就會去 寫 C2 並且在我有正弦 Q2 的地方，我要寫 S2。 \n It's a fairly common shorthand when people are looking at robot kinematic equations. \n 當人們查看機器人運動學方程時，這是一個相當常見的速記。 \n And here are the equations after making those substitutions. \n 這是進行這些替換後的方程式。 \n Looking at these two equations, I can see that they fall into a very well known form and for that form there is a very well known solution. \n 看看這兩個方程，我可以看到它們屬於一個眾所周知的形式，對於這種形式，有一個眾所周知的解決方案。 \n So I'm going to consider just one of the equations, the equation for Y and using our well known identity and it's solution, I can determine the values for the variables little a, little b and little c and once l've determined those, then I can just write down the solution for Q1, which x is the equivalent of theta in this particular case. \n 所以我將只考慮其中一個方程，Y 的方程，並使用我們眾所周知的恆等式和它的解，我可以確定變量小 a、小 b 和小 c 的值，一旦我確定了這些 ，然後我可以寫下 Q1 的解決方案，在這種特殊情況下，x 相當於 θ。 \n Here again is our expression for Q1, copied over from the previous slide and we may remember from earlier in our workings that we determined this particular relationship; X squared plus Y squared is equal to this particular complex expression. \n 這裡再次是我們對 Q1 的表達，從上一張幻燈片複製過來，我們可能還記得在我們工作的早期，我們確定了這種特殊關係； X 平方加 Y 平方等於這個特定的複雜表達式。 \n So I can substitute that in and do some simplification and I end up with this slightly less complex expression for Q1. \n 因此，我可以將其替換並進行一些簡化，最終得到 Q1 的這個稍微不那麼複雜的表達式。 \n And it is the same expression that I got following the geometric approach in the previous section. \n 這與我在上一節中遵循幾何方法得到的表達式相同。 \n \n", 'tags': '', 'url': 'part 2-joint.html'}, {'title': 'week16', 'text': '', 'tags': '', 'url': 'week16.html'}, {'title': 'Fossil', 'text': 'step1\xa0 download   Fossil \xa0存到 Y 槽 \n step2 打指令\xa0 \n 1. G:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data\\tmp\\W16\\fossil> \n2. fossil clone https://40823111@fossil.kmol.info/u/cda cda.fossil\n3.mkdir cda\n4.G:\\cd2021\\kmol2021_spring_v2\\kmol2021_spring_v2\\data\\tmp\\W16\\fossil\\wd\\cda>\n5.fossil open ./../../cda.fossil\n6. 確定有fossil的檔案 然後把倉儲的資料cd2021裡面的東西全部複製到cda的目錄下\n7.fossil add .\n8.fossil commit -m"檔案名稱 "\n9.確定推上去就成功了\n10. 開啟網頁 https://fossil.kmol.info/u/cda/doc/trunk/index.html\n \n \n \n', 'tags': '', 'url': 'Fossil.html'}, {'title': 'w16', 'text': 'MTB_robot 的取放方塊流程規劃 (Process Planning): \n 1. Onshape 零組件繪製 (20%) \n 零組件必須在 \xa0 Onshape \xa0 繪圖, 並提供可公開分享之零組件連結於頁面及回報區中. \n 2. 建立 CoppeliaSim 4.1.0 MTB robot 場景 (20%) \n 請以自行繪製之零件輸入 CoppeliaSim 後, 組合為 MTB robot 模型, 並利用 Leo Editor 以 require 導入 Lua 程式運作, 分別控制各軸轉動示範, 所完成的所有檔案請存入 W16_exam 後壓縮為 W16_exam.7z 後送至個人 @gm 帳號下的 Google Drive 後將連結設為任何人皆可下載, 並將連結與操作嵌入影片放在 W16 頁面與回報區中 . \n 3. 手臂末端加入 components-gripper-suction pad 吸盤 (20%) \n 請接續上述 MTB robot, 在其末端接上 force sensor 後接上標準 suction pad 後, 分別導入 W15 週線上課程之鍵盤控制程式後, 拍攝影片示範 W15 線上課程中之操作與示範過程. \n 4. 逆向運動學函式 (20%) \n 請根據 W15 線上課程內容之 Inverse Kinematics 方程式 ( 影片1 \xa0 或 影片2 ), 以程式指定方塊取放之兩個位置 - (0.2, 0.7, 0.05) 與 (-0.3, -0.55, 0.05), 以前述 Leo Editor Lua 程式編寫方法, 分別採鍵盤控制與程式迴圈方式執行 W15 兩個指定位置之方塊取放. \n 5. Python remote API 逆向運動學函式 (20%) \n 請利用 Python remote API 程式重現以迴圈方式執行 W15 兩個指定位置之方塊取放. \n', 'tags': '', 'url': 'w16.html'}]};