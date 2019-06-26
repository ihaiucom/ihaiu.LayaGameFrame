import MenuValidate from "./MenuValidate";
import { MenuId } from "./MenuId";
import Game from "../Game";

//=========================
// 验证红点
//-------------------------
export default class MenuValidateRed extends MenuValidate
{
	install()
	{
		// this.add(MenuId.Manage, this.getManageRed);
		// this.add(MenuId.Run, this.getRunRed);
	}

	// //管理
	// getManageRed(): boolean
	// {
	// 	return Game.moduleModel.story.isRed;
	// }

	// //经营
	// getRunRed(): boolean
	// {
	// 	return Game.moduleModel.order.redNum > 0 || Game.moduleModel.visit.isRed || Game.moduleModel.meeting.isRed || Game.moduleModel.business.isRed || Game.moduleModel.business.isRed;
	// }


	validate(menuId: MenuId): boolean | number
	{
		// switch (menuId)
		// {
		// 	// 艺人
		// 	case MenuId.ActorList:
		// 		return Game.moduleModel.actor.isCanNoseActor;
		// 	// 拍摄
		// 	case MenuId.War:
		// 		return Game.moduleModel.warData.realLicenceNum;
		// 	//生产
		// 	case MenuId.Produce:
		// 		return Game.moduleModel.produce.hasLineOutputFull;
		// 	// 剧本
		// 	case MenuId.StoryLibrary:
		// 		return Game.moduleModel.story.isRed;
		// 	// 订单
		// 	case MenuId.Order:
		// 		return Game.moduleModel.order.redNum;
		// 	// 粉丝
		// 	case MenuId.Fans:
		// 		return Game.moduleModel.visit.isRed;
		// 	// 会议
		// 	case MenuId.Meeting:
		// 		return Game.moduleModel.meeting.isRed;
		// 	// 公务
		// 	case MenuId.Official:
		// 		return Game.moduleModel.business.isRed;
		// 	// 日常任务
		// 	case MenuId.Mission:
		// 		return Game.moduleModel.mission.getRead();
		// 	case MenuId.Bag:
		// 		return Game.moduleModel.bag.RedNum;
		// 	// 七日活动
		// 	case MenuId.Event:
		// 		return Game.moduleModel.activity.waitForGetNum > 0;
		// 	// 签到福利
		// 	case MenuId.Weal:
		// 		return !Game.moduleModel.activity.curIsSign || Game.moduleModel.secretary.isCanGetWelf || Game.moduleModel.secretary.isCanGetLicense;
		// 	// 合作任务红点提示
		// 	case MenuId.Cooperation:
		// 		return Game.moduleModel.cooperation.isHaveRedTip || Game.moduleModel.cooperation.isRewardBoxRedTip || Game.moduleModel.cooperation.isRewardTaskRedTip;
		// 	case MenuId.Mail:
		// 		return Game.moduleModel.mail.RedNum;
		// 	case MenuId.Shop:
		// 		return Game.moduleModel.shop.RedNum;
		// 	case MenuId.Rank:
		// 		return Game.moduleModel.rank.RedNum;
		// 	case MenuId.Street:
		// 		return Game.moduleModel.street.RedNum;
		// 	case MenuId.Market:
		// 		return Game.moduleModel.market.RedNum;
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



		if (this.dict.hasKey(menuId))
		{
			return this.dict.getValue(menuId).apply(this);
		}
		return false;
	}

}
