import TookHandler from "../TookHandler";
import { MenuId } from "../../GameModule/MenuId";
import Game from "../../Game";
import HeartTookHandler from "../HeartTookHandler";

/**
 * 测试心跳 调用
 */
export default class TestHeartTookHandler extends HeartTookHandler
{
    /** 初始化 */
    init()
    {
        // 前提模块ID, 只有这些模块是置顶时才通过
        this.preconditionMenuIds = [MenuId.Home, MenuId.Studio];
        // 自己所属模块，用来验证功能是否解锁
        this.menuId = MenuId.Studio;

        // 心跳时间(单位毫秒)
        this.heartbeat = 10 * 1000;

        // 自己模块心跳时间(单位毫秒)
        this.selfHeartbeat = 1 * 1000;
        

        super.init();
    }

    /** 执行 */
    exe()
    {
        super.exe();
        console.log("TestHeartTookHandler exe");
    }

}