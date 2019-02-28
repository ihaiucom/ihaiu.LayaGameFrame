/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WriterStationConfig from "../ConfigExtends/WriterStationConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WriterStationConfigReaderStruct extends CsvConfigRender<    WriterStationConfig      >
{
	tableName = "WriterStation";


    ParseCsv(csv: string[] )
    {
		let config = new WriterStationConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.cost =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.req_block = csvGetInt(csv,  this.GetHeadIndex(  "req_block"  )   );

		


		this.addConfig(config);
    }
}