/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import MenuConfigReaderStruct from "../ReaderStructs/MenuConfigReaderStruct";
import Dictionary from "../../Libs/Helpers/Dictionary";
import { MenuBarType } from "../../GameFrame/Menu/MenuBarType";
import MenuConfig from "../ConfigExtends/MenuConfig";

export default class MenuConfigReader extends MenuConfigReaderStruct
{
    barDict: Dictionary<MenuBarType, MenuConfig[]> = new Dictionary<MenuBarType, MenuConfig[]>();

    getBarMenus(barType: MenuBarType): MenuConfig[]
    {
        if (this.barDict.hasKey(barType))
            return this.barDict.getValue(barType);

        return [];
    }



    /** 游戏所有配置加载完成 */
    onGameLoadedAll()
    {
        let list = this.getConfigList();
        for (let i = 0; i < list.length; i++)
        {
            let config: MenuConfig = list[i];

            // TODO ZF 将右下角菜单 强制设置为右上角
            if(config.barType == MenuBarType.Right_Bottom) 
                config.barType = MenuBarType.Right_Top;


            let menuList = this.barDict.getValue(config.barType);
            if (!menuList)
            {
                menuList = [];
                this.barDict.add(config.barType, menuList);
            }
            menuList.push(config);
        }
    }
}