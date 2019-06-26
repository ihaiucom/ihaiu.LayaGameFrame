/**
 * 需要新建项目，配置 h5/config/newProInfo.js
 * 检查 codeMain.createNewPro 函数
 */
const EthUtil = require('ethereumjs-util');
const NEOWorker = require("./../../../layarepublic/blockchain/NEOBlock/index");

function NewProLaya()
{
    //var layaProObj ={"proPathSelect":proFilePath.value,"engineType":engineTypeVersion.selectedIndex,proTypeSelect:proSelectType.selectedIndex}
    var layaProObj = localStorage.getItem("layaProObj");
    if (layaProObj)
    {
        try
        {
            layaProObj = JSON.parse(layaProObj);
        }
        catch (e)
        {
            layaProObj = {};
        }
    }
    else
    {
        layaProObj = {};
    }
    var dialog = electron.remote.dialog;
    var currentSelectedLi = "";
    var _layaProType = 1;
    //创建背景容器
    var layaLayerPop = getElement("div", "layaLayerPop");
    layaLayerPop.style.zIndex = 199999999
    // document.body.appendChild(layaLayerPop);
    codeMain.addPopLayer(layaLayerPop);
    //创建背景
    var layerBackground = getElement("div", "layerBackground");
    layaLayerPop.appendChild(layerBackground);
    var newProTitle = getElement("div", "common-tool-title");
    newProTitle.innerHTML = `
        <div class="common-tool-icon-wrapper">
            <img class="common-tool-icon" title="${codeMain.getPanelLang(122)}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
        </div>
        <div class="common-tool-title-content">${codeMain.getPanelLang(122)}</div>
        <div class="common-tool-close"></div>
    `;
    layerBackground.appendChild(newProTitle);
    __Layadrag(layaLayerPop, newProTitle)
    newProTitle.getElementsByClassName("common-tool-close")[0].onclick = function() {
        codeMain.removePopLayer(layaLayerPop);
    }
    var layerBackgroundleftPanel = getElement("div", "layerBackgroundleftPanel");
    layerBackground.appendChild(layerBackgroundleftPanel);
    var title = getElement("a");
    layerBackgroundleftPanel.appendChild(title);
    title.innerText = codeMain.getPanelLang(122) //" 新建项目";
    // 左侧项目类型选择
    let newProObj;
    for (let i = 0; i < codeMain.newProInfoList.length; i++) {
        newProObj = codeMain.newProInfoList[i];
        if (newProObj.issecret && !codeMain.isLayaSecretMode) {
            continue;
        }
        var listPro = getElement("li", "listPro");
        layerBackgroundleftPanel.appendChild(listPro);
        listPro.setAttribute("data-index", i);
        var img = getElement("div", "");
        img.className = "small-icon " + newProObj["imgIcon"];
        listPro.appendChild(img);
        var title = getElement("a", "");
        title.innerHTML = newProObj["proName"];
        listPro.appendChild(title);
        var triangle = getElement("div", "triangle");
        listPro.appendChild(triangle);
        if (i === 0) {
            currentSelectedLi = listPro;
            currentSelectedLi.className += " selected";
        }
        listPro.onmousedown = mouseDownHandler;
    }

    //----------右边容器
    var layerBackgroundrightPanel = getElement("div", "layerBackgroundrightPanel");
    layerBackground.appendChild(layerBackgroundrightPanel);
    var img = getElement("dic", "");
    img.className = "img-icon image-big-01b";
    layerBackgroundrightPanel.appendChild(img);
    var title = getElement("a", "");
    title.innerHTML = `${codeMain.getPanelLang(1)}`;
    title.style.fontSize = "14px"
    layerBackgroundrightPanel.appendChild(title);

    function mouseDownHandler(e)
    {
        e.stopImmediatePropagation();
        currentSelectedLi.className = currentSelectedLi.className.replace(" selected", "");
        currentSelectedLi = e.currentTarget;
        currentSelectedLi.className += " selected";
        let index = currentSelectedLi.getAttribute('data-index');
        img.className = "img-icon " + codeMain.newProInfoList[index].imgSrc;
        _layaProType = codeMain.newProInfoList[index].layaProType;
        title.innerHTML = currentSelectedLi.outerText + "&nbsp;";
        if (_layaProType === 8) {
            proNameLaya.setAttribute("placeholder", codeMain.getPanelLang(307)); // 2~64位中英文字符
        } else {
            proNameLaya.setAttribute("placeholder", "");
        }
    }

    /////-------------------------路径按钮--------开始
    function changeValue() {
        fullPathAreaEle.innerText = `${proFilePath.value}` + path.sep + `${proNameLaya.value}`;
    }
    var layaNewProInput = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(layaNewProInput);
    // layaNewProInput.style.top = '220px';
    var input = getElement("span");
    input.innerHTML = `${codeMain.getPanelLang(59)}`; // 名称
    layaNewProInput.appendChild(input);
    var proNameLaya = getElement("input");
    setFocuInput(proNameLaya)
    proNameLaya.value = layaProObj.proName || "myLaya";
    layaNewProInput.appendChild(proNameLaya);
    proNameLaya.onkeyup = changeValue;
    ////---------------------------
    var layaNewProInput = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(layaNewProInput);
    var input = getElement("span");
    input.innerHTML = `${codeMain.getPanelLang(123)}`; // 路径
    layaNewProInput.appendChild(input);
    var proFilePath = getElement("input");
    proFilePath.style.width = "346px";
    setFocuInput(proFilePath);
    var proPathSelect = layaProObj.proPathSelect;
    try {
        proFilePath.value = proPathSelect || remote.app.getPath("documents") + path.sep + "myLaya";
    } catch(e) {
        console.error(e);
        alert("获取系统路径出错，请手动设置项目路径!");
    }
    layaNewProInput.appendChild(proFilePath);
    // layaNewProInput.style.top = "280px";
    var skipBtn = getElement("button");
    skipBtn.style.left = "1px";
    skipBtn.innerText = codeMain.getPanelLang(22); //"浏览";
    layaNewProInput.appendChild(skipBtn);
    skipBtn.onmousedown = function(e) {
        dialog.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            defaultPath: proFilePath.value
        }, function(p) {
            if (p) {
                proFilePath.value = p[0];
                changeValue();
            }
        });
    }
    proFilePath.onkeyup = changeValue;
        ////---------------------------
    var layaNewProInputSelect = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(layaNewProInputSelect);
    var input = getElement("span");
    input.innerHTML = codeMain.getPanelLang(134);
    layaNewProInputSelect.appendChild(input);
    var proSelectType = getElement("select");
    layaNewProInputSelect.appendChild(proSelectType);
    var option = getElement("option");
    option.text =`${codeMain.getPanelLang(4)}`// "ActionScript 3.0项目(可以同时发布为HTML5,手游App,Flash)";
    proSelectType.add(option);
    var option = getElement("option");
    option.text =`${codeMain.getPanelLang(5)}`// ActionScript 3.0项目(可//"TypeScript 项目(可以同时发布为HTML5,手游App)";
    proSelectType.add(option);
    var option = getElement("option");
    option.text = `${codeMain.getPanelLang(6)}`//"JavaScript 项目(可以同时发布为HTML5,手游App)";
    proSelectType.add(option);
    proSelectType.selectedIndex = layaProObj.proTypeSelect;
    // layaNewProInputSelect.style.top = "340px";
    //input.style.position ="ab"
    ////---------------------------;
    ////////-----------------------------引擎版本
    var engineTypePanel = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(engineTypePanel);
    // engineTypePanel.style.top = "460px";
    var input = getElement("span");
    input.innerHTML =`${codeMain.getPanelLang(7)}`// "引擎:&nbsp";
    engineTypePanel.appendChild(input);
    var engineTypeVersion = getElement("select");
    engineTypePanel.appendChild(engineTypeVersion);
    var enginepath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "libs";
    var fileList = fs.readdirSync(enginepath);
    fileList = fileList.reverse();
    for (var i = 0; i < fileList.length; i++)
    {
        var fileItem = fileList[i];
        var sta = fs.statSync(enginepath + path.sep + fileItem);
        if (sta.isDirectory())
        {
            var option = getElement("option");
            option.text = fileItem;
            engineTypeVersion.add(option);
        }
    }


    /////-------------------------------增加微信小游戏支持/as项目增加fb、fd
    var layaWeGameEle = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(layaWeGameEle);
    layaWeGameEle.style.height = "30px";
    layaWeGameEle.innerHTML = `
        <input type="checkbox" id="layaWeGame" ${layaProObj.isAddWeGame ? "checked" : ""}/>
        <label for="layaWeGame" style="cursor: pointer;" title="${codeMain.getPanelLang(463)}">${codeMain.getPanelLang(306)}</label>
        <div style="display: inline-block; margin-left: -125px;">
            <input type="checkbox" id="layaAddASFile" ${layaProObj.isAddASFile ? "checked" : ""}/>
            <label for="layaAddASFile" style="cursor: pointer;">${codeMain.getPanelLang(305)}</label>
        </div>
    `;

    changeProgramLang();
    layaNewProInputSelect.onchange = function(e)
    {
        changeProgramLang();
    }
    function changeProgramLang() {
        let selectedIndex = proSelectType.selectedIndex;
        let layaAddASFileParentEle = document.getElementById("layaAddASFile").parentElement;
        if (selectedIndex === 0) {
            layaAddASFileParentEle.style.display = "inline-block";
        } else {
            layaAddASFileParentEle.style.display = "none";
        }
    }

    //engineTypeVersion.selectedIndex = layaProObj.engineType || 0;
    /////-------------------------------项目完整路径
    var fullPathPanel = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(fullPathPanel);
    fullPathPanel.style = "height: 30px;";
    fullPathPanel.innerHTML = `
	    <span>${codeMain.getPanelLang(279)}</span>
	    <span id="fullPathArea">${proFilePath.value + path.sep + proNameLaya.value}</span>
    `;
    var fullPathAreaEle = document.getElementById('fullPathArea');
    /////-------------------------------
    var layaNewProInputBtn = getElement("div", "layaNewProInput");
    layerBackgroundrightPanel.appendChild(layaNewProInputBtn);
    // layaNewProInputBtn.style.top = "648px";
    var skipBtn = getElement("button", "createLayaBtn");
    skipBtn.innerText =`${codeMain.getPanelLang(8)}` //"创建";
    layaNewProInputBtn.appendChild(skipBtn);
    skipBtn.onmousedown = function(e)
    {
        // 必填项判断
        if (!proNameLaya.value)
        {
            alert(`${codeMain.getPanelLang(9)}`)
            return
        }
        if (_layaProType === 8) { // layacloud 项目，对项目名进行判断
            let proName = proNameLaya.value;
            if (proName.length > 64 || proName.length < 2) {
                alert(codeMain.getPanelLang(309)); // 项目名称为2~64位中英文字符
                return;
            }
        }
        const proFilePathValue = proFilePath.value + path.sep + proNameLaya.value;
        if (fs.existsSync(proFilePathValue))
        {
            if (fs.readdirSync(proFilePathValue).length > 0)
            {
                alert(`${codeMain.getPanelLang(299)}`);
                return;
                // if (!confirm(`${codeMain.getPanelLang(10)}`))
                // {
                //     return;
                // }
            }
        }
        // 路径中不能有中文或其他特殊符号
        if (!proFilePathValue.match(/^[\w\s:\-/\\\.]+$/)) {
            alert(codeMain.getPanelLang(434)); // 项目路径中不要包含中文和其他特殊符号
            return;
        }
        // 有些项目需要登录
        let needLoginList = [8]; // layacloud
        let isNeedLogin = needLoginList.indexOf(_layaProType) !== -1;
        if (isNeedLogin && !codeMain.layaPageIns.isLogin()) {
            let params = {
                show: true,
            };
            codeMain.layaPageIns.createLayaLoginHTML(params);
            return;
        }
        var layaProObj = {
            "proName": proNameLaya.value,
            "proPathSelect": proFilePath.value,
            "engineType": engineTypeVersion.selectedIndex,
            "proTypeSelect": proSelectType.selectedIndex,
            "layaProType": _layaProType,
            "isAddASFile": document.getElementById("layaAddASFile").checked,
            "isAddWeGame": document.getElementById("layaWeGame").checked
        }
        localStorage.setItem("layaProObj", JSON.stringify(layaProObj));
        console.log("新建项目--------")
            //localStorage.getItem("proPathSelect");
        var configFile = {};
        configFile.proName = proNameLaya.value + ".laya";
        configFile.version = codeMain.layaIDEVersion + "";
        // end. 必填项判断

        // 是否需要拷贝引擎库
        // 这一步需要创建项目目录
        var libsPath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "libs" + path.sep + engineTypeVersion.selectedOptions[0].text;
        let isNeedCopyLib = true;
        let needNotList = [6, 10];
        if (needNotList.indexOf(_layaProType) !== -1) { // 插件项目，不需要拷贝引擎库
            isNeedCopyLib = false;
        }

        let workspaceLibCopyRootDir = proFilePathValue;
        if (_layaProType === 8) {
            workspaceLibCopyRootDir = codeMain.path.join(workspaceLibCopyRootDir, "client");
        }
        if (isNeedCopyLib && proSelectType.selectedIndex == 0) // as 项目
        {
            var layaZipPath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "code" + path.sep + "as";
            libsPath = path.join(libsPath, "as", "libs");
            codeMain.copyDir(libsPath, path.join(workspaceLibCopyRootDir, "libs/laya"));
            var jslibsPath = path.join(path.dirname(libsPath), "jslibs");
            if (fs.existsSync(jslibsPath)) {
                codeMain.copyDir(jslibsPath, path.join(workspaceLibCopyRootDir, "bin/libs"));
            }
        }
        else if (isNeedCopyLib && proSelectType.selectedIndex == 1) // ts 项目
        {
            var layaZipPath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "code" + path.sep + "ts";
            libsPath = path.join(libsPath, "ts", "libs");
            codeMain.copyDir(libsPath, path.join(workspaceLibCopyRootDir, "bin/libs"));
            var tdspath = path.join(path.dirname(libsPath), "ts");
            if (!fs.existsSync(tdspath)) {
                tdspath = path.join(path.dirname(libsPath), "LayaAir.d.ts");
            }
            codeMain.copyDir(tdspath, path.join(workspaceLibCopyRootDir, "libs"));

        }
        else if (isNeedCopyLib) // js 项目
        {
            var layaZipPath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "code" + path.sep + "js";
            libsPath = path.join(libsPath, "js", "libs");
            codeMain.copyDir(libsPath, path.join(workspaceLibCopyRootDir, "bin/libs"));
            var tdspath = path.join(path.dirname(libsPath), "ts");
            if (!fs.existsSync(tdspath)) {
                tdspath = path.join(path.dirname(libsPath), "LayaAir.d.ts");
            }
            codeMain.copyDir(tdspath, path.join(workspaceLibCopyRootDir, "libs"));
        }

        if (!isNeedCopyLib) {
            var languageFloder = proSelectType.selectedIndex == 0 ? "as" : (proSelectType.selectedIndex == 1 ? "ts" : "js");
            var layaZipPath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "code" + path.sep + languageFloder;

            // 新建目录
            codeMain.mkdirsSync(proFilePathValue);
        }
        // end. 拷贝引擎库

        // 判断是否需要新增文件
        let isAddASFile = document.getElementById("layaAddASFile").checked;
        if (proSelectType.selectedIndex === 0 && isAddASFile) { // FB/FD文件判断
            let asProjectDir = path.dirname(__dirname) + path.sep + "laya" + path.sep + "code" + path.sep + "other" + path.sep + "asProject";
            codeMain.copyDir(asProjectDir + path.sep + ".actionScriptProperties", path.join(workspaceLibCopyRootDir));
            codeMain.copyDir(asProjectDir + path.sep + "LayaSample.as3proj", path.join(workspaceLibCopyRootDir));
            var xml = `<?xml version="1.0" encoding="UTF-8"?>
<projectDescription>
<name>${proNameLaya.value}</name>
<comment></comment>
<projects>
</projects>
<buildSpec>
    <buildCommand>
        <name>com.adobe.flexbuilder.project.flexbuilder</name>
        <arguments>
        </arguments>
    </buildCommand>
</buildSpec>
<natures>
    <nature>com.adobe.flexbuilder.project.actionscriptnature</nature>
</natures>
</projectDescription>`;
            fs.writeFileSync(workspaceLibCopyRootDir + path.sep + ".project", xml);
        }
        let isAddWeGame =  document.getElementById("layaWeGame").checked;
        if (isAddWeGame) { // 微信\百度小游戏支持判断
            let wxDir = path.join(__dirname, "../", "../", "../", "layarepublic", "LayaAirProjectPack", "lib", "data", "wxfiles");
            let bdDir = path.join(__dirname, "../", "../", "../", "layarepublic", "LayaAirProjectPack", "lib", "data", "bdfiles");
            codeMain.copyDir(wxDir, path.join(workspaceLibCopyRootDir, "bin"));
            codeMain.copyDir(bdDir, path.join(workspaceLibCopyRootDir, "bin"));
        }
        // end. 判断是否需要新增文件

        // 确定新建项目demo路径
        let newProInfoObj;
        for (let i = 0; i < codeMain.newProInfoList.length; i++) {
            newProInfoObj = codeMain.newProInfoList[i];
            if (newProInfoObj.layaProType === _layaProType) {
                layaZipPath = layaZipPath + path.sep + newProInfoObj.demoFolder;
                break;
            }
        }

        // 写入.laya文件
        var obj = {};
        obj.proName = proNameLaya.value;
        obj.engineType = layaProObj.engineType;
        //layaideconfig.mode = "0";
        obj.proType = proSelectType.selectedIndex;
        obj.layaProType = _layaProType;
        obj.version = "2.0.0";
        if (obj.layaProType === 6 && obj.proType === 1) { // plugin项目，ts语言，设置为1.0.0
            obj.version = "1.0.0";
        }
        fs.writeFileSync(proFilePathValue + path.sep + proNameLaya.value + ".laya", JSON.stringify(obj));
        // end. 写入.laya文件

        // document.body.removeChild(layaLayerPop);
        if (_layaProType === 8) { // layacloud项目
            let layaCloudInfo = {
                proFilePath: proFilePathValue,
                proName: proNameLaya.value,
                proEngin: proSelectType.selectedIndex,
                layaLayerPop: layaLayerPop,
            };
            let layaCloudParams = {
                notCreate: true
            };
            codeMain.createNewPro(workspaceLibCopyRootDir, layaZipPath, libsPath, obj, layaCloudParams);
            layaLayerPop.style.display = "none";
            layaCloudCreate(layaCloudInfo, function() {
                codeMain.removePopLayer(layaLayerPop);
                codeMain.sendDa("act", "newpro", "proName", obj.proName, "layaProType", obj.layaProType, "proType", obj.proType, "engineType", obj.engineType);
                codeMain._codechannel.openWindow([proFilePathValue]);
            });
            return;
        }
        let params;
        if (_layaProType === 6) { // 插件项目，只需要拷贝本身，不需要拷贝empty
            params = {
                notCopyEmpty: true,
            };
        }
        codeMain.removePopLayer(layaLayerPop);
        codeMain.createNewPro(workspaceLibCopyRootDir, layaZipPath, libsPath, obj, params);
    }
        /////-------------------关闭按钮------------
    var _this = this;
    NewProLaya.prototype.destroyPanel = function(e)
    {
        // layaLayerPop.parentNode.removeChild(layaLayerPop);
        codeMain.removePopLayer(layaLayerPop);
        _this = null;
        layaLayerPop = null;
        layaNewProPanelCtrol = null;
    }
}

