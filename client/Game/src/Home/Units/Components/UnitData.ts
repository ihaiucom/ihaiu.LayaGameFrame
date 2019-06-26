import { Component } from "../../../Libs/ECS/Component";
import Assembly from "../../../Libs/Assembly";
import { UnitType } from "../ExtEnums/UnitType";

/** 单位数据 */
export default class UnitData extends Component
{

    /** 单位ID */
    unitId: int = 0;
    /** 单位类型 */
    unityType: UnitType;
}