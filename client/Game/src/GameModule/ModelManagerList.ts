import MModel from "../GameFrame/Module/MModel";

//======================
// 模块 数据模型 管理器
//----------------------
export default class ModelManagerList
{
	// 列表
	list: MModel[] = [];

	// 埋点数据
	// buriedPoint: BuriedPointModel = new BuriedPointModel();
	// 物品
	item: ItemModel = new ItemModel();

	// 剧本
	story: StoryModel = new StoryModel();
	//建造
	building: BuildingModel = new BuildingModel();
	//角色信息
	playerInfo: PlayerInfoModel = new PlayerInfoModel();

	//艺人
	actor: ActorModel = new ActorModel();
	// 战斗
	warData: WarModel = new WarModel();
	market: MarketModel = new MarketModel();
	bag: BagModel = new BagModel();
	//生产
	produce: ProduceModel = new ProduceModel();
	mail: MailModel = new MailModel();
	shop: ShopModel = new ShopModel();
	recharge: RechargeModel = new RechargeModel();
	// 任务 剧本成就
	task: TaskModel = new TaskModel();
	// 订单
	order: OrderModel = new OrderModel();
	// 宝箱
	progressBox: ProgressBoxModel = new ProgressBoxModel();
	// 系统设置
	setting: SystemSettingModel = new SystemSettingModel();
	// 探班
	visit: VisitModel = new VisitModel();
	// 公务
	business: BusinessModel = new BusinessModel();
	// 会议
	meeting: MeetingModel = new MeetingModel();
	// 活动
	activity: ActivityModel = new ActivityModel();
	// 排行榜
	rank: RankModel = new RankModel();
	// 日常
	mission: MissionModel = new MissionModel();
	// 街区
	street: StreetModel = new StreetModel();
	// 奥斯卡
	oscar: OscarModel = new OscarModel();
	// 公告
	notice: NoticeModel = new NoticeModel();
	// 小秘书
	secretary: SecretaryModel = new SecretaryModel();
	// 合作
	cooperation: CooperationModel = new CooperationModel();
	// 引导
	guide: GuideModel = new GuideModel();
	// 功能
	func: FunctionModel = new FunctionModel();
	// 小目标数据模型
	targetPackage: TargetPackageModel = new TargetPackageModel();
	// 初始化列表
	initList()
	{
		// this.list.push(this.buriedPoint);
		this.list.push(this.item);
		this.list.push(this.story);
		this.list.push(this.building);
		this.list.push(this.actor);
		this.list.push(this.warData);
		this.list.push(this.market);
		this.list.push(this.bag);
		this.list.push(this.playerInfo);
		this.list.push(this.produce);
		this.list.push(this.mail);
		this.list.push(this.mission);
		this.list.push(this.shop);
		this.list.push(this.recharge);
		this.list.push(this.task);
		this.list.push(this.order);
		this.list.push(this.progressBox);
		this.list.push(this.setting);
		this.list.push(this.rank);
		this.list.push(this.visit);
		this.list.push(this.business);
		this.list.push(this.meeting);
		this.list.push(this.activity);
		this.list.push(this.street);
		this.list.push(this.oscar);
		this.list.push(this.notice);
		this.list.push(this.secretary);
		this.list.push(this.cooperation);
		this.list.push(this.guide);
		this.list.push(this.func);
		this.list.push(this.targetPackage);
	}
}