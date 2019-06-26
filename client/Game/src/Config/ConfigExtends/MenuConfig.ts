/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import MenuConfigStruct from "../ConfigStructs/MenuConfigStruct";
import { MenuId } from "../../GameModule/MenuId";
import { MenuLayerType } from "../../GameFrame/Menu/MenuLayerType";
import { MenuCloseOtherType } from "../../GameFrame/Menu/MenuCloseOtherType";
import { LoaderId } from "../../GameFrame/Loader/LoaderId";
import Game from "../../Game";
import MenuValidateUnlock from "../../GameModule/MenuValidateUnlock";
import TEXT from "../Keys/TEXT";
import MenuValidateEnableOpen from "../../GameModule/MenuValidateEnableOpen";
import MenuValidateNew from "../../GameModule/MenuValidateNew";
import MenuWindows from "../../GameModule/MenuWindows";
import { MenuBarType } from "../../GameFrame/Menu/MenuBarType";
import Res from "../Keys/Res";

export default class MenuConfig extends MenuConfigStruct
{
    // 模块ID
    get menuId(): MenuId
    {
        return this.id;
    }

    // 层级
    get menuLayer(): MenuLayerType
    {
        return this.layer;
    }

    // 关闭其他类型
    get menuCloseOtherType(): MenuCloseOtherType
    {
        return this.closeOtherType;
    }


    // 加载界面ID
    get menuLoaderId(): LoaderId
    {
        return this.loaderId;
    }


    private _iconUrl: string;
    // 	菜单图片	
    get iconUrl(): string
    {
        if(!this._iconUrl)
        {
            if(!isNullOrEmpty(this.icon))
            {
                this._iconUrl = Res.getMenuIconUrl(this.icon);
            }
        }

       return this._iconUrl;
    }

    /**
     * 是否是子菜单栏的主菜单
     */
    get isSubbarMainButton(): boolean
    {
        return this.menuId >= MenuId.SubMenuButtonBegin;
    }

    /**
     * 获取是否解锁
     */
    get isUnlock(): boolean
    {
        return <boolean>MenuValidateUnlock.getInstance().validate(this.menuId);
    }

    /**
     * 获取未解锁文本
     */
    get lockText(): string
    {
        let unlockConfig = Game.config.unlock.getUnlockConfig(this.menuId);
        if (unlockConfig)
        {
            return unlockConfig.touch_txt;
        }
        return TEXT.Lock;
    }

    /**
     * 锁住情况下是否显示
     */
    get lockVisiable(): boolean
    {
        // TODO ZF
        return this.barType == MenuBarType.Bottom;
        let unlockConfig = Game.config.unlock.getConfig(this.menuId);
        if (unlockConfig)
        {
            return unlockConfig.icon_type == 1;
        }
        return true;
    }

    /**
     * 是否可以打开
     */
    get enableOpen(): boolean
    {
        return <boolean>MenuValidateEnableOpen.getInstance().validate(this.menuId);
    }


    /**
     * 是否可以是新的
     */
    get isNew(): boolean
    {
        return <boolean>MenuValidateNew.getInstance().validate(this.menuId);
    }

    /**
     * 前往
     */
    async openMenu(): Promise<boolean>
    {
        if (this.menuId < MenuId.SubMenuButtonBegin)
        {
            if (!this.isUnlock)
            {
                Game.system.toastText(this.lockText);
                return Promise.resolve(false);
            }

            let windowConfig = MenuWindows.get(this.menuId);

            if (!windowConfig)
            {
                Game.system.toastText(TEXT.Disable);
                return Promise.resolve(false);
            }

            if(windowConfig.windowClass)
            {
                let result = await windowConfig.windowClass.AsyncEnableOpen();
                if(!result)
                {
                    return Promise.resolve(false);
                }
            }

            if (this.enableOpen)
            {
                Game.menu.open(this.menuId);
                return Promise.resolve(true);
            }
        }
        return Promise.resolve(true);
    }



}