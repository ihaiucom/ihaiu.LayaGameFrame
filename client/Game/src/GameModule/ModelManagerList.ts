import MModel from "../GameFrame/Module/MModel";
import ItemModel from "./DataModels/ItemModel";
import MailModel from "./DataModels/MailModel";

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
	// 邮件
	mail: MailModel = new MailModel();
	// 初始化列表
	initList()
	{
		this.list.push(this.item);
		this.list.push(this.mail);
	}
}