import MapBuilding from "./MapBuilding";
import BuildingData from "../../GameModule/DataStructs/BuildingData";
import Game from "../../Game";
import TimeHelper from "../../GameHelpers/TimeHelper";
import HomeMapUI from "../Extends/SystemModuleHomeMap/HomeMapUI";

/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

export default class BuildingInfo
{   
    

    private mapBuilding: MapBuilding;
    private buildingData: BuildingData;

    Fill: number = 0;

    private _currentTime: number = 0;
    private _totalTime: number = 0;

    private _displayObject: any; 

    set displayObject(obj: any){
        obj.touchable = false;
        this._displayObject = obj
    }

    get displayObject()
    {
        return this._displayObject;
    }

    // onSceneZoomChange(zoomRate: number)
    // {
    //     if (!this.buildingData || !this.buildingData.buildingOrUpleveing) {
    //         return;
    //     }

    //     if(zoomRate <= 0.3)
    //     {
    //         this.m_state.selectedIndex = 1;
    //     }
    //     else
    //     {
    //         this.m_state.selectedIndex = 2;
    //     }
    // }

    addToScene(homeMapUI:HomeMapUI)
    {
        let posX = this.displayObject.parent.x + this.displayObject.x;
        let posY = this.displayObject.parent.y + this.displayObject.y;

        this.displayObject.setXY(posX, posY);
        this.displayObject.displayObject.zOrder = posY;
        homeMapUI.mapAvatarLayout.addChild(this.displayObject.displayObject);
    }

    private isTween: boolean = false;
    stateChange()
    {
        if (!this.buildingData || this.buildingData.buildingOrUpleveing) {
            return;
        }

        if (this.buildingData.isNoBre) {
            this.displayObject.m_action.selectedIndex = 1;
        } else {
            this.displayObject.m_action.selectedIndex = 0;
        }

        let visible = (!this.buildingData.userLevelRequest && this.buildingData.costEnough);
        this.displayObject.m_imgArrow.visible = visible
        if (visible && !this.isTween) {
            this.isTween = true;
            this.upTween();
        } else if (!visible && this.isTween) {
            this.isTween = false;
            Laya.Tween.clearAll(this.displayObject.m_imgArrow)
        }
    }

    update(mapBuilding: MapBuilding)
    {
        this.mapBuilding = mapBuilding;
        this.buildingData= mapBuilding.buildingData;
        this.Fill = 0;

        let buildingData = mapBuilding.buildingData;
        if (buildingData.buildingOrUpleveing) {
            this.displayObject.m_imgArrow.visible = false;
            this.displayObject.m_state.selectedIndex = 2;

            this._currentTime = Game.time.serverSeconds - buildingData.buildingOrUpleveingTimeStart;
            this._totalTime = Math.max(buildingData.buildingOrUpleveingTimestamp - buildingData.buildingOrUpleveingTimeStart, 0);
            Laya.timer.clear(this, this.onSecond);
            Laya.timer.loop(1000, this, this.onSecond, null, true);                
            this.onSecond();
        } else {
            this.displayObject.m_state.selectedIndex = 0;
            this.displayObject.m_labLv.text =  buildingData.builded ? String(buildingData.level): "0";
        }
    }

    onSecond()
    {
        this._currentTime = Math.min(this._currentTime, this._totalTime);
        this.displayObject.m_labTime.text = TimeHelper.TimeFormatFixedHHMMSSCN(this._totalTime - this._currentTime);
        this.Fill = this._currentTime / this._totalTime;
        this.displayObject.m_proTime.value = this.Fill * 100;
        if (this.Fill == 1) {
            this.mapBuilding.homeMapUI.buildingButtonBar.hide();
            this.mapBuilding.buildAndLevelAndItemBubble.visible = true;
            this.mapBuilding.buildAndLevelAndItemBubble.state   = 2;
            this.mapBuilding.buildAndLevelAndBreakEffect.setVisible(false);
            this.displayObject.m_state.selectedIndex = 1;
            if (this.buildingData.builded) {
                this.displayObject.m_labAction.text = "升级完成";
            } else {
                this.displayObject.m_labAction.text = "建造完成"
            }
            
            Laya.timer.clear(this, this.onSecond);
        }

        this._currentTime += 1;
    }

    upTween()
    {
        Laya.Tween.to(this.displayObject.m_imgArrow, {y:  (this.displayObject.m_imgArrow.y + 4)}, 400, Laya.Ease.sineInOut, Laya.Handler.create(this, this.downTween));
    }

    downTween()
    {
        Laya.Tween.to(this.displayObject.m_imgArrow, {y:  (this.displayObject.m_imgArrow.y - 4)}, 400, Laya.Ease.sineInOut, Laya.Handler.create(this, this.upTween));
    }
}