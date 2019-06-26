
import Assembly from "../../../Libs/Assembly";
import { System } from "../../../Libs/ECS/System";
import { SystemPriority } from "../SystemPriority";
import { Family } from "../../../Libs/ECS/Family";
import HomeWorld from "../Worlds/HomeWorld";
import { IMapUI } from "../../UnityViews/IMapUI";
import Mathf from "../../../Libs/Mathf";
import MapHelper from "../Utils/MapHelper";


/**
 * 地图UI 大小更新
 */
export default class ViewMapUILayoutSystem extends System
{
    family?: Family;
    constructor() 
    {
        super();
        this.priority = SystemPriority.ViewMapUILayoutSystem;
    }

    // onAttach(engine: HomeWorld) 
    // {
    //     super.onAttach(engine);
    //     this.family = new FamilyBuilder(engine).include(UnitData , TransformData, SkeletonData).build();
    // }



    lastZoom = 1;
    update(engine: HomeWorld, delta: number): void
    {
        let zoom = engine.mapUILayout.zoom;
        if(this.lastZoom == engine.mapUILayout.zoom || zoom == 0)
        {
            return;
        }

        let mapUILayout = engine.mapUILayout;
        let count = mapUILayout.numChildren;
        let item: IMapUI;
        for(let i = 0; i < count; i ++)
        {
            item = <any> mapUILayout.getChildAt(i);
            MapHelper.uiRefreshZoom(item, zoom);
        }
    }

}