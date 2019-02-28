/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTTime from "../ConfigExtends/DTTime";



export default class DTTimeStruct extends BaseConfig
{


	h : number;
	mm : number;
	s : number;


	  static parse(txt: string): DTTime 
      {
          let csv = toStringArray(txt);
          let config = new DTTime();
          config.h = csvGetInt(csv,  0 );
          config.mm = csvGetInt(csv,  1 );
          config.s = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTTime[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTTime[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTTime.parse(csv[i])          );
           }
          return list;
      }
 

	

}