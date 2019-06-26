/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import GetInformationDialogStruct from "../../Generates/ModuleBag/GetInformationDialogStruct";
import ItemData from '../../../GameModule/DataStructs/ItemData';
import InformationData from "../../../GameModule/DataStructs/InformationData";
import InformationModel from "../../../GameModule/DataModels/InformationModel";
import InformationItem from "../CommonBase/InformationItem";
import InformationEmptyItem from '../CommonBase/InformationEmptyItem';
import InformationSpecialItem from '../CommonBase/InformationSpecialItem';
import Game from '../../../Game';
import { MenuId } from '../../../GameModule/MenuId';

export default class GetInformationDialog extends GetInformationDialogStruct
{
    public dataList: InformationData[] = [];
    
    onWindowInited() {
        this.m_list.itemRenderer = Laya.Handler.create(this, this.RenderItem, null, false);
        this.m_list.setVirtual();
        this.m_list.itemProvider = Laya.Handler.create(this, this.ItemProvider, null, false);
    }
    onWindowShow(): void {
      this.m_confirmBtn.onClick(this, this.gotoInfomationWindow);
    }

    onWindowHide() {
        this.m_confirmBtn.offClick(this, this.gotoInfomationWindow);
    }

    gotoInfomationWindow()
    {
        Game.menu.close(MenuId.Bag);
        Game.menu.open(MenuId.Information);
    }

    normalList: InformationData[] = [];
    specialList: InformationData[] = [];
    
    updateView(items: ItemData[])
    {
        this.dataList = InformationModel.transitionInfromation(items);
        this.m_boxHeightCtrl.setSelectedIndex(items.length == 1?0:1);
        this.m_list.scrollPane.touchEffect = items.length > 12;
        this.dataList.forEach(item=>{
            if(item.isSpecial)
                this.specialList.push(item);
            else
                this.normalList.push(item);
        });
        if(this.normalList.length % 2 == 1)
            this.dataList.splice(this.normalList.length,0,null);
        this.m_list.numItems = this.dataList.length;
    }

    RenderItem(index: number, itemObj:InformationItem|InformationEmptyItem|InformationSpecialItem)
    {
        if(index < this.normalList.length)
        {
            let item = <InformationItem>itemObj;
            item.updateView(this.normalList[index]);
        }
        else if(index == this.normalList.length && this.normalList.length % 2 == 1)
        {
        }
        else
        {
            let item = <InformationSpecialItem>itemObj;
            item.updateView(this.dataList[index]);
        }
    }

    ItemProvider(index: number)
    {
        if(index < this.normalList.length)
            return InformationItem.URL;
        else if(index == this.normalList.length && this.normalList.length % 2 == 1)
            return InformationEmptyItem.URL;
        else
            return InformationSpecialItem.URL;
    }
}