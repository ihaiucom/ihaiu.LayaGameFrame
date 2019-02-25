import Dictionary from "../Libs/Helpers/Dictionary";
import GuiResPackageConfig from "./GuiResPackageConfig";

/////////////////////////////////////
// ihaiu.GenerateFguiResPackageConfig生成
// http://blog.ihaiu.com
/////////////////////////////////////


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
        config.packageName = "Activity";
        config.resBin = "Activity.bin";
        config.resAtlas.push("Activity_atlas0.png");
        config.resAtlas.push("Activity_atlas_ac07l.png");
        config.resAtlas.push("Activity_atlas_ac07m.png");
        config.resAtlas.push("Activity_atlas_f9f11d.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "ArtistDetail";
        config.resBin = "ArtistDetail.bin";
        config.resAtlas.push("ArtistDetail_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "ArtistDic";
        config.resBin = "ArtistDic.bin";
        config.resAtlas.push("ArtistDic_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Bag";
        config.resBin = "Bag.bin";
        config.resAtlas.push("Bag_atlas0.png");
        config.resAtlas.push("Bag_atlas_ha6g19.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Building";
        config.resBin = "Building.bin";
        config.resAtlas.push("Building_atlas0.png");
        config.resAtlas.push("Building_atlas_cpc911l.png");
        config.resAtlas.push("Building_atlas_dyfe120.png");
        config.resAtlas.push("Building_atlas_g9i613x.png");
        config.resAtlas.push("Building_atlas_g9i613y.png");
        config.resAtlas.push("Building_atlas_iacm12l.png");
        config.resAtlas.push("Building_atlas_iacm12m.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Common";
        config.resBin = "Common.bin";
        config.resAtlas.push("Common_atlas0.png");
        config.resAtlas.push("Common_atlas0_1.png");
        config.resAtlas.push("Common_atlas0_2.png");
        config.resAtlas.push("Common_atlas2.png");
        config.resAtlas.push("Common_atlas_dlxft23v.png");
        config.resAtlas.push("Common_atlas_dm31t22d.png");
        config.resAtlas.push("Common_atlas_g8fc2b.png");
        config.resAtlas.push("Common_atlas_gpiht25w.png");
        config.resAtlas.push("Common_atlas_h8rtt216.png");
        config.resAtlas.push("Common_atlas_ha6g19.png");
        config.resAtlas.push("Common_atlas_hh765m.png");
        config.resAtlas.push("Common_atlas_hh765n.png");
        config.resAtlas.push("Common_atlas_hh7681.png");
        config.resAtlas.push("Common_atlas_hh7688.png");
        config.resAtlas.push("Common_atlas_hz3ma.png");
        config.resAtlas.push("Common_atlas_jeka4a.png");
        config.resAtlas.push("Common_atlas_jeka4b.png");
        config.resAtlas.push("Common_atlas_l40ut23d.png");
        config.resAtlas.push("Common_atlas_m9lgt221.png");
        config.resAtlas.push("Common_atlas_tpm8cx.png");
        config.resAtlas.push("Common_atlas_tpm8cy.png");
        config.resAtlas.push("Common_atlas_v1nit24l.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Cooperation";
        config.resBin = "Cooperation.bin";
        config.resAtlas.push("Cooperation_atlas0.png");
        config.resAtlas.push("Cooperation_atlas_g8fc1h.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim1";
        config.resBin = "FilmScreenAnim1.bin";
        config.resAtlas.push("FilmScreenAnim1_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim10";
        config.resBin = "FilmScreenAnim10.bin";
        config.resAtlas.push("FilmScreenAnim10_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim2";
        config.resBin = "FilmScreenAnim2.bin";
        config.resAtlas.push("FilmScreenAnim2_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim3";
        config.resBin = "FilmScreenAnim3.bin";
        config.resAtlas.push("FilmScreenAnim3_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim4";
        config.resBin = "FilmScreenAnim4.bin";
        config.resAtlas.push("FilmScreenAnim4_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim5";
        config.resBin = "FilmScreenAnim5.bin";
        config.resAtlas.push("FilmScreenAnim5_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim6";
        config.resBin = "FilmScreenAnim6.bin";
        config.resAtlas.push("FilmScreenAnim6_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim7";
        config.resBin = "FilmScreenAnim7.bin";
        config.resAtlas.push("FilmScreenAnim7_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim8";
        config.resBin = "FilmScreenAnim8.bin";
        config.resAtlas.push("FilmScreenAnim8_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenAnim9";
        config.resBin = "FilmScreenAnim9.bin";
        config.resAtlas.push("FilmScreenAnim9_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "FilmScreenCommon";
        config.resBin = "FilmScreenCommon.bin";
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Fx";
        config.resBin = "Fx.bin";
        config.resAtlas.push("Fx_atlas0.png");
        config.resAtlas.push("Fx_atlas_8ukwoo.png");
        config.resAtlas.push("Fx_atlas_b2tpp9.png");
        config.resAtlas.push("Fx_atlas_b2tppb.png");
        config.resAtlas.push("Fx_atlas_b2tppc.png");
        config.resAtlas.push("Fx_atlas_i9qvfb.png");
        config.resAtlas.push("Fx_atlas_ihjedv.png");
        config.resAtlas.push("Fx_atlas_kowfil.png");
        config.resAtlas.push("Fx_atlas_kowfim.png");
        config.resAtlas.push("Fx_atlas_kowfin.png");
        config.resAtlas.push("Fx_atlas_o7trnh.png");
        config.resAtlas.push("Fx_atlas_o7trni.png");
        config.resAtlas.push("Fx_atlas_oecql4.png");
        config.resAtlas.push("Fx_atlas_qmotc5.png");
        config.resAtlas.push("Fx_atlas_rlky5w.png");
        config.resAtlas.push("Fx_atlas_rlky5x.png");
        config.resAtlas.push("Fx_atlas_ru9k90.png");
        config.resAtlas.push("Fx_atlas_s60hf7.png");
        config.resAtlas.push("Fx_atlas_s60hf8.png");
        config.resAtlas.push("Fx_atlas_sv5mem.png");
        config.resAtlas.push("Fx_atlas_sv5men.png");
        config.resAtlas.push("Fx_atlas_sv5meo.png");
        config.resAtlas.push("Fx_atlas_sv5mep.png");
        config.resAtlas.push("Fx_atlas_sv5meq.png");
        config.resAtlas.push("Fx_atlas_sv5mer.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "GM";
        config.resBin = "GM.bin";
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "GoldExchange";
        config.resBin = "GoldExchange.bin";
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Guide";
        config.resBin = "Guide.bin";
        config.resAtlas.push("Guide_atlas0.png");
        config.resAtlas.push("Guide_atlas1.png");
        config.resAtlas.push("Guide_atlas_vysd1z.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "GuideComplete";
        config.resBin = "GuideComplete.bin";
        config.resAtlas.push("GuideComplete_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "LangEn";
        config.resBin = "LangEn.bin";
        config.resAtlas.push("LangEn_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "LangZhCn";
        config.resBin = "LangZhCn.bin";
        config.resAtlas.push("LangZhCn_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "LevelPackage";
        config.resBin = "LevelPackage.bin";
        config.resAtlas.push("LevelPackage_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Login";
        config.resBin = "Login.bin";
        config.resAtlas.push("Login_atlas0.png");
        config.resAtlas.push("Login_atlas_8zgr15.png");
        config.resAtlas.push("Login_atlas_dk944g.png");
        config.resAtlas.push("Login_atlas_dk944n.png");
        config.resAtlas.push("Login_atlas_dk944t.png");
        config.resAtlas.push("Login_atlas_h48r4u.png");
        config.resAtlas.push("Login_atlas_h48r4v.png");
        config.resAtlas.push("Login_atlas_l1hm4w.png");
        config.resAtlas.push("Login_atlas_opi656.png");
        config.resAtlas.push("Login_atlas_opi657.png");
        config.resAtlas.push("Login_atlas_opi659.png");
        config.resAtlas.push("Login_atlas_opi65a.png");
        config.resAtlas.push("Login_atlas_wrr65g.png");
        config.resAtlas.push("Login_atlas_wrr65p.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "MainUI";
        config.resBin = "MainUI.bin";
        config.resAtlas.push("MainUI_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Manage";
        config.resBin = "Manage.bin";
        config.resAtlas.push("Manage_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Market";
        config.resBin = "Market.bin";
        config.resAtlas.push("Market_atlas0.png");
        config.resAtlas.push("Market_atlas_ha6gfy.png");
        config.resAtlas.push("Market_atlas_ha6gg4.png");
        config.resAtlas.push("Market_atlas_ha6gg6.png");
        config.resAtlas.push("Market_atlas_ha6gg7.png");
        config.resAtlas.push("Market_atlas_ha6gg8.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Mission";
        config.resBin = "Mission.bin";
        config.resAtlas.push("Mission_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Notice";
        config.resBin = "Notice.bin";
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "OpenAnima";
        config.resBin = "OpenAnima.bin";
        config.resAtlas.push("OpenAnima_atlas0.png");
        config.resAtlas.push("OpenAnima_atlas0_1.png");
        config.resAtlas.push("OpenAnima_atlas0_2.png");
        config.resAtlas.push("OpenAnima_atlas0_3.png");
        config.resAtlas.push("OpenAnima_atlas_boch17.png");
        config.resAtlas.push("OpenAnima_atlas_boch2e.png");
        config.resAtlas.push("OpenAnima_atlas_boch2f.png");
        config.resAtlas.push("OpenAnima_atlas_bochg.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Oscar";
        config.resBin = "Oscar.bin";
        config.resAtlas.push("Oscar_atlas0.png");
        config.resAtlas.push("Oscar_atlas_rh6r1c.png");
        config.resAtlas.push("Oscar_atlas_rh6r1t.png");
        config.resAtlas.push("Oscar_atlas_rh6r1u.png");
        config.resAtlas.push("Oscar_atlas_rh6r1v.png");
        config.resAtlas.push("Oscar_atlas_rh6r1w.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "PfSkin";
        config.resBin = "PfSkin.bin";
        config.resAtlas.push("PfSkin_atlas0.png");
        config.resAtlas.push("PfSkin_atlas_dk94t21h.png");
        config.resAtlas.push("PfSkin_atlas_gjpxt24h.png");
        config.resAtlas.push("PfSkin_atlas_gjpxt24i.png");
        config.resAtlas.push("PfSkin_atlas_iacmt1w7.png");
        config.resAtlas.push("PfSkin_atlas_l7rut1xa.png");
        config.resAtlas.push("PfSkin_atlas_l7rut1xe.png");
        config.resAtlas.push("PfSkin_atlas_l7rut1z7.png");
        config.resAtlas.push("PfSkin_atlas_l7rut1z9.png");
        config.resAtlas.push("PfSkin_atlas_sm6tt1ve.png");
        config.resAtlas.push("PfSkin_atlas_xqnft24q.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "PlayerInfo";
        config.resBin = "PlayerInfo.bin";
        config.resAtlas.push("PlayerInfo_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "PopUp";
        config.resBin = "PopUp.bin";
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Produce";
        config.resBin = "Produce.bin";
        config.resAtlas.push("Produce_atlas0.png");
        config.resAtlas.push("Produce_atlas_9mu01t.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Rank";
        config.resBin = "Rank.bin";
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Sound";
        config.resBin = "Sound.bin";
        config.sounds.push("Sound_806p32.ogg");
        config.sounds.push("Sound_i7ne2w.mp3");
        config.sounds.push("Sound_l1r646.ogg");
        config.sounds.push("Sound_qlot4g.mp3");
        config.sounds.push("Sound_qlot4h.mp3");
        config.sounds.push("Sound_qlot4i.mp3");
        config.sounds.push("Sound_qlot4j.mp3");
        config.sounds.push("Sound_qlot4k.mp3");
        config.sounds.push("Sound_qlot4l.mp3");
        config.sounds.push("Sound_qlot4m.mp3");
        config.sounds.push("Sound_qlot4n.mp3");
        config.sounds.push("Sound_qlot4o.mp3");
        config.sounds.push("Sound_r6c533.ogg");
        config.sounds.push("Sound_r6c534.ogg");
        config.sounds.push("Sound_r6c535.ogg");
        config.sounds.push("Sound_r6c536.ogg");
        config.sounds.push("Sound_r6c537.ogg");
        config.sounds.push("Sound_r6c538.ogg");
        config.sounds.push("Sound_r6c539.ogg");
        config.sounds.push("Sound_r6c53a.ogg");
        config.sounds.push("Sound_r6c53b.ogg");
        config.sounds.push("Sound_r6c53c.ogg");
        config.sounds.push("Sound_r6c53d.ogg");
        config.sounds.push("Sound_r6c53e.ogg");
        config.sounds.push("Sound_r6c53f.ogg");
        config.sounds.push("Sound_r6c53g.ogg");
        config.sounds.push("Sound_r6c53h.ogg");
        config.sounds.push("Sound_r6c53i.ogg");
        config.sounds.push("Sound_r6c53j.ogg");
        config.sounds.push("Sound_r6c53k.ogg");
        config.sounds.push("Sound_r6c53l.ogg");
        config.sounds.push("Sound_r6c53m.ogg");
        config.sounds.push("Sound_r6c53n.ogg");
        config.sounds.push("Sound_r6c53o.ogg");
        config.sounds.push("Sound_r6c53p.ogg");
        config.sounds.push("Sound_r6c53q.ogg");
        config.sounds.push("Sound_r6c53r.ogg");
        config.sounds.push("Sound_r6c53s.ogg");
        config.sounds.push("Sound_r6c53t.ogg");
        config.sounds.push("Sound_r6c53u.ogg");
        config.sounds.push("Sound_r6c53v.ogg");
        config.sounds.push("Sound_r6c53w.ogg");
        config.sounds.push("Sound_r6c53x.ogg");
        config.sounds.push("Sound_r6c53y.ogg");
        config.sounds.push("Sound_r6c53z.ogg");
        config.sounds.push("Sound_r6c540.ogg");
        config.sounds.push("Sound_r6c541.ogg");
        config.sounds.push("Sound_r6c542.ogg");
        config.sounds.push("Sound_r6c543.ogg");
        config.sounds.push("Sound_r6c544.ogg");
        config.sounds.push("Sound_r6c545.ogg");
        config.sounds.push("Sound_s3xz1n.mp3");
        config.sounds.push("Sound_s3xz1o.mp3");
        config.sounds.push("Sound_s3xz1p.mp3");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Street";
        config.resBin = "Street.bin";
        config.resAtlas.push("Street_atlas0.png");
        config.resAtlas.push("Street_atlas_724u2u.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "System";
        config.resBin = "System.bin";
        config.resAtlas.push("System_atlas0.png");
        config.resAtlas.push("System_atlas_5sasa.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "SystemSettings";
        config.resBin = "SystemSettings.bin";
        config.resAtlas.push("SystemSettings_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "Talk";
        config.resBin = "Talk.bin";
        config.resAtlas.push("Talk_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "WarContinue";
        config.resBin = "WarContinue.bin";
        config.resAtlas.push("WarContinue_atlas0.png");
        this.addconfig(config)




        config = new GuiResPackageConfig();
        config.resDir = "fgui";
        config.packageName = "WarMovie";
        config.resBin = "WarMovie.bin";
        config.resAtlas.push("WarMovie_atlas0.png");
        config.resAtlas.push("WarMovie_atlas_lsbtdw.png");
        config.resAtlas.push("WarMovie_atlas_r0zd1e.png");
        config.resAtlas.push("WarMovie_atlas_r0zd1f.png");
        config.resAtlas.push("WarMovie_atlas_r0zd1g.png");
        config.resAtlas.push("WarMovie_atlas_r0zd1x.png");
        config.resAtlas.push("WarMovie_atlas_r0zd3p.png");
        this.addconfig(config)





    }
}