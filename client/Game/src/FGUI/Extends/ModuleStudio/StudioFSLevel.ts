/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioFSLevelStruct from "../../Generates/ModuleStudio/StudioFSLevelStruct";
import StudioResultData from '../../../GameModule/DataStructs/StudioResultData';

export default class StudioFSLevel extends StudioFSLevelStruct
{
    updateView(result: StudioResultData) {
        this.m_evaluationLevel.icon = result.evaluationLevelIcon;
    }
}