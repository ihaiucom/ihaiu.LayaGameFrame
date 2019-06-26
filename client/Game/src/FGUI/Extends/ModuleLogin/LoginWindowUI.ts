/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LoginWindowUIStruct from "../../Generates/ModuleLogin/LoginWindowUIStruct";
import Res from "../../../Config/Keys/Res";
import R from "../../../Config/Keys/R";
import Game from "../../../Game";
import LoginWindow from "../../../GameModule/ViewWindows/LoginWindow";
import ChartPolygonPropertyView from "../CommonBase/ChartPolygonPropertyView";
import StudioMovieClip01Normal from "../ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import StudioContinueInfoUI from '../ModuleStudio/StudioContinueInfoUI';
import StudioContinueWindowUI from "../ModuleStudio/StudioContinueWindowUI";
import FguiHelper from '../../../Libs/Helpers/FguiHelper';
import DailyTaskUI from '../ModuleDailyTask/DailyTaskUI';
import SegmentProgressHelper from '../../../Libs/Helpers/SegmentProgressHelper';
import StudioMovieClipSkill from '../ModuleStudioMovieClip00Common/StudioMovieClipSkill';

export default class LoginWindowUI extends LoginWindowUIStruct
{
    // 窗口
    moduleWindow: LoginWindow;

	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_screenBG.m_icon.url = Res.getSpritePathHasExt(R.sprite.Launch_launch);
        window["aa"] = this;
        this.test();
    }



    
    // 如果定义了该方法，主窗口显示时将被调
    onWindowShow()
    {
        this.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
        this.m_txt_resVer.text = "ResVersion:" + Game.version.localResVersionData.toString();
    }


    // 如果定义了该方法,主窗口关闭时将被调
    onWindowHide()
    {

    }

    test()
    {
        this.m_testBtn.onClick(this, this.onClickTestButton);
        this.m_testBtn.visible = true;
    }
    studioSkill: StudioMovieClipSkill;
    dailyTask: DailyTaskUI;
    
    continueWindow: StudioContinueWindowUI;
    chartWindow: StudioContinueInfoUI;
    // studioMovieClip: StudioMovieClip;
    studioMovieClip: StudioMovieClip01Normal;
    chart: ChartPolygonPropertyView
    onClickTestButton()
    {

        this.studioSkill = StudioMovieClipSkill.createInstance();
        this.addChild(this.studioSkill);
        FguiHelper.callChildOnWindowShow(this.studioSkill);
        
        // this.dailyTask = DailyTaskUI.createInstance();
        // this.addChild(this.dailyTask);
        // FguiHelper.callChildOnWindowShow(this.dailyTask);
        
        // this.chartWindow = StudioContinueInfoUI.createInstance();
        // this.addChild(this.chartWindow);
        // FguiHelper.callChildOnWindowShow(this.chartWindow);

        // this.continueWindow = StudioContinueWindowUI.createInstance();
        // this.addChild(this.continueWindow);
        // FguiHelper.callChildOnWindowShow(this.continueWindow);
        
        
        // this.studioMovieClip = StudioMovieClip01Normal.createInstance();
        // this.addChild(this.studioMovieClip);
        // this.studioMovieClip.onWindowShow();

        // this.chart = ChartPolygonPropertyView.createInstance();
        // this.chart.x = Laya.stage.width >> 1;
        // this.chart.y = 200;
        // this.addChild(this.chart);
        
    }

    testTask(val: number)
    {

        let result = SegmentProgressHelper.getRate(val, [25,35,50], 10, 70);
        console.log(result);
    }
}