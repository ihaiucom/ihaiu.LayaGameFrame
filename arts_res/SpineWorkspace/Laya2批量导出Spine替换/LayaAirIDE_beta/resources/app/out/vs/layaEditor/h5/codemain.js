var EventEmitter = require('events');
class CodeMain extends EventEmitter {
    constructor(args) {
        super()

        this.electron = require("electron");
        this.shell = electron.shell;
        this.remote = this.electron.remote;
        this.ipcRenderer = this.electron.ipcRenderer;
        this.path = require("path");
        this.fs = require("fs");
        this.childprocess = require('child_process');
        this.httpserver = require("http")
        this.require = require;
        this.langConfig = require("./../../../layarepublic/lang/extension.js").Lang;
        this.panel = this.langConfig.panel;
        this.menuList = this.langConfig.menu;
        this._sysConfig = require('./config/sysinfo.js');
        this.layaIDEVersion = this._sysConfig.IDEVersion;
        this.localversion = this._sysConfig.localVersion;
        this.codeBar = require("./../../../layarepublic/codebar/extension.js");
        this.chokidar = require("chokidar");

        this.globalModeType = {
            code: "code",
            layamaker: "cloud"
        }
        let globalMode = localStorage.getItem('globalMode');
        if (!globalMode) {
            globalMode = this.globalModeType.code;
            localStorage.setItem('globalMode', globalMode);
        }
        this.globalMode = window.globalMode = globalMode; // code | cloud
        // makerapi -> 正式 | abc.masteropen -> 测试 | 后面不规则的 -> 开发
        this.makerBaseURL = 'https://makerapi.layabox.com'; // 检查token、请求新的token // http://layamaker.devopen.layabox.com
        this.layamakerAPPURL = 'https://makerapi.layabox.com/app'; // 上传、下载、创建游戏 // http://layamaker.devopen.layabox.com/app
        this.layamakerResURL = 'http://pubrescloud-1251285021.cos.ap-shanghai.myqcloud.com'; // 资源预览路径 // http://pubdevrescloud-1251285021.cos.ap-shanghai.myqcloud.com
        this.layamakerFileURL = 'http://pubrescloud-1251285021.file.myqcloud.com'; // 文件路径 // http://pubdevrescloud-1251285021.file.myqcloud.com
        this.exchangeImgURL = 'https://api.nodedevelopers.layabox.com/pvr/exchange'; // 请求移动端纹理图片
        this.version = "1.9.0";
        this.mode = "code";
        this.clipW = 0;
        this.clipH = 44; // vscode底部状态栏高度提升
        this.left_scrollHeight = 22; // 左侧调试面板，高度减少量
        this._codechannel = null; //包含code的接口；
        this.uiConfigName = ".laya";
        this.portrange = 8900;
        this.layadegbug = false;
        this.recentOpenList = [];
        this.configData = {};
        this.debugName = "layaAir";
        this.degbugerr = false;
        this.windowIPCService = null;
        this.workbench = {};
        this.popLayer = document.createElement("div");
        this.popLayer.style = `position:absolute;z-index:199999999;width:inherit;height:inherit;top: 0px;`;
        this.ideConfigObj = localStorage.getItem("ideConfigObj");
        if (this.ideConfigObj) {
            this.ideConfigObj = JSON.parse(this.ideConfigObj);
        }
        window.addMenuListItem = this.addMenuListItem;
        window.codeDivPopLayer = false;
        this.URLObj = {
            downIDEURL: 'https://ldc.layabox.com/download', // 首页，json请求(study/community/news/sample/advconfig)
            down_layaair_url: 'https://ldc.layabox.com/download/LayaAir2.0', // versionconfig.json
        };
        this.ldcBaseURL = 'https://ldc.layabox.com';
        this.localStorageRecentStr = window.globalMode === "cloud" ? 'makerRecentOpenList' : 'layarecentOpenList';

        const layaPage = require('./js/layaPage.js');
        this.layaPageIns = new layaPage();
        const menubars = require('./js/menubar.js');
        this.menubarsIns = new menubars();
        const Tool = require("./js/tool.js");
        this.tool = new Tool();
        this.isWatchCompileDir = localStorage.getItem("watchcompile") === "true";
        
        main();
        // 切换英文，需要在main中初始化
        this.laya_available_languages = window.laya_available_languages;
        window.langindex = this.getLanguage();
        this.init();
    }

    initDa() {
        let DataSender = require("./da/extension.js");
        this.daSender = DataSender.I;
        this.daSender.activate();
    }

    sendDa() {
        this.daSender.sendservice.apply(this.daSender, arguments);
    }

    init() {
        // 执行完初始化后，会执行后续的js或h5/index.js会继续执行，需要一些变量等，需要提前初始化完成
        this.createBar(); // 增加html标签，以备menu.js使用
        this.initLayaMaker(); // layamaker项目信息初始化
        this.initIPCListener();

        setTimeout(() => {
            // 监听是否开启不修改不编译功能
            this.watchCompileDir();
            // 是否显示登录页面
            this.layaPageIns.createLayaLoginHTML();
            // 是否显示首页
            if (!sessionStorage.getItem('isShowHomePage') || !this.workspacePath) {
                this.changeViewMode("homepage");
                this.layaPageIns.createLayaIndexHTML();
            }
            
            // 赞赏、登录、广告
            if (!this.layaPageIns.isHomePageShow()) { // 没有显示首页
                this.initAdvInfo();
                code_panel.style.display = "block";
                this.initRecentOpenList(); // 初始化最近打开项目列表
                this.initLayaCode();
                this.setUpMacMenu();
                this.setUpCodeMenu(); // code，注入菜单
                setTimeout(function() {
                    layadebugSelect.selectedIndex = localStorage.getItem("layadegbugName") || 1;
                    layadebugSelect.onchange = function(e) {
                        localStorage.setItem("layadegbugName", layadebugSelect.selectedIndex);
                    }
                }, 1000)
                tscSelect.selectedIndex = localStorage.getItem("tscSelName") || 0;
                let tmpMain = this;
                tscSelect.onchange = function(e) {
                    localStorage.setItem("tscSelName", tscSelect.selectedIndex);
                    tmpMain.updateTscTask();
                }
            }
            if (this.workspacePath) {
                setTimeout(function() {
                    let leftBoxBarEle = document.getElementsByClassName('leftBoxBar')[0];
                    leftBoxBarEle.className = leftBoxBarEle.className.replace(' no-cursor', '');
                }, 100);
            }
        }, 0);


        window.addEventListener("keydown", function(e) {
            // var ctrlalt = process.platform == "darwin" ? (e.metaKey && e.shiftKey) : (e.ctrlKey && e.shiftKey);
            if (codeMain.mode !== "uicode" && codeMain.mode !== "code") { // 只有在code和uicode页面才需要监听这两个快捷键
                return;
            }
            if (e.ctrlKey && e.code === 'F6') {
                let params = {
                    isCtrlKey: true,
                }
                codeMain.compileAndRun(params);
            } else if (e.code === 'F6') {
                codeMain.compileAndRun();
            } else if (e.code === 'F8') {
                codeMain.compileProAndCallBack();
            } else if (e.ctrlKey && e.shiftKey && e.code === "KeyQ") { // 编译优化
                codeMain.switchQuickCompile();
            }
        });
        setTimeout(() => {
            this.newProInfoList = require("./config/newProInfo").newProInfoList;
        }, 50);
        setTimeout(function() {
            codeMain.linstenExtensionsMsg();
        }, 3000);
        // 样式判断
        if (this.getIDETheme() === "light") {
            this.changeIDETheme("light");
        } else {
            this.changeIDETheme("dark");
        }
        // 是否进入laya内部模式
        let secretMode = localStorage.getItem("layasecretmode");
        if (secretMode === "true") {
            this.isLayaSecretMode = window.isLayaSecretMode = true;
        }
        this.require("systeminformation").system((info) => {
            if (info && info.uuid) {
                localStorage.setItem("systemuuid", info.uuid);
            }
        });
        this.require("systeminformation").osInfo((info) => {
            if (info && info.hostname) {
                localStorage.setItem("systemhostname", `${info.hostname} ${info.logofile}`);
            }
        });
    }
    
    /**
     * 改变IDE的样式
     * @param string theme
     *      dark | light 
     */
    changeIDETheme(theme) {
        if (!theme || typeof theme !== "string") {
            return;
        }
        if (!theme.includes("init")) { // IDE刷新后，设置正确的样式
            let linkEle = document.getElementById("ideSkins");
            if (!linkEle) {
                // <link id="ideSkins" href="skins/lighter/ide/ide.css" rel="stylesheet" type="text/css">
                linkEle = document.createElement("link");
                linkEle.id = "ideSkins";
                linkEle.rel = "stylesheet";
                linkEle.type = "text/css";
                document.head.appendChild(linkEle);
            }
            if (theme === "dark") {
                if (linkEle.href === "skins/dark/ide/ide.css") {
                    return;
                }
                linkEle.href = "skins/dark/ide/ide.css";
                
            } else if (theme === "light") {
                if (linkEle.href === "skins/lighter/ide/ide.css") {
                    return;
                }
                linkEle.href = "skins/lighter/ide/ide.css";
            }
            localStorage.setItem("ideTheme", theme);
            return;
        }
        // 手动切换IDE配色
        theme = theme.replace("init.", "");
        localStorage.setItem("ideTheme", theme);
        if (theme === "dark") {
            this.workbench.setColorTheme && this.workbench.setColorTheme("vs-dark vscode-theme-defaults-themes-dark_plus-json", 1);
        } else if (theme === "light") {
            this.workbench.setColorTheme && this.workbench.setColorTheme("vs vscode-theme-defaults-themes-light_plus-json", 1);
        }
        let timer2 = setTimeout(() => {
            this.executeCommandCode("workbench.action.reloadWindow");
            clearTimeout(timer2);
        }, 500);
        document.getElementsByClassName("monaco-shell-content")[0].style.display = "none";
    }
    /**
     * 获取IDE的样式
     */
    getIDETheme() {
        let theme = localStorage.getItem("ideTheme");
        theme = ["dark", "light"].indexOf(theme) !== -1 ? theme : "dark";
        return theme;
    }

    initLayaMaker() {
        // 不是layamaker模式
        if (this.globalMode !== this.globalModeType.layamaker) {
            return;
        }
        // html 设置标志
        document.getElementsByTagName('html')[0].setAttribute('data-mode', this.globalModeType.layamaker);

        // 共同参数
        let loginInfoObj;
        try {
            let loginStr;
            loginStr = localStorage.getItem('isLoginSuccess');
            loginInfoObj = loginStr && JSON.parse(loginStr);
        } catch (e) {
            loginInfoObj = null;
        }
        if (!loginInfoObj) {
            return;
        }
        let appId = sessionStorage.getItem('appId');
        window.cloudProject = {
            userId: loginInfoObj && loginInfoObj.userId,
            username: loginInfoObj && (loginInfoObj.username ? loginInfoObj.username : loginInfoObj.mobile),
            appId: appId
        };
        // 运行layamaker项目
        window.runCloudProject = (url, widht, height) => {
            this.runProject(url, widht, height);
        };
        // layamaker项目资源panel
        window.showCloudProjectResPanel = this.layaPageIns.createPopUpShopHTML.bind(this.layaPageIns);
    }

    // ipcRenderer
    initIPCListener() {
        this.ipcRenderer.on("publishpro2:compile", () => {
            this.compileProAndCallBack((isSuccess) => {
                // 根据成功或者失败，向publishpro2窗口发送消息
                // 1.0项目只有成功，2.0才可能会有失败
                let 
                    publishPro2WinId = this.publishProWin2.webContents.id,
                    paramsObj = {
                        isSuccess: !!isSuccess
                    };
                this.ipcRenderer.sendTo(publishPro2WinId, "codemain:compile", paramsObj);
            });
        });
        this.ipcRenderer.on("publishpro3:compile", () => {
            this.compileProAndCallBack((isSuccess) => {
                // 根据成功或者失败，向publishpro2窗口发送消息
                // 1.0项目只有成功，2.0才可能会有失败
                let 
                    publishPro3WinId = this.publishProWin3.webContents.id,
                    paramsObj = {
                        isSuccess: !!isSuccess
                    };
                this.ipcRenderer.sendTo(publishPro3WinId, "codemain:compile", paramsObj);
            });
        });
    }

