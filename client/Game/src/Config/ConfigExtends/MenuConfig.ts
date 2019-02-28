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

    // 	菜单图片	
    get iconUrl(): string
    {
        let avatarConfig = Game.config.avatar.getConfig(this.icon);
        if (avatarConfig)
        {
            return avatarConfig.iconUrl;
        }
        else
        {
            return "";
        }

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
    openMenu(): boolean
    {
        if (this.menuId < MenuId.SubMenuButtonBegin)
        {
            if (!this.isUnlock)
            {
                Game.system.toastText(this.lockText);
                return false;
            }


            if (!MenuWindows.get(this.menuId))
            {
                Game.system.toastText(TEXT.Disable);
                return false;
            }

            if (this.enableOpen)
            {
                Game.menu.open(this.menuId);
                return true;
            }
        }
        return true;
    }



}