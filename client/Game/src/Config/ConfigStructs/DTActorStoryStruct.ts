/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTActorStory from "../ConfigExtends/DTActorStory";



export default class DTActorStoryStruct extends BaseConfig
{


	story : number;
	lv : number;
	property : number;


	  static parse(txt: string): DTActorStory 
      {
          let csv = toStringArray(txt);
          let config = new DTActorStory();
          config.story = csvGetInt(csv,  0 );
          config.lv = csvGetInt(csv,  1 );
          config.property = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTActorStory[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTActorStory[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTActorStory.parse(csv[i])          );
           }
          return list;
      }
 

	

}