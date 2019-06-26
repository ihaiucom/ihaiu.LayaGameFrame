/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuBarMainStruct from "../../Generates/SystemModuleMenu/MenuBarMainStruct";
import HomeWindow from "../../../GameModule/ViewWindows/HomeWindow";
import Dictionary from "../../../Libs/Helpers/Dictionary";
import MenuBButton from "./MenuBButton";
import Game from "../../../Game";
import { MenuBarType } from "../../../GameFrame/Menu/MenuBarType";
import MenuButtonCtl from "../../Customs/MenuButtonCtrl";

export default class MenuBarMain extends MenuBarMainStruct
{
    // 窗口
    moduleWindow: HomeWindow;
    menuButtons: MenuButtonCtl[] = [];
    posDict: Dictionary<number, MenuButtonCtl> = new Dictionary<number, MenuButtonCtl>();

    // 窗口初始化完毕
    onWindowInited(): void
    {
        for (let i = 0; i < this.numChildren; i++)
        {
            let item = this.getChildAt(i);
            if (item.name.startsWith("btn_"))
            {
                let ctl = new MenuButtonCtl(<MenuBButton>item, this);
                this.posDict.add(ctl.menuButtonData.pos, ctl);
                this.menuButtons.push(ctl);
            }
        }

        let list = Game.config.menu.getBarMenus(MenuBarType.Bottom);

        for (let i = 0; i < list.length; i++)
        {
            let config = list[i];
            let ctl = this.posDict.getValue(config.barIndex);
            if (ctl)
            {
                ctl.setMenuConfig(config);
            }
        }

        //cache bitmap
        // this.displayObject.cacheAs = "bitmap";
        // this.displayObject.staticCache = true;
    }

    onRefreshUnlock()
    {
        for (let item of this.menuButtons)
        {
            item.refreshUnlock();
        }
        //repaint
        // this.displayObject.reCache();
    }
    
    closeSubmenus()
    {

    }
}