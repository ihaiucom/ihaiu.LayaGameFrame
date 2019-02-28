import FWindow from "./FWindow";
import Signal from "../../Libs/signals/Signal";
import { MenuId } from "../../GameModule/MenuId";
import MenuOpenParameter from "../Menu/MenuOpenParameter";
import AssetItemInfo from "../AssetManagers/AssetItemInfo";
import { AssetItemType } from "../AssetManagers/AssetItemType";
import Dictionary from "../../Libs/Helpers/Dictionary";
import AssetHelper from "../AssetManagers/AssetHelper";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import Game from "../../Game";
import { MenuOpenType } from "../Menu/MenuOpenType";
import GameEventKey from "../../GameEventKey";
import MSubwindow from "./MSubWindow";
import Point = laya.maths.Point;
import Handler = laya.utils.Handler;
import AvatarConfig from "../../Config/ConfigExtends/AvatarConfig";
import MenuConfig from "../../Config/ConfigExtends/MenuConfig";

//======================
// 模块窗口
//----------------------
export default abstract class MWindow extends FWindow
{
    // 消息--显示完成
    sShowComplete: Signal = new Signal();
    // 消息--隐藏完成
    sHideComplete: Signal = new Signal();

    // 模块ID
    menuId: MenuId;

    // 菜单参数
    menuParameter: MenuOpenParameter;


    // 是否初始化视图
    menuIsCreated = false;

    // 是否已经销毁
    isDestoryed = false;

    // 窗口容器
    windowContainer: fairygui.GRoot;

    // 是否可以出现显示过度动画
    protected enableShowAnimation: boolean = true;
    // 是否显示需要发消息
    protected enableShowSignal: boolean = true;
    // 是否隐藏需要发消息
    protected enableHideSignal: boolean = true;

    // 是否打开子面板或者Tab
    public isOpenSubOrTab(index: number | string): boolean
    {
        return this.menuParameter.openIndex == index;
    }


    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    // 依赖资源列表
    protected _loadAssets: AssetItemInfo[] = [];

    // 添加依赖资源--fgui 包名
    addAssetForFguiPackagename(packagename: string)
    {
        this._loadAssets.push({ url: packagename, type: AssetItemType.FguiPackage });
    }

    // 添加依赖资源--组件
    addAssetForFguiComponent<T extends fairygui.GComponent>(fguiCom: { new (): T })
    {
        let names: string[] = fguiCom["DependPackages"];
        for (let i = 0; i < names.length; i++)
        {
            this.addAssetForFguiPackagename(names[i]);
        }
    }

    // 获取资源加载列表
    getLoadAssets(list: AssetItemInfo[], dict: Dictionary<TKey, AssetItemInfo>): AssetItemInfo[]
    {
        let assets = this._loadAssets;
        for (let i = 0; i < assets.length; i++)
        {
            let key = AssetHelper.getAssetItemKey(assets[i]);
            if (!dict.hasKey(key))
            {
                list.push(assets[i]);
                dict.add(key, assets[i]);
            }
        }

        return list;
    }

    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    unloadAssetForFguiPackagename(packagename: string)
    {
        switch (packagename)
        {
            case GuiPackageNames.CommonBase:
            case GuiPackageNames.CommonGame:
            case GuiPackageNames.CommonNumber:
            case GuiPackageNames.CommonFx:
            case GuiPackageNames.SystemModuleDialog:
                return;
        }
        Game.asset.unloadFgui(packagename);
    }

    // 卸载依赖资源--组件
    unloadAssetForFguiComponent<T extends fairygui.GComponent>(fguiCom: { new (): T })
    {
        let names: string[] = fguiCom["DependPackages"];
        for (let i = 0; i < names.length; i++)
        {
            this.unloadAssetForFguiPackagename(names[i]);
        }
    }

    // 下周依赖资源--初始化时加载的
    unloadAssetFroAssetList()
    {
        for (let i = 0; i < this._loadAssets.length; i++)
        {
            this.unloadAssetForFguiPackagename(this._loadAssets[i].url);
        }
    }


    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    // 动态资源列表
    protected _dynamicAssetsList: AssetItemInfo[] = [];

