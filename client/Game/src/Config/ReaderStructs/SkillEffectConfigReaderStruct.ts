/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SkillEffectConfig from "../ConfigExtends/SkillEffectConfig";
import DTSkillTiggerCondition from "../ConfigExtends/DTSkillTiggerCondition";


export default class SkillEffectConfigReaderStruct extends CsvConfigRender<    SkillEffectConfig      >
{
	tableName = "SkillEffect";


    ParseCsv(csv: string[] )
    {
		let config = new SkillEffectConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.target = csvGetInt(csv,  this.GetHeadIndex(  "target"  )   );
		config.targetProp = csvGetInt(csv,  this.GetHeadIndex(  "targetProp"  )   );
		config.value = csvGetFloat(csv,  this.GetHeadIndex(  "value"  )   );
		config.tiggerRate = csvGetInt(csv,  this.GetHeadIndex(  "tiggerRate"  )   );
		config.tiggerCondition =  DTSkillTiggerCondition.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "tiggerCondition"  )   )   );

		


		this.addConfig(config);
    }
}