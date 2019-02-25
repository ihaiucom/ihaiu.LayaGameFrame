/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GameLaunchBinder from "./GameLaunch/GameLaunchBinder";
import SoundBinder from "./Sound/SoundBinder";

export default class GuiBinderList
{
	static fguiBinderAll()
	{
		GameLaunchBinder.bindAll()
		SoundBinder.bindAll()
	}
}