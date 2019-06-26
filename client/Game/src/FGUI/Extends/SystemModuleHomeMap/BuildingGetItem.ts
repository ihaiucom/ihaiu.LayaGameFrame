/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingGetItemStruct from "../../Generates/SystemModuleHomeMap/BuildingGetItemStruct";
import Game from "../../../Game";
import MapBuilding from "../../Customs/MapBuilding";
import HomeMapUI from "./HomeMapUI";

export default class BuildingGetItem extends BuildingGetItemStruct
{
    /** 丢回对象池 */
    public poolRecover()
    {
        this.alpha = 1.0;
        Laya.Tween.clearAll(this);
        BuildingGetItem._poolRecover(this);
    }

    private static _poolRecover(item: BuildingGetItem)
    {
        if(BuildingGetItem.pool.indexOf(item) == -1)
            BuildingGetItem.pool.push(item);
    }

    private static pool: BuildingGetItem[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): BuildingGetItem
    {
        let item: BuildingGetItem;
        if(BuildingGetItem.pool.length > 0)
        {
            item = BuildingGetItem.pool.pop();
        }
        else
        {
            item = BuildingGetItem.createInstance();
        }
        return item;
    }

    init(data: any, mapBuilding: MapBuilding, homeMapUI: HomeMapUI): void {
        let config = Game.config.item.getConfig(data.itemId);
        this.m_icon.url = config.iconUrl;
        this.m_labNum.text = "+" + data.GetNum;
        
        this.setXY(mapBuilding.anchor.x, mapBuilding.anchor.y);
        homeMapUI.mapTopLayout.addChild(this.displayObject);
    }

    play(duration: number = 1000, delay: number = 1000): void {
        Laya.timer.once(delay, this, ()=>  
        {
            this.visible = true;
            Laya.Tween.to(this, {y: this.y - 300, alpha: 0.1}, duration, Laya.Ease.linearNone, Laya.Handler.create(this, ()=>  
            {
                this.playEnd()
            }), 0);
        })


    }

    private playEnd()
    {
        this.displayObject.removeSelf();
        this.poolRecover();
    }
}