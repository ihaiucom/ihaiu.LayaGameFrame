/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTShootType from "../ConfigExtends/DTShootType";



export default class DTShootTypeStruct extends BaseConfig
{


	shoottypeid : number;
	rate : number;


	  static parse(txt: string): DTShootType 
      {
          let csv = toStringArray(txt);
          let config = new DTShootType();
          config.shoottypeid = csvGetInt(csv,  0 );
          config.rate = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTShootType[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTShootType[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTShootType.parse(csv[i])          );
           }
          return list;
      }
 

	

}