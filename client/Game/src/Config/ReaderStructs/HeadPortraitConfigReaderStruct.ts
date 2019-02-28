/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import HeadPortraitConfig from "../ConfigExtends/HeadPortraitConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class HeadPortraitConfigReaderStruct extends CsvConfigRender<    HeadPortraitConfig      >
{
	tableName = "HeadPortrait";


    ParseCsv(csv: string[] )
    {
		let config = new HeadPortraitConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
		config.unlock =  DTItemNum.parse(       csvGetString(csv,  this.GetHeadIndex(  "unlock"  )   )   );
		config.icon = csvGetInt(csv,  this.GetHeadIndex(  "icon"  )   );

		


		this.addConfig(config);
    }
}