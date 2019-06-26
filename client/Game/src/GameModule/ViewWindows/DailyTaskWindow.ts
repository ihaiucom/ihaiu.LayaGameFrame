import MWindow from '../../GameFrame/Module/MWindow';
import DailyTaskUI from '../../FGUI/Extends/ModuleDailyTask/DailyTaskUI';
import GuiPackageNames from '../../FGUI/Generates/GuiPackageNames';
export default class DailyTaskWindow extends MWindow
{
    window: DailyTaskUI;

        constructor() {
        super();

        //添加依赖资源
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames.ModuleDailyTask);
        
        this.addAssetForFguiComponent(DailyTaskUI);
    }
    
    protected onMenuCreate(): void {
        let windowUI = DailyTaskUI.createInstance();
        this.window = windowUI;
        this.contentPane = windowUI;
        this.setCloseBtnEvent();
        super.onMenuCreate();
    }
}