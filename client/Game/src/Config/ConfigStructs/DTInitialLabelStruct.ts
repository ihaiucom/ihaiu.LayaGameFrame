/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTInitialLabel from "../ConfigExtends/DTInitialLabel";



export default class DTInitialLabelStruct extends BaseConfig
{


	storyTag : number;
	level : number;
	property : number;


	  static parse(txt: string): DTInitialLabel 
      {
          let csv = toStringArray(txt);
          let config = new DTInitialLabel();
          config.storyTag = csvGetInt(csv,  0 );
          config.level = csvGetInt(csv,  1 );
          config.property = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTInitialLabel[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTInitialLabel[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTInitialLabel.parse(csv[i])          );
           }
          return list;
      }
 

	

}