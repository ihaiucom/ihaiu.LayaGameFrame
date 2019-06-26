import { MenuId } from "../../GameModule/MenuId";
import MenuManager from "./MenuManager";
import MenuConfig from "../../Config/ConfigExtends/MenuConfig";
import ModuleConfig from "../Module/ModuleConfig";
import MWindow from "../Module/MWindow";
import { MenuCtlStateType } from "./MenuCtlStateType";
import MenuOpenParameter from "./MenuOpenParameter";
import MenuLayer from "./MenuLayer";
import Game from "../../Game";
import GameEventKey from "../../GameEventKey";
import AssetItemInfo from "../AssetManagers/AssetItemInfo";
import Dictionary from "../../Libs/Helpers/Dictionary";
import SoundKey from "../../FGUI/Generates/SoundKey";
import { MenuCloseOtherType } from "./MenuCloseOtherType";
import { MenuLayerType } from "./MenuLayerType";
import HomeWindow from "../../GameModule/ViewWindows/HomeWindow";

// 菜单控制器
export default class MenuCtl
{
    __menuManager: MenuManager;

    // 菜单ID
    menuId: MenuId;

    // 菜单配置
    menuConfig: MenuConfig;

    // 菜单窗口配置
    menuWindowConfig: ModuleConfig;

    // 窗口势力对象
    moduleWindow: MWindow;

    // 当前状态
    state: MenuCtlStateType;

    // 打开参数
    openParametar: MenuOpenParameter;

    // 加载开始时间        
    loadBeginTime: number;

    // 返回菜单ID
    backMenuId: MenuId = -1;
    // 返回菜单ID排除
    backExcludeMenuIdMenuId: MenuId = -1;

    // 关闭时间
    closeTime: number = 0;
    // 此次关闭是否销毁
    closeIsDestory: boolean = true;

    // 打开
    open(parametar: MenuOpenParameter)
    {
        this.openParametar = parametar;

        if (!this.moduleWindow)
        {
            this.moduleWindow = new this.menuWindowConfig.windowClass();
            this.moduleWindow.menuId = this.menuId;
            this.moduleWindow.name = this.menuConfig.name;
            this.moduleWindow.windowContainer = MenuLayer.getLayer(this.menuConfig.menuLayer);
        }

        this.load();

    }

    // 关闭
    close()
    {
        if (this.state == MenuCtlStateType.Closed || this.state == MenuCtlStateType.Destoryed)
            return;

        this.__menuManager.__onMenuClose(this);
    }

    // 延时关闭，等把主界面打开再关闭
    __delayClose()
    {
        // this.backMenuId = -1;
        if (this.moduleWindow && this.moduleWindow.menuIsCreated)
        {
            Game.event.dispatch(GameEventKey.GameFrame_CloseMenu, this.moduleWindow.menuId)
            this.moduleWindow.onMenuClose();
            this.closeTime = Game.time.localTime;
        }
        this.state = MenuCtlStateType.Closed;
        // this.destory();
    }

    // 销毁
    destory()
    {
        if (this.moduleWindow)
        {
            this.moduleWindow.sShowComplete.remove(this.closeOther, this);
            this.moduleWindow.destory();
            this.moduleWindow = null;
        }
        this.state = MenuCtlStateType.Destoryed;
    }

    // 加载资源
    protected load()
    {
        this.state = MenuCtlStateType.Loading;

        let list = this.getLoadAssets();
        if (!list || list.length == 0)
        {
            this.loadBeginTime = 0;
            this.onLoadComplete();
        }
        else
        {
            this.loadBeginTime = Game.time.localTime;

            // 打开加载面板
            let loaderCtl = Game.loader.open(this.menuConfig.menuLoaderId);
            loaderCtl.setMax(list.length);
            loaderCtl.setProgress(0);

            let onProgress = (rate: number, current: number, max: number, assetItemInfo?: AssetItemInfo) =>
            {
                loaderCtl.setProgress(current);
            };

            Game.asset.loadList(list, this, this.onLoadComplete, onProgress);
        }


    }

    // 加载完成
    private onLoadComplete()
    {
        this.setShow();
        Game.loader.close(this.menuConfig.menuLoaderId);
        if (this.loadBeginTime > 0)
            console.log("加载界面花费时间 (" + this.menuConfig.moduleName + ") :" + (Game.time.localTime - this.loadBeginTime) + " 毫秒");
    }

