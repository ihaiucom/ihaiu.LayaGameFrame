import GMMainStruct from "../../Generates/GameGM/GMMainStruct";
import GMWindow from "../../../GM/GMWindow";

export default class GMMain extends GMMainStruct
{

	// 窗口
	moduleWindow: GMWindow;

	// 窗口初始化完毕
	onWindowInited(): void
	{
		this.m_closeButton.onClick(this.moduleWindow, this.moduleWindow.onMenuClose);
	}
}