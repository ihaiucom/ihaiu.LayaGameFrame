/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import BoxTargetConfig from "../ConfigExtends/BoxTargetConfig";


export default class BoxTargetConfigReaderStruct extends CsvConfigRender<    BoxTargetConfig      >
{
	tableName = "BoxTarget";


    ParseCsv(csv: string[] )
    {
		let config = new BoxTargetConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.target = csvGetInt(csv,  this.GetHeadIndex(  "target"  )   );
		config.zh_cn_dialog = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_dialog"  )   );
		config.zh_cn_title = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_title"  )   );
		config.zh_cn_targettext = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_targettext"  )   );
		config.zh_cn_timetext = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_timetext"  )   );
		config.time = csvGetInt(csv,  this.GetHeadIndex(  "time"  )   );
		config.zh_cn_reward = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_reward"  )   );
		config.zh_cn_final = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_final"  )   );
		config.zh_cn_button = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_button"  )   );

		


		this.addConfig(config);
    }
}