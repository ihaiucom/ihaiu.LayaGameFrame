/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LaunchLoaderPanel from "./LaunchLoaderPanel";
import ProgressRedBar from "./ProgressRedBar";
import BarSquare from "./BarSquare";

export default class GameLaunchBinder{
	public static bindAll():void {
		fairygui.UIObjectFactory.setPackageItemExtension(LaunchLoaderPanel.URL, LaunchLoaderPanel);
		fairygui.UIObjectFactory.setPackageItemExtension(ProgressRedBar.URL, ProgressRedBar);
		fairygui.UIObjectFactory.setPackageItemExtension(BarSquare.URL, BarSquare);
	}
}