let 
    blockchainEle,
    asideEle,
    mainEle,
    mainContentEle,
    okBtn,
    closeBtn,
    selectCSBtn,
    neoTrialRunBtn;
let Worker;
let 
    workspaceDir,
    blockchainWorkspaceDir, // 区块链创建项目用
    workspaceName,
    workspaceLang,
    blockTempDirName = 'blockchainTemplates',
    isSignatureSuccessed = false;
let 
    isETHProject,
    isNEOProject,
    isHPBProject,
    NEOCSFilePath,
    avmPath;
/**
 * 区块链重新部署函数
 * - 编译合约-校验签名-部署合约
 * - 该函数渲染了重新部署面板
 * - 定义了除"主按钮"事件以外其他事件的处理
 * - "主按钮"点击事件调用 blockchainOKClick 函数
 * - 1.0 / 2.0 common-tool-title处不同（2.0有title，可以移动）
 * - 1.0 / 2.0 layaProType处不同，因为1.0发版出错导致，2.0不需要同步这里
 */
function blockchainDeploy(params, cb) {
    isETHProject = window.proInfoObj && window.proInfoObj.layaProType === 7;
    isNEOProject =  window.proInfoObj && window.proInfoObj.layaProType === 9;
    isHPBProject =  window.proInfoObj && window.proInfoObj.layaProType === 11;
    NEOCSFilePath = null;
    if (!isETHProject && !isNEOProject && !isHPBProject) { // 因为菜单是动态注入的，一般而言不会执行该代码
        alert(codeMain.getPanelLang(466)); // 请在区块链项目中使用部署功能!
        return;
    }
    workspaceDir = params.path;
    blockchainWorkspaceDir = path.join(workspaceDir, blockTempDirName);
    workspaceName = params.name;
    workspaceLang = params.lang;

    //创建背景容器
    var layaBlockchainPop = getElement("div", "layaBlockchain");
    layaBlockchainPop.style.zIndex = 199999999
    codeMain.addPopLayer(layaBlockchainPop);

    layaBlockchainPop.innerHTML = `
    <div class="layerBackground">
        <div class="common-tool-title">
            <div class="common-tool-icon-wrapper">
                <img class="common-tool-icon" title="${codeMain.getPanelLang(300)}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
            </div>
            <div class="common-tool-title-content">${codeMain.getPanelLang(300)}</div>
            <div class="common-tool-close"></div>
        </div>
        <div class="aside">
            <div class="aside-item selected">${codeMain.getPanelLang(288)}</div>
            <div class="aside-divide-line"></div>
            <div class="aside-item">${codeMain.getPanelLang(289)}</div>
            <div class="aside-divide-line"></div>
            <div class="aside-item">${codeMain.getPanelLang(290)}</div>
        </div>
        <div class="main">
            <div class="main-content"></div>
            <div class="button-ok"></div>
            <div class="button-select-cs">${codeMain.getPanelLang(302)}</div>
            <div class="button-neo-trialRun">${codeMain.getPanelLang(303)}</div>
        </div>
    </div>
    `;
    let 
        title = layaBlockchainPop.getElementsByClassName("common-tool-title")[0];
    __Layadrag(layaBlockchainPop, title);
    // 动态改变右侧核心内容
    blockchainEle = document.getElementsByClassName("layaBlockchain")[0];
    asideEle = blockchainEle.getElementsByClassName("aside")[0];
    mainEle = blockchainEle.getElementsByClassName("main")[0];
    mainContentEle = mainEle.getElementsByClassName("main-content")[0];
    okBtn = mainEle.getElementsByClassName("button-ok")[0];
    closeBtn = blockchainEle.getElementsByClassName("common-tool-close")[0];
    selectCSBtn = blockchainEle.getElementsByClassName("button-select-cs")[0];
    neoTrialRunBtn = blockchainEle.getElementsByClassName("button-neo-trialRun")[0]; // NEO 试运行
    // 选择.cs文件
    selectCSBtn.addEventListener("click", function() {
        var dialogLaya = electron.remote.dialog;
        let options = {
            properties: ["openFile"],
            defaultPath: workspaceDir,
            filters: [{
                name: 'All Files',
                extensions: ['cs']
            }]
        };
        dialogLaya.showOpenDialog(options, function(pathLaya) {
            if (pathLaya) {
                NEOCSFilePath = pathLaya[0];
                okBtn.setAttribute("data-can-click", "true");
            }
        });
    }, false);
    // NEO试运行
    neoTrialRunBtn.addEventListener("click", function() {
        let errorEle = mainContentEle.getElementsByClassName("signature-error")[0];
        errorEle.style.display = "none";
        let 
            avmFileInputEle = mainContentEle.getElementsByClassName("contract-file")[0],
            contractNameEle = mainContentEle.getElementsByClassName("contract-name")[0],
            contractVersionEle = mainContentEle.getElementsByClassName("contract-version")[0],
            contractauthorEle = mainContentEle.getElementsByClassName("contract-author")[0],
            contractEmailEle = mainContentEle.getElementsByClassName("contract-email")[0],
            storageAreaEle = document.getElementById("storageArea"),
            dynamicExec = document.getElementById("dynamicExec"),
            receipt = document.getElementById("receipt"),
            contractDesEle = mainContentEle.getElementsByClassName("contract-des")[0],
            contractParamsEle = mainContentEle.getElementsByClassName("contract-params-type")[0],
            contractReturnEle = mainContentEle.getElementsByClassName("contract-return-type")[0];
        let params = {
            filePath: avmFileInputEle.value,
            description: contractDesEle.value,
            email: contractEmailEle.value,
            author: contractauthorEle.value,
            version: contractVersionEle.value,
            name: contractNameEle.value,
            need_storage: storageAreaEle.checked,
            need_nep4: dynamicExec.checked,
            payable: receipt.checked,
            return_type: contractReturnEle.value,
            parameter__list: contractParamsEle.value,
            mainnet: isMineNet, // 是否主网
        };
        Worker.invokeSc(params, (err, consume) => {
            if (err) {
                let errorContentEle = mainContentEle.getElementsByClassName("signature-error-content")[0];
                errorContentEle.innerText = `${isMineNet ? "" : "(测试环境)"}试运行失败\n${err}`;
                errorEle.style.display = "block";
                return;
            }
            okBtn.setAttribute("data-can-click", "true");
            mainContentEle.getElementsByClassName("consume-inner")[0].innerText = consume;
        });
    }, false);
    closeBtn.addEventListener("click", function() {
        codeMain.removePopLayer(layaBlockchainPop);
    }, false);
    
    // 点击按钮
    okBtn.setAttribute("data-index", "1");
    okBtn.setAttribute("data-can-click", "false");
    okBtn.innerText = codeMain.getPanelLang(288);
    okBtn.addEventListener("click", (event) => {
        blockchainOKClick(event, () => {
            // 移除面板，执行回调
            codeMain.removePopLayer(layaBlockchainPop);
            cb instanceof Function && cb();
        });
    }, false);

    // 切换显示panel
    asideEle.addEventListener("click", function(e) {
        let target = e.target;
        if (target.className !== "aside-item") { // 不是未选中的item，不处理
            return;
        }
        let text = target.innerText;
        if (isNEOProject) {
            avmPath = codeMain.path.join(blockchainWorkspaceDir, `${workspaceName}.avm`);
            if (text === codeMain.getPanelLang(288)) { // 编译合约
                showBlockPanel("compile");
            } else if (text === codeMain.getPanelLang(289)) { // 校验签名
                // 如果还没有编译过合约
                if (!codeMain.fs.existsSync(avmPath)) {
                    showBlockPanel("compile");
                    return;
                }
                showBlockPanel("signature");
            } else if (text === codeMain.getPanelLang(290)) { // 部署合约
                // 如果还没有编译过合约
                if (!codeMain.fs.existsSync(avmPath)) {
                    showBlockPanel("compile");
                    return;
                }
                if (!isSignatureSuccessed) {
                    showBlockPanel("signature");
                    return;
                }
                showBlockPanel("deploy");
            }
            return;
        }
        let 
            buildDir = codeMain.path.join(blockchainWorkspaceDir, "build");
        if (text === codeMain.getPanelLang(288)) { // 编译合约
            showBlockPanel("compile");
        } else if (text === codeMain.getPanelLang(289)) { // 校验签名
            // 如果还没有编译过合约
            if (!codeMain.fs.existsSync(buildDir)) {
                showBlockPanel("compile");
                return;
            }
            showBlockPanel("signature");
        } else if (text === codeMain.getPanelLang(290)) { // 部署合约
            // 如果还没有编译过合约
            if (!codeMain.fs.existsSync(buildDir)) {
                showBlockPanel("compile");
                return;
            }
            if (!isSignatureSuccessed) {
                showBlockPanel("signature");
                return;
            }
            showBlockPanel("deploy");
        }
    }, false);

    // 编译合约 - 初始化
    // NEO 合约初始化
    if (isNEOProject) {
        setTimeout(() => {
            Worker = getBlockWorker();
        }, 10);
        showBlockPanel("compile");
        okBtn.setAttribute("data-can-click", "false");
        return;
    }
    // ETH || HPB 合约初始化
    if (isETHProject || isHPBProject) {
        let 
            isBlockInit = codeMain.fs.existsSync(blockchainWorkspaceDir);
        if (isBlockInit) {
            // 执行的时候加载
            setTimeout(() => {
                Worker = getBlockWorker();
                okBtn.setAttribute("data-can-click", "true");
            }, 10);
            showBlockPanel("compile");
            okBtn.setAttribute("data-can-click", "false");
        } else {
            setTimeout(() => {
                // 执行的时候加载
                Worker = getBlockWorker();
                // 创建项目
                Worker.init(workspaceName, blockchainWorkspaceDir, (err) => {
                    mainContentEle.innerHTML = "";
                    if (err) {
                        alert(err.message || err);
                        throw err;
                    }
                    showBlockPanel("compile");
                });
            }, 0);
        }
    }
}

/**
 * 获取区块链Worker调用
 */
function getBlockWorker() {
    if (!Worker) {
        if (isETHProject) {
            Worker = codeMain.require("../../../layarepublic/blockchain/ETHBlock/index");
        } else if (isNEOProject) {
            Worker = codeMain.require("../../../layarepublic/blockchain/NEOBlock/worker");
        } else if (isHPBProject) {
            Worker = codeMain.require("../../../layarepublic/blockchain/HPBBlock/index");
        }
    }
    return Worker;
}

let 
    ownerAddress,
    ownerPrivateKey,
    isMineNet;
let 
    contractsDir,
    buildDir;
/**
 * 区块链主按钮点击事件
 * - 根据index判断进行到了第几步，并执行响应操作
 */
function blockchainOKClick(event, cb) {
    let index = okBtn.getAttribute("data-index");
    let isBtnCanClick = okBtn.getAttribute("data-can-click") === 'true';
    if (!isBtnCanClick) { // 不可点击状态
        return;
    }
    // 编译合约
    contractsDir = path.join(blockchainWorkspaceDir, "contracts");
    buildDir = path.join(blockchainWorkspaceDir, "build");
    if (index === "1") { // 编译合约 click
        okBtn.setAttribute("data-can-click", "false");
        let contractsInfo = mainContentEle.getElementsByClassName("main-content-info")[0];
        let outputEle1 = getElement("div", "");
        outputEle1.innerText = "合约编译中 ...";
        contractsInfo.appendChild(outputEle1);
        let startTime = Date.now();

        if (isNEOProject) {
            Worker.init(() => {
                // 注册log回调
                Worker.regist_websocket_callback('log_print', (msg) => {
                    let outputEle2 = getElement("div", "");
                    outputEle2.innerText = msg.data || msg;
                    contractsInfo.appendChild(outputEle2);
                });
                // 注册编译成功回调
                Worker.regist_websocket_callback('complie_done', (msg) => {
                    let outputEle2 = getElement("div", "");
                    outputEle2.innerText = msg.data || msg;
                    contractsInfo.appendChild(outputEle2);
                    outputEle2 = getElement("div", "");
                    outputEle2.innerText = "开始下载编译结果avm...";
                    contractsInfo.appendChild(outputEle2);
                    if(msg.data.code == 0){
                        // 下载编译结果avm
                        let downAvmPath = codeMain.path.join(blockchainWorkspaceDir, `${workspaceName}.avm`);
                        Worker.download_avmFile(msg.data.avm_url, downAvmPath,function(){
                            let outputEle3 = getElement("div", "");
                            outputEle3.innerText = "下载成功，编译流程完成";
                            contractsInfo.appendChild(outputEle3);
                            okBtn.setAttribute("data-index", "2");
                            okBtn.setAttribute("data-can-click", "true");
                            okBtn.innerText = codeMain.getPanelLang(291); // 下一步
                            selectCSBtn.style = "";
                        })
                    }
                });
                // 编译合约
                Worker.complier_contract(NEOCSFilePath);
            });
            return;
        } else if (isETHProject || isHPBProject) {
            // ETH || HPB 编译
            //编译选项
            var options = {
                contracts_directory: contractsDir, // "contracts/"
                contracts_build_directory: buildDir, // build/
                all: true,
                quiet: false,
                strict: false,
                optimizer: true
            }
            Worker.compile(options, (err) => {
                if (err) {
                    let outputEle2 = getElement("div", "");
                    outputEle2.innerText = "合约编译出错: " + (err.message || err);
                    contractsInfo.appendChild(outputEle2);
                    alert(err.message || err);
                    throw err;
                }
                
                let outputEle2 = getElement("div", "");
                outputEle2.innerText = "合约编译完成";
                let outputEle3 = getElement("div", "");
                let useTime = Date.now() - startTime;
                outputEle3.innerText = `用时${useTime}ms`;
                contractsInfo.appendChild(outputEle2);
                contractsInfo.appendChild(outputEle3);

                okBtn.setAttribute("data-index", "2");
                okBtn.setAttribute("data-can-click", "true");
                okBtn.innerText = codeMain.getPanelLang(291); // 下一步
            });
            return;
        }
    }
    if (index === "2") { // 下一步 click
        showBlockPanel("signature");
        return;
    }
    // 校验签名
    if (index === "3") { // 校验签名 click
        let ownerAddressEle =  mainContentEle.getElementsByClassName("owner-address")[0];
        let ownerPrivateKeyEle = mainContentEle.getElementsByClassName("owner-private-key")[0];
        let minenetEle = mainContentEle.getElementsByClassName("is-testrpc")[0];
        let saveBlockInfoEle = mainContentEle.getElementsByClassName("is-save")[0];
        ownerAddress = ownerAddressEle.value;
        ownerPrivateKey = ownerPrivateKeyEle.value;
        // 是否使用主网
        isMineNet = !(minenetEle.checked);
        // 是否保存到文件中
        isSaveBlockInfo = saveBlockInfoEle.checked;
        let errorEle = mainContentEle.getElementsByClassName("signature-error")[0];
        let errorContentEle =  mainContentEle.getElementsByClassName("signature-error-content")[0];
        if (isNEOProject) {
            if (!ownerAddress || !ownerPrivateKey) {
                errorContentEle.innerHTML = "地址、WIF均不可为空";
                errorEle.style.display = 'block';
                return;
            }
            // 校验签名
            var addr;
            try {
                addr = NEOWorker.Wif2Addr(ownerPrivateKey);
            } catch(err) {
                errorContentEle.innerHTML = `请确认地址或WIF填写正确<br />${err.msg || err}`;
                errorEle.style.display = 'block';
                throw err;
            }
            if (addr.toLowerCase() !== ownerAddress.toLowerCase()) {
                errorContentEle.innerHTML = `请确认地址或私钥填写正确`;
                errorEle.style.display = 'block';
                return;
            }
        } else if (isETHProject || isHPBProject) {
            if (!ownerAddress || !ownerPrivateKey) {
                errorContentEle.innerHTML = "地址、私钥均不可为空";
                errorEle.style.display = 'block';
                return;
            }
            // 验证签名
            var 
                publicKey,
                addr,
                pubkey;
            try {
                publicKey = EthUtil.privateToPublic(new Buffer(ownerPrivateKey, 'hex'));
                addr ="0x"+ EthUtil.publicToAddress(publicKey).toString('hex');
                addr = addr.toLowerCase();
                pubkey = ownerAddress.toLowerCase();
            } catch (err) {
                errorContentEle.innerHTML = `请确认地址或私钥填写正确<br />${err.msg || err}`;
                errorEle.style.display = 'block';
                throw err;
            }
            if(addr != pubkey){
                errorContentEle.innerHTML = `请确认地址或私钥填写正确`;
                errorEle.style.display = 'block';
                return;
            }
        } else { // 理论上不会走到
            return;
        }
        
        isSignatureSuccessed = true;
        if (isSaveBlockInfo) {// 保存区块链信息
            try {
                let savePath = codeMain.path.join(blockchainWorkspaceDir, "laya_blockchain.layainfo");
                let saveInfoObj = {
                    ownerAddress: ownerAddress,
                    ownerPrivateKey: ownerPrivateKey,
                    isMineNet: isMineNet
                };
                codeMain.fs.writeFileSync(savePath, JSON.stringify(saveInfoObj));
            } catch(e) {
            }
        } else { // 如果之前保存过，删掉
            try{
                let savePath = codeMain.path.join(blockchainWorkspaceDir, "laya_blockchain.layainfo");
                codeMain.fs.unlinkSync(savePath);
            } catch (e) {
            }
        }
        ownerAddressEle.setAttribute("disabled", "disabled");
        ownerPrivateKeyEle.setAttribute("disabled", "disabled");
        minenetEle.setAttribute("disabled", "disabled");
        saveBlockInfoEle.setAttribute("disabled", "disabled");
        okBtn.setAttribute("data-index", "4");
        okBtn.setAttribute("data-can-click", "true");
        okBtn.innerText = codeMain.getPanelLang(291); // 下一步
        return;
    }
    if (index === "4") { // 下一步 click
        showBlockPanel("deploy");
        return;
    }
    // 部署合约
    if (index === "5") { // 部署合约 click
        let errorContentEle = mainContentEle.getElementsByClassName("signature-error-content")[0];
        let errorCircleEle = mainContentEle.getElementsByClassName("circle")[0];
        let addressEle = mainContentEle.getElementsByClassName("address")[0];
        let errorEle = mainContentEle.getElementsByClassName("signature-error")[0];
        if (isNEOProject) {
            Worker.pubSc((err, re) => {
                if (err) {
                    errorContentEle.innerText = `${isMineNet ? "" : "(测试环境)"}部署合约失败\n${err}`;
                    errorEle.style.display = "block";
                    return;
                }

                if (!Array.isArray(re) || !re[0].txid) {
                    errorContentEle.innerText = `${isMineNet ? "" : "(测试环境)"}部署合约失败`;
                    errorEle.style.display = "block";
                    return;
                }
                let txid = re[0].txid;
                codeMain.electron.clipboard.writeText(txid);
                addressEle.getElementsByTagName("input")[0].value = txid;
                addressEle.style.display = "block";
                errorContentEle.innerText = `${isMineNet ? "" : "(测试环境)"}合约已经部署完成，合约地址已经在您的剪切板`;
                errorCircleEle.style.backgroundColor = "#3df400";
                errorEle.style.display = "block";

                neoTrialRunBtn.style = "";

                // 打开区块链项目
                closeBtn.style.display = "none";
                okBtn.setAttribute("data-index", "6");
                okBtn.setAttribute("data-can-click", "true");
                okBtn.innerText = codeMain.getPanelLang(297); // 完成
            });
            return;
        } else if (isETHProject || isHPBProject) {
            let gaspriceEle = mainContentEle.getElementsByClassName("gasprice")[0];
            let gasprice = Number(gaspriceEle.value);
            if (!gasprice || gasprice <= 0) {
                alert("请输入合法的gas值");
                return;
            }
            okBtn.setAttribute("data-can-click", "false");
            let contractsValueEle = mainContentEle.getElementsByClassName("contracts-option")[0];
            let contractValue = contractsValueEle.value;
            var options =  {
                mainnet: isMineNet, // 是否主网
                gasprice: gasprice,   // gwei
                contracts_build_directory: buildDir,  // 合约build 目录
                contract_name: contractValue               // 合约名称
            }
            console.log("部署合约: ", ownerAddress, ownerPrivateKey, options);
            setTimeout(() => {
                Worker.deploy(ownerAddress, ownerPrivateKey, options, (err, info) => {
                    if (err) {
                        errorContentEle.innerText = `部署合约失败\n${err}`;
                        errorEle.style.display = "block";
                        return;
                    }
                    if (isETHProject) {
                        let url = '';
                        if (!isMineNet) { // 测试
                            url = `https://rinkeby.etherscan.io/tx/${info}`;
                        } else { // 正式
                            url = `https://etherscan.io/tx/${info}`;
                        }
                        codeMain.electron.clipboard.writeText(url);
                        addressEle.getElementsByTagName("input")[0].value = url;
                        addressEle.style.display = "block";
                        errorContentEle.innerText = `合约已经部署完成，合约地址已经在您的剪切板`;
                        errorCircleEle.style.backgroundColor = "#3df400";
                        errorEle.style.display = "block";

                        let openSourceEle = document.getElementById("openSource");
                        if (openSourceEle.checked) { // 开源代码
                            // json, contracts_dir, mainnet, optimized, callback
                            let jsonFilePath = codeMain.path.join(buildDir, `${contractValue}.json`);
                            let contracts_dir = codeMain.path.join(blockchainWorkspaceDir, "contracts");
                            Worker.verifyContract(jsonFilePath, contracts_dir, isMineNet, true, (err, info) => {
                                if (err) {
                                    errorContentEle.innerText = errorContentEle.innerText + `\n开源代码失败\n${err}`;
                                } else {
                                    errorContentEle.innerText = errorContentEle.innerText + `\n开源代码成功，请复制返回值后继续操作`;
                                }
                                // 展示开源返回代码
                                let openSourceInputWrapperEle = document.getElementById("openSourceInputWrapper");
                                let openSourceInputEle = openSourceInputWrapperEle.getElementsByClassName("deploy-open-source")[0];
                                openSourceInputWrapperEle.style.display = "flex";
                                openSourceInputEle.value = JSON.stringify(info);
                                
                                closeBtn.style.display = "none";
                                okBtn.setAttribute("data-index", "6");
                                okBtn.setAttribute("data-can-click", "true");
                                okBtn.innerText = codeMain.getPanelLang(297); // 完成
                            });
                            okBtn.innerText = codeMain.getPanelLang(304); // 完成
                            return;
                        }
                    } else if (isHPBProject) { // 没有地址
                        addressEle.getElementsByTagName("input")[0].value = info;
                        addressEle.style.display = "block";
                        errorContentEle.innerText = `合约已经部署完成`;
                        errorCircleEle.style.backgroundColor = "#3df400";
                        errorEle.style.display = "block";
                    }

                    // 打开区块链项目
                    closeBtn.style.display = "none";
                    okBtn.setAttribute("data-index", "6");
                    okBtn.setAttribute("data-can-click", "true");
                    okBtn.innerText = codeMain.getPanelLang(297); // 完成
                });
            }, 0);
            return;
        }
    }
    // 打开区块链项目
    if (index === "6") { // 打开区块链项目 | 完成(重新编译情况下)
        cb instanceof Function && cb();
        return;
    }
}

