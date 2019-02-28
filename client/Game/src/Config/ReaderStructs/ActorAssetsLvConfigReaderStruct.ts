/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import ActorAssetsLvConfig from "../ConfigExtends/ActorAssetsLvConfig";


export default class ActorAssetsLvConfigReaderStruct extends CsvConfigRender<    ActorAssetsLvConfig      >
{
	tableName = "ActorAssetsLv";


    ParseCsv(csv: string[] )
    {
		let config = new ActorAssetsLvConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.star1_num = csvGetInt(csv,  this.GetHeadIndex(  "star1_num"  )   );
		config.star2_num = csvGetInt(csv,  this.GetHeadIndex(  "star2_num"  )   );
		config.star3_num = csvGetInt(csv,  this.GetHeadIndex(  "star3_num"  )   );
		config.star4_num = csvGetInt(csv,  this.GetHeadIndex(  "star4_num"  )   );
		config.star5_num = csvGetInt(csv,  this.GetHeadIndex(  "star5_num"  )   );
		config.star6_num = csvGetInt(csv,  this.GetHeadIndex(  "star6_num"  )   );
		config.star1_value = csvGetInt(csv,  this.GetHeadIndex(  "star1_value"  )   );
		config.star2_value = csvGetInt(csv,  this.GetHeadIndex(  "star2_value"  )   );
		config.star3_value = csvGetInt(csv,  this.GetHeadIndex(  "star3_value"  )   );
		config.star4_value = csvGetInt(csv,  this.GetHeadIndex(  "star4_value"  )   );
		config.star5_value = csvGetInt(csv,  this.GetHeadIndex(  "star5_value"  )   );
		config.star6_value = csvGetInt(csv,  this.GetHeadIndex(  "star6_value"  )   );
		config.sex_1101 = csvGetInt(csv,  this.GetHeadIndex(  "sex_1101"  )   );
		config.sex_1102 = csvGetInt(csv,  this.GetHeadIndex(  "sex_1102"  )   );
		config.c_1201 = csvGetInt(csv,  this.GetHeadIndex(  "c_1201"  )   );
		config.c_1202 = csvGetInt(csv,  this.GetHeadIndex(  "c_1202"  )   );
		config.c_1203 = csvGetInt(csv,  this.GetHeadIndex(  "c_1203"  )   );
		config.p_1401 = csvGetInt(csv,  this.GetHeadIndex(  "p_1401"  )   );
		config.p_1402 = csvGetInt(csv,  this.GetHeadIndex(  "p_1402"  )   );
		config.y_1501 = csvGetInt(csv,  this.GetHeadIndex(  "y_1501"  )   );
		config.y_1502 = csvGetInt(csv,  this.GetHeadIndex(  "y_1502"  )   );
		config.star1_max = csvGetInt(csv,  this.GetHeadIndex(  "star1_max"  )   );
		config.star2_max = csvGetInt(csv,  this.GetHeadIndex(  "star2_max"  )   );
		config.star3_max = csvGetInt(csv,  this.GetHeadIndex(  "star3_max"  )   );
		config.star4_max = csvGetInt(csv,  this.GetHeadIndex(  "star4_max"  )   );
		config.star5_max = csvGetInt(csv,  this.GetHeadIndex(  "star5_max"  )   );
		config.star6_max = csvGetInt(csv,  this.GetHeadIndex(  "star6_max"  )   );

		


		this.addConfig(config);
    }
}