import MenuValidate from "./MenuValidate";
import { MenuId } from "./MenuId";
import Game from "../Game";

//==================
//验证新功能
//==================
export default class MenuValidateNew extends MenuValidate
{
	install()
	{

	}

	validate(menuId: MenuId): boolean
	{
		if (this.dict.hasKey(menuId))
		{
			return this.dict.getValue(menuId).apply(this);
		}

		// let isNew = Game.moduleModel.func.getIsNewMenu(menuId);
		// if (isNew)
		// {
		// 	return isNew;
		// }

		// let menuConfig = Game.config.menu.getConfig(menuId);
		// if (menuConfig.isSubbarMainButton)
		// {
		// 	let list = Game.config.menu.getBarMenus(<number>menuId);

		// 	for (let i = 0; i < list.length; i++)
		// 	{
		// 		if (this.validate(list[i].menuId))
		// 		{
		// 			return true;
		// 		}
		// 	}
		// }

		return false;
	}
}
