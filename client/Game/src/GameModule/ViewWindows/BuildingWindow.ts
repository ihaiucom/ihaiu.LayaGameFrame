import MWindow from "../../GameFrame/Module/MWindow";
import MenuOpenParameter from "../../GameFrame/Menu/MenuOpenParameter";
import { MenuOpenType } from "../../GameFrame/Menu/MenuOpenType";
import Game from "../../Game";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import BuildingWindowUIGJC from "../../FGUI/Extends/ModuleBuildingGJC/BuildingWindowUIGJC";

//======================
// 建筑窗口
//----------------------
export default class BuildingWindow extends MWindow 
{
    window: BuildingWindowUIGJC;

    constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiComponent(BuildingWindowUIGJC);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic);
    }

    //生成动态预加载资源
    generateAssetsForDynmic(): void  {
        super.generateAssetsForDynmic();
    }
   
    //模块界面创建
    protected onMenuCreate(): void  {
        let windowUI = BuildingWindowUIGJC.createInstance();
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
        if (this.window && Number(tabIndex) != this.window.m_footView.m_page.selectedIndex)  {
            this.window.m_footView.m_page.selectedIndex = Number(tabIndex);
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