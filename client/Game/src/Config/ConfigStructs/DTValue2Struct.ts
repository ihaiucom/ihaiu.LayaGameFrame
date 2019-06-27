/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTValue2 from "../ConfigExtends/DTValue2";



export default class DTValue2Struct extends BaseConfig
{


	v1 : number;
	v2 : number;


	  static parse(txt: string): DTValue2 
      {
          let csv = toStringArray(txt);
          let config = new DTValue2();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTValue2[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTValue2[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTValue2.parse(csv[i])          );
           }
          return list;
      }
 

	

}