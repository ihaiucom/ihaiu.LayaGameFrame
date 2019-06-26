import GMCmdPageStruct from "../../Generates/GameGM/GMCmdPageStruct";
import GMWindow from "../../../GM/GMWindow";
import { GMCmdItemData } from "../../../GM/GMCmdItemData";
import GMCmdSubMenuType from "../../../GM/GMCmdSubMenuType";
import GM from "../../../GM/GM";
import Handler = Laya.Handler;
import GMCmdItem from "./GMCmdItem";
import GameURL from "../../../Config/Keys/GameURL";

export default class GMCmdPage extends GMCmdPageStruct
{

	// 窗口
	moduleWindow: GMWindow;

	// 数量列表
	dataList: GMCmdItemData[] = [];

	// 窗口初始化完毕
	onWindowInited(): void
	{
		this.m_subMenuBar.setListData(GMCmdSubMenuType.list);
		this.m_subMenuBar.sOnSelect.add(this.onClickSubMenu, this);
		this.m_subMenuBar.select = GMCmdSubMenuType.Server;
		this.m_sendButton.onClick(this, this.onClickSend);
		this.m_clearButton.onClick(this, this.onClickClear);




		GM.historCmd.read();

		Laya.loader.load(GameURL.serverCmdUrl, Handler.create(this, this.onLoadJson, [GameURL.serverCmdUrl]));
		Laya.loader.load(GameURL.clientCmdUrl, Handler.create(this, this.onLoadJson, [GameURL.clientCmdUrl]));
	}

	get inputTxt(): string
	{
		return this.m_input.m_title.text;
	}

	set inputTxt(value: string)
	{
		this.m_input.m_title.text = value;
	}

	get selectSubMenu(): string
	{
		return this.m_subMenuBar.select;
	}



	onLoadJson(url)
	{
		let cmdList = Laya.loader.getRes(url);
		if (!cmdList)
			return;
		cmdList = isString(cmdList) ? JSON.parse(cmdList) : <GMCmdItemData[]>cmdList;
		switch (url)
		{
			case GameURL.serverCmdUrl:
				GM.serverCmd.setList(cmdList, false);
				break;
			case GameURL.clientCmdUrl:
				GM.clientCmd.setList(cmdList, true);
				break;
		}
		this.refreshList();
	}


	onClickSubMenu(menu: string)
	{
		this.m_clearButton.visible = menu == GMCmdSubMenuType.HISTORY;
		setTimeout(() =>
		{
			this.refreshList();
		}, 10);
	}

	onClickSend()
	{
		let isProto = false;
		let str = this.inputTxt;
		if (str.startsWith("eval"))
		{
			eval(str.replace("eval", ""));
		}

		let arr = this.inputTxt.split("\n");
		for (let i = 0; i < arr.length; i++)
		{
			let item = arr[i];
			if(!isNullOrEmpty(item))
				GM.send(item);
		}

		this.m_subMenuBar.select = GMCmdSubMenuType.HISTORY;

		// if (!isProto)
		// {
		// 	eval(str);
		// }
	}

	onClickClear()
	{
		GM.historCmd.clear();
		GM.clientCmd.clearCache();
		GM.serverCmd.clearCache();
		this.refreshList();
	}

	refreshList()
	{
		switch (this.selectSubMenu)
		{
			case GMCmdSubMenuType.Server:
				this.setList(GM.serverCmd.list);
				break;
			case GMCmdSubMenuType.Client:
				this.setList(GM.clientCmd.list);
				break;
			case GMCmdSubMenuType.HISTORY:
				this.setList(GM.historCmd.list);
				break;
		}
	}

	setList(items)
	{
		this.dataList = items;
		let list = this.m_list;
		list.setVirtual();
		list.setVirtualAndLoop();
		if (!list.itemRenderer) list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
		list.numItems = items.length;
	}


	renderListItem(index: number, item: GMCmdItem)
	{
		let data: GMCmdItemData = this.dataList[index];
		item.cmdPage = this;
		item.setItemData(data);
	}
}