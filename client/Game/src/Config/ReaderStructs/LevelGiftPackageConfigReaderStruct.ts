/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import LevelGiftPackageConfig from "../ConfigExtends/LevelGiftPackageConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class LevelGiftPackageConfigReaderStruct extends CsvConfigRender<    LevelGiftPackageConfig      >
{
	tableName = "LevelGiftPackage";


    ParseCsv(csv: string[] )
    {
		let config = new LevelGiftPackageConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.player_level = csvGetInt(csv,  this.GetHeadIndex(  "player_level"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.next_id = csvGetInt(csv,  this.GetHeadIndex(  "next_id"  )   );
		config.image = csvGetString(csv,  this.GetHeadIndex(  "image"  )   );

		


		this.addConfig(config);
    }
}