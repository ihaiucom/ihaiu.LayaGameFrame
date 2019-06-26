/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorCellStruct from "../../Generates/ModuleStudio/StudioActorCellStruct";
import StudioActorCellData from "../../../GameModule/DataStructs/StudioActorCellData";
import Game from '../../../Game';
import LabelValue from '../../../GameFrame/PropLabels/LabelValue';

export default class StudioActorCell extends StudioActorCellStruct {

    setPostionAtIndexCallback: Function;

    updateView(cellData: StudioActorCellData) {
        if (!cellData.actorId) {
            let matchSex = cellData.matchSex;
            if(matchSex == LabelValue.sex_lady) {
                
                this.m_cellState.setSelectedPage("lady");
            }else if(matchSex == LabelValue.sex_man){
                this.m_cellState.setSelectedPage("man");
            }else {
                this.m_cellState.setSelectedPage("empty");
            }
            let tags = cellData.matchingTags.slice();
            this.m_tags.text = tags.join('');
        } else {
            this.m_cellState.setSelectedPage("actor");
            this.m_icon.icon = cellData.headIcon;
        }
    }

    play() {
        if (this.m_t0.playing) {
            this.m_t0.stop();
        }
        this.m_t0.play();
        
    }

    stop() {
        if (this.m_t0.playing) {
            this.m_t0.stop();
        }
    }
}