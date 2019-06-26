/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationMyListStruct from "../../Generates/ModuleInformation/InformationMyListStruct";
import InformationListItem from './InformationListItem';
import Game from '../../../Game';
import InformationModel from "../../../GameModule/DataModels/InformationModel";
import InformationData from '../../../GameModule/DataStructs/InformationData';
import InformationTypeTabButton from './InformationTypeTabButton';

export default class InformationMyList extends InformationMyListStruct
{
     /**情报model */
     get informationModel(): InformationModel
     {
         return Game.moduleModel.information;
     }

     dataList: InformationData[] = [];
     
    // 窗口初始化完毕
    onWindowInited(): void
    {
        this.m_list.itemRenderer = Laya.Handler.create(this, this.itemRenderer, null, false);
    }
     // 窗口显示
     onWindowShow(): void
     {
        this.m_typeCtrl.on(fairygui.Events.STATE_CHANGED, this, this.onTabBarClick);
     }
 
     // 窗口隐藏
     onWindowHide(): void
     {
        this.m_typeCtrl.off(fairygui.Events.STATE_CHANGED, this, this.onTabBarClick);
     }

    onShow()
    {
        this.checkTabReadState();
        this.m_typeCtrl.setSelectedIndex(0);
        this.onTabBarClick();
    }

    itemRenderer(index: number, item: InformationListItem)
    {
        let infoData;
        if(index < this.dataList.length)
        {
            infoData = this.dataList[index];
        }
        item.updateView(infoData);
    }


    onTabBarClick()
    {
        console.log(this.m_typeCtrl.previsousIndex);
        let preIndex = this.m_typeCtrl.previsousIndex;
        if(preIndex >= 0)
        {
            let unreadList = this.informationModel.getUnreadListFromTab(preIndex);
            if(unreadList.length > 0)
            {
                this.changeInformationState(preIndex,unreadList);
            }
        }
        let index = this.m_typeCtrl.selectedIndex;
        if(index >=0)
        {
            this.refreshList(index);
        }
    }

    refreshList(index: number)
    {
        this.dataList = this.informationModel.getInformationListByIndex(index);
        let numItems = Math.ceil(this.dataList.length / 10) * 10;
        this.m_list.numItems = numItems;
    }

    async changeInformationState(index:number, ids: number[])
    {
        let result = await Game.sender.infoSender.changeInformationState(ids);
        if(result)
        {
            this.checkTabReadState();
        }
    }

    checkTabReadState()
    {
        let unreadTabIndexs = this.informationModel.checkTabReadState();
        for(let i = 0; i < 7; i++)
        {
            let isRead = true;
            let item = <InformationTypeTabButton>this['m_tab'+i];
            unreadTabIndexs.indexOf(i) != -1 && (isRead = false)
            item.setRead(isRead);
        }
        
    }
}