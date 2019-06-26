/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingBubbleStruct from "../../Generates/SystemModuleHomeMap/BuildingBubbleStruct";
import MapBuilding from "../../Customs/MapBuilding";
import HomeMapUI from "./HomeMapUI";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import { BuildingTabType } from "../ModuleBuildingGJC/BuildingWindowUIGJC";
import TEXT from "../../../Config/Keys/TEXT";
import { IMapUI } from "../../../Home/UnityViews/IMapUI";
import MsgKey from "../../../Config/Keys/MsgKey";

export default class BuildingBubble extends BuildingBubbleStruct implements IMapUI
{
    
    //============================
    // IMapUI
    //----------------------------
    /** 是否需要转地图坐标 */
    isNeedTransformMapPos: boolean = true;
    isAbsoluteScale: boolean = true;
    maxAbsoluteScale: number = 1.0;
    minAbsoluteScale: number = 0.5;
    sourceScale = 1;
    
    private _relativeScale: number = 1;

    get relativeScale(): number
    {
        return this._relativeScale;
    }
    
    set relativeScale(scale: number)
    {
        this._relativeScale = scale;
        this.setScale(scale, scale);
    }

    //============================
    // Buidling Info
    //----------------------------
    private mapBuilding: MapBuilding;
    private homeMapUI: HomeMapUI;

    buildingData: BuildingData;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        
        this.m_btnHandle.onClick(this, this.handle);
    }

    addToScene(homeMapUI:HomeMapUI)
    {
        homeMapUI.mapUILayout.addChild(this);
    }

    handle(event:Event)
    {
        event.stopPropagation();
        switch (this.m_state.selectedIndex) {
            case 0:
                this.canBuild()
                break;
            case 1:
                this.canGetItem()                
                break;
            case 2:
                this.canLevel()
                break;
            default:
                break;
        }
    }

    // 建造
    private canBuild()
    {
        this.homeMapUI.scene2D.zoomBuildingEnter(this.mapBuilding.buildingId);
        Game.menu.openTab(MenuId.BuildingInfo, BuildingTabType.Build, this.mapBuilding.buildingData);
    }

    // 收取
    private canGetItem()
    {
        this.visible = false;
        Game.sender.building.buildingGetProductItem(this.buildingData.id);
    }

    // 升级
    private canLevel()
    {
        this.visible = false;
        Game.sender.building.buildingEndOfLevelUp(this.buildingData.id);
    }

    init(mapBuilding: MapBuilding)
    {
        if (!this.buildingData) {
            Laya.Tween.clearAll(this);
            this.upTween()
        }

        this.state = 0;
        this.mapBuilding = mapBuilding;
        this.homeMapUI = mapBuilding.homeMapUI;        
    }

    private _state:number
    set state(val: number)
    {
        if (this._state != val) {
            this._state = val;
            this.m_state.selectedIndex = val;
        }
    }
    get state(): number {
        return this._state;
    }

    upTween()
    {
        Laya.Tween.to(this, {y:  (this.y + 10)}, 1000, Laya.Ease.sineInOut, Laya.Handler.create(this, this.downTween));
    }

    downTween()
    {
        Laya.Tween.to(this, {y:  (this.y - 10)}, 1000, Laya.Ease.sineInOut, Laya.Handler.create(this, this.upTween));
    }
}