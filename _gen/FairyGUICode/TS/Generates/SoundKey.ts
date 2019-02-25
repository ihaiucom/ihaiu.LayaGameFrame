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
		dict.add( "MM29_TicketsGreat.ogg", "806p32");
		dict.add( "MM01_Button.ogg", "r6c533");
		dict.add( "MM02_Popup.ogg", "r6c534");
		dict.add( "MM03_ReachGoal.ogg", "r6c535");
		dict.add( "MM04_Lose.ogg", "r6c536");
		dict.add( "MM05_Upgrade.ogg", "r6c537");
		dict.add( "MM06_Building.ogg", "r6c538");
		dict.add( "MM07_GoldMuch.ogg", "r6c539");
		dict.add( "MM08_GoldLess.ogg", "r6c53a");
		dict.add( "MM09_GoldReward.ogg", "r6c53b");
		dict.add( "MM10_AwardSwitching.ogg", "r6c53c");
		dict.add( "MM11_NewsPaperTop.ogg", "r6c53d");
		dict.add( "MM12_RecruitArtist.ogg", "r6c53e");
		dict.add( "MM13_GetArtist.ogg", "r6c53f");
		dict.add( "MM14_ArtistGradeUp.ogg", "r6c53g");
		dict.add( "MM15_Propaganda.ogg", "r6c53h");
		dict.add( "MM16_ScriptRolling.ogg", "r6c53i");
		dict.add( "MM17_FoundArtist.ogg", "r6c53j");
		dict.add( "MM18_Screen.ogg", "r6c53k");
		dict.add( "MM19_ArtistShow.ogg", "r6c53l");
		dict.add( "MM20_ArtistData.ogg", "r6c53m");
		dict.add( "MM21_ArtistAccord.ogg", "r6c53n");
		dict.add( "MM22_ScreenOver.ogg", "r6c53o");
		dict.add( "MM23_Premiere.ogg", "r6c53p");
		dict.add( "MM24_NiceScore1.ogg", "r6c53q");
		dict.add( "MM25_NiceScore2.ogg", "r6c53r");
		dict.add( "MM26_NiceScore3.ogg", "r6c53s");
		dict.add( "MM27_TicketsOrdinary.ogg", "r6c53t");
		dict.add( "MM28_TicketsGood.ogg", "r6c53u");
		dict.add( "MM30_Settlements.ogg", "r6c53v");
		dict.add( "MM31_ClickScreenMenu.ogg", "r6c53w");
		dict.add( "MM32_GetScript .ogg", "r6c53x");
		dict.add( "MM33_NiceScore4.ogg", "r6c53y");
		dict.add( "MM34_CultrueArtist.ogg", "r6c53z");
		dict.add( "MM35_AwardResults.ogg", "r6c540");
		dict.add( "MM36_CarAcross.ogg", "r6c541");
		dict.add( "MM37_FilmStart.ogg", "r6c542");
		dict.add( "MM38_AudienceGetIn.ogg", "r6c543");
		dict.add( "MM39_FilmShow.ogg", "r6c544");
		dict.add( "MM40_FilmScreen.ogg", "r6c545");
		dict.add( "MM41_ExpectNotices.ogg", "l1r646");
		dict.add( "MM42_FilmFemale01.mp3", "qlot4g");
		dict.add( "MM43_FilmFemale02.mp3", "qlot4h");
		dict.add( "MM44_FilmFemale03.mp3", "qlot4i");
		dict.add( "MM45_FilmFemale04.mp3", "qlot4j");
		dict.add( "MM46_FilmMale01.mp3", "qlot4k");
		dict.add( "MM47_FilmMale02.mp3", "qlot4l");
		dict.add( "MM48_FilmMale03.mp3", "qlot4m");
		dict.add( "MM49_FilmMale04.mp3", "qlot4n");
		dict.add( "MM50_FilmChangge.mp3", "qlot4o");

		let exts = SoundKey._extDict = new Dictionary<string, string>();
		exts.add( "MM_BGM_Cinema.mp3", ".mp3");
		exts.add( "MM_BGM_Propaganda.mp3", ".mp3");
		exts.add( "MM_BGM_RoadShow.mp3", ".mp3");
		exts.add( "MM_BGM_Award.mp3", ".mp3");
		exts.add( "MM29_TicketsGreat.ogg", ".ogg");
		exts.add( "MM01_Button.ogg", ".ogg");
		exts.add( "MM02_Popup.ogg", ".ogg");
		exts.add( "MM03_ReachGoal.ogg", ".ogg");
		exts.add( "MM04_Lose.ogg", ".ogg");
		exts.add( "MM05_Upgrade.ogg", ".ogg");
		exts.add( "MM06_Building.ogg", ".ogg");
		exts.add( "MM07_GoldMuch.ogg", ".ogg");
		exts.add( "MM08_GoldLess.ogg", ".ogg");
		exts.add( "MM09_GoldReward.ogg", ".ogg");
		exts.add( "MM10_AwardSwitching.ogg", ".ogg");
		exts.add( "MM11_NewsPaperTop.ogg", ".ogg");
		exts.add( "MM12_RecruitArtist.ogg", ".ogg");
		exts.add( "MM13_GetArtist.ogg", ".ogg");
		exts.add( "MM14_ArtistGradeUp.ogg", ".ogg");
		exts.add( "MM15_Propaganda.ogg", ".ogg");
		exts.add( "MM16_ScriptRolling.ogg", ".ogg");
		exts.add( "MM17_FoundArtist.ogg", ".ogg");
		exts.add( "MM18_Screen.ogg", ".ogg");
		exts.add( "MM19_ArtistShow.ogg", ".ogg");
		exts.add( "MM20_ArtistData.ogg", ".ogg");
		exts.add( "MM21_ArtistAccord.ogg", ".ogg");
		exts.add( "MM22_ScreenOver.ogg", ".ogg");
		exts.add( "MM23_Premiere.ogg", ".ogg");
		exts.add( "MM24_NiceScore1.ogg", ".ogg");
		exts.add( "MM25_NiceScore2.ogg", ".ogg");
		exts.add( "MM26_NiceScore3.ogg", ".ogg");
		exts.add( "MM27_TicketsOrdinary.ogg", ".ogg");
		exts.add( "MM28_TicketsGood.ogg", ".ogg");
		exts.add( "MM30_Settlements.ogg", ".ogg");
		exts.add( "MM31_ClickScreenMenu.ogg", ".ogg");
		exts.add( "MM32_GetScript .ogg", ".ogg");
		exts.add( "MM33_NiceScore4.ogg", ".ogg");
		exts.add( "MM34_CultrueArtist.ogg", ".ogg");
		exts.add( "MM35_AwardResults.ogg", ".ogg");
		exts.add( "MM36_CarAcross.ogg", ".ogg");
		exts.add( "MM37_FilmStart.ogg", ".ogg");
		exts.add( "MM38_AudienceGetIn.ogg", ".ogg");
		exts.add( "MM39_FilmShow.ogg", ".ogg");
		exts.add( "MM40_FilmScreen.ogg", ".ogg");
		exts.add( "MM41_ExpectNotices.ogg", ".ogg");
		exts.add( "MM42_FilmFemale01.mp3", ".mp3");
		exts.add( "MM43_FilmFemale02.mp3", ".mp3");
		exts.add( "MM44_FilmFemale03.mp3", ".mp3");
		exts.add( "MM45_FilmFemale04.mp3", ".mp3");
		exts.add( "MM46_FilmMale01.mp3", ".mp3");
		exts.add( "MM47_FilmMale02.mp3", ".mp3");
		exts.add( "MM48_FilmMale03.mp3", ".mp3");
		exts.add( "MM49_FilmMale04.mp3", ".mp3");
		exts.add( "MM50_FilmChangge.mp3", ".mp3");
	}


	static SoundPackageName = "Sound";
	static SoundPackageId =  "44whq70o";
	
	public static MM_BGM_Cinema  = "MM_BGM_Cinema.mp3";
	public static MM_BGM_Propaganda  = "MM_BGM_Propaganda.mp3";
	public static MM_BGM_RoadShow  = "MM_BGM_RoadShow.mp3";
	public static MM_BGM_Award  = "MM_BGM_Award.mp3";
	public static MM29_TicketsGreat  = "MM29_TicketsGreat.ogg";
	public static MM01_Button  = "MM01_Button.ogg";
	public static MM02_Popup  = "MM02_Popup.ogg";
	public static MM03_ReachGoal  = "MM03_ReachGoal.ogg";
	public static MM04_Lose  = "MM04_Lose.ogg";
	public static MM05_Upgrade  = "MM05_Upgrade.ogg";
	public static MM06_Building  = "MM06_Building.ogg";
	public static MM07_GoldMuch  = "MM07_GoldMuch.ogg";
	public static MM08_GoldLess  = "MM08_GoldLess.ogg";
	public static MM09_GoldReward  = "MM09_GoldReward.ogg";
	public static MM10_AwardSwitching  = "MM10_AwardSwitching.ogg";
	public static MM11_NewsPaperTop  = "MM11_NewsPaperTop.ogg";
	public static MM12_RecruitArtist  = "MM12_RecruitArtist.ogg";
	public static MM13_GetArtist  = "MM13_GetArtist.ogg";
	public static MM14_ArtistGradeUp  = "MM14_ArtistGradeUp.ogg";
	public static MM15_Propaganda  = "MM15_Propaganda.ogg";
	public static MM16_ScriptRolling  = "MM16_ScriptRolling.ogg";
	public static MM17_FoundArtist  = "MM17_FoundArtist.ogg";
	public static MM18_Screen  = "MM18_Screen.ogg";
	public static MM19_ArtistShow  = "MM19_ArtistShow.ogg";
	public static MM20_ArtistData  = "MM20_ArtistData.ogg";
	public static MM21_ArtistAccord  = "MM21_ArtistAccord.ogg";
	public static MM22_ScreenOver  = "MM22_ScreenOver.ogg";
	public static MM23_Premiere  = "MM23_Premiere.ogg";
	public static MM24_NiceScore1  = "MM24_NiceScore1.ogg";
	public static MM25_NiceScore2  = "MM25_NiceScore2.ogg";
	public static MM26_NiceScore3  = "MM26_NiceScore3.ogg";
	public static MM27_TicketsOrdinary  = "MM27_TicketsOrdinary.ogg";
	public static MM28_TicketsGood  = "MM28_TicketsGood.ogg";
	public static MM30_Settlements  = "MM30_Settlements.ogg";
	public static MM31_ClickScreenMenu  = "MM31_ClickScreenMenu.ogg";
	public static MM32_GetScript  = "MM32_GetScript .ogg";
	public static MM33_NiceScore4  = "MM33_NiceScore4.ogg";
	public static MM34_CultrueArtist  = "MM34_CultrueArtist.ogg";
	public static MM35_AwardResults  = "MM35_AwardResults.ogg";
	public static MM36_CarAcross  = "MM36_CarAcross.ogg";
	public static MM37_FilmStart  = "MM37_FilmStart.ogg";
	public static MM38_AudienceGetIn  = "MM38_AudienceGetIn.ogg";
	public static MM39_FilmShow  = "MM39_FilmShow.ogg";
	public static MM40_FilmScreen  = "MM40_FilmScreen.ogg";
	public static MM41_ExpectNotices  = "MM41_ExpectNotices.ogg";
	public static MM42_FilmFemale01  = "MM42_FilmFemale01.mp3";
	public static MM43_FilmFemale02  = "MM43_FilmFemale02.mp3";
	public static MM44_FilmFemale03  = "MM44_FilmFemale03.mp3";
	public static MM45_FilmFemale04  = "MM45_FilmFemale04.mp3";
	public static MM46_FilmMale01  = "MM46_FilmMale01.mp3";
	public static MM47_FilmMale02  = "MM47_FilmMale02.mp3";
	public static MM48_FilmMale03  = "MM48_FilmMale03.mp3";
	public static MM49_FilmMale04  = "MM49_FilmMale04.mp3";
	public static MM50_FilmChangge  = "MM50_FilmChangge.mp3";
}