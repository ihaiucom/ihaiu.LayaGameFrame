import GMSubMenuRadioBarStruct from "../../Generates/GameGM/GMSubMenuRadioBarStruct";
import TypedSignal from "../../../Libs/signals/TypedSignal";
import Handler = Laya.Handler;

export default class GMSubMenuRadioBar extends GMSubMenuRadioBarStruct
{
	sOnSelect: TypedSignal<string> = new TypedSignal<string>();

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

	set select(menu: string)
	{
		this.m_subMenu.selectedIndex = this.listData.indexOf(menu);
		this.sOnSelect.dispatch(menu);
	}

	get select(): string
	{
		if (this.m_subMenu.selectedIndex >= 0)
		{
			return this.listData[this.m_subMenu.selectedIndex];
		}
		return null;
	}


	renderListItem(index: number, item: fairygui.GButton)
	{
		item.title = this.listData[index];
	}


	onClickItem(item: fairygui.GButton, ...args)
	{
		this.sOnSelect.dispatch(item.title);
	}


}