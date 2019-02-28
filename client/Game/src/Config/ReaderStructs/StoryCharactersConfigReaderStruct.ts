/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryCharactersConfig from "../ConfigExtends/StoryCharactersConfig";


export default class StoryCharactersConfigReaderStruct extends CsvConfigRender<    StoryCharactersConfig      >
{
	tableName = "StoryCharacters";


    ParseCsv(csv: string[] )
    {
		let config = new StoryCharactersConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.story_id = csvGetInt(csv,  this.GetHeadIndex(  "story_id"  )   );
		config.character_num = csvGetInt(csv,  this.GetHeadIndex(  "character_num"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.type = csvGetInt(csv,  this.GetHeadIndex(  "type"  )   );
		config.type_pic = csvGetInt(csv,  this.GetHeadIndex(  "type_pic"  )   );
		config.sex = csvGetInt(csv,  this.GetHeadIndex(  "sex"  )   );
		config.country = csvGetInt(csv,  this.GetHeadIndex(  "country"  )   );
		config.show_type = csvGetInt(csv,  this.GetHeadIndex(  "show_type"  )   );
		config.age_type = csvGetInt(csv,  this.GetHeadIndex(  "age_type"  )   );
		config.tags =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "tags"  )   )   );
		config.effect =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "effect"  )   )   );
		config.zh_cn_introduction = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_introduction"  )   );

		


		this.addConfig(config);
    }
}