/**
 * 显示区块链部署面板内容
 * - 根据传过来的参数确定显示面板的内容
 */
function showBlockPanel(panelName) {
    selectCSBtn.style = "";
    neoTrialRunBtn.style = "";
    if (panelName === "compile") { // 编译合约
        okBtn.setAttribute("data-index", "1");
        okBtn.setAttribute("data-can-click", "false");
        okBtn.innerText = codeMain.getPanelLang(288); // 编译合约

        let oldAsideItemEle = asideEle.getElementsByClassName("selected")[0];
        oldAsideItemEle.className = 'aside-item';
        asideEle.getElementsByClassName("aside-item")[0].className = 'aside-item selected';

        mainContentEle.innerHTML = `
        <div class="contracts-content">
            <div class="main-content-name">${workspaceName}</div>
            <div class="main-content-info"></div>
        </div>
        `;
        okBtn.setAttribute("data-can-click", "true");
        if (isNEOProject) {
            selectCSBtn.style.display = "flex";
        }
        if (isNEOProject && !NEOCSFilePath) {
            okBtn.setAttribute("data-can-click", "false");
        }
        return;
    }
    if (panelName === "signature") { // 公钥/私钥 | 
        okBtn.setAttribute("data-index", "3");
        okBtn.setAttribute("data-can-click", "false");
        okBtn.innerText = codeMain.getPanelLang(289); // 校验签名

        let oldAsideItemEle = asideEle.getElementsByClassName("selected")[0];
        oldAsideItemEle.className = 'aside-item';
        asideEle.getElementsByClassName("aside-item")[1].className = 'aside-item selected';

        mainContentEle.innerHTML = `
        <div class="signature-content">
            <div class="signature-error">
                <div class="circle"></div>
                <div class="signature-error-content"></div>
            </div>
            <div style="margin-bottom: 30px;"><label>合约所有者地址</label><input type="text" class="owner-address"/></div>
            <div><label>${isNEOProject ? "WIF" : "私钥"}</label><input type="text" class="owner-private-key"/></div>
            <div class="testrpc-check"><input type="checkbox" ${isHPBProject ? "checked='checked' disabled='disabled'" : ""} class="is-testrpc" id="usetestrpc"/><label for="usetestrpc">使用测试网络(testrpc)</label></div>
            <div class="save-check"><input type="checkbox" class="is-save" id="saveblockinfo"/><label for="saveblockinfo">保存地址及私钥（保存在项目文件中）</label></div>
        </div>
        `;

        let ownerAddressEle =  mainContentEle.getElementsByClassName("owner-address")[0];
        let ownerPrivateKeyEle = mainContentEle.getElementsByClassName("owner-private-key")[0];
        let minenetEle = mainContentEle.getElementsByClassName("is-testrpc")[0];
        let saveBlockInfoEle = mainContentEle.getElementsByClassName("is-save")[0];
        let signatureContentEle = mainContentEle.getElementsByClassName("signature-content")[0];
        let errorEle = mainContentEle.getElementsByClassName("signature-error")[0];

        signatureContentEle.addEventListener("focusin", function() {
            errorEle.style.display = "none";
        }, false);
        // 读取保存在项目文件中的信息
        try {
            let savePath = codeMain.path.join(blockchainWorkspaceDir, "laya_blockchain.layainfo");
            let infoStr = codeMain.fs.readFileSync(savePath);
            let infoObj = JSON.parse(infoStr);
            ownerAddressEle.value = infoObj.ownerAddress;
            ownerPrivateKeyEle.value = infoObj.ownerPrivateKey;
            minenetEle.checked = !infoObj.isMineNet;
            saveBlockInfoEle.checked = true;
        } catch(e) {
        }
        okBtn.setAttribute("data-can-click", "true");
        return;
    }
    if (panelName === "deploy") { // 部署
        okBtn.setAttribute("data-index", "5");
        okBtn.setAttribute("data-can-click", "false");
        okBtn.innerText = codeMain.getPanelLang(290); // 部署合约

        let oldAsideItemEle = asideEle.getElementsByClassName("selected")[0];
        oldAsideItemEle.className = 'aside-item';
        asideEle.getElementsByClassName("aside-item")[2].className = 'aside-item selected';

        if (isNEOProject) {
            mainContentEle.innerHTML = `
            <div class="deployment-content neo-content">
                <div class="signature-error">
                    <div class="circle"></div>
                    <div class="signature-error-content"></div>
                </div>
                <div class="deployment-item">
                    <label style="width: 100px;">合约文件选择</label>
                    <input class="contract-file" readonly="readonly" value="${avmPath}"/>
                    <div class="select-avm-btn">浏览</div>
                </div>
                <div class="deployment-item">
                    <label style="width: 100px;">合约名称</label>
                    <input class="contract-name" type="text" style="width: 100px;" value="测试合约"/>
                    <label style="width: 70px; text-align: center;">版本号</label>
                    <input class="contract-version" type="text" style="width: 50px;" value="1.0"/>
                    <label style="width: 50px; text-align: center;">作者</label>
                    <input class="contract-author" type="text" style="width: 50px;" value="nel"/>
                    <label style="width: 50px; text-align: center;">Email</label>
                    <input class="contract-email" type="text" style="width: 50px;" value="0"/>
                </div>
                <div class="deployment-item">
                    <input type="checkbox" id="storageArea" style="width: auto; margin-right: 10px; outline: none;"/>
                    <label for="storageArea" style="width: 150px;">是否需要存储区</label>
                    <input type="checkbox" id="dynamicExec" style="width: auto; margin-right: 10px; outline: none;"/>
                    <label for="dynamicExec" style="width: 150px;">是否支持动态调用</label>
                    <input type="checkbox" id="receipt" style="width: auto; margin-right: 10px; outline: none;"/>
                    <label for="receipt" style="width: 150px;">是否支持合约收款</label>
                </div>
                <div class="deployment-item">
                    <label style="width: 50px;">描述</label>
                    <input class="contract-des" type="text" style="width: 100px;" value="0"/>
                    <label style="width: 80px; text-align: center;">参数类型</label>
                    <input class="contract-params-type" type="text" style="width: 100px;" value="0710"/>
                    <label style="width: 80px; text-align: center;">返回类型</label>
                    <input class="contract-return-type" type="text" style="width: 100px;" value="05"/>
                </div>
                <div style="margin-bottom: 110px; position: absolute; bottom: 0;">部署花费 <span class="consume-inner" style="color: #267a4a;">--</span></div>
                <div class="deployment-item address" style="display: none;">
                    <label>txid</label>
                    <input class="deploy-address" readonly/>
                </div>
            </div>
            `;
            window.mainContentEle = mainContentEle;
            let 
                avmFileInputEle = mainContentEle.getElementsByClassName("contract-file")[0],
                selectAvmBtn = mainContentEle.getElementsByClassName("select-avm-btn")[0],
                contractNameEle = mainContentEle.getElementsByClassName("contract-name")[0],
                contractVersionEle = mainContentEle.getElementsByClassName("contract-version")[0],
                contractauthorEle = mainContentEle.getElementsByClassName("contract-author")[0],
                contractEmailEle = mainContentEle.getElementsByClassName("contract-email")[0],
                storageAreaEle = document.getElementById("storageArea"),
                dynamicExec = document.getElementById("dynamicExec"),
                receipt = document.getElementById("receipt"),
                contractDesEle = mainContentEle.getElementsByClassName("contract-des")[0],
                contractParamsEle = mainContentEle.getElementsByClassName("contract-params-type")[0],
                contractReturnEle = mainContentEle.getElementsByClassName("contract-return-type")[0];

            // 合约类型选择
            selectAvmBtn.addEventListener("click", function() {
                var dialogLaya = electron.remote.dialog;
                let options = {
                    properties: ["openFile"],
                    filters: [{
                        name: 'All Files',
                        extensions: ['avm']
                    }]
                };
                dialogLaya.showOpenDialog(options, function(pathLaya) {
                    if (pathLaya) {
                        avmFileInputEle.value = pathLaya[0];
                    }
                });
            }, false);
            okBtn.setAttribute("data-can-click", "false");
            neoTrialRunBtn.style.display = "flex";
            return;
        }
        // 从文件夹中获取合约类型
        let constractsFilesList = codeMain.fs.readdirSync(buildDir);
        constractsFilesList = constractsFilesList.filter(function(item, index, list) {
            return item.endsWith(".json");
        });
        constractsFilesList = constractsFilesList.map(function(item, index, list) {
            return item.replace(".json", "");
        });

        let gasPrice = 10;
        mainContentEle.innerHTML = `
        <div class="deployment-content">
            <div class="signature-error">
                <div class="circle"></div>
                <div class="signature-error-content"></div>
            </div>
            <div class="deployment-item">
                <label>合约选择</label>
                <select class="contracts-option">
                    ${
                        constractsFilesList.map(item => `
                        <option value="${item}">${item}</option>
                        `)
                    }
                </select>
            </div>
            <div class="deployment-item">
                <label>合约拥有者</label>
                <p>${ownerAddress}</p>
            </div>
            <div class="deployment-item">
                <label>部署Gas</label>
                <p class="gas-value">--</p>
            </div>
            <div class="deployment-item">
                <label>Gas单价</label>
                <input class="gasprice" value="${gasPrice}"/><p class="deployment-unit">Gwei</p>
                <p class="deployment-des">此处填写越大，手续费越高，入块速度越快</p>
            </div>
            <div class="deployment-item">
                <label>本次预计消耗</label>
                <p class="deployment-eth">--</p>
            </div>
            <div class="deployment-item" style="${isHPBProject ? "display: none;" : ""}">
                <input type="checkbox" id="openSource" style="width: auto; margin-right: 10px; outline: none;"/>
                <label for="openSource" style="width: 300px;">是否在etherscan.io上发布(开源)代码</label>
            </div>
            <div class="deployment-item address" style="display: none;">
                <label>合约地址</label>
                <input class="deploy-address" readonly/>
            </div>
            <div class="deployment-item" id="openSourceInputWrapper" style="display: none; margin-top: 15px;">
                <label style="width: 800px;">开源代码返回值(请复制后继续操作):</label>
                <input class="deploy-open-source" style="margin-left: -600px; width: 800px; text-align: center; border: solid 1px #fff; background-color: transparent; margin-top: 25px;" readonly/>
            </div>
        </div>
        `;
        let gasValueEle = mainContentEle.getElementsByClassName("gas-value")[0];
        let deploymentContent = mainContentEle.getElementsByClassName("deployment-content")[0];
        let ETHValueEle = mainContentEle.getElementsByClassName("deployment-eth")[0];

        let Gas;
        setTimeout(function() {
            let ETHValue;
            try {
                Gas = Worker.getGas(isMineNet, ownerAddress) * 10;
                // 消耗的ETH值
                // let ETH_GWEI = 9; // 18
                // let ETHValue = (gasPrice * Gas / Math.pow(10, ETH_GWEI)).toFixed(ETH_GWEI);
                ETHValue = Worker.getETH(isMineNet, gasPrice * Gas * Math.pow(10, 9));
            } catch(err) {
                let errorEle = mainContentEle.getElementsByClassName("signature-error")[0];
                let errorContentEle = mainContentEle.getElementsByClassName("signature-error-content")[0];
                errorContentEle.innerText = `初始化部署合约失败\n${err}`;
                errorEle.style.display = "block";
                throw err;
            }
            gasValueEle.innerText = Gas;
            ETHValueEle.innerText = ETHValue + (isETHProject ? "ETH" : "HPB");
            okBtn.setAttribute("data-can-click", "true");
        }, false);

        // gasPrice 单价变化，消耗的ETH值也会变化
        let 
            _gasPrice,
            _ETHValue;
        deploymentContent.addEventListener("keyup", function(e) {
            _gasPrice = Number(e.target.value);
            if (!_gasPrice || _gasPrice <= 0) { // 输入非数字或者小于零的数字
                ETHValueEle.innerText = '--ETH';
                return;
            }
            // _ETHValue = _gasPrice * Gas / Math.pow(10, ETH_GWEI);
            _ETHValue = Worker.getETH(isMineNet, _gasPrice * Gas * Math.pow(10, 9));
            ETHValueEle.innerText = _ETHValue + 'ETH';
        }, false);
        return;
    }
}

/**
 * 云项目
 */
let 
    layaCloudEle,
    errorInfoEle,
    reLoginTimer,
    layaCloudCreateInfo;
