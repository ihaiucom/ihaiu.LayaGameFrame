/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WriterAdaptEffectConfig from "../ConfigExtends/WriterAdaptEffectConfig";


export default class WriterAdaptEffectConfigReaderStruct extends CsvConfigRender<    WriterAdaptEffectConfig      >
{
	tableName = "WriterAdaptEffect";


    ParseCsv(csv: string[] )
    {
		let config = new WriterAdaptEffectConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_adapt = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_adapt"  )   );
		config.zh_cn_adapt_des = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_adapt_des"  )   );
		config.effect1 = csvGetInt(csv,  this.GetHeadIndex(  "effect1"  )   );
		config.effect1_weight = csvGetInt(csv,  this.GetHeadIndex(  "effect1_weight"  )   );
		config.effect2 = csvGetInt(csv,  this.GetHeadIndex(  "effect2"  )   );
		config.effect2_weight = csvGetInt(csv,  this.GetHeadIndex(  "effect2_weight"  )   );
		config.effect3 = csvGetInt(csv,  this.GetHeadIndex(  "effect3"  )   );
		config.effect3_weight = csvGetInt(csv,  this.GetHeadIndex(  "effect3_weight"  )   );
		config.effect4 = csvGetInt(csv,  this.GetHeadIndex(  "effect4"  )   );
		config.effect4_weight = csvGetInt(csv,  this.GetHeadIndex(  "effect4_weight"  )   );

		


		this.addConfig(config);
    }
}