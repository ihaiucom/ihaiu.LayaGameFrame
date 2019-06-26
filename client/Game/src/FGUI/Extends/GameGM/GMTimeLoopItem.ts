import GMTimeLoopItemStruct from "../../Generates/GameGM/GMTimeLoopItemStruct";
import DebugTimerLoop from "../../../GM/DebugTimerLoop";

export default class GMTimeLoopItem extends GMTimeLoopItemStruct
{

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		this.m_visiable.onClick(this, this.onClickEnableButton);


	}

	data: DebugTimerLoop;
	// tickData: Tick;
	tickData: any;
	setItemData(data: DebugTimerLoop)
	{
		this.data = data;
		this.m_visiable.selected = data.enable;
		this.m_title.text = data.toString();
	}


	setTickData(data: any)
	{
		this.tickData = data;
		this.m_visiable.selected = data.debugEnable;
		this.m_title.text = data.toString();
	}


	onClickEnableButton()
	{
		if (this.data)
		{
			this.data.enable = !this.data.enable;
		}

		if (this.tickData)
		{
			this.tickData.debugEnable = !this.tickData.debugEnable;
		}
	}
}