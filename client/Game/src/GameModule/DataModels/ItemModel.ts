import MModel from "../../GameFrame/Module/MModel";
import Dictionary from "../../Libs/Helpers/Dictionary";
import ItemData from "../DataStructs/ItemData";

export enum eItemTab
{
	/*** 道具 */
	NormalItem,
	/** 资产 */
	PropertyItem,
	/** 合同 */
	ContractItem
}

//======================
// 物品 数据模型
//----------------------
export default class ItemModel extends MModel
{
	// 物品字典
	private dict: Dictionary<number, ItemData> = new Dictionary<number, ItemData>();
	// 物品字典,用uuid作为字典
	private dictByUuid: Dictionary<number, ItemData> = new Dictionary<number, ItemData>();

	public CreateItem(id: number, num: number)
	{
		let item = new ItemData();
		item.id = id;
		item.count = num;
		return item;
	}

	// 获取物品列表，数量大于0，且config存在
	get itemList(): ItemData[]
	{
		let list: ItemData[] = [];
		let items = this.dict.getValues();
		for (let i = 0; i < items.length; i++)
		{
			if (items[i].count > 0 && items[i].itemConfig)
			{
				list.push(items[i]);
			}
		}
		return list;
	}

	public GetItemListByType(tab: eItemTab)
	{
		let list: ItemData[] = [];
		let types = this.getTypesByTab(tab);
		let items = this.dict.getValues();
		for (let i = 0; i < items.length; i++)
		{
			for (var j = 0; j < types.length; j++)
			{
				var type = types[j];
				if (items[i].itemType == type && items[i].count > 0 && items[i].itemConfig)
				{
					list.push(items[i]);
					break;
				}
			}
		}
		return list;
	}

	private getTypesByTab(tab:eItemTab = eItemTab.NormalItem): number[]
	{
		let types = [5,8,9,17,30];
		switch (tab) {
			case eItemTab.NormalItem:
				types = [5,8,9,17,30];
				break;
			case eItemTab.PropertyItem:
				types = [6];
			break;
			case eItemTab.ContractItem:
				types = [7,16];
			break;
			default:
				types = [5,8,9,17,30];
				break;
		}
		return types;
	}


	// 获取物品, 用uuid
	getItemByUuid(uuid: string): ItemData
	{
		if (this.dictByUuid.hasKey(uuid))
		{
			return this.dictByUuid.getValue(uuid);
		}
		else
		{
			return null;
		}
	}


	// 获取物品数量, 用uuid
	getItemNumByUuid(uuid: string): number
	{
		let item = this.getItemByUuid(uuid);
		if (item)
		{
			return item.count;
		}
		return 0;
	}



	// 获取物品
	getItem(itemId: number): ItemData
	{
		if (this.dict.hasKey(itemId))
		{
			return this.dict.getValue(itemId);
		}
		else
		{
			let item = ItemData.Create(itemId, 0);
			this.dict.add(itemId, item);
			return item;
		}
	}

	// 获取物品数量文本
	getItemNumTxt(itemId: number): string
	{
		return formatNumberUnit(this.getItemNum(itemId));
	}

	// 获取物品数量
	getItemNum(itemId: number): number
	{
		let item = this.getItem(itemId);
		if (item)
		{
			return item.count;
		}
		return 0;
	}

	// 设置物品数量
	setItemNum(itemId: number, itemNum: number, createTime?: number,uuid?: string): void
	{
		let item: ItemData;

		if (uuid)
		{
			item = this.getItemByUuid(uuid);

			if (!item && itemId > 0)
			{
				item = this.getItem(itemId);
				item.uid = uuid;
				this.dictByUuid.add(uuid, item);
			}
		}

		if (!item)
		{
			item = this.getItem(itemId);
		}

		item.count = itemNum;

		if (createTime !== undefined)
		{
			item.obtainTime = createTime;
		}
	}

	// 是否满足物品数量
	hasItemNum(itemId: number, needNum: number): boolean
	{
		return this.getItemNum(itemId) >= needNum;
	}

}