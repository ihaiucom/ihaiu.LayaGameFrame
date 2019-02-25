import Signal from "../Libs/signals/Signal";

export default interface GameApplication
{
	IDFA: string;
	IDFV: string;
	BundleIdentifier: string;
	networkEnable: boolean;
	AppVersionName;

	
    /////////////////////////////////////
    // 事件
    /////////////////////////////////////
    // 获取完基本消息
    sInfo: Signal;
    // 触发时机：从活动状态进入非活动状态。
    sAppPause: Signal;
    // 触发时机：程序进入前台并处于活动状态时调用。
    sAppResume: Signal;
    

	// 打开网页
	openURL(url: string);
	// 检查网络
	checkNetwork();

	//reportException(message, filename, lineno, colno, e);

	// 设置用户信息
	setUserInfo(username, name);

	
        // 退出游戏应用
	exit();


	/////////////////////////////////////
	// 通知 js事件
	/////////////////////////////////////

    /*
     （3）回调方法：applicationWillResignActive:
     本地通知：UIApplicationWillResignActiveNotification
     触发时机：从活动状态进入非活动状态。
     适宜操作：这个阶段应该保存UI状态（例如游戏状态）。
     */

	// applicationWillResignActive();


	/**
	 (4）回调方法：applicationDidEnterBackground:
	 本地通知：UIApplicationDidEnterBackgroundNotification
	 触发时机：程序进入后台时调用。
	 适宜操作：这个阶段应该保存用户数据，释放一些资源（例如释放数据库资源）。
	 */
	// applicationDidEnterBackground();



	/**
	 （5）回调方法：applicationWillEnterForeground：
	 本地通知：UIApplicationWillEnterForegroundNotification
	 触发时机：程序进入前台，但是还没有处于活动状态时调用。
	 适宜操作：这个阶段应该恢复用户数据。
	 */

	// applicationWillEnterForeground();

	/**
	 （2）回调方法：applicationDidBecomeActive：
	 本地通知：UIApplicationDidBecomeActiveNotification
	 触发时机：程序进入前台并处于活动状态时调用。
	 适宜操作：这个阶段应该恢复UI状态（例如游戏状态）。
	 */

	// applicationDidBecomeActive(enterBackgroundTimeStr: string);

	/**
	 （6）回调方法：applicationWillTerminate:
	 本地通知：UIApplicationWillTerminateNotification
	 触发时机：程序被杀死时调用。
	 适宜操作：这个阶段应该进行释放一些资源和保存用户数据。
	 */

	// applicationWillTerminate();

}