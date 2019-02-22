/** 机器性能类型 */
enum GameDevicePerformanceType
{
	/** 非常底，快支持不了 */
	VeryLower,
	/** 底 */
	Lower,
	/** 中 */
	Middle,
	/** 高 */
	Hight
}

/**
* 机型配置
*/
export default class GameDeviceConfig
{
	/** 骨骼动画最大缓存数量 */
	skeletonCacheMaxNum = 10;

	/** 总共单位最大数量 default = 10*/
	unitMaxNum = 10;

	/** 单个房间单位最大数量 default = 2*/
	roomUnitMaxNum = 2;

	/** 模块最小缓存时间 */
	menuCacheTime = 10000;

	/** 动态图片缓存数量 */
	fguiLoaderCacheNum = 100;

	/** 动态图片缓存时间 */
	fguiLoaderCacheTime = 100;

	/** 粒子拖尾每次发射数量 */
	trailNum: number = 5;

	/** 机器性能类型 */
	private _performanceType = GameDevicePerformanceType.Lower;

	get performanceType()
	{
		return this._performanceType;
	}

	set performanceType(val: GameDevicePerformanceType)
	{
		this._performanceType = val;

		switch (val)
		{
			case GameDevicePerformanceType.VeryLower:
				this.skeletonCacheMaxNum = 5;
				this.unitMaxNum = 18;
				this.roomUnitMaxNum = 2;
				this.menuCacheTime = 3000;
				this.fguiLoaderCacheNum = 50;
				this.fguiLoaderCacheTime = 3000;
				this.trailNum = 1;
				break;

			case GameDevicePerformanceType.Lower:
				this.skeletonCacheMaxNum = 10;
				this.unitMaxNum = 20;
				this.roomUnitMaxNum = 3;
				this.menuCacheTime = 3000;
				this.fguiLoaderCacheNum = 30;
				this.fguiLoaderCacheTime = 3000;
				this.trailNum = 2;
				break;

			case GameDevicePerformanceType.Middle:
				this.skeletonCacheMaxNum = 25;
				this.unitMaxNum = 30;
				this.roomUnitMaxNum = 4;
				this.menuCacheTime = 10000;
				this.fguiLoaderCacheNum = 60;
				this.fguiLoaderCacheTime = 10000;
				this.trailNum = 4;
				break;

			case GameDevicePerformanceType.Hight:
				this.skeletonCacheMaxNum = 50;
				this.unitMaxNum = 50;
				this.roomUnitMaxNum = 4;
				this.menuCacheTime = 300000;
				this.fguiLoaderCacheNum = 100;
				this.fguiLoaderCacheTime = 100000;
				this.trailNum = 5;
				break;
		}

		// this.unitMaxNum = 2;
		// this.roomUnitMaxNum = 1;
	}

	init()
	{
		let totalMem = this.getTotalMem();
		if (totalMem <= 0)
		{
			this.performanceType = GameDevicePerformanceType.Hight;
		}
		else if (totalMem <= 1 * 1024 * 1024)
		{
			this.performanceType = GameDevicePerformanceType.VeryLower;
		}
		else if (totalMem <= 2 * 1024 * 1024)
		{
			this.performanceType = GameDevicePerformanceType.Middle;
		}
		else 
		{
			this.performanceType = GameDevicePerformanceType.Hight;
		}


	}

	/**
	 * 是否是应用设备
	 */
	get isApp(): boolean
	{
		return window["conch"] ? true : false;
	}

	/**
	 * 获得运行设备总内存
	 * 单位为KB
	 */
	getTotalMem(): number
	{
		if (this.isApp)
		{
			return window["conch"].config.getTotalMem();
		}
		return 0;
	}


	/**
	 * 获得当前应用程序占用的内存
	 * 单位为KB
	 */
	getUsedMem(): number
	{
		if (this.isApp)
		{
			return window["conch"].config.getUsedMem();
		}
		return 0;
	}



	/**
	 * 获得可用的内存
	 * 单位为KB
	 */
	getAvalidMem(): number
	{
		if (this.isApp)
		{
			return window["conch"].config.getAvalidMem();
		}
		return 0;
	}



	private _networkType = -1;

	/**
	 * 获得网络状态
	 */
	getNetworkType(): number
	{
		if (this._networkType == -1)
		{
			if (this.isApp)
			{
				this._networkType = window["conch"].config.getNetworkType();
				return this._networkType;
			}
		}
		else
		{
			return this._networkType;
		}
		return NetworkType.NET_UNKNOWN;

	}

	set networkType(type: number)
	{
		this._networkType = type;
	}




	/**
	 * 打印设备信息情况
	 */
	printInfo()
	{
		let str = ` TotalMem: ${kbToStr(this.getTotalMem())}\n UsedMem: ${kbToStr(this.getUsedMem())}\n AvalidMem: ${kbToStr(this.getAvalidMem())}\n NetworkType: ${this.getNetworkType()}`;
		console.log(str);
	}


}