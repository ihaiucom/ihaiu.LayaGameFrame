/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BlockWordsIIConfig from "../ConfigExtends/BlockWordsIIConfig";


export default class BlockWordsIIConfigReaderStruct extends CsvConfigRender<    BlockWordsIIConfig      >
{
	tableName = "BlockWordsII";


    ParseCsv(csv: string[] )
    {
		let config = new BlockWordsIIConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

		


		this.addConfig(config);
    }
}