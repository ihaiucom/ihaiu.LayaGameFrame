/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import AvatarConfig from "../ConfigExtends/AvatarConfig";
import DTVector2 from "../ConfigExtends/DTVector2";


export default class AvatarConfigReaderStruct extends CsvConfigRender<    AvatarConfig      >
{
	tableName = "Avatar";


    ParseCsv(csv: string[] )
    {
		let config = new AvatarConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name_e = csvGetString(csv,  this.GetHeadIndex(  "name_e"  )   );
		config.name_c = csvGetString(csv,  this.GetHeadIndex(  "name_c"  )   );
		config.body_icon = csvGetString(csv,  this.GetHeadIndex(  "body_icon"  )   );
		config.zh_cn_icon = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_icon"  )   );
		config.en_icon = csvGetString(csv,  this.GetHeadIndex(  "en_icon"  )   );
		config.piece_icon = csvGetString(csv,  this.GetHeadIndex(  "piece_icon"  )   );
		config.model_skin = csvGetString(csv,  this.GetHeadIndex(  "model_skin"  )   );
		config.model_bones = csvGetString(csv,  this.GetHeadIndex(  "model_bones"  )   );
		config.bg_pic = csvGetString(csv,  this.GetHeadIndex(  "bg_pic"  )   );
		config.co_vector =  DTVector2.parse(       csvGetString(csv,  this.GetHeadIndex(  "co_vector"  )   )   );

		


		this.addConfig(config);
    }
}