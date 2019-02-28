/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import CsvConfigRender from "../CsvConfigRender";
import GameVersionConfig from "../ConfigExtends/GameVersionConfig";


export default class GameVersionConfigReaderStruct extends CsvConfigRender<    GameVersionConfig      >
{
	tableName = "GameVersion";


    ParseCsv(csv: string[] )
    {
		let config = new GameVersionConfig();


		config.id = csvGetInt(csv,  this.GetHeadIndex(  "id"  )   );
		config.Platform = csvGetString(csv,  this.GetHeadIndex(  "Platform"  )   );
		config.ApplicationId = csvGetString(csv,  this.GetHeadIndex(  "ApplicationId"  )   );
		config.ResWeb = csvGetString(csv,  this.GetHeadIndex(  "ResWeb"  )   );
		config.AppVersion = csvGetString(csv,  this.GetHeadIndex(  "AppVersion"  )   );
		config.PartialVersion = csvGetString(csv,  this.GetHeadIndex(  "PartialVersion"  )   );
		config.PartialFolder = csvGetString(csv,  this.GetHeadIndex(  "PartialFolder"  )   );
		config.PatchVersion = csvGetString(csv,  this.GetHeadIndex(  "PatchVersion"  )   );
		config.PatchFolder = csvGetString(csv,  this.GetHeadIndex(  "PatchFolder"  )   );
		config.IsPartialAlert = csvGetBoolean(csv,  this.GetHeadIndex(  "IsPartialAlert"  )   );
		config.IsPatchAlert = csvGetBoolean(csv,  this.GetHeadIndex(  "IsPatchAlert"  )   );
		config.VisiableGM = csvGetBoolean(csv,  this.GetHeadIndex(  "VisiableGM"  )   );
		config.IsErrorAlert = csvGetBoolean(csv,  this.GetHeadIndex(  "IsErrorAlert"  )   );
		config.AppDownloadWeb = csvGetString(csv,  this.GetHeadIndex(  "AppDownloadWeb"  )   );

		


		this.addConfig(config);
    }
}