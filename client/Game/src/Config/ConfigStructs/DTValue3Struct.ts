/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTValue3 from "../ConfigExtends/DTValue3";



export default class DTValue3Struct extends BaseConfig
{


	v1 : number;
	v2 : number;
	v3 : number;


	  static parse(txt: string): DTValue3 
      {
          let csv = toStringArray(txt);
          let config = new DTValue3();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          config.v3 = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTValue3[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTValue3[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTValue3.parse(csv[i])          );
           }
          return list;
      }
 

	

}