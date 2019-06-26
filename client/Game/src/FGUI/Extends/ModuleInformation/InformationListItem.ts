/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationListItemStruct from "../../Generates/ModuleInformation/InformationListItemStruct";
import InformationData from '../../../GameModule/DataStructs/InformationData';
import IntelligenceState = proto.IntelligenceState;

export default class InformationListItem extends InformationListItemStruct
{

    updateView(info: InformationData)
    {
        if(info)
        {
            this.m_isShow.setSelectedPage("yes");
            this.m_titlle.text = info.config.name;
            this.m_num.text = info.count + "";
            let index = info.state == IntelligenceState.Read?0:1
            this.m_isNew.setSelectedIndex(index);
        }
        else
        {
            this.m_isNew.setSelectedIndex(0);
            this.m_isShow.setSelectedPage("no");
        }
    }
}