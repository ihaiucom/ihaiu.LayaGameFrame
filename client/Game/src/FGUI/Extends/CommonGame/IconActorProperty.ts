/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import IconActorPropertyStruct from "../../Generates/CommonGame/IconActorPropertyStruct";
import Prop from '../../../GameFrame/Props/Prop';

export default class IconActorProperty extends IconActorPropertyStruct
{
    RenderItem(prop: Prop) {
        this.m_icon.icon =  prop.icon;
        this.m_title.text = prop.val+"";
    }
    
}