/** 命令完成方式 */
export enum UnitCmdCompleteType
{
    /** 立即 */
    Immediately,
    /** 等等一段时间 */
    Time,
    /** 下一帧 */
    NextFrame,
    /** 执行完成 */
    WaitEnd
}