function layaCloudCreate(infoObj, cb) {
    workspaceDir = infoObj.proFilePath;
    workspaceName = infoObj.proName;
    workspaceLang = infoObj.proEngin;
    var layaLayerPop = infoObj.layaLayerPop;
    //创建背景容器
    var layaCloudPopEle = getElement("div", "layacloud");
    layaCloudPopEle.style.zIndex = 199999999;
    codeMain.addPopLayer(layaCloudPopEle);

    layaCloudPopEle.innerHTML = `
    <div class="layerBackground">
        <div class="common-tool-title">
            <div class="common-tool-icon-wrapper">
                <img class="common-tool-icon" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
            </div>
            <div class="common-tool-title-content"></div>
            <div class="common-tool-close"></div>
        </div>
        <div class="layarMainWrapper">
            <div class="aside">
                <div class="aside-item selected">${codeMain.getPanelLang(294)}</div>
                <div class="aside-divide-line"></div>
                <div class="aside-item">${codeMain.getPanelLang(295)}</div>
                <div class="aside-divide-line"></div>
                <div class="aside-item">${codeMain.getPanelLang(296)}</div>
                <div class="aside-divide-line"></div>
                <div class="aside-item">${codeMain.getPanelLang(297)}</div>
            </div>
            <div class="main">
                <div class="error-wrapper">
                    <div class="circle"></div>
                    <div class="error-content"></div>
                </div>
                <div class="main-content">
                    <div class="main-info"></div>
                </div>
                <div class="button-ok"></div>
            </div>
        </div>
    </div>
    `;
    let titleEle = layaCloudPopEle.getElementsByClassName("common-tool-title")[0];
    __Layadrag(layaCloudPopEle, titleEle);
    // 动态改变右侧核心内容
    layaCloudEle = document.getElementsByClassName("layacloud")[0];
    asideEle = layaCloudEle.getElementsByClassName("aside")[0];
    mainEle = layaCloudEle.getElementsByClassName("main")[0];
    mainContentEle = mainEle.getElementsByClassName("main-content")[0];
    mainInfo = mainContentEle.getElementsByClassName("main-info")[0];
    okBtn = mainEle.getElementsByClassName("button-ok")[0];
    closeBtn = layaCloudEle.getElementsByClassName("common-tool-close")[0];
    
    closeBtn.addEventListener("click", function() {
        codeMain.removePopLayer(layaCloudPopEle);
    }, false);
    okBtn.setAttribute("data-can-click", "false");
    okBtn.innerText = codeMain.getPanelLang(297);
    okBtn.addEventListener("click", (event) => {
        let isBtnCanClick = okBtn.getAttribute("data-can-click") === 'true';
        if (!isBtnCanClick) { // 不可点击状态
            return;
        }
        if (okBtn.innerText === codeMain.getPanelLang(308)) {
            codeMain.removePopLayer(layaCloudPopEle);
            layaLayerPop.parentElement.style.display = "block";
            layaLayerPop.style.display = "block";
            return;
        }
        codeMain.removePopLayer(layaCloudPopEle);
        cb instanceof Function && cb();
    }, false);

    // 显示项目创建过程及错误信息
    let 
        infoEle,
        className;
    function showInfo(text, isError, index) {
        if (text === "laya.divide.line") {
            infoEle = getElement("p", "divide-line");
            mainInfo.appendChild(infoEle);
            return;
        }
        if (text === "laya.success.project.info") {
            infoEle = getElement("p");
            let appId = layaCloudCreateInfo.match(/^AppId: (.*)$/mi)[1];
            let appKey = layaCloudCreateInfo.match(/^AppKey: (.*)$/mi)[1];
            let name = layaCloudCreateInfo.match(/^项目名称: (.*)$/mi)[1];
            let lang = layaCloudCreateInfo.match(/^编程语言: (.*)$/mi)[1];
            infoEle.innerHTML = `
            <table border="1" class="cloudtable">
                <caption style="font-size: 17px;">项目信息</caption>
                <tr>
                    <td>appId</td>
                    <td>${appId}</td>
                </tr>
                <tr>
                    <td>appKey</td>
                    <td>${appKey}</td>
                </tr>
                <tr>
                    <td>项目名称</td>
                    <td>${name}</td>
                </tr>
                <tr>
                    <td>编程语言</td>
                    <td>${lang}</td>
                </tr>
            </table>
            `;
            mainInfo.innerHTML = '';
            mainInfo.appendChild(infoEle);
            infoEle = getElement("p", "layacloud-success-info");
            infoEle.innerText = `项目已成功创建，信息保存在 ${workspaceDir + codeMain.path.sep + "layacloud.json"} 中，请勿修改或移除此文件。`;
            mainInfo.appendChild(infoEle);
            mainInfo.style.backgroundColor = "transparent";
            return;
        }
        className = isError ? "layacloud-error-info" : "layacloud-info";
        infoEle = getElement("p", className);
        infoEle.innerText = text;
        mainInfo.appendChild(infoEle);
        if (index) {
            asideEle.getElementsByClassName("aside-item")[index - 1].className = 'aside-item';
            asideEle.getElementsByClassName("aside-item")[index].className = 'aside-item selected';
        }
    }

    // 处理项目创建过程中的错误
    function handleError(data, info) {
        const 
            ERR_DEV_CENTER_LOGIN_FAIL = -9001,
            ERR_USER_NOT_LOGIN = -9002,
            ERR_SCRIPT_NEED_RELOAD = -9003;
        if (!data || typeof data !== "object" || data.ret !== 0) {
            let index = info.index;
            let text;
            switch(index) {
                case 1:
                    if (data.ret === ERR_SCRIPT_NEED_RELOAD) { // layacloud sdk更新了，reload
                        codeMain.deleteLayaCloudRequireCache();
                        info.layaCloudWorker = codeMain.require("../../../layarepublic/layaCloud/index");
                        layaCloudFunc(info);
                        return true;
                    } else if (data.ret === ERR_DEV_CENTER_LOGIN_FAIL || data.ret === ERR_USER_NOT_LOGIN) {
                        text = "创建layacloud出错了，请5s后重新登录:\n" + data.msg;
                        reLoginTimer && clearTimeout(reLoginTimer);
                        reLoginTimer = setTimeout(function() {
                            codeMain.layaPageIns.logoutAndReLogin(); // 退出并重新登录
                        }, 5000);
                    } else {
                        text = data.msg;
                    }
                    break;
                // case 2:
                //     text = "下载资源出错了:\n" + data.msg;
                //     break;
                // case 3:
                //     text = "解压缩出错了:\n" + data.msg;
                //     break;
                default:
                    text = data.msg;
            }
            showInfo(text, true);

            okBtn.setAttribute("data-can-click", "true");
            okBtn.innerText = codeMain.getPanelLang(308); // 上一步
            return true;
        }
        return false;
    }

    // 调用layacloud创建接口
    let layaCloudWorker = codeMain.require("../../../layarepublic/layaCloud/index");
    let loginInfo = codeMain.layaPageIns.getLoginInfo();
    let langStr = workspaceLang === 0 ? "as" : (workspaceLang === 1 ? "ts" : "js");
    let 
        text,
        dataObj;
    dataObj = {
        layaCloudWorker: layaCloudWorker,
        token: loginInfo && loginInfo.token,
        name: workspaceName,
        path: workspaceDir,
        lang: langStr,
        showInfo: showInfo,
        handleError: handleError,
        index: 0,
        okBtn: okBtn
    };
    layaCloudFunc(dataObj);
}

function layaCloudFunc(info) {
    let layaCloudWorker = info.layaCloudWorker;
    let token = info.token;
    let name = info.name;
    let pathDir = info.path;
    let lang = info.lang;
    let showInfo = info.showInfo;
    let handleError = info.handleError;
    let index = info.index;
    let okBtn = info.okBtn;
    if (index === 0) {
        text = "正在云端创建LayaCloud项目...";
        showInfo(text, false);
        info.index++;
        layaCloudFunc(info);
    } else if (index === 1) {
        layaCloudWorker.createGame(token, name, lang, pathDir, function(data){
            let isError = handleError(data, info);
            if (isError) {
                return;
            }
            layaCloudCreateInfo = data.msg;
            console.log("创建项目成功后的返回值，需要保存: ", layaCloudCreateInfo);
            text = data.msg;
            showInfo(text, false, 1);
            showInfo("laya.divide.line");
            text = "正在从云端下载项目模板...";
            showInfo(text, false);
            info.index++;
            layaCloudFunc(info);
        });
    } else if (index === 2) {
        let cloudDownDir = codeMain.path.join(codeMain.remote.app.getPath('userData'), "cloud", "download") + codeMain.path.sep;
        codeMain.mkdirsSync(cloudDownDir);
        layaCloudWorker.downloadResource(cloudDownDir, function(data){
            let isError = handleError(data, info);
            if (isError) {
                return;
            }
            text = data.msg;
            showInfo(text, false, 2);
            showInfo("laya.divide.line");
            text = "开始解压缩项目模板资源包...";
            showInfo(text, false, 2);
            info.index++;
            layaCloudFunc(info);
        });
    } else if (index === 3) {
        layaCloudWorker.unzip(pathDir, function(data){
            let isError = handleError(data, info);
            if (isError) {
                return;
            }
            text = data.msg;
            showInfo(text, false, 3);
            showInfo("laya.divide.line");
            okBtn.setAttribute("data-can-click", "true");
            // 显示项目信息
            showInfo("laya.success.project.info");
            // cb instanceof Function && cb(data, index);
        })
    }
}

//var _layaNewPro =new NewProLaya();
function getElement(type, className)
{
    var div = document.createElement(type);
    if (className) div.setAttribute("class", className);
    return div
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////欢迎界面、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
//InitPage()
function InitPage()
{
    // _winddragBar.style.left = "0px";
    // conList.style.display = "none"
    var welcomePage = getElement("div", "layawelcomePage");
    // document.body.appendChild(welcomePage);
    codeMain.addPopLayer(welcomePage);
    var welcomePageBackground = getElement("div", "welcomePageBackground0");
    welcomePage.appendChild(welcomePageBackground);
    var welcomePageBackground = getElement("div", "welcomePageBackground");
    welcomePage.appendChild(welcomePageBackground);
    var createPanel = getElement("li", "content");
    createPanel.style.left = "162px";
    createPanel.style.backgroundImage = 'url("res/img/btn_new.png")';
    welcomePageBackground.appendChild(createPanel);
    var spanTitle = getElement("img", "");
    spanTitle.src = "res/img/newBtnOut.jpg";
    spanTitle.style.width = "322px";
    spanTitle.style.position = "absolute", spanTitle.style.top = "154px", spanTitle.style.left = "-77px";
    var spanText = getElement("div", "");
    spanText.innerHTML = codeMain.getPanelLang(122);
    spanText.style.textAlign = "center";
    spanText.style.width = "322px";
    spanText.style.position = "absolute";
    spanText.style.top = "170px";
    spanText.style.left = "-77px";
    spanText.style.fontSize = "17px";
    createPanel.onmouseover = function(e)
    {
        spanTitle.src = "res/img/newBtnOver.jpg";
        spanText.style.color = "#44A7FF";
    }
    createPanel.onmousedown = function(e)
    {
        spanTitle.src = "res/img/newBtnDown.jpg";
        spanText.style.color = "#FFFFFF";
    }
    createPanel.onmouseout = function(e)
    {
        spanTitle.src = "res/img/newBtnOut.jpg";
        spanText.style.color = "#FFFFFF";
    }
    createPanel.appendChild(spanTitle);
    createPanel.appendChild(spanText);
    createPanel.onclick = function()
        {
            // welcomePage.parentNode.removeChild(welcomePage);
            // codeMain.removePopLayer(welcomePage);
            NewProLaya();
        }
        ////--------------------------------------------
    var createPanel = getElement("li", "content");
    welcomePageBackground.appendChild(createPanel);
    createPanel.style.backgroundImage = 'url("res/img/btn_open.png")';
    createPanel.style.right = "222px";
    var spanTitle0 = getElement("img", "");
    spanTitle0.src = "res/img/openBtnDown.jpg";
    spanTitle0.style.width = "322px";
    spanTitle0.style.position = "absolute", spanTitle0.style.top = "154px", spanTitle0.style.left = "-77px";
    var spanText0 = getElement("div", "");
    spanText0.innerHTML = codeMain.getPanelLang(144);
    spanText0.style.textAlign = "center";
    spanText0.style.width = "322px";
    spanText0.style.position = "absolute";
    spanText0.style.top = "170px";
    spanText0.style.left = "-77px";
    spanText0.style.fontSize = "17px";
    createPanel.onmouseover = function(e)
    {
        spanTitle0.src = "res/img/openBtnOver.jpg";
        spanText0.style.color = "#44A7FF";
    }
    createPanel.onmousedown = function(e)
    {
        spanTitle0.src = "res/img/openBtnOut.jpg";
        spanText0.style.color = "#FFFFFF";
    }
    createPanel.onmouseout = function(e)
    {

        spanTitle0.src = "res/img/openBtnDown.jpg";
        spanText0.style.color = "#FFFFFF";
    }
    createPanel.appendChild(spanTitle0);
    createPanel.appendChild(spanText0);
    var panel = getElement("div", "bottompanel");
    panel.innerHTML = `${codeMain.getPanelLang(133)}&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;`
	panel.style="line-height:50px";
    welcomePage.appendChild(panel)
    createPanel.onclick = function()
    {
        codeMain.openProLaya()
    }

}

function jscompressTool()
{
    var popLayerWindowq = new popLayerWindow();
    var jspathObj = localStorage.getItem("layajsPath");
    if (jspathObj)
    {
        jspathObj = JSON.parse(jspathObj);
        popLayerWindowq.fileInput.value = jspathObj.inuputpath;
        popLayerWindowq.fileOutput.value = jspathObj.outputPath;
    }
    popLayerWindowq.titleBackground.getElementsByClassName("common-tool-title-content")[0].innerHTML = `${codeMain.getPanelLang(12)}`; //"js压缩";
    popLayerWindowq.fileInput.placeholder = `${codeMain.getPanelLang(13)}`//"拖入或者选择js文件...";
    popLayerWindowq.fileOutput.placeholder = `${codeMain.getPanelLang(14)}`//"选择min.js的输出路径...";
    var myCanvas = getElement("canvas");
    var myctx = myCanvas.getContext("2d");
    popLayerWindowq.btnOK.onclick = function()
    {
        var isfile = popLayerWindowq.fileInput.value;
        if (!fs.existsSync(popLayerWindowq.fileInput.value))
        {
            alert(`${codeMain.getPanelLang(15)}`)
            return
        }
        else
        {
            var r = fs.lstatSync(isfile);
            if (r.isDirectory() || isfile.indexOf(".js") == -1)
            {
                alert(`${codeMain.getPanelLang(16)}`);
                return
            }
            else
            {

            }
        }
        var obj = {
            "inuputpath": popLayerWindowq.fileInput.value,
            "outputPath": popLayerWindowq.fileOutput.value
        }
        localStorage.setItem("layajsPath", JSON.stringify(obj));
        if (popLayerWindowq.fileInput.value && popLayerWindowq.fileOutput.value)
        {
            popLayerWindowq.viewPanel.appendChild(myCanvas);
            myCanvas.style.display = "block";
            popLayerWindowq.popPanelBackground.style.display = "none";
            var timeIDdelay = 0;
            var count = 0
            timeIDdelay = setInterval(function()
            {
                ++count;
                count %= 100;
                DrowProcess(`${codeMain.getPanelLang(246)}`, count, myCanvas, myctx, false);
            }, 10);
            var fork = require('child_process').fork;
            //fork方法返回的是子进程
            var forkjsPath = codeMain.path.join(__dirname, "js/fork.js");
            var child = fork(forkjsPath);
            // console.log('fork return pid: ' + child.pid);
            child.on('message', function(msg)
            {
                console.error(msg);
                alert(codeMain.lang(codeMain.getPanelLang(170), msg.line, msg.message));
            });
            child.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
                clearInterval(timeIDdelay);
                let tipStr = "";
                if (code === 0) {
                    tipStr = codeMain.getPanelLang(21);
                } else {
                    tipStr = codeMain.getPanelLang(18) + ":" + code;
                }
                popLayerWindowq.successTip.innerHTML = tipStr;
                popLayaerAnimation(popLayerWindowq.successTip);
                myCanvas.style.display = "none";
                popLayerWindowq.popPanelBackground.style.display = "block";
            });

            child.send(
            {
                inputPath: popLayerWindowq.fileInput.value,
                outputPath: popLayerWindowq.fileOutput.value + path.sep + path.basename(popLayerWindowq.fileInput.value).replace(".js", ".min.js")
            });

        }

    }
    popLayerWindowq.viewPanel.ondrop = function(e)
    {
            e.preventDefault();
            var file = e.dataTransfer.files[0];
            var r = fs.lstatSync(file.path);
            if (!r.isDirectory() && file.path.indexOf(".js") != -1)
            {
                popLayerWindowq.fileInput.value = file.path;
                popLayerWindowq.fileOutput.value = path.dirname(file.path)
            }
    }
        ////////////////////选择js文件的路径
    popLayerWindowq.btnInput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openFile", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['js']
            }],
            defaultPath: popLayerWindowq.fileInput.value
        }, function(pathLaya) {
            if (pathLaya) {
                popLayerWindowq.fileInput.value = pathLaya[0];
                popLayerWindowq.fileOutput.value = path.dirname(pathLaya[0])
            }
        })
    }
    popLayerWindowq.btnOutput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['js']
            }],
            defaultPath: popLayerWindowq.fileOutput.value
        }, function(pathLaya) {
            if (pathLaya) {
                popLayerWindowq.fileOutput.value = pathLaya[0];
            }
        })
    }
}

/**
 * 图片转换为腾讯tpg格式
 *  转换源图片格式: jpg|png|gif|bmp
 *  调用位置: 工具->转换为tpg
 */
