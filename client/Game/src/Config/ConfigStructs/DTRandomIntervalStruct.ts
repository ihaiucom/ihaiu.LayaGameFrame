/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTRandomInterval from "../ConfigExtends/DTRandomInterval";



export default class DTRandomIntervalStruct extends BaseConfig
{


	num1 : number;
	num2 : number;


	  static parse(txt: string): DTRandomInterval 
      {
          let csv = toStringArray(txt);
          let config = new DTRandomInterval();
          config.num1 = csvGetInt(csv,  0 );
          config.num2 = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTRandomInterval[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTRandomInterval[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTRandomInterval.parse(csv[i])          );
           }
          return list;
      }
 

	

}