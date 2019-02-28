import GameConfig from "./GameConfig";
import AntFrame from "../bin/libs/AntFrame/AntFrame";
import AntNet from "../bin/libs/AntFrame/Net/AntNet";
import { GamerNotifyIconChangeS2C } from "../bin/libs/AntFrame/Net/proto";
declare var net;
class GameLaunch 
{
    constructor() 
    {
		//根据IDE设置初始化引擎		
		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = GameConfig.scaleMode;
		Laya.stage.screenMode = GameConfig.screenMode;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;


		console.log(11111111);
		this.onVersionLoaded();
		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		// Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
	}

    onVersionLoaded(): void 
    {

		net.config.url = "https://www.magiclvzs.club:5000"
		this.Test();
	}

	async Test(){
		AntNet.gamerNotifyIconChangeS2C.on((e:GamerNotifyIconChangeS2C)=>{
			console.log("test");
			console.log(e)
		})
		let s2c = await AntFrame.platform.Login();
		console.log(s2c);

		let data = await AntNet.AsyncGamerLoginGetDataC2S();
		console.log(data);

		
	}

    onConfigLoaded(): void 
    {
	}
}


//激活启动类
new GameLaunch();