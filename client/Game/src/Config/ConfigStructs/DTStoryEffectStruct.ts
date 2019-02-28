/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTStoryEffect from "../ConfigExtends/DTStoryEffect";



export default class DTStoryEffectStruct extends BaseConfig
{


	storyeffect : number;
	rate : number;


	  static parse(txt: string): DTStoryEffect 
      {
          let csv = toStringArray(txt);
          let config = new DTStoryEffect();
          config.storyeffect = csvGetInt(csv,  0 );
          config.rate = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTStoryEffect[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTStoryEffect[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTStoryEffect.parse(csv[i])          );
           }
          return list;
      }
 

	

}