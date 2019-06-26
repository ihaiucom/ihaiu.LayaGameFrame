import MWindow from "../../GameFrame/Module/MWindow";
import Game from "../../Game";
import { MenuId } from "../../GameModule/MenuId";
import MenuWindows from "../../GameModule/MenuWindows";

export default class GuideUIHelper
{
	/** 获取菜单按钮 */
	static getWindow( menuId: MenuId ): MWindow
	{
		return Game.menu.getMenuCtl( menuId ).moduleWindow;
	}
}