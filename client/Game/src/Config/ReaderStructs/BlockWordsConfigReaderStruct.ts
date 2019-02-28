/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BlockWordsConfig from "../ConfigExtends/BlockWordsConfig";


export default class BlockWordsConfigReaderStruct extends CsvConfigRender<    BlockWordsConfig      >
{
	tableName = "BlockWords";


    ParseCsv(csv: string[] )
    {
		let config = new BlockWordsConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.text = csvGetString(csv,  this.GetHeadIndex(  "text"  )   );

		


		this.addConfig(config);
    }
}