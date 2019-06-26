import GMSubMenuBarStruct from "../../Generates/GameGM/GMSubMenuBarStruct";
import TypedSignal from "../../../Libs/signals/TypedSignal";
import Handler = Laya.Handler;

export default class GMSubMenuBar extends GMSubMenuBarStruct
{
	sOnSelect: TypedSignal<string[]> = new TypedSignal<string[]>();

	listData: string[];
	setListData(listData: string[])
	{
		this.listData = listData;

		let list = this.m_subMenu;
		list.setVirtual();
		list.setVirtualAndLoop();

		list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
		list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
		list.numItems = listData.length;
	}

	set select(menus: string[])
	{
		this.m_subMenu.clearSelection();
		for (let i = 0; i < this.listData.length; i++)
		{
			if (menus.indexOf(this.listData[i]) != -1)
			{
				this.m_subMenu.addSelection(i);
			}
		}
		this.sOnSelect.dispatch(menus);
	}

	get select(): string[]
	{
		let list = this.m_subMenu.getSelection();
		let menus = [];
		for (let i = 0; i < list.length; i++)
		{
			menus.push(this.listData[list[i]]);
		}
		return menus;
	}


	renderListItem(index: number, item: fairygui.GButton)
	{
		item.title = this.listData[index];
	}


	onClickItem(item: fairygui.GButton, ...args)
	{
		this.sOnSelect.dispatch(this.select);
	}
}