/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ImageConfig from "../ConfigExtends/ImageConfig";


export default class ImageConfigReaderStruct extends CsvConfigRender<    ImageConfig      >
{
	tableName = "Image";


    ParseCsv(csv: string[] )
    {
		let config = new ImageConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.key = csvGetString(csv,  this.GetHeadIndex(  "key"  )   );
		config.tip = csvGetString(csv,  this.GetHeadIndex(  "tip"  )   );

		


		this.addConfig(config);
    }
}