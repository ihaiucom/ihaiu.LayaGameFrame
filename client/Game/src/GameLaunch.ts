import GameConfig from "./GameConfig";
import GuiSetting from "./FGUI/GuiSetting";
import FGLoader from "./FGUI/FGLoader";
import GuiBinderList from "./FGUI/Generates/GuiBinderList";
export default class GameLaunch 
{
    constructor() 
    {
	}

	// 初始化
	install()
	{
		// 设置FGUI
		this.initFguiSetting();
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
	initFguiSetting()
	{
		// 设置fgui文件后缀
		fairygui.UIConfig.packageFileExtension = GuiSetting.packageFileExtension;
		// 注册Loader类
		fairygui.UIObjectFactory.setLoaderExtension(FGLoader);
		// 绑定组件
		GuiBinderList.fguiBinderAll();
		//设置字体
		fairygui.UIConfig.defaultFont = "_sans";
	}
}
