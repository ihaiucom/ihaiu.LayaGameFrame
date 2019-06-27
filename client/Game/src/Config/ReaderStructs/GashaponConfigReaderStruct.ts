/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GashaponConfig from "../ConfigExtends/GashaponConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";
import DTDateTime from "../ConfigExtends/DTDateTime";


export default class GashaponConfigReaderStruct extends CsvConfigRender<    GashaponConfig      >
{
	tableName = "Gashapon";


    ParseCsv(csv: string[] )
    {
		let config = new GashaponConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.menu = csvGetInt(csv,  this.GetHeadIndex(  "menu"  )   );
		config.num = csvGetInt(csv,  this.GetHeadIndex(  "num"  )   );
		config.cost =  DTFixItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.freeNum = csvGetInt(csv,  this.GetHeadIndex(  "freeNum"  )   );
		config.freeTime = csvGetInt(csv,  this.GetHeadIndex(  "freeTime"  )   );
		config.startTime =  DTDateTime.parse(       csvGetString(csv,  this.GetHeadIndex(  "startTime"  )   )   );
		config.endTime =  DTDateTime.parse(       csvGetString(csv,  this.GetHeadIndex(  "endTime"  )   )   );
		config.pic = csvGetInt(csv,  this.GetHeadIndex(  "pic"  )   );
		config.rewardId = csvGetInt(csv,  this.GetHeadIndex(  "rewardId"  )   );
		config.allowance =  DTFixItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "allowance"  )   )   );
		config.allowanceNum = csvGetInt(csv,  this.GetHeadIndex(  "allowanceNum"  )   );
		config.desc = csvGetString(csv,  this.GetHeadIndex(  "desc"  )   );

		


		this.addConfig(config);
    }
}