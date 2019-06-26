import TookHandler from "./TookHandler";
import Game from "../Game";

/**
 * 心跳任务
 */
export default abstract class HeartTookHandler extends TookHandler
{
    /** 心跳时间(单位毫秒) */
    heartbeat: number;

    /** 自己模块心跳时间(单位毫秒) */
    selfHeartbeat: number = 0;

    
    
    /** 
     * 验证是否可以被调用
     */
    validate(serverMilliseconds: number): boolean
    {
        let result = false;

        // 发送时间
        if (this.selfHeartbeat > 0 && this.menuId > 0 && Game.menu.isOpened(this.menuId))
        {
            result = serverMilliseconds - this.__lastSendServerMilliseconds >= this.selfHeartbeat;
        }
        else
        {
            result = serverMilliseconds - this.__lastSendServerMilliseconds >= this.heartbeat;
        }

        return result;
    }


    
    /** 最后一次执行的服务器时间(毫秒) */
    __lastSendServerMilliseconds: number = 0;

    
    /**
     * 执行
     */
    exe()
    {
    }

    
    /** 内部方法，继承的不要重写 */
    __onExe()
    {
        this.__lastSendServerMilliseconds = Game.time.serverMilliseconds;
    }
}