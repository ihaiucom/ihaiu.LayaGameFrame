/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingDataItemStruct from "../../Generates/ModuleBuildingGJC/BuildingDataItemStruct";
import { BuildingBuildType } from "./BuildingWindowUIGJC";

export default class BuildingDataItem extends BuildingDataItemStruct
{
    public RenderItem(data: any, type: number): void {
        this.m_build.selectedIndex = type;
        if (type == BuildingBuildType.Level) {
            this.m_labEffect.text = data.config.addname;
            this.m_labData.text = data.val;
            this.m_labDataAdd.text= data.sub >= 0 ? "+" + data.sub : data.sub;
        } else {
            this.m_labEffect.text = data;  

        }
    }
}