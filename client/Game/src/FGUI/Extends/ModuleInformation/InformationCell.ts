/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationCellStruct from "../../Generates/ModuleInformation/InformationCellStruct";
import InformationCellData from '../../../GameModule/DataStructs/InformationCellData';

export default class InformationCell extends InformationCellStruct
{
    updateView(data: InformationCellData)
    {
        if(data.informationData)
        {
            this.m_isSelect.setSelectedPage("selected");
            this.m_content.text = data.informationData.config.name;
        }
        else
        {
            this.m_isSelect.setSelectedPage("unselected");
        }
    }
}