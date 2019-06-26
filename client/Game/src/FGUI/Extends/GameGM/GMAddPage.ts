import GMAddPageStruct from "../../Generates/GameGM/GMAddPageStruct";
import Game from "../../../Game";
import ItemConfig from "../../../Config/ConfigExtends/ItemConfig";
import GMAddType from "../../../GM/GMAddType";
import GMAddItem from "./GMAddItem";
import Handler = Laya.Handler;
import GMWindow from "../../../GM/GMWindow";
import GMPopupMenu from "./GMPopupMenu";
/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class GMAddPage extends GMAddPageStruct
{
	// 窗口
	moduleWindow: GMWindow;

	private popupMenu: GMPopupMenu;

	// 窗口初始化完毕
	onWindowInited(): void
	{

		this.popupMenu = GMPopupMenu.createInstance();
		this.popupMenu.mainButton = this.m_popupButton;
		this.popupMenu.sOnSelect.add(this.onSelectePopupItem, this)
		this.popupMenu.setListData(GMAddType.list);
		this.popupMenu.center();
		this.m_popupButton.onClick(this, this.onClickPopupButton);
		this.selectPopupItem(GMAddType.Item);

		this.m_listTopButton.onClick(this, this.onClickListTopButton);
		this.m_listBottomButton.onClick(this, this.onClickListBottomButton);


		this.m_filterInput.m_title.on(laya.events.Event.INPUT, this, this.onFilterInput);
		this.m_filterCheckbox.onClick(this, this.onClickFilterCheckbox);


	}

	get isFilter(): boolean
	{
		return this.m_filterCheckbox.selected;
	}

	set isFilter(val: boolean)
	{
		this.m_filterCheckbox.selected = val;
	}

	get isUseFilter()
	{
		return this.isFilter && isNullOrEmpty(this.m_filterInput.m_title.text.trim())
	}

	onClickFilterCheckbox()
	{
		setTimeout(() =>
		{
			if (this.isUseFilter)
			{
				this.onFilterInput();
			}
			else
			{
				this.noFilter();
			}
		}, 100);


	}

	// 过滤输入框改变
	onFilterInput()
	{
		if (!this.isFilter)
		{
			return;
		}


		let txt = this.m_filterInput.m_title.text.trim();
		if (isNullOrEmpty(txt))
		{
			this.noFilter();
			return;
		}

		let mathList: ItemConfig[] = [];
		if (txt.startsWith("id:"))
		{
			txt = txt.replace("id:", "");
			let arr = txt.split(/[, ;]/);
			for (let i = 0; i < arr.length; i++)
			{
				arr[i] = arr[i].trim();
			}
			let items: ItemConfig[] = Game.config.item.getConfigList();
			for (let i = 0; i < items.length; i++)
			{
				for (let j = 0; j < arr.length; j++)
				{
					if (items[i].id.toString() == arr[j])
					{
						mathList.push(items[i]);
						break;
					}
				}
			}
		}
		else if (txt.startsWith("type:"))
		{

			txt = txt.replace("type:", "");
			let arr = txt.split(/[, ;]/);
			for (let i = 0; i < arr.length; i++)
			{
				arr[i] = arr[i].trim();
			}
			let items: ItemConfig[] = Game.config.item.getConfigList();
			for (let i = 0; i < items.length; i++)
			{
				for (let j = 0; j < arr.length; j++)
				{
					if (items[i].type.toString() == arr[j])
					{
						mathList.push(items[i]);
						break;
					}
				}
			}
		}
		else
		{
			let arr = txt.split(/[, ;]/);

			let items: ItemConfig[] = Game.config.item.getConfigList();
			for (let i = 0; i < items.length; i++)
			{
				for (let j = 0; j < arr.length; j++)
				{
					if (items[i].name.indexOf(arr[j]) != -1 || items[i].id.toString().indexOf(arr[j]) != -1)
					{
						mathList.push(items[i]);
						break;
					}
				}
			}
		}




		this.setFilterData(mathList);
	}

	noFilter()
	{
		this.setListData(this.listData);
	}

	currentPopupIndex: string;


	// 点击弹窗菜单按钮		
	onClickPopupButton()
	{
		fairygui.GRoot.inst.showPopup(this.popupMenu, this.m_popupButton, true);
	}

	// 选中弹窗菜单
	onSelectePopupItem(index: string)
	{
		console.log("onSelectePopupItem " + index);
		this.currentPopupIndex = index;
		// // 艺人
		// if(this.currentPopupIndex == GMAddType.Actor)
		// {
		// 	let items: ActorConfig[] = Game.config.actor.getConfigList();
		// 	this.setListData(items);
		// }
		// // 剧本
		// else if(this.currentPopupIndex == GMAddType.Story)
		// {
		// 	let items: StoryConfig[] = Game.config.story.getConfigList();
		// 	this.setListData(items);
		// }
		// // 情报
		// else if(this.currentPopupIndex == GMAddType.Information)
		// {
		// 	let items: LabelConfig[] = Game.config.label.imformations;
		// 	this.setListData(items);
		// }
		// // 物品
		// else
		{
			this.setItemPopup();
		}
	}

	// 选中弹窗菜单
	selectPopupItem(index: string)
	{
		this.popupMenu.setSelect(index);
	}



	// 该组件所在Tab 显示
	onTabShow(): void
	{

	}

	// 该组件所在Tab 隐藏
	onTabHide(): void
	{

	}


	//------------------------------

	// 点击列表 Top		
	onClickListTopButton()
	{
		this.m_list.scrollPane.scrollTop();

	}

	// 点击列表 Bottom
	onClickListBottomButton()
	{
		this.m_list.scrollPane.scrollBottom();
	}

	//------------------------------

	// 列表数据		
	listData: any[] = [];
	filterData: any[] = [];

	useListData: any[] = [];

	// get useListData(): any[]
	// {
	// 	if (this.isUseFilter)
	// 	{
	// 		return this.filterData;
	// 	}
	// 	else
	// 	{
	// 		return this.listData;
	// 	}
	// }


	getData(index: number)
	{
		return this.useListData[index];
	}


	// 物品		
	setItemPopup()
	{
		let items: ItemConfig[] = [];

		let itemTypes: number[] = GMAddType.getItemTypes(this.currentPopupIndex);
		if (!itemTypes || itemTypes.length == 0)
		{
			items = Game.config.item.getConfigList();
		}
		else
		{
			items = Game.config.item.getConfigsByType(...itemTypes);
		}
		this.setListData(items);
	}

	// 设置正常数据列表		
	setListData(items: any[])
	{
		this.listData = items;
		this.refreshList(items);
	}

	// 设置过滤数据列表		
	setFilterData(items: any[])
	{
		this.filterData = items;
		this.refreshList(items);
	}

	// 刷新列表		
	refreshList(items: any[])
	{
		this.useListData = items;
		let list = this.m_list;
		list.setVirtual();
		list.setVirtualAndLoop();
		if (!list.itemRenderer) list.itemRenderer = Handler.create(this, this.renderListItem, null, false);
		list.numItems = items.length;
	}

	renderListItem(index: number, item: GMAddItem)
	{
		item.type = this.currentPopupIndex;
		let data: ItemConfig = this.getData(index);
		// let data: ItemConfig | ActorConfig | StoryConfig | LabelConfig = this.getData(index);
		// // 艺人
		// if(this.currentPopupIndex == GMAddType.Actor)
		// {
		// 	item.setActor(<ActorConfig> data);
		// }
		// // 剧本
		// if(this.currentPopupIndex == GMAddType.Story)
		// {
		// 	item.setStory(<StoryConfig> data);
		// }
		// // 情报
		// if(this.currentPopupIndex == GMAddType.Information)
		// {
		// 	item.setInformation(<LabelConfig> data);
		// }
		// // 物品
		// else if(data instanceof ItemConfig)
		{
			let itemData = Game.moduleModel.item.getItem(data.id);
			item.setItemData(itemData);
		}
	}



}