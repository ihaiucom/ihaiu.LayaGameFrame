/** 命令类型 */
export enum UnitCmdType
{
    /** 冒泡说话 */
    BubbleTalk,

    /** 播放动作 */
    Action,

    /** 锁定等待 */
    LockWait,

    /** 待机 */
    Idle,

    /** 坐下 */
    Sitdown,

    /** 拖拽 */
    Drag,

    /** 根据路径移动 */
    MovePath,

    /** 传送 */
    Transfer,

    /** 喝酒 */
    Drink,

    /** 打鼓 */
    Drum,


    /** 组 -- 前往 座位 */
    Group_GotoSitdown,

    /** 组 -- 前往 喝酒 */
    Group_GotoDrink,

    /** 组 -- 前往 打鼓 */
    Group_GotoDrum,
}