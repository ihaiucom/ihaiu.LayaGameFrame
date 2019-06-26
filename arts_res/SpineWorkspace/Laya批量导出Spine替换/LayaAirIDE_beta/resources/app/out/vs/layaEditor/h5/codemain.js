var EventEmitter = require('events');
class CodeMain extends EventEmitter {
    constructor(args) {
        // code
        super()
        this.version = "1.9.0";
        this.mode = "code";
        this.clipW = 0;
        this.clipH = 60;
        this.left_scrollHeight = 20;
        this.electron = require("electron");
        this.path = require("path");
        this.fs = require("fs");
        this.remote = this.electron.remote;
        this.require = require;
        // window.layarequire_js = this.require;
        this.childprocess = require('child_process');
        this.langConfig = require("./../../../layarepublic/lang/extension.js").Lang;
        this.panel = this.langConfig.panel;
        this.menuList = this.langConfig.menu;
        this._codechannel = null; //包含code的接口；
        this.uiConfigName = ".laya";
        this.mode = "code";
        this.httpserver = require("http")
        this.layaIDEVersion = "1.7.19.1beta";
        this.localversion = "1.8.9.1601";
        this.portrange = 8900;
        this.layadegbug = false;
        this.recentOpenList = [];
        this.configData = {};
        this.debugName = "layaAir";
        this.degbugerr = false;
        this.windowIPCService = null;
        this.ipcRenderer = this.electron.ipcRenderer;
        window.addMenuListItem = this.addMenuListItem;
        // this.codeDivPop = false;
        window.codeDivPopLayer = false;
        //primary: 66//修改快捷键为f8；
        //this.getCustomTitleBarStyle() && !c.isFullscreen();屏蔽平果title
        this.codeBar = require("./../../../layarepublic/codebar/extension.js");
        this.popLayer = document.createElement("div");
        this.popLayer.style = `position:absolute;z-index:999999;width:inherit;height:inherit`;
        this.initDragBar();
        main();
        this.laya_available_languages = window.laya_available_languages;
        window.langindex = this.getLanguage();
        this.ideConfigObj = localStorage.getItem("ideConfigObj");
        if (this.ideConfigObj) {
            this.ideConfigObj = JSON.parse(this.ideConfigObj);
        }

        this.createBar();
        // return
        if (this.workspacePath) {
            code_panel.style.display = "block";
            this.initRecentOpenList();
            this.initLayaCode();
            this.setUpMacMenu();
            setTimeout(function() {
                layadebugSelect.selectedIndex = localStorage.getItem("layadegbugName") || 1;
                layadebugSelect.onchange = function(e) {
                    localStorage.setItem("layadegbugName", layadebugSelect.selectedIndex);
                }
            }, 5000)
            tscSelect.selectedIndex = localStorage.getItem("tscSelName") || 0;
            let tmpMain = this;
            tscSelect.onchange = function(e) {
                localStorage.setItem("tscSelName", tscSelect.selectedIndex);
                tmpMain.updateTscTask();
            }
        } else {
            setTimeout(function() {
                InitPage();
            }, 1);


        }
        // debugtoobar.style.display = listMenu_con.style.display = "block";

    }

    initDa() {
        let DataSender = require("./da/extension.js");
        this.daSender = DataSender.I;
        this.daSender.activate();
    }

    sendDa() {
        this.daSender.sendservice.apply(this.daSender, arguments);
    }

    updateTscTask(propath, proType) {
        proType = proType || layaProtype;
        if ("ts" !== proType) return;
        propath = propath || this.workspacePath;
        let tasksFile = this.path.join(propath, ".laya", "tasks.json");
        if (!fs.existsSync(tasksFile))
        {
            console.log(tr("no tasks.json, skip update.").green);
            return;
        }

        // 读取和解析 tasks.json
        let tasksFileInString = this.fs.readFileSync(tasksFile).toString();
        let tasks = JSON.parse(tasksFileInString);
        let selIndex = tscSelect.selectedIndex;
        if (0 === selIndex) {
            tasks.command = "tsc";
        } else if (1 === selIndex) {
            tasks.command = this.getIdeTscPath();
        } else {
            console.log("wrong tscSelectIndex: " + selIndex);
            return;
        }
        tasksFileInString = JSON.stringify(tasks);
        this.fs.writeFileSync(tasksFile, tasksFileInString);
    }

    getProTypeStrByIndex(proTypeIndex) {
        let ret = "";
        switch (proTypeIndex) {
            case 0:
                ret = "as";
                break;
            case 1:
                ret = "ts";
                break;
            case 2:
                ret = "js";
                break;
        }
        return ret;
    }

    getIdeTscPath() {
        return this.path.join(remote.app.getAppPath(), "node_modules", ".bin", "tsc");
    }

