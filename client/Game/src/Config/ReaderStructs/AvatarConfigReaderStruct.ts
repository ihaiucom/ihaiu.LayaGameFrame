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
		config.en_name = csvGetString(csv,  this.GetHeadIndex(  "en_name"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );
		config.bodyIcon = csvGetString(csv,  this.GetHeadIndex(  "bodyIcon"  )   );
		config.halfIcon = csvGetString(csv,  this.GetHeadIndex(  "halfIcon"  )   );
		config.diamondHeadIcon = csvGetString(csv,  this.GetHeadIndex(  "diamondHeadIcon"  )   );
		config.zh_cn_icon = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_icon"  )   );
		config.en_icon = csvGetString(csv,  this.GetHeadIndex(  "en_icon"  )   );
		config.pieceIcon = csvGetString(csv,  this.GetHeadIndex(  "pieceIcon"  )   );
		config.modelSkin = csvGetString(csv,  this.GetHeadIndex(  "modelSkin"  )   );
		config.modelBones = csvGetString(csv,  this.GetHeadIndex(  "modelBones"  )   );
		config.bgPic = csvGetString(csv,  this.GetHeadIndex(  "bgPic"  )   );
		config.coVector =  DTVector2.parse(       csvGetString(csv,  this.GetHeadIndex(  "coVector"  )   )   );

		


		this.addConfig(config);
    }
}