import MModel from "../GameFrame/Module/MModel";
import ItemModel from "./DataModels/ItemModel";
import MailModel from "./DataModels/MailModel";
import RoleModel from "./DataModels/RoleModel";
import GashaponModel from "./DataModels/GashaponModel";

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
	/** 抽奖*/
	gashapon: GashaponModel = new GashaponModel();

	// 初始化列表
	initList()
	{
		this.list.push(this.role);
		this.list.push(this.item);
		this.list.push(this.mail);
		this.list.push(this.gashapon);
	}
}