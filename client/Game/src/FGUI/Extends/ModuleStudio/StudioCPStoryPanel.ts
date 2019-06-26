/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPStoryPanelStruct from "../../Generates/ModuleStudio/StudioCPStoryPanelStruct";
import StudioData from '../../../GameModule/DataStructs/StudioData';
import TEXT from '../../../Config/Keys/TEXT';

export default class StudioCPStoryPanel extends StudioCPStoryPanelStruct
{
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        
    }
    
    updateView(data: StudioData) {
        let story = data.story;
        this.m_storyIcon.m_icon.icon = story.iconUrl;
        this.m_title.text = story.storyNameAll;
        this.m_content.text = story.introduction;
        let result = data.result;
        // this.m_soldCountLb.text = result.ticketsSold;
        // this.m_profitLb.text = result.totalProfit;
        let scores = result.score.toFixed(1).split(".");
        this.m_score1.text = scores[0];
        this.m_score2.text = TEXT.StudioScorePart2.format(scores[1]);
    }
}