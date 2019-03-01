import GameConfig from "./GameConfig";
import GuiSetting from "./FGUI/GuiSetting";
import FGLoader from "./FGUI/FGLoader";
import GuiBinderList from "./FGUI/Generates/GuiBinderList";
import GuiResPackageConfig from "./FGUI/GuiResPackageConfig";
import Game from "./Game";
import GuiPackageNames from "./FGUI/Generates/GuiPackageNames";
import { LoaderId } from "./GameFrame/Loader/LoaderId";
import MenuLayer from "./GameFrame/Menu/MenuLayer";
import { MenuId } from "./GameModule/MenuId";
import MenuWindows from "./GameModule/MenuWindows";
export default class GameLaunch 
{
    constructor() 
    {
	}

	// 初始化
	install()
	{
		this.installAsync();
	}

	async installAsync()
	{
		// 初始化UI层级容器
		MenuLayer.install();
		// 初始化UI窗口配置
		MenuWindows.install();

		// 设置FGUI
		console.time("initFguiSetting");
		await this.initFguiSetting();
		console.timeEnd("initFguiSetting");

		// 初始化加载界面
		Game.loader.install();
		// 打开启动界面
		Game.loader.open(LoaderId.Launch);
		Game.loaderSettingHandler.onBegin();

		// 加载配置
		console.time("initConfig");
		await this.initConfig();
		console.timeEnd("initConfig");
		// 加载多语言配置
		await this.initLangConfig();
		// 初始化数据模型
		Game.moduleModel.install();

		// 打开登录界面
		Game.menu.open(MenuId.Login);
	}

	// 加载版本文件
	loadVersion()
	{
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	
	}

    onVersionLoaded(): void 
    {
	}

	// 设置FGUI
	async initFguiSetting()
	{

		// 初始化 fgui资源列表
		Game.guiRes.install();

		// 设置fgui文件后缀
		fairygui.UIConfig.packageFileExtension = GuiSetting.packageFileExtension;
		// 注册Loader类
		fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
		// 绑定组件
		GuiBinderList.fguiBinderAll();
		//设置字体
		fairygui.UIConfig.defaultFont = "_sans";
		
		let packageConfig: GuiResPackageConfig = await Game.asset.loadFguiByPackagenameAsync(GuiPackageNames.GameLaunch);
		GuiSetting.addPackage(packageConfig.packagePath);
		
		// 初始化转圈
		fairygui.UIConfig.globalModalWaiting = fairygui.UIPackage.getItemURL(packageConfig.packageName, "GlobalModalWaiting");
		fairygui.UIConfig.windowModalWaiting = fairygui.UIPackage.getItemURL(packageConfig.packageName, "WindowModalWaiting");
		
	}

	// 加载配置
	async initConfig()
	{
		Game.config.configLoader = Game.asset;
		Game.config.initList();
		Game.config.sLoadProgress.add(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
		await Game.config.loadAllAsync();
		Game.config.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedConfig, Game.loaderSettingHandler);
	}

	
	// 加载多语言配置
	async initLangConfig()
	{
		Game.lang.current.configLoader = Game.asset;
		Game.lang.current.initList();

		if(Game.lang.isUseLang)
		{
			Game.lang.current.sLoadProgress.add(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
			await Game.lang.current.loadAllAsync();
			Game.lang.current.sLoadProgress.remove(Game.loaderSettingHandler.onLoadedLangConfig, Game.loaderSettingHandler);
		}
	}

}
