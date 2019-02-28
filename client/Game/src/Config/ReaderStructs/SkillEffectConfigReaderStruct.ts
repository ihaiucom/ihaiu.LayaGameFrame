/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SkillEffectConfig from "../ConfigExtends/SkillEffectConfig";


export default class SkillEffectConfigReaderStruct extends CsvConfigRender<    SkillEffectConfig      >
{
	tableName = "SkillEffect";


    ParseCsv(csv: string[] )
    {
		let config = new SkillEffectConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.effect = csvGetInt(csv,  this.GetHeadIndex(  "effect"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}