    getLanguage() {
        var ar = {
            "zh-CN": 0,
            "en": 1,
            "en-US": 1
        }
        return ar[this.laya_available_languages] || 0
    }
    //切换语言
    setLanguage(value) {
        value = value.replace("laya_available_languages_", "");
        var lauguageText = `{
            "locale":"${value}"
        }`;
        var path = this.path.join(remote.app.getPath("userData"), "User");
        this.mkdirsSync(path);
        path = this.path.join(path, "locale.json");
        this.fs.writeFileSync(path, lauguageText);
        var pop = new this.popPanel.ShowPop([codeMain.panel[142][langindex], codeMain.panel[143][langindex]], codeMain.panel[141][langindex], (e) => {
            if (e == codeMain.panel[143][langindex]) {
                this.restartApp();
            }

        });
    }
    set popPanel(value) {
        this._popPanel = value
    }
    get popPanel() {
        return this._popPanel;
    }
    addPopLayer(node) {
        // document.body.appendChild(this.)
        window.codeDivPopLayer = true;
        document.body.appendChild(this.popLayer);
        this.popLayer.style.display = "block";
        this.popLayer.appendChild(node);
        //禁用ui鼠标事件。
    }
    removePopLayer(node) {
        // this.popLayer.style.display = "non";
        console.log("--------------------------------------");
        //启用鼠标事件。
        window.codeDivPopLayer = false;
        this.popLayer.removeChild(node);
        // document.body.removeChild(this.popLayer);
        this.popLayer.style.display = "none";
    }
    addMenuListItem(id, itemName, menuSocketName) {
        uicodeMenuDiv.addNewChild("extensions", 1, itemName + "extensionsUIMenu" + "$" + menuSocketName, itemName);
    }
    initDragBar() {
        // return
        var dragBar = document.createElement("div");
        document.body.appendChild(dragBar);
        var dragInner = `<div style="position: absolute; left: 500px; right: 175px; -webkit-app-region: drag; height: 30px; top: 0px; z-index: 9999999;">
        </div>`;
        dragBar.innerHTML = dragInner;

    }
    onbeforeHandler() {
        var t = 1;
        if (!window.laya) return 1;
        if (laya.editor && laya.editor.view && laya.editor.view.UIPanel.instance.hasChange) {
            var obj = {
                "title": "LayaAir",
                "message": codeMain.getPanelLang(85),
                "type": "warning",
                "detail": codeMain.getPanelLang(86),
                "buttons": [codeMain.getPanelLang(87), codeMain.getPanelLang(88), codeMain.getPanelLang(84)],
                "noLink": true,
                "cancelId": 2
            }
            t = remote.dialog.showMessageBox(remote.getCurrentWindow(), obj);
            if (t == 0) {
                laya.editor.view.UIPanel.instance.saveAll();
            }
        }
        return t;
    }
    //初始化 最近打开
    initRecentOpenList() {
        var list = localStorage.getItem("layarecentOpenList");
        if (list) {
            var tempArr = JSON.parse(list);
            this.recentOpenList.unshift(this.workspacePath);
            for (let i = 0; i < tempArr.length; i++) {
                if (!this.recentOpenList.includes(tempArr[i])) {
                    this.recentOpenList.push(tempArr[i]);
                }
            }
            localStorage.setItem("layarecentOpenList", JSON.stringify(this.recentOpenList));
        } else {
            this.recentOpenList.unshift(this.workspacePath);
            localStorage.setItem("layarecentOpenList", JSON.stringify(this.recentOpenList));
        }
    }
    //ui模式F12调用切换
    initLayaCode() {
        window.changeLayaIDECodeMode = function() {
                codeMain.changeViewMode("code");
            }
            // debugtoobar.style.display = listMenu_con.style.display = "block";

        setTimeout(() => {
            codeMain.restartServer();   //延迟启动内置静态服务器
            this.recentOpen(codeMenuDiv);
        }, 4000);

    }
    recentOpen(list) {
        //(parentId, pos, itemId, text, dis, imgEn, imgDis);
        for (var i = this.recentOpenList.length - 1; i >= 0; i--) {
            this.recentOpenList["listrecentOpenList" + i] = this.recentOpenList[i];
            list.addNewChild("workbench.action.openRecent", 2, "listrecentOpenList" + i, this.recentOpenList[i]);
        }
    }
    //清空最近打开
    clearRecentOpen() {
        //myMenu.removeItem(itemId);
        var list = this.recentOpenList;
        for (var i = 0; i < list.length; i++) {
            var id = "listrecentOpenList" + i;
            codeMenuDiv && codeMenuDiv.removeItem(id);
            uicodeMenuDiv && uicodeMenuDiv.removeItem(id);
        }
        this.recentOpenList = [];
        localStorage.setItem("layarecentOpenList", "");

    }
     //获取项目类型
    get layaProtype() {
        if (!this._layaProtype) {
            if (this.fs.existsSync(this.path.join(this.workspacePath, "tsconfig.json"))) {
                this._layaProtype = "ts";
            } else if (this.fs.existsSync(this.path.join(this.workspacePath, "jsconfig.json"))) {
                this._layaProtype = "js";
            } else if (this.fs.existsSync(this.path.join(this.workspacePath, "asconfig.json"))) {
                this._layaProtype = "as";
            } else {
                this._layaProtype = "as";
            }
        }
        return this._layaProtype
    }
    get codeContainer() {
        if (!this._codeContainer) {
            this._codeContainer = window["workbench.main.container"];
        }
        return this._codeContainer;
    }
    get uiViewContainer() {
        if (!this._uiViewContainer) {
            this._uiViewContainer = window["layaContainer"];
        }
        return this._uiViewContainer;
    }
    get layastoreContainer() {
        if (!this._askContainer) {
            this._askContainer = window["layastoreContainer"]
        }
        return this._askContainer;
    }
    get layasearchContainer() {
        if (!this._layasearchContainer) {
            this._layasearchContainer = window["layasearchContainer"]
        }
        return this._layasearchContainer;
    }
    //获取当前打开的项目路径
    get workspacePath() {
        if (this._workspacePath) {
            return this._workspacePath;
        }
        const e = require("electron").webFrame,
            t = parseURLQueryArgs(),
            n = JSON.parse(t.config || "{}") || {};
        this._workspacePath = n.workspacePath;
        return this._workspacePath;
    }

    getIPAddress() {
        var os = require("os")
        var ifaces = os.networkInterfaces();
        var ipArr = [];
        for (var dev in ifaces) {
            ifaces[dev].forEach(function(details) {
                if (details.family === 'IPv4' && !details.internal) {
                    ipArr.push(details.address);
                    console.log(details.address)
                        // return;
                }
            });
        }
        return ipArr || ["127.0.0.1"];
    }

    //检测端口是否占用
    getPort(cb) {
        var port = this.portrange;
        this.portrange += 1
        var server = this.httpserver.createServer();
        server.listen(port, function(err) {
            server.once('close', function() {
                cb(port)
            });
            server.close();
        });
        server.on('error', function(err) {
            codeMain.getPort(cb);
        })
    }