function tpgConvert() {
    const CAN_HANDLE_SUFFIX_LIST = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const CAN_HANDLE_SUFFIX_LIST_NO_DOT = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
    var popLayerWindowq = new popLayerWindow();
    var tpgpathObj = localStorage.getItem("layatpgPath");
    if (tpgpathObj) {
        tpgpathObj = JSON.parse(tpgpathObj);
        popLayerWindowq.fileInput.value = tpgpathObj.inuputpath;
        popLayerWindowq.fileOutput.value = tpgpathObj.outputPath;
    }
    popLayerWindowq.titleBackground.getElementsByClassName("common-tool-title-content")[0].innerHTML = `${codeMain.getPanelLang(272)}`; // TPG转换
    popLayerWindowq.fileInput.placeholder = `${codeMain.getPanelLang(273)}`; // 拖入或者选择图片文件
    popLayerWindowq.fileOutput.placeholder = `${codeMain.getPanelLang(274)}`; // 选择TPG的输出路径
    var myCanvas = getElement("canvas");
    var myctx = myCanvas.getContext("2d");
    popLayerWindowq.btnOK.onclick = function() { // 确定按钮
        var 
            filePath = popLayerWindowq.fileInput.value,
            fileOutPath = popLayerWindowq.fileOutput.value,
            filePathObj = path.parse(filePath), // 解析，确定输出tpg格式的名称
            fileName = (filePathObj && filePathObj.name) || 'laya';
        if (!fs.existsSync(filePath)) {
            alert(`${codeMain.getPanelLang(15)}`); // 文件不存在
            return;
        } else {
            var r = fs.lstatSync(filePath);
            var extname = path.extname(filePath);
            if (r.isDirectory() || CAN_HANDLE_SUFFIX_LIST.indexOf(extname) == -1) {
                alert(`${codeMain.getPanelLang(275)}`); // 请选择图片文件(jpg|png|gif|bmp)
                return;
            }
        }
        var obj = {
            "inuputpath": filePath,
            "outputPath": fileOutPath
        }
        localStorage.setItem("layatpgPath", JSON.stringify(obj));
        popLayerWindowq.viewPanel.appendChild(myCanvas);
        myCanvas.style.display = "block";
        popLayerWindowq.popPanelBackground.style.display = "none";
        var timeIDdelay = 0;
        var count = 0;
        timeIDdelay = setInterval(function() { // 转换中动画效果
            ++count;
            count %= 100;
            DrowProcess(`${codeMain.getPanelLang(246)}`, count, myCanvas, myctx, false);
        }, 50);
        var dir = path.dirname(__dirname);
        var file = path.join(dir, "libs", "LayaAirTPGTools", "ImgToTPG");
        var cmd = "\"" + file + "\"" +
                " -i " + " \"" + filePath + "\"" +
                " -o " + " \"" + fileOutPath + path.sep + fileName + ".tpg\""; // 输出，需要添加文件名
        console.log(cmd);
        childProcess.exec(cmd, {
            encoding: "binary",
            maxBuffer: 1024 * 1024 * 20,
            timeout: 30 * 1000,
        }, function(err, stdOut, stdErr) {
            console.log('tpg re:', err, stdOut, stdErr);
            clearInterval(timeIDdelay);
            let tipStr = '';
            if (stdOut && stdOut.indexOf('STATUS_ENCODE_OK') !== -1) {
                tipStr = codeMain.getPanelLang(21); // 执行完成
            } else if (stdOut && stdOut.indexOf('STATUS_NETWORK_ERROR') !== -1) {
                tipStr = codeMain.getPanelLang(280); // 网络错误
            } else {
                tipStr = codeMain.getPanelLang(188); // 发生错误
            }
            popLayerWindowq.successTip.innerHTML = tipStr;
            popLayaerAnimation(popLayerWindowq.successTip);
            myCanvas.style.display = "none";
            popLayerWindowq.popPanelBackground.style.display = "block";
        })
    }
    // 整个面板的拖拽事件
    popLayerWindowq.viewPanel.ondrop = function(e) {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        var filePath = file.path;
        var r = fs.lstatSync(file.path);
        var extname = path.extname(filePath);
        if (!r.isDirectory() && CAN_HANDLE_SUFFIX_LIST.indexOf(extname) != -1) {
            popLayerWindowq.fileInput.value = file.path;
            popLayerWindowq.fileOutput.value = path.dirname(file.path)
        }
    }
    // 选择源文件按钮
    popLayerWindowq.btnInput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openFile", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: CAN_HANDLE_SUFFIX_LIST_NO_DOT
            }],
            defaultPath: popLayerWindowq.fileInput.value
        }, function(pathLaya) {
            if (pathLaya) {
                popLayerWindowq.fileInput.value = pathLaya[0];
                popLayerWindowq.fileOutput.value = path.dirname(pathLaya[0]);
            }
        })
    }
    // 输出文件夹选择按钮
    popLayerWindowq.btnOutput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: CAN_HANDLE_SUFFIX_LIST_NO_DOT
            }],
            defaultPath: popLayerWindowq.fileOutput.value
        }, function(pathLaya) {
            if (pathLaya) {
                popLayerWindowq.fileOutput.value = pathLaya[0];
            }
        })
    }
}

function DrowProcess(msg, process, myCanvas, myctx, showPorcess)
{
    if (showPorcess === undefined) {
        showPorcess = true;
    }
    myCanvas.style.postion = "absulute";
    myCanvas.style.top = "80px";
    var W = myCanvas.width;
    var H = myCanvas.height;
    var text, text_w;
    myctx.clearRect(0, 0, W, H);
    myctx.beginPath();
    myctx.strokeStyle = "#494949";
    myctx.lineWidth = 10;
    myctx.arc(W / 2, H / 2, 60, 0, Math.PI * 2, false);
    myctx.stroke();
    var r = process / 100 * 2 * Math.PI;
    myctx.beginPath();
    myctx.strokeStyle = "lightgreen";
    myctx.lineWidth = 10;
    myctx.arc(W / 2, H / 2, 60, 0 - 90 * Math.PI / 180, r - Math.PI / 2, false);
    myctx.stroke();
    myctx.fillStyle = "#999999";
    myctx.font = "16px abc";
    if (showPorcess) {
        text = msg + process + "%";
    } else {
        text = msg;
    }
    text_w = myctx.measureText(text).width;
    myctx.fillText(text, W / 2 - text_w / 2, H / 2 + 8);
}

/**
 * 工具弹窗
 *  - jscompressTool js压缩
 *  - tpgConvert tpg格式转换
 *  - bonetools 龙骨动画转换 | Spine动画转换
 *  - psdtools Psd2UI
 */
function popLayerWindow()
{
    this.popPanel = getElement("div", "compressJSFile");
    this.popPanel.style.zIndex = 9999999999
    // document.body.appendChild(this.popPanel);
    codeMain.addPopLayer(this.popPanel);
    this.viewPanel = getElement("div", "viewPanel");
    this.popPanel.appendChild(this.viewPanel);
    this.popPanelBackground = getElement("div", "compressJSFilePanelBackground");
    this.successTip = getElement("div", "layaAnimationLayaer");
    this.popPanelBackground.appendChild(this.successTip);
    this.successTip.innerHTML = codeMain.getPanelLang(21);
    this.successTip.style.display = "none";
    this.viewPanel.appendChild(this.popPanelBackground);
    this.fileInput = getElement("input", "inputSmallinput");
    this.fileInput.styleBlur = "inputSmallinput";
    setFocuInput(this.fileInput);
    this.popPanelBackground.appendChild(this.fileInput);
    this.fileInput.placeholder = `${codeMain.panel[13][langindex]}`//"拖入或者选择js文件...........";
    this.tipup = getElement("span", "compressJSFilePaneTipup");
    // this.tipup.innerHTML = "高效,极速,方便";
    this.popPanelBackground.appendChild(this.tipup);
    this.fileOutput = getElement("input", "inputSmallinput");
    this.fileOutput.styleBlur = "inputSmallinput";
    setFocuInput(this.fileOutput);
    this.popPanelBackground.appendChild(this.fileOutput);
    this.fileOutput.style.top = "150px";
    this.titleBackground = getElement("div", "common-tool-title");
    this.titleBackground.innerHTML = `
        <div class="common-tool-icon-wrapper">
            <img class="common-tool-icon" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
        </div>
        <div class="common-tool-title-content"></div>
        <div class="common-tool-close"></div>
    `;
    __Layadrag(this.popPanel, this.titleBackground);
    this.viewPanel.appendChild(this.titleBackground);
    this.btnInput = getElement("Button", "compressBtn");
    this.popPanelBackground.appendChild(this.btnInput);
    this.btnInput.innerText = `${codeMain.panel[22][langindex]}`//"浏览";
    this.btnOutput = getElement("Button", "compressBtn");
    this.popPanelBackground.appendChild(this.btnOutput);
    this.btnOutput.style.top = "150px"
    this.btnOutput.innerText = `${codeMain.panel[22][langindex]}`//"浏览";
    this.tipdouwn = getElement("span", "compressJSFilePaneTipdown");
    // this.tipdouwn.innerHTML = "自动记录,智能推荐";
    this.popPanelBackground.appendChild(this.tipdouwn);
    this.titleBackground.getElementsByClassName("common-tool-close")[0].onclick = () => {
        codeMain.removePopLayer(this.popPanel);
    }
    this.btnOK = getElement("Button", "layaBtnCustum");
    this.popPanelBackground.appendChild(this.btnOK);
    this.btnOK.style.top = "234px";
    this.btnOK.style.left = "206px"
    this.btnOK.innerText = `${codeMain.panel[23][langindex]}`//"确定";
}
function bonetools(title, type, isBatch = false)
{
    var bonetoolsWindow = new popLayerWindow();
    bonetoolsWindow.titleBackground.getElementsByClassName("common-tool-title-content")[0].innerHTML = `${title}${codeMain.panel[24][langindex]}` //"格式转换";
    bonetoolsWindow.fileInput.placeholder = `${codeMain.panel[25][langindex]}`//"拖入或者选择资源目录...";
    bonetoolsWindow.fileOutput.placeholder = `${codeMain.panel[26][langindex]}`// "选择资源输出路径...";
    var localStrageKey = isBatch ? "layabonePathBatch" : "layabonePath";
    var boneObj = localStorage.getItem(localStrageKey);
    if (boneObj)
    {
        boneObj = JSON.parse(boneObj);
        bonetoolsWindow.fileInput.value = boneObj.inputPath;
        bonetoolsWindow.fileOutput.value = boneObj.outputPath;
    }
    var myCanvas = getElement("canvas");
    var myctx = myCanvas.getContext("2d");
    bonetoolsWindow.viewPanel.ondrop = function(e)
    {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        var r = fs.lstatSync(file.path);
        if (r.isDirectory())
        {
            bonetoolsWindow.fileInput.value = file.path;
            bonetoolsWindow.fileOutput.value = file.path;
        }
    }
    bonetoolsWindow.btnOK.onclick = function(e)
    {
        if (bonetoolsWindow.fileInput.value && bonetoolsWindow.fileOutput.value)
        {
            if (!fs.existsSync(bonetoolsWindow.fileInput.value))
            {
                alert(`${codeMain.panel[27][langindex]}`)
                return
            }
            var boneObj = {
                "inputPath": bonetoolsWindow.fileInput.value,
                "outputPath": bonetoolsWindow.fileOutput.value
            };
            localStorage.setItem(localStrageKey, JSON.stringify(boneObj));
            bonetoolsWindow.viewPanel.appendChild(myCanvas);
            myCanvas.style.display = "block";
            bonetoolsWindow.popPanelBackground.style.display = "none";
            var timeIDdelay = 0;
            var count = 0
            timeIDdelay = setInterval(function()
            {
                count += 1;
                count = Math.min(count, 99);
                if (count >= 99)
                {
                    clearInterval(timeIDdelay);
                    popLayaerAnimation(bonetoolsWindow.successTip);
                    myCanvas.style.display = "none";
                    bonetoolsWindow.popPanelBackground.style.display = "block";
                }
                DrowProcess(`${codeMain.panel[17][langindex]}`, count, myCanvas, myctx);
            }, 10);
            var dragonBone = new dragonBones.DragonBoneTools();
            dragonBone.loadFile(bonetoolsWindow.fileInput.value, bonetoolsWindow.fileOutput.value, function(sucess, data, picInput, picOutput)
            {
                console.log("转换进度");
                DrowProcess(`${codeMain.panel[17][langindex]}`, 100, myCanvas, myctx);
                clearInterval(timeIDdelay);
                bonetoolsWindow.successTip.innerHTML = sucess;
                popLayaerAnimation(bonetoolsWindow.successTip);
                myCanvas.style.display = "none";
                bonetoolsWindow.popPanelBackground.style.display = "block";
            }, function(err)
            {
                alert(`${codeMain.panel[28][langindex]}` + err);
            }, type, isBatch)
        }

    };
    bonetoolsWindow.btnInput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['js']
            }],
            defaultPath: bonetoolsWindow.fileInput.value
        }, function(pathLaya) {
            if (pathLaya) {
                bonetoolsWindow.fileInput.value = pathLaya[0];
                bonetoolsWindow.fileOutput.value = pathLaya[0]
            }
        })
    }
    bonetoolsWindow.btnOutput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['js']
            }],
            defaultPath: bonetoolsWindow.fileOutput.value
        }, function(pathLaya) {
            if (pathLaya) {
                bonetoolsWindow.fileOutput.value = pathLaya[0]
            }
        })
    }
}

function psdtools(title, type)
{
    var psdtoolsWindow = new popLayerWindow();
    psdtoolsWindow.titleBackground.getElementsByClassName("common-tool-title-content")[0].innerHTML = title; //"格式转换";
    psdtoolsWindow.fileInput.placeholder = `${codeMain.panel[25][langindex]}`//"拖入或者选择资源目录...";
    psdtoolsWindow.fileOutput.placeholder = `${codeMain.panel[26][langindex]}`// "选择资源输出路径...";
    var boneObj = localStorage.getItem("layaPsdPath");
    if (boneObj)
    {
        boneObj = JSON.parse(boneObj);
        psdtoolsWindow.fileInput.value = boneObj.inputPath;
        psdtoolsWindow.fileOutput.value = boneObj.outputPath;
    }
    var myCanvas = getElement("canvas");
    var myctx = myCanvas.getContext("2d");
    psdtoolsWindow.viewPanel.ondrop = function(e)
    {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        var r = fs.lstatSync(file.path);
        if (r.isDirectory())
        {
            psdtoolsWindow.fileInput.value = file.path;
            psdtoolsWindow.fileOutput.value = file.path;
        }
    }
    psdtoolsWindow.btnOK.onclick = function(e)
    {
        if (psdtoolsWindow.fileInput.value && psdtoolsWindow.fileOutput.value)
        {
            if (!fs.existsSync(psdtoolsWindow.fileInput.value))
            {
                alert(`${codeMain.panel[27][langindex]}`)
                return
            }
            var boneObj = {
                "inputPath": psdtoolsWindow.fileInput.value,
                "outputPath": psdtoolsWindow.fileOutput.value
            };
            localStorage.setItem("layaPsdPath", JSON.stringify(boneObj));
           console.log("convert psd");
            psdtoolsWindow.viewPanel.appendChild(myCanvas);
            myCanvas.style.display = "block";
            psdtoolsWindow.popPanelBackground.style.display = "none";
            var timeIDdelay = 0;
            var count = 0
            timeIDdelay = setInterval(function()
            {
                count += 1;
                if (count >= ((Math.random() * 10 + 90) >> 0))
                {
                    clearInterval(timeIDdelay);
                    popLayaerAnimation(psdtoolsWindow.successTip);

                }
                DrowProcess(`${codeMain.getPanelLang(17)}`, count, myCanvas, myctx);
            }, 300);
            var dir = path.dirname(__dirname);
            var file = path.join(dir, "libs", "LayaAirPSDTools", "LayaAirPSDTool.max.js");
            var cmd = "node \"" + file + "\"" +
                " filePath=\"" + boneObj.inputPath+"\"" +
                " outPath=\"" + boneObj.outputPath+"\"" ;

            console.log(cmd);
            childProcess.exec(cmd,
                {
                    encoding: "binary",
                    maxBuffer: 1024 * 1024 * 20
                }, function(err, stdOut, stdErr)
                {
                    console.log(err + stdErr)
                    clearInterval(timeIDdelay);
                    myCanvas.style.display = "none";
                    popLayaerAnimation(psdtoolsWindow.successTip);
                    DrowProcess(`${codeMain.getPanelLang(17)}`, 100, myCanvas, myctx);
                    psdtoolsWindow.popPanelBackground.style.display = "block";
                })
        }

    };
    psdtoolsWindow.btnInput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['psd']
            }],
            defaultPath: psdtoolsWindow.fileInput.value
        }, function(pathLaya) {
            if (pathLaya) {
                psdtoolsWindow.fileInput.value = pathLaya[0];
                psdtoolsWindow.fileOutput.value = pathLaya[0]
            }
        })
    }
    psdtoolsWindow.btnOutput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['psd']
            }],
            defaultPath: psdtoolsWindow.fileOutput.value
        }, function(pathLaya) {
            if (pathLaya) {
                psdtoolsWindow.fileOutput.value = pathLaya[0]
            }
        })
    }
}