    // 添加动态资源
    addDynamicAsset(assetItem: AssetItemInfo)
    {
        if (assetItem)
            this._dynamicAssetsList.push(assetItem);
    }

    // 添加动态资源--AvatarConfig里的所有
    addDynmicAssetForAvatarAll(avatarConfig: AvatarConfig)
    {
        avatarConfig.getAllAssset(this._dynamicAssetsList);
    }

    // 生成动态预加载资源
    generateAssetsForDynmic(): void
    {
        this._dynamicAssetsList = [];
    }

    // 获取动态资源加载列表
    getLoadAssetsForDynamic(list: AssetItemInfo[], dict: Dictionary<TKey, AssetItemInfo>): AssetItemInfo[]
    {
        let assets = this._dynamicAssetsList;
        for (let i = 0; i < assets.length; i++)
        {
            let key = AssetHelper.getAssetItemKey(assets[i]);
            if (!dict.hasKey(key))
            {
                list.push(assets[i]);
                dict.add(key, assets[i]);
            }
        }

        let subwindows = this.subwindowDict.getValues();
        for (let i = 0; i < subwindows.length; i++)
        {
            subwindows[i].getLoadAssetsForDynamic(list, dict);
        }

        return list;
    }

    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */


    // fgui 初始化视图
    protected onInit(): void 
    {
        this.onMenuCreate();
        super.onInit();
    }

    // 菜单创建
    protected onMenuCreate(): void
    {
        // 在该位置实例化显示对象


        // 如果需要创建Tab, 可以在该位置设置

        this.setChildWindow(this.contentPane);
        this.callChildOnWindowInited(this.contentPane);
        this.menuIsCreated = true;
        this.onMenuOpen(this.menuParameter);
    }

