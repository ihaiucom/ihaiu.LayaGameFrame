/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationSpecialPanelStruct from "../../Generates/ModuleInformation/InformationSpecialPanelStruct";
import InformationCellData from "../../../GameModule/DataStructs/InformationCellData";
import InformationModel from "../../../GameModule/DataModels/InformationModel";
import Game from "../../../Game";
import InformationData from '../../../GameModule/DataStructs/InformationData';
import IntelligencePaseType = proto.IntelligencePaseType;
import IntelligenceState = proto.IntelligenceState;
import InformationSpecialItem from "../CommonBase/InformationSpecialItem";

export default class InformationSpecialPanel extends InformationSpecialPanelStruct
{

    /**情报model */
    get informationModel(): InformationModel
    {
        return Game.moduleModel.information;
    }
    
    /** 当前槽位数据 */
    get currentCellData(): InformationCellData
    {
        return this.informationModel.specialCellData;
    }

    /** 特殊情报列表 */
    get specialInfoList(): InformationData[]
    {
        return this.informationModel.getInformationListByType(this.currentCellData.type);
    }

     // 窗口初始化完毕
     onWindowInited(): void
     {
         this.m_selectPanel.itemRenderer = Laya.Handler.create(this, this.selectItemRenderer, null, false);
     }
 
     // 窗口显示
     onWindowShow(): void
     {
         this.m_cell.onClick(this, this.cellItemOnClick);
         this.m_selectPanel.on(fairygui.Events.CLICK_ITEM, this, this.selectItemOnClick);
         this.updateView();
     }
      // 窗口隐藏
    onWindowHide(): void
    {
         this.m_cell.offClick(this, this.cellItemOnClick);
         this.m_selectPanel.off(fairygui.Events.CLICK_ITEM, this, this.selectItemOnClick);
    }
    
    updateView()
    {
        this.m_cell.updateView(this.currentCellData);
        this.refreshSelectPanel();
    }

    /** 情报槽位点击事件 */
    cellItemOnClick()
    {
        let cellData = this.currentCellData;
        //连续第二次选中
        if(cellData.informationData)
        {
            this.informationModel.selectCell(null, cellData,IntelligencePaseType.IntelligencePaseType_Special);
            this.m_cell.updateView(cellData);
            this.refreshSelectPanel();
        }
    }

    selectItemRenderer(index: number, item: InformationSpecialItem)
    {
        let data = this.specialInfoList[index];
        item.updateView(data, this.currentCellData);
    }


    refreshSelectPanel()
    {
        this.m_selectPanel.clearSelection();
        this.m_selectPanel.numItems = this.specialInfoList.length;
        this.m_selectPanel.scrollPane.touchEffect = this.specialInfoList.length > 2;
    }

    /** 底部情报列表点击事件 */
    async selectItemOnClick()
    {
        let cellData = this.currentCellData;
        let infoIndex = this.m_selectPanel.selectedIndex;
        let infoData = this.specialInfoList[infoIndex];
        let isRemove = this.informationModel.selectCell(infoData.id, cellData,IntelligencePaseType.IntelligencePaseType_Special);
        this.m_cell.updateView(cellData);
        if(infoData.state == IntelligenceState.Unread)
        {
            let res = await Game.sender.infoSender.changeInformationState([infoData.id]);
        }
        this.refreshSelectPanel();
    }

    clear()
    {
        this.cellItemOnClick();
        this.refreshSelectPanel();
    }
}