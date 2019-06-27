/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTPerformanceCondition from "../ConfigExtends/DTPerformanceCondition";



export default class DTPerformanceConditionStruct extends BaseConfig
{


	lv : number;
	property : number;
	num : number;


	  static parse(txt: string): DTPerformanceCondition 
      {
          let csv = toStringArray(txt);
          let config = new DTPerformanceCondition();
          config.lv = csvGetInt(csv,  0 );
          config.property = csvGetInt(csv,  1 );
          config.num = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTPerformanceCondition[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTPerformanceCondition[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTPerformanceCondition.parse(csv[i])          );
           }
          return list;
      }
 

	

}