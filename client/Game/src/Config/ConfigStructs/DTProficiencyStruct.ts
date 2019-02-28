/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTProficiency from "../ConfigExtends/DTProficiency";



export default class DTProficiencyStruct extends BaseConfig
{


	v1 : number;
	v2 : number;


	  static parse(txt: string): DTProficiency 
      {
          let csv = toStringArray(txt);
          let config = new DTProficiency();
          config.v1 = csvGetInt(csv,  0 );
          config.v2 = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTProficiency[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTProficiency[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTProficiency.parse(csv[i])          );
           }
          return list;
      }
 

	

}