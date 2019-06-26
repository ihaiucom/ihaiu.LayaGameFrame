import Game from "../Game";
import LangType from "./LangType";
import Dictionary from "../Libs/Helpers/Dictionary";
import LangConfigLoader from "./LangConfigLoader";
import LangConfigReader from "./LangConfigReader";
import LangConfig from "./LangConfig";

/** 多语言配置管理器 */
export default class LangManager
{

	private static _Instance: LangManager;
	static get Instance(): LangManager
	{
		if (!LangManager._Instance)
		{
			LangManager._Instance = new LangManager();
		}
		return LangManager._Instance;
	}

	// 是否使用多语言
	isUseLang = false;


	private _httpLang: string;
	get httpLang(): string
	{
		if (!this._httpLang)
		{
			this.httpLang = this.lang;
		}
		return this._httpLang;
	}

	set httpLang(value: string)
	{
		value = value.replace("_", "-");
		if (value.indexOf("-"))
		{
			let arr = value.split("-");
			for (let i = 1; i < arr.length; i++)
			{
				arr[i] = arr[i].toUpperCase();
			}
			value = arr.join("-");
		}
		this._httpLang = value;

		// if (window["frame"] && window["frame"]["comm"] && window["frame"]["comm"]["HttpComm"])
		// 	frame.comm.HttpComm.SetHeader("accept-language", value);
	}

	private _lang: string = null;
	get lang(): string
	{
		if (!this._lang)
		{
			if (Game.localStorage.hasItem("_lang", true))
			{
				this._lang = Game.localStorage.getString("_lang", true);
			}
			else
			{
				// let lang = navigator.language;
				// if (!lang)
				// {
				// 	lang = navigator["browserLanguage"];
				// }

				// lang = LangType.toLang(lang);
				// this._lang = lang;

				this._lang = LangType.zh_cn;
			}

			this.httpLang = this._lang;
		}


		return this._lang;
	}

	set lang(value: string)
	{
		this._lang = value;
		this.httpLang = value;
		Game.localStorage.setString("_lang", value, true);
	}
	



	private langListDict: Dictionary<LangType, LangConfigLoader> = new Dictionary<LangType, LangConfigLoader>();

	private _current: LangConfigLoader;
	get current(): LangConfigLoader
	{
		if (this._current)
		{
			return this._current;
		}

		if (!this.langListDict.hasKey(this.lang))
		{
			let langList = new LangConfigLoader();
			langList.lang = this.lang;
			this.langListDict.add(langList.lang, langList);
			this._current = langList;
		}
		return this.langListDict.getValue(this.lang);
	}

	getValue(tableName: string, id: number, fieldName: string): string | string[]
	{
		let langReader: LangConfigReader = this.current[tableName];
		if (langReader)
		{
			let config: LangConfig = langReader.getConfig(id);
			if (config)
			{
				return config.dict.getValue(fieldName);
			}
		}
		return null;
	}

}