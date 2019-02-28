/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryGoalsConfig from "../ConfigExtends/StoryGoalsConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class StoryGoalsConfigReaderStruct extends CsvConfigRender<    StoryGoalsConfig      >
{
	tableName = "StoryGoals";


    ParseCsv(csv: string[] )
    {
		let config = new StoryGoalsConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.storyid = csvGetInt(csv,  this.GetHeadIndex(  "storyid"  )   );
		config.rank = csvGetInt(csv,  this.GetHeadIndex(  "rank"  )   );
		config.property1 = csvGetInt(csv,  this.GetHeadIndex(  "property1"  )   );
		config.value1 = csvGetInt(csv,  this.GetHeadIndex(  "value1"  )   );
		config.property2 = csvGetInt(csv,  this.GetHeadIndex(  "property2"  )   );
		config.value2 = csvGetInt(csv,  this.GetHeadIndex(  "value2"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );
		config.info = csvGetString(csv,  this.GetHeadIndex(  "info"  )   );

		


		this.addConfig(config);
    }
}