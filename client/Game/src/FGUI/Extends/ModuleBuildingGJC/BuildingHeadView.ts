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
        if (index) {
            let type: number = building.nowBuildType;
            this.m_titile.text = building.name + TEXT.BuildTitleType[type];
        } else {
            this.m_titile.text = building.name + TEXT.BuildContent;
        }
        this.m_labLv.text = building.builded ? format(TEXT.BuildLevel, building.level) : "";
    }
}