    // 获取模块资源列表
    protected getLoadAssets(): AssetItemInfo[]
    {
        let list = [];
        let dict: Dictionary<TKey, AssetItemInfo> = new Dictionary<TKey, AssetItemInfo>();

        if (!this.moduleWindow.menuIsCreated)
        {
            this.moduleWindow.getLoadAssets(list, dict);
        }

        this.moduleWindow.generateAssetsForDynmic();
        this.moduleWindow.getLoadAssetsForDynamic(list, dict);



        return list;
    }

    // 设置显示
    protected setShow()
    {

        if (!this.moduleWindow)
        {
            console.warn(`设置显示 但是模块已销毁 ${this.menuConfig.name}(${this.menuConfig.moduleName}): ${this.menuId}`);
            return;
        }
        console.log(`设置显示面板 ${this.menuConfig.name}(${this.menuConfig.moduleName}): ${this.menuId}`);


        this.moduleWindow.sShowComplete.addOnce(this.closeOther, this);
        this.moduleWindow.sShowSubwindowComplete.addOnce(this.closeOther, this);

        this.state = MenuCtlStateType.Opened;
        if (this.moduleWindow.menuIsCreated)
        {
            this.moduleWindow.onMenuOpen(this.openParametar);
        }
        else
        {
            this.moduleWindow.menuParameter = this.openParametar;
        }
        this.moduleWindow.menuShow(this.moduleWindow.windowContainer);

        switch (this.menuId)
        {
            case MenuId.Login:
                Game.sound.playMusic(SoundKey.MM_BGM_01);
                break;
            case MenuId.Home:
                Game.sound.playMusic(SoundKey.MM_BGM_01);
                break;
        }
    }

    private setCloseDontDestory()
    {

    }

    // 关闭其他模块
    protected closeOther()
    {

        let homeIsOpen = this.__menuManager.isOpened(MenuId.Home);
        // 设置返回MenuID
        let backMenuId = this.__menuManager.getLastModuleOpenMenuId([this.backExcludeMenuIdMenuId, this.menuId]);
        let hasCloseOtherMenu: boolean = false;

        let list: MenuCtl[] = Game.menu.dict.getValues();
        switch (this.menuConfig.menuCloseOtherType)
        {
            // 不关闭任何面板
            case MenuCloseOtherType.None:
                break;

            // 除自己外的所有
            case MenuCloseOtherType.ExceptSelf_All:
                for (let i = 0; i < list.length; i++)
                {
                    let ctl = list[i];
                    if (ctl.menuId == MenuId.Home)
                        continue;

                    if (ctl != this)
                    {
                        ctl.closeIsDestory = homeIsOpen;
                        ctl.close();
                        hasCloseOtherMenu = true;
                    }
                }
                break;

            // 除自己外的所有模块层级面板
            case MenuCloseOtherType.ExceptSelf_Module:
                for (let i = 0; i < list.length; i++)
                {
                    let ctl = list[i];
                    if (ctl != this && ctl.menuConfig.menuLayer == MenuLayerType.Module)
                    {
                        ctl.closeIsDestory = homeIsOpen;
                        ctl.close();
                        hasCloseOtherMenu = true;
                    }
                }
                break;

            // 相同层级的其他面板
            case MenuCloseOtherType.ExceptSelf_SameLayer:
                for (let i = 0; i < list.length; i++)
                {
                    let ctl = list[i];
                    if (ctl.menuId == MenuId.Home)
                        continue;
                    if (ctl != this && ctl.menuConfig.menuLayer == this.menuConfig.menuLayer)
                    {
                        ctl.closeIsDestory = homeIsOpen;
                        ctl.close();
                        hasCloseOtherMenu = true;
                    }
                }
                break;

        }

        if (this.menuConfig.closeHomeWindow)
        {
            // this.__menuManager.close(MenuId.Home);
            let home = this.__menuManager.getMenuCtl(MenuId.Home);
            if (home && home.moduleWindow)
            {
                let homeWindow = <HomeWindow>home.moduleWindow;
                if (homeWindow)
                {
                    homeWindow.setHomeHide();
                }
            }

        }

        if(hasCloseOtherMenu)
        {
            if(backMenuId != -1)
                this.backMenuId = backMenuId;
        }
        else
            this.backMenuId = -1;



    }


}