/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingFootViewStruct from "../../Generates/ModuleBuildingGJC/BuildingFootViewStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import TEXT from "../../../Config/Keys/TEXT";
import { BuildingTabType } from "./BuildingWindowUIGJC";
import Res from "../../../Config/Keys/Res";

export default class BuildingFootView extends BuildingFootViewStruct
{
    private dataSource: BuildingData;
    updateView(building: BuildingData, index: number): void {
        this.dataSource = building;

        this.m_imgLogo.url = Res.getBuildingLogo(building.id);
        this.m_labName.text = building.name;
        this.m_labLevel.text= format(TEXT.LVDot + building.level);

        switch (index) {
            case BuildingTabType.Content:
                this.m_contentPage.updateView(building);
                break;
            case BuildingTabType.Build:
                this.m_levelPage.updateView(building);
                break;
        
            default:
                break;
        }
    }
}