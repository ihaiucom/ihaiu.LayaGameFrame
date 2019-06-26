import GMCmdItemStruct from "../../Generates/GameGM/GMCmdItemStruct";
import GM from "../../../GM/GM";
import GMCmdPage from "./GMCmdPage";
import { GMCmdItemData } from "../../../GM/GMCmdItemData";
import GMCmdSubMenuType from "../../../GM/GMCmdSubMenuType";

export default class GMCmdItem extends GMCmdItemStruct
{
	cmdPage: GMCmdPage;
	itemData: GMCmdItemData;


	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);

		this.m_button.onClick(this, this.onClickButton);
	}

	setItemData(itemData: GMCmdItemData)
	{
		this.itemData = itemData;
		this.m_title.text = itemData.datatxt;
		this.m_name.text = itemData.title;
	}

	onClickButton()
	{
		try
		{
			let json = JSON.parse(this.m_title.text);
			this.itemData.data = json;
			this.itemData.datatxt = this.m_title.text;
		}
		catch (error)
		{
			console.error(error);
		}

		GM.sendCmd(this.itemData.name, this.itemData, this.cmdPage.selectSubMenu != GMCmdSubMenuType.HISTORY);

	}
}