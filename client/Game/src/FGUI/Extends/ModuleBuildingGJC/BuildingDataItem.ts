/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingDataItemStruct from "../../Generates/ModuleBuildingGJC/BuildingDataItemStruct";
import { BuildingBuildType } from "./BuildingWindowUIGJC";
import TEXT from "../../../Config/Keys/TEXT";

export default class BuildingDataItem extends BuildingDataItemStruct
{
    RenderItem(nowVal: number, nextVal: number): void {
        this.m_labNowData.text = String(nowVal);
        this.m_labNextData.text= format(TEXT.BuildPlusNum, (nextVal - nowVal));
    }
}