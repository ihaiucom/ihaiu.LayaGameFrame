/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTActorFeature from "../ConfigExtends/DTActorFeature";



export default class DTActorFeatureStruct extends BaseConfig
{


	feature : number;
	lv : number;
	property : number;


	  static parse(txt: string): DTActorFeature 
      {
          let csv = toStringArray(txt);
          let config = new DTActorFeature();
          config.feature = csvGetInt(csv,  0 );
          config.lv = csvGetInt(csv,  1 );
          config.property = csvGetInt(csv,  2 );
          return config;
      }
 


	  static parseArray(txt: string): DTActorFeature[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTActorFeature[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTActorFeature.parse(csv[i])          );
           }
          return list;
      }
 

	

}