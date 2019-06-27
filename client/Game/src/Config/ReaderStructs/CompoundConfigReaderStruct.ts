/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CompoundConfig from "../ConfigExtends/CompoundConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class CompoundConfigReaderStruct extends CsvConfigRender<    CompoundConfig      >
{
	tableName = "Compound";


    ParseCsv(csv: string[] )
    {
		let config = new CompoundConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.syn_item = csvGetInt(csv,  this.GetHeadIndex(  "syn_item"  )   );
		config.num_req = csvGetInt(csv,  this.GetHeadIndex(  "num_req"  )   );
		config.split_list =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "split_list"  )   )   );

		


		this.addConfig(config);
    }
}