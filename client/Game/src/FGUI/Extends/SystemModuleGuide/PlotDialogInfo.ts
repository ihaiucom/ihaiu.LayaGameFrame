/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotDialogInfoStruct from "../../Generates/SystemModuleGuide/PlotDialogInfoStruct";
import PlotConfig from "../../../Config/ConfigExtends/PlotConfig";
import Game from "../../../Game";

export default class PlotDialogInfo extends PlotDialogInfoStruct
{
    updateView( data: PlotConfig ): void{
        if ( data.option_type )
        {
            this.m_button1.m_name.text = data.option1;
            this.m_button2.m_name.text = data.option2;
        }

        let avatar_id = data.avatar_id;
        let iconData = Game.config.avatar.getConfig(avatar_id);
        if ( avatar_id != 0 )
        {
            this.m_icon.visible = true;
            this.m_icon.icon =  iconData.bodyIconUrl; // 全身像

            this.m_labelName.visible = true;
            this.m_labelBg.visible = true;
            this.m_labelName.text = data.name;
        }
        else
        {
            this.m_labelName.visible = false;
            this.m_labelBg.visible = false;
            this.m_icon.visible = false;
        }
        
        this.m_pos.selectedIndex = data.avatar_anchor? 1: 0;
        this.m_flip.selectedIndex = data.avatar_turn? 1: 0;
        this.m_showButton.selectedIndex = data.option_type? 1: 0;
    }
}