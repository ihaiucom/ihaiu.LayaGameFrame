/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingEffItemStruct from "../../Generates/SystemModuleDialog/BuildingEffItemStruct";
import TEXT from "../../../Config/Keys/TEXT";

export default class BuildingEffItem extends BuildingEffItemStruct
{
    public RenderItem(data: any, type: number)  {
        this.m_type.selectedIndex = type != 1 ? 0 : 1;
        if (this.m_type.selectedIndex) {
            if (data.last.config) {
                this.m_labEffect.text  = data.last.config.addname;
                this.m_labLastNum.text = data.last.val;
                this.m_labNowNum.text  = data.now.val;
            } else {
                this.m_labEffect.text  = TEXT.BuildSuccessLevel;
                this.m_labLastNum.text = data.last;
                this.m_labNowNum.text  = data.now;
            }
            
        } else {
            this.m_labText.text = data;
        }
    }
}