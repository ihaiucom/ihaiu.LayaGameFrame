/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTPerformActoin from "../ConfigExtends/DTPerformActoin";



export default class DTPerformActoinStruct extends BaseConfig
{


	v1 : number;
	v2 : number;
	v3 : number;


	  static parse(txt: string): DTPerformActoin 
      {
          let csv = toStringArray(txt);
          let config = new DTPerformActoin();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          config.v3 = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTPerformActoin[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTPerformActoin[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTPerformActoin.parse(csv[i])          );
           }
          return list;
      }
 

	

}