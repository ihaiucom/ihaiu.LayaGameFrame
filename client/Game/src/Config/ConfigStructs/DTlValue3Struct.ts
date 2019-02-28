/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTlValue3 from "../ConfigExtends/DTlValue3";



export default class DTlValue3Struct extends BaseConfig
{


	v1 : number;
	v2 : number;
	v3 : number;


	  static parse(txt: string): DTlValue3 
      {
          let csv = toStringArray(txt);
          let config = new DTlValue3();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          config.v3 = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTlValue3[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTlValue3[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTlValue3.parse(csv[i])          );
           }
          return list;
      }
 

	

}