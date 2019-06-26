/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioContinueToastPanelStruct from "../../Generates/ModuleStudio/StudioContinueToastPanelStruct";
import StudioContinuedData from "../../../GameModule/DataStructs/StudioContinuedData";
import StudioStoryData from "../../../GameModule/DataStructs/StudioStoryData";
import GlobalConfig from '../../../Config/ConfigExtends/GlobalConfig';
import GlobalKey from '../../../Config/Keys/GlobalKey';
import StudioData from "../../../GameModule/DataStructs/StudioData";
import Game from "../../../Game";
import ChartProgressBar from '../CommonBase/ChartProgressBar';
import TEXT from '../../../Config/Keys/TEXT';
import IStudioContinuedUpdateData = proto.IStudioContinuedUpdateData;

export default class StudioContinueToastPanel extends StudioContinueToastPanelStruct
{
    protected constructFromXML(xml: any): void 
	{
        window["a"] = this;
        super.constructFromXML(xml);
    }

    public resetView()
    {
        this.alpha = 1;
        this.x = 0;
        this.y = 448;
        this.scaleX = 1;
        this.scaleY = 1;
    }
    
    continueData: StudioContinuedData = null;
    
    private _delayBeforeScroll: number = 0;
    updateView(data: StudioContinuedData = null) 
    {
        // this.isTest = true;
        this.continueData = data;
        this.resetView();
        if(!this.isTest)
        {
            let content = GlobalConfig.getValue4(GlobalKey.studio_income_prompt).format(data.storyNameAll,data.publicPraise.toFixed(1));
            this.m_content.text = content;
            let storyData = new StudioStoryData();
            storyData.storyId = data.storyId;
            storyData.storyType = data.storyType;
            this.m_storyIcon.updateView(storyData);
            this.m_storyType.updateView(data);
            this.m_title.text = data.storyNameAll; 
            this.m_coin.text = data.profit +"";
            let scores = data.publicPraise.toFixed(1).split(".");
            this.m_score1.text = scores[0];
            this.m_score2.text = TEXT.StudioScorePart2.format(scores[1]);
            // this.m_chartList.setVirtualAndLoop();
            this.m_chartList.setData(data);
            // this.setChartData(data.updateRandomHeights());
        }
        else
        {
            this.m_chartList.setData(StudioContinuedData.testData);
        }
    }
    isTest: boolean = false;
    onLoop()
    {
        if(this.isTest)
            return;
            
        if(!this.continueData)
            return;

        if(this.continueData.canRecieve) 
        {
            this.m_coin.text = this.continueData.profit+"";
        }

        if(!this.continueData.timeLeft)
        {
            Laya.timer.clearAll(this);
            this.m_isOnShow.setSelectedPage("off");
        }
        else 
        {
            this.m_isOnShow.setSelectedPage("on");
            this.m_timeLb.text = this.continueData.timeLeft;
        }
    }

    onWindowShow():void
    {
        this.updateView(Game.moduleModel.studioContinued.latestData);
        this.m_getBtn.onClick(this, this.getBtnOnClick);
        Laya.timer.loop(1000,this,this.onLoop);
    }

    onWindowHide(): void
    {
        Laya.timer.clearAll(this);
        this.m_getBtn.offClick(this, this.getBtnOnClick);
    }

   getBtnOnClick() {
        if(this.continueData)
        {
            if(this.continueData.profit > 0)
                Game.sender.studio.studioContinuedReceive(this.continueData.uid);
            else
                Game.system.toastText(TEXT.StudioContinueNotInTime);
        }
    }
}