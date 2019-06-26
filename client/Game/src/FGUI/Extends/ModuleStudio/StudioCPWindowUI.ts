/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPWindowUIStruct from "../../Generates/ModuleStudio/StudioCPWindowUIStruct";
import StudioData from "../../../GameModule/DataStructs/StudioData";
import Game from '../../../Game';
import StudioResultData from "../../../GameModule/DataStructs/StudioResultData";
import TEXT from "../../../Config/Keys/TEXT";
import PropId from '../../../GameFrame/Props/PropId';
import StudioPropItem from './StudioPropItem';
import StudioStep = proto.StudioStep;
import ChartPolygonPropertyTextOnlyName from "../CommonBase/ChartPolygonPropertyTextOnlyName";
export default class StudioCPWindowUI extends StudioCPWindowUIStruct
{
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_chart.init(150, 170, 0,  ChartPolygonPropertyTextOnlyName)
        this.m_propList.itemRenderer = Laya.Handler.create(this, this.ItemRenderer, null, false);
        this.m_propList.itemProvider = Laya.Handler.create(this, this.ItemProvider, null, false);
    }
    
    private get studioData(): StudioData {
        return Game.moduleModel.studio.current;
    }
    
    private get resultData(): StudioResultData {
        return this.studioData.result;
    }
   
    // 窗口显示
    onWindowShow(): void
    {
        this.m_commentPanel.m_nextBtn.onClick(this,this.nextBtnOnClick);
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_commentPanel.m_nextBtn.offClick(this,this.nextBtnOnClick);
    }


    updateView() {
        let starCount = Math.ceil(this.resultData.score);
        this.m_storyPanel.updateView(this.studioData);
        this.m_chart.setData(this.studioData.allProps);
        this.m_propList.numItems = 5;
        this.m_commentPanel.updateView(this.resultData);
        let result = this.resultData;
    }

    ItemRenderer(index: number, item: StudioPropItem) {
        let prop = this.studioData.allProps[index];
        item.updateView(prop);
    }

    ItemProvider(index: number) {
        return StudioPropItem.URL;
    }

    nextBtnOnClick() {

        Game.sender.studio.studioNextStep(StudioStep.end);

        // Game.moduleModel.studio.setStep(StudioStep.end);
    }

}