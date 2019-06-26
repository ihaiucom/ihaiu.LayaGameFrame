/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingEffectStruct from "../../Generates/SystemModuleHomeMap/BuildingEffectStruct";
import MapBuilding from "../../Customs/MapBuilding";
import Game from "../../../Game";
import R from "../../../Config/Keys/R";
import HomeMapUI from "./HomeMapUI";

export default class BuildingEffect extends BuildingEffectStruct
{
    private mapBuilding: MapBuilding;

    private buildSkeleton: Laya.Skeleton;
    private levelSkeleton: Laya.Skeleton;
    private breakSkeleton: Laya.Skeleton;

    private spotSkeleton: Laya.Skeleton;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);

        this.initSkeletons();
    }

    addToScene(homeMapUI:HomeMapUI)
    {
        homeMapUI.mapTopLayout.addChild(this.displayObject);
    }

    async initSkeletons()
    {
        // 获取UI骨骼动画
        this.buildSkeleton = await Game.asset.uiSkeletonRequrestItemAsynByName(R.spineUI.Hourglass);
        if(this.buildSkeleton)
        {
            this.buildSkeleton.x = 300;
            this.buildSkeleton.y = 240;
            this.m_buildEffect.displayObject.addChild(this.buildSkeleton);
        }

        this.levelSkeleton = await Game.asset.uiSkeletonRequrestItemAsynByName(R.spineUI.Hourglass);
        if(this.levelSkeleton)
        {
            this.levelSkeleton.x = 300;
            this.levelSkeleton.y = 240;
            this.m_levelEffect.displayObject.addChild(this.levelSkeleton);
        }

        this.breakSkeleton = await Game.asset.uiSkeletonRequrestItemAsynByName(R.spineUI.Hourglass);
        if(this.breakSkeleton)
        {
            this.breakSkeleton.x = 300;
            this.breakSkeleton.y = 240;
            this.m_breakEffect.displayObject.addChild(this.breakSkeleton);
        }

        this.spotSkeleton = await Game.asset.uiSkeletonRequrestItemAsynByName(R.spineUI.Spot);
        if (this.spotSkeleton) {
            this.spotSkeleton.x = 235;
            this.spotSkeleton.y = -45;
            this.displayObject.addChild(this.spotSkeleton);
        }

        this.setVisible(this._see);
    }

    destroySkeletons()
    {
        if (this.buildSkeleton) {
            this.buildSkeleton.removeSelf();
            Game.asset.uiSkeletonRecoverItem(this.buildSkeleton);
        }
        if (this.levelSkeleton) {
            this.levelSkeleton.removeSelf();
            Game.asset.uiSkeletonRecoverItem(this.levelSkeleton);
        }
        if (this.breakSkeleton) {
            this.breakSkeleton.removeSelf();
            Game.asset.uiSkeletonRecoverItem(this.buildSkeleton);
        }
        if (this.spotSkeleton) {
            this.spotSkeleton.removeSelf();
            Game.asset.uiSkeletonRecoverItem(this.spotSkeleton);
        }
    }

    init(mapBuilding: MapBuilding)
    {
        if (!this.mapBuilding) {
            this.state = 0;
            this.setVisible(false);
        }
        this.mapBuilding = mapBuilding;
    }

    setEffect()
    {
        
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

    private _see: boolean
    setVisible(visible: boolean)
    {
        this._see = visible;

        if (!this.buildSkeleton || !this.levelSkeleton || !this.breakSkeleton) {
            return;
        }

        if (visible) {
            switch (this._state) {
                case 0:
                    this.buildSkeleton.play(0, true);
                    this.spotSkeleton.play(0, true);
                    break;
                case 1:
                    this.levelSkeleton.play(0, true);
                    this.spotSkeleton.play(0, true);
                    break;
                case 2:
                    this.breakSkeleton.play(0, true);
                    break;
            
                default:
                    break;
            }
        } else {
            switch (this._state) {
                case 0:
                    this.buildSkeleton.stop();
                    this.spotSkeleton.stop();
                    break;
                case 1:
                    this.levelSkeleton.stop();
                    this.spotSkeleton.stop();
                    break;
                case 2:
                    this.breakSkeleton.stop();
                    break;
            
                default:
                    break;
            }
        }
        this.visible = visible;
    }
}