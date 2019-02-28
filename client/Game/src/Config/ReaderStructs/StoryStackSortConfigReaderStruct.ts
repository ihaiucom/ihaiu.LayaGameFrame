/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryStackSortConfig from "../ConfigExtends/StoryStackSortConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";
import DTStoryEffect from "../ConfigExtends/DTStoryEffect";


export default class StoryStackSortConfigReaderStruct extends CsvConfigRender<    StoryStackSortConfig      >
{
	tableName = "StoryStackSort";


    ParseCsv(csv: string[] )
    {
		let config = new StoryStackSortConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.scripts =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "scripts"  )   )   );
		config.rewards =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "rewards"  )   )   );
		config.addition_scene =  DTStoryEffect.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "addition_scene"  )   )   );

		


		this.addConfig(config);
    }
}