/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingHeadViewStruct from "../../Generates/ModuleBuildingGJC/BuildingHeadViewStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import TEXT from "../../../Config/Keys/TEXT";

export default class BuildingHeadView extends BuildingHeadViewStruct
{
    private dataSource: BuildingData;
    updateView(building: BuildingData, index: number): void {
        this.dataSource = building;

        let type: number = building.nowBuildType;
        let key = index == 0 ? index : index + type;
        this.m_titile.text = TEXT.BuildTitleType[key];
    }
}