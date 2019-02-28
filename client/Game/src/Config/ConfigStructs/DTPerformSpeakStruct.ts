/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTPerformSpeak from "../ConfigExtends/DTPerformSpeak";



export default class DTPerformSpeakStruct extends BaseConfig
{


	v1 : number;
	v2 : number;
	v3 : number;


	  static parse(txt: string): DTPerformSpeak 
      {
          let csv = toStringArray(txt);
          let config = new DTPerformSpeak();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          config.v3 = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTPerformSpeak[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTPerformSpeak[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTPerformSpeak.parse(csv[i])          );
           }
          return list;
      }
 

	

}