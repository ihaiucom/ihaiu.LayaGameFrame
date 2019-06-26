/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import StoryConfig from "../ConfigExtends/StoryConfig";


export default class StoryConfigReaderStruct extends CsvConfigRender<    StoryConfig      >
{
	tableName = "Story";


    ParseCsv(csv: string[] )
    {
		let config = new StoryConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_storyName = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_storyName"  )   );
		config.storySeriesId = csvGetInt(csv,  this.GetHeadIndex(  "storySeriesId"  )   );
		config.season = csvGetInt(csv,  this.GetHeadIndex(  "season"  )   );
		config.episode = csvGetInt(csv,  this.GetHeadIndex(  "episode"  )   );
		config.preconditionStory = csvGetInt(csv,  this.GetHeadIndex(  "preconditionStory"  )   );
		config.label_star = csvGetInt(csv,  this.GetHeadIndex(  "label_star"  )   );
		config.label_storyType = csvGetInt(csv,  this.GetHeadIndex(  "label_storyType"  )   );
		config.storyRate = csvGetFloat(csv,  this.GetHeadIndex(  "storyRate"  )   );
		config.storyStackSortId = csvGetInt(csv,  this.GetHeadIndex(  "storyStackSortId"  )   );
		config.storyEventId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "storyEventId"  )   )   );
		config.gameRandomNameId = csvGetInt(csv,  this.GetHeadIndex(  "gameRandomNameId"  )   );
		config.storyCharacterId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "storyCharacterId"  )   )   );
		config.zh_cn_introduction = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_introduction"  )   );
		config.posterName = csvGetInt(csv,  this.GetHeadIndex(  "posterName"  )   );
		config.sceneName = csvGetInt(csv,  this.GetHeadIndex(  "sceneName"  )   );
		config.cost = csvGetInt(csv,  this.GetHeadIndex(  "cost"  )   );
		config.goldCost = csvGetInt(csv,  this.GetHeadIndex(  "goldCost"  )   );
		config.rewardId =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "rewardId"  )   )   );
		config.firstRewardProps =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "firstRewardProps"  )   )   );
		config.continuedRewardProps =  toStringArray(       csvGetString(csv,  this.GetHeadIndex(  "continuedRewardProps"  )   )   );

		


		this.addConfig(config);
    }
}