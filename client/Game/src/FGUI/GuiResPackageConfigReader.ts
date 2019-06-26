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
            config.packageName = "CommonBase";
            config.resBin = "CommonBase.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "CommonFx";
            config.resBin = "CommonFx.bin";
            config.resAtlas.push("CommonFx_atlas0.png");
            config.resAtlas.push("CommonFx_atlas5.png");
            config.resAtlas.push("CommonFx_atlas7.png");
            config.resAtlas.push("CommonFx_atlas8.png");
            config.resAtlas.push("CommonFx_atlas9.png");
            config.resAtlas.push("CommonFx_atlas_h96rx.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "CommonGame";
            config.resBin = "CommonGame.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameGM";
            config.resBin = "GameGM.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "GameLaunch";
            config.resBin = "GameLaunch.bin";
            config.resAtlas.push("GameLaunch_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang";
            config.resBin = "Lang.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang_en";
            config.resBin = "Lang_en.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang_zh-cn";
            config.resBin = "Lang_zh-cn.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Lang_zh_tw";
            config.resBin = "Lang_zh_tw.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBag";
            config.resBin = "ModuleBag.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleEmail";
            config.resBin = "ModuleEmail.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleLogin";
            config.resBin = "ModuleLogin.bin";
            config.resAtlas.push("ModuleLogin_atlas0.png");
            config.resAtlas.push("ModuleLogin_atlas_nz0c1.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleRank";
            config.resBin = "ModuleRank.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleSetting";
            config.resBin = "ModuleSetting.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleShop";
            config.resBin = "ModuleShop.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Sound";
            config.resBin = "Sound.bin";
            config.sounds.push("Sound_i7ne2w.mp3");
            config.sounds.push("Sound_tys94p.mp3");
            config.sounds.push("Sound_tys94s.wav");
            config.sounds.push("Sound_tys94t.wav");
            config.sounds.push("Sound_tys94v.wav");
            config.sounds.push("Sound_tys94w.wav");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleDialog";
            config.resBin = "SystemModuleDialog.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleGuide";
            config.resBin = "SystemModuleGuide.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleHome";
            config.resBin = "SystemModuleHome.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleMenu";
            config.resBin = "SystemModuleMenu.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModulePlot";
            config.resBin = "SystemModulePlot.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "SystemModuleTask";
            config.resBin = "SystemModuleTask.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_ResFont";
            config.resBin = "_ResFont.bin";
            config.resAtlas.push("_ResFont_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_ResImagePic";
            config.resBin = "_ResImagePic.bin";
            config.resAtlas.push("_ResImagePic_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_ResImageUI";
            config.resBin = "_ResImageUI.bin";
            config.resAtlas.push("_ResImageUI_atlas0.png");
            config.resAtlas.push("_ResImageUI_atlas2.png");
            config.resAtlas.push("_ResImageUI_atlas_f84s2.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_ResImageUIV1";
            config.resBin = "_ResImageUIV1.bin";
            config.resAtlas.push("_ResImageUIV1_atlas0.png");
            config.resAtlas.push("_ResImageUIV1_atlas0_1.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__ResImageTmp";
            config.resBin = "__ResImageTmp.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__Style";
            config.resBin = "__Style.bin";
            this.addconfig(config)





    }
}