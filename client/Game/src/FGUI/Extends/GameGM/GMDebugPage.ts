import GMDebugPageStruct from "../../Generates/GameGM/GMDebugPageStruct";
import GMLogItem from "./GMLogItem";
import Handler = Laya.Handler;
import GMWindow from "../../../GM/GMWindow";
import { GMDeubgMenuType } from "../../../GM/GMDeubgMenuType";
import LogItem from "../../../GameFrame/Log/LogItem";
import Log from "../../../GameFrame/Log/Log";

/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class GMDebugPage extends GMDebugPageStruct
{


	// 窗口
	moduleWindow: GMWindow;

	// 数量列表
	dataList: LogItem[] = [];

	// 窗口初始化完毕
	onWindowInited(): void
	{
		this.m_subMenuBar.setListData(GMDeubgMenuType.list);
		this.m_subMenuBar.sOnSelect.add(this.onClickSubMenu, this);
		this.m_subMenuBar.select = GMDeubgMenuType.list;
		this.m_clearButton.onClick(this, this.onClickClear);
		this.m_refreshButton.onClick(this, this.refreshList);
	}


	get selectSubMenu(): string[]
	{
		return this.m_subMenuBar.select;
	}



	onClickSubMenu(menu: string)
	{
		setTimeout(() =>
		{
			this.refreshList();
		}, 10);
	}


	onClickClear()
	{
		Log.clear();
		this.refreshList();
	}

	refreshList()
	{
		let menus = this.selectSubMenu;
		let items = Log.mineloger.getListByTypes(GMDeubgMenuType.getLogTypes(menus));
		this.setList(items);
	}

	setList(items)
	{
		this.dataList = items;
		let list = this.m_list;
		list.setVirtual();
		list.setVirtualAndLoop();
		if (!list.itemRenderer) list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
		list.numItems = items.length;
		if (list.numItems > 0)
			list.scrollToView(list.numItems - 1);
	}


	renderListItem(index: number, item: GMLogItem)
	{
		let data = this.dataList[index];
		item.setData(data);
	}
}