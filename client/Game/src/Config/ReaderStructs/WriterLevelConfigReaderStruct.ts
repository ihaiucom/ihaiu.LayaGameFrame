/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WriterLevelConfig from "../ConfigExtends/WriterLevelConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WriterLevelConfigReaderStruct extends CsvConfigRender<    WriterLevelConfig      >
{
	tableName = "WriterLevel";


    ParseCsv(csv: string[] )
    {
		let config = new WriterLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.ability = csvGetInt(csv,  this.GetHeadIndex(  "ability"  )   );
		config.levelup_cost =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "levelup_cost"  )   )   );

		


		this.addConfig(config);
    }
}