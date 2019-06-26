import BaseBreakoffTrigger from "./BaseBreakoffTrigger";

/**
 * 查找到对应的UI触发
 */
export default abstract class FindUIBreakoffTrigger extends BaseBreakoffTrigger
{
    /**
     * 检测UI是否存在，并且显示
     */
    check(): boolean
    {

        return true;
    }
}