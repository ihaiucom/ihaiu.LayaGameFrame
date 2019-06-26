/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Dictionary from "../../Libs/Helpers/Dictionary";
import GuiSetting from "../GuiSetting";

export default class SoundKey
{
	private static _idDict: Dictionary<string, string>;
	static get idDict(): Dictionary<string, string>
	{
		if (!SoundKey._idDict)
		{
			SoundKey.init();
		}
		return SoundKey._idDict;
	}


	private static _extDict: Dictionary<string, string>;
	static get extDict(): Dictionary<string, string>
	{
		if (!SoundKey._extDict)
		{
			SoundKey.init();
		}
		return SoundKey._extDict;
	}

	public static getId(key: string): string
	{
		if (!SoundKey.idDict.hasKey(key))
		{
			console.error("SoundKey 不存在 key=" + key);
			return "";
		}
		return SoundKey.idDict.getValue(key);
	}

	public static getUrl(key: string): string
	{
		return `ui://${SoundKey.SoundPackageId}${SoundKey.getId(key)}`
	}


	public static getPath(key: string): string
	{
		return GuiSetting.getResPath(`${SoundKey.SoundPackageName}_${SoundKey.getId(key)}${SoundKey.extDict.getValue(key)}`, "fgui")
	}


	private static init()
	{
		let dict = SoundKey._idDict = new Dictionary<string, string>();
		dict.add( "MM_BGM_Cinema.mp3", "s3xz1n");
		dict.add( "MM_BGM_Propaganda.mp3", "s3xz1o");
		dict.add( "MM_BGM_RoadShow.mp3", "s3xz1p");
		dict.add( "MM_BGM_Award.mp3", "i7ne2w");
		dict.add( "MM_BGM_01.mp3", "tys94p");
		dict.add( "MM01_Button.wav", "tys94s");
		dict.add( "MM02_Popup.wav", "tys94t");
		dict.add( "MM03_ReachGoal.wav", "tys94u");
		dict.add( "MM04_Lose.wav", "tys94v");
		dict.add( "MM05_Upgrade.wav", "tys94w");
		dict.add( "MM06_Building.wav", "tys94x");
		dict.add( "MM07_GoldMuch.wav", "tys94y");
		dict.add( "MM08_GoldLess.wav", "tys94z");
		dict.add( "MM09_GoldReward.wav", "tys950");
		dict.add( "MM11_NewsPaperTop.wav", "tys951");
		dict.add( "MM12_RecruitArtist.wav", "tys952");
		dict.add( "MM13_GetArtist.wav", "tys953");
		dict.add( "MM14_ArtistGradeUp.wav", "tys954");
		dict.add( "MM15_Propaganda.wav", "tys955");
		dict.add( "MM16_ScriptRolling.wav", "tys956");
		dict.add( "MM17_FoundArtist.wav", "tys957");
		dict.add( "MM18_Screen.wav", "tys958");
		dict.add( "MM19_ArtistShow.wav", "tys959");
		dict.add( "MM20_ArtistData.wav", "tys95a");
		dict.add( "MM21_ArtistAccord.wav", "tys95b");
		dict.add( "MM22_ScreenOver.wav", "tys95c");
		dict.add( "MM23_Premiere.wav", "tys95d");
		dict.add( "MM24_NiceScore1.wav", "tys95e");
		dict.add( "MM25_NiceScore2.wav", "tys95f");
		dict.add( "MM26_NiceScore3.wav", "tys95g");
		dict.add( "MM27_TicketsOrdinary.wav", "tys95h");
		dict.add( "MM28_TicketsGood.wav", "tys95i");
		dict.add( "MM29_TicketsGreat.wav", "tys95j");
		dict.add( "MM30_Settlements.wav", "tys95k");
		dict.add( "MM31_ClickScreenMenu.wav", "tys95l");
		dict.add( "MM32_GetScript .wav", "tys95m");
		dict.add( "MM33_NiceScore4.wav", "tys95n");
		dict.add( "MM34_CultrueArtist.wav", "tys95o");

		let exts = SoundKey._extDict = new Dictionary<string, string>();
		exts.add( "MM_BGM_Cinema.mp3", ".mp3");
		exts.add( "MM_BGM_Propaganda.mp3", ".mp3");
		exts.add( "MM_BGM_RoadShow.mp3", ".mp3");
		exts.add( "MM_BGM_Award.mp3", ".mp3");
		exts.add( "MM_BGM_01.mp3", ".mp3");
		exts.add( "MM01_Button.wav", ".wav");
		exts.add( "MM02_Popup.wav", ".wav");
		exts.add( "MM03_ReachGoal.wav", ".wav");
		exts.add( "MM04_Lose.wav", ".wav");
		exts.add( "MM05_Upgrade.wav", ".wav");
		exts.add( "MM06_Building.wav", ".wav");
		exts.add( "MM07_GoldMuch.wav", ".wav");
		exts.add( "MM08_GoldLess.wav", ".wav");
		exts.add( "MM09_GoldReward.wav", ".wav");
		exts.add( "MM11_NewsPaperTop.wav", ".wav");
		exts.add( "MM12_RecruitArtist.wav", ".wav");
		exts.add( "MM13_GetArtist.wav", ".wav");
		exts.add( "MM14_ArtistGradeUp.wav", ".wav");
		exts.add( "MM15_Propaganda.wav", ".wav");
		exts.add( "MM16_ScriptRolling.wav", ".wav");
		exts.add( "MM17_FoundArtist.wav", ".wav");
		exts.add( "MM18_Screen.wav", ".wav");
		exts.add( "MM19_ArtistShow.wav", ".wav");
		exts.add( "MM20_ArtistData.wav", ".wav");
		exts.add( "MM21_ArtistAccord.wav", ".wav");
		exts.add( "MM22_ScreenOver.wav", ".wav");
		exts.add( "MM23_Premiere.wav", ".wav");
		exts.add( "MM24_NiceScore1.wav", ".wav");
		exts.add( "MM25_NiceScore2.wav", ".wav");
		exts.add( "MM26_NiceScore3.wav", ".wav");
		exts.add( "MM27_TicketsOrdinary.wav", ".wav");
		exts.add( "MM28_TicketsGood.wav", ".wav");
		exts.add( "MM29_TicketsGreat.wav", ".wav");
		exts.add( "MM30_Settlements.wav", ".wav");
		exts.add( "MM31_ClickScreenMenu.wav", ".wav");
		exts.add( "MM32_GetScript .wav", ".wav");
		exts.add( "MM33_NiceScore4.wav", ".wav");
		exts.add( "MM34_CultrueArtist.wav", ".wav");
	}


