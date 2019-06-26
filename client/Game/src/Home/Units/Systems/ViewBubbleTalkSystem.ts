
import Assembly from "../../../Libs/Assembly";
import { System } from "../../../Libs/ECS/System";
import { SystemPriority } from "../SystemPriority";
import { Family } from "../../../Libs/ECS/Family";
import HomeWorld from "../Worlds/HomeWorld";


/**
 * 气泡说话 位置更新
 */
export default class ViewBubbleTalkSystem extends System
{
    family?: Family;
    constructor() 
    {
        super();
        this.priority = SystemPriority.ViewBubbleTalkSystem;
    }

    // onAttach(engine: HomeWorld) 
    // {
    //     super.onAttach(engine);
    //     this.family = new FamilyBuilder(engine).include(UnitData , TransformData, SkeletonData).build();
    // }


    update(engine: HomeWorld, delta: number): void
    {
        let list = engine.bubbleTalkViewManager.list;
        for(let view of list)
        {
            view.refreshPos();
        }

        engine.bubbleTalkViewManager.willRemoveTime -= delta;
        if(engine.bubbleTalkViewManager.willRemoveTime <= 0)
        {
            let list = engine.bubbleTalkViewManager.willRemove;
            for(let unit of list)
            {
                engine.bubbleTalkViewManager.removeView(unit.unityType, unit.unitId);
            }

            engine.bubbleTalkViewManager.willRemove.length = 0;
        }
    }
}