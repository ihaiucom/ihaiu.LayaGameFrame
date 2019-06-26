import MWindow from '../../GameFrame/Module/MWindow';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import StoryWindowUIGJC from '../../FGUI/Extends/ModuleStoryGJC/StoryWindowUIGJC';
export default class StoryWindow extends MWindow {
    window: StoryWindowUIGJC;

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(StoryWindowUIGJC);
    }

    protected onMenuCreate(): void {
        let windowUI = StoryWindowUIGJC.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  {
        if (this.window && Number(tabIndex) != this.window.m_page.selectedIndex)  {
            this.window.m_page.selectedIndex = Number(tabIndex);
        }
        super.openTab(tabIndex);
    }

    //=========================
    // 显示完成(初始化完成)
    // 可以在这里添加协议消息监听(网络、事件)
    //-------------------------
    protected onShowComplete()  {


        super.onShowComplete();
    }

    //=========================
    // 隐藏完成(销毁完成)
    // 可以在这里移除协议消息监听
    //-------------------------
    protected onHideComplete()  {


        super.onHideComplete();
    }
}