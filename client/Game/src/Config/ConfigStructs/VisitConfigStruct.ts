/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import Game from "../../Game";



export default class VisitConfigStruct extends BaseConfig
{


	id : number;
	fans : number;
	flower : number;
	zh_cn_fans_speak0 : string;
	zh_cn_actor_speak0 : string;
	zh_cn_fans_speak1 : string;
	zh_cn_actor_speak1 : string;
	zh_cn_fans_speak2 : string;
	zh_cn_actor_speak2 : string;
	reward : DTItemNum[];
	expect : number;





	
	get fans_speak0():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_fans_speak0

		let value = <string> Game.lang.getValue("visit", this.id, "fans_speak0");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_fans_speak0
	}
	get actor_speak0():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_actor_speak0

		let value = <string> Game.lang.getValue("visit", this.id, "actor_speak0");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_actor_speak0
	}
	get fans_speak1():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_fans_speak1

		let value = <string> Game.lang.getValue("visit", this.id, "fans_speak1");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_fans_speak1
	}
	get actor_speak1():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_actor_speak1

		let value = <string> Game.lang.getValue("visit", this.id, "actor_speak1");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_actor_speak1
	}
	get fans_speak2():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_fans_speak2

		let value = <string> Game.lang.getValue("visit", this.id, "fans_speak2");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_fans_speak2
	}
	get actor_speak2():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_actor_speak2

		let value = <string> Game.lang.getValue("visit", this.id, "actor_speak2");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_actor_speak2
	}

}