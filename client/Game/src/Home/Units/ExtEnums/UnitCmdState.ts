/** 命令执行状态 */
export enum UnitCmdState
{
    /** 未开始 */
    None,
    /** 进入 等待阶段 */
    EnterTick,
    /** 进入 即将完成 */
    EnterWillEnd,
    /** 刷新阶段 */
    Tick,
    /** 即将结束阶段 */
    WillEnd,
    /** 结束 等待阶段 */
    EndTick,
    /** 结束 即将完成 */
    EndWillEnd,
    /** 结束 完成 */
    Ended,
}