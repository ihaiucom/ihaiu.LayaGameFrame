/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationSpecialCellStruct from "../../Generates/ModuleInformation/InformationSpecialCellStruct";
import InformationCellData from "../../../GameModule/DataStructs/InformationCellData";

export default class InformationSpecialCell extends InformationSpecialCellStruct
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