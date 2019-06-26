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
		dict.add( "MM_BGM_Award.mp3", "i7ne2w");
		dict.add( "MM_BGM_01.mp3", "tys94p");
		dict.add( "MM01_Button.wav", "tys94s");
		dict.add( "MM02_Popup.wav", "tys94t");
		dict.add( "MM04_Lose.wav", "tys94v");
		dict.add( "MM05_Upgrade.wav", "tys94w");

		let exts = SoundKey._extDict = new Dictionary<string, string>();
		exts.add( "MM_BGM_Award.mp3", ".mp3");
		exts.add( "MM_BGM_01.mp3", ".mp3");
		exts.add( "MM01_Button.wav", ".wav");
		exts.add( "MM02_Popup.wav", ".wav");
		exts.add( "MM04_Lose.wav", ".wav");
		exts.add( "MM05_Upgrade.wav", ".wav");
	}


	static SoundPackageName = "Sound";
	static SoundPackageId =  "44whq70o";
	
	public static MM_BGM_Award  = "MM_BGM_Award.mp3";
	public static MM_BGM_01  = "MM_BGM_01.mp3";
	public static MM01_Button  = "MM01_Button.wav";
	public static MM02_Popup  = "MM02_Popup.wav";
	public static MM04_Lose  = "MM04_Lose.wav";
	public static MM05_Upgrade  = "MM05_Upgrade.wav";
}