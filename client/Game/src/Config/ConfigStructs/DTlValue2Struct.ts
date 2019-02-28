/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTlValue2 from "../ConfigExtends/DTlValue2";



export default class DTlValue2Struct extends BaseConfig
{


	v1 : number;
	v2 : number;


	  static parse(txt: string): DTlValue2 
      {
          let csv = toStringArray(txt);
          let config = new DTlValue2();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTlValue2[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTlValue2[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTlValue2.parse(csv[i])          );
           }
          return list;
      }
 

	

}