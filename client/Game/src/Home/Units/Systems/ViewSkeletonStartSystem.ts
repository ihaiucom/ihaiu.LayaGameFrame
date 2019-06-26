
import Assembly from "../../../Libs/Assembly";
import { StartSystem } from "../../../Libs/ECS/Interfaces";
import SkeletonData from "../Components/SkeletonData";
import UnitData from "../Components/UnitData";
import HomeWorld from "../Worlds/HomeWorld";
import SkeletonUnitView from "../../UnityViews/SkeletonUnitView";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import ShadowData from "../Components/ShadowData";
import TransformData from "../Components/TransformData";


/**
 * 骨骼动画
 */
export default class ViewSkeletonStartSystem extends StartSystem<SkeletonData>
{
    handlerClassType = <any> SkeletonData;


    start(self: SkeletonData, engine: HomeWorld): void
    {
        let view: SkeletonUnitView;

        let unit = self.entity.getComponent<UnitData>(UnitData);
        let transform = self.entity.getComponent<TransformData>(TransformData);
        console.log(`unitType=${unit.unityType}  unitId=${unit.unitId}    __InstanceId=${unit.__InstanceId}`  );
        view = engine.unitViewMap.getValue(unit.unityType, unit.unitId);
        if(view)
        {
            return;
        }


        view = SkeletonUnitView.poolGet();
        view.install(self, engine, unit);
        view.setScale(transform.scale);
        view.playAction(ActorActionId.idle);
        view.setParent(engine.scene.scene2D.layoutAvatar);
        engine.unitViewMap.add(unit.unityType, unit.unitId, view);

        let shadow = self.entity.getComponent<ShadowData>(ShadowData);
        if(shadow)
        {
            view.addShadow(engine.scene.scene2D.layoutShadow);

            // Laya.timer.once(5000, this, ()=>{
            //     if(view.isInHierarchy)
            //     {
            //         view.addShadow(engine.scene.scene2D.layoutShadow);
            //     }
            // });
        }
    }
}