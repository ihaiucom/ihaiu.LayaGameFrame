import MWindow from "../../GameFrame/Module/MWindow";
import BuildingActorWindowUI from "../../FGUI/Extends/ModuleBuildingActor/BuildingActorWindowUI";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";

export default class BuildingActorWindow  extends MWindow
 {
    window: BuildingActorWindowUI;

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(BuildingActorWindowUI);
    }

    //生成动态预加载资源
    generateAssetsForDynmic(): void  {
        super.generateAssetsForDynmic();
    }
   
    //模块界面创建
    protected onMenuCreate(): void  {
        let windowUI = BuildingActorWindowUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;


        super.onMenuCreate();
    }

    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  {
        
        super.onMenuOpen(parameter);
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