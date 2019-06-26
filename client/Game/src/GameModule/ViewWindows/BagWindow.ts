import MWindow from '../../GameFrame/Module/MWindow';
import BagWindowUI from '../../FGUI/Extends/ModuleBag/BagWindowUI';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import { MenuOpenType } from '../../GameFrame/Menu/MenuOpenType';
import Game from '../../Game';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import SetNumberDialog from '../../FGUI/Extends/SystemModuleDialog/SetNumberDialog';

export enum BagShowType {
    Hide = 0,
    Show = 1
}

export default class BagWindow extends MWindow {
    window: BagWindowUI;

    constructor() {
        super();
        this.addAssetForFguiComponent(BagWindowUI);
        this.addAssetForFguiComponent(SetNumberDialog);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic);

    }

    // 菜单创建
    protected onMenuCreate(): void  {
        let windowUI = BagWindowUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;
        // 设置关闭按钮 关闭当前窗口
        this.setCloseBtnEvent();

        super.onMenuCreate();
    }

    // 菜单打开事件，传递参数
    onMenuOpen(parameter: MenuOpenParameter): void  {
        if (parameter.openType == MenuOpenType.None)  {
            if (Game.localStorage.isGuest) {
                parameter.openType = MenuOpenType.Tab;
                parameter.openIndex = BagShowType.Show;
            }
        }
        super.onMenuOpen(parameter);
    }

    openTab(tabIndex: number | string)  {
        if (this.window)  {
            this.window.m_showItemInfo.setSelectedIndex(<number>tabIndex);
        }
        super.openTab(tabIndex);
    }
}