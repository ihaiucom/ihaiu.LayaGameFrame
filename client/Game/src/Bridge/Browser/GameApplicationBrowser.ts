import GameApplication from "../GameApplication";
import Signal from "../../Libs/signals/Signal";

export default class GameApplicationBrowser implements GameApplication
{
    public jsClassName = "GameApplicationBrowser";

    /////////////////////////////////////
    // 属性
    /////////////////////////////////////
    IDFA: string;
    IDFV: string;
    BundleIdentifier: string;
    AppVersionName: string;
    networkEnable: boolean = true;


    /////////////////////////////////////
    // 事件
    /////////////////////////////////////
    // 获取完基本消息
    sInfo: Signal = new Signal();
    // 触发时机：从活动状态进入非活动状态。
    sAppPause: Signal = new Signal();
    // 触发时机：程序进入前台并处于活动状态时调用。
    sAppResume: Signal = new Signal();
    
    

    openURL(url: string) 
    {
    }

    checkNetwork() 
    {
    }

    isSetUserInfo = false;
    setUserInfo(username, name)
    {
        if (this.isSetUserInfo) return;
        this.isSetUserInfo = true;
    }

    // 退出游戏应用
    exit()
    {

    }
}