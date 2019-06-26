/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioContinueWindowUIStruct from "../../Generates/ModuleStudio/StudioContinueWindowUIStruct";
import Game from '../../../Game';
import StudioContinuedModel from "../../../GameModule/DataModels/StudioContinuedModel";
import StudioContinuedData from "../../../GameModule/DataStructs/StudioContinuedData";
import StudioCPChartPanel from './StudioCPChartPanel';
import StudioContinueWindow from "../../../GameModule/ViewWindows/StudioContinueWindow";
import TEXT from '../../../Config/Keys/TEXT';

export default class StudioContinueWindowUI extends StudioContinueWindowUIStruct
{
    
    // 窗口
    moduleWindow: StudioContinueWindow;

    public get model(): StudioContinuedModel {
        return Game.moduleModel.studioContinued;
    }

    public get dataList(): StudioContinuedData[] {
        return this.model.list;
    } 

    onClickCloseButton()
    {
        if(this.moduleWindow)
            this.moduleWindow.menuClose();
    }
    
     // 窗口显示
     onWindowShow(): void
     {
         this.updateView();
        this.m_getBtn.onClick(this, this.getBtnOnClick);
        this.m_closeBtn.onClick(this, this.onClickCloseButton);
        this.model.sRemveItem.add(this.removeItem, this);
     }
 
     // 窗口隐藏
     onWindowHide(): void
     {
        this.m_getBtn.offClick(this, this.getBtnOnClick);
        this.model.sRemveItem.remove(this.removeItem, this);
        this.m_closeBtn.offClick(this, this.onClickCloseButton);
        Laya.timer.clearAll(this);
     }

     removeItem(index: number)
     {
         this.m_list.removeItem(index);
         let listLength = this.m_list.m_content.numChildren;
         this.setListHeight(listLength);
     }
 
     testDataList: number[] = [1,2,3,4];
    
    isTest = false;
    async updateView() {
        let dataList = [];
        if(!this.isTest)
        {
            dataList = this.dataList.slice();
        }else
        {
            dataList = this.testDataList;
        }
        this.setListHeight(dataList.length);
        this.m_list.updateView(dataList);
    }

    public setListHeight(len: number)
    {
        let isFullHeight = len > 3;
        this.m_list.scrollPane.touchEffect = isFullHeight;
        let height =  isFullHeight? 3: len;
        this.m_height.setSelectedIndex(height);
    }

    /** 一键收取 收益 */
    private async getBtnOnClick() {
        if(this.model.hasProfit)
        {
            let s2c = await Game.sender.studio.studioContinuedReceiveAll();
            if(s2c)
                this.updateView();
        }
        else
        {
            Game.system.toastText(TEXT.StudioContinueNotInTime);    
        }        
    }
}