    // 菜单打开事件，传递参数
    onMenuOpen(parameter: MenuOpenParameter): void
    {
        this.enableShowSignal = true;
        this.enableShowAnimation = true;
        this.menuParameter = parameter;
        switch (parameter.openType)
        {
            // 打开子窗口
            case MenuOpenType.Subwindow:
                this.enableShowSignal = false;
                this.enableShowAnimation = false;
                this.openSubwindowByIndex(parameter.openIndex, false, ...parameter.args);
                break;

            // 打开Tab
            case MenuOpenType.Tab:
                this.openTab(parameter.openIndex);
                break;
            default:
                Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, parameter.openType);
                break;
        }
    }


    // 窗口显示        
    windowShow()
    {
        if (this.windowContainer)
            this.showOn(this.windowContainer);
        else
            this.show();
    }

    // 菜单显示
    menuShow(root: fairygui.GRoot)
    {
        switch (this.menuParameter.openType)
        {
            // 打开子窗口
            case MenuOpenType.Subwindow:
                if (!this.contentPane)
                    this.onInit();
                break;
            default:
                this.showOn(root);
                break;
        }
    }

    // 关闭
    menuClose()
    {
        Game.menu.close(this.menuId);
    }

    // 返回, 到之前打开该模块的面板
    menuBack()
    {
        Game.menu.back(this.menuId);
    }

    // 销毁
    destory(): void
    {
        this.callChildOnWindowDestory(this.contentPane);
        this.onMenuDestory();

        this.sShowComplete.removeAll();
        this.sHideComplete.removeAll();
        this.sShowSubwindowComplete.removeAll();
        this.sHideSubwindowComplete.removeAll();
        this.tabDict.clear();

        let list = this.subwindowDict.getValues();
        for (let i = 0; i < list.length; i++)
        {
            let item: MSubwindow = list[i];
            item.destory();
        }
        this.subwindowDict.clear();


        if (this.contentPane)
        {
            this.contentPane.dispose();
            this.contentPane = null;
        }

        this.unloadAssetFroAssetList();
        super.dispose();
        this.isDestoryed = true;
    }


    // 菜单管理调的销毁
    onMenuDestory()
    {
    }


    protected doShowAnimation(): void
    {
        this.onWindowWillShow();
        if (this.openAnimation == 1)
        {
            this.srcPoint.x = this.panel.x;
            this.srcPoint.y = this.panel.y;
            this.panel.setScale(0.1, 0.1);
            this.calBuutonPos();
            this.panel.setXY(this.toPoint.x, this.toPoint.y);
            laya.utils.Tween.to(this.panel, { scaleX: 1, scaleY: 1, x: this.srcPoint.x, y: this.srcPoint.y }, 300, laya.utils.Ease.quadOut, Handler.create(this, () =>
            {
                this.onShown();
            }));
        }
        else
        {
            super.doShowAnimation();
        }
    }

    get panel(): fairygui.GComponent
    {
        if (this.contentPane["m_panel"])
        {
            return this.contentPane["m_panel"];
        }
        return this.contentPane;
    }

    protected doHideAnimation(): void
    {
        this.onWindowWillHide();
        if (this.closeAnimation == 1)
        {
            this.panel.setScale(1, 1);
            this.calBuutonPos();
            laya.utils.Tween.to(this.panel, { scaleX: 0.1, scaleY: 0.1, x: this.toPoint.x, y: this.toPoint.y }, 300, laya.utils.Ease.quadOut, Handler.create(this, () =>
            {
                this.panel.x = this.srcPoint.x;
                this.panel.y = this.srcPoint.y;
                this.hideImmediately();
            }));
        }
        else
        {
            super.doHideAnimation();
        }
    }

    get openAnimation(): number
    {
        if (this.menuConfig == null)
        {
            return 0;
        }
        return this.menuConfig.openAnimation;
    }

    get closeAnimation(): number
    {
        if (this.menuConfig == null)
        {
            return 0;
        }
        return this.menuConfig.closeAnimation;
    }

    get menuConfig(): MenuConfig
    {
        if (this.menuId > 0)
        {
            return Game.config.menu.getConfig(this.menuId);
        }
        return null;
    }

    private toPoint: Point = new Point();
    private srcPoint: Point = new Point();

    calBuutonPos()
    {
        // let btn = Game.moduleModel.func.getMenuCtrlByMenuId(this.menuId);
        // if (btn)
        // {
        //     let p = btn.getGlobalPos();
        //     this.toPoint.x = p.x;
        //     this.toPoint.y = p.y;
        // }
        // else
        // {
        //     this.toPoint.x = Game.screenSetting.screenWidth >> 1;
        //     this.toPoint.y = Game.screenSetting.screenHeight >> 1;
        // }
    }


    // protected doShowAnimation()
    // {
    //     this.onWindowWillShow();
    //     super.doShowAnimation();
    // }



    // protected doHideAnimation()
    // {
    //     this.onWindowWillHide();
    //     super.doHideAnimation();
    // }


    protected onShown(): void
    {
        this.panel.setScale(1, 1);
        this.enableHideSignal = true;
        this.onShowComplete();

        if (this.contentPane)
        {
            this.callChildOnWindowShow(this.contentPane);
        }
    }

    // 菜单管理器调的关闭
    onMenuClose()
    {
        this.hide();
        let list = this.subwindowDict.getValues();
        for (let i = 0; i < list.length; i++)
        {
            let item: MSubwindow = list[i];
            item.hide();
        }
    }


    protected onHide(): void
    {
        this.enableShowSignal = true;
        this.onHideComplete();
        this.clearTabHistorys();

        if (this.contentPane)
        {
            this.callChildOnWindowHide(this.contentPane);
        }
    }


    //=========================
    // 显示完成
    // 可以在这里添加协议消息监听
    //-------------------------
    protected onShowComplete()
    {
        if (this.enableShowSignal)
        {
            this.sShowComplete.dispatch();
        }
    }

    //=========================
    // 隐藏完成
    // 可以在这里移除协议消息监听
    //-------------------------
    protected onHideComplete()
    {
        if (this.enableHideSignal)
        {
            this.sHideComplete.dispatch();
        }
    }


    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    // 消息--显示完成
    sShowSubwindowComplete: Signal = new Signal();
    // 消息--隐藏完成
    sHideSubwindowComplete: Signal = new Signal();

    // 子窗口字典
    private subwindowDict: Dictionary<number | string, MSubwindow> = new Dictionary<number | string, MSubwindow>();
    // 打开子窗口栈
    private subwindowStack: MSubwindow[] = [];

    // 获取子窗口
    getSubwindow<T extends MSubwindow>(subwindowIndex: number | string): T
    {
        return <T>this.subwindowDict.getValue(subwindowIndex);
    }

    // 注册子窗口
    registerSubwindow(subwindow: MSubwindow)
    {
        this.subwindowDict.add(subwindow.subwindowIndex, subwindow);
    }

    // 关闭子窗口消息        
    __onSubWindowClose(subwindow: MSubwindow)
    {
        for (let i = this.subwindowStack.length - 1; i >= 0; i--)
        {
            if (this.subwindowStack[i] == subwindow)
                this.subwindowStack.splice(i, 1);
        }
    }


    // 获取最后打开的子面板
    private __getLastOpenSubWindow(excludeSubwindow?: MSubwindow[]): MSubwindow
    {
        for (let i = this.subwindowStack.length - 1; i >= 0; i--)
        {
            let ctl = this.subwindowStack[i];


            if (excludeSubwindow && excludeSubwindow.indexOf(ctl) != -1)
            {
                continue;
            }

            return ctl;
        }

        return null;
    }

    // 关闭所有子窗口
    closeAllSubwindowSelf(excludeSubwindow?: MSubwindow[])
    {
        let list = [];
        for (let i = this.subwindowStack.length - 1; i >= 0; i--)
        {
            list.push(this.subwindowStack[i]);
        }

        for (let i = 0; i < list.length; i++)
        {
            let ctl = list[i];

            if (excludeSubwindow && excludeSubwindow.indexOf(ctl) != -1)
            {
                continue;
            }

            ctl.closeSelf();
        }
    }

    // 关闭最后的子窗口
    closeLastSubwindowSelf()
    {
        let subWindow = this.__getLastOpenSubWindow();
        if (subWindow)
        {
            subWindow.closeSelf();
        }
    }

    // 获取最后的menuParameter
    getLastMenuParameter(): MenuOpenParameter
    {
        let subWindow = this.__getLastOpenSubWindow();
        if (subWindow)
        {
            return subWindow.menuParameter;
        }
        else
        {
            return this.menuParameter;
        }
    }

    // 打开子窗口
    openSubwindow(subwindow: MSubwindow, dontCloseOther: boolean = false, ...args)
    {
        subwindow.__backSubWindow = this.__getLastOpenSubWindow([subwindow]);


        this.menuParameter.openType = MenuOpenType.Subwindow;
        this.menuParameter.openIndex = subwindow.subwindowIndex;
        this.menuParameter.args = args;

        let menuParmeter: MenuOpenParameter = {
            openType: this.menuParameter.openType,
            openIndex: this.menuParameter.openIndex,
            args: args,
            dontCloseOther: dontCloseOther
        };

        if (!dontCloseOther)
        {
            let caller = {
                on: () =>
                {
                    if (subwindow.whenOpenCloseMainwindow)
                    {
                        this.enableHideSignal = false;
                        this.hideImmediately();
                    }

                    if (subwindow.whenOpenCloseOthersubwindow)
                    {
                        let list = this.subwindowDict.getValues;
                        for (let i = 0; i < list.length; i++)
                        {
                            let item: MSubwindow = list[i];
                            if (item != subwindow)
                            {
                                item.hideImmediately();
                                this.__onSubWindowClose(item);
                            }
                        }
                    }

                    this.sShowSubwindowComplete.dispatch();
                }
            };


            subwindow.sShowComplete.addOnce(caller.on, caller);
        }



        let index = this.subwindowStack.indexOf(subwindow);
        if (index != -1)
            this.subwindowStack.splice(index, 1);

        this.subwindowStack.push(subwindow);


        if (subwindow.menuIsCreated)
        {
            subwindow.onMenuOpen(menuParmeter);
        }
        else
        {
            subwindow.menuParameter = menuParmeter;
        }
        subwindow.showOn(this.windowContainer);

        Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, menuParmeter.openType, menuParmeter.openIndex);


    }

    // 打开子窗口, 使用索引
    openSubwindowByIndex(subwindowIndex: number | string, dontCloseOther: boolean = false, ...args)
    {
        let subwindow = this.getSubwindow(subwindowIndex);
        this.openSubwindow(subwindow, dontCloseOther, ...args);
    }

    // 子窗口返回到主窗口
    onSubwindowBack(subwindow: MSubwindow)
    {
        this.menuParameter.openType = MenuOpenType.None;
        this.menuParameter.openIndex = 0;
        this.sShowComplete.addOnce(() =>
        {
            subwindow.hide();
        }, subwindow);

        if (this.windowContainer.parent)
        {
            subwindow.hide();
        }
        this.showOn(this.windowContainer);
        this.subwindowStack = [];
    }

    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    // Tab字典
    private tabDict: Dictionary<number | string, fairygui.GObject[]> = new Dictionary<number | string, fairygui.GObject[]>();

    // Tab历史记录
    private tabHistorys = [];

    // 获取Tab的显示对象列表
    getTabDispyaObjects(tabIndex: number | string): fairygui.GObject[]
    {
        if (this.tabDict.hasKey(tabIndex))
        {
            return this.tabDict.getValue(tabIndex);
        }

        let list: fairygui.GObject[] = [];
        this.tabDict.add(tabIndex, list);
        return list;
    }

    // 注册Tab内容
    registerTab(tabIndex: number | string, displayObject: fairygui.GObject)
    {
        let list = this.getTabDispyaObjects(tabIndex);
        list.push(displayObject);
    }

    // 设置Tab，显示或者隐藏
    private setTabVisiable(tabIndex: number | string, visiable: boolean)
    {
        let list = this.getTabDispyaObjects(tabIndex);
        for (let i = 0; i < list.length; i++)
        {
            if (visiable)
            {
                this.callChildOnTabShow(<fairygui.GComponent>list[i]);
            }
            else if (list[i].visible)
            {
                this.callChildOnTabHide(<fairygui.GComponent>list[i]);
            }

            list[i].visible = visiable;
        }
    }


    private setOpenTab(tabIndex: number | string)
    {
        this.menuParameter.openIndex = tabIndex;
        let keys = this.tabDict.getKeys();
        for (let i = 0; i < keys.length; i++)
        {
            if (keys[i] != tabIndex)
            {
                this.setTabVisiable(keys[i], false);
            }
        }

        this.setTabVisiable(tabIndex, true);
        this.onOpenTab(tabIndex);
    }

    // 打开Tab
    openTab(tabIndex: number | string)
    {
        this.tabHistorys.push(tabIndex);
        this.setOpenTab(tabIndex);

        Game.event.dispatch(GameEventKey.GameFrame_OpenMenu, this.menuId, MenuOpenType.Tab, tabIndex);
    }

    // 如果需要处理额外的业务，可以重新该方法
    onOpenTab(tabIndex: number | string)
    {

    }

    // 返回上一次Tab
    backTab()
    {
        if (this.tabHistorys.length > 0)
        {
            // this.tabHistorys = this.tabHistorys.filter((id)=>{return id != this.menuParameter.openIndex});


            // if(this.tabHistorys.length > 0)
            // {
            //     let index = this.tabHistorys[0];
            //     this.tabHistorys = this.tabHistorys.filter((id)=>{return id != index});

            //     this.menuParameter.openIndex = index;
            //     this.setOpenTab(index);
            // }

            let lastIndex;
            for (let i = this.tabHistorys.length - 1; i >= 0; i--)
            {
                if (this.tabHistorys[i] == this.menuParameter.openIndex)
                {
                    if (i > 0)
                    {
                        if (this.tabHistorys[i - 1] != this.menuParameter.openIndex)
                        {
                            lastIndex = this.tabHistorys[i - 1];
                        }
                    }
                }
            }

            if (lastIndex === undefined)
            {
                this.menuBack();
            }
            else
            {
                this.openTab(lastIndex);
            }


        }
    }

    // 清除Tab历史记录
    clearTabHistorys()
    {
        this.tabHistorys = [];
    }



    /*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

    //=========================
    // 设置child.moduleWindow
    //-------------------------
    private setChildWindow(com: fairygui.GComponent)
    {
        if (com)
        {
            com["moduleWindow"] = this;

            if (com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.setChildWindow(com._children[i]);
                }
            }
        }
    }

    //=========================
    // 设置child.onWindowInited
    //-------------------------
    private callChildOnWindowInited(com: fairygui.GComponent)
    {
        if (com)
        {

            let fun: Function = com["onWindowInited"];
            if (fun)
            {
                fun.apply(com);
            }

            if (com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.callChildOnWindowInited(com._children[i]);
                }
            }
        }
    }


    //=========================
    // 设置child.onWindowDestory
    //-------------------------
    private callChildOnWindowDestory(com: fairygui.GObject)
    {

        let container;
        if (com instanceof fairygui.GObject)
        {
            container = com.displayObject;
        }


        if (com)
        {

            // if (getClassName(com) == "GuideClickHand")
            //     console.log(com);


            let fun: Function = com["onWindowDestory"];
            if (fun)
            {
                if (fun.apply(com))
                {
                    return;
                }
            }

            for (let i = container.numChildren - 1; i >= 0; i--)
            {
                let display = <laya.display.Sprite>container.getChildAt(i);
                if (display["$owner"])
                    this.callChildOnWindowDestory(display["$owner"]);
            }
        }
    }




    //=========================
    // 调用child GComponent的 onWindowShow
    //-------------------------
    private callChildOnWindowShow(com: fairygui.GComponent)
    {
        if (com)
        {
            let enbaleCall: boolean = true;
            let fun: Function = com["onWindowShow"];
            if (fun)
            {
                if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined)
                {
                    let whenSelfVisiableCallWindowShowAndHide: boolean = com["whenSelfVisiableCallWindowShowAndHide"];
                    if (whenSelfVisiableCallWindowShowAndHide)
                    {
                        if (com.visible == false)
                        {
                            enbaleCall = false;
                        }
                    }
                }

                if (enbaleCall)
                {
                    fun.apply(com);
                }
            }

            if (enbaleCall && com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.callChildOnWindowShow(com._children[i]);
                }
            }
        }
    }

    //=========================
    // 调用child GComponent的 onWindowHide
    //-------------------------
    private callChildOnWindowHide(com: fairygui.GComponent)
    {
        if (com)
        {
            let enbaleCall: boolean = true;
            let fun: Function = com["onWindowHide"];
            if (fun)
            {
                if (com["whenSelfVisiableCallWindowShowAndHide"] !== undefined)
                {
                    let whenSelfVisiableCallWindowShowAndHide: boolean = com["whenSelfVisiableCallWindowShowAndHide"];
                    if (whenSelfVisiableCallWindowShowAndHide)
                    {
                        if (com.visible == false)
                        {
                            enbaleCall = false;
                        }
                    }
                }

                if (enbaleCall)
                {
                    fun.apply(com);
                }
            }

            if (enbaleCall && com._children)
            {
                for (let i = 0; i < com._children.length; i++)
                {
                    this.callChildOnWindowHide(com._children[i]);
                }
            }
        }
    }


    //=========================
    // 调用child GComponent的 onTabShow
    //-------------------------
    private callChildOnTabShow(com: fairygui.GObject)
    {
        if (com)
        {

            let fun: Function = com["onTabShow"];
            if (fun)
            {
                fun.apply(com);
            }


            if (com["_children"])
            {
                for (let i = 0; i < com["_children"]["length"]; i++)
                {
                    this.callChildOnTabShow(com["_children"][i]);
                }
            }
        }
    }


    //=========================
    // 调用child GComponent的 onTabHide
    //-------------------------
    private callChildOnTabHide(com: fairygui.GObject)
    {
        if (com)
        {

            let fun: Function = com["onTabHide"];
            if (fun)
            {
                fun.apply(com);
            }

            if (com["_children"])
            {
                for (let i = 0; i < com["_children"]["length"]; i++)
                {
                    this.callChildOnTabHide(com["_children"][i]);
                }
            }
        }
    }





}