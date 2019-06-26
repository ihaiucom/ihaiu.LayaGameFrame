/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationNoMatchSpecialItemStruct from "../../Generates/ModuleInformation/InformationNoMatchSpecialItemStruct";
import InformationData from "../../../GameModule/DataStructs/InformationData";

export default class InformationNoMatchSpecialItem extends InformationNoMatchSpecialItemStruct
{
    updateData(info: InformationData)
    {
        this.m_title.text = info.config.name;
    }
    setNotMatch(notMatch:boolean = true)
    {
        this.m_isNotMatch.setSelectedPage("no");
        this.m_isNotMatch.setSelectedPage("yes");
    }
}