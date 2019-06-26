/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyTextStruct from "../../Generates/CommonBase/ChartPolygonPropertyTextStruct";
import Prop from "../../../GameFrame/Props/Prop";

export default class ChartPolygonPropertyText extends ChartPolygonPropertyTextStruct
{
    setProp(prop: Prop)
    {
        this.m_name.text = prop.name;
        this.m_value.text = Math.ceil(prop.val) + "";
    }
}