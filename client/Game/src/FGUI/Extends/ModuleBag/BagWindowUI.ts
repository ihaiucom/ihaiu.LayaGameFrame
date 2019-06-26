/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagWindowUIStruct from "../../Generates/ModuleBag/BagWindowUIStruct";
import Game from '../../../Game';
import BagItem from './BagItem';
import ItemData from '../../../GameModule/DataStructs/ItemData';
import BagActorItem from './BagActorItem';
import ItemConfig from '../../../Config/ConfigExtends/ItemConfig';
import ItemIconItem from "../CommonGame/ItemIconItem";
import GameEventKey from '../../../GameEventKey';
import Dictionary from '../../../Libs/Helpers/Dictionary';
import ItemModel, { eItemTab } from "../../../GameModule/DataModels/ItemModel";
import ItemType = proto.ItemType;

export default class BagWindowUI extends BagWindowUIStruct {

    private datalist: ItemData[];
    get tabBarCtrl(): fairygui.Controller
    {
        return this.m_tabBar.m_select;
    }
    private get selectIndex(): number
    {
        return this.m_itemList.selectedIndex;
    }

    get selectedItemData(): ItemData
    {
        return this.datalist[this.m_itemList.selectedIndex];
    }

    onWindowInited() {
        this.m_itemList.itemRenderer = Laya.Handler.create(this, this.RenderItem, null, false);
        this.m_itemList.setVirtual();
        this.m_itemList.itemProvider = Laya.Handler.create(this, this.ItemProvider, null, false);
    }

    onWindowShow(): void {
        Game.net.gamerGetBackpackS2C.on(this.updateView, this);
        Game.net.gamerNotifyItemS2C.on(this.updateView,this);
        this.tabBarCtrl.on(fairygui.Events.STATE_CHANGED, this, this.tabBarOnClick);
        this.m_itemList.on(fairygui.Events.CLICK_ITEM, this, this.OnItemClick);
        this.m_useBtn.onClick(this, this.OnUseClick);
        this.m_splitBtn.onClick(this, this.OnSplitClick);
        this.m_compoundBtn.onClick(this, this.OnCompoundClick);
        this.m_saleBtn.onClick(this, this.OnSaleClick);
        
        this.updateView();
    }

    onWindowHide() {
        this.tabBarCtrl.off(fairygui.Events.STATE_CHANGED, this, this.tabBarOnClick);
        this.m_itemList.off(fairygui.Events.CLICK_ITEM, this, this.OnItemClick);
        Game.net.gamerGetBackpackS2C.off(this.updateView, this);
        Game.net.gamerNotifyItemS2C.off(this.updateView,this);
        this.m_useBtn.offClick(this, this.OnUseClick);
        this.m_splitBtn.offClick(this, this.OnSplitClick);
        this.m_compoundBtn.offClick(this, this.OnCompoundClick);
        this.m_saleBtn.offClick(this, this.OnSaleClick);
    }
    
    public updateView() {
        this.m_showInfoDialog.setSelectedPage('no');
        this.refreshItemList();
    }

    public refreshItemList(): void {
        this.datalist = Game.moduleModel.item.GetItemListByType(this.tabBarCtrl.selectedIndex);
        
        this.m_itemList.numItems = this.datalist.length;
    }

    public refreshItemInfo(): void {
        let itemData = this.datalist[this.m_itemList.selectedIndex];
        this.m_showItemInfo.setSelectedPage('yes');
        this.refreshButtonState(itemData);
        this.m_bagInfo.UpdateView(itemData.id);
    }

    refreshButtonState(data: ItemData)
    {
        this.m_useBtn.visible = data.canUse;
        this.m_saleBtn.visible = data.canSell;
        this.m_compoundBtn.visible = data.canCompound;
        this.m_splitBtn.visible = data.canSplit;
    }

    private RenderItem(index: number, item: ItemIconItem | BagActorItem) {
        let data = this.datalist[index];
        item.RenderItem(data);
    }

    //** 物品类型 */
    private ItemProvider(index: number) {
        if (this.tabBarCtrl.selectedIndex == 2)
            return BagActorItem.URL;
        else
            return ItemIconItem.URL;
    }

    tabBarOnClick(): void {
        this.m_showItemInfo.setSelectedPage("no");
        this.refreshItemList();
    }

    /** 点击物品 */
    OnItemClick(): void {
        this.refreshItemInfo();
    }

    private async OnSplitClick() {
        this.m_showItemInfo.setSelectedPage('no');
        console.log("OnSplitClick");
        let splitCnt = await Game.system.itemSplit(this.selectedItemData.count, 1);
        let item = this.selectedItemData;
        await Game.sender.item.splitItem(item.uid, item.id, splitCnt);
        this.refreshItemList();
    }

    private async OnCompoundClick() {
        this.m_showItemInfo.setSelectedPage('no');
        console.log("OnCompoundClick");
        let config = Game.config.compound.getConfig(this.selectedItemData.id);
        let maxCompound = Math.floor(this.selectedItemData.count / config.num_req);
        if(maxCompound > 0) {
            let compoundCnt = await Game.system.itemCompound(maxCompound, 1);
            let item = this.selectedItemData;
            await Game.sender.item.compoundItem(item.uid, item.id, compoundCnt);
            this.refreshItemList();
        }else {
            Game.system.toastItemNotEnough(this.selectedItemData.id);
        }
    }

    private async OnSaleClick() {
        this.m_showItemInfo.setSelectedPage('no');
        console.log("OnSellClick");
        let saleCnt = await Game.system.itemSale(this.selectedItemData.count, 1);
        let item = this.selectedItemData;
        await Game.sender.item.sellItem(item.uid, item.id, saleCnt);
        this.refreshItemList();
    }

    private async OnUseClick() {
        this.m_showItemInfo.setSelectedPage('no');
        console.log("OnUseClick");
        let useCnt = await Game.system.itemUse(this.selectedItemData.count, 1);
        let item = this.selectedItemData;
        let isInformation = item.itemType == 30;//ItemType.envelope;//TODO:YJJ
        let items = await Game.sender.item.useItem(item.uid, item.id, useCnt);
        if(items && items.length > 0 && isInformation)
        {
            this.m_showInfoDialog.setSelectedPage('yes');
            this.m_infoDialog.updateView(items);
        }
        this.refreshItemList();
    }
}