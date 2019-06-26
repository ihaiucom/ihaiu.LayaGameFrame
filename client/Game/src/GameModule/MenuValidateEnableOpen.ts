import MenuValidate from "./MenuValidate";
import { MenuId } from "./MenuId";
import Game from "../Game";
import TEXT from "../Config/Keys/TEXT";

//=========================
// 验证是否可以打开
//-------------------------
export default class MenuValidateEnableOpen extends MenuValidate
{
	install()
	{
		this.dict.add(MenuId.Studio, this.warEnableOpen);
	}


	validate(menuId: MenuId): boolean | number
	{
		switch (menuId)
		{
			case MenuId.Studio:
				return this.warEnableOpen();
			
		}
		return super.validate(menuId);
	}


	//拍摄是否可以使用
	private warEnableOpen(): boolean
	{
		return true;
		// let b: boolean = false;
		// if (User.isNineToFiftyFive && !User.isTenTime && (!Game.moduleModel.warData.moveData || (Game.moduleModel.warData.moveData !== null && Game.moduleModel.warData.moveData.state < EMovieState.result)))
		// {
		// 	Game.system.toastText(TEXT.NineToFiftyFiveTip);
		// }
		// else
		// {
		// 	b = true;
		// }
		// return b;
	}
}