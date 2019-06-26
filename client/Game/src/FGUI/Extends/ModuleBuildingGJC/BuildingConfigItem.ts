/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingConfigItemStruct from "../../Generates/ModuleBuildingGJC/BuildingConfigItemStruct";
import BuildingLevelConfig from "../../../Config/ConfigExtends/BuildingLevelConfig";

export default class BuildingConfigItem extends BuildingConfigItemStruct
{
    dataSource: BuildingLevelConfig;
    renderItem(data: BuildingLevelConfig, select: boolean)
    {
        this.dataSource = data;

        this.m_select.selectedIndex = select ? 1: 0;
        this.m_labLv.text   = String(data.level);
        this.m_labTime.text = String(data.prop_produceCd);
        this.m_labNum.text  = String(data.prop_produceNum);
        this.m_labReserve.text = String(data.prop_reserve);
    }
}