    updateTscTask(propath, proType) {
        proType = proType || layaProtype;
        if ("ts" !== proType) return;
        propath = propath || this.workspacePath;
        let tasksFile = this.path.join(propath, ".laya", "tasks.json");
        if (!fs.existsSync(tasksFile))
        {
            // console.log(tr("no tasks.json, skip update.").green);
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
        // tasksFileInString = JSON.stringify(tasks);
        // 格式化 .laya/tasks.json 文件，ts项目
        tasksFileInString = JSON.stringify(tasks, null, 4)
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
        //启用鼠标事件。
        window.codeDivPopLayer = false;
        this.popLayer.removeChild(node);
        this.popLayer.style.display = "none";
    }
    /**
     * 编辑模式（UI）动态增加菜单栏
     * @param {*} id 菜单分类
     * @param {*} itemName 菜单名称
     * @param {*} menuSocketName 菜单click派发name
     */
    addMenuListItem(id, itemName, menuSocketName) {
        let idList = ["file", "edit", "view", "tool", "window", "out", "extensions", "help"];
        let _id = idList.indexOf(id) !== -1 ? id : "extensions";
        uicodeMenuDiv.addNewChild(_id, 1, itemName + "extensionsUIMenu" + "$" + menuSocketName, itemName);
    }
    /**
     * 代码模式（code）动态增加菜单栏
     * @param {*} id 菜单分类
     * @param {*} itemName 菜单名称
     * @param {*} menuSocketName 菜单click派发name
     */
    addMenuListItemInCode(id, itemName, menuSocketName, index) {
        let idList = ["file", "edit", "selection", "view", "go", "tool", "prolaya", "help"];
        let _id = idList.indexOf(id) !== -1 ? id : "help";
        codeMenuDiv.addNewChild(_id, Number.isInteger(index) ? index : 4, menuSocketName, itemName);
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
    /**
     * 初始化 最近打开
     * 当打开项目的时候执行，且仅在打开项目的时候执行
     * 2.0 升级，在这里处理不兼容数据
     */
    initRecentOpenList() {
        // 没有打开项目，不需要执行
        if (!this.workspacePath) {
            return;
        }
        // 读取项目信息
        function readProjectInfoASync(fileList, index) {
            if (index >= fileList.length) {
                parseAndAddRecentList.call(codeMain); // 更新最近打开列表
                return;
            }
            let p = path.join(codeMain.workspacePath, fileList[index]);
            fs.readFile(p, 'utf8', function(err, data) {
                if(err) {
                    readProjectInfoASync(fileList, index + 1);
                    return;
                }
                try {
                    // 解析文件
                    let dataObj = data && JSON.parse(data);
                    dataObj.path = codeMain.workspacePath;
                    parseAndAddRecentList.call(codeMain, dataObj); // 更新最近打开列表
                } catch (e) {
                    readProjectInfoASync(fileList, index + 1);
                    throw new Error(e);
                }
            });
        }

        // 整理最近打开列表数组
        // 之所以该项目的信息获取失败也要执行该函数，是为了能够显示最近打开列表
        function parseAndAddRecentList(obj) {
            let _obj = obj;
            // 对应的编辑器打开对应的项目
            if (window.globalMode === this.globalModeType.layamaker) { // maker模式
                sessionStorage.removeItem('appId');
                if (!(_obj && _obj.appid)) { // maker模式，没有appid，提示用code模式打开
                    _obj = null;
                    this.layaOpenProError = true;
                    let leftBoxBarEle = document.getElementsByClassName("leftBoxBar")[0],
                        homePageItemEle = leftBoxBarEle.getElementsByTagName("li")[1];
                    leftBoxBarEle.className += " no-cursor";
                    homePageItemEle.className += " itemFocus";
                    codeMain.changeViewMode("homepage");
                    setTimeout(() => {
                        alert(this.getPanelLang(334));
                    }, 0);
                    return;
                }
            } else { // code模式
                if (_obj && _obj.appid) { // code模式，有appid，提示用maker模式打开
                    _obj = null;
                    this.layaOpenProError = true;
                    let leftBoxBarEle = document.getElementsByClassName("leftBoxBar")[0],
                        homePageItemEle = leftBoxBarEle.getElementsByTagName("li")[1];
                    leftBoxBarEle.className += " no-cursor";
                    homePageItemEle.className += " itemFocus";
                    codeMain.changeViewMode("homepage");
                    setTimeout(() => {
                        alert(this.getPanelLang(333));
                    }, 0);
                    return;
                }
            }
            if (window.globalMode === this.globalModeType.layamaker) { // maker模式，记录appid
                sessionStorage.setItem('appId', _obj && _obj.appid);
            }
            window.proInfoObj = _obj;
            window.workbenchPreClient = "";
            if (window.proInfoObj && window.proInfoObj.layaProType === 8) {
                window.workbenchPreClient = "client/";
                this.initLayaCloudProjectBtnList(); // 增加layacloud服务端按钮
                setTimeout(() => {
                    this.checkLayaCloudProjectTasks();
                }, 2000);
            }
            // if (!_obj) {
            //     _obj = {
            //         path: codeMain.workspacePath
            //     };
            // }
            var list = localStorage.getItem(this.localStorageRecentStr);
            var tempArr;
            try {
                tempArr = JSON.parse(list);
            } catch(e) {
            }
            if (tempArr) {
                _obj && this.recentOpenList.unshift(_obj);
                for (let i = 0; i < tempArr.length; i++) {
                    let isRecentListHasThis = this.recentOpenList.some(function(curValue) {
                        return curValue.path.toLowerCase() == tempArr[i].path.toLowerCase();
                    });
                    if (!isRecentListHasThis) {
                        this.recentOpenList.push(tempArr[i]);
                    }
                }
            } else {
                _obj && this.recentOpenList.unshift(_obj);
            }
            localStorage.setItem(this.localStorageRecentStr, JSON.stringify(this.recentOpenList));
        }

        
        var list = localStorage.getItem(this.localStorageRecentStr);
        var tempRecentList;
        try {
            tempRecentList = (list && JSON.parse(list)) || [];
        } catch (e) {
            tempRecentList = [];
        }

        // 如果是旧的最近打开列表信息
        if (tempRecentList[0] && typeof tempRecentList[0] == 'string') {
            localStorage.setItem(this.localStorageRecentStr, "");
            tempRecentList = [];
        }

        // 如果最新的信息和当前项目的一致，不读取配置信息
        // if (tempRecentList[0] && this.workspacePath == tempRecentList[0].path) {
        //     this.recentOpenList = tempRecentList;
        //     return;
        // }

        // 读取配置信息
        let p = path.join.apply(path, this.workspacePath.split('\\'));
        fs.readdir(p, function(err, data) {
            if (err) {
                parseAndAddRecentList.call(codeMain); // 更新最近打开列表
                return;
            }
            let 
                length = data.length,
                layaList = [];
            for (let i = 0; i < length; i++) {
                if (data[i].match(/.+\.laya$/) || data[i].match(/.+\.layamaker$/)) {
                    layaList.push(data[i]);
                }
            }
            readProjectInfoASync(layaList, 0);
        })
    }
    updateRecentOpenList() { // 修改了最近打开列表，更新
        if (this.recentOpenList.length > 0) {
            //清空最近打开
            let 
                isUpdateCodeMenu = !!codeMenuDiv,
                isUpdateUICodeMenu = !!uicodeMenuDiv;
            var list = this.recentOpenList;
            for (var i = 0; i < list.length; i++) {
                var id = "listrecentOpenList" + i;
                codeMenuDiv && codeMenuDiv.removeItem(id);
                uicodeMenuDiv && uicodeMenuDiv.removeItem(id);
            }
            // 更新recentOpenList
            var listStr = localStorage.getItem(this.localStorageRecentStr);
            try {
                this.recentOpenList = (listStr && JSON.parse(listStr)) || [];
            } catch (e) {
                this.recentOpenList = [];
            }
            // 更新最近打开列表
            isUpdateCodeMenu && this.recentOpen(codeMenuDiv);
            isUpdateUICodeMenu && this.recentOpen(uicodeMenuDiv);
        }
    }
    //ui模式F12调用切换
    initLayaCode() {
        window.changeLayaIDECodeMode = function() {
                codeMain.changeViewMode("code");
            }

        setTimeout(() => {
            codeMain.restartServer();   //延迟启动内置静态服务器
            this.recentOpen(codeMenuDiv);
        }, 4000);

    }
    recentOpen(list) {
        //(parentId, pos, itemId, text, dis, imgEn, imgDis);
        for (var i = this.recentOpenList.length - 1; i >= 0; i--) {
            this.recentOpenList["listrecentOpenList" + i] = this.recentOpenList[i].path;
            list.addNewChild("workbench.action.openRecent", 2, "listrecentOpenList" + i, this.recentOpenList[i].path);
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
        localStorage.setItem(this.localStorageRecentStr, "");

    }
     //获取项目类型
    get layaProtype() {
        if (!this._layaProtype) {
            if (window.proInfoObj && typeof window.proInfoObj.proType === "number") {
                let proType = window.proInfoObj.proType;
                if (proType === 0) {
                    this._layaProtype = "as";
                } else if (proType === 1) {
                    this._layaProtype = "ts";
                } else if (proType === 2) {
                    this._layaProtype = "js";
                } else {
                    this._layaProtype = "as";
                }
            } else {
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
    get layaHelpContainer() {
        if (!this._layaHelpContainer) {
            this._layaHelpContainer = window["layaHelpContainer"]
        }
        return this._layaHelpContainer;
    }
    get layaUserContainer() {
        if (!this._layaUserContainer) {
            this._layaUserContainer = window["layaUserContainer"]
        }
        return this._layaUserContainer;
    }
    //获取当前打开的项目路径
    get workspacePath() {
        if (this.layaOpenProError) { // 打开项目出错
            return null;
        }
        if (this._workspacePath) {
            return this._workspacePath;
        }
        const e = require("electron").webFrame,
            t = parseURLQueryArgs(),
            n = JSON.parse(t.config || "{}") || {};
        // $LayaFlag 参考newide修改，原因还未找到
        this._workspacePath = n.folderPath;
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
                var binDir = this.getProBinPath();
                binDir = binDir.replace(this.workspacePath + this.path.sep, "").replace("\\", "/");
                layaurl =  layaurl + binDir + "/index.html";
                // if (this.layaProtype == "as") {
                //     let isCommon = this.getlaunchInfo().indexOf("${workspaceRoot}/bin/index.html") !== -1;
                //     let dirName = isCommon ? "" : "/h5";
                //     layaurl = layaurl + `bin${dirName}/index.html`;
                // } else {
                //     layaurl = layaurl + "bin/index.html";
                // }
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
		codeMain.changeViewMode("code");
        this.windowIPCService.onOpenFiles(o)
    }
    openProLaya(_extensions) {
        var dialog = this.remote.dialog;
        var options = {
            properties: ["openFile", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: _extensions || ['laya', "actionScriptProperties", "as3proj"]
            }]
        };
        dialog.showOpenDialog(null, options, (result) => {
            if (result) {
                var path = this.path.dirname(result[0]);
                if (path == this.workspacePath) {
                    alert(codeMain.panel[89][langindex])
                    return;
                }
                let layaFile = result[0];
                if (layaFile.endsWith(".laya") || layaFile.endsWith(".layamaker")) {
                    // 判断，maker模式只能打开maker项目，code模式只能打开code项目
                    try {
                        let content = fs.readFileSync(layaFile);
                        let _obj = JSON.parse(content);
                        // 对应的编辑器打开对应的项目
                        if (window.globalMode === this.globalModeType.layamaker) { // maker模式
                            if (!(_obj && _obj.makerVersion)) { // maker模式，没有appid，提示用code模式打开
                                alert(this.getPanelLang(334));
                                return;
                            }
                        } else { // code模式
                            if (_obj && _obj.appid) { // code模式，有appid，提示用maker模式打开
                                alert(this.getPanelLang(333));
                                return;
                            }
                        }
                    } catch(e) {}
                }
                codeMain._codechannel.openWindow([path]);
            }
        })
    }
    createProHandler() {
        if (this.globalMode === this.globalModeType.layamaker) {
            this.layaPageIns.createLayaMakerPanel();
        } else {
            NewProLaya();
        }
    }
    createNewPro(propath, demopath, libspath, obj, params) {
        let isNotCreateNow = params && params.notCreate; // layacloud
        let isNotCopyEmptyDir = params && params.notCopyEmpty; // layamaker | plugin
        this.proObj = obj;
        console.log("开始创建项目");
        if (!demopath.endsWith("empty") && !isNotCopyEmptyDir) {
            layacopyDirFile(this.path.dirname(demopath) + this.path.sep + "empty", propath);
        }
        // 如果是layamaker项目，不需要拷贝本地内容
        if (101 === obj.layaProType) {
            fs.writeFileSync(propath + path.sep + obj.proName + ".layamaker", JSON.stringify(obj));
            codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType", obj.proType, "engineType", obj.engineType);
            sessionStorage.setItem('isNeedPushToRemote', 'true');
            codeMain._codechannel.openWindow([propath]);
            return;
        }
        this.copyDir(demopath, propath).then(() => {
            // 如果是layamaker项目
            // if (101 === obj.layaProType) {
            //     debugger
            //     fs.writeFileSync(propath + path.sep + obj.proName + ".laya", JSON.stringify(obj));
            //     codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType");
            //     sessionStorage.setItem('isNeedPushToRemote', 'true');
            //     codeMain._codechannel.openWindow([propath]);
            //     return;
            // }
            if (0 !== obj.proType) { // 非 as 项目
                if (1 === obj.proType) { // ts 项目
                    this.updateTscTask(propath, this.getProTypeStrByIndex(obj.proType));
                }
                if (!isNotCreateNow) {
                    codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType", obj.proType, "engineType", obj.engineType);
                    codeMain._codechannel.openWindow([propath]);
                }
                
            } else { // as 项目
                this.copyDir(this.path.join(__dirname, "../", "../", "../", "codeextension", "createconfig", ".laya"), path.join(propath, ".laya")).then(() => {
                    let proFileName = "LayaSample";
                    this.fs.rename(propath + this.path.sep + proFileName + '.as3proj', propath + this.path.sep + obj.proName + ".as3proj", function(err){
                        if (!isNotCreateNow) {
                            codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType", obj.proType, "engineType", obj.engineType);
                            codeMain._codechannel.openWindow([propath]);
                        }
                    });
                });;
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
    /**
     * 编译，供别的函数调用
     * @param {*} func 当发布调用重新编译，会使用该回调函数
     *  - F8 编译: compileProAndCallBack
     *  - F5 调试: compileAndRunPro
     *  - F6 运行: compileAndRun
     *  - publishProVersion ? 不知道谁调用的 ?
     */
    compilePro(func) {
        let 
            _startTime1 = Date.now();
        codeMain.menuclickHandler("workbench.action.files.saveAll"); // 文件全部保存
        var _compile = () => {
            let proInfo = window.proInfoObj;
            if (proInfo && proInfo.version && proInfo.version.startsWith("2")) { // 仅代码version=2.x.x的代码执行
                console.log(`是否开启监听编译: ${this.isWatchCompileDir}; 文件是否改变: ${this.isFileChange}`);
                if (!this.isFileChange && this.isWatchCompileDir) { // 如果文件未修改，不重新编译(当功能开启时使用)
                    let 
                        useTime1 = Date.now() - _startTime1;
                    this.emit("compileAndRunPro");
                    this.outputGulpMsg(`laya.ide.restart.clear`);
                    this.outputGulpMsg(`${this.getPanelLang(422)}: ${new Date()}\n`); // 开始编译
                    this.outputGulpMsg(`--------------------------------------\n`);
                    this.outputGulpMsg(`${this.getPanelLang(467)}\n`); // 提示，本次不编译
                    this.outputGulpMsg(`--------------------------------------\n`);
                    this.outputGulpMsg(`${this.getPanelLang(423)}: 0s\n`); // 编译结束，gulp编译耗时
                    this.outputGulpMsg(`${this.getPanelLang(424)}: ${useTime1 / 1000}s\n`); // 编译结束，总耗时
                    return;
                }
                let 
                    isEnd = false,
                    _startTime2 = Date.now(),
                    isOutputError = false;
                this.outputGulpMsg(`laya.ide.restart.clear`);
                this.showStatusBarGulpMsg(this.getPanelLang(421)); // Laya 编译
                let gulpDir = this.path.join(__dirname, "../../../../", "node_modules", "gulp/bin/gulp.js");
                let workspaceRootPath = this.getWorkspaceRootPath();
                let gulpFile, cmd;
                if (this.fs.existsSync(this.path.join(workspaceRootPath, ".laya",'./compile.js'))) { // compile
                    gulpFile = this.path.join(workspaceRootPath, ".laya",'./compile.js');
                    cmd = [`--gulpfile=${gulpFile}`, "compile"];
                } else {
                    gulpFile = this.path.join(workspaceRootPath, ".laya",'./gulpfile.js');
                    cmd = [`--gulpfile=${gulpFile}`];
                }
                this.outputGulpMsg(`${this.getPanelLang(422)}: ${new Date()}\n`); // 开始编译
                this.outputGulpMsg(`--------------------------------------\n`);
                let fork1 = this.childprocess.fork(gulpDir, cmd, {
                    silent: true
                });
                fork1.stdout.on("data", (data) => {
                    let _data = data + "";
                    let isTasksComplete = _data.match(/^laya\.ide\.complete$/m);
                    if (_data.match(/^laya_ide_time/m)) { // 时间统计，不写入输出面板
                        console.log(`%cgulp: ${_data}`, "color: #fff; background-color: #3FCFB9;");
                        _data = _data.replace(/^laya_ide_time.+\n?/mg, "");
                    }
                    if (_data.match(/^laya_ide_file/m)) { // 时间统计，不写入输出面板
                        console.log(`%cgulp: ${_data}`, "color: #fff; background-color: #1db3f1;");
                        _data = _data.replace(/^laya_ide_file.+\n?/mg, "");
                    }
                    if (isTasksComplete) { // tasks 全部成功完成
                        isEnd = true;
                        let 
                            useTime1 = Date.now() - _startTime1,
                            useTime2 = Date.now() - _startTime2;
                        if (_data.match(/^laya\.ide\.complete$\n/m)) {
                            _data = _data.replace(/^laya\.ide\.complete$\n/m, "");
                        } else {
                            _data = _data.replace(/^laya\.ide\.complete$/m, "Finished...");
                        }
                        this.outputGulpMsg(_data);
                        this.emit("compileAndRunPro");
                        this.hideStatusBarGulpMsg();
                        this.outputGulpMsg(`--------------------------------------\n`);
                        this.outputGulpMsg(`${this.getPanelLang(423)}: ${useTime2 / 1000}s\n`); // 编译结束，gulp编译耗时
                        this.outputGulpMsg(`${this.getPanelLang(424)}: ${useTime1 / 1000}s\n`); // 编译结束，总耗时
                        this.isFileChange = false;
                    } else {
                        this.outputGulpMsg(_data);
                    }
                });
                fork1.stderr.on("data", (err) => { // 出错
                    let _err = err + "";
                    if (_err.match(/^\s+\^$/m)) {
                        _err = _err.split(/^\s+\^$/m)[1];
                    }
                    if (_err.match("Laya.IDEAPIS.openPageAndSelectComp")) { // 执行函数
                        let list = _err.match(/Laya\.IDEAPIS\.openPageAndSelectComp\("(.+)",\s*(.+)\)/);
                        Laya && Laya.IDEAPIS && Laya.IDEAPIS.openPageAndSelectComp && Laya.IDEAPIS.openPageAndSelectComp(list[1], Number(list[2]));
                        let uicode = document.querySelectorAll("[data-msg=uicode]")[0];
                        uicode && (uicode.click());
                    }
                    if (!isOutputError) {
                        this.outputGulpMsg(`\n${this.getPanelLang(425)}:`); // 出错了
                    }
                    this.outputGulpMsg(_err);
                    window.tipPanel.hide();
                    this.hideStatusBarGulpMsg();
                    isEnd = true;
                    isOutputError = true;
                    func instanceof Function && func(false);
                    if (this.listeners("compileAndRunPro").length > 0) { // 如果有回调函数，注销
                        this.removeListener("compileAndRunPro", this.listeners("compileAndRunPro")[0]);
                    }
                    if (this.mode === "uicode") { // 处于UI编辑模式
                        alert(this.getPanelLang(435));
                    }
                });
                fork1.on("close", () => {
                    if (!isEnd) { // 中断连接了，但是既没有成功消息，也没有失败消息
                        this.outputGulpMsg(`${this.getPanelLang(426)}...\n`); // 编译异常，请检查代码后重试
                        window.tipPanel.hide();
                        this.hideStatusBarGulpMsg();
                        func instanceof Function && func(false);
                        if (this.listeners("compileAndRunPro").length > 0) { // 如果有回调函数，注销
                            this.removeListener("compileAndRunPro", this.listeners("compileAndRunPro")[0]);
                        }
                        if (this.mode === "uicode") { // 处于UI编辑模式
                            alert(this.getPanelLang(435));
                        }
                    }
                });
                return;
            }

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

        let isExist = window.saveAllAndPublish instanceof Function;
        if (isExist) {
            window.saveAllAndPublish(function() {
                _compile();
            });
        } else {
            _compile();
        }
    }
    getWorkspaceRootPath() {
        let workspaceRootPath = this.workspacePath;
        if (window.proInfoObj && window.proInfoObj.layaProType === 8) {
            workspaceRootPath = this.path.join(workspaceRootPath, "client");
        }
        return workspaceRootPath;
    }

    /**
     * 和编译后文件相比，查看是否修改过
     * - 用于检测是否需要编译
     * - 这个方法的问题在于，更换引擎后，引擎文件修改时间会在编译文件之前，但是仍然需要重新编译(想不到好的办法解决这个问题)
     * - 因为watch方式可行，暂时不写这个方法了
     */
    checkFileModify(comFilePath) {
    }

    /**
     * 监听文件
     * - 监听src目录和bin/libs目录
     * - 第一次默认认为需要修改
     */
    watchCompileDir() {
        if (!this.isWatchCompileDir) {
            return;
        }
        let workSpaceRootPath = this.getWorkspaceRootPath();
        if (!workSpaceRootPath) {
            return;
        }
        let langProtype = this.layaProtype;

        // 监听的文件夹
        let 
            srcDir = path.join(workSpaceRootPath, "src"), // 工作区
            compileFile = path.join(workSpaceRootPath, "bin", "js", "bundle.js"), // 编译后代码(仅需要监听是否被删除)
            gulpFile = path.join(workSpaceRootPath, ".laya", "gulpfile.js"), // 编译脚本（旧）
            compileGulpFile = path.join(workSpaceRootPath, ".laya", "compile.js"), // 编译脚本
            configFile = path.join(workSpaceRootPath, `asconfig.json`); // 配置文件

        // 忽略的文件夹
        // let 
            // uiDir = path.join(srcDir, "ui"), // 工作区下面的ui目录
            // gameconfigFile = path.join(srcDir, `GameConfig.${langProtype}`); // 工作求下面的GameConfig.{as,ts,js}

        // 输出方法
        // let log = console.warn.bind(console);
        let log = function(){}
        let watchLog = function(_log) {
            console.log(`%c${_log}`, "color: #16d62b; background-color: gray;");
        }

        this.isFileChange = true;
        if (this.compileWatcher) {
            this.compileWatcher.close();
        }
        this.compileWatcher = this.chokidar.watch(srcDir, {
            // ignored: uiDir,
            persistent: true // 如果文件已正在监视，是否继续运行进程
        });
        this.compileWatcher.add(compileFile);
        this.compileWatcher.add(gulpFile);
        this.compileWatcher.add(compileGulpFile);
        this.compileWatcher.add(configFile);
        
        let watchPathList = [srcDir, compileFile, gulpFile, compileGulpFile, configFile];
        if ("as" === langProtype) { // as项目，还要监听libs/laya
            let mainEngineDir = path.join(workSpaceRootPath, "libs", "laya", "src");
            watchPathList.push(mainEngineDir);
            this.compileWatcher.add(mainEngineDir);
        }

        // 分析asconfig内容，看看是否还需要监听其他的文件夹
        if ("as" === langProtype) {
            try {
                let asconfigPath = this.path.join(this.workspacePath, "asconfig.json");
                let asconfigCon = this.fs.readFileSync(asconfigPath, "utf8");
                let asconfigObj = JSON.parse(asconfigCon);
                let sourcePathList = asconfigObj.compilerOptions["source-path"];
                let 
                    sourceItem,
                    sourcePath;
                for (let i = 0, len = sourcePathList.length; i < len; i++) {
                    sourceItem = sourcePathList[i];
                    sourcePath = this.path.join(workSpaceRootPath, sourceItem);
                    // 如果当前目录没有被监控，增加监控
                    if (!watchPathList.includes(sourcePath)) {
                        this.compileWatcher.add(sourcePath);
                        watchPathList.push(sourcePath);
                    }
                }
            } catch(e) {
                console.error(e);
            }
        } else if ("ts" === langProtype) {

        } else if ("js" === langProtype) {

        }
        console.log(`%c监听的文件夹: \n${JSON.stringify(watchPathList, null, 4)}`, "color: white; background-color: blue;");

        this.compileWatcher
            .on('add', (path) => { // 增加文件
                this.isFileChange = true;
                log('File', path, 'has been added'); 
            })
            .on('addDir', (path) => { // 增加文件夹
                this.isFileChange = true;
                log('Directory', path, 'has been added');
            })
            .on('change', (path, stats) => { // 修改文件
                // bundle.js单纯的被修改也不需要管理
                if (path !== compileFile) {
                    this.isFileChange = true;
                    log('File', path, 'has been changed');
                    watchLog(`flile [${path}] has been changed`);
                }
                // asconfig被修改后，需要重启监听函数
                if (path === configFile) {
                    this.watchCompileDir(); // 重启
                }
            })
            .on('unlink', (path) => { // 删除文件
                this.isFileChange = true;
                log('File', path, 'has been removed'); 
                watchLog(`flile [${path}] has been removed`);
            })
            .on('unlinkDir', (path) => { // 删除文件夹
                this.isFileChange = true;
                log('Directory', path, 'has been removed'); 
                watchLog(`Directory [${path}] has been removed`);
            })
            .on('error', (error) => { // error
                this.isFileChange = true;
                this.watchCompileDir(); // 重启
                log('Error happened', error);
                watchLog(`error happened`);
            })
            // .on('ready', () => { // 准备监听文件修改
            //     log('Initial scan complete. Ready for changes.'); 
            // })
            // .on('raw', (event, path, details) => { 
            //     log('Raw event info:', event, path, details); 
            // })
    }

    enableCompileWatch() {
        this.isWatchCompileDir = true;
        localStorage.setItem("watchcompile", "true");
        this.watchCompileDir();
        codeMenuDiv.removeItem("watch.compile.enable");
        this.addMenuListItemInCode("tool", codeMain.getPanelLang(480), "watch.compile.disable", 0); // 关闭编译优化功能
        window.tipPanel.show(this.getPanelLang(479), this.getPanelLang(481));
        setTimeout(() => {
            window.tipPanel.hide();
        }, 1000);
    }

    closeCompileWatch() {
        this.isWatchCompileDir = false;
        localStorage.setItem("watchcompile", "false");
        this.compileWatcher && this.compileWatcher.close();
        codeMenuDiv.removeItem("watch.compile.disable");
        this.addMenuListItemInCode("tool", codeMain.getPanelLang(479), "watch.compile.enable", 0); // 启用编译优化功能
        window.tipPanel.show(this.getPanelLang(480), this.getPanelLang(481));
        setTimeout(() => {
            window.tipPanel.hide();
        }, 1000);
    }

    switchQuickCompile() {
        if (this.isWatchCompileDir) {
            this.closeCompileWatch();
            return;
        }
        this.enableCompileWatch();
    }

    // ------------------------extensions.begin-------------------------------
    /**
     * gulp编译时，在输出面板显示内容
     * @param {*} msg 
     */
    outputGulpMsg(msg) {
        codeMain.outputMsg("Laya 编译", msg);
    }
    outputServerGulpMsg(msg) {
        codeMain.outputMsg("Laya server", msg);
    }
    /**
     * 调用extensions里的laya-outpanel，在输出面板显示内容
     * @param {*} mode 
     * @param {*} msg 
     */
    outputMsg(mode, msg) {
        var obj = {
            type: "outpanel",
            mode: mode,
            message: `${msg}`
        };
        codeMain.workbench._extensionHostProcess && codeMain.workbench._extensionHostProcess.send(obj);
    }


    /**
     * gulp编译时，在statusbar上显示内容
     * @param {*} msg 
     */
    showStatusBarGulpMsg(msg) {
        codeMain.statusBarExtensions("gulp", "show", msg);
    }
    /**
     * gulp编译时，隐藏在statusbar上显示的内容
     */
    hideStatusBarGulpMsg() {
        codeMain.statusBarExtensions("gulp", "hide");
    }
    /**
     * 调用extensions里的laya-statusbar，在statusbar上显示内容
     * @param {*} mode 
     * @param {*} status 
     * @param {*} msg 
     */
    statusBarExtensions(mode, status, msg) {
        var obj = {
            type: "statusbar",
            mode: mode,
            status: status,
            message: msg
        };
        codeMain.workbench._extensionHostProcess && codeMain.workbench._extensionHostProcess.send(obj);
    }


    httpserverExtensions(workspacePath) {
        var obj = {
            type: "httpserver",
            workspacePath: workspacePath,
        };
        codeMain.workbench._extensionHostProcess && codeMain.workbench._extensionHostProcess.send(obj);
    }


    /**
     * 监听extensions里的message事件
     *  - 在extensions里的扩展，执行process.send(msg)，这里能够收到消息
     *  - 目的是为了能够直接调试扩展
     *  - 未来如果有需要，可以扩展中发送消息，这里调用IDE里的函数，来达到根据扩展执行的结果操作IDE的效果
     */
    linstenExtensionsMsg() {
        if (!codeMain.workbench._extensionHostProcess) {
            return;
        }
        codeMain.workbench._extensionHostProcess.on("message", function(msgObj) {
            console.log(`%c ${msgObj}`, "color: red;");
        });
    }
    // ------------------------extensions.end-------------------------------

    /**
     * 编译并反馈
     *  - 因为编译函数有太多地方使用，改动成本太高
     *  - 所以点击menu或者快捷键的编译，修改成本函数
     *  - 本函数调用编译 compilePro 函数，并监听返回
     */
    compileProAndCallBack(func) {
        let
            isKillTask = false;
        window.tipPanel.show(codeMain.getPanelLang(360), codeMain.getPanelLang(361), () => {
            // 当弹窗被关闭时，执行
            isKillTask = true;
        });
        this.once("compileAndRunPro", () => {
            if (isKillTask) {
                return;
            }
            window.tipPanel.hide();
            // UI模式编译成功，添加提示
            if (this.mode === 'uicode') {
                laya.editor.manager.MessageManager.instance.show(codeMain.panel[283][langindex])
            }
            func instanceof Function && func(true);
        });
        this.compilePro(func);
    }
    /**
     * 编译并调试
     */
    compileAndRunPro() {
        let
            isKillTask = false;
        window.tipPanel.show(codeMain.getPanelLang(362), codeMain.getPanelLang(361), () => {
            // 当弹窗被关闭时，执行
            isKillTask = true;
        });
        //codeMain.changeViewMode("code");
        //编译运行项目
        //this.mode = "code";
        this.once("compileAndRunPro", () => {
            if (isKillTask) {
                return;
            }
            window.tipPanel.hide();
            // 插件项目模式
            if (window.proInfoObj && window.proInfoObj.layaProType === 6) {
                if (!window.publishIDEPlugin) {
                    alert(codeMain.getPanelLang(292));
                }
                window.publishIDEPlugin instanceof Function && window.publishIDEPlugin();
                return;
            }
            // this.degbug = true;
            if (this.workbench.restart && this.workbench.restart.enabled) {
                this.executeCommandCode("workbench.action.debug.restart");
                return;
            }
            this.layadegbug = true;
            if (this.degbugerr) {
                var result = confirm(codeMain.panel[90][langindex])
                if (!result) {
                    return
                }
            }
            // UI模式编译成功，添加提示
            if (this.mode === 'uicode') {
                laya.editor.manager.MessageManager.instance.show(codeMain.panel[283][langindex])
            }
            this.executeCommandCode("workbench.view.debug");
            this.executeCommandCode("workbench.action.debug.start");
            // 切换到调试输出窗口
            document.getElementById("workbench.parts.panel").getElementsByClassName("action-item")[2].click();
        })
        this.compilePro();
    }
    /**
     * 编译并运行
     */
    compileAndRun(options) {
        let
            isKillTask = false;
        window.tipPanel.show(codeMain.getPanelLang(363), codeMain.getPanelLang(361), () => {
            // 当弹窗被关闭时，执行
            isKillTask = true;
        });
        let isCtrlKey = options && options.isCtrlKey;
        if (window.globalMode === this.globalModeType.layamaker) { // layamaker
            window.saveAllAndPublish(() => {
                // 运行成功
                let 
                    mainCodeMenuContainerEle = document.getElementById("mainCodeMenuContainer"),
                    makerDebuggerEle = document.getElementById("makerDebugger");
                mainCodeMenuContainerEle.style.display = "none";
                makerDebuggerEle.style.display = "flex";
                code_panel.style.width = "60%";
            });
            return;
        }
        if (isCtrlKey) { // ctrl + F6，不执行编译
            var _runPro = () => {
                let workRootIndex = this.getProBinPath() + path.sep + 'index.html';
                this.runProject(workRootIndex);
            }
            let isExist = window.saveAllAndPublish instanceof Function;
            if (isExist) {
                window.saveAllAndPublish(function() {
                    _runPro();
                });
            } else {
                _runPro();
            }
            return;
        }
        this.once("compileAndRunPro", () => {
            if (isKillTask) {
                return;
            }
            window.tipPanel.hide();
            // 插件项目模式
            if (window.proInfoObj && window.proInfoObj.layaProType === 6) {
                if (!window.publishIDEPlugin) {
                    alert(codeMain.getPanelLang(292));
                }
                window.publishIDEPlugin instanceof Function && window.publishIDEPlugin();
                return;
            }
            // UI模式编译成功，添加提示
            if (this.mode === 'uicode') {
                laya.editor.manager.MessageManager.instance.show(codeMain.panel[283][langindex])
            }
            let workRootIndex = this.getProBinPath() + path.sep + 'index.html';
            this.runProject(workRootIndex);
        });
        this.compilePro();
    }
    runProject(workRootIndex, width, height) {
        window.tipPanel.hide();
        if (layadebugSelect.selectedIndex == 0) { // layaair
            if (this.layaRunWin) {
                this.layaRunWin.show();
                return;
            }
            this.layaRunWin = new remote.BrowserWindow({
                width: width ? width : 800,
                height: height ? height : 600,
                resizable: true,
                show: false
            });
            // this.layaRunWin.openDevTools();
            this.layaRunWin.once("close", () => {
                this.layaRunWin = null;
            })
            this.layaRunWin.once('ready-to-show', () => {
                this.layaRunWin.show();
                const { Menu } = remote;
                const template = [{
                    label: `${this.menuList[143][langindex]}`,
                    submenu: [{
                        label: `${this.menuList[183][langindex]}`,
                        click: () => {
                            this.layaRunWin.reload();
                        }
                    }, {
                        label: `${this.menuList[184][langindex]}`,
                        click: () => {
                            this.layaRunWin.webContents.toggleDevTools();
                        }
                    }]
                }]
                const menu = Menu.buildFromTemplate(template);
                Menu.setApplicationMenu(menu);
                
            });
            this.layaRunWin.loadURL(`file://${workRootIndex}`);
        } else { // chrome
            const userData = remote.app.getPath('userData');
            var opn = codeMain.require('opn');
            let chromeName = 'chrome';
            if (process.platform === 'darwin') { // mac
                chromeName = 'google chrome';
            }
            let chromeDataDir = path.join(userData, "chromeRunDir");
            if (!this.fs.existsSync(chromeDataDir)) { // mac笔记本下，运行功能无法使用，手动创建目录
                this.mkdirsSync(chromeDataDir);
            }
            // start "" "chrome" "https://www.layabox.com"
            // cmd /c start "" /b "chrome" /wait "https://www.layabox.com"
            opn(workRootIndex, { app: [chromeName, '--disable-web-security', `--user-data-dir=${chromeDataDir}`] , wait: true}).then((info) => {
                console.log("运行 run success", info);
            }).catch((e) => {
                console.log("运行 run catch", e);
                throw e;
            })
        }
    }
    // publishPro() {
    //     //发布项目
    //     let win = new remote.BrowserWindow({
    //         width: 700,
    //         height: 650,
    //         minWidth: 500,
    //         minHeight: 650,
    //         show: false,
    //         center: true,
    //         frame: true,
    //         resizable: true
    //     });
    //     win.openDevTools();
    //     win.loadURL("file:///" + path.join(__dirname, `./../../../layarepublic/publishpro/index.html?${this.workspacePath}`));
    //     win.once('ready-to-show', () => {
    //         win.show();
    //     });
    // }
    publishPro2() {
        //发布项目
        if (this.publishProWin2) {
            this.publishProWin2.show();
            return;
        }

        this.publishProWin2 = new remote.BrowserWindow({
            width: 590,
            height: 800,
            minWidth: 590,
            minHeight: 800,
            show: false,
            center: true,
            frame: true,
            resizable: false,
            // parent: codeMain.remote.getCurrentWindow(),
            // modal: true, // 更改为模态窗口
        });
        // this.publishProWin2.openDevTools();
        this.publishProWin2.setMenu(null); // 有时候会莫名其妙的显示菜单
        let envPATHStr = process.platform === 'darwin' ? `${process.env.PATH}` : null;
        this.publishProWin2.loadURL("file:///" + path.join(__dirname, `./../../../layarepublic/publishpro2/index.html`));
        this.publishProWin2.once("close", () => {
            this.publishProWin2 = null;
        })
        this.publishProWin2.once('ready-to-show', () => {
            setTimeout(() => {
                this.publishProWin2.setTitle(this.publishProWin2.getTitle()+"("+codeMain.layaIDEVersion+")");
            }, 1000);
            this.publishProWin2.show();
            // publishpro2 初始化
            let 
                publishPro2WinId = this.publishProWin2.webContents.id,
                paramsObj = {
                    workspacePath: this.getWorkspaceRootPath(),
                    protype: this.layaProtype,
                    langindex: langindex,
                    projectVersion: window.proInfoObj && window.proInfoObj.version,
                    envPATHStr: envPATHStr,
                    mainRenderId: this.remote.getCurrentWebContents().id
                };
            this.ipcRenderer.sendTo(publishPro2WinId, "codemain:init", paramsObj);
        });
    }
    /**
     * 新发布
     */
    publishPro3() {
        if (this.publishProWin3) {
            this.publishProWin3.show();
            return;
        }

        // 检查是否有publish/compile文件
        let compileFilePath = this.path.join(this.getWorkspaceRootPath(), ".laya", "compile.js");
        let idePublish3FilePath = this.path.join(__dirname, "../", "laya", "code", this.layaProtype, "empty", ".laya", "compile.js");
        let ideCompileFilePath = this.path.join(__dirname, "../", "laya", "code", this.layaProtype, "empty", ".laya", "publish.js");
        if (!this.fs.existsSync(compileFilePath)) { // 不存在，则拷贝
            // 拷贝
            this.copyFile(idePublish3FilePath, this.path.dirname(compileFilePath));
            this.copyFile(ideCompileFilePath, this.path.dirname(compileFilePath));
        }

        this.publishProWin3 = new remote.BrowserWindow({
            width: 590,
            height: 800,
            minWidth: 590,
            minHeight: 800,
            show: false,
            center: true,
            frame: true,
            resizable: false,
            // parent: codeMain.remote.getCurrentWindow(),
            // modal: true, // 更改为模态窗口
        });
        // this.publishProWin3.openDevTools();
        this.publishProWin3.setMenu(null); // 有时候会莫名其妙的显示菜单
        this.publishProWin3.loadURL("file:///" + path.join(__dirname, `./../../../layarepublic/publishpro3/index.html`));
        this.publishProWin3.once("close", () => {
            this.publishProWin3 = null;
        })
        this.publishProWin3.once('ready-to-show', () => {
        	this.publishProWin3.setTitle(this.publishProWin3.getTitle()+"("+codeMain.layaIDEVersion+")")
            this.publishProWin3.show();
            // publishpro3 初始化
            let 
                publishPro3WinId = this.publishProWin3.webContents.id,
                paramsObj = {
                    workspacePath: this.getWorkspaceRootPath(),
                    protype: this.layaProtype,
                    langindex: langindex,
                    projectVersion: window.proInfoObj && window.proInfoObj.version,

                    mainRenderId: this.remote.getCurrentWebContents().id
                };
            this.ipcRenderer.sendTo(publishPro3WinId, "codemain:init", paramsObj);
        });
    }
    
    /**
     * 合并文件panel
     */
    mergeFile() {
        if (this.mergeFileWin) {
            this.mergeFileWin.show();
            return;
        }
        // 判断会员
        let loginInfo = codeMain.layaPageIns.getLoginInfo();
        if (!loginInfo  || !loginInfo.is_vip) {
            window.tipPanel.show(this.getPanelLang(493), this.getPanelLang(492));
            return;
        }

        this.mergeFileWin = new remote.BrowserWindow({
            width: 590,
            height: 800,
            minWidth: 590,
            minHeight: 800,
            show: false,
            center: true,
            frame: true,
            resizable: false,
            // parent: codeMain.remote.getCurrentWindow(),
            // modal: true, // 更改为模态窗口
        });
        // this.mergeFileWin.openDevTools();
        this.mergeFileWin.setMenu(null); // 有时候会莫名其妙的显示菜单
        this.mergeFileWin.loadURL("file:///" + path.join(__dirname, `./../../../layarepublic/mergefile/index.html`));
        this.mergeFileWin.once("close", () => {
            this.mergeFileWin = null;
        })
        this.mergeFileWin.once('ready-to-show', () => {
        	this.mergeFileWin.setTitle(this.mergeFileWin.getTitle()+"("+codeMain.layaIDEVersion+")")
            this.mergeFileWin.show();
            // publishpro3 初始化
            let 
                mergeFileWinId = this.mergeFileWin.webContents.id,
                paramsObj = {
                    workspacePath: this.getWorkspaceRootPath(),
                    langindex: langindex,
                };
            this.ipcRenderer.sendTo(mergeFileWinId, "codemain:init", paramsObj);
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
            layahandlerHtml.startReadfile(this.workspacePath, "ts")
        }
        this.executeCommandCode("workbench.action.tasks.build");
    }
    compileJSPro() {
        layahandlerHtml.startReadfile(this.workspacePath, "js");
        this.emit("compileAndRunPro");
    }
    makerDebugContinue() {

    }
    makerDebugPause() {

    }
    makerDebugRestart() {

    }
    makerDebugExit() {
        let 
                mainCodeMenuContainerEle = document.getElementById("mainCodeMenuContainer"),
                makerDebuggerEle = document.getElementById("makerDebugger");
            mainCodeMenuContainerEle.style.display = "block";
            makerDebuggerEle.style.display = "none";
            code_panel.style.width = "";
    }
    editeMenuhandler(type) {
        // https://layaair.ldc.layabox.com/api2/Chinese/index.html?category=Core&class=laya.events.Keyboard
        var Keyboard = laya.events.Keyboard;
        // public static function exeKey(key:int, ctrl:Boolean = false, shift:Boolean = false,force:Boolean=false):void
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
                ShortcutManager.exeKey(Keyboard.P, true, true);
                break;
            case "file.openPage":
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

    /**
     * 当IDE检测到时layacloud项目时，增加服务器按钮
     */
    initLayaCloudProjectBtnList() {
        var iconfont = document.createElement('script');
        iconfont.src = '../../../layarepublic/layaCloud/iconfont.js';
        document.body.appendChild(iconfont);
        let btninfoList = require('./config/btninfo.js').layacloud;
        if (!btninfoList || !Array.isArray(btninfoList) || btninfoList.length === 0) {
            return;
        }
        let btnListEle = document.getElementById("code_panel").getElementsByClassName("toolLi")[0];
        let 
            length = btninfoList.length,
            liEle,
            btnItem;
        for (let i = 0; i < length; i++) {
            btnItem = btninfoList[i];
            liEle = document.createElement("li");
            liEle.className = "cloud-hidden layacloud-tool-item";
            liEle.className += btnItem.leftBorder ? ' layacloud-tool-first' : '';
            if (btnItem.btnName) {
                liEle.setAttribute("onclick", `codeMain.execServerBtnClick("${btnItem.btnName}")`);
            } else {
                liEle.setAttribute("onclick", `codeMain.execServerGulpfile("${btnItem.tasksName}", "${btnItem.clientTasksName}")`);
            }
            liEle.setAttribute("data-title", btnItem["name_" + (langindex === 0 ? "ch" : "en")]);
            liEle.innerHTML = `
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-${btnItem.icon}"></use>
                </svg>
            `;
            if (btnItem.leftBorder) {
                liEle.style = `margin-left: 20px;padding-left: 20px;`;
            }
            btnListEle.appendChild(liEle);
        }
    }
    /**
     * 当IDE检测到时layacloud项目时，执行gulp tasks，server检查脚本更新
     */
    checkLayaCloudProjectTasks() {
        codeMain.execServerGulpfile("checkupdate");
    }
    /**
     * layacloud项目，执行服务器gulp tasks
     * @param {*} tasksName 
     * @param {*} clientTasksName 
     * 
     * - 如果error里检查到laya_ide_relogin，重新登录
     */
    execServerGulpfile(tasksName, clientTasksName) {
        if (clientTasksName === "debug") {
            codeMain.compileAndRunPro();
        } else if (clientTasksName === "run") {
            codeMain.compileAndRun();
        }
        let 
            isEnd = false,
            _startTime = Date.now();
        this.outputServerGulpMsg(`laya.ide.restart.clear`);
        this.showStatusBarGulpMsg("Laya server");
        let gulpDir = this.path.join(__dirname, "../../../../", "node_modules", "gulp/bin/gulp.js");
        let workspaceRootPath = this.path.join(this.workspacePath, "server"); // server端
        let gulpFile = this.path.join(workspaceRootPath,'gulpfile.js');
        let loginInfo = codeMain.layaPageIns.getLoginInfo();
        let loginToken = loginInfo && loginInfo.token ? loginInfo.token : '';
        let cmd = [`--gulpfile=${gulpFile}`, tasksName, `--logintoken=${loginToken}`];
        this.outputServerGulpMsg(`Laya server ${tasksName} ${this.getPanelLang(428)}\n`); // 开始执行
        this.outputServerGulpMsg(`--------------------------------------\n`);
        let fork1 = this.childprocess.fork(gulpDir, cmd, {
            silent: true
        });
        fork1.stdout.on("data", (data) => {
            let _data = data + "";
            let isComplete = _data.match(/^laya\.ide\.complete$/m);
            if (_data.match(/^laya_ide_time/m)) { // 时间统计，不写入输出面板
                // console.log(`%cgulp: ${_data}`, "color: #fff; background-color: #3FCFB9;");
                _data = _data.replace(/^laya_ide_time.+\n?/mg, "");
            }
            if (_data.match(/^laya_ide_file/m)) { // 时间统计，不写入输出面板
                // console.log(`%cgulp: ${_data}`, "color: #fff; background-color: #1db3f1;");
                _data = _data.replace(/^laya_ide_file.+\n?/mg, "");
            }
            if (isComplete) { // 成功
                let useTime = Date.now() - _startTime;
                isEnd = true;
                if (_data.match(/^laya\.ide\.complete$\n/m)) {
                    _data = _data.replace(/^laya\.ide\.complete$\n/m, "");
                } else {
                    _data = _data.replace(/^laya\.ide\.complete$/m, "Finished...");
                }
                this.outputServerGulpMsg(_data);
                this.emit("compileAndRunPro");
                this.hideStatusBarGulpMsg();
                this.outputServerGulpMsg(`--------------------------------------\n`);
                this.outputServerGulpMsg(`Laya server ${this.getPanelLang(427)}${useTime / 1000}s\n`); // 执行结束，耗时
            } else {
                this.outputServerGulpMsg(_data);
            }
            // layacloud项目、stop任务、确认文本，执行回调函数
            if (window.proInfoObj && window.proInfoObj.layaProType === 8 && 
                _data.match("layacloud localdebug server closed.")) {
                    // 问题在于，当服务开启的时候，这句话是run任务输出出来的，stop任务接受不到
                    // run任务是没有回调函数的，导致无法关闭
                    // 所以检测到用户点过关闭按钮时，监听到这句话，直接关闭IDE
                    // 如果layacloud服务没有开启，这句话也会输出
                    if (sessionStorage.getItem("layacloud.close.curwindow") === "true") {
                        this.remote.getCurrentWindow().close();
                    }
            }
        });
        fork1.stderr.on("data", (err) => { // 出错
            let _err = err + "";
            if (_err.match(/^laya_ide_relogin$/m)) { // 重新登录
                this.layaPageIns.logoutAndReLogin();
            }
            if (_err.match(/^laya_ide_reRead_layacloud$/m)) { // 重新加载最新的layacloud脚本
                this.deleteLayaCloudRequireCache();
            }
            if (_err.match(/^\s+\^$/m)) {
                _err = _err.split(/^\s+\^$/m)[1];
            }
            this.outputServerGulpMsg(`\n${this.getPanelLang(425)}:`); // 出错了
            this.outputServerGulpMsg(_err);
            window.tipPanel.hide();
            this.hideStatusBarGulpMsg();
            isEnd = true;
        });
        fork1.on("close", () => {
            if (!isEnd) { // 中断连接了，但是既没有成功消息，也没有失败消息
                this.outputServerGulpMsg(`${this.getPanelLang(426)}...\n`); // 编译异常，请检查代码后重试
                window.tipPanel.hide();
                this.hideStatusBarGulpMsg();
            }
        });
    }

    execServerBtnClick(btnName) {
        let loginInfo = this.layaPageIns.getLoginInfo();
        if (!loginInfo) {
            this.layaPageIns.logoutAndReLogin();
            return;
        }
        if (btnName === 'qudao') { // layacloud 渠道，打开webview
            // 获取gameId
            let gameId;
            try {
                let gameInfoStr = this.fs.readFileSync(`${this.path.join(this.workspacePath, 'layacloud.json')}`);
                let gameInfoJSON = JSON.parse(gameInfoStr);
                gameId = gameInfoJSON.appid;
            } catch (e) {
                alert("获取gameId失败!");
                throw e;
            }
            let layacloudQudao = getElement("div", "shop-wrapper");
            layacloudQudao.id = "layacloudQudao";
            layacloudQudao.style = "display: none; position: absolute; top: 89px; left: -259px;";
            codeMain.addPopLayer(layacloudQudao);
            let 
                token = loginInfo.token,
                style = this.getIDETheme() === "light" ? "light" : "black";
            let url = `http://developers.masteropen.layabox.com/develope/sp_list.html?gameId=${gameId}&token=${token}&style=${style}`;
            console.log(`%c渠道URL:${url}`, "background-color: green;color: #fff;");
            let bgColor = this.getIDETheme() === "light" ? "#fff" : "#3d3d3d";
            layacloudQudao.innerHTML = `
                <div class="wrapper" style="background-color: ${bgColor}">
                    <div class="common-tool-title">
                        <div class="common-tool-icon-wrapper">
                            <img class="common-tool-icon" title="${codeMain.getPanelLang(321)}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
                        </div>
                        <div class="common-tool-title-content">${codeMain.getPanelLang(321)}</div>
                        <div class="common-tool-close"></div>
                    </div>
                    <webview src="${url}" style=""></webview>
                </div>
            `;
            layacloudQudao.getElementsByClassName("common-tool-close")[0].onclick = function() {
                codeMain.removePopLayer(layacloudQudao);
            };
            layacloudQudao.style.display = "block";
            let 
                title = document.getElementsByClassName("common-tool-title")[0];
            __Layadrag(layacloudQudao, title);
            // webview监听
            let qudaoWebviewEle = layacloudQudao.getElementsByTagName("webview")[0];
            qudaoWebviewEle.addEventListener('close', () => {
                codeMain.removePopLayer(layacloudQudao);
            });
            qudaoWebviewEle.addEventListener('will-navigate', (url) => { // 跳转
                let _url = url;
                if (typeof _url == 'object') {
                    _url = url.url;
                }
                qudaoWebviewEle.loadURL(_url);
            });
            qudaoWebviewEle.addEventListener('console-message', (event) => { 
                // 也可以使用 ipc-message , 但是 nodeintegration 使用 $ 符， 和 jquery 冲突
                this.layaPageIns.handleLoginConsoleMessage(event.message);
            });
        } else if (btnName == "manageCenter") {
            window.open("http://developers.masteropen.layabox.com/dist/");
        }
    }

    /**
     * 显示广告
     */
    initAdvInfo() {
        let infoObj = {
            url: `${this.URLObj.downIDEURL}/ideinfo/adconfig.json?v=${Date.now()}`
        };
        this.getInfoFromServer(infoObj, (re) => {
            let advObj;
            try {
                advObj = JSON.parse(re);
            } catch(e) {
                advObj = null;
            }
            if (advObj.topbarad) {
                let topbarObj = advObj.topbarad;
                if (!topbarObj || !topbarObj.name_ch || !topbarObj.name_en || !topbarObj.url) {
                    return;
                }
                let text = langindex === 0 ? topbarObj.name_ch : topbarObj.name_en;
                let menuAdvertisingEle = document.getElementById("menuAdvertising");
                menuAdvertisingEle.innerText = text;
                menuAdvertisingEle.onclick = () => {
                    window.open(topbarObj.url);
                }
                menuAdvertisingEle.style = topbarObj.style;
                menuAdvertisingEle.parentElement.style = topbarObj.parentStyle2;
            }
            if (advObj.webviewad) {
                let loginInfo = this.layaPageIns.getLoginInfo();
                let isVip = loginInfo && loginInfo.is_vip;
                // webview广告
                let 
                    webviewList = advObj.webviewad || [],
                    length = webviewList.length,
                    webviewItem,
                    url,
                    parentStyle,
                    webviewStyle;
                for (let i = 0; i < length; i++) {
                    let parentEle = getElement("div");
                    webviewItem = webviewList[i];
                    if (isVip && webviewItem.viphide) { // 是VIP会员，并且该广告不对VIP展示，关闭
                        continue;
                    }
                    url = webviewItem.url;
                    parentStyle = webviewItem.parentStyle;
                    webviewStyle = webviewItem.style;
                    parentEle.style = parentStyle;
                    parentEle.innerHTML = `
                        <webview src="${url}?idevar=${codeMain.localversion}" style="${webviewStyle}"></webview>
                    `;
                    document.body.appendChild(parentEle);

                    let webviewEle = parentEle.getElementsByTagName("webview")[0];
                    webviewEle.addEventListener('close', () => {
                        parentEle.remove();
                    });
                    webviewEle.addEventListener('will-navigate', (url) => { // 跳转
                        let _url = url;
                        if (typeof _url == 'object') {
                            _url = url.url;
                        }
                        webviewEle.loadURL(_url);
                    });
                    webviewEle.addEventListener('console-message', (event) => { 
                        // 也可以使用 ipc-message , 但是 nodeintegration 使用 $ 符， 和 jquery 冲突
                        this.layaPageIns.handleLoginConsoleMessage(event.message);
                    });
                    webviewEle.addEventListener('new-window', (e) => { // 使用浏览器打开新窗口
                        // 1) 当win10系统打开target="_blank"链接，启动chrome浏览器时，会导致弹出应用商店窗口
                        // 所以建议，使用window.open打开新建窗口，以启动chrome浏览器
                        this.remote.shell.openExternal(e.url);
                    });
                }
            }
        });
    }

    deleteLayaCloudRequireCache(modulePath) {
        var layacloud = this.path.join(process.cwd(), "resources", "app", "out", "layarepublic", "layaCloud", "index.js");
        delete require.cache[layacloud];
    };

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
                this.closeCurWindow();
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
            case "publishPro2":
                this.publishPro2();
                break;
            case "publishPro3":
                this.publishPro3();
                break;
            case "compilePro":
                this.compileProAndCallBack()
                break;
            // case "layaqrcodeshowqrcode":
            //     qcodeImg();
            //     break;
            case "openUserPath":
                var flag = this.remote.shell.showItemInFolder(this.path.join(this.remote.app.getPath("userData"), "log.txt"));
                if (!flag) this.remote.shell.showItemInFolder(this.remote.app.getPath("userData"));
                break;
            case "checkupdateVersions":
                // window.open("http://ldc.layabox.com/layadownload/?type=layaairide")
                var popPanel = window.layainfobar;
                let isBeta = codeMain.layaIDEVersion.includes("beta");
                let 
                    oldVersion = codeMain.localversion,
                    newVersion = isBeta ? window.configVersion.betaVersion : window.configVersion.releaseVersion;
                // 没有更新
                if (window._compareVersion(oldVersion, newVersion) !== 1) { // 0:equal; 1:new>old; -1:new<old
                    var pop = new popPanel.ShowPop([codeMain.panel[142][langindex]], codeMain.lang(codeMain.getPanelLang(285)), function(e) {
                        pop.dispose();
                    })
                    return;
                }

                // 有更新
                var pop = new popPanel.ShowPop([codeMain.panel[142][langindex], codeMain.panel[104][langindex], codeMain.panel[105][langindex]], codeMain.lang(codeMain.getPanelLang(284), oldVersion, newVersion), function(e) {
                    if (e === codeMain.panel[104][langindex]) { // 立即更新
                        var _pathextension = path.join(__dirname, './../../../codeextension/updateversion');
                        if (path.join(_pathextension, "extension.js")) {
                            try {
                                var mode = codeMain.require(path.join(_pathextension, "extension.js"));
                                mode.activate();
                            } catch(e) {
                                console.error('更新拓展调用失败: ', e);
                            }
                        }
                        localStorage.removeItem('doNotUpdateVersion');
                    } else if (e === codeMain.panel[105][langindex]) { // 更新日志
                        window.open("http://ldc2.layabox.com/layadownload/?type=layaairide");
                    } else { // 关闭
                        pop.dispose();
                    }
                });
                break;
            case "changelog":
                window.open("http://ldc2.layabox.com/layadownload/?type=layaairide");
                break;
            case "devcenter":
                window.open("http://ldc2.layabox.com/");
                break;
            case "layademo":
                window.open("http://layaair.ldc.layabox.com/demo2/#Sprite_DisplayImage");
                break;
            case "layaboxPublic":
                window.open("http://www.layabox.com/")
                break;
            case "layaReward":
                this.menubarsIns.initRewardBtnClickListener();
                break;
            case "libselection":
                LibsPanel();
                break;
            case "version":
                break;
            case "switchIDE":
                if (window.globalMode === this.globalModeType.layamaker) {
                    localStorage.setItem('globalMode', this.globalModeType.code);
                } else {
                    localStorage.setItem('globalMode', this.globalModeType.layamaker);
                }
                this.executeCommandCode('workbench.action.newWindow');
                this.menuclickHandler("workbench.action.closeWindow");
                break;
            case "tool.swfConvert":
                //this.startflashtool();
                SwfConvertPanel();
                break;
            case "tool.jsCompress":
                jscompressTool();
                break;
            case "tool.tpgCompress":
                tpgConvert();
                break;
            case "tool.textureConvert":
                codeMain.showExchangeImg();
                break;
            case "tool.textFilePackage":
                codeMain.mergeFile();
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
                showNative("http://www.layabox.com/layanative2.0/index.html", codeMain.panel[57][langindex])
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
            case "tool.wxdevtool":
                this.startWxDevTool();
                break;
            case "tools.ideConfig":
                this.openIdeConfigPanel();
                break;
            case "workbench.action.files.saveAll":
                this.executeCommandCode(comamand);
                laya && laya.editor && laya.editor.view && laya.editor.view.UIPanel.instance.saveAll();
                break;
            case "workbench.view.search":
                this.executeCommandCode(comamand);
                this.mode = code;
                setTimeout(() => {
                    this.onlySearchInTSFile();
                }, 0);
                break;
            case "ethblockchain.redeploy":
                this.blockchainRedeploy();
                break;
            case "watch.compile.enable":
                this.enableCompileWatch();
                break;
            case "watch.compile.disable":
                this.closeCompileWatch();
                break;
            case "ide.theme.dark":
                if (this.getIDETheme() === "dark") {
                    return;
                }
                this.changeIDETheme("init.dark");
                break;
            case "ide.theme.light":
                if (this.getIDETheme() === "light") {
                    return;
                }
                this.changeIDETheme("init.light");
                break;
            default:
                this.executeCommandCode(comamand);
                this.mode = code;
                break;
        }
        this.mode = code;
    }

    /**
     * 关闭窗口
     * - 如果是layabox layacloud项目，关闭之前先调用脚本
     * - 如果长时间没通知我关闭，则自动关闭(2s)
     */
    closeCurWindow() {
        // 不是layacloud项目
        if (!window.proInfoObj || window.proInfoObj.layaProType !== 8) {
            this.remote.getCurrentWindow().close();
            return;
        }
        // loading
        window.tipPanel.show(this.getPanelLang(462), this.getPanelLang(461));
        // 如果10s还没有执行完，强制关闭
        setTimeout(() => {
            this.remote.getCurrentWindow().close();
        }, 10000);
        // 调用接口，监听结果
        this.execServerGulpfile("stop");
        sessionStorage.setItem("layacloud.close.curwindow", "true");
    }

    blockchainRedeploy() {
        let proInfo = window.proInfoObj;
        if (!proInfo) {
            return;
        }
        let params = {
            path: proInfo.path,
            name: proInfo.proName,
            lang: proInfo.proType,
            type: "reDeploy"
        };
        blockchainDeploy(params, () => {

        });
    }
    onlySearchInTSFile() {
        if (this.layaProtype !== "ts") { // 不是ts项目
            return;
        }
        let wrapper = document.getElementsByClassName("query-details")[0];
        let excludeFileInput = wrapper && wrapper.getElementsByTagName("input")[1];
        if (!excludeFileInput) { // 没有“排除包含的文件”input
            return;
        }
        let oldText = excludeFileInput.value;
        let isContain = oldText.indexOf("**/*.js") !== -1;
        if (isContain) { // 已经包含了不搜索js文件
            return;
        }
        // 设置value,不搜索js文件
        if (oldText) { // 如果oldText有值，也可以加上，但是开发者已经删掉了，说明不需要，不加的好
            // excludeFileInput.value = oldText + ",**/*.js";
        } else {
            excludeFileInput.value = "**/*.js";
        }
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

        // 如果layamaker项目模式，并且没有登录，不允许切换
        if (window.globalMode === this.globalModeType.layamaker && !window.cloudProject) {
            return;
        }

        // 如果登录webview显示着，将登录webview关闭
        if (this.layaPageIns.isLayaLoginHTMLShow()) {
            this.layaPageIns.destoryLoginHTMLShow();
        }
        // 如果商城浮窗显示着，将商城浮窗webview关闭
        if (this.layaPageIns.isPopUpShopShow()) {
            this.layaPageIns.destoryPopUpShopHTML();
        }
        // code模式下，切换显示sidebar
        if (type === this.mode && this.mode === 'code') {
            let sidebarWidh = parseInt(document.getElementById("workbench.parts.sidebar").style.width);
            let exploreEle = document.getElementsByClassName('action-label explore')[0];
            if (exploreEle && sidebarWidh === 0) {
                exploreEle.click();
            }
        }

        if (type === this.mode) return;

        if (type !== 'homepage' && this.layaPageIns.isHomePageShow()) {
            this.layaPageIns.destory();
        }

        // IDE尚未完全加载完成时，切换左侧item，会导致菜单显示错乱
        code_panel && (code_panel.style.display = "none");
        
        // 将所有menu隐藏，某个页面显示的时候，将该页面对应的menu显示
        this.codeContainer && (code_panel.style.display = this.codeContainer.style.display = "none");
        this.uiViewContainer && (uicodeMenuList.style.display = this.uiViewContainer.style.display = "none", laya.events.KeyBoardManager.enabled = false);
        uicodeMenuList && (uicodeMenuList.style.display = "none"); // 菜单
        layaaskMenuList && (layaaskMenuList.style.display = "none");  // 菜单
        // 问答论坛
        this.layastoreContainer && (this.layastoreContainer.style.display = "none");
        store_operation_panel && (store_operation_panel.style.display = "none"); // url操作栏
        // 文档搜索
        this.layasearchContainer && (this.layasearchContainer.style.display = "none");
        ask_operation_panel && (ask_operation_panel.style.display = "none"); // url操作栏
        // 帮助文档
        this.layaHelpContainer && (this.layaHelpContainer.style.display = "none");
        help_operation_panel && (help_operation_panel.style.display = "none"); // url操作栏
        // 用户中心
        this.layaUserContainer && (this.layaUserContainer.style.display = "none");
        user_operation_panel && (user_operation_panel.style.display = "none"); // url操作栏
        

        if (type == "uicode") {
            // layamaker项目模式下，不询问加载空项目，由uicode负责从云端下载
            if (window.globalMode !== this.globalModeType.layamaker && !this.fs.existsSync(this.path.join(this.getWorkspaceRootPath(), "laya", ".laya"))) {
                var result = confirm(codeMain.getPanelLang(158));
                if (result) {
                    this.mkdirsSync(this.path.join(this.getWorkspaceRootPath(), "laya"))
                    var uipath = this.path.join(this.path.dirname(__dirname), "laya", "code", "as", "empty", "laya");
                    this.copyDir(uipath, this.path.join(this.getWorkspaceRootPath(), "laya"))
                } else {
                    return;
                }
            }
			if (!this.uiViewContainer) {
                this.mode = "uicode";
                uiMenuDivHandler();
                var scripts = document.createElement("script");
                document.body.appendChild(scripts);
                scripts.src = "layabuilder.max.js"
                scripts.onload = () => {
                    setTimeout(() => {
                        let isNeedPushToRemote = false; // 是否需要将项目上传
                        // if (window.globalMode === this.globalModeType.layamaker && sessionStorage.getItem('isNeedPushToRemote') === 'true') { // layamaker模式，并且有新建标记
                        //     sessionStorage.removeItem('isNeedPushToRemote');
                        //     isNeedPushToRemote = true;
                        // }
                        if (laya) laya.editor.manager.ProjectManager.loadProject(this.path.join(this.getWorkspaceRootPath(), "laya", this.uiConfigName), null, false, isNeedPushToRemote);
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
            this.codeContainer && (this.codeContainer.style.display = "none") && (code_panel.style.display = 'block') && (codeMenuList.style.display = 'none');
            this.mode = "uicode";
        } else if (type == "code") {
            this.codeContainer && (code_panel.style.display = this.codeContainer.style.display = "block") && (codeMenuList.style.display = 'block');
            this.mode = "code";
            this.emit("changeCodeMode");
        } else if (type == "layastore") {
            this.mode = "layastore";
            if (!this.layastoreContainer) {
                aksPageMenuDivHandler(); // 初始化菜单
                this.emit("createLayaStore"); // 初始化网页URL app\out\layarepublic\toolbar\extension.js
            } else {
                this.layastoreContainer.style.display = "block";
            }
            layaaskMenuList.style.display = 'block';
            store_operation_panel.style.display = "flex";
        } else if (type == "layasearch") {
            this.mode = "layasearch";
            if (!this.layasearchContainer) {
                aksPageMenuDivHandler(); // 初始化菜单
                this.emit("createLayaSearch"); // 初始化网页URL app\out\layarepublic\toolbar\extension.js
            } else {
                this.layasearchContainer.style.display = "block";
            }
            layaaskMenuList.style.display = 'block';
            ask_operation_panel.style.display = "flex";
        } else if (type == "homepage") {
            this.mode = "homepage";
            aksPageMenuDivHandler(); // 初始化菜单
            if (!this.layaPageIns.isHomePageShow()) {
                this.layaPageIns.createLayaIndexHTML();
            }
            layaaskMenuList.style.display = 'block';
        } else if (type == "layahelp") {
            this.mode = "layahelp";
            if (!this.layaHelpContainer) {
                aksPageMenuDivHandler(); // 初始化菜单
                this.emit("createLayaHelp"); // 初始化网页URL app\out\layarepublic\toolbar\extension.js
            } else {
                this.layaHelpContainer.style.display = "block";
            }
            layaaskMenuList.style.display = 'block';
            help_operation_panel.style.display = 'flex';
        } else if (type == "layauser") {
            this.mode = "layauser";
            if (!this.layaUserContainer) {
                aksPageMenuDivHandler(); // 初始化菜单
                this.emit("createLayaUser"); // 初始化网页URL app\out\layarepublic\toolbar\extension.js
            } else {
                this.layaUserContainer.style.display = "block";
            }
            layaaskMenuList.style.display = 'block';
            user_operation_panel.style.display = 'flex';
        }
    }
    changeLayaMakerRes(type) {
        if (window.globalMode !== codeMain.globalModeType.layamaker) {
            return;
        }
        let _type = type.replace("layamaker.", "");
        ide.managers.Notice.notify(laya.ide.event.IDEEvent.CLOUDPANEL_SWITCH_TYPE,[_type])
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

    get layazip() {
        let archiver = this.require("archiver");
        let _archiver = archiver('zip', {
            zlib: { level: 9 } // 设置压缩等级
        });
        return _archiver;
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
        // this.layanativewindow.openDevTools();
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
        const { execFile, exec } = require('child_process');
        var wxToolInstallPath = this.ideConfigObj && this.ideConfigObj.wechat && this.ideConfigObj.wechat.installPath;
        if (process.platform == "win32") {
            if (!wxToolInstallPath) { // 因为微信变换过安装目录，逐个检查目录是否存在
                wxToolInstallPath = 'C:/Program Files (x86)/微信小游戏开发者工具/微信web开发者工具/微信web开发者工具.exe';
                if (!this.fs.existsSync(wxToolInstallPath)) {
                    wxToolInstallPath = 'C:/Program Files (x86)/Tencent/微信小游戏开发者工具/微信web开发者工具/微信web开发者工具.exe';
                }
                if (!this.fs.existsSync(wxToolInstallPath)) {
                    wxToolInstallPath = 'C:/Program Files (x86)/Tencent/微信web开发者工具/微信web开发者工具.exe';
                }
            }
            if (path.basename(wxToolInstallPath).indexOf('.exe') === -1) {
                wxToolInstallPath = path.join(wxToolInstallPath, "微信web开发者工具.exe");
            }
        } else if(process.platform === 'darwin'){
            if (!wxToolInstallPath) {
                wxToolInstallPath = '/Applications/wechatwebdevtools.app';
            }
        } else {
            alert(codeMain.lang(this.getPanelLang(239), process.platform));
            return;
        }
        if(!this.fs.existsSync(wxToolInstallPath)){
            alert(this.getPanelLang(238));
            this.openIdeConfigPanel();
            return;
        }
        if (process.platform === 'darwin') { // mac无法通过.app的方式启动，仍然使用之前的方式启动
            let wxToolCliPath = path.join(wxToolInstallPath, 'Contents', 'Resources', 'app.nw', 'bin', 'cli');
            execFile(wxToolCliPath, ['-o', proBinPath, '-f', 'laya'], (error, stdout, stderr) => {
                if (error) {
                  throw error;
                }
                console.log(stdout);
              });
              return;
        }
        exec(`"${wxToolInstallPath}"`, (error, stdout, stderr) => {
          if (error) {
            throw error;
          }
          console.log(stdout);
        });
    }
    getProBinPath(){
        let res = "";
        let workspaceRootPath = codeMain.workspacePath;
        let launchJson = {};
        try {
            let launchStr = codeMain.getlaunchInfo().replace(/^.*\/\/.*$/mg, "");
            launchJson = JSON.parse(launchStr);
        } catch (e) {
        }
        let configurations = launchJson.configurations && launchJson.configurations[0];
        let isHasClientDir = configurations && configurations.file && configurations.file.indexOf("client") !== -1;
        let clientDirName = isHasClientDir ? "client" : "";
        switch(this.layaProtype){
            case 'as': //as
                let isHasH5Dir = configurations && configurations.file && configurations.file.indexOf("h5") !== -1;
                let h5DirName = isHasH5Dir ? "h5" : "";
                res = this.path.join(workspaceRootPath, clientDirName, "bin", h5DirName);
                break;
            case 'ts': //ts
                res = this.path.join(workspaceRootPath, clientDirName, "bin");
                break;
            case 'js': //js
                res = this.path.join(workspaceRootPath, clientDirName, "bin");
                break;
            default:
                console.log('Unknow Project Type:' + this.proObj.proType);
        }
        return res;

    }
    getlaunchInfo() {
        let workspaceRootPath = codeMain.getWorkspaceRootPath();
        let launchPath = this.path.join(workspaceRootPath, ".laya", "launch.json");
        return this.fs.readFileSync(launchPath, "utf-8");
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
        var titleBackground;
        titleBackground = getElement("div", "common-tool-title");
        titleBackground.innerHTML = `
            <div class="common-tool-icon-wrapper">
                <img class="common-tool-icon" title="${codeMain.panel[235][langindex]}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
            </div>
            <div class="common-tool-title-content">${codeMain.panel[235][langindex]}</div>
            <div class="common-tool-close"></div>
        `;
        __Layadrag(popPanel, titleBackground)
        viewPanel.appendChild(titleBackground);
        viewPanel.appendChild(popPanelBackground);
        titleBackground.getElementsByClassName("common-tool-close")[0].onclick = () => {
            codeMain.removePopLayer(popPanel);
        }
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
        btninput.onclick = function() {
            var dialogLaya = electron.remote.dialog;
            dialogLaya.showOpenDialog({
                properties: ["openDirectory", 'createDirectory'],
                filters: [{
                    name: 'All Files',
                    extensions: ['js']
                }],
                defaultPath: inputFile.value
            }, function(pathLaya) {
                if (pathLaya) {
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
            ide_nav_max.className = "max";
        }
        win.on("resize", () => {
            if (win.isMaximized() || win.isFullScreen()) {
                ide_nav_max.className = "max";
            } else {
                ide_nav_max.className = "";
            }
        })
        var div__ = `
        <div>
            <ul id="mainCodeMenuContainer" class="toolLi">
                <li onclick="codeMain.createProHandler()" data-title="${this.getMenuListLang(2)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-newpro"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(324)}</span>
                    </a>
                </li>
                <li onclick='codeMain.menuclickHandler("workbench.action.files.saveAll")' data-title="${this.getMenuListLang(13)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-save"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(325)}</span>
                    </a>
                </li>
                <li class="cloud-hidden" onclick='codeMain.compileProAndCallBack()' data-title="${this.getPanelLang(115)}">
                    <a href="#">
                        <div class="toolbar-image tool-compile"></div>
                    </a>
                </li>
                <li class="cloud-hidden" onclick='codeMain.compileAndRunPro()' data-title="${this.getPanelLang(117)}">
                    <a href="#">
                        <div class="toolbar-image tool-debug"></div>
                    </a>
                </li>
                <li onclick='codeMain.compileAndRun()' data-title="${this.getPanelLang(278)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-run"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(326)}</span>
                    </a>
                </li>
                <select class="cloud-hidden" id="layadebugSelect" class="layadebugSelect">
                    <option value="layaAir">${this.getPanelLang(118)}</option>
                    <option value="chrome调试">${this.getPanelLang(119)}</option>
                </select>
                <select id="tscSelect" class="tscSelect" style="display:none">
                    <option value="global">${this.getPanelLang(242)}</option>
                    <option value="local">${this.getPanelLang(243)}</option>
                </select>
                <li onclick='codeMain.publishPro2()' data-title="${this.getPanelLang(116)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-publish"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(327)}</span>
                    </a>
                </li>
                <li onclick='codeMain.publishPro3()' data-title="${this.getPanelLang(488)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-publish3"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(488)}</span>
                    </a>
                </li>
                <li class="cloud-hidden" onclick='qcodeImg()' data-title="${this.getMenuListLang(119)}" style="box-sizing: border-box;cursor: pointer;">
                    <div class="toolbar-image tool-qrcode"></div>
                </li>
            </ul>
            <ul class="toolLi" id="makerDebugger" style="display: none;">
                <li class="cloud-show" onclick='codeMain.makerDebugContinue()' data-title="${this.getPanelLang(329)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-publish"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(329)}</span>
                    </a>
                </li>
                <li class="cloud-show" onclick='codeMain.makerDebugPause()' data-title="${this.getPanelLang(330)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-publish"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(330)}</span>
                    </a>
                </li>
                <li class="cloud-show" onclick='codeMain.makerDebugRestart()' data-title="${this.getPanelLang(331)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-publish"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(331)}</span>
                    </a>
                </li>
                <li class="cloud-show" onclick='codeMain.makerDebugExit()' data-title="${this.getPanelLang(332)}">
                    <a class="cloud-flex cloud-top-icon" href="#">
                        <div class="toolbar-image tool-publish"></div>
                        <span class="cloud-show topbar-text">${this.getPanelLang(332)}</span>
                    </a>
                </li>
            </ul>
        </div>
        `;
        code_panel.innerHTML = div__;
        // 默认显示codeMenuList菜单
        if (window.globalMode !== this.globalModeType.layamaker) {
            codeMenuList.style.display = "block";
        }
    }

    /**
     * 显示panel-纹理
     */
    showExchangeImg() {
        // 创建背景容器
        this.requestTexturePanel = getElement("div", "common-whole-wrapper");
        this.requestTexturePanel.id = "requestTexture";
        this.requestTexturePanel.style.zIndex = 199999999;
        this.requestTexturePanel.innerHTML = `
            <div class="common-main-wrapper" style="width: 600px; height: 400px;">
                <div class="common-tool-title">
                    <div class="common-tool-icon-wrapper">
                        <img class="common-tool-icon" title="${this.getPanelLang(470)}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
                    </div>
                    <div class="common-tool-title-content">${this.getPanelLang(470)}</div>
                    <div class="common-tool-close"></div>
                </div>
                <div class="upload-mian-area">
                    <!-- 错误显示 -->
                    <div class="common-error-prompt" style="display: none; z-index: 2;">
                        <div class="common-error-circle"></div>
                        <div class="common-error-prompt-content"></div>
                    </div>
                    <!-- 图片路径 -->
                    <span class="common-inputbefore-label" style="position: absolute; width: 65px; left: 10px; text-align: right; top: 100px;">${this.getPanelLang(468)}</span>
                    <input class="common-skins-input upload-file-input" type="text" placeholder="${this.getPanelLang(468)}" style="left: 100px; width: 380px; top: 100px;"/>
                    <button class="common-skins-file-btn upload-file-btn" type="text" style="top: 100px; left: 510px;">${this.getPanelLang(22)}</button>
                    <!-- 保存路径 -->
                    <span class="common-inputbefore-label" style="position: absolute; width: 65px; left: 10px; text-align: right; top: 160px;">${this.getPanelLang(469)}</span>
                    <input class="common-skins-input download-file-input" type="text" placeholder="${this.getPanelLang(469)}" style="left: 100px; width: 380px; top: 160px;" readonly="readonly"/>
                    <button class="common-skins-file-btn download-file-btn" type="text" style="top: 160px; left: 510px;">${this.getPanelLang(22)}</button>
                    <!-- 使用平台 -->
                    <span class="common-inputbefore-label" style="position: absolute; width: 65px; left: 10px; text-align: right; top: 220px;">${this.getPanelLang(478)}</span>
                    <select class="use-platform" style="position: absolute; width: 80px; left: 100px; text-align: right; top: 220px;">
                        <option>Android</option>
                        <option>IOS</option>
                    </select>
                    <!-- 确定按钮 -->
                    <button class="common-skins-ok-btn" style="top: 300px; left: 250px;">${this.getPanelLang(38)}</button>
                </div>
            </div>
        `;
        this.addPopLayer(this.requestTexturePanel);
        let 
            title = this.requestTexturePanel.getElementsByClassName("common-tool-title")[0];
        __Layadrag(this.requestTexturePanel, title);
        this.bindRequestTextureEvent();
    }

    bindRequestTextureEvent() {
        let 
            uploadFileInput = this.requestTexturePanel.getElementsByClassName("upload-file-input")[0],
            downFileInput = this.requestTexturePanel.getElementsByClassName("download-file-input")[0],
            errorPanel = this.requestTexturePanel.getElementsByClassName("common-error-prompt")[0];
        
        let oldInfo = localStorage.getItem("textureInput");
        if (oldInfo) {
            try {
                oldInfo = oldInfo && JSON.parse(oldInfo);
                uploadFileInput.value = oldInfo.input;
                downFileInput.value = oldInfo.output;
            } catch(e) {}
        }

        this.requestTexturePanel.addEventListener('click', () => {
            let target = event.target;
            let parentNodeEle = target;
            for (let i = 0; i < 10; i++) {
                if (!parentNodeEle) { // 没有父元素了，return
                    return;
                }
                let className = parentNodeEle.className;
                if (typeof className !== "string") {
                    return;
                }
                if (className.indexOf('common-main-wrapper') !== -1) {
                    return;
                }
                if (className == 'common-skins-ok-btn') { // 确定
                    this.requestTextureOK();
                    return;
                } else if (className.includes("upload-file-btn")) { // 资源btn
                    errorPanel.style.display = "none";
                    this.remote.dialog.showOpenDialog({
                        properties: ["openFile"],
                        filters: [{name: 'image', extensions: ["jpg", "png"]}],
                        defaultPath: uploadFileInput.value
                    }, function(p) {
                        if (p) {
                            uploadFileInput.value = p[0];
                        }
                    });
                } else if (className.includes("download-file-input") || className.includes("download-file-btn")) { // 下载路径btn
                    errorPanel.style.display = "none";
                    this.remote.dialog.showOpenDialog({
                        properties: ["openDirectory", 'createDirectory'],
                        defaultPath: downFileInput.value
                    }, function(p) {
                        if (p) {
                            downFileInput.value = p[0];
                        }
                    });
                }
                parentNodeEle = parentNodeEle.parentNode;
            }
        }, false);
        // drop事件
        this.requestTexturePanel.addEventListener('drop', (e) => {
            e.preventDefault();
            errorPanel.style.display = "none";
            let filePath = e.dataTransfer.files[0].path;
            let r = fs.lstatSync(filePath);
            if (r.isFile() && (filePath.endsWith(".png") || filePath.endsWith(".jpg"))) {
                uploadFileInput.value = filePath;
            } else if (r.isDirectory()) {
                uploadFileInput.value = filePath;
            }
        });
        // 关闭按钮
        this.requestTexturePanel.getElementsByClassName("common-tool-close")[0].addEventListener("click", () => {
            this.removePopLayer(this.requestTexturePanel);
        }, false);
        
        // 检测是否登录过，如果没有登录，强制其登录
        let loginInfo = this.layaPageIns.getLoginInfo();
        if (!loginInfo) {
            let params = {
                show: true,
            };
            this.layaPageIns.createLayaLoginHTML(params);
        }
    }

    requestTextureOK() {
        let 
            uploadFileInput = this.requestTexturePanel.getElementsByClassName("upload-file-input")[0],
            downFileInput = this.requestTexturePanel.getElementsByClassName("download-file-input")[0],
            usePlatform = this.requestTexturePanel.getElementsByClassName("use-platform")[0],
            errorPanel = this.requestTexturePanel.getElementsByClassName("common-error-prompt")[0],
            errorInfo = this.requestTexturePanel.getElementsByClassName("common-error-prompt-content")[0];
        let 
            uploadImageDirPath = uploadFileInput.value,
            downFilePath = downFileInput.value;
        let 
            isAndroid = usePlatform.selectedIndex === 0;
        // 判断是不是会员
        let loginInfo = this.layaPageIns.getLoginInfo();
        if (!loginInfo || loginInfo.is_vip !== 1) {
            errorPanel.style.display = "block";
            errorInfo.innerText = this.getPanelLang(489); // 该功能是VIP专属功能，如果您已经充值VIP，请重新登录以刷新状态
            return;
        }
        if (!uploadImageDirPath || !downFilePath) {
            errorPanel.style.display = "block";
            errorInfo.innerText = this.getPanelLang(471); // 图片路径和保存路径不可为空
            return;
        } else if (!this.fs.existsSync(uploadImageDirPath) || !this.fs.existsSync(downFilePath)) {
            errorPanel.style.display = "block";
            errorInfo.innerText = this.getPanelLang(472); // 图片路径或保存路径不存在
            return;
        }
        localStorage.setItem("textureInput", JSON.stringify({input: uploadImageDirPath, output: downFilePath}));

        // 如果是一个文件夹，逐个进行纹理压缩
        // 全部当成一个文件夹处理
        let allFileList = [];
        let fileList = {};
        let r = fs.lstatSync(uploadImageDirPath);
        if (r.isFile()) { // 文件
            allFileList = [uploadImageDirPath];
        } else if (r.isDirectory()) { // 文件夹
            let dirname = this.path.dirname(uploadImageDirPath);
            this.walk(uploadImageDirPath, allFileList, dirname);
            for (let i = 0, len = allFileList.length; i < len; i++) {
                allFileList[i] = this.path.join(dirname, allFileList[i].url);
            }
        }

        let _this = this;
        execRequestTexture();

        function execRequestTexture() {
            let 
                totalLen = allFileList.length,
                execLen = Object.keys(fileList).length;
            console.log(totalLen, execLen);
            if (totalLen <= execLen) { // 所有文件执行完成
                if (totalLen > 1) {
                    errorPanel.style.display = "block";
                    errorInfo.innerText = _this.getPanelLang(495); // 纹理压缩结束，请在控制台查看单个文件是否成功
                }
                console.log("纹理压缩结束: ", fileList);
                return;
            }
            let uploadImagePath = allFileList[execLen]
            let info = {
                isAndroid: isAndroid,
                uploadImagePath: uploadImagePath,
                downFilePath: downFilePath
            };
            console.log(totalLen, execLen);
            console.log("纹理压缩: ", uploadImagePath);
            _this.requestTexture(info, (isSuccess, errorText) => {
                if (isSuccess) {
                    errorPanel.style.display = "block";
                    errorInfo.innerText = errorText;
                } else {
                    errorPanel.style.display = "block";
                    errorInfo.innerText = errorText;
                }
                let execInfo = {
                    isSuccess: isSuccess,
                    text: errorText
                };
                console.log("纹理压缩结果: ", uploadImagePath, execInfo);
                fileList[uploadImagePath] = execInfo;
                execRequestTexture();
            });
        }
    }

    requestTexture(info, func) {
        let 
            isAndroid = info.isAndroid,
            uploadImagePath = info.uploadImagePath,
            downFilePath = info.downFilePath;

        let 
            extension = this.path.extname(uploadImagePath),
            fileName = this.path.basename(uploadImagePath);

        if (extension !== ".png" && extension !== ".jpg") {
            func(false, this.getPanelLang(494)); // 图片文件不是jpg和png格式
            return;
        }
        if (isAndroid && extension !== ".png") {
            func(false, this.getPanelLang(473)); // Android平台只可以上传png格式图片
            return;
        }
        // 上传图片，下载纹理图片
        let _file = this.tool.getFile(uploadImagePath);
        this.tool.getImageWH(_file).then(({width, height}) => {
            // Android平台，图片像素长宽相等，且必须为2的幂次方
            let _sideWidth = width;
            if (isAndroid && width !== height) {
                func(false, this.getPanelLang(474)); // Android平台，图片长度和宽度必须相等
                return;
            }
            // iOS平台，长宽可以不相等，但都必须为2的幂次方
            if (!isAndroid) {
                _sideWidth = width > height ? width : height;
                if (!Number.isInteger(Math.log2(width)) || !Number.isInteger(Math.log2(height))) {
                    func(false, this.getPanelLang(475)); // 纹理图片，图片长宽必须为2的幂次方
                }
            }
            // 获取纹理图片的幂次方(Android长宽是否为2的幂次方，在这里判断)
            let mipmap = Math.log2(_sideWidth) + 1;
            if (!Number.isInteger(mipmap)) {
                func(false, this.getPanelLang(475)); // 纹理图片，图片长宽必须为2的幂次方
                return;
            }

            // 添加loading效果
            let loaderEle = document.createElement("div");
            loaderEle.id = "loader";
            loaderEle.style.display = "flex";
            loaderEle.innerHTML = `
                <div class="load-container load4">
                    <div class="loader">Loading...</div>
                </div>
            `;
            this.requestTexturePanel.appendChild(loaderEle);
            // 获取请求参数
            let 
                _format,
                _extension,
                _other;
            if (isAndroid) {
                _format = "ETC1";
                _extension = "ktx";
                _other = ` -m ${mipmap} -q etcfast `;// " -m " + 图片mipmap.ToString() + "-q etcfast "
            } else {
                _extension = "pvr";
                if (extension === ".png") {
                    _format = "PVRTC1_4_RGB";
                    _other = ` -m ${mipmap} -r ${width},${height} -q pvrtcfastest `; // " -m " + 图片mipmap.ToString() + " -r "+ 图片像素大小.ToString()+ "," + 图片像素大小.ToString()+ " -q pvrtcfastest ";
                } else {
                    _format = "PVRTC1_4";
                    _other = ` -m ${mipmap} -r ${width},${height} -q pvrtcfastest `; // " -m " + 图片mipmap.ToString() + " -r "+ 图片像素大小.ToString()+ "," + 图片像素大小.ToString()+ " -q pvrtcfastest ";
                }
            }
            this.regLogin(true, (token, devuid, isExec) => {
                // 判断是否超过绑定数量
                if (!isExec) {
                    let loadingEle = document.getElementById("loader");
                    loadingEle && loadingEle.remove();
                    func(false, this.getPanelLang(490)); // 当前绑定设备数量已达到最大数量，请解绑设备后重新登录以绑定该设备
                    return;
                }
                var formData = {
                    file: this.fs.createReadStream(uploadImagePath),
                    format: _format,
                    extension: _extension,
                    developer_uid: devuid,
                    other: _other,
                    token: token,
                    uuid: localStorage.getItem("systemuuid")
                };
                this.layarequest.post({
                    url: this.exchangeImgURL,
                    encoding: null, // 接收的是二进制，必须把encoding设置为null
                    formData: formData
                }, (error, response, body) => {
                    let loadingEle = document.getElementById("loader");
                    loadingEle && loadingEle.remove();
                    if (error) {
                        func(false, error);
                        throw error;
                    }
                    if (response.statusCode == 200) {
                        try {
                            let re = JSON.parse(body);
                            if (re.ret === -5) { // token过期
                                sessionStorage.removeItem("getMasterTokenTime");
                                this.requestTexture();
                                return;
                            } else if (re.ret === -6) {
                                func(false, this.getPanelLang(491)); // 该设备未进行绑定，请重新登录以绑定设备
                                return;
                            }
                            func(false, re.msg);
                            return;
                        } catch(e) {}
                        let reExtension = isAndroid ? ".ktx" : ".pvr";
                        let reFileName = this.path.join(downFilePath, fileName.replace(extension, "") + reExtension);
                        this.fs.writeFileSync(reFileName, body, "binary");
                        func(true, this.getPanelLang(477)); // 纹理图片转换成功
                    }
                });
            });
        }).catch((e) => {
            console.error(e);
            func(false, this.getPanelLang(476)); // 未知错误，请与服务提供商联系
        });
    }

    /**
     * 两种接口
     * isVIP = false 获取是否是VIP，拿到uid
     * isVIP = true 如果是VIP，绑定UUID
     */
    regLogin(isVIP, func) {
        let loginInfo = this.layaPageIns.getLoginInfo();
        if (!loginInfo) {
            let params = {
                show: true,
            };
            this.layaPageIns.createLayaLoginHTML(params);
            return;
        }
        // 如果时间在一个小时之内，则使用原来的token
        let time = sessionStorage.getItem("getMasterTokenTime");
        if (time) {
            // 1000 * 60 * 60 = 3600000;
            let tokenExistTime = Date.now() - time;
            if (tokenExistTime < 3600000) {
                console.log(`%c非maker，重新请求token，使用了保存的token: ${tokenExistTime}`, "color: #1200ff;");
                func instanceof Function && func(loginInfo.token_master, loginInfo.devuid, loginInfo.isExec);
                return;
            }
        }
        let username = loginInfo.username;
        let userId = loginInfo.userId;
        let getInfoObj = {
            url: `http://developers.masteropen.layabox.com/auth/reg_login?userId=${userId}&username=${username}`
        };
        if (isVIP) {
            getInfoObj.url = `http://developers.masteropen.layabox.com/auth/reg_uuid_login?userId=${userId}&username=${username}&uuid=${localStorage.getItem("systemuuid")}&&os=${localStorage.getItem("systemhostname")}`;
        }
        console.log(`%c是否VIP: ${isVIP}`, "color: green;");
        this.getInfoFromServer(getInfoObj, (re) => {
            let _infoObj;
            try {
                _infoObj = re && JSON.parse(re);
            } catch(e) {
                _infoObj = null;
            }
            if (!_infoObj || 'object' !== typeof _infoObj || _infoObj.ret !== 0 || 'object' !== typeof _infoObj.data) {
                let errMsg = `getInfoObj=${JSON.stringify(getInfoObj)}\n re=${JSON.stringify(_infoObj)}`;
                throw new Error(errMsg);
            }
            let _loginInfo = _infoObj.data;
            let token_master = _loginInfo.token;
            let is_vip = _loginInfo.is_vip;
            let devuid = _loginInfo.uid;
            let isExec =  _loginInfo.uuid; // 是否超过VIP绑定设备数量，因为仅在登录时提供，需要将该值传递

            // 更新登录信息
            loginInfo.token_master = token_master;
            loginInfo.is_vip = is_vip;
            loginInfo.devuid = devuid;
            loginInfo.isExec = isExec;

            this.layaPageIns.setLoginInfo(loginInfo);

            // 如果isVIP传过来的是false，不是undefined，则是webview传过来的信息，需要如果最新信息证明是VIP，则需要绑定UUID
            if (isVIP + "" === "false" && _loginInfo.is_vip) {
                let params = {
                    type: 'regLoginInfo'
                };
                this.layaPageIns.handleLoginConsoleMessage(JSON.stringify(params));
            }

            func instanceof Function && func(token_master, devuid, isExec);
        });
    }

    /**
     * 充值VIP*
     */
    rechargeVIP() {
        let VIPPanel = getElement("div", "shop-wrapper");
        VIPPanel.id = "rechargeVIP";
        VIPPanel.style = "display: block; position: absolute; top: 89px; left: -259px;";
        codeMain.addPopLayer(VIPPanel);
        
        let filePath = this.path.join(this.layaPageIns.editPageDir, "vip", "index.html");
        let url = `file://${filePath}`;
        let bgColor = this.getIDETheme() === "light" ? "#fff" : "#3d3d3d";
        VIPPanel.innerHTML = `
            <div class="wrapper" style="background-color: ${bgColor}">
                <div class="common-tool-title">
                    <div class="common-tool-icon-wrapper">
                        <img class="common-tool-icon" title="充值VIP" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
                    </div>
                    <div class="common-tool-title-content">充值VIP</div>
                    <div class="common-tool-close"></div>
                </div>
                <webview src="${url}" style=""></webview>
            </div>
        `;

        VIPPanel.getElementsByClassName("common-tool-close")[0].onclick = function() {
            codeMain.removePopLayer(VIPPanel);
        };
        let 
            title = document.getElementsByClassName("common-tool-title")[0];
        __Layadrag(VIPPanel, title);

        // webview监听
        let VIPWebviewEle = VIPPanel.getElementsByTagName("webview")[0];
        VIPWebviewEle.addEventListener('close', () => {
            codeMain.removePopLayer(VIPPanel);
        });
        VIPWebviewEle.addEventListener('will-navigate', (url) => { // 跳转
            let _url = url;
            if (typeof _url == 'object') {
                _url = url.url;
            }
            VIPWebviewEle.loadURL(_url);
        });
        VIPWebviewEle.addEventListener('console-message', (event) => { 
            // 也可以使用 ipc-message , 但是 nodeintegration 使用 $ 符， 和 jquery 冲突
            this.layaPageIns.handleLoginConsoleMessage(event.message);
        });
    }

    invoice() {
        let VIPPanel = getElement("div", "shop-wrapper");
        VIPPanel.id = "rechargeVIP";
        VIPPanel.style = "display: block; position: absolute; top: 89px; left: -259px;";
        codeMain.addPopLayer(VIPPanel);
        
        let style = this.getIDETheme() === "light" ? "light" : "black";
        let url = `http://ldc.layabox.com/download/idepages/invoice/index.html?style=${style}&v=${Date.now()}`;
        let bgColor = this.getIDETheme() === "light" ? "#fff" : "#3d3d3d";
        VIPPanel.innerHTML = `
            <div class="wrapper" style="background-color: ${bgColor}">
                <div class="common-tool-title">
                    <div class="common-tool-icon-wrapper">
                        <img class="common-tool-icon" title="开发票须知" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
                    </div>
                    <div class="common-tool-title-content">开发票须知</div>
                    <div class="common-tool-close"></div>
                </div>
                <webview src="${url}" style=""></webview>
            </div>
        `;

        VIPPanel.getElementsByClassName("common-tool-close")[0].onclick = function() {
            codeMain.removePopLayer(VIPPanel);
        };
        let 
            title = document.getElementsByClassName("common-tool-title")[0];
        __Layadrag(VIPPanel, title);

        // webview监听
        let VIPWebviewEle = VIPPanel.getElementsByTagName("webview")[0];
        VIPWebviewEle.addEventListener('close', () => {
            codeMain.removePopLayer(VIPPanel);
        });
        VIPWebviewEle.addEventListener('will-navigate', (url) => { // 跳转
            let _url = url;
            if (typeof _url == 'object') {
                _url = url.url;
            }
            VIPWebviewEle.loadURL(_url);
        });
        VIPWebviewEle.addEventListener('console-message', (event) => { 
            // 也可以使用 ipc-message , 但是 nodeintegration 使用 $ 符， 和 jquery 冲突
            this.layaPageIns.handleLoginConsoleMessage(event.message);
        });
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
    setUpCodeMenu() {
        setTimeout(() => {
            let proInfo = window.proInfoObj;
            if (proInfo && (proInfo.layaProType === 7 || proInfo.layaProType === 9 || proInfo.layaProType === 11)) { // 如果是区块链项目
                this.addMenuListItemInCode("prolaya", codeMain.getPanelLang(300), "ethblockchain.redeploy");
            }
            // 是否进行编译优化
            let isWatch = localStorage.getItem("watchcompile") === "true";
            if (isWatch) {
                this.addMenuListItemInCode("tool", codeMain.getPanelLang(480), "watch.compile.disable", 0); // 关闭编译优化功能
            } else {
                this.addMenuListItemInCode("tool", codeMain.getPanelLang(479), "watch.compile.enable", 0); // 启用编译优化功能
            }
        }, 2000);
        
    }
    getInfoFromServer(infoObj, func) { // 获取网络请求
        let xhr = new XMLHttpRequest();
        xhr.open("GET", infoObj.url, true);
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState==4 && xhr.status==200) { 
                let response = xhr.responseText;
                func instanceof Function && func(response);
            } 
        };
        let sendInfoStr = infoObj.content ? infoObj.content : null;
        xhr.send(sendInfoStr);
        xhr.onerror = function(e) {
        }
    }
    postInfoToServer(infoObj, func) { // 获取网络请求
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", infoObj.url, true);
            xhr.onreadystatechange = function(e) {
                if (xhr.readyState==4 && xhr.status==200) { 
                    let response = xhr.responseText;
                    func instanceof Function && func(response);
                    resolve(response);
                } else if (xhr.readyState==4 && xhr.status !== 200) {
                    reject(xhr.status);
                }
            };
            xhr.send(infoObj.content);
            xhr.onerror = function(e) {
                reject(e);
            }
        });
    }
    getAllFileInFolder(filePath, arrList) {
        var files = this.fs.readdirSync(filePath);
        files.forEach((item) => {
            var tmpPath = this.path.join(filePath, item);
            var stats = this.fs.statSync(tmpPath);
            if (stats.isDirectory()) {
                this.getAllFileInFolder(tmpPath, arrList);
            } else {
                arrList.push(tmpPath);
            }
        });
    }
    getAllFolderOneLayer(filePath, arrList) {
        var files = this.fs.readdirSync(filePath);
        files.forEach((item) => {
            var tmpPath = this.path.join(filePath, item);
            var stats = this.fs.statSync(tmpPath);
            if (stats.isDirectory()) {
                // this.getAllFileInFolder(tmpPath, arrList);
                arrList.push(tmpPath);
            } else {
                // arrList.push(tmpPath);
            }
        });
    }
    getFolderFileOneLayer(filePath, arrList) {
        var files = this.fs.readdirSync(filePath);
        files.forEach((item) => {
            var tmpPath = this.path.join(filePath, item);
            var stats = this.fs.statSync(tmpPath);
            if (stats.isDirectory()) {
                // this.getAllFileInFolder(tmpPath, arrList);
            } else {
                arrList.push(tmpPath);
            }
        });
    }
    /**
     * 输入路径，获取JSON串
     * @param {*} dirName 
     */
    writeJSONByDir(dirName) {
        if (typeof dirName !== "string") {
            throw new Error("请传入路径字符串!");
        }
        if (!this.fs.existsSync(dirName)) {
            throw new Error("该路径不存在!");
        }
        var stats = this.fs.statSync(dirName);
        if (!stats.isDirectory()) {
            throw new Error("该路径不是文件夹!");
        }
        let fileList = [];
        let prefix = this.path.dirname(dirName);
        this.walk(dirName, fileList, prefix);
        let fileStr = JSON.stringify(fileList, null, 4);
        // 将json写入文件
        let fileName = dirName + this.path.sep + `__${this.path.basename(dirName)}.json`;
        this.fs.writeFileSync(fileName, fileStr);
        console.log(`%c 输出完成: ${fileName}`, "color: green;");
    }

    /**
     * 右键目录菜单
     * resources\app\out\codeextension\createcontextmenu\extension.js
     */
    get menuutils() {
        return {
            // 新建脚本语言
            scriptMenuClick: (dirName) => {
                // 弹出panel，输入文件名
                let addFilePanel = getElement("div");
                addFilePanel.style = `width: 512px; height: 298px; position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0;`;
                addFilePanel.innerHTML = `
                    <div class="layaLayerPop">
                        <div class="layerBackground2" style="width: 500px; height: 240px;">
                            <div class="common-tool-title">
                                <div class="common-tool-icon-wrapper">
                                    <img class="common-tool-icon" title="${codeMain.getPanelLang(457)}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
                                </div>
                                <div class="common-tool-title-content">${codeMain.getPanelLang(457)}</div>
                                <div class="common-tool-close"></div>
                            </div>
                            <div>
                                <div class="blocked-error" style="visibility: hidden; display: flex; justify-content: center; align-items: center; margin-top: 20px;">
                                    <div class="circle" style="position: static; margin-right: 10px;"></div>
                                    <div class="hint" style="color: red; font-size: 14px;" class="common-skins-input"></div>
                                </div>
                                <div>
                                    <span class="common-inputbefore-label" style="position: absolute; left: 40px; top: 94px;">类名</span>
                                    <input type="text" class="inputSmallinput" style="top: 90px; left: 80px;"/>
                                </div>
                                <button class="layaBtnCustum2" style="top: 165px; left: 200px;">确定</button>
                            </div>
                        </div>
                    </div>
                `;
                codeMain.addPopLayer(addFilePanel);
                let 
                    layaLayerPop = addFilePanel.getElementsByClassName("layaLayerPop")[0],
                    title = addFilePanel.getElementsByClassName("common-tool-title")[0],
                    okBtn = addFilePanel.getElementsByClassName("layaBtnCustum2")[0],
                    closeBtn = addFilePanel.getElementsByClassName("common-tool-close")[0],
                    errorEle = addFilePanel.getElementsByClassName("blocked-error")[0],
                    scriptFileEle = addFilePanel.getElementsByClassName("inputSmallinput")[0],
                    hintEle = addFilePanel.getElementsByClassName("hint")[0];
                __Layadrag(layaLayerPop, title);

                scriptFileEle.focus();
                // 事件监听处理
                // 创建脚本
                let reg = /^[a-zA-Z]\w{0,100}$/;
                let createScriptFunc = () => {
                    let protype = this.layaProtype;
                    let scriptFileName = scriptFileEle.value.trim();
                    // 检查必填项
                    if (!scriptFileName) {
                        hintEle.innerHTML = this.getPanelLang(458);
                        errorEle.style.visibility = "visible";
                        return;
                    }
                    // 检查是否符合命名规范
                    if (!reg.test(scriptFileName)) {
                        hintEle.innerHTML = this.getPanelLang(459);
                        errorEle.style.visibility = "visible";
                        return;
                    }
                    // 检查是否同名
                    let scirptFilePath = this.path.join(dirName, `${scriptFileName}.${protype}`);
                    if (this.fs.existsSync(scirptFilePath)) {
                        hintEle.innerHTML = this.getPanelLang(460);
                        errorEle.style.visibility = "visible";
                        return;
                    }

                    let 
                        copyFilesPath = path.join(__dirname, "../", "../", "../", "codeextension", "createcontextmenu", "scriptfiles", `LayaIDE.${protype}`);
                    // 区分语言，拷贝，替换class name
                    let content = fs.readFileSync(copyFilesPath, "utf8");
                    content = content.replace(/__className__/gm, scriptFileName);
                    if ("as" === protype) { // as语言，需要修改包名
                        let relativePath = this.path.relative(this.workspacePath, dirName);
                        let _package = relativePath.replace(/\\/g, ".").replace(/\//g, ".").replace(/^src$/, "").replace(/^src./, "");
                        content = content.replace(/__package__/gm, _package);
                    }
                    fs.writeFileSync(scirptFilePath, content, "utf8");
                    this.onOpenFile(scirptFilePath);
                    closeFunc();
                }
                okBtn.addEventListener("click", createScriptFunc);
                // 文件名
                let tmpName;
                let inputChange = (e) => {
                    tmpName = e.target.value;
                    if (!reg.test(tmpName)) {
                        hintEle.innerHTML = this.getPanelLang(459);
                        errorEle.style.visibility = "visible";
                        return;
                    }
                    if (e.keyCode === 13) {
                        okBtn.click();
                        return;
                    }
                    hintEle.innerHTML = '';
                    errorEle.style.visibility = "hidden";
                }
                scriptFileEle.addEventListener("keyup", inputChange);
                // 关闭
                function closeFunc() {
                    codeMain.removePopLayer(addFilePanel);
                    okBtn.removeEventListener("click", createScriptFunc);
                    closeBtn.removeEventListener("click", closeFunc);
                };
                closeBtn.addEventListener("click", closeFunc); 
            }
        }
    }

    walk(_path, arrList, prefix) {
        var files = fs.readdirSync(_path);
        files.forEach((item) => {
            var tmpPath = this.path.join(_path, item);
            var stats = this.fs.statSync(tmpPath);
            let 
                pathRelative,
                pathObj;
            if (stats.isDirectory()) {
                this.walk(tmpPath, arrList, prefix);
            } else {
                pathRelative = this.path.relative(prefix, tmpPath);
                if (process.platform === "win32") {
                    pathRelative = pathRelative.replace(/\\/g, "/");
                }
                pathObj = {"url": pathRelative};
                arrList.push(pathObj);
            }
        });
    }

    get _laya() {
        return {
            writeJSONByDir: this.writeJSONByDir,
            setLayaMode: () => {
                if (window.isLayaSecretMode) {
                    return;
                }
                localStorage.setItem("layasecretmode", "true");
                this.isLayaSecretMode = window.isLayaSecretMode = true;
                this.executeCommandCode("workbench.action.reloadWindow");
            },
            removeLayaMode: () => {
                if (!window.isLayaSecretMode) {
                    return;
                }
                localStorage.removeItem("layasecretmode");
                this.isLayaSecretMode = window.isLayaSecretMode = false;
                this.executeCommandCode("workbench.action.reloadWindow");
            }
        }
    };
}

module.exports = CodeMain;
var layauiconfig = `<project version="2.0.0">
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