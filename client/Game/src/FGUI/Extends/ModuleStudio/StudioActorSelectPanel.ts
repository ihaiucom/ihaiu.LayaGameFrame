/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorSelectPanelStruct from "../../Generates/ModuleStudio/StudioActorSelectPanelStruct";
import StudioActorCellData from '../../../GameModule/DataStructs/StudioActorCellData';
import StudioActorSelectItem from './StudioActorSelectItem';
import PropId from "../../../GameFrame/Props/PropId";
import StudioActorWindowUI from "./StudioActorWindowUI";
import ActorData from "../../../GameModule/DataStructs/ActorData";
import TEXT from '../../../Config/Keys/TEXT';
import Game from '../../../Game';
import ActorLbPropItem from '../CommonGame/ActorLbPropItem';

export default class StudioActorSelectPanel extends StudioActorSelectPanelStruct
{
    actorWindow: StudioActorWindowUI;
    cellData: StudioActorCellData;
    dataList: ActorData[] = [];
    
    propIds = [];
    
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.propIds = [0,PropId.charm,PropId.eloquence,PropId.entertainment,PropId.act,PropId.talent]
        this.m_list.itemRenderer = Laya.Handler.create(this,this.BannerRendererItem,null,false);
        this.m_actorList.itemRenderer = Laya.Handler.create(this,this.RendererItem,null,false);
        this.m_actorList.on(fairygui.Events.CLICK_ITEM,this,this.ItemOnClick);
        
    }
    updateView(cellData: StudioActorCellData) {
        this.cellData = cellData;
        this.dataList = this.cellData.getMatchedActors();
        this.m_actorList.numItems = this.dataList.length;
        this.m_list.numItems = cellData.mainPropConfigs.length;
        this.m_cost.text = TEXT.StudioSACost.format(Game.moduleModel.studio.current.costTotal);
    }

    BannerRendererItem(index: number, item: ActorLbPropItem) {
        let actorData = this.dataList[index];
        // item.selected = actorData.id == this.cellData.actorId;
        item.updateView(this.cellData.mainPropConfigs[index].field);
    }
    
    RendererItem(index: number, item: StudioActorSelectItem) {
        let actorData = this.dataList[index];
        // item.selected = actorData.id == this.cellData.actorId;
        item.updateView(this.cellData,actorData);
    }

    async ItemOnClick(item: StudioActorSelectItem, event: Event) {
        
        let index = this.m_actorList.selectedIndex;
        let actorId = this.dataList[index].id;
        if(this.cellData.actorId == actorId) 
            actorId = null;
        let result = await this.actorWindow.selectActor(actorId, this.cellData.storyCharactersId);
        this.m_cost.text = TEXT.StudioSACost.format(Game.moduleModel.studio.current.costTotal);
    }

    playStartBtnAnimation(isContinue:boolean)
    {
        let index = isContinue?1:0;
        this.m_nextBtn.m_isPlay.setSelectedIndex(index);
    }
}