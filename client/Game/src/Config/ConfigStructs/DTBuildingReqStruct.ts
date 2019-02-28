/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTBuildingReq from "../ConfigExtends/DTBuildingReq";



export default class DTBuildingReqStruct extends BaseConfig
{


	type : number;
	level : number;


	  static parse(txt: string): DTBuildingReq 
      {
          let csv = toStringArray(txt);
          let config = new DTBuildingReq();
          config.type = csvGetInt(csv,  0 );
          config.level = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTBuildingReq[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTBuildingReq[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTBuildingReq.parse(csv[i])          );
           }
          return list;
      }
 

	

}