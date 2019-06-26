import Dictionary from "../../Libs/Helpers/Dictionary";
import MenuCtl from "./MenuCtl";
import { MenuId } from "../../GameModule/MenuId";
import { MenuCtlStateType } from "./MenuCtlStateType";
import { MenuOpenType } from "./MenuOpenType";
import Game from "../../Game";
import MenuOpenParameter from "./MenuOpenParameter";
import { MenuLayerType } from "./MenuLayerType";
import FGLoader from "../../FGUI/FGLoader";
import Log from "../Log/Log";
import MenuWindows from "../../GameModule/MenuWindows";
import HomeWindow from "../../GameModule/ViewWindows/HomeWindow";
import TEXT from "../../Config/Keys/TEXT";

//=================
// 模块管理器
//------------------
export default class MenuManager
{
    dict: Dictionary<MenuId, MenuCtl> = new Dictionary<MenuId, MenuCtl>();
    list: MenuCtl[] = [];
    stack: MenuCtl[] = [];

    // 初始化
    install()
    {

    }

    // 获取模块控制器
    getMenuCtl(menuId: MenuId): MenuCtl
    {
        return this.dict.getValue(menuId);
    }

    // 销毁
    destory(menuId: MenuId)
    {
        let ctl = this.getMenuCtl(menuId);
        if (ctl)
        {
            if (ctl.state == MenuCtlStateType.Opened)
            {
                ctl.close();
                setTimeout(() =>
                {
                    ctl.destory();
                }, 100);
            }
            else
            {
                ctl.destory();
            }
        }
    }

    // 打开模块的tab面板
    openTab(menuId: MenuId, tabIndex: number | string, ...args: any[])
    {
        return this._open(menuId, { openType: MenuOpenType.Tab, openIndex: tabIndex, args: args });
    }

    // 打开模块的子窗口
    openSubWindow(menuId: MenuId, subwindowIndex: number | string, ...args: any[])
    {
        return this._open(menuId, { openType: MenuOpenType.Subwindow, openIndex: subwindowIndex, args: args });
    }


    // 打开模块
    open(menuId: MenuId, ...args: any[]): MenuCtl
    {
        return this._open(menuId, { openType: MenuOpenType.None, openIndex: 0, args: args });
    }

    // 打开模块使用menuIndexId
    openByMenuIndexId(menuIndexId, ...args: any[])
    {
        let indexConfig = Game.config.menuIndex.getConfig(menuIndexId);
        if (indexConfig)
        {
            switch (indexConfig.openType)
            {
                case MenuOpenType.Subwindow:
                    this.openSubWindow(indexConfig.menuId, indexConfig.menuIndex, ...args);
                    break;
                case MenuOpenType.Tab:
                    this.openTab(indexConfig.menuId, indexConfig.menuIndex, ...args);
                    break;
                default:
                    this.open(indexConfig.menuId, ...args);
                    break;
            }
        }
        else
        {
            let menuConfig = Game.config.menu.getConfig(menuIndexId);
            if (menuConfig)
            {
                this.open(menuIndexId, ...args);
            }
        }

    }

    //打开主界面
    openHome()
    {
        let home = this.getMenuCtl(MenuId.Home);
        // if (!home || home.state != MenuCtlStateType.Opened)
        // {
        //     this.open(MenuId.Home);
        // }
        if (!home || home.state != MenuCtlStateType.Opened)
        {
            home = this.open(MenuId.Home);
        }

        if (home.moduleWindow.contentPane && !home.moduleWindow.contentPane.visible)
        {
            home.moduleWindow.contentPane.visible = true;
        }
    }

    //关闭主界面
    closeHome()
    {
        let home = this.getMenuCtl(MenuId.Home);
        if (home && home.moduleWindow && home.moduleWindow.contentPane)
        {
            home.moduleWindow.contentPane.visible = false;
        }

    }

    // 打开模块
    private _open(menuId: MenuId, parametar: MenuOpenParameter)
    {
        let ctl = this.getMenuCtl(menuId);
        if (!ctl)
        {
            let menuConfig = Game.config.menu.getConfig(menuId);
            if (!menuConfig)
            {
                Log.Error(`MenuManager.open 没有找到menuConfig, menuId=${menuId}`);
                return null;
            }

            let menuWindowConfig = MenuWindows.get(menuId);
            if (!menuWindowConfig)
            {
                
                Game.system.toastText(TEXT.Disable);
                Log.Error(`MenuManager.open 没有找到menuWindowConfig, menuId=${menuId}`);
                return null;
            }

            if (!menuWindowConfig.windowClass)
            {
                Log.Error(`MenuManager.open menuWindowConfig.windowClass=${menuWindowConfig.windowClass}, menuId=${menuId}`);
                return null;
            }

            ctl = new MenuCtl();
            ctl.__menuManager = this;
            ctl.menuId = menuId;
            ctl.menuConfig = menuConfig;
            ctl.menuWindowConfig = menuWindowConfig;
            this.dict.add(menuId, ctl);
            if (ctl.menuId != MenuId.Home)
                this.list.push(ctl);
        }
        ctl.open(parametar);
        let index = this.stack.indexOf(ctl);
        if (index != -1)
            this.stack.splice(index, 1);
        this.stack.push(ctl);
        //
        return ctl;
    }

