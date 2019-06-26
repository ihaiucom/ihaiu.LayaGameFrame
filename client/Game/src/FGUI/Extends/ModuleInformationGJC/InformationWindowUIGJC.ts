/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationWindowUIGJCStruct from "../../Generates/ModuleInformationGJC/InformationWindowUIGJCStruct";
import InformationWindow from "../../../GameModule/ViewWindows/InformationWindow";
import GashaponConfig from "../../../Config/ConfigExtends/GashaponConfig";
import Game from "../../../Game";
import InformationPoolItem from "./InformationPoolItem";
import GashaponPoolData from "../../../GameModule/DataStructs/GashaponPoolData";
import TimeHelper from "../../../GameHelpers/TimeHelper";
import TEXT from "../../../Config/Keys/TEXT";
import GameEventKey from "../../../GameEventKey";


//-------------FGUI控制器-----------------
//主界面--列表界面--解析界面     操作
export enum InformationViewType {
    Main    = 0,
    List    = 1,    
    Resolver= 2,
    ResolverAndList= 3
}



export default class InformationWindowUIGJC extends InformationWindowUIGJCStruct
{
    //窗口
    moduleWindow: InformationWindow;

    private poolDataList: Array<GashaponPoolData>;

    private poolData: GashaponPoolData;

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_btnClose.onClick(this, this.close);
        this.m_listContent.itemRenderer = Laya.Handler.create(this, this.renderContentListItem, null, false);
        this.m_listContent.on(fairygui.Events.SCROLL_END, this, this.clickContenttListItem);  
        this.m_btnOne.onClick(this, this.oneGashapon);
        this.m_btnTen.onClick(this, this.tenGashapon);
        this.m_btnList.onClick(this, this.selectView, [InformationViewType.List]);
    }

    //单抽
    oneGashapon(): void {
        Game.sender.gashapon.extractGashapon(this.poolData.oneData.id);
    }

    //十连抽
    tenGashapon(): void {
        Game.sender.gashapon.extractGashapon(this.poolData.tenData.id);
    }

    close(): void {
        this.moduleWindow.menuClose();  
    }

    //奖池List刷新回调
    renderContentListItem(index: number, item: InformationPoolItem): void  {
        item.RenderItem(this.poolDataList[index]);
    }

    clickContenttListItem(event: any): void  {
        var midX:number = this.m_listContent.scrollPane.posX + this.m_listContent.viewWidth / 2;
        var cnt:number  = this.m_listContent.numChildren;
        for (var i:number = 0; i < cnt; i++)
        {
            var obj: any = this.m_listContent.getChildAt(i);
            var dist:number = Math.abs(midX - obj.x - obj.width / 2);
            if (dist >= obj.width) {
                
                
            }
            else
            {
                
                // Game.sender.story.readCommentList(obj.dataSource.id);
            }
        }
    }

    //刷新倒计时
    updateTimes(): void {
        let HHMMSS = TimeHelper.TimeleftHHMMSS(this.poolData.nextFreeTime)
        this.m_labTime.text = format(TEXT.InformationFreeTime, HHMMSS);
        if (HHMMSS == TEXT.TimeEnd) this.m_labTime.text = "";            
    }

    updateView(): void {
        this.m_labNum.text = String(Game.moduleModel.information.InformationCount);

        let pools =  this.poolDataList;
        this.m_listContent.numItems = pools.length;

        this.poolData = pools[0];
        
        // this.m_costOne.RenderItem(this.poolData.oneData.costItem);
        // this.m_costTen.RenderItem(this.poolData.tenData.costItem);
        
        if (this.poolData.nextFreeTime) {
            Laya.timer.clear(this, this.updateTimes);
            Laya.timer.loop(1000, this, this.updateTimes);
            this.updateTimes();
        } else {
            this.m_labTime.text = "";
        }

        this.m_free.selectedIndex = !this.poolData.freeNum ? 0 : 1;
    }

    selectView(select:number): void {
        this.m_page.selectedIndex = select;        
        switch (select) {
            case InformationViewType.Main:
                this.m_listView.enableType = false;
                break;
            case InformationViewType.List:
                this.m_listView.updateView(false);
                break;
            case InformationViewType.Resolver:
                if (this.m_listView.enableType) {
                    this.m_resolverView.updateView();
                } else {
                    this.m_resolverView.resetView();
                }
                
                break;
            case InformationViewType.ResolverAndList:
                this.m_listView.updateView(true);
                break;
        
            default:
                break;
        }
    }

    updateGashapon(): void {
        this.poolDataList = [];
        let gashapons = Game.moduleModel.gashapon.getGashaponByMenuId(this.moduleWindow.menuId);
        for (let i = 0; i < gashapons.length; i = i + 2) {
            if (gashapons[i].type == gashapons[i+1].type) {
                let pool = GashaponPoolData.Create(gashapons[i], gashapons[i + 1]);
                this.poolDataList.push(pool);   
            }
        }

        this.updateView();
    }

    //主窗口显示时将被调
    onWindowShow(): void {
        this.updateGashapon()
        Game.event.add(GameEventKey.Information_SelectView, this.selectView, this);
        Game.net.gamerNotifyGashaponInfoS2C.on(this.updateGashapon, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void {
        Game.event.remove(GameEventKey.Information_SelectView, this.selectView, this);
        Game.net.gamerNotifyGashaponInfoS2C.off(this.updateGashapon, this);
        Laya.timer.clear(this, this.updateTimes);
    }
}