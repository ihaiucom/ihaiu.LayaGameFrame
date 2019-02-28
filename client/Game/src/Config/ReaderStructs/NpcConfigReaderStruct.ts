/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import NpcConfig from "../ConfigExtends/NpcConfig";


export default class NpcConfigReaderStruct extends CsvConfigRender<    NpcConfig      >
{
	tableName = "Npc";


    ParseCsv(csv: string[] )
    {
		let config = new NpcConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
		config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
		config.avatar = csvGetInt(csv,  this.GetHeadIndex(  "avatar"  )   );

		


		this.addConfig(config);
    }
}