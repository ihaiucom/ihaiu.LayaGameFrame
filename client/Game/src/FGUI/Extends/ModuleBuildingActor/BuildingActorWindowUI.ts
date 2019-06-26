/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingActorWindowUIStruct from "../../Generates/ModuleBuildingActor/BuildingActorWindowUIStruct";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import BuildingActorWindow from "../../../GameModule/ViewWindows/BuildingActorWindow";
import BuildingActorCellData from "../../../GameModule/DataStructs/BuildingActorCellData";
import Game from "../../../Game";
import TEXT from "../../../Config/Keys/TEXT";
import BuildingActorItem from "./BuildingActorItem";

export default class BuildingActorWindowUI extends BuildingActorWindowUIStruct
{
    //窗口
    moduleWindow: BuildingActorWindow;

    //建筑数据
    buildingData: BuildingData;

    //选中的艺人槽数据
    selectCellData: BuildingActorCellData;
    
    //艺人槽列表
    actorDataList: Array<any>;

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_btnClose.onClick(this, this.close);
     
        this.m_listActor.itemRenderer  = Laya.Handler.create(this, this.renderListItemActor, null, false);
        this.m_listActor.on(fairygui.Events.CLICK_ITEM, this, this.clickListItemActor);
    }

    //艺人入驻变化
    actorEnterOrLeave() : void {
        let data: BuildingData = Game.moduleModel.building.getBuilding(this.buildingData.id);
        this.updateView(data);
    }
    //艺人槽List刷新回调
    renderListItemActor(index: number, item: BuildingActorItem): void  {
        item.RenderItem(this.actorDataList[index]);
    }

    //艺人槽List点击回调
    clickListItemActor(target: BuildingActorItem, event: Event): void  {
        this.selectCellData = target.dataSource;
        if (target.dataSource.isOpen) {
            Game.system.actorSelectShow(this, this.actorBehaviors);
        } else {
            Game.system.toastText(TEXT.BuildBreakOpen);
        }
    }

    //艺人行为
    actorBehaviors(actorid: number) : void {
        if (actorid) {
            Game.sender.building.buildingEnterActorCell(actorid, this.selectCellData.cellId);            
        } else {
            Game.sender.building.buildingLeaveActorCell(this.selectCellData.actorId);            
        }
    }


    //关闭界面
    close(): void  {
        this.moduleWindow.menuClose();  
    }
    
    //刷新艺人页签
    updateActor(): void {
        let building: BuildingData = this.buildingData;
        
        this.actorDataList  = building.actorCellList;
        this.m_listActor.numItems = building.actorCellList.length;
    }

    //刷新窗口
    updateView(building: BuildingData): void {
        this.buildingData = building;
        this.updateActor();
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        let building: BuildingData  = this.moduleWindow.menuParameter.args[0];
        this.updateView(building);

        Game.net.actorEnterBuildS2C.on(this.actorEnterOrLeave, this);
        Game.net.actorLeaveBuildS2C.on(this.actorEnterOrLeave, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        this.buildingData   = null;
        this.selectCellData = null;       
        this.actorDataList  = null;

        Game.net.actorEnterBuildS2C.off(this.actorEnterOrLeave, this);
        Game.net.actorLeaveBuildS2C.off(this.actorEnterOrLeave, this);
    }
}