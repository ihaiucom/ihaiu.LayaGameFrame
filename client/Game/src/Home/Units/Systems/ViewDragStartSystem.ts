
import Assembly from "../../../Libs/Assembly";
import { StartSystem } from "../../../Libs/ECS/Interfaces";
import SkeletonData from "../Components/SkeletonData";
import UnitData from "../Components/UnitData";
import HomeWorld from "../Worlds/HomeWorld";
import SkeletonUnitView from "../../UnityViews/SkeletonUnitView";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import ShadowData from "../Components/ShadowData";
import TransformData from "../Components/TransformData";
import DragData from "../Components/DragData";


/**
 * 拖拽控制器系统 启动
 */
export default class ViewDragStartSystem extends StartSystem<DragData>
{
    handlerClassType = <any> DragData;

    start(self: DragData, engine: HomeWorld): void
    {
        let view: SkeletonUnitView;
        let unit = self.entity.getComponent<UnitData>(UnitData);
        view = engine.unitViewMap.getValue(unit.unityType, unit.unitId);
        if(view)
        {
            view.addDragCtrl();
        }

    }
}