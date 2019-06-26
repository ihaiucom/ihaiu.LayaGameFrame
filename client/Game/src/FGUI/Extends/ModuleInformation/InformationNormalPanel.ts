/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationNormalPanelStruct from "../../Generates/ModuleInformation/InformationNormalPanelStruct";
import Game from '../../../Game';
import InformationCellData from "../../../GameModule/DataStructs/InformationCellData";
import InformationCell from './InformationCell';
import InformationModel from '../../../GameModule/DataModels/InformationModel';
import InformationData from '../../../GameModule/DataStructs/InformationData';
import IntelligenceState = proto.IntelligenceState;
import InformationItem from "../CommonBase/InformationItem";

export default class InformationNormalPanel extends InformationNormalPanelStruct
{
    /**情报model */
    get informationModel(): InformationModel
    {
        return Game.moduleModel.information;
    }
    /** 槽位列表 */
    get cellList(): InformationCellData[]
    {
        return this.informationModel.normalCellList;
    }

    /** 当前槽位数据 */
    get currentCellData(): InformationCellData
    {
        let cellData = null;
        let index = this.m_cellPanel.selectedIndex;
        if(index >= 0)
        {
            cellData = this.cellList[index];
        }
        return cellData;
    }

    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_cellPanel.itemRenderer = Laya.Handler.create(this, this.cellItemRenderer, null, false);
        this.m_selectPanel.itemRenderer = Laya.Handler.create(this, this.selectItemRenderer, null, false);
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.m_cellPanel.on(fairygui.Events.CLICK_ITEM, this, this.cellItemOnClick);
        this.m_selectPanel.on(fairygui.Events.CLICK_ITEM, this, this.selectItemOnClick);
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_cellPanel.off(fairygui.Events.CLICK_ITEM, this, this.cellItemOnClick);
        this.m_selectPanel.off(fairygui.Events.CLICK_ITEM, this, this.selectItemOnClick);
    }
    
    updateView()
    {
        this.refreshCellPanel();
        this.selectCellAtIndex(0);
    }

    refreshCellPanel()
    {
        this.m_cellPanel.numItems = this.cellList.length;
    }

    selectCellAtIndex(index: number)
    {
        this.m_cellPanel.clearSelection();
        this.m_cellPanel.addSelection(index);
        this.cellItemOnClick();
    }

    refreshSelectPanel()
    {
        this.m_selectPanel.clearSelection();
        this.m_selectPanel.numItems = this.matchInfoList.length;
        this.m_selectPanel.scrollPane.touchEffect = this.matchInfoList.length > 4;
    }

    cellItemRenderer(index: number, item: InformationCell)
    {
        let data = this.cellList[index];
        item.updateView(data);
    }

    matchInfoList: InformationData[] = [];
    selectItemRenderer(index: number, item: InformationItem)
    {
        let data = this.matchInfoList[index];
        item.updateView(data, this.currentCellData);
    }

    /** 上一个点击槽位id */
    private preSelectedIndex: number = -1;
    /** 情报槽位点击事件 */
    cellItemOnClick()
    {
        let cellData = this.currentCellData;
        if(this.preSelectedIndex == this.m_cellPanel.selectedIndex)
        {
            //连续第二次选中
            if(!cellData.informationData)
                return;
            this.informationModel.selectCell(null, cellData);
            this.refreshCellPanel();
        }
        //1.第一次选中
        this.matchInfoList = this.informationModel.getInformationListByType(cellData.type);
        this.refreshSelectPanel();
        this.preSelectedIndex = this.m_cellPanel.selectedIndex;
    }

    /** 底部情报列表点击事件 */
    async selectItemOnClick()
    {
        let cellData = this.currentCellData;
        let infoIndex = this.m_selectPanel.selectedIndex;
        let infoData = this.matchInfoList[infoIndex];
        let isRemove = this.informationModel.selectCell(infoData.id, cellData);
        
        this.refreshCellPanel();
        if(infoData.state == IntelligenceState.Unread)
        {
            let res = await Game.sender.infoSender.changeInformationState([infoData.id]);
        }
        this.refreshSelectPanel();
        if(!isRemove)
        {
            let nextData = this.informationModel.nextCellData(cellData.index);
            if(nextData)
                this.selectCellAtIndex(nextData.index);
        }
    }

    clear()
    {
        this.preSelectedIndex = -1;
        this.informationModel.clearCellList();
        this.refreshCellPanel();
        this.selectCellAtIndex(0);
    }
}