function picToolsLaya()
{
    var popPanel = getElement("div", "compressJSFile");
    popPanel.style.zIndex = 9999999;
    var picToolsObj = localStorage.getItem("picToolsObj");
    if (picToolsObj)
    {
        picToolsObj = JSON.parse(picToolsObj);
    }
    // document.body.appendChild(popPanel);
    codeMain.addPopLayer(popPanel)
    var viewPanel = getElement("div", "viewPanel");
    popPanel.appendChild(viewPanel);
    var popPanelBackground = getElement("div", "compressJSFilePanelBackground");
    var sucessTip = getElement("div", "layaAnimationLayaer");
    sucessTip.innerHTML = `${codeMain.panel[21][langindex]}`+"&nbsp;&nbsp;"
    sucessTip.style.top = "24px"
    popPanelBackground.appendChild(sucessTip);
    popPanelBackground.ondrop = function(e)
    {
        e.preventDefault();
        var file = e.dataTransfer.files[0];
        var r = fs.lstatSync(file.path);
        if (r.isDirectory())
        {
            inputFile.value = file.path;
            outputFile.value = file.path
        }
    }
    popPanelBackground.style.top = "20px";
    var titleBackground = getElement("div", "titleBackground");
    titleBackground = getElement("div", "common-tool-title");
    titleBackground.innerHTML = `
        <div class="common-tool-icon-wrapper">
            <img class="common-tool-icon" title="${codeMain.panel[29][langindex]}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
        </div>
        <div class="common-tool-title-content">${codeMain.panel[29][langindex]}</div>
        <div class="common-tool-close"></div>
    `;
    __Layadrag(popPanel, titleBackground)
    viewPanel.appendChild(titleBackground);
    viewPanel.appendChild(popPanelBackground);
    // 检查图集是否符合规范--需要有子目录
    function checkDir(inputDir) {
        let isExist = codeMain.fs.existsSync(inputDir);
        if (!isExist) {
            alert(codeMain.getPanelLang(39));
            return false;
        }
        let subFileList = codeMain.fs.readdirSync(inputDir);
        let 
            subDir,
            r;
        for (let i = 0, len = subFileList.length; i < len; i++) {
            subDir = inputDir + "/" + subFileList[i];
            r = codeMain.fs.lstatSync(subDir);
            if (r.isDirectory()) {
                return true;
            }
        }
        alert(codeMain.getPanelLang(487));
    }
    var inputFile = getElement("input", "inputSmallinput");
    inputFile.style.left = "30px";
    inputFile.style.width = "380px";
    inputFile.style.top = "50px";
    inputFile.placeholder = `${codeMain.panel[30][langindex]}`//"资源文件夹的父级目录...";
    inputFile.styleBlur = "inputSmallinput";
    setFocuInput(inputFile);
    picToolsObj && (inputFile.value = picToolsObj.inputPath);
    popPanelBackground.appendChild(inputFile);
    var btninput = getElement("Button", "compressBtn");
    btninput.style.top = "50px";
    btninput.innerHTML = `${codeMain.panel[22][langindex]}`//"浏览";
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
            let isCon = checkDir(pathLaya[0]);
            if (!isCon) {
                return;
            }
            if (pathLaya) {
                inputFile.value = pathLaya[0];
                outputFile.value = pathLaya[0];
            }
        })
    }
    popPanelBackground.appendChild(btninput);
    var outputFile = getElement("input", "inputSmallinput");
    outputFile.styleBlur = "inputSmallinput";
    setFocuInput(outputFile);
    outputFile.style.left = "30px";
    outputFile.style.width = "380px";
    outputFile.style.top = "100px";
    outputFile.placeholder = `${codeMain.panel[31][langindex]}`//"输出目录...";
    picToolsObj && (outputFile.value = picToolsObj.inputPath);
    popPanelBackground.appendChild(outputFile);
    var btnOutput = getElement("Button", "compressBtn");
    btnOutput.style.top = "100px";
    btnOutput.innerHTML = `${codeMain.panel[22][langindex]}`//"浏览";
    btnOutput.onclick = function() {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog({
            properties: ["openDirectory", 'createDirectory'],
            filters: [{
                name: 'All Files',
                extensions: ['js']
            }],
            defaultPath: outputFile.value
        }, function(pathLaya) {
            if (pathLaya) {
                outputFile.value = pathLaya[0];
            }
        })
    }
    popPanelBackground.appendChild(btnOutput);
    var ti = getElement("div", "titleTemp");
    ti.innerHTML = `${codeMain.getPanelLang(32)}`//"图集最大宽度:";
    ti.style.top = "154px";
    popPanelBackground.appendChild(ti);
    
    var bigH = getElement("input", "inputSmallDown");
    bigH.styleBlur = "inputSmallDown";
    setFocuInput(bigH);
    popPanelBackground.appendChild(bigH);
    bigH.value = 2048
    bigH.style.top = "150px";
    bigH.oninput = function(e)
    {
        bigH.value = bigH.value.replace(/\D/g, '');
    }
    bigH.addEventListener("blur", function()
    {
        bigH.value = bigH.value.replace(/\D/g, '') || 2048;
    })

    var titleScale = getElement("div", "titleScale");
    titleScale.innerHTML = `${codeMain.getPanelLang(240)}`//"缩放系数：";
    titleScale.style.top = "154px";
    titleScale.style.left = "370px";
    popPanelBackground.appendChild(titleScale);
    
    var inputScale = getElement("input", "inputSmallDown");
    inputScale.styleBlur = "inputSmallDown";
    setFocuInput(inputScale);
    popPanelBackground.appendChild(inputScale);
    inputScale.value = 1
    inputScale.style.top = "150px";
    inputScale.style.left = "440px";
    inputScale.addEventListener("blur", function() {
        inputScale.value = inputScale.value || 1;
    });
    titleBackground.getElementsByClassName("common-tool-close")[0].onclick = function() {
        codeMain.removePopLayer(popPanel);
    }
    var ti = getElement("div", "titleH");
    ti.innerHTML = `${codeMain.getPanelLang(34)}`//"单图最大宽度:";
    popPanelBackground.appendChild(ti);

    var smallPicW = getElement("input", "inputSmallDown");
    smallPicW.style.left = "296px";
    smallPicW.style.top = "149px";
    smallPicW.value = 512;
    smallPicW.styleBlur = "inputSmallDown";
    setFocuInput(smallPicW);
    smallPicW.oninput = function(e)
    {
        smallPicW.value = smallPicW.value.replace(/\D/g, '');
    }
    smallPicW.addEventListener("blur", function()
    {
        smallPicW.value = smallPicW.value.replace(/\D/g, '') || 512;
    })
    popPanelBackground.appendChild(smallPicW);
    var div = getElement("div", "contentCheck");

    var checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox" //getElement("checkbox","");
    checkbox2.setAttribute("class", "checkBoxLaya");
    checkbox2.style.left = "32px";
    checkbox2.style.bottom = "53px";
    var span = getElement("span", "titleLayaChek")
    popPanelBackground.appendChild(div);
    span.style.right = "410px";
    span.style.bottom = "53px";
    div.appendChild(span);
    span.innerHTML = `${codeMain.getPanelLang(36)}`//"2的整次幂";
    div.appendChild(checkbox2);
    div.style.left = "20px";

    //////////
    var div = getElement("div", "divLayaContentDiv");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox" //getElement("checkbox","");
    checkbox.setAttribute("class", "checkBoxLaya0");
    checkbox.checked = true;
    checkbox.style.right = "369px";
    var span = getElement("span", "titleLayaChek0");
    popPanelBackground.appendChild(div);
    div.appendChild(span);
    span.innerHTML = `${codeMain.getPanelLang(37)}`//"空白裁剪";
    span.style.right = "316px";
    div.appendChild(checkbox);

    var span = getElement("span", "titleLayaChek")
    popPanelBackground.appendChild(span);
    span.style.right = "218px";
    span.style.bottom = "53px";
    span.innerText = codeMain.getPanelLang(171)

    var btnOK = getElement("Button", "layaBtnCustum");
    popPanelBackground.appendChild(btnOK);
    btnOK.style.top = "231px";
    btnOK.style.left = "206px";
    btnOK.style.height = "29px";
    btnOK.innerText = `${codeMain.getPanelLang(38)}`//"确定";
    var myCanvas = getElement("canvas");
    var myctx = myCanvas.getContext("2d");

    var dataExtension = document.createElement("select");
    var atlasOption = document.createElement("option");
    atlasOption.innerText = "atlas";
    dataExtension.appendChild(atlasOption);
    var jsonOption = document.createElement("option");
    jsonOption.innerText = "json";
    dataExtension.appendChild(jsonOption);
    dataExtension.style.left = "303px";
    dataExtension.style.bottom= "53px";
    dataExtension.style.position = "absolute";
    window.tool_atlas_data_extension = dataExtension;

    popPanelBackground.appendChild(dataExtension);


    btnOK.onclick = function()
    {
        if (!(inputFile.value && outputFile.value))
        {
            return
        }
        if (!fs.existsSync(inputFile.value))
        {
            alert(`${codeMain.getPanelLang(39)}`);
            return;
        }
        let isCon = checkDir(inputFile.value);
        if (!isCon) {
            return;
        }
        var picToolsObj = {
            "inputPath": inputFile.value,
            "outputPath": outputFile.value
        };
        localStorage.setItem("picToolsObj", JSON.stringify(picToolsObj));
        viewPanel.appendChild(myCanvas);
        myCanvas.style.display = "block";
        popPanelBackground.style.display = "none";
        var timeIDdelay = 0;
        var count = 0
        timeIDdelay = setInterval(function()
        {
            count += 1;
            if (count >= ((Math.random() * 10 + 90) >> 0))
            {
                clearInterval(timeIDdelay);

            }
            DrowProcess(`${codeMain.getPanelLang(17)}`, count, myCanvas, myctx);
        }, 300);
        var dir = path.dirname(__dirname);
        var file = path.join(dir, "libs", "TP", "atlas-generator");
        var cmd = "\"" + file + "\"" +
            " -S " + bigH.value +
            " -s " + smallPicW.value +
            " \"" + inputFile.value + "\"" +
            " -o " + "\"" + outputFile.value + "\"" +
            " --dataFormat " + tool_atlas_data_extension.selectedOptions[0].innerText + 
            " --scale " + inputScale.value;
        if (true)
        {
            cmd += " --force";
        }
        if (checkbox2.checked)
        {
            cmd += " -2";
        }
        if (checkbox.checked)
        {
            cmd += " -c";
        }
        console.log(cmd);
        childProcess.exec(cmd,
        {
            encoding: "binary",
            maxBuffer: 1024 * 1024 * 20
        }, function(err, stdOut, stdErr)
        {
            console.log(err + stdErr)
            clearInterval(timeIDdelay);
            myCanvas.style.display = "none";
            popLayaerAnimation(sucessTip);
            DrowProcess(`${codeMain.getPanelLang(17)}`, 100, myCanvas, myctx);
            popPanelBackground.style.display = "block";
        })
    }
}
/////////////////版本管理、、、、、、、、、、、、、、、、、、、、
function LibsPanel()
{
    var version = localStorage.getItem(codeMain.workspacePath);
    if (fs.existsSync(codeMain.workspacePath + path.sep + "tsconfig.json"))
    {
        var type = "ts"
    }
    else if (fs.existsSync(codeMain.workspacePath + path.sep + "jsconfig.json"))
    {
        var type = "js"
    }
    else
    {
        var type = "as"
    }
    var radioLaya = ""
    var currentSelectedLi = "";
    var layaLayerPop = getElement("div", "layaLayerPop");
    layaLayerPop.style.zIndex = 99999999
    // document.body.appendChild(layaLayerPop);
    codeMain.addPopLayer(layaLayerPop);
    //创建背景
    var layerBackground = getElement("div", "layerBackground2");
    layaLayerPop.appendChild(layerBackground);
    var titleBackground;
    titleBackground = getElement("div", "common-tool-title");
    titleBackground.innerHTML = `
        <div class="common-tool-icon-wrapper">
            <img class="common-tool-icon" title="${codeMain.getPanelLang(40)}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
        </div>
        <div class="common-tool-title-content">${codeMain.getPanelLang(40)}</div>
        <div class="common-tool-close"></div>
    `;
    __Layadrag(layaLayerPop, layerBackground);
    layerBackground.appendChild(titleBackground);
    ////////////rightPanel//////////////////
    var layerBackgroundrightPanel = getElement("div", "layerBackgroundrightPanel2");
    layerBackground.appendChild(layerBackgroundrightPanel);

    var divcon = getElement("div", "libPanel");
    layerBackgroundrightPanel.appendChild(divcon);
    var libsPath = getElement("a", "layaspan");
    libsPath.innerHTML = "&nbsp"+`${codeMain.getPanelLang(41)}`;
    divcon.appendChild(libsPath);
    var libsPathInput = getElement("input", "LayaInputSelect");
    setFocuInput(libsPathInput);
    libsPathInput.styleBlur = "LayaInputSelect";
    if (type == "as")
    {
        libsPathInput.value = codeMain.workspacePath + path.sep + "libs" + path.sep + "laya";
    }
    else
    {
        libsPathInput.value = codeMain.workspacePath + path.sep + "bin" + path.sep + "libs";
    }
    divcon.appendChild(libsPathInput);
    var skipBtn = getElement("Button", "layaSkipButton");
    skipBtn.innerText = `${codeMain.getPanelLang(22)}`//"浏览";
    skipBtn.onclick = function(e)
    {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog(
        {
            properties: ["openDirectory", 'createDirectory']
        }, function(path)
        {
            path = path[0];
            libsPathInput.value = path;
        });
    }
    divcon.appendChild(skipBtn);
    var listLibsPath = getElement("div", "LibsPath");
    layerBackgroundrightPanel.appendChild(listLibsPath);
    var libcurrentSelectedLi;
    var localLibVersion;
    var enginepath = path.dirname(__dirname) + path.sep + "laya" + path.sep + "libs";
    var localLibVersion = fs.readdirSync(enginepath);
    if (!window.configVersion)
    {
        window.configVersion = {};
        window.configVersion.versionList = [];
        for (var i = 0; i < localLibVersion.length; i++)
        {
            window.configVersion.versionList[i] = {};
            window.configVersion.versionList[i].version = localLibVersion[i];
            window.configVersion.versionList[i].url = "";
        }
    }
    // console.log("----------------------")
    var libsVersion = window.configVersion.versionList || localLibVersion; //远端版本号;
    for (var i = 0; i < libsVersion.length; i++)
    {
        var itemList = getElement("li", "libsPathList");
        var img = getElement("div", "image-01");
        itemList.appendChild(img);
        var title = getElement("a", "conAtitle");
        title.innerHTML = "&nbsp;" + libsVersion[i].version;
        itemList.libs = libsVersion[i].version;
        itemList.appendChild(title);
        listLibsPath.appendChild(itemList);
        if (localLibVersion.indexOf(libsVersion[i].version) != -1)
        {
            var btn = getElement("input", "layaradio");
            btn.type = "radio";
            btn.name = "libs";
            itemList.appendChild(btn);
            itemList.btn = btn;
            if (version == libsVersion[i].version)
            {
                btn.checked = true;
                itemList.btn = btn;
                btn.libs = libsVersion[i].version;
                libcurrentSelectedLi = itemList;
                radioLaya = btn;
            }
        }
        else
        {
            var skipBtn = getElement("button", "layasmallBtn");
            itemList.appendChild(skipBtn);
            skipBtn.libsVersion = libsVersion[i];
            skipBtn.innerText = `${codeMain.getPanelLang(42)}`//"下载";
            skipBtn.onclick = function(e)
            {
                var currentTarget = e.currentTarget;
                currentTarget.innerHTML = `${codeMain.getPanelLang(135)}`//"下载中.."
                var libsVersion = e.currentTarget.libsVersion;
                var exeZipPath = (process.env.TEMP || process.env.TMPDIR) + path.sep + path.basename(libsVersion.url);
                var requ = codeMain.layarequest(libsVersion.url, function(error, response, body)
                {
                    if (!error && response.statusCode == 200)
                    {
                        setTimeout(function(e)
                        {
                            fs.createReadStream(exeZipPath).pipe(codeMain.layaunzip.Extract(
                            {
                                path: enginepath
                            }));
                            currentTarget.innerHTML = `${codeMain.getPanelLang(43)}`//"解压完毕";
                            var nodeParent = currentTarget.parentNode;
                            nodeParent.removeChild(currentTarget);
                            var btn = getElement("input", "layaradio");
                            btn.type = "radio";
                            btn.name = "libs";
                            nodeParent.appendChild(btn);
                            nodeParent.btn = btn;
                        }, 2000)

                    }
                    else
                    {
                        currentTarget.innerHTML = `${codeMain.getPanelLang(44)}`//"重试"
                    }
                });
                requ.pipe(fs.createWriteStream(exeZipPath))
            }
        }
        itemList.style.top = (i * 50) + "px";

        itemList.onclick = function(e)
        {
            libcurrentSelectedLi && (libcurrentSelectedLi.className = libcurrentSelectedLi.className.replace(" selected", ""));
            libcurrentSelectedLi = e.currentTarget;
            libcurrentSelectedLi.className += " selected";
            if (libcurrentSelectedLi.btn)
            {
                libcurrentSelectedLi.btn.checked = true;
                radioLaya = libcurrentSelectedLi.btn;
                radioLaya.libs = libcurrentSelectedLi.libs;
            }
        }
    }
    ///
    /////-------------------关闭按钮------------
    titleBackground.getElementsByClassName("common-tool-close")[0].onclick = function() {
        codeMain.removePopLayer(layaLayerPop);
    }
        ///////////确定按钮
    var okBtn = getElement("button", "layaBtnCustum2");
    layerBackgroundrightPanel.appendChild(okBtn);
    okBtn.innerText = `${codeMain.getPanelLang(136)}`//"应用";
    // 替换
    okBtn.onclick = function(e)
    {
        if (type != "as")
        {
            var lib = enginepath + path.sep + radioLaya.libs + path.sep + type + path.sep + "libs";
            codeMain.copyDir(path.dirname(lib) + path.sep + "ts", codeMain.workspacePath + path.sep + "libs");
        }
        else
        {
            var lib = enginepath + path.sep + radioLaya.libs + path.sep + "as" + path.sep + "libs";
        }
        codeMain.copyDir(lib, libsPathInput.value);
        localStorage.setItem(codeMain.workspacePath, radioLaya.libs);
        alert(`${codeMain.getPanelLang(45)}`);
    }

}

function popLayaerAnimation(tip)
{
    tip.style.display = "block";
    setTimeout(function()
    {
        //  document.body.removeChild(layaAnimationLayaer);
        tip.style.display = "none";
    }, 3000)
}

function layaInputFocus(e)
{
    //smallPicH.setAttribute("class","inputSmallDown layaFocusinput");
    e.currentTarget.setAttribute("class", e.currentTarget.styleBlur + " layaFocusinput");
}

function layaInputBlur(e)
{
    e.currentTarget.setAttribute("class", e.currentTarget.styleBlur);
}

function setFocuInput(e)
{
    e.onfocus = layaInputFocus;
    e.onblur = layaInputBlur;
}

//-----------------------------------------------


/**
 * @param tag {string}  tag标签，或者是class 或者是innerhtml
 * @param prop {Object} 属性对象
 */
function createTag(tag, prop)
{
    const prebuildTag = ['div', 'img', 'input', 'span', 'a', 'select', 'button'];
    var div = null;
    if (prebuildTag.indexOf(tag) >= 0)
    {
        div = document.createElement(tag);
    }
    else
    {
        if (tag.indexOf('\'') >= 0)
        {
            div = document.createElement('span');
            var r = /\'([^\']*)\'/.exec(tag);
            div.innerHTML = r[1];
        }
        else
        {
            div = document.createElement('div');
            div.setAttribute('class', tag);
        }
    }
    const propHandle = {
        'cls': function(v)
        {
            this.setAttribute('class', v);
        },
        'id': function(v)
        {
            this.id = v;
        },
        'text': function(v)
        {
            if (tag == 'select')
            {
                for (let vi = 0; vi < v.length; vi++)
                {
                    div.appendChild(new Option(v[vi]));
                }
            }
            else
            {
                this.innerHTML = v.replace(/\s/g, '&nbsp;');
            }
        },
        'type': function(v)
        {
            this.type = v;
            if (v == 'input')
            {
                this.onfocuse = null;
                this.onblur = null;
            }
        }
    };
    for (var p in prop)
    {
        var h = propHandle[p];
        if (h)
        {
            h.call(div, prop[p]);
        }
        else
        {
            div.setAttribute(p, prop[p]);
        }
    }
    return div;
}

