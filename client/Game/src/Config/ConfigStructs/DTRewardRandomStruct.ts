/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTRewardRandom from "../ConfigExtends/DTRewardRandom";



export default class DTRewardRandomStruct extends BaseConfig
{


	weight : number;
	itemType : number;
	itemId : number;
	itemNum : number;


	  static parse(txt: string): DTRewardRandom 
      {
          let csv = toStringArray(txt);
          let config = new DTRewardRandom();
          config.weight = csvGetInt(csv,  0 );
          config.itemType = csvGetInt(csv,  1 );
          config.itemId = csvGetInt(csv,  2 );
          config.itemNum = csvGetInt(csv,  3 );
          return config;
      }
 


	  static parseArray(txt: string): DTRewardRandom[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTRewardRandom[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTRewardRandom.parse(csv[i])          );
           }
          return list;
      }
 

	

}