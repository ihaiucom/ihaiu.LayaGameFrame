import MWindow from "../GameFrame/Module/MWindow";

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

    // 窗口显示
    onWindowShow(): void
    {

    }

    // 窗口隐藏
    onWindowHide(): void
    {

    }


    // 该组件所在Tab 显示
    onTabShow(): void
    {

    }

    // 该组件所在Tab 隐藏
    onTabHide(): void
    {

    }
}