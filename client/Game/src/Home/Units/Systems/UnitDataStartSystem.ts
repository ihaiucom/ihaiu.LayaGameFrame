
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
 * 单位创建时, 系统
 */
export default class UnitDataStartSystem extends StartSystem<UnitData>
{
    handlerClassType = <any> UnitData;


    start(unit: UnitData, engine: HomeWorld): void
    {
        engine.unitEngityMap.add(unit.unityType, unit.unitId, unit.entity);
    }
}