    // 返回
    back(menuId: MenuId)
    {
        let ctl = this.getMenuCtl(menuId);
        if (ctl)
        {
            let backMenuId = ctl.backMenuId;
            if (backMenuId > 0)
            {
                let backMenuCtl = this.getMenuCtl(backMenuId);
                if (backMenuCtl)
                {
                    backMenuCtl.backExcludeMenuIdMenuId = menuId;
                    let openParametar = backMenuCtl.moduleWindow ? backMenuCtl.moduleWindow.getLastMenuParameter() : null;
                    if (!openParametar)
                    {
                        openParametar = backMenuCtl.openParametar;
                    }
                    this._open(backMenuId, openParametar);
                }
            }

            setTimeout(() =>
            {
                this.close(menuId);
            }, 100);
        }
    }

    // 关闭模块
    close(menuId: MenuId)
    {
        let ctl = this.getMenuCtl(menuId);
        if (ctl)
        {
            ctl.closeIsDestory = true;
            ctl.close();
        }
    }

    __onMenuClose(ctl: MenuCtl)
    {
        for (let i = this.stack.length - 1; i >= 0; i--)
        {
            if (this.stack[i] == ctl)
                this.stack.splice(i, 1);
        }

        let openedNum = 0;
        let sameLayoutOpenedNum = 0;
        let moduleOpenedNum = 0;
        for (let item of this.list)
        {
            if (item.menuId == ctl.menuId)
                continue;

            switch (item.state)
            {
                case MenuCtlStateType.Opened:
                    openedNum++;
                    if (item.menuConfig.menuLayer == ctl.menuConfig.menuLayer)
                    {
                        sameLayoutOpenedNum++;
                    }
                    if (item.menuConfig.menuLayer == MenuLayerType.Module || item.menuConfig.menuLayer == MenuLayerType.ModuleTop)
                    {
                        moduleOpenedNum++;
                    }
                    break;
            }
        }

        console.log(`关闭面板 ${ctl.menuConfig.zh_cn_name} ( ${ctl.menuConfig.moduleName})  :" + openedNum=${openedNum}, sameLayoutOpenedNum=${sameLayoutOpenedNum}, moduleOpenedNum=${moduleOpenedNum}`);

        if (moduleOpenedNum == 0 && ctl.menuConfig.isAutoOpenHomeWindow)
        {
            let home = this.getMenuCtl(MenuId.Home);
            // if (!home || home.state != MenuCtlStateType.Opened)
            // {
            //     this.open(MenuId.Home);
            // }
            if (!home || home.state != MenuCtlStateType.Opened)
            {
                home = this.open(MenuId.Home);
            }

            let homeWindow = <HomeWindow>home.moduleWindow;
            if (homeWindow)
            {
                homeWindow.setHomeShow();
            }
        }

        ctl.__delayClose();

        // 改成关闭时再去销毁
        this.onTick();
        // 改成关闭时再去清理动态图片
        FGLoader.clearFreeLong();
    }

    // 获取最后打开的面板
    getLastOpenMenuId(): MenuId
    {
        if (this.stack.length > 0)
        {
            return this.stack[this.stack.length - 1].menuId;
        }
        return -1;
    }

    // 获取最后打开的模块面板ID
    getLastModuleOpenMenuId(excludeMenuId?: MenuId[]): MenuId
    {
        for (let i = this.stack.length - 1; i >= 0; i--)
        {
            let ctl = this.stack[i];
            if (ctl.menuConfig.menuLayer == MenuLayerType.Module || ctl.menuConfig.menuLayer == MenuLayerType.ModuleTop)
            {
                if (excludeMenuId && excludeMenuId.indexOf(ctl.menuId) != -1)
                {
                    continue;
                }

                return ctl.menuId;
            }
        }

        return -1;
    }

    // 获取模块是否打开        
    isOpened(menuId: MenuId)
    {
        let result = false;
        let ctl = this.getMenuCtl(menuId);
        if (ctl && ctl.state == MenuCtlStateType.Opened)
        {
            if (ctl.menuId == MenuId.Home)
            {
                if (ctl.moduleWindow && ctl.moduleWindow.contentPane)
                    result = ctl.moduleWindow.contentPane.visible;
            }
            else
            {
                result = true;
            }
        }
        return result;
    }

    // 是否打开子面板或者Tab
    isOpenedSubOrTab(menuId: MenuId, index: number | string)
    {
        if (!this.isOpened(menuId))
        {
            return false;
        }

        let ctl = this.getMenuCtl(menuId);
        if (ctl)
        {
            return ctl.moduleWindow.isOpenSubOrTab(index);
        }
        return false;
    }

    /** 获取模块子窗口 */
    getSubWindow(menuId, index: number | string)
    {
        if (!this.isOpened(menuId))
        {
            return null;
        }

        let ctl = this.getMenuCtl(menuId);
        if (ctl)
        {
            return ctl.moduleWindow.getSubwindow(index);
        }
        return null;
    }

    /** 检测销毁模块 */
    onTick()
    {
        for (let i = 0; i < this.list.length; i++)
        {
            let ctl = this.list[i];
            if (ctl.state == MenuCtlStateType.Closed)
            {
                if (ctl.menuConfig.cacheTime != -1)
                {
                    let cacheTime = Math.max(ctl.menuConfig.cacheTime, Game.deviceSetting.menuCacheTime);

                    let subtime = Game.time.localTime - ctl.closeTime;
                    if (subtime >= cacheTime && ctl.closeIsDestory)
                    {
                        ctl.destory();
                    }
                }
            }
        }
    }


}