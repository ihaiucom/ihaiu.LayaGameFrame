import FixedTimeTookHandler, { FixedTimeConfig } from "../FixedTimeTookHandler";
import { MenuId } from "../../GameModule/MenuId";

/**
 * 0:0:0 执行
 */
export default class FixedTimeHookHandler_0h0m0s extends FixedTimeTookHandler
{
    
    /** 
     * 初始化, 配置你的订阅
     */
    init()
    {
        
        // // 前提模块ID, 只有这些模块是置顶时才通过
        // this.preconditionMenuIds = [MenuId.Home, MenuId.Studio];
        // // 自己所属模块，用来验证功能是否解锁
        // this.menuId = MenuId.Studio;

        this.fixedTimeList.push(FixedTimeConfig.CreateHMS(0, 0, 0));  
        super.init();
    }

    

    /** 执行 */
    exe()
    {
        console.log("FixedTimeHookHandler_0h0m0s exe");
    }
}