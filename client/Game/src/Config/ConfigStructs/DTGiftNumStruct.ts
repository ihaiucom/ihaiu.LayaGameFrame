/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTGiftNum from "../ConfigExtends/DTGiftNum";



export default class DTGiftNumStruct extends BaseConfig
{


	itemId : number;
	itemNum : number;
	property : number;


	  static parse(txt: string): DTGiftNum 
      {
          let csv = toStringArray(txt);
          let config = new DTGiftNum();
          config.itemId = csvGetInt(csv,  0 );
          config.itemNum = csvGetInt(csv,  1 );
          config.property = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTGiftNum[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTGiftNum[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTGiftNum.parse(csv[i])          );
           }
          return list;
      }
 

	

}