/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";



export default class DTFixItemNumStruct extends BaseConfig
{


	itemType : number;
	itemId : number;
	itemNum : number;


	  static parse(txt: string): DTFixItemNum 
      {
          let csv = toStringArray(txt);
          let config = new DTFixItemNum();
          config.itemType = csvGetInt(csv,  0 );
          config.itemId = csvGetInt(csv,  1 );
          config.itemNum = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTFixItemNum[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTFixItemNum[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTFixItemNum.parse(csv[i])          );
           }
          return list;
      }
 

	

}