
export default class LangType
{
	static zh_cn = "zh_cn";
	static zh_tw = "zh_tw";
	static en = "en";

	static toLang(httpLang: string): string
	{
		httpLang = httpLang.replace("-", "_").toLowerCase();
		if (httpLang.indexOf("en") != -1)
			httpLang = LangType.en;

		// if (window["Game"])	
		// {
		// 	if (!Game.config.languageType.getConfigByValue(httpLang))
		// 	{
		// 		httpLang = LangType.en;
		// 	}
		// }
		// else
		{
			let has = false;
			for (let v in LangType)
			{
				if (v == httpLang)
				{
					has = true;
					break;
				}
			}

			if (!has)
			{
				httpLang = LangType.en;
			}
		}


		return httpLang;
	}
}