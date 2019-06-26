/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTBuildingReq from "../ConfigExtends/DTBuildingReq";
import Game from "../../Game";



export default class BuildingLevelConfigStruct extends BaseConfig
{


	id : number;
	zh_cn_name : string;
	type : number;
	level : number;
	breCost : DTItemNum[];
	breLevel : boolean;
	breIndex : number;
	seatNum : number;
	breLevelMax : number;
	prop_buildingCd : number;
	cost : DTItemNum[];
	levelReq : number;
	typeLevel : DTBuildingReq[];
	produceItemId : number;
	produceItemType : number;
	prop_produceNum : number;
	prop_produceCd : number;
	prop_storyProbabilitySe : number;
	prop_storyProbabilityCl : number;
	prop_storyNum : number;
	prop_criticalHitChance : number;
	prop_critEffect : number;
	prop_reserve : number;
	menuId : number[];
	ui : boolean;
	levelRegionId : number[];
	breakRegionId : number[];
	regionLevel : string;





	
	get name():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_name

		let value = <string> Game.lang.getValue("buildingLevel", this.id, "name");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_name
	}

}