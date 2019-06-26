/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BlockLevelConfig from "../ConfigExtends/BlockLevelConfig";


export default class BlockLevelConfigReaderStruct extends CsvConfigRender<    BlockLevelConfig      >
{
	tableName = "BlockLevel";


    ParseCsv(csv: string[] )
    {
		let config = new BlockLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
		config.firstRate = csvGetFloat(csv,  this.GetHeadIndex(  "firstRate"  )   );
		config.continueRate = csvGetFloat(csv,  this.GetHeadIndex(  "continueRate"  )   );
		config.gradeScore = csvGetInt(csv,  this.GetHeadIndex(  "gradeScore"  )   );
		config.praiseScore = csvGetInt(csv,  this.GetHeadIndex(  "praiseScore"  )   );

		


		this.addConfig(config);
    }
}