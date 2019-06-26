/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTSkillTiggerCondition from "../ConfigExtends/DTSkillTiggerCondition";



export default class SkillEffectConfigStruct extends BaseConfig
{


	id : number;
	type : number;
	target : number;
	targetProp : number;
	value : number;
	tiggerRate : number;
	tiggerCondition : DTSkillTiggerCondition[];





	

}