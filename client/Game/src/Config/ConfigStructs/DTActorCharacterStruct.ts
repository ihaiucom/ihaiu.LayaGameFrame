/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTActorCharacter from "../ConfigExtends/DTActorCharacter";



export default class DTActorCharacterStruct extends BaseConfig
{


	character : number;
	lv : number;
	property : number;


	  static parse(txt: string): DTActorCharacter 
      {
          let csv = toStringArray(txt);
          let config = new DTActorCharacter();
          config.character = csvGetInt(csv,  0 );
          config.lv = csvGetInt(csv,  1 );
          config.property = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTActorCharacter[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTActorCharacter[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTActorCharacter.parse(csv[i])          );
           }
          return list;
      }
 

	

}