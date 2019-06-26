/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationTypeTabButtonStruct from "../../Generates/ModuleInformation/InformationTypeTabButtonStruct";

export default class InformationTypeTabButton extends InformationTypeTabButtonStruct
{
    setRead(isRead: boolean = true)
    {
        let index = isRead?0:1;
        this.m_isNew.setSelectedIndex(index);    
    }
}