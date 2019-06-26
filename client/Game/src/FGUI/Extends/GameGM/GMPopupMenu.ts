import GMPopupMenuStruct from "../../Generates/GameGM/GMPopupMenuStruct";
import TypedSignal from "../../../Libs/signals/TypedSignal";
import GMPopupMenu_item from "./GMPopupMenu_item";

export default class GMPopupMenu extends GMPopupMenuStruct
{
	listData: string[] = [];
	sOnSelect: TypedSignal<string> = new TypedSignal<string>();
	mainButton: fairygui.GButton;

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		this.m_list.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
	}

	setListData(listData: string[])
	{
		this.listData = listData;
		let list = this.m_list;
		list.removeChildrenToPool();
		for (let i = 0; i < listData.length; i++)
		{
			let item = <GMPopupMenu_item>list.addItemFromPool();
			item.title = listData[i];
		}


		list.resizeToFit();
	}



	onClickItem(item: fairygui.GButton, ...args)
	{
		this.onselect(item.title);
		this.removeFromParent();
	}

	private onselect(value: string)
	{
		this.sOnSelect.dispatch(value);
		if (this.mainButton)
		{
			this.mainButton.title = value;
		}
	}

	setSelect(value: string)
	{
		let index = this.listData.indexOf(value);
		this.m_list.addSelection(index, true);

		this.onselect(value);
	}

}