/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationSpecialItemStruct from "../../Generates/CommonBase/InformationSpecialItemStruct";
import InformationData from "../../../GameModule/DataStructs/InformationData";
import InformationCellData from "../../../GameModule/DataStructs/InformationCellData";
import IntelligenceState = proto.IntelligenceState;

export default class InformationSpecialItem extends InformationSpecialItemStruct
{
    updateView(info: InformationData, cellData: InformationCellData = null)
    {
        if(cellData)
            this.selected = cellData.informationData && cellData.informationData.id == info.id;
        this.m_titlle.text = info.config.name;
        this.m_num.text = info.count + "";
        let index = info.state == IntelligenceState.Read?0:1
        this.m_isNew.setSelectedIndex(index);
    }
}