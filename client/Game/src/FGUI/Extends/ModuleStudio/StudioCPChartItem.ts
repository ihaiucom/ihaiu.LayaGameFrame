/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPChartItemStruct from "../../Generates/ModuleStudio/StudioCPChartItemStruct";

export default class StudioCPChartItem extends StudioCPChartItemStruct
{
    /** 高度值  0-14*/
    updateView(height: number) {
        let index = 0;
        if(height < 0) {
            index = 0
        }else if(height > 14) {
            index = 14;
        }else {
            index = height;
        }
        this.m_height.setSelectedIndex(height);
    }
}