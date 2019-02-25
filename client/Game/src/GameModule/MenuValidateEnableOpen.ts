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
		this.dict.add(MenuId.Fans, this.fansEnableOpen);
		this.dict.add(MenuId.Official, this.officialEnableOpen);
		this.dict.add(MenuId.Meeting, this.meetingEnableOpen);
		this.dict.add(MenuId.Order, this.orderEnableOpen);
		this.dict.add(MenuId.War, this.warEnableOpen);
	}


	validate(menuId: MenuId): boolean | number
	{
		switch (menuId)
		{
			case MenuId.War:
				if (Game.moduleModel.street.canSign)
				{
					Game.guide.readyPlayGuide(105401, true);
					return !Game.moduleModel.street.canSign;
				}
				else
				{
					return super.validate(menuId);
				}
		}
		return super.validate(menuId);
	}



	//会议是否可以打开
	private meetingEnableOpen(): boolean
	{
		let b: boolean = false;
		let isBuild = Game.moduleModel.building.hasBuildByType(RoomType.Meeting);

		if (isBuild)
		{
			let meetingData = Game.moduleModel.meeting.getMeetingData();
			if (meetingData)
			{
				//会议数量
				let nextNum = meetingData.nextMeetingNum;
				if (nextNum <= 0)
				{
					//提示下一个会议到来的时间
					Game.system.toastMsg(MsgKey.meeting_time, TimeHelper.TimeFormat4(meetingData.nextMeetingComeTime));
				}
				else
				{
					b = true;
				}
			}
		}
		else
		{
			Game.system.toastText(TEXT.Lock);
		}
		return b;
	}

	//公务是否可以打开
	private officialEnableOpen(): boolean
	{
		let b: boolean = false;
		let isBuild = Game.moduleModel.building.hasBuildByType(RoomType.Office);

		if (isBuild)
		{
			let businessData = Game.moduleModel.business.getBusinessData();
			if (businessData)
			{
				if (businessData.isMaxDaily)
				{
					//提示阅读到最大次数
					Game.system.toastMsg(MsgKey.business_down);
				}
				else
				{
					//公务数量
					let nextBusinessNum = businessData.nextBusinessNum;
					if (nextBusinessNum <= 0)
					{
						//提示下一个公务到来的时间
						Game.system.toastMsg(MsgKey.business_countdown, TimeHelper.TimeFormat4(businessData.nextBusinessComeTime));
					}
					else
					{
						b = true;
					}
				}
			}
		}
		else
		{
			Game.system.toastText(Games.TEXT.Lock);
		}
		return b;
	}

	//粉丝是否可以打开
	private fansEnableOpen(): boolean
	{
		let b: boolean = false;
		let isBuild = Game.moduleModel.building.hasBuildByType(RoomType.Reception);
		if (isBuild)
		{
			let visitData = Game.moduleModel.visit.getVisitData();
			if (visitData)
			{
				//探班数量
				let nextFans = visitData.nextFansNum;
				if (nextFans <= 0)
				{
					Game.system.toastMsg(MsgKey.visit_countdown, TimeHelper.TimeFormat4(visitData.nextFansComeTime));
				}
				else if (visitData.isWaiting)
				{
					Game.system.toastText(Games.TEXT.VisitHaveOtherFansWaiting);
				}
				else
				{
					if (Game.moduleModel.actor.hasCanVisitActor)
					{
						if (Game.moduleModel.secretary.isAutoVisit == false)
						{
							b = true;
						}
						else
						{
							Game.system.toastText(TEXT.ActorAutoVisit);
						}

						Game.protosender.manageVisit.StartVisit();
					}
					else
					{
						Game.system.toastMsg(MsgKey.visit_noone);
					}
				}
			}
		}
		else
		{
			Game.system.toastText(Games.TEXT.Lock);
		}
		return b;
	}

	//订单是否
	private orderEnableOpen(): boolean
	{
		let b: boolean = false;
		let isBuild = Game.moduleModel.building.hasBuildByType(RoomType.Spread);
		if (isBuild)
		{
			b = true;
		}
		else
		{
			Game.system.toastText(Games.TEXT.Lock);
		}
		return b;
	}
	//拍摄是否可以使用
	private warEnableOpen(): boolean
	{
		let b: boolean = false;
		if (User.isNineToFiftyFive && !User.isTenTime && (!Game.moduleModel.warData.moveData || (Game.moduleModel.warData.moveData !== null && Game.moduleModel.warData.moveData.state < EMovieState.result)))
		{
			Game.system.toastText(TEXT.NineToFiftyFiveTip);
		}
		else
		{
			b = true;
		}
		return b;
	}
}