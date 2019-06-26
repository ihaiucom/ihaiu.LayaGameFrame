/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MenuButtonStruct from "../../Generates/CommonBase/MenuButtonStruct";
import MenuConfig from "../../../Config/ConfigExtends/MenuConfig";

export default class MenuButton extends MenuButtonStruct
{
    menuConfig: MenuConfig;

    setData(menuConfig: MenuConfig)
    {
        this.menuConfig = menuConfig;
        this.m_icon.url = menuConfig.iconUrl;
        this.m_state.selectedIndex = menuConfig.isUnlock ? 0 : 1;
    }
}