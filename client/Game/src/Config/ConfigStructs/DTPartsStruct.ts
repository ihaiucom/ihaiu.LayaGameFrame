/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTParts from "../ConfigExtends/DTParts";



export default class DTPartsStruct extends BaseConfig
{


	v1 : string;
	v2 : string;


	  static parse(txt: string): DTParts 
      {
          let csv = toStringArray(txt);
          let config = new DTParts();
          config.v1 = csvGetString(csv,  0   );
          config.v2 = csvGetString(csv,  1   );
          return config;
      }
 


	  static parseArray(txt: string): DTParts[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTParts[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTParts.parse(csv[i])          );
           }
          return list;
      }
 

	

}