	static SoundPackageName = "Sound";
	static SoundPackageId =  "44whq70o";
	
	public static MM_BGM_Cinema  = "MM_BGM_Cinema.mp3";
	public static MM_BGM_Propaganda  = "MM_BGM_Propaganda.mp3";
	public static MM_BGM_RoadShow  = "MM_BGM_RoadShow.mp3";
	public static MM_BGM_Award  = "MM_BGM_Award.mp3";
	public static MM_BGM_01  = "MM_BGM_01.mp3";
	public static MM01_Button  = "MM01_Button.wav";
	public static MM02_Popup  = "MM02_Popup.wav";
	public static MM03_ReachGoal  = "MM03_ReachGoal.wav";
	public static MM04_Lose  = "MM04_Lose.wav";
	public static MM05_Upgrade  = "MM05_Upgrade.wav";
	public static MM06_Building  = "MM06_Building.wav";
	public static MM07_GoldMuch  = "MM07_GoldMuch.wav";
	public static MM08_GoldLess  = "MM08_GoldLess.wav";
	public static MM09_GoldReward  = "MM09_GoldReward.wav";
	public static MM11_NewsPaperTop  = "MM11_NewsPaperTop.wav";
	public static MM12_RecruitArtist  = "MM12_RecruitArtist.wav";
	public static MM13_GetArtist  = "MM13_GetArtist.wav";
	public static MM14_ArtistGradeUp  = "MM14_ArtistGradeUp.wav";
	public static MM15_Propaganda  = "MM15_Propaganda.wav";
	public static MM16_ScriptRolling  = "MM16_ScriptRolling.wav";
	public static MM17_FoundArtist  = "MM17_FoundArtist.wav";
	public static MM18_Screen  = "MM18_Screen.wav";
	public static MM19_ArtistShow  = "MM19_ArtistShow.wav";
	public static MM20_ArtistData  = "MM20_ArtistData.wav";
	public static MM21_ArtistAccord  = "MM21_ArtistAccord.wav";
	public static MM22_ScreenOver  = "MM22_ScreenOver.wav";
	public static MM23_Premiere  = "MM23_Premiere.wav";
	public static MM24_NiceScore1  = "MM24_NiceScore1.wav";
	public static MM25_NiceScore2  = "MM25_NiceScore2.wav";
	public static MM26_NiceScore3  = "MM26_NiceScore3.wav";
	public static MM27_TicketsOrdinary  = "MM27_TicketsOrdinary.wav";
	public static MM28_TicketsGood  = "MM28_TicketsGood.wav";
	public static MM29_TicketsGreat  = "MM29_TicketsGreat.wav";
	public static MM30_Settlements  = "MM30_Settlements.wav";
	public static MM31_ClickScreenMenu  = "MM31_ClickScreenMenu.wav";
	public static MM32_GetScript  = "MM32_GetScript .wav";
	public static MM33_NiceScore4  = "MM33_NiceScore4.wav";
	public static MM34_CultrueArtist  = "MM34_CultrueArtist.wav";
}