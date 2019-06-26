/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MainTaskViewStruct from "../../Generates/SystemModuleTask/MainTaskViewStruct";
import Game from "../../../Game";
import ItemData from "../../../GameModule/DataStructs/ItemData";

export default class MainTaskView extends MainTaskViewStruct
{
    updateView(){
        let data = Game.moduleModel.mainTask.getData();
        this.resetIconState();
        this.setButtonState(data);
       
        this.m_name.text = data.configData.name;
        this.m_desc.text = data.configData.info;
        this.m_progress.text = data.finishValue + "/" + data.finishParam1;

        let rewardID = data.configData.reward;
        let rewardData = Game.config.reward.getConfig( rewardID );
    
        for ( var i = 0; i < rewardData.fixedItems.length; i ++ )
        {
            let d = rewardData.fixedItems[i]
            let item:ItemData = Game.moduleModel.item.getItem(d.itemId);
            this["m_icon"+ (i + 1)].visible = true;
            this["m_icon"+ (i + 1)].setData(item);
        }
    }

    setButtonState( data ){
        let openLevel = data.configData.level;
        let level = Game.user.level;
        if ( openLevel > level ) 
        {
            this.m_buttonState.selectedIndex = 2; //未开启
        }
        else
        {
            if ( data.finishValue >= data.finishParam1 ) 
            {
                this.m_buttonState.selectedIndex = 1; // 可领奖
            }
            else
            {
                this.m_buttonState.selectedIndex = 0; // 前往
            }
        }
    }

    resetIconState(){
        for ( let i = 0; i < 6; i ++ )
        {
            this["m_icon"+ (i + 1)].visible = false;
        }
    }
}