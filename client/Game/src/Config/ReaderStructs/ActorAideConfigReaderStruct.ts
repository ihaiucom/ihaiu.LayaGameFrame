/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorAideConfig from "../ConfigExtends/ActorAideConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class ActorAideConfigReaderStruct extends CsvConfigRender<    ActorAideConfig      >
{
	tableName = "ActorAide";


    ParseCsv(csv: string[] )
    {
		let config = new ActorAideConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.star = csvGetInt(csv,  this.GetHeadIndex(  "star"  )   );
		config.aide_type = csvGetInt(csv,  this.GetHeadIndex(  "aide_type"  )   );
		config.number = csvGetInt(csv,  this.GetHeadIndex(  "number"  )   );
		config.lv = csvGetInt(csv,  this.GetHeadIndex(  "lv"  )   );
		config.cost = csvGetInt(csv,  this.GetHeadIndex(  "cost"  )   );
		config.introduction =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "introduction"  )   )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
		config.avatar = csvGetInt(csv,  this.GetHeadIndex(  "avatar"  )   );
		config.secondary_property = csvGetInt(csv,  this.GetHeadIndex(  "secondary_property"  )   );
		config.main_property = csvGetInt(csv,  this.GetHeadIndex(  "main_property"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}