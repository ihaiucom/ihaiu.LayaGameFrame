/////////////////////////////////////
// ihaiu.GenerateFguiResPackageConfig生成
// http://blog.ihaiu.com
/////////////////////////////////////

import Dictionary from "../Libs/Helpers/Dictionary";
import GuiResPackageConfig from "./GuiResPackageConfig";

// =====================
// fgui包资源配置列表
// ---------------------
export default class GuiResPackageConfigReader
{
    // 字典
    dict:Dictionary<string, GuiResPackageConfig> = new Dictionary<string, GuiResPackageConfig>();

    // 添加配置
    addconfig(config: GuiResPackageConfig)
    {
        this.dict.add(config.packageName, config);
    }

    // 获取配置
    getconfig(packageName: string)
    {
        return this.dict.getValue(packageName);
    }



    // 初始化
    install()
    {
        let config:GuiResPackageConfig;

		
		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameLaunch";
            config.resBin = "GameLaunch.bin";
            config.resAtlas.push("GameLaunch_atlas0.png");
            config.resAtlas.push("GameLaunch_atlas_f84s2.png");
            this.addconfig(config)





    }
}