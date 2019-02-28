/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BuildingLevelConfig from "../ConfigExtends/BuildingLevelConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTBuildingReq from "../ConfigExtends/DTBuildingReq";


export default class BuildingLevelConfigReaderStruct extends CsvConfigRender<    BuildingLevelConfig      >
{
	tableName = "BuildingLevel";


    ParseCsv(csv: string[] )
    {
		let config = new BuildingLevelConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.level = csvGetInt(csv,  this.GetHeadIndex(  "level"  )   );
		config.cost =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.level_req = csvGetInt(csv,  this.GetHeadIndex(  "level_req"  )   );
		config.type_level =  DTBuildingReq.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "type_level"  )   )   );
		config.block_req = csvGetInt(csv,  this.GetHeadIndex(  "block_req"  )   );
		config.function_open =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "function_open"  )   )   );
		config.UI = csvGetBoolean(csv,  this.GetHeadIndex(  "UI"  )   );
		config.effect_id =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "effect_id"  )   )   );
		config.zh_cn_effect_tips = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_effect_tips"  )   );
		config.zh_cn_level_tips = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_level_tips"  )   );
		config.building_small = csvGetInt(csv,  this.GetHeadIndex(  "building_small"  )   );

		


		this.addConfig(config);
    }
}