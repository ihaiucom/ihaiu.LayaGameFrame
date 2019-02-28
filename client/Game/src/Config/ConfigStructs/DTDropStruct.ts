/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTDrop from "../ConfigExtends/DTDrop";



export default class DTDropStruct extends BaseConfig
{


	x : number;
	y : number;


	  static parse(txt: string): DTDrop 
      {
          let csv = toStringArray(txt);
          let config = new DTDrop();
          config.x = csvGetInt(csv,  0 );
          config.y = csvGetFloat(csv,  1  );
          return config;
      }
 


	  static parseArray(txt: string): DTDrop[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTDrop[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTDrop.parse(csv[i])          );
           }
          return list;
      }
 

	

}