    //重启内置静态服务器
    restartServer() {
        this.getPort((port) => {
            this.serverUrl = [];
            var ips = this.getIPAddress();
            for (var i = 0; i < ips.length; i++) {
                var layaurl = "http://" + ips[i] + ":" + port + "/";
                if (this.layaProtype == "as") {
                    layaurl = layaurl + "bin/h5/index.html";
                } else {
                    layaurl = layaurl + "bin/index.html";
                }
                this.serverUrl.push(layaurl);
            }

            if (process.platform == "win32") {
                this.fs.writeFileSync(this.path.join(this.remote.app.getPath("appData"), "port.json"), port)
            } else {
                this.fs.writeFileSync(this.path.join(process.env.TMPDIR, "port.json"), port);
            }
            this.executeCommandCode("extension.startServer");
            setTimeout(() => {
                this.emit("restartServerHandler", layaurl);
            }, 1000)

        })

    }
    get codechannel() {
        return this._codechannel;
    }
    set codechannel(callback) {
        this._codechannel = callback;
    }
    set executeCommand(e) {
        this.executeCommandService = e;
    }
    executeCommandCode(e) {
        this.executeCommandService.executeCommand(e);
    }
    //打开文件
    onOpenFile(path) {
        var o = {
            "filesToCreate": [],
            "filesToDiff": [],
            "filesToOpen": [{
                "filePath": path
            }]
        };
        this.windowIPCService.onOpenFiles(o)
    }
    openProLaya() {
        var dialog = this.remote.dialog;
        var options = {
            properties: ["openFile", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['laya', "actionScriptProperties", "as3proj"]
            }]
        };
        dialog.showOpenDialog(null, options, (result) => {
            if (result) {
                console.log(result);
                var path = this.path.dirname(result[0]);
                if (path == this.workspacePath) {
                    alert(codeMain.panel[89][langindex])
                    return;
                }
                codeMain._codechannel.openWindow([path]);
            }
        })
    }
    createProHandler() {
        NewProLaya();
    }
    createNewPro(propath, demopath, libspath, obj) {
        this.proObj = obj;
        console.log("开始创建项目");
        this.copyDir(demopath, propath).then(() => {
            if (0 !== obj.proType) {
                if (1 === obj.proType) {
                    this.updateTscTask(propath, this.getProTypeStrByIndex(obj.proType));
                }
                codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType", obj.proType, "engineType", obj.engineType);
                codeMain._codechannel.openWindow([propath]);
            } else {
                let proFileName;
                switch(obj.layaProType){
                    case 0:
                        proFileName = "LayaSample";
                        break;
                    case 2:
                    case 5:
                        proFileName = "LayaAir3D";
                        break;
                    default:
                        proFileName = "LayaUISample";
                }
                this.fs.rename(propath + this.path.sep + proFileName + '.as3proj', propath + this.path.sep + obj.proName + ".as3proj", function(err){
                    if(err){
                        alert(err);
                        return;
                    }
                    console.log('done!');
                    codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType", obj.proType, "engineType", obj.engineType);
                    codeMain._codechannel.openWindow([propath]);
                });
            }
        }, (error) => {
            alert(error + "")
        });
    }
    copyDir(source, des) {
        this.mkdirsSync(des);
        var sou = source;
        var de = des;
        source = "\"" + source + "\"";
        des = "\"" + des + "\"";

        var cmd = "";
        if (process.platform === "win32") {
            cmd = `XCOPY ${source} ${des} /s/y/i`;
        } else {
            var arg = "f";
            if (this.fs.lstatSync(sou).isDirectory()) {
                source += "/.";
                arg += "a";
            }
            cmd = `cp -${arg} ${source} ${des}`;
        }
        return new Promise((resolve, reject) => {
            this.childprocess.exec(cmd, (error, stdout, stderr) => {
                if (error || stderr) {
                    layacopyDirFile(sou, de)
                        // reject(error + stderr);
                    resolve()
                } else resolve();
            })
        })
    }
    copyFile(source, des) {
        this.mkdirsSync(des);
        var sou = source;
        var de = des;
        source = "\"" + source + "\"";
        des = "\"" + des + "\"";
        var cmd = "";
        if (process.platform === "win32") {
            cmd = `COPY ${source} ${des} /y`;
        }
        this.childprocess.exec(cmd, (error, stdout, stderr) => {
            console.log(error, stderr, stdout)
        });
    }
    mkdirsSync(dirname, mode) {
        if (this.fs.existsSync(dirname)) {
            return true;
        } else {
            if (this.mkdirsSync(this.path.dirname(dirname), mode)) {
                this.fs.mkdirSync(dirname, mode);
                return true;
            }
        }
    }
    taskBuildCallBack(a, b, c, d) {
        //ctrl+shift+b 回调函数；"workbench.action.tasks.build"
        // this.compilePro();
        this.emit("compileAndRunPro");
    }
    compilePro() {
        this.degbugerr = false;
        //编译项目
        // this.executeCommandCode("workbench.action.tasks.build");
        // 
        if (this.layaProtype == "as") {
            this.compileASPro()
        } else if (this.layaProtype == "ts") {
            this.compileTSPro()
        } else {
            this.compileJSPro();
        }

    }
    compileAndRunPro() {
        //编译运行项目
        this.mode = "code";
        this.once("compileAndRunPro", () => {
            // this.degbug = true;
            this.layadegbug = true;
            if (this.degbugerr) {
                var result = confirm(codeMain.panel[90][langindex])
                if (!result) {
                    return
                }
            }
            this.executeCommandCode("workbench.view.debug");
            if (layadebugSelect.selectedIndex == 0) {
                this.executeCommandCode("workbench.action.debug.start");
                this.executeCommandCode("workbench.action.debug.restart");
            } else {
                this.executeCommandCode("workbench.action.debug.start");
            }
        })
        this.compilePro();

    }
    publishPro() {
        //发布项目
        let win = new remote.BrowserWindow({
            width: 700,
            height: 650,
            minWidth: 500,
            minHeight: 650,
            show: false,
            center: true,
            frame: true,
            resizable: true
        });
        //win.openDevTools();
        win.loadURL("file:///" + path.join(__dirname, `./../../../layarepublic/publishpro/index.html?${this.workspacePath}`));
        win.once('ready-to-show', () => {
            win.show();
        });
    }
    publishPro2() {
        //发布项目
        if (this.publishProWin2) {
            this.publishProWin2.show();
            return;
        }

        this.publishProWin2 = new remote.BrowserWindow({
            width: 583,
            height: 770,
            minWidth: 583,
            minHeight: 770,
            show: false,
            center: true,
            frame: true,
            resizable: false
        });
        //this.publishProWin2.openDevTools();
        this.publishProWin2.loadURL("file:///" + path.join(__dirname, `./../../../layarepublic/publishpro2/index.html?workspacePath=${this.workspacePath}&protype=${this.layaProtype}&langindex=${langindex}`));
        this.publishProWin2.once("close", () => {
            this.publishProWin2 = null;
        })
        this.publishProWin2.once('ready-to-show', () => {
        	  this.publishProWin2.setTitle(this.publishProWin2.getTitle()+"("+codeMain.layaIDEVersion+")")
            this.publishProWin2.show();
        });
    }
    publishProVersion() {
        this.once("compileAndRunPro", () => {

            this.emit("publishProComplete");
        })
        this.compilePro();
    }
    compileASPro() {
        this.executeCommandCode("workbench.action.tasks.build");
    }
    compileTSPro() {
        console.log("编译项目")
        var htmlcont = this.fs.readFileSync(path.join(this.workspacePath, "bin", "index.html"), "utf-8");
        if (htmlcont.indexOf("jsfile--Main") != -1) {
            this.LayaTypeScriptHtml.htmlHandlerScript();
        } else {
            this.layahandlerHtml.startReadfile(this.workspacePath, "ts")
        }
        this.executeCommandCode("workbench.action.tasks.build");
    }
    compileJSPro() {
        layahandlerHtml.startReadfile(this.workspacePath, "js");
        this.emit("compileAndRunPro");
    }
    editeMenuhandler(type) {
        var Keyboard = laya.events.Keyboard;
        var ShortcutManager = laya.editor.manager.ShortcutManager;
        switch (type) {
            case "viewClip":
                ShortcutManager.exeKey(Keyboard.L, true);
                break;
            case "file.newProject":
                this.createProHandler();
                break;
            case "file.newUntitledFile":
                ShortcutManager.exeKey(Keyboard.N, true);
                break;
            case "file.newDir":
                ShortcutManager.exeKey(Keyboard.D, true);
                break;
            case "file.openProject":
                this.openProLaya();
                break;
            case "file.convertProject":
                laya.editor.view.other.ConvertProject.instance.start();
                break;
            case "file.settingPro":
                ide.managers.Notice.notify(laya.ide.event.IDEEvent.OPEN_IDESETTING);
                break;
            case "file.setPro":
                ShortcutManager.exeKey(Keyboard.F9);
                break;
            case "file.settingPage":
                ShortcutManager.exeKey(Keyboard.P, true);
                break;
            case "file.refreshEditor":
                this.mode = "code";
                this.executeCommandCode("workbench.action.reloadWindow");
                break;
            case "edit.undo":
                ShortcutManager.exeKey(Keyboard.Z, true);
                break;
            case "edit.redo":
                ShortcutManager.exeKey(Keyboard.Y, true);
                break;
            case "edit.delete":
                ShortcutManager.exeKey(Keyboard.DELETE);
                break;
            case "edit.copy":
                ShortcutManager.exeKey(Keyboard.C, true);
                break;
            case "laya.lang":
                ide.managers.Notice.notify(laya.ide.event.IDEEvent.OPEN_LANGPANEL);
                break;
            case "laya.exportcode":
                ShortcutManager.exeKey(Keyboard.F11);
                break;
            case "edit.paste":
                ShortcutManager.exeKey(Keyboard.V, true);
                break;
            case "paseteEdP":
                ShortcutManager.exeKey(Keyboard.V, true, true);
                break;
            case "cutEd":
                ShortcutManager.exeKey(Keyboard.X, true);
                break;
            case "selectAllEd":
                ShortcutManager.exeKey(Keyboard.A, true);
                break;
            case "coverConEd":
                ShortcutManager.exeKey(Keyboard.B, true);
                break;
            case "fastMoveEd":
                break;
            case "remodeConEd":
                ShortcutManager.exeKey(Keyboard.U, true);
                break;
            case "reCopyEd":
                ShortcutManager.exeKey(Keyboard.R, true);
                break
            case "fixResEd":
                laya.ide.event.IDEEvent.emitKeyEvent(Keyboard.K, true, false);
                break;
            case "findReplaceEd":
                ShortcutManager.exeKey(Keyboard.F, true);
                break;
            case "saveEd":
                ShortcutManager.exeKey(Keyboard.S, true);
                break;
            case "saveAllEd":
                ShortcutManager.exeKey(Keyboard.S, true, true);
                break;
            case "bigViewEd":
                ShortcutManager.exeKey(Keyboard.EQUAL, true);
                break;
            case "smallViewEd":
                ShortcutManager.exeKey(Keyboard.MINUS, true);
                break;
            case "showViewEd":
                ShortcutManager.exeKey(Keyboard.F8);
                break;
            case "resetViewEd":
                ShortcutManager.exeKey(Keyboard.BACKSLASH, true);
                break;
            case "shoeViewDeEd":
                ShortcutManager.exeKey(Keyboard.R, true, true);
                laya.ide.event.IDEEvent.emitKeyEvent(Keyboard.R, true, true);
                break;
            case "upEd":
                ShortcutManager.exeKey(Keyboard.UP, true);
                laya.ide.event.IDEEvent.emitKeyEvent(Keyboard.UP, true);
                break;
            case "downEd":
                ShortcutManager.exeKey(Keyboard.DOWN, true);
                laya.ide.event.IDEEvent.emitKeyEvent(Keyboard.DOWN, true);
                break;
            case "projPanelEd":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("PagePanel");
                break;
            case "resPanelEd":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("ResPanel");
                break;
            case "CompPanel":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("CompPanel");
                break;
            case "compPanel":
                ide.managers.Notice.notify(laya.ide.event.IDEEvent.OPEN_BASICSPANEL);
                break;
            case "objPanelEd":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("PropPanel");
                break;
            case "displayTreePanel":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("DisplayTreePanel");
                break;
            case "timePanel":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("TimeLinePanel");
                break;
            case "资源转换工具":
                CMDShell.exeFile(FileManager.getAppPath(Paths.AirTool), null, null);
                break;
            case "resetPanel":
                ShortcutManager.exeKey(Keyboard.F3);
                break;
            case "changeProEditeMenu":
                laya.editor.view.other.ConvertProject.instance.start();
                break;
            case "pushEd":
                ShortcutManager.exeKey(Keyboard.F12);
                break;
            case "cleanPush":
                ShortcutManager.exeKey(Keyboard.F12, true);
                break;
            case "pushFinalEd":
                ide.managers.Notice.notify(laya.ide.event.IDEEvent.RELEASE_PROJECT);
                // ShortcutManager.exeKey(Keyboard.F11);
                break;
            case "refreshPanelEd":
                ShortcutManager.exeKey(Keyboard.F5);
                break;
            case "refreshPagePanelEd":
                ShortcutManager.exeKey(Keyboard.F6);
                break
            case "refreshResPanelEd":
                ShortcutManager.exeKey(Keyboard.F7);
                break;
            case "findNoPageEd":
                ShortcutManager.exeKey(Keyboard.F4);
                break;
            case "altaPackEd":
                laya.editor.view.other.PackAltas.instance.start();
                break;
            case "movclipPanel":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("TimeLinePanel");
                break
            case "FramePropPanel":
                laya.ide.managers.LayoutRecManager.showPanelByClassName("FramePropPanel");
                break
            case "resCoverEd":
                var dir = path.dirname(__dirname);
                var file = path.join(dir, "libs", "LayaAirTool", "LayaAirTool");
                childProcess.execFile(file);
                break;
            case "jsCompress":
                comprssJSModule()
                break;
            default:
                this.menuclickHandler(type)
                break;
        }
    }
    get mode() {
        return this._mode;
    }
    set mode(value) {
        console.log("命令");
        this._mode = value;
    }
    menuclickHandler(comamand) {
        var code = this.mode;
        this.mode = "code";
        switch (comamand) {
            case "createlayapro":
                this.createProHandler();
                break;
            case "laya_available_languages_zh-CN":
            case "laya_available_languages_en-US":
                this.setLanguage(comamand);
                break;
            case "workbench.action.openProLaya":
                this.openProLaya();
                break;
            case "vscode_openFile":
                this.vscode_openFile();
                break;
            case "vscode_openFolder":
                this.vscode_openFolder();
                break
            case "workbench.action.closeWindow":
                this.remote.getCurrentWindow().close();
                break;
            case "minimize":
                this.remote.getCurrentWindow().minimize();
                break;
            case "restore":
                if (process.platform != "win32") {
                    this.executeCommandCode("workbench.action.toggleFullScreen");
                } else {
                    if (!this.remote.getCurrentWindow().isMaximized()) {
                        this.remote.getCurrentWindow().maximize();
                    } else {
                        this.remote.getCurrentWindow().restore();
                    }
                }
                break;
            case "compileAndRunPro":
                this.compileAndRunPro();
                break;
            case "publishPro":
                // codeMain.sendDa("act", "tool", "name", "publishPro");
                this.publishPro();
                break;
            case "publishPro2":
                this.publishPro2();
                break;
            case "compilePro":
                this.compilePro()
                break;
            case "layaqrcodeshowqrcode":
                qcodeImg();
                break;
            case "openUserPath":
                var flag = this.remote.shell.showItemInFolder(this.path.join(this.remote.app.getPath("userData"), "log.txt"));
                if (!flag) this.remote.shell.showItemInFolder(this.remote.app.getPath("userData"));
                break;
            case "checkupdateVersions":
                window.open("http://ldc.layabox.com/layadownload/?type=layaairide")
                break;
            case "changelog":
                window.open("http://ldc.layabox.com/layadownload/?type=layaairide");
                break;
            case "devcenter":
                window.open("http://ldc.layabox.com/");
                break;
            case "layademo":
                window.open("http://layaair.ldc.layabox.com/demo/#Sprite_DisplayImage");
                break;
            case "layaboxPublic":
                window.open("http://www.layabox.com/")
                break;
            case "libselection":
                LibsPanel();
                break;
            case "version":
                break;
            case "tool.swfConvert":
                this.startflashtool();
                break;
            case "tool.jsCompress":
                jscompressTool();
                break;
            case "tool.tpgCompress":
                tpgConvert();
                break;
            case "tool.dbConvert":
                bonetools(codeMain.lang(codeMain.getPanelLang(157), dragonBones.BoneAniTools.DragonBoneTip), 0);
                break;
            case "tool.spineConvert":
                bonetools("Spine" + dragonBones.BoneAniTools.SpineTip, 1);
                break;
            case "tool.spineConvertBatch":
                bonetools("批量Spine" + dragonBones.BoneAniTools.SpineTip, 1, true);
                break;
            case "tool.psdConvert":
                psdtools("Psd to UI", 1);
                break;
            case "tool.atlaPack":
                picToolsLaya();
                break;
            case "tool.runtimeDownload":
                showNative("https://ldc.layabox.com/download/LayaAir/runtime/index.html", codeMain.panel[57][langindex])
                    //phoneDown();
                break;
            case "tool.appPack":
                // RuntimePanel("PackageToolLaya");
                break;
            case "tool.chanelPack":
                buldAppSdk()
                break;
            case "tool.appBuild":
                this.startLayaNative();
                //RuntimePanel("buldApp");
                break;
            case "tool.3dConvert":
                window.open("http://ldc.layabox.com/download/tools/LayaAir3DConvertTools.zip");
                // down3dzip("flashpublish");
                break;
            case "tool.wxdevtool":
                this.startWxDevTool();
                break;
            case "tools.ideConfig":
                this.openIdeConfigPanel();
                break;
            default:
                this.executeCommandCode(comamand);
                this.mode = code;
                break;
        }
        this.mode = code;
    }
    startflashtool() {
        var dir = this.path.dirname(__dirname);
        var file = this.path.join(dir, "libs", "LayaAirTool", "LayaAirTool.app");
        if (process.platform === 'darwin') {
            var cmd = "\"" + this.path.join(file, "Contents", "MacOS", "LayaAirTool") + "\"" + " langindex " + langindex
                // this.childprocess.execFile(cmd);
            this.childprocess.exec(cmd, function(error, stdout) {
                /* body... */
                console.log(error, stdout);
            });
        } else {
            var cmd = "\"" + file.replace(".app", ".exe") + "\"" + " langindex " + langindex
            this.childprocess.exec(cmd, function(error, stdout) {
                /* body... */
                console.log(error, stdout);
            });
        }
    }
    jscompressHandler() {
        //js压缩
    }
    changeViewMode(type) {

        if (type == "uicode") {
            if (!this.fs.existsSync(this.path.join(this.workspacePath, "laya", ".laya"))) {
                var result = confirm(codeMain.getPanelLang(158));
                if (result) {
                    this.mkdirsSync(this.path.join(this.workspacePath, "laya"))
                    var uipath = this.path.join(this.path.dirname(__dirname), "laya", "code", "as", "empty", "laya");
                    this.copyDir(uipath, this.path.join(this.workspacePath, "laya"))
                } else {
                    return;
                }

            }
            code_panel.style.display = this.codeContainer.style.display = "none";
            if (!this.uiViewContainer) {
                this.mode = "uicode";
                uiMenuDivHandler();
                var scripts = document.createElement("script");
                document.body.appendChild(scripts);
                scripts.src = "layabuilder.max.js"
                scripts.onload = () => {
                    setTimeout(() => {
                        if (laya) laya.editor.manager.ProjectManager.loadProject(this.path.join(this.workspacePath, "laya", this.uiConfigName));
                        if (laya) laya.events.KeyBoardManager.enabled = true;
                        if (Laya.stage) Laya.stage.renderingEnabled = true;
                        if (uicodeMenuList) {
                            this.recentOpen(uicodeMenuDiv);
                            if (this.mode == "uicode") {
                                uicodeMenuList.style.display = this.uiViewContainer.style.display = "block";
                            }
                        }
                    }, 1000);

                }
            } else {
                uicodeMenuList.style.display = this.uiViewContainer.style.display = "block";
                laya.events.KeyBoardManager.enabled = true;
            }
            // codeMenuList.style.display = this.codeContainer.style.display = "none";
            this.layastoreContainer && (this.layastoreContainer.style.display = layaaskMenuList.style.display = "none");
            this.layasearchContainer && (this.layasearchContainer.style.display = layaaskMenuList.style.display = "none");
            this.mode = "uicode";
        } else if (type == "code") {
            this.codeContainer && (code_panel.style.display = this.codeContainer.style.display = "block");
            this.layasearchContainer && (this.layasearchContainer.style.display = layaaskMenuList.style.display = "none");
            this.uiViewContainer && (uicodeMenuList.style.display = this.uiViewContainer.style.display = "none", laya.events.KeyBoardManager.enabled = false);
            uicodeMenuList && (uicodeMenuList.style.display = "none");
            this.layastoreContainer && (this.layastoreContainer.style.display = layaaskMenuList.style.display = "none");
            this.mode = "code";
            this.emit("changeCodeMode");

        } else if (type == "layastore") {
            this.mode = "layastore";
            this.uiViewContainer && (uicodeMenuList.style.display = this.uiViewContainer.style.display = "none", laya.events.KeyBoardManager.enabled = false);
            this.codeContainer && (code_panel.style.display = this.codeContainer.style.display = "none");
            this.layasearchContainer && (this.layasearchContainer.style.display = "none");
            if (!this.layastoreContainer) {
                aksPageMenuDivHandler();
                this.emit("createLayaStore");
            } else {
                this.layastoreContainer.style.display = layaaskMenuList.style.display = "block";
            }
        } else if (type == "layasearch") {
            this.mode = "layasearch";
            this.uiViewContainer && (uicodeMenuList.style.display = this.uiViewContainer.style.display = "none", laya.events.KeyBoardManager.enabled = false);
            this.codeContainer && (code_panel.style.display = this.codeContainer.style.display = "none");
            this.layastoreContainer && (this.layastoreContainer.style.display = "none");
            if (!this.layasearchContainer) {
                aksPageMenuDivHandler();
                this.emit("createLayaSearch");
            } else {
                this.layasearchContainer.style.display = layaaskMenuList.style.display = "block";
            }
        }
    }
    get LayaTypeScriptHtml() {
        if (!this._LayaTypeScriptHtml) {
            this._LayaTypeScriptHtml = this.require("./../../../layarepublic/htmlhandler/FileHtmlHandler.js");
        }
        return this._LayaTypeScriptHtml;
    }
    get layaunzip() {
        if (!this._unzip) {
            this._unzip = this.require("unzip");
        }
        return this._unzip;
    }
    get layarequest() {
        if (!this.request) {
            this._request = this.require("request");
        }
        return this._request;
    }
    get ctrlreplacecmd() {
        if (process.platform == "win32") {
            return "Ctrl";
        } else {
            return "⌘";
        }
    }
    get shiftreplacecmd() {
        if (process.platform == "win32") {
            return "Shift";
        } else {
            return "⇧"
        }
    }
    // 构建打包native
    startLayaNative() {
        if (this.layanativewindow) {
            this.layanativewindow.show();
            return
        }
        this.layanativewindow = new remote.BrowserWindow({
            width: 500,
            height: 470,
            show: false,
            center: true,
            frame: false,
            resizable: false
                // parent:remote.getCurrentWindow(),
                // modal:true
        });
        this.layanativewindow.loadURL("file:///" + path.join(__dirname, './../../../layarepublic/layaNative/index.html?lang=' + langindex));
        this.layanativewindow.once("close", () => {
            this.layanativewindow = null;
        })
        this.layanativewindow.once('ready-to-show', () => {
            this.layanativewindow.show()
        });
    }
    startWxDevTool(){
        const proBinPath = this.getProBinPath();
        const { execFile } = require('child_process');
        const wxToolInstallPath = this.ideConfigObj && this.ideConfigObj.wechat && this.ideConfigObj.wechat.installPath;
        if (!wxToolInstallPath) {
            alert(this.getPanelLang(237));
            this.openIdeConfigPanel();
            return;
        }
        let wxToolCliPath;
        if (process.platform == "win32") {
            wxToolCliPath = path.join(wxToolInstallPath, 'cli.bat');
        } else if(process.platform === 'darwin'){
            wxToolCliPath = path.join(wxToolInstallPath, 'Contents', 'Resources', 'app.nw', 'bin', 'cli');
        } else {
            alert(codeMain.lang(this.getPanelLang(239), process.platform));
            return;
        }
        if(!this.fs.existsSync(wxToolCliPath)){
            alert(this.getPanelLang(238));
            this.openIdeConfigPanel();
            return;
        }
        const child = execFile(wxToolCliPath, ['-o', proBinPath, '-f', 'laya'], (error, stdout, stderr) => {
          if (error) {
            throw error;
          }
          console.log(stdout);
        });
    }
    getProBinPath(){
        let res = "";
        switch(this.layaProtype){
            case 'as': //as
                res = this.path.join(this.workspacePath, "bin", "h5");
                break;
            case 'ts': //ts
                res = this.path.join(this.workspacePath, "bin");
                break;
            case 'js': //js
                res = this.path.join(this.workspacePath, "bin");
                break;
            default:
                console.log('Unknow Project Type:' + this.proObj.proType);
        }
        return res;

    }
    openIdeConfigPanel(){
        var popPanel = getElement("div", "ideConfigPanel");
        popPanel.style.zIndex = 9999999;
        this.ideConfigObj = localStorage.getItem("ideConfigObj");
        if (this.ideConfigObj)
        {
            this.ideConfigObj = JSON.parse(this.ideConfigObj);
        }
        codeMain.addPopLayer(popPanel)
        var viewPanel = getElement("div", "viewPanel");
        popPanel.appendChild(viewPanel);
        var popPanelBackground = getElement("div", "ideConfigPanelBg");
        // var sucessTip = getElement("div", "layaAnimationLayaer");
        // sucessTip.innerHTML = `${codeMain.panel[21][langindex]}`+"&nbsp;&nbsp;"
        // sucessTip.style.top = "24px"
        // popPanelBackground.appendChild(sucessTip);
        popPanelBackground.style.top = "20px";
        var titleBackground = getElement("div", "titleBackground");
        __Layadrag(popPanel, titleBackground)
        titleBackground.innerHTML = `${codeMain.panel[235][langindex]}`;//"IDE设置"
        viewPanel.appendChild(titleBackground);
        viewPanel.appendChild(popPanelBackground);
        var closeBtn = getElement("div", "closeBtn");
        closeBtn.innerHTML = "×";
        viewPanel.appendChild(closeBtn);
        closeBtn.onclick = function()
        {
            // popPanel.parentNode.removeChild(popPanel);
            codeMain.removePopLayer(popPanel);
        }
        viewPanel.appendChild(closeBtn);
        var inputFile = getElement("input", "inputSmallinput");
        inputFile.style.left = "30px";
        inputFile.style.width = "380px";
        inputFile.style.top = "50px";
        inputFile.placeholder = `${codeMain.panel[236][langindex]}`;//"微信web开发者工具路径..."
        inputFile.styleBlur = "inputSmallinput";
        setFocuInput(inputFile);
        inputFile.ondrop = function(e)
        {
            e.preventDefault();
            var file = e.dataTransfer.files[0];
            var r = fs.lstatSync(file.path);
            if (r.isDirectory())
            {
                inputFile.value = file.path;
            }
        }
        this.ideConfigObj && this.ideConfigObj.wechat && (inputFile.value = this.ideConfigObj.wechat.installPath);
        popPanelBackground.appendChild(inputFile);
        var btninput = getElement("Button", "browseBtn");
        btninput.style.top = "50px";
        btninput.innerHTML = `${codeMain.panel[22][langindex]}`;//"浏览"
        btninput.onclick = function()
        {
            var dialogLaya = electron.remote.dialog;
            dialogLaya.showOpenDialog(
            {
                properties: ["openDirectory", 'createDirectory'],
                filters: [
                {
                    name: 'All Files',
                    extensions: ['js']
                }]
            }, function(pathLaya)
            {
                if (pathLaya)
                {
                    inputFile.value = pathLaya[0];
                }
            })
        }
        popPanelBackground.appendChild(btninput);

        var btnOK = getElement("Button", "layaBtnCustum");
        popPanelBackground.appendChild(btnOK);
        btnOK.style.top = "231px";
        btnOK.style.left = "206px";
        btnOK.style.height = "29px";
        btnOK.innerText = `${codeMain.getMenuListLang(11)}`;//"保存"
        btnOK.onclick = function()
        {
            codeMain.ideConfigObj = {
                "wechat":{
                    "installPath": inputFile.value
                }
            };

            localStorage.setItem("ideConfigObj", JSON.stringify(codeMain.ideConfigObj));
            codeMain.removePopLayer(popPanel);
        }

    }
    set codeDivPop(value) {
        this._codeDivPop = value;
    }
    get codeDivPop() {
        return this._codeDivPop;
    }
    //打开文件
    vscode_openFile() {
        var dialog = this.remote.dialog;
        var options = {
            properties: ["openFile", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ["*"]
            }]
        };
        dialog.showOpenDialog(null, options, (result) => {
            if (result) {
                console.log(result);
                var path = result[0]; //this.path.dirname();
                codeMain.onOpenFile(path);
            }
        })
    }
    vscode_openFolder() {
        var dialog = this.remote.dialog;
        var options = {
            properties: ["openDirectory", 'createDirectory']
        };
        dialog.showOpenDialog(null, options, (result) => {
            if (result) {
                var path = result[0];
                if (path == this.workspacePath) {
                    alert(codeMain.panel[89][langindex])
                    return;
                }
                codeMain._codechannel.openWindow([path]);
            }
        })
    }
    //重启ide
    restartApp() {
        this.ipcRenderer.sendSync("restartApp");
    }
    //面板的语言包
    getPanelLang(index) {
        return this.panel[index][langindex];
    }
    //菜单语言包
    getMenuListLang(index) {
        return this.menuList[index][langindex];
    }

    lang(text) {
        var res;
        if (arguments.length < 2) {
            res = text;
        } else {
            for (var i = 0, n = arguments.length; i < n; i++) {
                text = text.replace("{" + i + "}", arguments[i + 1]);
            }
            res = text;
        }
        return res;
    }

    createBar() {
        var win = remote.getCurrentWindow();
        if (win.isMaximized() || win.isFullScreen()) {
            laya_restore_btn.src = "res/img/2.1.png";
        }
        win.on("resize", () => {
            if (win.isMaximized() || win.isFullScreen()) {
                laya_restore_btn.src = "res/img/2.1.png";
            } else {
                laya_restore_btn.src = "res/img/2.png";
            }
        })
        var div__ = `        <div style="position:absolute;top: 30px">
            <ul class="toolLi">
                <li onclick='codeMain.menuclickHandler("workbench.action.files.newUntitledFile")' title="${this.getMenuListLang(3)}">
                    <a href="#">
                        <img src="res/ide/toolbar/file.png" style="width: 14px;height: 14px">
                    </a>
                </li>
                <li onclick="codeMain.createProHandler()" title="${this.getMenuListLang(2)}">
                    <a href="#">
                        <img src="res/ide/toolbar/pro.png" style="width: 14px;height: 14px">
                    </a>
                </li>
                <li onclick='codeMain.menuclickHandler("workbench.action.files.saveAll")' title="${this.getMenuListLang(13)}">
                    <a href="#">
                        <img src="res/ide/toolbar/save.png" style="width: 14px;height: 14px">
                    </a>
                </li>
                <li onclick='codeMain.compilePro()' title="${this.getPanelLang(115)}">
                    <a href="#">
                        <img src="res/ide/toolbar/b.png" style="width: 14px;height: 14px">
                    </a>
                </li>
                <li onclick='codeMain.publishPro2()' title="${this.getPanelLang(116)}">
                    <a href="#">
                        <img src="res/ide/toolbar/f.png" style="width: 14px;height: 14px">
                    </a>
                </li>
                <li onclick='codeMain.compileAndRunPro()' title="${this.getPanelLang(117)}">
                    <a href="#">
                        <img src="res/img/1_07.png" style="width: 14px;height: 14px">
                    </a>
                </li>
                <select id="layadebugSelect" class="layadebugSelect">
                    <option value="layaAir">${this.getPanelLang(118)}</option>
                    <option value="chrome调试">${this.getPanelLang(119)}</option>
                </select>
                <select id="tscSelect" class="tscSelect" style="display:none">
                    <option value="global">${this.getPanelLang(242)}</option>
                    <option value="local">${this.getPanelLang(243)}</option>
                </select>
            </ul>
        </div>
        <div id="codeMenuList"></div>`
        code_panel.innerHTML = div__;
    }
    setUpMacMenu() {
        if (process.platform == "win32") {
            return;
        }
        const {
            remote
        } = require('electron');
        const {
            Menu,
            MenuItem
        } = remote;
        const template = [{
            label: 'Edit',
            submenu: [{
                role: 'undo'
            }, {
                role: 'redo'
            }, {
                type: 'separator'
            }, {
                role: 'cut'
            }, {
                role: 'copy'
            }, {
                role: 'paste'
            }, {
                role: 'pasteandmatchstyle'
            }, {
                role: 'delete'
            }, {
                role: 'selectall'
            }]
        }]

        const menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
    }


}

