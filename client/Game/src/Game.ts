import ConfigManager from "./Config/ConfigManager";
import ScreenSettingConfig from "./GameSetting/ScreenSettingConfig";
import GameLocalStorage from "./GameFrame/LocalStorage/GameLocalStorage";
import GameApplication from "./Bridge/GameApplication";

export default class Game
{
    //=====================
    // 游戏设置
    //----------------------

    // 分辨率设置
    static screenSetting:ScreenSettingConfig;
    // 应用桥接
    static application: GameApplication;




    //=====================
    // 游戏框架模块
    //----------------------

    // 配置
    static config: ConfigManager;
    // 声音
    static sound: any;
    // 时间
    static time: any;
    // 本地数据存储
    static localStorage: GameLocalStorage;

    
    //=====================
    // 初始化
    //----------------------
    static init()
    {

    }

}