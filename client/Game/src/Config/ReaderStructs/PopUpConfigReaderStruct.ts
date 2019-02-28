/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import PopUpConfig from "../ConfigExtends/PopUpConfig";
import DTDate from "../ConfigExtends/DTDate";


export default class PopUpConfigReaderStruct extends CsvConfigRender<    PopUpConfig      >
{
	tableName = "PopUp";


    ParseCsv(csv: string[] )
    {
		let config = new PopUpConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.start_type = csvGetInt(csv,  this.GetHeadIndex(  "start_type"  )   );
		config.start_par1 = csvGetInt(csv,  this.GetHeadIndex(  "start_par1"  )   );
		config.start_par2 =  DTDate.parse(       csvGetString(csv,  this.GetHeadIndex(  "start_par2"  )   )   );
		config.start_par3 = csvGetInt(csv,  this.GetHeadIndex(  "start_par3"  )   );
		config.image = csvGetString(csv,  this.GetHeadIndex(  "image"  )   );
		config.priority = csvGetInt(csv,  this.GetHeadIndex(  "priority"  )   );

		


		this.addConfig(config);
    }
}