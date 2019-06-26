import GMAddItemStruct from "../../Generates/GameGM/GMAddItemStruct";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import Game from "../../../Game";
import GMAddType from "../../../GM/GMAddType";

/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class GMAddItem extends GMAddItemStruct
{
	type: GMAddType;
	itemData: ItemData;
	// actorConfig: ActorConfig;
	// storyConfig: StoryConfig;
	// labelConfig: LabelConfig;
	// informationData: InformationData;
	


	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);

		this.m_button.onClick(this, this.onClickAddButton);
		this.m_num.onClick(this, this.onClickNum);
		this.m_numberInput.value = 10000;
	}

	onClickNum()
	{
		this.m_numberInput.value = this.itemData.count * -1;
	}

	onClickAddButton()
	{
		let cmd;
		let num = this.m_numberInput.value;
		// if(this.type == GMAddType.Actor)
		// {
		// 	cmd = `//addactor ${this.actorConfig.id}`;
		// }
		// else if(this.type == GMAddType.Story)
		// {
		// 	cmd = `//addstory ${this.storyConfig.id}`;
		// }
		// else if(this.type == GMAddType.Information)
		// {
		// 	cmd = `//addinfo ${this.labelConfig.id} ${num}`;
		// }
		// else
		{
			if(num >= 0)
				cmd = `//additem ${this.itemData.id} ${num}`;
			else
				cmd = `//subitem ${this.itemData.id} ${-num}`;
		}
		
		Game.sender.gm.gmCommand(cmd);
		// switch (this.itemData.id)
		// {
		// 	case Proto.SE.EItemId.fans:
		// 		Game.protosender.test.AddFans(this.m_numberInput.value);
		// 		break;
		// 	case 8:
		// 		Game.protosender.test.AddExpect(this.m_numberInput.value);
		// 		break;
		// 	default:
		// 		Game.protosender.test.AddItem(this.itemData.itemId, this.m_numberInput.value);
		// 		break;
		// }

		setTimeout(() =>
		{
			this.refreshState();
		}, 100);
	}

	// 物品
	setItemData(itemData: ItemData)
	{
		this.itemData = itemData;
		this.m_id.text = itemData.id + "";
		this.m_title.text = itemData.itemName;
		this.m_describe.text = itemData.itemDes;
		this.m_num.text = itemData.count + "";
		this.m_icon.url = itemData.itemIconUrl;
		this.m_numberInput.visible = true;
		this.m_button.visible = true;
	}

	
	// // 艺人
	// setActor(config: ActorConfig)
	// {
	// 	let actorData = Game.moduleModel.actor.getActor(config.id);
	// 	this.actorConfig = config;
	// 	this.m_icon.url = config.bodyIconUrl;
	// 	this.m_id.text = config.id + "";
	// 	this.m_title.text = config.name;
	// 	this.m_numberInput.visible = false;
	// 	if(actorData)
	// 	{
	// 		this.m_describe.text = actorData.levelTxt;
	// 		this.m_button.visible = false;
	// 	}
	// 	else
	// 	{
	// 		this.m_describe.text = config.tips;
	// 		this.m_button.visible = true;
	// 	}
	// }

	// // 剧本
	// setStory(config: StoryConfig)
	// {
	// 	let data = Game.moduleModel.story.getStorySeriesData(config.id);
	// 	this.storyConfig = config;
	// 	this.m_icon.url = config.iconUrl;
	// 	this.m_id.text = config.id + "";
	// 	this.m_title.text = config.filmName;
	// 	this.m_numberInput.visible = false;
	// 	this.m_describe.text =`${ config.starNumber  }星  ${config.filmType}  ${config.storyTags}`  ;
	// 	if(data)
	// 	{
	// 		this.m_button.visible = false;
	// 	}
	// 	else
	// 	{
	// 		this.m_button.visible = true;
	// 	}
	// }

	// // 情报
	// setInformation(data: LabelConfig)
	// {
	// 	this.labelConfig = data;
	// 	this.informationData = Game.moduleModel.information.getInformationData(data.id);
		
	// 	this.m_id.text = data.id + "";
	// 	this.m_title.text = data.typeName +  data.name;
	// 	this.m_describe.text = "";
	// 	this.m_num.text = (this.informationData ? this.informationData.count : 0) + "";
	// 	this.m_icon.url = data.iconUrl;
	// 	this.m_numberInput.visible = true;
	// 	this.m_button.visible = true;
	// }

	// 刷新
	refreshState()
	{
		// // 艺人
		// if(this.type == GMAddType.Actor)
		// {
		// 	if(this.actorConfig)
		// 	{
		// 		let data = Game.moduleModel.actor.getActor(this.actorConfig.id);

		// 		if(data)
		// 		{
		// 			this.m_describe.text = data.levelTxt;
		// 			this.m_button.visible = false;
		// 		}
		// 		else
		// 		{
		// 			this.m_describe.text = this.actorConfig.tips;
		// 			this.m_button.visible = true;
		// 		}
		// 	}
		// }
		// // 剧本
		// else if(this.type == GMAddType.Story)
		// {
		// 	if(this.storyConfig)
		// 	{
		// 		let data = Game.moduleModel.story.getStorySeriesData(this.storyConfig.id);

		// 		if(data)
		// 		{
		// 			this.m_button.visible = false;
		// 		}
		// 		else
		// 		{
		// 			this.m_button.visible = true;
		// 		}
		// 	}
		// }
		// // 情报
		// else if(this.type == GMAddType.Information)
		// {
		// 	if (this.labelConfig)
		// 	{
		// 		this.setInformation(this.labelConfig);
		// 	}
		// }
		// // 物品
		// else
		{
			if (this.itemData)
			{
				this.m_num.text = this.itemData.count + "";
			}
		}
	}

	


	// 该组件所在Tab 显示
	onTabShow(): void
	{
		this.refreshState();
	}

	// 窗口显示
	onWindowShow(): void
	{
		this.refreshState();
	}



}