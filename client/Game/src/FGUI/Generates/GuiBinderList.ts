/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import CommonBaseBinder from "./CommonBase/CommonBaseBinder";
import CommonFxBinder from "./CommonFx/CommonFxBinder";
import CommonGameBinder from "./CommonGame/CommonGameBinder";
import GameGMBinder from "./GameGM/GameGMBinder";
import GameLaunchBinder from "./GameLaunch/GameLaunchBinder";
import ModuleBagBinder from "./ModuleBag/ModuleBagBinder";
import ModuleDailyTaskBinder from "./ModuleDailyTask/ModuleDailyTaskBinder";
import ModuleDay7ActivityBinder from "./ModuleDay7Activity/ModuleDay7ActivityBinder";
import ModuleEmailBinder from "./ModuleEmail/ModuleEmailBinder";
import ModuleLoginBinder from "./ModuleLogin/ModuleLoginBinder";
import SoundBinder from "./Sound/SoundBinder";
import SystemModuleDialogBinder from "./SystemModuleDialog/SystemModuleDialogBinder";
import SystemModuleHomeBinder from "./SystemModuleHome/SystemModuleHomeBinder";
import SystemModuleMenuBinder from "./SystemModuleMenu/SystemModuleMenuBinder";
import SystemModulePlotBinder from "./SystemModulePlot/SystemModulePlotBinder";
import __ResImageTmpBinder from "./__ResImageTmp/__ResImageTmpBinder";

export default class GuiBinderList
{
	static fguiBinderAll()
	{
		CommonBaseBinder.bindAll()
		CommonFxBinder.bindAll()
		CommonGameBinder.bindAll()
		GameGMBinder.bindAll()
		GameLaunchBinder.bindAll()
		ModuleBagBinder.bindAll()
		ModuleDailyTaskBinder.bindAll()
		ModuleDay7ActivityBinder.bindAll()
		ModuleEmailBinder.bindAll()
		ModuleLoginBinder.bindAll()
		SoundBinder.bindAll()
		SystemModuleDialogBinder.bindAll()
		SystemModuleHomeBinder.bindAll()
		SystemModuleMenuBinder.bindAll()
		SystemModulePlotBinder.bindAll()
		__ResImageTmpBinder.bindAll()
	}
}