/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTDate from "../ConfigExtends/DTDate";



export default class DTDateStruct extends BaseConfig
{


	y : number;
	m : number;
	d : number;


	  static parse(txt: string): DTDate 
      {
          let csv = toStringArray(txt);
          let config = new DTDate();
          config.y = csvGetInt(csv,  0 );
          config.m = csvGetInt(csv,  1 );
          config.d = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTDate[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTDate[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTDate.parse(csv[i])          );
           }
          return list;
      }
 

	

}