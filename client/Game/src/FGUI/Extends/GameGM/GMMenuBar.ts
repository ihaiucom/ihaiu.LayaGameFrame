import GMMenuBarStruct from "../../Generates/GameGM/GMMenuBarStruct";
import GMWindow from "../../../GM/GMWindow";
import Handler = Laya.Handler;
import GMMenuType from "../../../GM/GMMenuType";

export default class GMMenuBar extends GMMenuBarStruct
{
	// 窗口
	moduleWindow: GMWindow;

	// 窗口初始化完毕
	onWindowInited(): void
	{

		this.m_menuList.setVirtual();
		this.m_menuList.setVirtualAndLoop();

		this.m_menuList.itemRenderer = Handler.create(this, this.renderListItem, null, false);
		this.m_menuList.numItems = GMMenuType.list.length;

		this.m_menuList.on(fairygui.Events.CLICK_ITEM, this, this.onClickItem);
	}

	renderListItem(index: number, obj: fairygui.GButton)
	{
		obj.title = GMMenuType.list[index];
	}

	onClickItem(item: fairygui.GButton, ...args)
	{
		this.moduleWindow.openTab(item.title);
	}

	setSelect(menu: TKey)
	{
		let index = GMMenuType.list.indexOf(<string>menu);
		this.m_menuList.addSelection(index, true);
	}
}