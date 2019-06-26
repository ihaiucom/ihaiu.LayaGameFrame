/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingInfoButtonStruct from "../../Generates/SystemModuleDialog/BuildingInfoButtonStruct";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";

export default class BuildingInfoButton extends BuildingInfoButtonStruct
{
    RenderItem(produce:any, nowVal: number, addtVal: number): void {
        if (produce) {
            let iconUrl = Game.config.item.getItemIcon(produce.itemId)
            this.m_icon.url = iconUrl;
        }
        this.m_labNowData.text = String(nowVal);
        this.m_labAddData.text= format(TEXT.BuildPlusNum, addtVal);
    }
}