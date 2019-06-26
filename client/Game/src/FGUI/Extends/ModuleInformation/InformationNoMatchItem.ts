/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationNoMatchItemStruct from "../../Generates/ModuleInformation/InformationNoMatchItemStruct";
import InformationData from '../../../GameModule/DataStructs/InformationData';

export default class InformationNoMatchItem extends InformationNoMatchItemStruct
{
    updateData(info: InformationData)
    {
        this.m_content.text = info.config.name;
        this.m_isNotMatch.setSelectedPage("no");
    }
    setNotMatch(notMatch:boolean = true)
    {
        this.m_isNotMatch.setSelectedPage("yes");
    }
}