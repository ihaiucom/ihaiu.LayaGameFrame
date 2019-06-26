/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioPropItemStruct from "../../Generates/ModuleStudio/StudioPropItemStruct";
import Prop from '../../../GameFrame/Props/Prop';

export default class StudioPropItem extends StudioPropItemStruct
{
    updateView(p: Prop) {
        this.m_c1.setSelectedPage(p.field);
        this.m_val.text = p.val+"";
    }
}