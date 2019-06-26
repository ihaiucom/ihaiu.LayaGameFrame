import Game from "../../Game";
import Signal from "../../Libs/signals/Signal";

//======================
// 模块 数据模型
//----------------------
export default abstract class MModel
{

    // 初始化
    install(): void
    {
        this.startListen();
    }

    // 状态发送改变
    sStateChange:Signal = new Signal();

    // 刷新状态: 红点
    refreshState()
    {

    }

    // 添加事件监听
    protected startListen()
    {
    }

    // 移除事件监听
    protected stopListen()
    {
    }

    protected onStateChange()
    {
        this.sStateChange.dispatch();
    }

}