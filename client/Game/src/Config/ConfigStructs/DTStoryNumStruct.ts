/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTStoryNum from "../ConfigExtends/DTStoryNum";



export default class DTStoryNumStruct extends BaseConfig
{


	star : number;
	num : number;


	  static parse(txt: string): DTStoryNum 
      {
          let csv = toStringArray(txt);
          let config = new DTStoryNum();
          config.star = csvGetInt(csv,  0 );
          config.num = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTStoryNum[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTStoryNum[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTStoryNum.parse(csv[i])          );
           }
          return list;
      }
 

	

}