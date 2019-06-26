
import Assembly from "../../../Libs/Assembly";
import { StartSystem } from "../../../Libs/ECS/Interfaces";
import SkeletonData from "../Components/SkeletonData";
import UnitData from "../Components/UnitData";
import HomeWorld from "../Worlds/HomeWorld";
import SkeletonUnitView from "../../UnityViews/SkeletonUnitView";
import { System } from "../../../Libs/ECS/System";
import { Family, FamilyBuilder } from "../../../Libs/ECS/Family";
import TransformData from "../Components/TransformData";
import { SystemPriority } from "../SystemPriority";
import AbstractUnitView from "../../UnityViews/AbstractUnitView";


/**
 * 骨骼动画
 */
export default class ViewPositionSystem extends System
{
    handlerClassType = <any> SkeletonData;
    family?: Family;
    constructor() 
    {
        super();
        this.priority = SystemPriority.ViewPositionSystem;
    }

    onAttach(engine: HomeWorld) 
    {
        super.onAttach(engine);
        this.family = new FamilyBuilder(engine).include(UnitData , TransformData, SkeletonData).build();
    }


    update(engine: HomeWorld, delta: number): void
    {
        let unit: UnitData;
        let transform: TransformData;
        let view: AbstractUnitView;
        for (let entity of this.family.entities) 
        {
            unit = entity.getComponent(UnitData);
            transform = entity.getComponent(TransformData);
            view = engine.unitViewMap.getValue(unit.unityType, unit.unitId);
            if(view)
                view.setXY(transform.position.x, transform.position.y);
        }
    }
}