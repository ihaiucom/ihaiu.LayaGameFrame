
import Assembly from "../../../Libs/Assembly";
import { DestroySystem } from "../../../Libs/ECS/Interfaces";
import SkeletonData from "../Components/SkeletonData";
import UnitData from "../Components/UnitData";
import HomeWorld from "../Worlds/HomeWorld";
import SkeletonUnitView from "../../UnityViews/SkeletonUnitView";
import ActorActionId from "../../../Config/Keys/ActorActionId";
import ShadowData from "../Components/ShadowData";
import TransformData from "../Components/TransformData";


/**
 * 单位消耗时, 系统
 */
export default class UnitDataDestorySystem extends DestroySystem<UnitData>
{
    handlerClassType = <any> UnitData;


    destroy(unit: UnitData, engine: HomeWorld): void
    {
        engine.unitEngityMap.remove(unit.unityType, unit.unitId);
    }
}