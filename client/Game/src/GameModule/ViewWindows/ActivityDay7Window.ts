import MWindow from "../../GameFrame/Module/MWindow";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import ActivityDay7WindowUI from "../../FGUI/Extends/ModuleDay7Activity/ActivityDay7WindowUI";

//======================
// 活动窗口
//----------------------
export default class ActivityDay7Window extends MWindow {
    windowUI: ActivityDay7WindowUI;

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(ActivityDay7WindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
    }

    //生成动态预加载资源
    generateAssetsForDynmic(): void  {
        super.generateAssetsForDynmic();
    }

    //模块界面创建
    protected onMenuCreate(): void  {
        let windowUI = ActivityDay7WindowUI.createInstance();
        this.windowUI = windowUI;
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