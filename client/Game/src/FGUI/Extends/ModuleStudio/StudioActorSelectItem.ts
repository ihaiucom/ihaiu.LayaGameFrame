/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorSelectItemStruct from "../../Generates/ModuleStudio/StudioActorSelectItemStruct";
import ActorData from '../../../GameModule/DataStructs/ActorData';
import StudioActorCellData from '../../../GameModule/DataStructs/StudioActorCellData';
import TEXT from "../../../Config/Keys/TEXT";

export default class StudioActorSelectItem extends StudioActorSelectItemStruct
{
    updateView(cell: StudioActorCellData,actor: ActorData) {
        this.setSelected(cell.isActorSelected(actor.id), cell.isCurrentActor(actor.id))
        this.m_name.m_name.text = actor.name;
        this.m_actor.updateView(actor);
        let propList = actor.prop;
        let mainProps = cell.mainPropConfigs;
        if(mainProps[0])
        {
            this.m_prop1.m_prop1.text = mainProps[0].name;
            this.m_prop1.m_prop2.text = propList.getVal(mainProps[0].id) + "";
        }
        else
        {
            this.m_prop1.m_prop1.text = "";
            this.m_prop1.m_prop2.text = "";
        }

        
        if(mainProps[1])
        {
            this.m_prop2.m_prop1.text = mainProps[1].name;
            this.m_prop2.m_prop2.text = propList.getVal(mainProps[1].id) + "";
        }
        else
        {
            this.m_prop2.m_prop1.text = "";
            this.m_prop2.m_prop2.text = "";
        }

    }

    setSelected(selected: boolean, animated: boolean = true) {
        let index = 0;
        if(selected) 
            index = 1;
        this.m_isSelect.setSelectedIndex(index);
        if(animated)
            this.m_t0.play();
    }
}