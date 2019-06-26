/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioContinueListStruct from "../../Generates/ModuleStudio/StudioContinueListStruct";
import StudioContinuedData from '../../../GameModule/DataStructs/StudioContinuedData';
import Game from '../../../Game';
import StudioContinuedModel from '../../../GameModule/DataModels/StudioContinuedModel';

export default class StudioContinueList extends StudioContinueListStruct
{
    get model(): StudioContinuedModel
    {
        return Game.moduleModel.studioContinued;
    }
 
     // 窗口隐藏
     onWindowHide(): void
     {
        this.clear();
    }
    
    updateView(data: StudioContinuedData[])
    {
        this.m_content.updateView(data);
    }

    removeItem(index: number)
    {
        this.m_content.removeItem(index);
    }
    
    clear()
    {
        this.m_content.clear();
    }
}