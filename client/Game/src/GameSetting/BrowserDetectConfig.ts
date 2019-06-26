import Game from "../Game";

/** 
* 浏览器检测
*/
export default class BrowserDetectConfig
{
	
	isConch: boolean = false;
	isCrosswalk: boolean = false;
	
	get isWeixinMinigame(): boolean
	{
		return Laya.Browser.onWeiXin && Laya.MiniAdpter != undefined;
	}
	
	isFirefox: boolean;
	isOpera: boolean;
	isChrome: boolean;
	isIOS: boolean;
	isAndroid: boolean;
	isBlackberry: boolean;
	isTV: boolean;
	isIE: boolean;
	isMobile: boolean;
	isApp: boolean;
	// 发布版本
	isResease: boolean = false;
	// 是本地
	isLocal: boolean = false;
	// 是否显示GM
	enableGM: boolean = true;
	// 是否显示状态
	isShowState = true;
	// 是否使用版本号
	isUseVersion = false;
	// 内部充值模式
	isDebugRecharge = true;
	// 是否请求公告
	isRequestNotice = false;
	// 版本号路径
	get versionUrl(): string
	{
		// if (window && window["location"] && window["location"]["_fullpath"] && window["location"]["_fullpath"].startsWith("https://cdn-exp-pf.shinezone.com/resources/"))
		// {
		// 	return window["location"]["_fullpath"].replace("https://cdn-exp-pf.shinezone.com/resources/", "https://s3.amazonaws.com/mv-va-qa01/resources/") + "/version.json";
		// }
		// else
		// {
		return "version.json";
		// }
	}

	urlServerListRemote: string = "http://mbqb.ihaiu.com/GamePF/ServerList.json";
	urlServerListLocal: string = "ServerList.json";

	get urlServerList(): string
	{
		if (this.isLocal)
		{
			return this.urlServerListLocal;
		}
		else
		{
			return this.urlServerListRemote;
		}
	}

	// 移动的，设备信息	
	private _deviceInfo;
	get deviceInfo()
	{
		if (window["conch"])
		{
			if (!this._deviceInfo)
			{
				this._deviceInfo = JSON.parse(window["conch"].config.getDeviceInfo());
			}
		}
		else
		{
			if (!this._deviceInfo)
				this._deviceInfo = {
					"os": "ios",
					"devicename": "iPhone8,1",
					"imei": "imeixxx",
					"imsi": "imsixxx",
					"phonemodel": "iPhone",
					"localmodel": "iPhone",
					"retinavalue": "2.000000",
					"osversion": "10.2",
					"resolution": "375*667",
					"guid": "E5B525AB-6B9A-495F-BF74-82345E76D646"
				};
		}
		return this._deviceInfo;
	}

	/**
	 * 获取设备ID
	 */
	get deviceId(): string
	{
		return Game.localStorage.deviceId;
	}

	get deviceName(): string
	{
		return this.deviceInfo["devicename"];
	}

	
	private _isPhoneX: boolean | number = -1;
	get isPhoneX(): boolean
	{
		if(this._isPhoneX === -1)
		{
			this._isPhoneX = false;
			if(window.navigator && window.navigator.userAgent)
			{
				let index = window.navigator.userAgent.indexOf("iPhone OS ");
				if(index != -1)
				{
					let v = window.navigator.userAgent.substring(window.navigator.userAgent.indexOf("iPhone OS ") + "iPhone OS ".length, window.navigator.userAgent.indexOf(" like"));
					v = v.replace(/\_/g, '.');
					let num = parseFloat(v);
					
					if (num >= 10.3)
					{
						this._isPhoneX = true;
					}
				}
			}

			// if (this.deviceName && this.deviceName.indexOf("iPhone") != -1)
			// {
			// 	try
			// 	{

			// 		let v = this.deviceName.replace("iPhone", "").replace(",", ".");
			// 		let num = parseFloat(v);
			// 		if (num >= 10.3)
			// 		{
			// 			return true;
			// 		}

			// 	}
			// 	catch (error)
			// 	{
			// 		return false;
			// 	}
			// }

		}

		return <boolean>this._isPhoneX;
	}



	/** 是否有刘海 */
	private _isLiuHai:boolean;
	get isLiuHai(): boolean
	{
		if(this._isLiuHai === undefined)
		{
			if(Laya.Browser.onMiniGame || this.isConch)
			{
				this._isLiuHai = window.innerWidth / window.innerHeight <= 0.5;
				// return this.isPhoneX;
			}

		}

		return this._isLiuHai;
	}




	constructor()
	{
		console.log("this.isWeixinMinigame=" + this.isWeixinMinigame);
		
		if (window["conch"])
		{
			this.isConch = true;
		}

		if (window && window.navigator && window.navigator.userAgent)
		{
			var agent = window.navigator.userAgent;
			console.log(agent);
			this.isFirefox = (agent.indexOf("Firefox") > -1);
			this.isOpera = (window["opera"] != null);
			this.isChrome = (agent.indexOf("Chrome") > -1);  // NOTE that Chrome on Android returns true but is a completely different browser with different abilities
			this.isIOS = agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1;
			this.isAndroid = (agent.indexOf("Android") > -1);
			this.isBlackberry = (agent.indexOf("Blackberry") > -1);
			this.isTV = (agent.indexOf("Box") > -1) || (agent.indexOf("box") > -1);
			this.isIE = (agent.indexOf("IE") > -1);

			this.isMobile = this.isIOS || this.isAndroid || this.isBlackberry;
			this.isApp = window["conch"] ? true : false;
		}
		else
		{
			this.isMobile = true;
			this.isApp = true;
		}

		// this.isMobile = true;
		// this.isApp = true;

		// console.log("window.location=" + (window["location"] ? JSON.stringify(window["location"]) : "没有"));

		this.isResease = true;
		if (window && window["location"] && window["location"]["pathname"] && window["location"]["pathname"].startsWith("/GamePF") || /\/[A-Z]:\//.test(window["location"]["pathname"]))
		{
			this.isResease = false;
		}


		// if (this.isResease)
		// {
		// 	this.enableGM = false;
		// 	this.isShowState = false;
		// 	this.isLocal = true;
		// }


		if (window && window["location"] && window["location"]["pathname"] && /\/[A-Z]:\//.test(window["location"]["pathname"]))
		{
			this.isUseVersion = false;
		}



		if (!this.isIOS && window && window["location"] && window && window["location"]["origin"] && window && (window["location"]["origin"] == "http://pfqa.ihaiu.com" || window["location"]["origin"] == "http://172.16.50.181:8900"))
		{
			this.isUseVersion = false;
			this.enableGM = true;
			this.isLocal = true;
		}

		this.enableGM = true;


		if (this.isAndroid)
		{
			this.isUseVersion = false;
			this.enableGM = true;
			this.isShowState = true;
			this.isLocal = true;
			this.isDebugRecharge = true;
		}

		if (this.isIOS)
		{
			this.isUseVersion = false;
			this.enableGM = true;
			this.isShowState = true;
			this.isLocal = true;
			this.isDebugRecharge = false;
		}

		this.isLocal = true;




		console.log("this.isResease=" + this.isResease);
		console.log("this.urlServerList=" + this.urlServerList);

		if (window["conch"])
		{
			var nType = window["conch"].config.getNetworkType();

			console.log("getNetworkType:" + nType)
			window["conch"].setNetworkEvtFunction(function (type)
			{
				console.log("setNetworkEvtFunction:" + type)
			});
		}


	}
}