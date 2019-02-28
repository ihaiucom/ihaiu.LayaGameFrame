/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";



export default class DTItemNumStruct extends BaseConfig
{


	itemId : number;
	itemNum : number;


	  static parse(txt: string): DTItemNum 
      {
          let csv = toStringArray(txt);
          let config = new DTItemNum();
          config.itemId = csvGetInt(csv,  0 );
          config.itemNum = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTItemNum[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTItemNum[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTItemNum.parse(csv[i])          );
           }
          return list;
      }
 

	

}