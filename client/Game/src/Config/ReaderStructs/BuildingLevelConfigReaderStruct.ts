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
		config.breCost =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "breCost"  )   )   );
		config.breLevel = csvGetBoolean(csv,  this.GetHeadIndex(  "breLevel"  )   );
		config.breIndex = csvGetInt(csv,  this.GetHeadIndex(  "breIndex"  )   );
		config.seatNum = csvGetInt(csv,  this.GetHeadIndex(  "seatNum"  )   );
		config.breLevelMax = csvGetInt(csv,  this.GetHeadIndex(  "breLevelMax"  )   );
		config.prop_buildingCd = csvGetInt(csv,  this.GetHeadIndex(  "prop_buildingCd"  )   );
		config.cost =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "cost"  )   )   );
		config.levelReq = csvGetInt(csv,  this.GetHeadIndex(  "levelReq"  )   );
		config.typeLevel =  DTBuildingReq.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "typeLevel"  )   )   );
		config.produceItemId = csvGetInt(csv,  this.GetHeadIndex(  "produceItemId"  )   );
		config.produceItemType = csvGetInt(csv,  this.GetHeadIndex(  "produceItemType"  )   );
		config.prop_produceNum = csvGetInt(csv,  this.GetHeadIndex(  "prop_produceNum"  )   );
		config.prop_produceCd = csvGetInt(csv,  this.GetHeadIndex(  "prop_produceCd"  )   );
		config.prop_storyProbabilitySe = csvGetInt(csv,  this.GetHeadIndex(  "prop_storyProbabilitySe"  )   );
		config.prop_storyProbabilityCl = csvGetFloat(csv,  this.GetHeadIndex(  "prop_storyProbabilityCl"  )   );
		config.prop_storyNum = csvGetInt(csv,  this.GetHeadIndex(  "prop_storyNum"  )   );
		config.prop_criticalHitChance = csvGetFloat(csv,  this.GetHeadIndex(  "prop_criticalHitChance"  )   );
		config.prop_critEffect = csvGetFloat(csv,  this.GetHeadIndex(  "prop_critEffect"  )   );
		config.prop_reserve = csvGetInt(csv,  this.GetHeadIndex(  "prop_reserve"  )   );
		config.menuId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "menuId"  )   )   );
		config.ui = csvGetBoolean(csv,  this.GetHeadIndex(  "ui"  )   );
		config.levelRegionId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "levelRegionId"  )   )   );
		config.breakRegionId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "breakRegionId"  )   )   );
		config.regionLevel = csvGetString(csv,  this.GetHeadIndex(  "regionLevel"  )   );

		


		this.addConfig(config);
    }
}