/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameLaunchBinder from "./GameLaunch/GameLaunchBinder";
import ModuleLoginBinder from "./ModuleLogin/ModuleLoginBinder";
import SoundBinder from "./Sound/SoundBinder";

export default class GuiBinderList
{
	static fguiBinderAll()
	{
		GameLaunchBinder.bindAll()
		ModuleLoginBinder.bindAll()
		SoundBinder.bindAll()
	}
}