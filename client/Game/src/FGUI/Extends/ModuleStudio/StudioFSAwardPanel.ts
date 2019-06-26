/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioFSAwardPanelStruct from "../../Generates/ModuleStudio/StudioFSAwardPanelStruct";
import StudioResultData from '../../../GameModule/DataStructs/StudioResultData';
import RewardItem from '../CommonGame/RewardItem';

export default class StudioFSAwardPanel extends StudioFSAwardPanelStruct
{

    async updateView(data: StudioResultData) {
        let list = data.firstReward;
        for (let index = 0; index < 8; index++) {
            let visible = index < list.length;
            this['m_item'+index].visible = visible;
        }
        for (let index = 0; index < 8; index++) {
            let visible = index < list.length;
            if(visible) {
                let data = list[index];
                let item = <RewardItem>this['m_item'+index];
                item.updateView(list[index]);
                await item.m_t0.play()
            }
        }
    }

    async play() {
        
    }


}