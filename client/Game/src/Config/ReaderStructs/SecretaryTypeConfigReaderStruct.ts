/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import SecretaryTypeConfig from "../ConfigExtends/SecretaryTypeConfig";


export default class SecretaryTypeConfigReaderStruct extends CsvConfigRender<    SecretaryTypeConfig      >
{
	tableName = "SecretaryType";


    ParseCsv(csv: string[] )
    {
		let config = new SecretaryTypeConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.sex = csvGetString(csv,  this.GetHeadIndex(  "sex"  )   );
		config.pic = csvGetString(csv,  this.GetHeadIndex(  "pic"  )   );
		config.picid = csvGetInt(csv,  this.GetHeadIndex(  "picid"  )   );
		config.zh_cn_name = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_name"  )   );

		


		this.addConfig(config);
    }
}