import MWindow from "../../GameFrame/Module/MWindow";
import HomeWindowUI from "../../FGUI/Extends/SystemModuleHome/HomeWindowUI";
import Home from "../../Home/Home";
import Game from "../../Game";
import GuiPackageNames from "../../FGUI/Generates/GuiPackageNames";
import BuildingModel from "../DataModels/BuildingModel";
import ActorModel from "../DataModels/ActorModel";
import { AssetItemType } from "../../GameFrame/AssetManagers/AssetItemType";
import Res from "../../Config/Keys/Res";

//======================
// 游戏主界面
//----------------------
export default class HomeWindow extends MWindow
{
    conent: HomeWindowUI;
    constructor()
    {
        super();

        // 添加依赖资源
        this.addAssetForFguiPackagename(GuiPackageNames._ResFont);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUIV1);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImageUI);
        this.addAssetForFguiPackagename(GuiPackageNames._ResImagePic);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonBase);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonGame);
        this.addAssetForFguiPackagename(GuiPackageNames.CommonFx);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleDialog);
        this.addAssetForFguiComponent(HomeWindowUI);
        this.addAssetForFguiPackagename(GuiPackageNames.SystemModuleHomeMap);
        this.addDynamicAsset( { url: Res.getHomePath(), type: AssetItemType.Json });

        
    }

    
    // 菜单创建
    protected onMenuCreate(): void
    {
        // 屏幕点击特效
        Game.stageClickFx.install();

        let windowUI = HomeWindowUI.createInstance();
        this.conent = windowUI;
        this.contentPane = windowUI;
        super.onMenuCreate();

        Game.home.install();
        this.setMySelfData();
        Game.home.show();
    }


    
    // 设置主界面显示
    setHomeShow()
    {
        if (this.contentPane && !this.contentPane.visible)
        {
            this.contentPane.visible = true;
            this.onShown();
        }

        Game.home.show();
    }

    // 设置主界面隐藏
    setHomeHide()
    {
        if (this.contentPane && this.contentPane.visible)
        {
            this.contentPane.visible = false;
            this.onHide();
        }
        Game.home.hide();
    }

    setMySelfData()
    {
        this.setData(
            true,
            Game.moduleModel.building,
            Game.moduleModel.actor
        );
    }

    setData(isMySelfHome: boolean, buildingModel:BuildingModel, actorModel: ActorModel)
    {
        Game.home.setData(isMySelfHome, buildingModel, actorModel);
    }


}