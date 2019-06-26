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
            config.packageName = "BlackSkin";
            config.resBin = "BlackSkin.bin";
            config.resAtlas.push("BlackSkin_atlas0.png");
            this.addconfig(config)




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
            config.packageName = "CommonNumber";
            config.resBin = "CommonNumber.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "FontA";
            config.resBin = "FontA.bin";
            config.resAtlas.push("FontA_atlas0.png");
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
            config.packageName = "ModuleActivity";
            config.resBin = "ModuleActivity.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleActor";
            config.resBin = "ModuleActor.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleActorGJC";
            config.resBin = "ModuleActorGJC.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleArtist";
            config.resBin = "ModuleArtist.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBag";
            config.resBin = "ModuleBag.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBuilding";
            config.resBin = "ModuleBuilding.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBuildingActor";
            config.resBin = "ModuleBuildingActor.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleBuildingGJC";
            config.resBin = "ModuleBuildingGJC.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleDailyTask";
            config.resBin = "ModuleDailyTask.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleEmail";
            config.resBin = "ModuleEmail.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleInformation";
            config.resBin = "ModuleInformation.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleInformationGJC";
            config.resBin = "ModuleInformationGJC.bin";
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
            config.packageName = "ModuleStory";
            config.resBin = "ModuleStory.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleStoryGJC";
            config.resBin = "ModuleStoryGJC.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleStoryLottery";
            config.resBin = "ModuleStoryLottery.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleStudio";
            config.resBin = "ModuleStudio.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleStudioMovieClip";
            config.resBin = "ModuleStudioMovieClip.bin";
            config.resAtlas.push("ModuleStudioMovieClip_atlas0.png");
            config.resAtlas.push("ModuleStudioMovieClip_atlas0_1.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleStudioMovieClip00Common";
            config.resBin = "ModuleStudioMovieClip00Common.bin";
            config.resAtlas.push("ModuleStudioMovieClip00Common_atlas0.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "ModuleStudioMovieClip01Normal";
            config.resBin = "ModuleStudioMovieClip01Normal.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "Sound";
            config.resBin = "Sound.bin";
            config.sounds.push("Sound_i7ne2w.mp3");
            config.sounds.push("Sound_s3xz1n.mp3");
            config.sounds.push("Sound_s3xz1o.mp3");
            config.sounds.push("Sound_s3xz1p.mp3");
            config.sounds.push("Sound_tys94p.mp3");
            config.sounds.push("Sound_tys94s.wav");
            config.sounds.push("Sound_tys94t.wav");
            config.sounds.push("Sound_tys94u.wav");
            config.sounds.push("Sound_tys94v.wav");
            config.sounds.push("Sound_tys94w.wav");
            config.sounds.push("Sound_tys94x.wav");
            config.sounds.push("Sound_tys94y.wav");
            config.sounds.push("Sound_tys94z.wav");
            config.sounds.push("Sound_tys950.wav");
            config.sounds.push("Sound_tys951.wav");
            config.sounds.push("Sound_tys952.wav");
            config.sounds.push("Sound_tys953.wav");
            config.sounds.push("Sound_tys954.wav");
            config.sounds.push("Sound_tys955.wav");
            config.sounds.push("Sound_tys956.wav");
            config.sounds.push("Sound_tys957.wav");
            config.sounds.push("Sound_tys958.wav");
            config.sounds.push("Sound_tys959.wav");
            config.sounds.push("Sound_tys95a.wav");
            config.sounds.push("Sound_tys95b.wav");
            config.sounds.push("Sound_tys95c.wav");
            config.sounds.push("Sound_tys95d.wav");
            config.sounds.push("Sound_tys95e.wav");
            config.sounds.push("Sound_tys95f.wav");
            config.sounds.push("Sound_tys95g.wav");
            config.sounds.push("Sound_tys95h.wav");
            config.sounds.push("Sound_tys95i.wav");
            config.sounds.push("Sound_tys95j.wav");
            config.sounds.push("Sound_tys95k.wav");
            config.sounds.push("Sound_tys95l.wav");
            config.sounds.push("Sound_tys95m.wav");
            config.sounds.push("Sound_tys95n.wav");
            config.sounds.push("Sound_tys95o.wav");
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
            config.packageName = "SystemModuleHomeMap";
            config.resBin = "SystemModuleHomeMap.bin";
            config.resAtlas.push("SystemModuleHomeMap_atlas0.png");
            config.resAtlas.push("SystemModuleHomeMap_atlas0_1.png");
            config.resAtlas.push("SystemModuleHomeMap_atlas0_2.png");
            config.resAtlas.push("SystemModuleHomeMap_atlas0_3.png");
            config.resAtlas.push("SystemModuleHomeMap_atlas0_4.png");
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
            config.packageName = "Test";
            config.resBin = "Test.bin";
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
            config.resAtlas.push("_ResImagePic_atlas0_1.png");
            config.resAtlas.push("_ResImagePic_atlas0_2.png");
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
            config.resAtlas.push("_ResImageUIV1_atlas0_2.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "_Test";
            config.resBin = "_Test.bin";
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__ResImageTmp";
            config.resBin = "__ResImageTmp.bin";
            config.resAtlas.push("__ResImageTmp_atlas0.png");
            config.resAtlas.push("__ResImageTmp_atlas0_1.png");
            config.resAtlas.push("__ResImageTmp_atlas0_2.png");
            config.resAtlas.push("__ResImageTmp_atlas0_3.png");
            this.addconfig(config)




		config = new GuiResPackageConfig();
            config.resDir = "fgui";
            config.packageName = "__Style";
            config.resBin = "__Style.bin";
            this.addconfig(config)





    }
}