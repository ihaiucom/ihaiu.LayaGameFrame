/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class MenuConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	icon : string;
	moduleName : string;
	layer : number;
	closeOtherType : number;
	closeHomeWindow : boolean;
	isAutoOpenHomeWindow : boolean;
	cacheTime : number;
	loaderId : number;
	barType : number;
	barIndex : number;
	openAnimation : number;
	closeAnimation : number;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("menu", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}