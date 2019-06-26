import { Component } from "../../../Libs/ECS/Component";
import Assembly from "../../../Libs/Assembly";
import { UnitType } from "../ExtEnums/UnitType";

/** 单位动作数据 */
export default class UnitActionData extends Component
{
    /** 动作ID */
    actionId: int = 0;
}