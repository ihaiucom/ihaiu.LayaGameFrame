import MWindow from "../GameFrame/Module/MWindow";
import Game from "../Game";

// 组件代码模版, 没有用到的方法尽量删掉
export class FguiComponentTemplete extends fairygui.GComponent
{
    // 窗口
    moduleWindow: MWindow;

    // 窗口初始化完毕
    onWindowInited(): void
    {

    }

    // 窗口销毁
    onWindowDestory(): boolean
    {
        return false;
    }

    // 窗口即将打开，可以在这里做缓动
    onWindowWillShow()
    {

    }

    // 窗口即将关闭，可以在这里做缓动
    onWindowWillHide(): void
    {

    }

    // 窗口显示
    onWindowShow(): void
    {
        Game.net.gamerLoginGetDataS2C.on(this.updateData, this);

    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Game.net.gamerLoginGetDataS2C.off(this.updateData, this);
    }


    // 该组件所在Tab 显示
    onTabShow(): void
    {

    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }

    // 刷新数据
    updateData()
    {
    }
}