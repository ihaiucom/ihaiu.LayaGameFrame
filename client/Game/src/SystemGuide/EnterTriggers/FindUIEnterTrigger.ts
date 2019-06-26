import BaseEnterTrigger from "./BaseEnterTrigger";

/**
 * 查找到对应的UI触发
 */
export default class FindUIEnterTrigger extends BaseEnterTrigger
{
    /**
     * 检测UI是否存在，并且显示, 表格内触发条件可以再次处理
     */
    check(): boolean
    {
        // 可检测开关,预防多条引导同时被检测
        if ( !this.switch ){
            return false;
        }

        return true;
    }
}