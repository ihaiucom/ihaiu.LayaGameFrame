/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTActorSkill from "../ConfigExtends/DTActorSkill";
import DTInitialLabel from "../ConfigExtends/DTInitialLabel";
import DTActorStory from "../ConfigExtends/DTActorStory";
import Game from "../../Game";



export default class ActorConfigStruct extends BaseConfig
{


	id : number;
	name : string;
	setId : number;
	label_birthplace : number;
	age : number;
	birthday : string;
	height : number;
	bodyWeight : number;
	label_color : number;
	storyEventId : number[];
	label_sex : number;
	label_country : number;
	label_showType : number;
	label_ageType : number;
	randomNameId : number;
	label_bloodType : number;
	label_list_hobby : number[];
	label_constellation : number;
	label_list_character : number[];
	label_list_experience : number[];
	label_specialIntelligence : number;
	label_bodyheight : number;
	label_list_looks : number[];
	weight : number;
	assistanceCard : number;
	avatar : number;
	prop_act : number;
	prop_talent : number;
	prop_charm : number;
	prop_eloquence : number;
	prop_entertainment : number;
	actGrowRate : number[];
	talentGrowRate : number[];
	charmGrowRate : number[];
	eloquenceGrowRate : number[];
	entertainmentGrowRate : number[];
	mainPropertyField : string;
	skill : DTActorSkill[];
	initialLabel : DTInitialLabel[];
	actorLabelSetId : number[];
	adLabelSetId : number;
	buyLabelSetId : number;
	expandLabelSetId : number[];
	storyType : DTActorStory[];
	surprise : number;
	zh_cn_tips : string;
	zh_cn_getWay : string;





	
	get tips():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_tips

		let value = <string> Game.lang.getValue("actor", this.id, "tips");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_tips
	}
	get getWay():string
	{
		if(!Game.lang.isUseLang)
			return this.zh_cn_getWay

		let value = <string> Game.lang.getValue("actor", this.id, "getWay");
		if (!isNullOrEmpty(value))
		{
			return value;
		}
		return this.zh_cn_getWay
	}

}