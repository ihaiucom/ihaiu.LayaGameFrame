/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BuildingEffectConfig from "../ConfigExtends/BuildingEffectConfig";


export default class BuildingEffectConfigReaderStruct extends CsvConfigRender<    BuildingEffectConfig      >
{
	tableName = "BuildingEffect";


    ParseCsv(csv: string[] )
    {
		let config = new BuildingEffectConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.zh_cn_effect_des = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_effect_des"  )   );
		config.effect = csvGetInt(csv,  this.GetHeadIndex(  "effect"  )   );
		config.par1 = csvGetFloat(csv,  this.GetHeadIndex(  "par1"  )   );
		config.par2 = csvGetFloat(csv,  this.GetHeadIndex(  "par2"  )   );
		config.par3 = csvGetFloat(csv,  this.GetHeadIndex(  "par3"  )   );
		config.par4 = csvGetFloat(csv,  this.GetHeadIndex(  "par4"  )   );
		config.par5 = csvGetFloat(csv,  this.GetHeadIndex(  "par5"  )   );

		


		this.addConfig(config);
    }
}