/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTSkillTiggerCondition from "../ConfigExtends/DTSkillTiggerCondition";



export default class DTSkillTiggerConditionStruct extends BaseConfig
{


	tiggerConditon : number;
	tiggerValue : number;


	  static parse(txt: string): DTSkillTiggerCondition 
      {
          let csv = toStringArray(txt);
          let config = new DTSkillTiggerCondition();
          config.tiggerConditon = csvGetInt(csv,  0 );
          config.tiggerValue = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTSkillTiggerCondition[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTSkillTiggerCondition[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTSkillTiggerCondition.parse(csv[i])          );
           }
          return list;
      }
 

	

}