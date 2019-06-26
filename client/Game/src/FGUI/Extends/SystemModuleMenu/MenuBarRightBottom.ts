/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBarRightBottomStruct from "../../Generates/SystemModuleMenu/MenuBarRightBottomStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Game from "../../../Game";
import { MenuBarType } from "../../../GameFrame/Menu/MenuBarType";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";
import MenuWindows from "../../../GameModule/MenuWindows";
import MenuRButton from "./MenuRButton";
import MenuBButton from "./MenuBButton";
import MenuButtonCtl from "../../Customs/MenuButtonCtrl";

export default class MenuBarRightBottom extends MenuBarRightBottomStruct
{
    // 窗口
    moduleWindow: HomeWindow;

    menuButtons: MenuButtonCtl[] = [];

    // 窗口初始化完毕
    onWindowInited(): void
    {
        for (let i = this.numChildren - 1; i >= 0; i--)
        {
            this.removeChildAt(i);
        }

        let list = Game.config.menu.getBarMenus(MenuBarType.Right_Bottom);
        list.sort((a: MenuConfig, b: MenuConfig) => { return a.barIndex - b.barIndex; });

        let y = 0;
        for (let i = 0; i < list.length; i++)
        {
            let config = list[i];
            if (!MenuWindows.get(config.menuId))
            {
                continue;
            }

            let button = MenuRButton.createInstance();
            button.y = y;
            y += button.height;
            this.addChild(button);
            let ctl = new MenuButtonCtl(<MenuBButton><any>button);
            ctl.setMenuConfig(config);
            this.menuButtons.push(ctl);
        }


        this.height = y;
    }


    layoutButtom()
    {
        let y = 0;
        for (let i = 0; i < this.menuButtons.length; i++)
        {
            let ctl = this.menuButtons[i];
            if (!ctl.button.visible)
                continue;
            ctl.button.y = y;
            y += ctl.button.height;
        }
    }


    onRefreshUnlock()
    {
        for (let item of this.menuButtons)
        {
            item.refreshUnlock(true);
        }
        this.layoutButtom();
    }
}