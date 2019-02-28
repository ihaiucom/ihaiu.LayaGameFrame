/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTDateTime from "../ConfigExtends/DTDateTime";



export default class DTDateTimeStruct extends BaseConfig
{


	y : number;
	m : number;
	d : number;
	h : number;
	mm : number;
	s : number;


	  static parse(txt: string): DTDateTime 
      {
          let csv = toStringArray(txt);
          let config = new DTDateTime();
          config.y = csvGetInt(csv,  0 );
          config.m = csvGetInt(csv,  1 );
          config.d = csvGetInt(csv,  2 );
          config.h = csvGetInt(csv,  3 );
          config.mm = csvGetInt(csv,  4 );
          config.s = csvGetInt(csv,  5 );
          return config;
      }
 


	  static parseArray(txt: string): DTDateTime[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTDateTime[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTDateTime.parse(csv[i])          );
           }
          return list;
      }
 

	

}