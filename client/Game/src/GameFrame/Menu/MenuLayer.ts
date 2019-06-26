import Dictionary from "../../Libs/Helpers/Dictionary";
import { MenuLayerType } from "./MenuLayerType";
import Game from "../../Game";
import BGModel from "../../FGUI/Extends/GameLaunch/BGModel";

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
            MenuLayer._dialogModel = BGModel.createInstance();
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


        MenuLayer.home = MenuLayer.createLayer(MenuLayerType.Home, "MenuLayer-home");
        MenuLayer.homeTop = MenuLayer.createLayer(MenuLayerType.HomeTop, "MenuLayer-homeTop");
        MenuLayer.module = MenuLayer.createLayer(MenuLayerType.Module, "MenuLayer-module");
        MenuLayer.moduleTop = MenuLayer.createLayer(MenuLayerType.ModuleTop, "MenuLayer-moduleTop");
        MenuLayer.mainUI = MenuLayer.createLayer(MenuLayerType.MainUI, "MenuLayer-mainUI");
        MenuLayer.dialog = MenuLayer.createLayer(MenuLayerType.Dialog, "MenuLayer-dialog");
        MenuLayer.guide = MenuLayer.createLayer(MenuLayerType.Guide, "MenuLayer-guide");
        MenuLayer.loader = MenuLayer.createLayer(MenuLayerType.Loader, "MenuLayer-loader");
        MenuLayer.gm = MenuLayer.createLayer(MenuLayerType.GM, "MenuLayer-gm");
        MenuLayer.floatMsg = MenuLayer.createLayer(MenuLayerType.FloatMsg, "MenuLayer-floatMsg");

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

    private static createLayer(menuLayer:MenuLayerType ,  name?: string): fairygui.GRoot
    {
        let root = MenuLayer.root;
        let v = new fairygui.GRoot();
        v["menuLayer"] = menuLayer;
        if (name)
        {
            v.name = name;
        }

        if(Game.browserSetting.isLiuHai)
        {
            switch(menuLayer)
            {
                case MenuLayerType.Loader:
                    v.setSize(root.width, root.height);
                    break;
    
                default:
                    v.y = Game.screenSetting.liuHaiHeightTop;
                    v.setSize(root.width, root.height - Game.screenSetting.screenHeightLiuHai);
            }
        }
        else
        {
            v.setSize(root.width, root.height);
        }
        root.addChild(v);
        return v;
    }

    public static getLayerHeight(menuLayer:MenuLayer)
    {
        if(Game.browserSetting.isLiuHai)
        {
            switch(menuLayer)
            {
                case MenuLayer.loader:
                    return  Game.screenSetting.screenHeight;
    
                default:
                    return  Game.screenSetting.screenHeightLiuHai;
                    
            }
        }
        return  Game.screenSetting.screenHeight;
    }


}
window["MenuLayer"] = MenuLayer;