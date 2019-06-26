import Assembly from "../../../Libs/Assembly";
import { Component } from "../../../Libs/ECS/Component";

/** 更加路径移动 */
export default class MovePathData extends Component
{
    walkSpeed = 6;
    runSpeed = 12;
    /** 当前路径节点 */
    routeNodeId: int;
}