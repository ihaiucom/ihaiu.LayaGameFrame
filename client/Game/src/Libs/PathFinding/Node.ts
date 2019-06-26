import { Point } from "./Point";

export class NodeState
{
    static Normal = 0;
    static Disable = 1;
    static Start = 2;
    static End = 3;
    static Greend = 4;
}

export class LineState
{
    static Normal = 0;
    static Disable = 1;
    static Green = 2;
    static GreenMax = 3;
}

/**
 * 节点
 */
export class Node
{
    // 节点索引
    index: number;
    // 坐标
    pos: Point = new Point();
    // 子节点
    // childes: Node[] = [];
}