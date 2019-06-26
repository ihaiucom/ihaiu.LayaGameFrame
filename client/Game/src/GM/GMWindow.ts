import MWindow from "../GameFrame/Module/MWindow";
import GMMain from "../FGUI/Extends/GameGM/GMMain";
import { MenuOpenType } from "../GameFrame/Menu/MenuOpenType";
import GameGMBinder from "../FGUI/Generates/GameGM/GameGMBinder";
import GuiSetting from "../FGUI/GuiSetting";
import MenuLayer from "../GameFrame/Menu/MenuLayer";
import GMMenuType from "./GMMenuType";

export default class GMWindow extends MWindow
{
    conent: GMMain;
    private isloaded = false;
    constructor()
    {
        super();
        this.menuParameter = { openType: MenuOpenType.Tab, openIndex: 0, args: [] };
    }

    load()
    {
        GameGMBinder.bindAll();
        // 加载UI
        Laya.loader.load([
            { url: "res/fgui/GameGM.bin", type: Laya.Loader.BUFFER },
        ], Laya.Handler.create(this, this.onLoaded));
    }

    private onLoaded()
    {
        GuiSetting.addPackage("res/fgui/GameGM");
        this.isloaded = true;
        this.showOn(MenuLayer.gm);
    }


    show()
    {
        if (this.isloaded)
        {
            this.showOn(MenuLayer.gm);
        }
        else
        {
            this.load();
        }
    }






    // 菜单创建
    protected onMenuCreate(): void
    {
        this.conent = GMMain.createInstance();
        this.contentPane = this.conent;
        // this.center();
        // //弹出窗口的动效已中心为轴心
        // this.setPivot(0.5, 0.5);

        // 注册Tab
        this.registerTab(GMMenuType.ADD, this.conent.m_addPage);
        this.registerTab(GMMenuType.CMD, this.conent.m_cmdPage);
        this.registerTab(GMMenuType.SELECTSERVER, this.conent.m_selectServerPage);
        this.registerTab(GMMenuType.LOG, this.conent.m_debugPage);
        this.registerTab(GMMenuType.DisplayTree, this.conent.m_displayTreePage);
        this.registerTab(GMMenuType.TimeLoop, this.conent.m_timeLoopPage);
        this.registerTab(GMMenuType.Tick, this.conent.m_tickPage);


        this.openTab(GMMenuType.ADD);
        super.onMenuCreate();
    }

    menuClose()
    {
        this.onMenuClose();
    }


    // 如果需要处理额外的业务，可以重新该方法
    onOpenTab(tabIndex: number | string)
    {
        this.conent.m_mainMenu.setSelect(tabIndex);
    }



    //=========================
    // 显示完成
    // 可以在这里添加协议消息监听
    //-------------------------
    protected onShowComplete()
    {
        super.onShowComplete();
    }

    //=========================
    // 隐藏完成
    // 可以在这里移除协议消息监听
    //-------------------------
    protected onHideComplete()
    {
        super.onHideComplete();
    }

}