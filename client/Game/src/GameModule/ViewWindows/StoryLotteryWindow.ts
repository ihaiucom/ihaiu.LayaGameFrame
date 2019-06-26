import MWindow from "../../GameFrame/Module/MWindow";
import StoryLotteryWindowUI from "../../FGUI/Extends/ModuleStoryLottery/StoryLotteryWindowUI";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import Game from "../../Game";

// 剧本招募
export default class StoryLotteryWindow extends MWindow 
{
     
    conent: StoryLotteryWindowUI;

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(StoryLotteryWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
    }

    //生成动态预加载资源
    generateAssetsForDynmic(): void  {
        super.generateAssetsForDynmic();
    }

    //模块界面创建
    protected onMenuCreate(): void  {
        let windowUI = StoryLotteryWindowUI.createInstance();
        this.conent = windowUI;
        this.contentPane = windowUI;

        // 设置关闭按钮 关闭当前窗口
        this.setCloseBtnEvent();

        super.onMenuCreate();
    }

    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  {
        super.onMenuOpen(parameter);
    }

    //打开Tab面板
    openTab(tabIndex: number | string)  {
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