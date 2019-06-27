/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BaseConfig from "../BaseConfig";
import DTLabelProperty from "../ConfigExtends/DTLabelProperty";



export default class DTLabelPropertyStruct extends BaseConfig
{


	storyTag : number;
	property : number;


	  static parse(txt: string): DTLabelProperty 
      {
          let csv = toStringArray(txt);
          let config = new DTLabelProperty();
          config.storyTag = csvGetInt(csv,  0 );
          config.property = csvGetInt(csv,  1 );
          return config;
      }
 


	  static parseArray(txt: string): DTLabelProperty[] 
      {
          let csv = toStringArray(txt, /[;]/);
          let list:DTLabelProperty[] = [];
          for(let i = 0; i < csv.length; i ++)
          {
              list.push(      DTLabelProperty.parse(csv[i])          );
           }
          return list;
      }
 

	

}