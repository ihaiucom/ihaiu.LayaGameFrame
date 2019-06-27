/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


import Effect_story_unlock from "../../Extends/CommonFx/Effect_story_unlock";
import FilmMoveShow from "../../Extends/CommonFx/FilmMoveShow";
import EffectBuildingCD from "../../Extends/CommonFx/EffectBuildingCD";
import Smoke003 from "../../Extends/CommonFx/Smoke003";
import Beat01 from "../../Extends/CommonFx/Beat01";
import StarflyAnimation from "../../Extends/CommonFx/StarflyAnimation";

export default class CommonFxBinder
{
	public static bindAll():void 
	{
		let bind = fairygui.UIObjectFactory.setPackageItemExtension;
		bind(Effect_story_unlock.URL, Effect_story_unlock);
		bind(FilmMoveShow.URL, FilmMoveShow);
		bind(EffectBuildingCD.URL, EffectBuildingCD);
		bind(Smoke003.URL, Smoke003);
		bind(Beat01.URL, Beat01);
		bind(StarflyAnimation.URL, StarflyAnimation);
	}
}