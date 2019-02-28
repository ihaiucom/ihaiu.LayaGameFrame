/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import DialogueConfig from "../ConfigExtends/DialogueConfig";


export default class DialogueConfigReaderStruct extends CsvConfigRender<    DialogueConfig      >
{
	tableName = "Dialogue";


    ParseCsv(csv: string[] )
    {
		let config = new DialogueConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.name = csvGetString(csv,  this.GetHeadIndex(  "name"  )   );
		config.face = csvGetInt(csv,  this.GetHeadIndex(  "face"  )   );
		config.zh_cn_content = csvGetString(csv,  this.GetHeadIndex(  "zh_cn_content"  )   );

		


		this.addConfig(config);
    }
}