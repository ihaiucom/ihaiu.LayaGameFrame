import MWindow from '../../GameFrame/Module/MWindow';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import { MenuOpenType } from '../../GameFrame/Menu/MenuOpenType';
import Game from '../../Game';
import StudioContinueInfoUI from '../../FGUI/Extends/ModuleStudio/StudioContinueInfoUI';
export default class StudioContinueInfoWindow extends MWindow
{
    window: StudioContinueInfoUI;

    constructor() {
        super();
        this.addAssetForFguiPackagename(GuiPackageNames.ModuleStudio);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUI);
    }

    // 菜单创建
    protected onMenuCreate(): void  {
        let windowUI = StudioContinueInfoUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;
        // 设置关闭按钮 关闭当前窗口
        // this.setCloseBtnEvent();

        super.onMenuCreate();
    }

    // 菜单打开事件，传递参数
    onMenuOpen(parameter: MenuOpenParameter): void  {
        if (parameter.openType == MenuOpenType.None)  {
            if (Game.localStorage.isGuest) {
                // parameter.openType = MenuOpenType.Tab;
                // parameter.openIndex = BagShowType.Show;
            }
        }
        super.onMenuOpen(parameter);
    }
}