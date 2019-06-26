/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyTextOnlyNameStruct from "../../Generates/CommonBase/ChartPolygonPropertyTextOnlyNameStruct";
import Prop from "../../../GameFrame/Props/Prop";

export default class ChartPolygonPropertyTextOnlyName extends ChartPolygonPropertyTextOnlyNameStruct
{
    setProp(prop: Prop)
    {
        this.m_name.text = prop.name.substr(0, 1);
    }
}