import MenuValidate from "./MenuValidate";
import Dictionary from "../Libs/Helpers/Dictionary";
import { MenuId } from "./MenuId";
import Game from "../Game";
import { UnlockType } from "./DataEnums/UnlockType";


//=========================
// 验证是否开放
//-------------------------
export default class MenuValidateOpening extends MenuValidate
{
	closeDict: Dictionary<MenuId, Function> = new Dictionary<MenuId, Function>();
	install()
	{
		// this.addClose(MenuId.GuideComplete, this.isCloseGuideComplete);
		// this.addClose(MenuId.Goal, this.isCloseGoal);
		// this.addClose(MenuId.CupGift, this.isCloseCupGift);
	}

	// isCloseGuideComplete(): boolean
	// {
	// 	return Game.moduleModel.guide.guideCompleteStatus == 1;
	// }

	// isCloseGoal(): boolean
	// {
	// 	return Game.moduleModel.targetPackage.isCloseLevelGift;
	// }

	// isCloseCupGift(): boolean
	// {
	// 	return Game.moduleModel.targetPackage.isCloseCupGift;
	// }

	addClose(id: number, func: Function)
	{
		this.closeDict.add(id, func);
	}

	validate(menuId: MenuId): boolean | number
	{
		let isClose = false;
		if (this.closeDict.hasKey(menuId))
		{
			isClose = this.closeDict.getValue(menuId).apply(this);
		}
		if (isClose == true)
		{
			return false;
		}

		let unlockConfig = Game.config.unlock.getUnlockConfig(menuId);

		if (this.dict.hasKey(menuId))
		{
			return this.dict.getValue(menuId).apply(this);
		}

		// if (unlockConfig)
		// {
		// 	switch (unlockConfig.open_type)
		// 	{
		// 		case UnlockType.None:
		// 			return true;
		// 		case UnlockType.Level:
		// 			return User.info.level >= unlockConfig.open_data;
		// 		case UnlockType.BuildingLevel:
		// 			return Game.moduleModel.building.validataBuildLevel(unlockConfig.open_data);
		// 		case UnlockType.BlockLevel:
		// 			return Game.moduleModel.street.validataBlockLevelId(unlockConfig.open_data);
		// 		case UnlockType.Other:
		// 			return false;
		// 		case UnlockType.HoldCity:
		// 			return Game.moduleModel.market.IsTaskCityFinish(unlockConfig.open_data);
		// 		case UnlockType.MainTask:
		// 			return Game.moduleModel.task.isCompleteMainTask(unlockConfig.open_data);
		// 	}
		// }

		return super.validate(menuId);
	}

}
