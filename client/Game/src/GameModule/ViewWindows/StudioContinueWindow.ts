import MWindow from '../../GameFrame/Module/MWindow';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
import MenuOpenParameter from '../../GameFrame/Menu/MenuOpenParameter';
import { MenuOpenType } from '../../GameFrame/Menu/MenuOpenType';
import StudioWindowUI from '../../FGUI/Extends/ModuleStudio/StudioWindowUI';
import Game from '../../Game';
import StudioSSWindowUI from '../../FGUI/Extends/ModuleStudio/StudioSSWindowUI';
import StudioContinueWindowUI from '../../FGUI/Extends/ModuleStudio/StudioContinueWindowUI';
export default class StudioContinueWindow extends MWindow {
    window: StudioContinueWindowUI;

    /** 异步检查该模块是否可以打开 */
    static async AsyncEnableOpen(): Promise<boolean>
    {
        let result = await Game.sender.studio.studioContinuedListC2S();
        return Promise.resolve(result);
    }
    
    constructor() {
        super();
        this.addAssetForFguiPackagename(GuiPackageNames.ModuleStudio);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUI);
    }

    // 菜单创建
    protected onMenuCreate(): void  {
        let windowUI = StudioContinueWindowUI.createInstance();
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