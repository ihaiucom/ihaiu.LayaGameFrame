/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTVector2 from "../ConfigExtends/DTVector2";
import Game from "../../Game";



export default class AvatarConfigStruct extends BaseConfig
{


	id : number;
	en_name : string;
	zh_cn_name : string;
	bodyIcon : string;
	halfIcon : string;
	diamondHeadIcon : string;
	zh_cn_icon : string;
	en_icon : string;
	pieceIcon : string;
	modelSkin : string;
	modelBones : string;
	bgPic : string;
	coVector : DTVector2;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("avatar", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}
	get icon():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_icon

		let value = <string> Game.lang.getValue("avatar", this.id, "icon");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_icon
	}

}