/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import CupPackageConfig from "../ConfigExtends/CupPackageConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class CupPackageConfigReaderStruct extends CsvConfigRender<    CupPackageConfig      >
{
	tableName = "CupPackage";


    ParseCsv(csv: string[] )
    {
		let config = new CupPackageConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.zh_cn_des = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_des"  )   );
		config.target_type =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "target_type"  )   )   );
		config.target_num = csvGetInt(csv,  this.GetHeadIndex(  "target_num"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.limit_time = csvGetInt(csv,  this.GetHeadIndex(  "limit_time"  )   );
		config.image = csvGetString(csv,  this.GetHeadIndex(  "image"  )   );

		


		this.addConfig(config);
    }
}