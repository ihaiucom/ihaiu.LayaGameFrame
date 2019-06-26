import MModel from "../GameFrame/Module/MModel";
import ItemModel from "./DataModels/ItemModel";
import MailModel from "./DataModels/MailModel";
import RoleModel from "./DataModels/RoleModel";
import StoryModel from './DataModels/StoryModel';
import ActorModel from './DataModels/ActorModel';
import BuildingModel from "./DataModels/BuildingModel";
import InformationModel from "./DataModels/InformationModel";
import StudioModel from "./DataModels/StudioModel";
import StudioContinuedModel from "./DataModels/StudioContinuedModel";
import GashaponModel from "./DataModels/GashaponModel";
import StoryLotteryModel from "./DataModels/StoryLotteryModel";
import ActivityModel from "./DataModels/ActivityModel";
import DailyTaskModel from './DataModels/DailyTaskModel';
import MainTaskModel from "./DataModels/MainTaskMoudle";
import GuideModule from "./DataModels/GuideMoudle";

//======================
// 模块 数据模型 管理器
//----------------------
export default class ModelManagerList
{
	// 列表
	list: MModel[] = [];

	// 埋点数据
	// buriedPoint: BuriedPointModel = new BuriedPointModel();
	// 角色
	role: RoleModel = new RoleModel();
	// 物品
	item: ItemModel = new ItemModel();
	// 邮件
	mail: MailModel = new MailModel();
	/** 剧本 */
	story: StoryModel = new StoryModel();
	/** 艺人 */
	actor: ActorModel = new ActorModel();
	/** 情报 */
	information: InformationModel = new InformationModel();
	/** 建筑 */
	building: BuildingModel = new BuildingModel();
	/** 拍摄 */
	studio: StudioModel = new StudioModel();
	/** 拍摄持续收益 */
	studioContinued: StudioContinuedModel = new StudioContinuedModel();
	/**剧本招募 */
	storyLottery: StoryLotteryModel = new StoryLotteryModel();
	/** 抽奖*/
	gashapon: GashaponModel = new GashaponModel();
	/**主线任务 */
	mainTask: MainTaskModel = new MainTaskModel();
	/**新手引导 */
	guide: GuideModule = new GuideModule();

	/** 活动*/
	activity: ActivityModel = new ActivityModel();
	/** 每日任务 */
	dailyTask: DailyTaskModel = new DailyTaskModel();

	// 初始化列表
	initList()
	{
		this.list.push(this.role);
		this.list.push(this.item);
		this.list.push(this.mail);
		this.list.push(this.story);
		this.list.push(this.actor);
		this.list.push(this.information);
		this.list.push(this.building);
		this.list.push(this.studio);
		this.list.push(this.studioContinued);
		this.list.push(this.storyLottery);
		this.list.push(this.gashapon);
		this.list.push(this.activity);
		this.list.push(this.mainTask);
		this.list.push(this.guide);
	}
}