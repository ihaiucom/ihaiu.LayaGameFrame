/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorTrainConfig from "../ConfigExtends/ActorTrainConfig";


export default class ActorTrainConfigReaderStruct extends CsvConfigRender<    ActorTrainConfig      >
{
	tableName = "ActorTrain";


    ParseCsv(csv: string[] )
    {
		let config = new ActorTrainConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.train_type = csvGetInt(csv,  this.GetHeadIndex(  "train_type"  )   );
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.cn_name = csvGetString(csv,  this.GetHeadIndex(  "cn_name"  )   );
		config.property =  toIntArray(       csvGetString(csv,  this.GetHeadIndex(  "property"  )   )   );
		config.en_scene_name = csvGetString(csv,  this.GetHeadIndex(  "en_scene_name"  )   );
		config.cn_scene_name = csvGetString(csv,  this.GetHeadIndex(  "cn_scene_name"  )   );
		config.action = csvGetInt(csv,  this.GetHeadIndex(  "action"  )   );
		config.tips = csvGetString(csv,  this.GetHeadIndex(  "tips"  )   );

		


		this.addConfig(config);
    }
}