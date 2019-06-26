/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingDataButtonStruct from "../../Generates/ModuleBuildingGJC/BuildingDataButtonStruct";
import TEXT from "../../../Config/Keys/TEXT";

export default class BuildingDataButton extends BuildingDataButtonStruct
{
    RenderItem(nowVal: number, nextVal: number, type: number): void {
        if (type == 0) {
            this.m_labNowData.text = String(nowVal);
            this.m_labNextData.text= format(TEXT.BuildPlusNum, (nextVal - nowVal));
        } else {
            this.m_labNowData.text = String(nowVal) + "%";
            this.m_labNextData.text= format(TEXT.BuildPlusNum, (nextVal - nowVal)) + "%";
        }
        
    }
}