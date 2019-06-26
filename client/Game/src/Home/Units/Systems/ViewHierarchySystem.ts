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
import { Entity } from "../../../Libs/ECS/Entity";
import HierarchyData from "../Components/HierarchyData";


/**
 * 层级顺序
 */
export default class ViewHierarchySystem extends System
{
    handlerClassType = <any> SkeletonData;
    family?: Family;
    constructor() 
    {
        super();
        this.priority = SystemPriority.ViewHierarchySystem;
    }

    onAttach(engine: HomeWorld) 
    {
        super.onAttach(engine);
        this.family = new FamilyBuilder(engine).include(UnitData , TransformData, HierarchyData).build();
    }


    update(engine: HomeWorld, delta: number): void
    {
        let unit: UnitData;
        let hierarchy: HierarchyData;
        let view: AbstractUnitView;
        let entities: Entity[] = <any>this.family.entities.slice(0);
        entities.sort(this.onSort);
        let i = 0;
        for (let entity of entities) 
        {

            unit = entity.getComponent(UnitData);
            hierarchy = entity.getComponent(HierarchyData);
            hierarchy.index = i;
            view = engine.unitViewMap.getValue(unit.unityType, unit.unitId);
            if(view && view.isInHierarchy && !view.isHierarchyTop)
            {
                view.setHierarchyIndex(hierarchy.index);
                i ++;
            }
        }
    }

    onSort(a: Entity, b: Entity)
    {
        let at = a.getComponent(TransformData);
        let bt = b.getComponent(TransformData);
        return at.position.y - bt.position.y;
    }
}