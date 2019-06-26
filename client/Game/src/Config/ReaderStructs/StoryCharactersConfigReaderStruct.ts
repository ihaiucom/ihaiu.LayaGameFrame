/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryCharactersConfig from "../ConfigExtends/StoryCharactersConfig";
import DTFixItemNum from "../ConfigExtends/DTFixItemNum";


export default class StoryCharactersConfigReaderStruct extends CsvConfigRender<    StoryCharactersConfig      >
{
	tableName = "StoryCharacters";


    ParseCsv(csv: string[] )
    {
		let config = new StoryCharactersConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.storyId = csvGetInt(csv,  this.GetHeadIndex(  "storyId"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.label_sex = csvGetInt(csv,  this.GetHeadIndex(  "label_sex"  )   );
		config.label_country = csvGetInt(csv,  this.GetHeadIndex(  "label_country"  )   );
		config.label_showType = csvGetInt(csv,  this.GetHeadIndex(  "label_showType"  )   );
		config.label_ageType = csvGetInt(csv,  this.GetHeadIndex(  "label_ageType"  )   );
		config.storyPositionId = csvGetInt(csv,  this.GetHeadIndex(  "storyPositionId"  )   );
		config.label_storyTag =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "label_storyTag"  )   )   );
		config.randomPropId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "randomPropId"  )   )   );
		config.storyEventId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "storyEventId"  )   )   );
		config.characterNum = csvGetInt(csv,  this.GetHeadIndex(  "characterNum"  )   );
		config.typePic = csvGetInt(csv,  this.GetHeadIndex(  "typePic"  )   );
		config.bestActor = csvGetInt(csv,  this.GetHeadIndex(  "bestActor"  )   );
		config.costItem =  DTFixItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "costItem"  )   )   );
		config.zh_cn_introduction = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_introduction"  )   );

		


		this.addConfig(config);
    }
}