function PackageToolLaya()
{
    if (!checkapkAndsdk(true))
    {
        return
    }
    var layaPackage = getElement("div", "layaPackage");
    var obj = localStorage.getItem("layapackagePanel");
    if (obj)
    {
        obj = JSON.parse(obj);
    }
    else
    {
        obj = {}
    }
    var conArr = []; //隐藏相应的界面;
    // document.body.appendChild(layaPackage);
    codeMain.addPopLayer(layaPackage);
    var viewPanel = getElement("div", "viewPanel");
    layaPackage.appendChild(viewPanel);
    viewPanel.style.width = "500px";
    var titl = getElement("div", "titleBackground");
    __Layadrag(layaPackage, titl);
    titl.innerHTML = codeMain.getMenuListLang(104);
    viewPanel.appendChild(titl);
    viewPanel.style.height = "530px"
    var closeBtn = getElement("div", "closeBtn");
    closeBtn.innerHTML = "×";
    closeBtn.onclick = function()
    {
        // document.body.removeChild(layaPackage);
        codeMain.removePopLayer(layaPackage);
    }
    viewPanel.appendChild(closeBtn);
    var container = getElement("div", "container");
    var titltip = getElement("span", "titltip", "");
    container.appendChild(titltip);
    viewPanel.appendChild(container);
    var selectcontainer = getselectcontainer();
    var span = getElement("span", "", codeMain.getPanelLang(52));
    selectcontainer.appendChild(span);
    var select = getElement("select");
    select.enable = false;
    selectcontainer.appendChild(select);
    var op = new Option("Android");
    select.appendChild(op);
    span = getElement("span", "", codeMain.getPanelLang(60));
    span.style.color = "#c5c5c5";
    span.style.fontSize = "12px";
    var con = getElement("div");
    con.style.width = "150px";
    con.style.float = "left";
    var singleapp = document.createElement("input");
    singleapp.type = "checkbox";
    singleapp.style.position = "relative";
    singleapp.style.top = "2px";
    con.appendChild(singleapp);
    con.appendChild(span);
    con.style.position = "relative";
    con.style.float = "right";
    con.style.left = "-100px";
    con.style.top = "3px";
    con.style.cursor = "pointer";
    con.check = false;
    singleapp.onchange = function()
    {
        if (singleapp.checked)
        {
            gameselectcontainer.style.opacity = "0.5";
            gameUrlInput.disabled = true;

        }
        else
        {
            gameselectcontainer.style.opacity = "1";
            gameUrlInput.disabled = false;
        }
    }
    span.onclick = function()
    {
        singleapp.checked = !singleapp.checked;
        if (singleapp.checked)
        {
            gameselectcontainer.style.opacity = "0.5";
            gameUrlInput.disabled = true;

        }
        else
        {
            gameselectcontainer.style.opacity = "1";
            gameUrlInput.disabled = false;
        }
    }
    selectcontainer.appendChild(con);

    function add_selFile(parent, name, ext, onok)
    {
        var selbt = createTag('button',
        {
            cls: "cusBtn",
            text: codeMain.getPanelLang(22) + "..."
        });
        //selbt.style.backgroundColor='#393939';
        parent.appendChild(selbt);
        selbt.onclick = function(e)
        {
            var dialogLaya = electron.remote.dialog;
            dialogLaya.showOpenDialog(
            {
                properties: ["openFile"],
                filters: [
                {
                    name: name,
                    extensions: ext
                }]
            }, function(p)
            {
                if (!p) return;
                onok && onok(p[0]);
            });
        }
    }
    ///----------------------
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(59));
    var inputappName = getElement("input", "packagetext");
    selectcontainer.appendChild(span);
    selectcontainer.appendChild(inputappName);
    inputappName.value = obj.appName || "myLaya";
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(99) + ":");
    selectcontainer.appendChild(span);
    var inputPacgage = getElement("input", "packagetext");
    selectcontainer.appendChild(inputPacgage);
    inputPacgage.value = obj.packageName || "com.mygame.laya";
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(172));
    selectcontainer.appendChild(span);
    //inputPacgage.placeholder = "com.mygame.laya"
    ////-------------------
    var gameselectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(61));
    gameselectcontainer.appendChild(span);
    var gameUrlInput = getElement("input", "packagetext");
    gameselectcontainer.appendChild(gameUrlInput);
    //gameUrlInput.placeholder = "http://www.xxx.com/index.html";
    gameUrlInput.value = obj.gameurl || "http://www.xxx.com/index.html";
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(62));
    gameselectcontainer.appendChild(span);
    ////---------------------------------
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(63));
    selectcontainer.appendChild(span);
    outputPackage = getElement("input", "packagetext");
    outputPackage.value = obj.outPath || path.join(codeMain.workspacePath, "release", "Android");
    selectcontainer.appendChild(outputPackage);
    var outBtn = getElement("button", "cusBtn", codeMain.getPanelLang(63) + "...");
    outBtn.onclick = function()
    {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog(
        {
            properties: ["openDirectory", 'createDirectory']
        }, function(path)
        {
            path = path[0];
            outputPackage.value = path;
        });
    }
    selectcontainer.appendChild(outBtn);
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(64));
    selectcontainer.appendChild(span);
    //////
    ////-------------------
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(65));
    selectcontainer.appendChild(span);
    var resUrlInput = getElement("input", "packagetext");
    selectcontainer.appendChild(resUrlInput);
    resUrlInput.value = obj.resurl || "";
    var resBtn = getElement("button", "cusBtn", codeMain.getPanelLang(22) + "...");
    selectcontainer.appendChild(resBtn);
    span = getElement("a", "itemdesc", "&nbsp" + codeMain.getPanelLang(66));
    selectcontainer.appendChild(span);
    resBtn.onclick = function()
    {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog(
        {
            properties: ["openDirectory", 'createDirectory']
        }, function(path)
        {
            path = path[0];
            resUrlInput.value = path;
        });
    }
    selectcontainer = getselectcontainer();
    selectcontainer.style.top = "22px";
    span = getElement("span", "", codeMain.getPanelLang(173));
    //span.classList.add('itemdesc');
    span.style.color = '#757575';
    span.style.width = "480px";
    selectcontainer.appendChild(span);
    /////
    selectcontainer = getselectcontainer();
    var img = getElement("img");
    img.src = "res/ide/toolbar/up.png";
    span = getElement("a", "", codeMain.getPanelLang(174) + "&nbsp");
    span.style.color = "#c5c5c5";
    span.style.fontSize = "12px"
    span.appendChild(img);
    var flag = 0;
    span.onclick = function(e)
    {
        if (flag)
        {
            flag = 0;
            img.src = "res/ide/toolbar/up.png";
            viewPanel.style.height = "530px"
            for (var i = 0; i < conArr.length; i++)
            {
                conArr[i].style.display = "none";
            }
        }
        else
        {
            flag = 1;
            img.src = "res/ide/toolbar/down.png";
            viewPanel.style.height = "880px";
            for (var i = 0; i < conArr.length; i++)
            {
                conArr[i].style.display = "block";
            }
        }
    }
    selectcontainer.appendChild(span);
    //------------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    span = getElement("span", "", "Icon:");
    selectcontainer.appendChild(span);
    var inputGameIcon = getElement("input", "packagetext");
    inputGameIcon.value = obj.iconurl || "";
    selectcontainer.appendChild(inputGameIcon);
    add_selFile(selectcontainer, 'Image files', ['png'], (p) =>
    {
        inputGameIcon.value = p;
    });

    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(175));
    selectcontainer.appendChild(span);
    ///---------------------------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    container.appendChild(selectcontainer)
    span = getElement("span", "", codeMain.getPanelLang(176));
    var keystoreFile = getElement("input", "packagetext");
    keystoreFile.value = obj.keyfile || "";
    selectcontainer.appendChild(span);
    selectcontainer.appendChild(keystoreFile);
    add_selFile(selectcontainer, 'Keystore Files', ['keystore'], (p) =>
    {
        keystoreFile.value = p;
    });
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(177));
    selectcontainer.appendChild(span);
    ///////-------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    span = getElement("span", "", codeMain.getPanelLang(178));
    selectcontainer.appendChild(span);
    var keyPassword = getElement("input", "packagetext");
    selectcontainer.appendChild(keyPassword);
    keyPassword.value = obj.keypass || "";
    ////////-------------------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    span = getElement("span", "", "alias:");
    var alias = getElement("input", "packagetext");
    selectcontainer.appendChild(span);
    selectcontainer.appendChild(alias);
    alias.value = obj.alias || "";
    span = getElement("a", "", "&nbsp");
    selectcontainer.appendChild(span);
    ///////--------------------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    span = getElement("span", "", codeMain.getPanelLang(179));
    selectcontainer.appendChild(span);
    var aliasPassword = getElement("input", "packagetext");
    selectcontainer.appendChild(aliasPassword);
    aliasPassword.value = obj.aliaspass || "";
    span = getElement("a", "", "&nbsp");
    selectcontainer.appendChild(span);
    ///-------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    selectcontainer.appendChild(createTag(codeMain.getPanelLang(180),
    {}));
    var confjsEdit = createTag('input',
    {
        cls: 'packagetext',
        placeholder: codeMain.getPanelLang(181)
    });
    setFocuInput(confjsEdit);
    confjsEdit.styleBlur = 'packagetext';
    if (obj.confjs && obj.confjs.length > 0)
    {
        confjsEdit.value = obj.confjs;
    }
    selectcontainer.appendChild(confjsEdit);
    add_selFile(selectcontainer, 'JS files', ['js'], (p) =>
    {
        confjsEdit.value = p;
    });
    //
    selectcontainer = getselectcontainer();
    selectcontainer.style.display = "none";
    conArr.push(selectcontainer);
    selectcontainer.appendChild(createTag(codeMain.getPanelLang(182),
    {}));
    var logoEdit = createTag('input',
    {
        cls: 'packagetext',
        placeholder: codeMain.getPanelLang(183)
    });
    setFocuInput(logoEdit);
    logoEdit.styleBlur = 'packagetext';
    if (obj.logoimg && obj.logoimg.length > 0)
    {
        logoEdit.value = obj.logoimg;
    }
    selectcontainer.appendChild(logoEdit);
    add_selFile(selectcontainer, 'Image files', ['png', 'jpg'], (p) =>
    {
        logoEdit.value = p;
    });

    ///////
    selectcontainer = getselectcontainer();
    var packageBtn = getElement("button", "cusBtn", codeMain.getPanelLang(184));
    selectcontainer.appendChild(packageBtn);
    packageBtn.style.top = "10px"
    packageBtn.style.left = "200px";
    packageBtn.onclick = function()
    {
        ///打包开始按钮
        var urlok = singleapp.checked || gameUrlInput.value;
        if (inputappName.value && inputPacgage.value && urlok)
        {
            /*
            if (inputPacgage.value.indexOf(".") == -1) {
                layaAlertShow("包名必须是xx.xxx形式,请正确填写")
                return
            }*/
            if (!/^[a-zA-Z]+([\.][a-zA-Z][a-zA-Z0-9]*)+$/.test(inputPacgage.value))
            {
                alert(codeMain.getPanelLang(185));
                inputPacgage.classList.add('inputerror');
                //inputPacgage.focus();
                return;
            }

            packageBtn.blur();
            var obj = {
                appName: inputappName.value,
                "packageName": inputPacgage.value,
                "gameurl": gameUrlInput.value,
                "outPath": outputPackage.value,
                "iconurl": inputGameIcon.value,
                "keyfile": keystoreFile.value,
                "keypass": keyPassword.value,
                "alias": alias.value,
                "aliaspass": aliasPassword.value,
                "resurl": resUrlInput.value,
                "confjs": confjsEdit.value,
                "logoimg": logoEdit.value
            }
            localStorage.setItem("layapackagePanel", JSON.stringify(obj));
            var loadingView = new LoadingView();
            loadingView.showInfo("init", 0);
            var GenerateAndroidApk = codeMain.require("./../libs/RuntimePackTools/out/GenerateAndroidApk.js");

            var generateAndroidApk = new GenerateAndroidApk.GenerateAndroidApk();
            var layaGameUrl = ""
            if (!singleapp.checked)
            {
                layaGameUrl = gameUrlInput.value;
            }
            generateAndroidApk.excute(
                inputappName.value,
                outputPackage.value,
                layaGameUrl,
                false,
                true,
                resUrlInput.value,
                inputPacgage.value,
                inputGameIcon.value,
                keystoreFile.value,
                keyPassword.value,
                alias.value,
                aliasPassword.value,
                confjsEdit.value,
                logoEdit.value,
                function(msg, proce)
                {
                    if (proce >= 100)
                    {
                        titltip.innerHTML = codeMain.getPanelLang(21);
                        loadingView.dispose();
                        // document.body.removeChild(layaPackage);
                        codeMain.removePopLayer(layaPackage);
                        showPanelResult(codeMain.getPanelLang(186), codeMain.lang(codeMain.getPanelLang(187), outputPackage.value), function()
                        {
                            remote.shell.showItemInFolder(outputPackage.value);
                        })
                        return;
                    }
                    else if (msg == 'error')
                    {
                        titltip.innerHTML = codeMain.getPanelLang(188);
                        loadingView.dispose();
                        return;
                    }
                    loadingView.showInfo(msg, proce);
                })

        }
        else
        {
            layaAlertShow(codeMain.getPanelLang(189))
        }

    }

    function getselectcontainer()
    {
        var div = getElement("div", "selectcontainer");
        container.appendChild(div);
        return div
    }

    function getElement(type, className, html)
    {
        var div = document.createElement(type);
        if (className) div.setAttribute("class", className);
        if (html) div.innerHTML = html;
        if (type == "input")
        {
            setFocuInput(div);
            div.styleBlur = className;
        }
        return div
    }
}

function LoadingView()
{
    var _this = this;
    _this.appLoadingVieMmask = getElement("div", "maskLaya");
    _this.myCanvas = getElement("canvas", "loading");
    _this.myCanvas.width = 500;
    _this.myCanvas.height = 500
    _this.myctx = _this.myCanvas.getContext("2d");
    _this.appLoadingVieMmask.appendChild(_this.myCanvas);
    // document.body.appendChild(_this.appLoadingVieMmask);
    codeMain.addPopLayer(_this.appLoadingVieMmask);
    LoadingView.prototype.show = function() {

    }
    LoadingView.prototype.dispose = function()
    {
        // document.body.removeChild(_this.appLoadingVieMmask);
        codeMain.removePopLayer(_this.appLoadingVieMmask);
    }
    LoadingView.prototype.showInfo = function(msg, percent)
    {
        _this.drowProcess(msg, percent, _this.myCanvas, _this.myctx);
    }
    LoadingView.prototype.drowProcess = function(msg, process, myCanvas, myctx)
    {
        myCanvas.style.postion = "absulute";
        myCanvas.style.top = "80px";
        var W = myCanvas.width;
        var H = myCanvas.height;
        var text, text_w;
        myctx.clearRect(0, 0, W, H);
        myctx.beginPath();
        myctx.strokeStyle = "#494949";
        myctx.lineWidth = 10;
        myctx.arc(W / 2, H / 2, 100, 0, Math.PI * 2, false);
        myctx.stroke();
        var r = process / 100 * 2 * Math.PI;
        myctx.beginPath();
        myctx.strokeStyle = "lightgreen";
        myctx.lineWidth = 10;
        myctx.arc(W / 2, H / 2, 100, 0 - 90 * Math.PI / 180, r - Math.PI / 2, false);
        myctx.stroke();
        myctx.fillStyle = "#ffffff";
        myctx.font = "16px abc";
        text = process + "%";
        text_w = myctx.measureText(text).width;
        myctx.fillText(text, W / 2 - text_w / 2, H / 2 - 12);
        text_w = myctx.measureText(msg).width;
        myctx.fillText(msg, W / 2 - text_w / 2, H / 2 + 12);
    }
}