module.exports = CodeMain;
var layauiconfig = `<project version="0.9.8">
   <asynRes>img,temp,sound</asynRes>
   <unDealRes>embed</unDealRes>
   <resTypes>png,jpg</resTypes>
   <resExportPath>bin/h5/res/atlas</resExportPath>
   <asynResExportPath>bin/h5</asynResExportPath>
   <codeExportPath>src/ui</codeExportPath>
   <codeImports><![CDATA[import laya.ui.*;
import laya.display.*; ]]></codeImports>
   <codeImportsJS><![CDATA[var View=laya.ui.View;
var Dialog=laya.ui.Dialog;]]></codeImportsJS>
   <uiType>0</uiType>
   <uiExportPath>bin/ui.json</uiExportPath>
   <boxTypes>Box,List,Tab,RadioGroup,ViewStack,Panel,HBox,VBox,Tree,Sprite</boxTypes>
   <pageTypes>View,Dialog</pageTypes>
   <shareResPath/>
   <codeType>0</codeType>
   <resCanCompress/>
   <resPublishQuality>80</resPublishQuality>
   <langPath/>
   <defaultFont/>
   <codeImportsTS><![CDATA[import View=laya.ui.View;
import Dialog=laya.ui.Dialog;]]></codeImportsTS>
   <textureWidth>2048</textureWidth>
   <textureHeight>2048</textureHeight>
   <picWidth>512</picWidth>
   <picHeight>512</picHeight>
   <power2>false</power2>
   <trimempty>false</trimempty>
</project>`