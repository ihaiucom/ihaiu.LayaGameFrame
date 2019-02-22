import Dictionary from "../../Libs/Helpers/Dictionary";
import { MenuLayerType } from "./MenuLayerType";
import Game from "../../Game";

/**
 * 模块UI 层
 */
export default class MenuLayer
{
    // 根容器
    static root: fairygui.GRoot;

    // 默认背景
    static homeTop: fairygui.GRoot;

    // 主界面
    static home: fairygui.GRoot;

    // 模块
    static module: fairygui.GRoot;

    // 模块上一层
    static moduleTop: fairygui.GRoot;

    // 主UI
    static mainUI: fairygui.GRoot;

    // 对话框
    static dialog: fairygui.GRoot;

    // 引导
    static guide: fairygui.GRoot;

    // 加载面板
    static loader: fairygui.GRoot;

    // gm面板
    static gm: fairygui.GRoot;

    // 浮动对话框
    static floatMsg: fairygui.GRoot;

    // 字典
    static dict: Dictionary<MenuLayerType, fairygui.GRoot> = new Dictionary<MenuLayerType, fairygui.GRoot>();

    // 对话框model
    static _dialogModel: fairygui.GComponent;
    static get dialogModel(): fairygui.GComponent
    {
        if (!MenuLayer._dialogModel)
        {
            MenuLayer._dialogModel = fgui.System.BGModel.createInstance();
        }
        return MenuLayer._dialogModel;
    }

    static showDialogModel()
    {
        MenuLayer.dialog.width = Game.screenSetting.screenWidth;
        MenuLayer.dialog.height = Game.screenSetting.screenHeight;
        MenuLayer.dialogModel.alpha = 0.8;
        MenuLayer.dialogModel.width = Game.screenSetting.screenWidth;
        MenuLayer.dialogModel.height = Game.screenSetting.screenHeight;
        if (MenuLayer.dialogModel)
            MenuLayer.dialog.addChildAt(MenuLayer.dialogModel, 0);
    }

    static resetDialogModelSize()
    {
        MenuLayer.dialog.width = Game.screenSetting.screenWidth;
        MenuLayer.dialog.height = Game.screenSetting.screenHeight;
        MenuLayer.dialogModel.width = Game.screenSetting.screenWidth;
        MenuLayer.dialogModel.height = Game.screenSetting.screenHeight;
    }

    static hideDialogModel()
    {
        if (MenuLayer.dialogModel)
            MenuLayer.dialogModel.removeFromParent();
    }


    // 初始化
    static install()
    {
        // 根容器
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        MenuLayer.root = fairygui.GRoot.inst;


        MenuLayer.home = MenuLayer.createLayer("MenuLayer-home");
        MenuLayer.homeTop = MenuLayer.createLayer("MenuLayer-homeTop");
        MenuLayer.module = MenuLayer.createLayer("MenuLayer-module");
        MenuLayer.moduleTop = MenuLayer.createLayer("MenuLayer-moduleTop");
        MenuLayer.mainUI = MenuLayer.createLayer("MenuLayer-mainUI");
        MenuLayer.dialog = MenuLayer.createLayer("MenuLayer-dialog");
        MenuLayer.guide = MenuLayer.createLayer("MenuLayer-guide");
        MenuLayer.loader = MenuLayer.createLayer("MenuLayer-loader");
        MenuLayer.gm = MenuLayer.createLayer("MenuLayer-gm");
        MenuLayer.floatMsg = MenuLayer.createLayer("MenuLayer-floatMsg");

        MenuLayer.dict.add(MenuLayerType.Home, MenuLayer.home);
        MenuLayer.dict.add(MenuLayerType.HomeTop, MenuLayer.homeTop);
        MenuLayer.dict.add(MenuLayerType.Module, MenuLayer.module);
        MenuLayer.dict.add(MenuLayerType.ModuleTop, MenuLayer.moduleTop);
        MenuLayer.dict.add(MenuLayerType.MainUI, MenuLayer.mainUI);
        MenuLayer.dict.add(MenuLayerType.Dialog, MenuLayer.dialog);
        MenuLayer.dict.add(MenuLayerType.Guide, MenuLayer.guide);
        MenuLayer.dict.add(MenuLayerType.Loader, MenuLayer.loader);
        MenuLayer.dict.add(MenuLayerType.GM, MenuLayer.gm);
        MenuLayer.dict.add(MenuLayerType.FloatMsg, MenuLayer.floatMsg);
    }

    static getLayer(layerType: MenuLayerType): fairygui.GRoot
    {
        return MenuLayer.dict.getValue(layerType);
    }

    private static createLayer(name?: string): fairygui.GRoot
    {
        let root = MenuLayer.root;
        let v = new fairygui.GRoot();
        if (name)
        {
            v.name = name;
        }
        v.setSize(root.width, root.height);
        root.addChild(v);
        return v;
    }


}