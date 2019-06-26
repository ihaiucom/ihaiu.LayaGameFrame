/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationListViewStruct from "../../Generates/ModuleInformationGJC/InformationListViewStruct";
import InformationData from "../../../GameModule/DataStructs/InformationData";
import InformationItemData from "../../../GameModule/DataStructs/InformationItemData";
import InformationListItem, { InformationItemType } from "./InformationListItem";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import { InformationViewType } from "./InformationWindowUIGJC";

export default class InformationListView extends InformationListViewStruct
{
    private informationItemDataList: Array<InformationItemData>;

    public enableType: boolean;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        this.m_btnClose.onClick(this, this.close); 
        this.m_listInformation.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        // this.m_listInformation.on(fairygui.Events.CLICK_ITEM, this, this.clickListItem);
        this.m_tabInfromation.m_tab.on(fairygui.Events.STATE_CHANGED, this, this.changeTab);
    }

    //弹窗关闭
    close(): void  {
        if (this.enableType) {
            Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.Resolver);
        } else {
            Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.Main);
        }
    }

    //List刷新回调
    renderListItem(index: number, item: InformationListItem): void  {
        item.RenderItem(this.informationItemDataList[index], InformationItemType.List);
    }

    //更换标签
    changeTab(): void {
        this.informationItemDataList = [];

        let index= this.m_tabInfromation.m_tab.selectedIndex;
        let informationList = Game.moduleModel.information.getInformationListByType(index);
        for (let i = 0; i < informationList.length; i++) {
            if (index == 0) {
                this.informationItemDataList.push(InformationItemData.Create(informationList[i], informationList[i + 1]));
                i++;
            } else {
                this.informationItemDataList.push(InformationItemData.Create(informationList[i]));                
            }
        }

        this.m_listInformation.numItems = this.informationItemDataList.length;
    }

    //刷新view
    updateView(enable: boolean): void {
        let index = this.m_tabInfromation.m_tab.selectedIndex;
        if (index) {
            this.m_tabInfromation.m_tab.selectedIndex = 0;
        } else {
            this.changeTab();
        }

        this.enableType = enable;
    }

    selectEnd(): void {
        if (this.enableType) {
            if (this.enableType) {
                Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.Resolver);
            } else {
                Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.Main);
            }
        }
    }

    //主窗口显示时将被调
    onWindowShow(): void {
        Game.event.add(GameEventKey.Information_SelectInfo, this.selectEnd, this)
    }

    //主窗口关闭时将被调
    onWindowHide(): void {
        Game.event.remove(GameEventKey.Information_SelectInfo, this.selectEnd, this)
    }
}