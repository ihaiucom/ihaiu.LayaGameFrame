
import Handler = laya.utils.Handler;
import LocalStorage = Laya.LocalStorage;
import VersionConfig from "./VersionConfig";
import VersionData from "./VersionData";
import Game from "../Game";
import AppSetting from "../Bridge/AppSetting";
import Signal from "../Libs/signals/Signal";


export default class VersionManager
{

	private static _Instance: VersionManager;
	static get Instance(): VersionManager
	{
		if (!VersionManager._Instance)
		{
			VersionManager._Instance = new VersionManager();
		}
		return VersionManager._Instance;
	}

	platform = "android";
	urlpath = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/";
	url = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/ios/web/index.html";
	appId = "com.shinezone.movie";
	webRoot = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources";
	webVersionUrl = "http://mbqb.ihaiu.com/Gidea-PF-Res/resources/verinfo/DTGameVersion.json";

	// 本地版本号发生变化
	sLocalVersionChange: Signal = new Signal();


	// 网络，版本信息配置		
	webVersionConfig: VersionConfig;
	// 拷贝 assets->data/{packages}/files 的版本
	assetCopytoFileVersionData: VersionData = new VersionData();
	// 本地，应用版本
	localAppVersionData: VersionData = new VersionData();
	// 网络，应用版本
	webAppVersionData: VersionData = new VersionData();
	// 本地，资源版本
	localResVersionData: VersionData = new VersionData();
	// 网络，资源版本
	webResVersionData: VersionData = new VersionData();
	// 本地，分包资源版本
	localPartialVersionData: VersionData = new VersionData();
	// 网络，分包资源版本
	webPartialVersionData: VersionData = new VersionData();


	init()
	{
		this.localAppVersionData.setVersionTxt(VersionConfig.AppVersion);
		this.localResVersionData.setVersionTxt(VersionConfig.ResVersion);
	}







	// /** 初始化 */
	// init()
	// {
	// 	// 设置处理器			
	// 	if (BrowserDetect.isCrosswalk)
	// 	{
	// 		this.versionHandler = new CrosswalkVersionHandler(this);
	// 	}
	// 	else
	// 	{
	// 		this.versionHandler = new ConchVersionHandler(this);
	// 	}


	// 	// 设置信息
	// 	this.platform = AppSetting.platform;
	// 	this.appId = AppSetting.appId;
	// 	this.url = AppSetting.url;
	// 	this.urlpath = this.url.replace("index.html", "");

	// 	var folderUrl = this.url.replace("/index.html", "");
	// 	folderUrl = folderUrl.substring(0, folderUrl.lastIndexOf("/"));
	// 	this.webRoot = folderUrl.substring(0, folderUrl.lastIndexOf("/"));
	// 	this.webVersionUrl = this.webRoot + "/verinfo/DTGameVersion.json";

	// 	console.log("GameVersion platform=" + this.platform);
	// 	console.log("GameVersion appId=" + this.appId);
	// 	console.log("GameVersion url=" + this.url);
	// 	console.log("GameVersion urlpath=" + this.urlpath);
	// 	console.log("GameVersion webRoot=" + this.webRoot);
	// 	console.log("GameVersion webVersionUrl=" + this.webVersionUrl);




	// 	gameDeviceConfig.checkNetwork();


	// 	this.localAppVersionData = new VersionData().setVersionTxt(this.localAppVersion);
	// 	this.localResVersionData = new VersionData().setVersionTxt(this.localResVersion);
	// 	this.assetCopytoFileVersionData = new VersionData().setVersionTxt(this.assetsCopytoFileVersion);


	// 	console.log("GameVersion localAppVersionData=" + this.localAppVersionData.toString());
	// 	console.log("GameVersion localResVersionData=" + this.localResVersionData.toString());
	// 	console.log("GameVersion assetCopytoFileVersionData=" + this.assetCopytoFileVersionData.toString());

	// 	gameLaunchLoding.setVersion();

	// 	// 设置是否要显示错误对话框			
	// 	try
	// 	{
	// 		if (!BrowserDetect.enableGM && window["showAlertOnJsException"])
	// 		{
	// 			window["showAlertOnJsException"](false);
	// 		}
	// 	}
	// 	catch (error)
	// 	{
	// 		console.warn("window.showAlertOnJsException error:" + error);
	// 	}

	// 	if (AppSetting.enableVersion)
	// 	{
	// 		this.checkAssetsCopy();
	// 	}
	// 	else
	// 	{
	// 		this.end();
	// 	}




	// }

	// /**
	//  * 刷新应用版本信息
	//  */
	// refreshAppVersion()
	// {
	// 	this.__localResVersion = null;
	// 	this.localAppVersionData = new VersionData().setVersionTxt(this.localAppVersion);
	// 	this.localResVersionData = new VersionData().setVersionTxt(this.localResVersion);
	// 	gameLaunchLoding.setVersion();
	// }


	/**
	 * 获取当前应用版本
	 */
	get localAppVersion(): string
	{
		return Game.application.AppVersionName;
	}


	/**
	 * 当前资源版本
	 */
	private __localResVersion;
	get localResVersion(): string
	{
		if (!this.__localResVersion)
		{
			this.__localResVersion = LocalStorage.getItem("__localResVersion");
			if (!this.__localResVersion)
			{
				this.__localResVersion = this.localAppVersion;
			}
		}

		return this.__localResVersion;
	}

	set localResVersion(version)
	{
		this.__localResVersion = version;
		LocalStorage.setItem("__localResVersion", version);
		this.sLocalVersionChange.dispatch();

	}

	/**
	 * 拷贝 assets->data/{packages}/files 的版本
	 */

	private __assetsCopytoFileVersion;
	get assetsCopytoFileVersion(): string
	{
		if (!this.__assetsCopytoFileVersion)
		{
			this.__assetsCopytoFileVersion = LocalStorage.getItem("__assetsCopytoFileVersion");
			if (!this.__assetsCopytoFileVersion)
			{
				this.__assetsCopytoFileVersion = "0.0.0";
			}
		}

		return this.__assetsCopytoFileVersion;
	}

	set assetsCopytoFileVersion(version)
	{
		this.__assetsCopytoFileVersion = version;
		LocalStorage.setItem("__assetsCopytoFileVersion", version);
	}


	/**
	 * 当前分包资源版本
	 */

	private __localPartialVersion;
	get localPartialVersion(): string
	{
		if (!this.__localPartialVersion)
		{
			this.__localPartialVersion = LocalStorage.getItem("__localPartialVersion");
			if (!this.__localPartialVersion)
			{
				this.__localPartialVersion = "0.0.0";
			}
		}

		return this.__localPartialVersion;
	}

	set localPartialVersion(version)
	{
		this.__localPartialVersion = version;
		LocalStorage.setItem("__localPartialVersion", version);
	}

	// 获取是否需要拷贝assets->data/{packages}/files
	get isNeedAssetsCopy(): boolean
	{
		if (Game.browserSetting.isCrosswalk)
		{
			return !this.localAppVersionData.equal(this.assetCopytoFileVersionData);
		}
		return false;
	}






}
