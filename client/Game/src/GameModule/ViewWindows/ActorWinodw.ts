import MWindow from '../../GameFrame/Module/MWindow';
import ActorWindowUIGJC from '../../FGUI/Extends/ModuleActorGJC/ActorWindowUIGJC';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
export default class ActorWindow extends MWindow {
    window: ActorWindowUIGJC;
    
    constructor() {
        super();
        
        //添加依赖资源
        this.addAssetForFguiComponent(ActorWindowUIGJC);
    }

    //生成动态预加载资源
    generateAssetsForDynmic(): void  {
        super.generateAssetsForDynmic();
    }

    protected onMenuCreate(): void  {
        let windowUI = ActorWindowUIGJC.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;

        super.onMenuCreate();
    }

    //模块界面打开时，显示前被调用
    onMenuOpen(parameter: MenuOpenParameter): void  {
        
        super.onMenuOpen(parameter);
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