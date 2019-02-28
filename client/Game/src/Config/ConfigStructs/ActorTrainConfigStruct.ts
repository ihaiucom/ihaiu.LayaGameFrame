/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import Game from "../../Game";



export default class ActorTrainConfigStruct extends BaseConfig
{


	id : number;
	train_type : number;
	en_name : string;
	cn_name : string;
	property : number[];
	en_scene_name : string;
	cn_scene_name : string;
	action : number;
	tips : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_name

		let value = <string> Game.lang.getValue("actorTrain", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_name
	}
	get scene_name():string
	{
		if(!Game.lang.isUseLang)
			return this.cn_scene_name

		let value = <string> Game.lang.getValue("actorTrain", this.id, "scene_name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.cn_scene_name
	}

}