function buldApp()
{
    if (!checkapkAndsdk())
    {
        return
    }
    var obj = localStorage.getItem("buildAppLaya");
    if (obj)
    {
        obj = JSON.parse(obj);
    }
    else
    {
        obj = {}
    }
    var layaPackage = getElement("div", "layaPackage");
    // document.body.appendChild(layaPackage);
    codeMain.addPopLayer(layaPackage);
    var viewPanel = getElement("div", "viewPanel");
    layaPackage.appendChild(viewPanel);
    var titl = getElement("div", "titleBackground");
    titl.innerHTML = codeMain.getPanelLang(190);
    __Layadrag(layaPackage, titl);
    viewPanel.appendChild(titl);
    viewPanel.style.height = "500px";
    var closeBtn = getElement("div", "closeBtn");
    closeBtn.innerHTML = "×";
    closeBtn.onclick = function()
    {
        // document.body.removeChild(layaPackage);
        codeMain.removePopLayer(layaPackage);
    }
    viewPanel.appendChild(closeBtn);
    var container = getElement("div", "container");
    viewPanel.appendChild(container);
    var titletip = getElement("span", "titleTitp", "");
    container.appendChild(titletip)
        ////
    var selectcontainer = getselectcontainer();
    var span = getElement("span", "", codeMain.getPanelLang(52));
    selectcontainer.appendChild(span);
    var select = getElement("select");
    select.style.width = "160px"
    selectcontainer.appendChild(select);
    var op = new Option("Android-eclipse");
    select.appendChild(op);
    var op = new Option("Android-studio");
    select.appendChild(op);
    var op = new Option("iOS");
    select.appendChild(op);
    select.onchange = function(e)
    {
        //if(select.selectedIndex==2)
        //{
        //    gameselectcontainer.style.opacity ="1";
        //    gameUrlInput.disabled = false;
        //    singleapp.checked =false;
        //}else{
        conSingleapp.style.display = "block";
        //}

    }
    span = getElement("span", "", codeMain.getPanelLang(191));
    span.style.color = "#c5c5c5";
    span.style.fontSize = "12px";
    var conSingleapp = getElement("div");
    conSingleapp.style.width = "150px";
    conSingleapp.style.float = "left";
    ///构建单机版
    var singleapp = document.createElement("input");
    singleapp.type = "checkbox";
    singleapp.style.position = "relative";
    singleapp.style.top = "2px";
    conSingleapp.appendChild(singleapp);
    conSingleapp.appendChild(span);
    conSingleapp.style.position = "relative";
    conSingleapp.style.float = "right";
    conSingleapp.style.left = "-80px";
    conSingleapp.style.top = "3px";
    conSingleapp.style.cursor = "pointer";
    conSingleapp.check = false;
    singleapp.onchange = function()
    {
        if (singleapp.checked)
        {
            gameselectcontainer.style.opacity = "0.5";
            gameUrlInput.disabled = true;

        }
        else
        {
            gameselectcontainer.style.opacity = "1";
            gameUrlInput.disabled = false;
        }
    }
    span.onclick = function()
    {
        singleapp.checked = !singleapp.checked;
        if (singleapp.checked)
        {
            gameselectcontainer.style.opacity = "0.5";
            gameUrlInput.disabled = true;

        }
        else
        {
            gameselectcontainer.style.opacity = "1";
            gameUrlInput.disabled = false;
        }
    }
    selectcontainer.appendChild(conSingleapp); //单机版的话  要打开
    ///----------------------
    var gameselectcontainer = getselectcontainer();
    container.appendChild(gameselectcontainer)
    span = getElement("span", "", "  " + codeMain.getPanelLang(192));
    var inputappName = getElement("input", "packagetext");
    gameselectcontainer.appendChild(span);
    gameselectcontainer.appendChild(inputappName);
    inputappName.value = obj.appName || "myLaya";
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(193));
    gameselectcontainer.appendChild(span);
    inputappName.oninput = function()
        {
            inputappName.value = inputappName.value.replace(/[^A-Za-z0-9]/g, "");
        }
        /////----------------
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(99) + ":");
    selectcontainer.appendChild(span);
    var inputPackage = getElement("input", "packagetext");
    selectcontainer.appendChild(inputPackage);
    inputPackage.value = obj.inputPackage || "com.mygame.laya";
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(194));
    selectcontainer.appendChild(span);
    ////---------------------------------
    ///---------------------------------
    gameselectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(195));
    var gameUrlInput = getElement("input", "packagetext");
    gameselectcontainer.appendChild(span);
    gameselectcontainer.appendChild(gameUrlInput);
    gameUrlInput.value = obj.url || "http://www.xxx.com/index.html";
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(196));
    gameselectcontainer.appendChild(span);
    ////-------------------
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(197));
    selectcontainer.appendChild(span);
    var outUrl = getElement("input", "packagetext");
    outUrl.value = obj.outurl || path.join(codeMain.workspacePath, "release")
    selectcontainer.appendChild(outUrl);
    var outputBtn = getElement("button", "cusBtn", codeMain.getPanelLang(22) + "...");
    selectcontainer.appendChild(outputBtn);
    outputBtn.onclick = function()
    {
        var dialogLaya = electron.remote.dialog;
        dialogLaya.showOpenDialog(
        {
            properties: ["openDirectory", 'createDirectory']
        }, function(path1)
        {
            path1 = path1[0];
            if (path1)
            {
                outUrl.value = path1;
            }
        });
    }
    span = getElement("a", "", "&nbsp" + codeMain.getPanelLang(198));
    selectcontainer.appendChild(span);
    ////-------------------
    selectcontainer = getselectcontainer();
    span = getElement("span", "", codeMain.getPanelLang(65));
    selectcontainer.appendChild(span);
    var resUrlInput = getElement("input", "packagetext");
    selectcontainer.appendChild(resUrlInput);
    resUrlInput.value = obj.gameUrl || "";
    var resBtn = getElement("button", "cusBtn", codeMain.getPanelLang(22) + "...");
    selectcontainer.appendChild(resBtn);
    resBtn.onclick = function()
        {
            var dialogLaya = electron.remote.dialog;
            dialogLaya.showOpenDialog(
            {
                properties: ["openDirectory", 'createDirectory']
            }, function(path)
            {
                path = path[0];
                resUrlInput.value = path || "";
            });
        }
        /////---------------------
    selectcontainer = getselectcontainer();
    selectcontainer.style.top = "22px";
    span = getElement("span", "", codeMain.getPanelLang(199));
    span.style.width = "480px"
    selectcontainer.appendChild(span);
    ///-------------
    selectcontainer = getselectcontainer();

    var check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("class", "checkBoxLaya");
    //selectcontainer.appendChild(check);
    var buildBtn = getElement("button", "cusBtn", codeMain.getPanelLang(69));
    selectcontainer.appendChild(buildBtn);
    buildBtn.style.left = "180px";
    buildBtn.style.top = "20px";
    buildBtn.onclick = function()
    {
        ///构建
        if (inputappName.value && inputPackage.value && outUrl.value)
        {
            if (!singleapp.checked && !gameUrlInput.value)
            {
                alert(codeMain.getPanelLang(70))
                return;
            }
            if (inputPackage.value.indexOf(".") == -1)
            {
                layaAlertShow(codeMain.getPanelLang(71))
                return
            }
            var outputPath = outUrl.value;
            var projTypeInfo = [
                {
                    outpath: path.join(outUrl.value, "Eclipse"),
                    type: 'Android-eclipse'
                }, //0 android eclipse
                {
                    outpath: path.join(outUrl.value, "AndroidStudio"),
                    type: 'Android-Studio'
                }, //1 androidstudio
                {
                    outpath: path.join(outUrl.value, "iOS"),
                    type: 'iOS'
                } //2 ios
            ];

            var info = projTypeInfo[select.selectedIndex];
            if (!info)
            {
                alert(codeMain.getPanelLang(200));
                return;
            }
            outputPath = info.outpath;
            if (fs.existsSync(path.join(outputPath, inputappName.value)))
            {
                layaAlertShow(codeMain.lang(codeMain.getPanelLang(201), path.join(outputPath, inputappName.value)));
                return;
            }
            var GenerateSDKProject = codeMain.require("./../libs/RuntimePackTools/out/GenerateSDKProject.js");
            var generateSDKProject = new GenerateSDKProject.GenerateSDKProject(info.type);
            codeMain.mkdirsSync(outputPath);
            var loading = new LoadingView();
            loading.showInfo(codeMain.getPanelLang(75), 10);
            try
            {
                var url = gameUrlInput.value;
                if (singleapp.checked)
                {
                    // 单机版参数
                    url = null;
                }
                generateSDKProject.excute(inputappName.value, outputPath, url, inputPackage.value, resUrlInput.value);
            }
            catch (e){
                console.log(e);
            }
            var obj = {
                "appName": inputappName.value,
                "gameUrl": resUrlInput.value,
                "url": gameUrlInput.value,
                "inputPackage": inputPackage.value,
                "outurl": outUrl.value
            };
            buildBtn.blur();
            localStorage.setItem("buildAppLaya", JSON.stringify(obj));
            loading.showInfo(codeMain.getPanelLang(75), 100);
            setTimeout(function()
            {
                loading.dispose();
                // document.body.removeChild(layaPackage);
                codeMain.removePopLayer(layaPackage);
                showPanelResult(" " + codeMain.getPanelLang(76), codeMain.lang(codeMain.getPanelLang(202), outputPath), function()
                {
                    remote.shell.showItemInFolder(outputPath);
                })
            }, 100)

        }
        else
        {
            alert(codeMain.getPanelLang(70))
        }
    }

    function getselectcontainer()
    {
        var div = getElement("div", "selectcontainer");
        container.appendChild(div);
        return div
    }

    function getElement(type, className, html)
    {
        var div = document.createElement(type);
        if (className) div.setAttribute("class", className);
        if (html) div.innerHTML = html;
        if (type == "input")
        {
            setFocuInput(div);
            div.styleBlur = className;
        }
        return div
    }
}
// layadebugSelect.onchange = function(e)
// {
//     layadebugSelect.selectvalue = layadebugSelect.options[layadebugSelect.selectedIndex].value
// }
// layadebugSelect.selectvalue = layadebugSelect.options[layadebugSelect.selectedIndex].value

var child_process = require('child_process');

/**
 * 根据服务器版本文件和本地的比较，来判断是否要更新。
 */
function checkPackToolVersion()
{
    var path = require('path');
    var localFile = path.join(path.dirname(__dirname), 'libs/RuntimePackTools/packversion.txt');
    var remoteFile = '/download/LayaAir/runtime/packversion.txt';
    //var remoteFile='/packversion.txt';
    var ver = '';
    var http = codeMain.require('http');
    var options = {
        hostname: 'ldc.layabox.com',
        port: 80,
        //hostname:'localhost',
        //port:8899,
        path: remoteFile
    };
    var req = http.request(options, (res) =>
    {
        res.statusCode;
        res.headers;
        res.on('data', (chunk) =>
        {
            ver += chunk;
            console.log('BODY: ' + chunk);
        });
        res.on('end', () =>
        {
            console.log('end ' + res.statusCode);
            var remote_ver = 0;
            var loc_ver = 0;
            try
            {
                if (fs.existsSync(localFile))
                {
                    loc_ver = parseInt(fs.readFileSync(localFile));
                }
            }
            catch (e)
            {}

            if (res.statusCode >= 200 && res.statusCode < 300)
            {
                remote_ver = parseInt(ver);
            }
            if (loc_ver < remote_ver)
            {
                console.log('当前打包工具版本太低，建议下载安装新的打包工具');
                // checkPanel();
            }
            else
            {
                //alert('ok');
            }
        })
    });
    req.on('end', () =>
    {});
    req.on('error', (e) =>
    {
        console.log('get version error');
    })
    req.end();
}

function checkapkAndsdk(checkJava)
{
    //先检查java环境
    if (checkJava && process.platform != "win32")
    {
        var GenerateAndroidApk = codeMain.require("./../libs/RuntimePackTools/out/GenerateAndroidApk.js");
        var generateAndroidApk = new GenerateAndroidApk.GenerateAndroidApk();
        if (!generateAndroidApk.checkJavaEnv())
        {
            if (confirm(codeMain.panel[79][langindex]))
                window.open('http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html');

            return false;
        }
    }

    //检查服务器版本。现在是异步检查。
    checkPackToolVersion();
    var dir = path.dirname(__dirname);
    var tmp1 = path.join(dir, "libs", "RuntimePackTools", "template");
    var iostmp = path.join(tmp1, 'iOS', 'config.json');
    var androidtmp = path.join(tmp1, 'Android_eclipse', 'config.json');
    var b1 = true;// fs.existsSync(iostmp);
    var b2 = true;//fs.existsSync(androidtmp);
    var b3 = fs.existsSync(path.join(dir, 'libs/RuntimePackTools/tool/dx.jar'));
    var b4 = fs.existsSync(path.join(dir, 'libs/RuntimePackTools/tool/mac'));
    var b5 = fs.existsSync(path.join(dir, 'libs/RuntimePackTools/apk/layabox.apk'));
    if (!b1 || !b2 || !b3 || !b4 || !b5)
    {
        //var runtimePath ="resources/app/out/vs/layaEditor/libs/RuntimePackTools"
        checkPanel();
        return false;
    }
    else
    {
        return true;
    }
}

function checkPanel()
{
    var layaPackage = getElement("div", "layaPackage");
    // document.body.appendChild(layaPackage);
    codeMain.addPopLayer(layaPackage);
    var viewPanel = getElement("div", "viewPanel");
    layaPackage.appendChild(viewPanel);
    var titl = getElement("div", "titleBackground");
    __Layadrag(layaPackage, titl);
    titl.innerHTML = codeMain.panel[121][langindex];
    viewPanel.appendChild(titl);
    viewPanel.style.height = "240px";
    var closeBtn = getElement("div", "closeBtn");
    closeBtn.innerHTML = "×";
    closeBtn.onclick = function()
    {
        // document.body.removeChild(layaPackage);
        codeMain.removePopLayer(layaPackage);
    }
    viewPanel.appendChild(closeBtn);
    var container = getElement("div", "container");
    viewPanel.appendChild(container);
    /////----------------
    var selectcontainer = getselectcontainer();
    var span = getElement("span", "", `1.${codeMain.panel[80][langindex]}\n`);
    span.style.width = "400px";
    selectcontainer.appendChild(span);
    var resBtn = getElement("button", "cusBtn", codeMain.panel[81][langindex]);
    selectcontainer.appendChild(resBtn);
    resBtn.onclick = function(e)
        {
            resBtn.blur();
            window.open("http://ldc.layabox.com/download/LayaAir/runtime/download.zip");
        }
        ///////////------------------------
    var selectcontainer = getselectcontainer();
    var span = getElement("span", "", `2. ${codeMain.panel[82][langindex]}`);
    span.style.width = "400px";
    selectcontainer.appendChild(span);
    var resBtn = getElement("button", "cusBtn", codeMain.panel[120][langindex]);
    selectcontainer.appendChild(resBtn);
    resBtn.onclick = function(e)
        {
            resBtn.blur();
            var dir = path.dirname(__dirname);
            var tmp1 = path.join(dir, "libs", "RuntimePackTools");
            remote.shell.showItemInFolder(tmp1)
        }
        ///////////------------------------
    var selectcontainer = getselectcontainer();
    var span = getElement("span", "", `3.${codeMain.panel[83][langindex]}`);
    span.style.width = "450px";
    selectcontainer.appendChild(span);
    ///////////--------------------------------
    function getselectcontainer()
    {
        var div = getElement("div", "selectcontainer");
        container.appendChild(div);
        return div
    }

    function getElement(type, className, html)
    {
        var div = document.createElement(type);
        if (className) div.setAttribute("class", className);
        if (html) div.innerHTML = html;
        if (type == "input")
        {
            setFocuInput(div);
            div.styleBlur = className;
        }
        return div
    }
}

function showPanelResult(title, msg, okcallback, cancelcallback)
{
    var layaPackage = getElement("div", "layaPackage");
    // document.body.appendChild(layaPackage);
    codeMain.addPopLayer(layaPackage);
    var viewPanel = getElement("div", "viewPanel");
    layaPackage.appendChild(viewPanel);
    var titl = getElement("div", "titleBackground");
    __Layadrag(layaPackage, titl)
    titl.innerHTML = title;
    titl.style.width = "445px";
    viewPanel.appendChild(titl);
    viewPanel.style.height = "189px";
    viewPanel.style.width = "459px";
    var closeBtn = getElement("div", "closeBtn");
    closeBtn.innerHTML = "×";
    closeBtn.onclick = function()
    {
        // document.body.removeChild(layaPackage);
        codeMain.removePopLayer(layaPackage);
    }
    viewPanel.appendChild(closeBtn);
    var container = getElement("div", "container");
    viewPanel.appendChild(container);
    var selectcontainer = getselectcontainer();
    var span = getElement("div", "titleAlert", msg);
    span.style.width = "400px";
    selectcontainer.appendChild(span);
    selectcontainer = getselectcontainer();
    var resBtn = getElement("button", "cusBtn", codeMain.panel[120][langindex]);
    resBtn.style.left = "100px";
    selectcontainer.appendChild(resBtn);
    selectcontainer.style.top = "60px";
    resBtn.onclick = function(e)
    {
        okcallback && okcallback()
        resBtn.blur();
    }
    var resBtn = getElement("button", "cusBtn", codeMain.panel[84][langindex]);
    selectcontainer.appendChild(resBtn);
    resBtn.style.left = "200px";
    resBtn.onclick = function(e)
        {
            // document.body.removeChild(layaPackage);
            codeMain.removePopLayer(layaPackage);
        }
        /////----------------
        ///////////--------------------------------
    function getselectcontainer()
    {
        var div = getElement("div", "selectcontainer");
        container.appendChild(div);
        return div
    }

    function getElement(type, className, html)
    {
        var div = document.createElement(type);
        if (className) div.setAttribute("class", className);
        if (html) div.innerHTML = html;
        if (type == "input")
        {
            setFocuInput(div);
            div.styleBlur = className;
        }
        return div
    }
}

function layaAlertShow(msg)
{
    var layaPackage = getElement("div", "layaPackage");
    layaPackage.style.zIndex = 99999999;
    // document.body.appendChild(layaPackage);
    codeMain.addPopLayer(layaPackage);
    var viewPanel = getElement("div", "viewPanel");
    layaPackage.appendChild(viewPanel);
    var titl = getElement("div", "titleBackground");
    titl.innerHTML = codeMain.getPanelLang(203);
    titl.style.width = "445px";
    viewPanel.appendChild(titl);
    viewPanel.style.height = "189px";
    viewPanel.style.width = "459px";
    var closeBtn = getElement("div", "closeBtn");
    closeBtn.innerHTML = "×";
    closeBtn.onclick = function()
    {
        // document.body.removeChild(layaPackage);
        codeMain.removePopLayer(layaPackage);
    }
    viewPanel.appendChild(closeBtn);
    var container = getElement("div", "container");
    viewPanel.appendChild(container);
    var selectcontainer = getselectcontainer();
    var span = getElement("div", "titleAlert", msg);
    span.style.width = "400px";
    span.style.textAlign = "center"
    selectcontainer.appendChild(span);

    function getselectcontainer()
    {
        var div = getElement("div", "selectcontainer");
        container.appendChild(div);
        return div
    }

    function getElement(type, className, html)
    {
        var div = document.createElement(type);
        if (className) div.setAttribute("class", className);
        if (html) div.innerHTML = html;
        if (type == "input")
        {
            setFocuInput(div);
            div.styleBlur = className;
        }
        return div
    }
}

function __Layadrag(dlgTest, target)
{
    var dragging = false;
    var test;
    var mouseY;
    var mouseX;
    target.onmousedown = down;
    dlgTest.style.position = "absolute";
    dlgTest.style.top = "0px";
    dlgTest.style.left = "0px";

    function down(event)
    {
        if (event.target.className === "common-tool-close") { // 关闭按钮，不能移动
            return;
        }
        window.addEventListener("mouseup", up);
        window.addEventListener("mousemove", move);
        event = event || window.event;
        dragging = true;
        mouseX = parseInt(event.clientX);
        mouseY = parseInt(event.clientY);
        objY = parseInt(dlgTest.style.top);
        objX = parseInt(dlgTest.style.left);
    }

    function move(event)
    {
        event = event || window.event;
        if (dragging == true)
        {
            var x, y;
            y = event.clientY - mouseY + objY;
            x = event.clientX - mouseX + objX;
            dlgTest.style.top = y + "px";
            dlgTest.style.left = x + "px";
        }
    }

    function up()
    {
        window.removeEventListener("mouseup", up);
        window.removeEventListener("mousemove", move);
        dragging = false;
    }
}

/**
 * 提示消息
 * - show
 * - hide
 */
window.tipPanel = {
    instance: null,
    show(title, content, closeFunc) {
        var tipPanelEle = getElement("div", "tipPanel");
        this.instance = tipPanelEle;
        codeMain.addPopLayer(tipPanelEle);
        tipPanelEle.innerHTML = `
        <div class="tip-wrapper">
            <div class="common-tool-title">
                <div class="common-tool-icon-wrapper">
                    <img class="common-tool-icon" title="${title}" src="skins/default/image/ide/layamaker-newpro.png" style="width: 18px; height: 20px;">
                </div>
                <div class="common-tool-title-content">${title}</div>
                <div class="common-tool-close"></div>
            </div>
            <div class="tip-content">${content}</div>
        </div>
        `;
        let titleEle = tipPanelEle.getElementsByClassName("common-tool-title")[0];
        __Layadrag(tipPanelEle, titleEle);
        tipPanelEle.getElementsByClassName("common-tool-close")[0].onclick = () => {
            this.hide();
            closeFunc instanceof Function && closeFunc();
        };
    },
    hide() {
        this.instance && codeMain.removePopLayer(this.instance);
        this.instance = null;
    },
    isShow() {
        return !!this.instance;
    }
};