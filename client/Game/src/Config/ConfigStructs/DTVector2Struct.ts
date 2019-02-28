/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTVector2 from "../ConfigExtends/DTVector2";



export default class DTVector2Struct extends BaseConfig
{


	x : number;
	y : number;


	  static parse(txt: string): DTVector2 
      {
          let csv = toStringArray(txt);
          let config = new DTVector2();
          config.x = csvGetFloat(csv,  0  );
          config.y = csvGetFloat(csv,  1  );
          return config;
      }
 


	  static parseArray(txt: string): DTVector2[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTVector2[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTVector2.parse(csv[i])          );
           }
          return list;
      }
 

	

}