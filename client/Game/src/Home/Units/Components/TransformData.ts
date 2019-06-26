import { Component } from "../../../Libs/ECS/Component";
import Assembly from "../../../Libs/Assembly";
import { UnitOrientationType } from "../ExtEnums/UnitOrientationType";

/**
 * 位置
 * 方向
 * 缩放
 */
export default class TransformData extends Component
{
    /** 位置 */
    position = new Laya.Point();

    /** 朝向 */
    orientation: UnitOrientationType = UnitOrientationType.Front_LetDown;

    /** 缩放 */
    scale: number = 0;
}