/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import WeeklyQuestConfig from "../ConfigExtends/WeeklyQuestConfig";
import DTItemNum from "../ConfigExtends/DTItemNum";


export default class WeeklyQuestConfigReaderStruct extends CsvConfigRender<    WeeklyQuestConfig      >
{
	tableName = "WeeklyQuest";


    ParseCsv(csv: string[] )
    {
		let config = new WeeklyQuestConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.zh_cn_des = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_des"  )   );
		config.target_score = csvGetInt(csv,  this.GetHeadIndex(  "target_score"  )   );
		config.target_days = csvGetInt(csv,  this.GetHeadIndex(  "target_days"  )   );
		config.reward =  DTItemNum.parseArray(       csvGetString(csv,  this.GetHeadIndex(  "reward"  )   )   );

		


		this.addConfig(config);
    }
}