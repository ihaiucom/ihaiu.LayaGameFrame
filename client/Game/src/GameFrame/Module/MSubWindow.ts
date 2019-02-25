import MWindow from "./MWindow";
import { AssetItemType } from "../AssetManagers/AssetItemType";
import MenuOpenParameter from "../Menu/MenuOpenParameter";

//======================
// 模块子窗口
//----------------------
export default abstract class MSubwindow extends MWindow
{
    // 主窗口
    mainWindow: MWindow;

    // 自己在主窗口的索引
    subwindowIndex: number | string;

    // 自己显示时，是否关闭其他子窗口
    whenOpenCloseOthersubwindow: boolean = true;

    // 自己显示时，是否隐藏主窗口内容
    whenOpenCloseMainwindow: boolean = true;

    // 返回之前的子窗口
    __backSubWindow: MSubwindow;

    constructor(subwindowIndex: number | string, mainWindow: MWindow)
    {
        super();
        this.subwindowIndex = subwindowIndex;
        this.mainWindow = mainWindow;
    }


    // 添加依赖资源--fgui 包名
    addAssetForFguiPackagename(packagename: string)
    {
        let item = { url: packagename, type: AssetItemType.FguiPackage };
        this._loadAssets.push(item);
        this.mainWindow.addAssetForFguiPackagename(packagename);

    }

    // 窗口显示        
    windowShow()
    {
        if (this.mainWindow.windowContainer)
            this.showOn(this.mainWindow.windowContainer);
        else
            this.show();
    }

    // 菜单显示
    menuShow(root: fairygui.GRoot)
    {
        this.showOn(root);
    }

    // 关闭, 包括主窗口都会关闭
    menuClose()
    {
        this.mainWindow.menuClose();
    }



    // 返回, 调用主窗口的返回之前打开该模块的界面
    menuBack()
    {
        this.mainWindow.menuBack();
    }

    // 返回, 关闭自己，打开主窗口
    backToMainWindow()
    {
        this.mainWindow.onSubwindowBack(this);
    }

    // 返回，上次打开的子界面
    backPreWindow()
    {
        this.closeSelf();
        if (this.__backSubWindow)
        {
            if (this.__backSubWindow.menuParameter.dontCloseOther)
            {
                this.backToMainWindow();
            }
            this.mainWindow.openSubwindow(this.__backSubWindow, this.__backSubWindow.menuParameter.dontCloseOther, ...this.__backSubWindow.menuParameter.args);
        }
        else
        {
            this.backToMainWindow();
        }
    }

    // 仅关闭自己
    closeSelf()
    {
        this.hide();
        this.mainWindow.__onSubWindowClose(this);
    }







    // 菜单打开事件，传递参数
    onMenuOpen(parameter: MenuOpenParameter): void
    {
        this.menuParameter = parameter;
    }

    // showOn(root: fairygui.GRoot)
    // {
    //     super.showOn(root);
    // }

    // hide()
    // {
    //     this.onHide();
    //     super.hide();
    // }


    // private lastOnHideFrame = 0;
    // protected onHide(): void
    // {
    //     if (this.lastOnHideFrame != Laya.timer.currFrame)
    //     {
    //         this.lastOnHideFrame = Laya.timer.currFrame;
    //         super.onHide();
    //     }
    // }

}