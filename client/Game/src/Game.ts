import ConfigManager from "./Config/ConfigManager";
import ScreenSettingConfig from "./GameSetting/ScreenSettingConfig";
import GameLocalStorage from "./GameFrame/LocalStorage/GameLocalStorage";
import GameApplication from "./Bridge/GameApplication";
import GameDeviceConfig from "./GameSetting/GameDeviceConfig";
import BrowserDetectConfig from "./GameSetting/BrowserDetectConfig";
import LangManager from "./Config/LangManager";
import AssetManager from "./GameFrame/AssetManagers/AssetManager";
import GuiResPackageConfigReader from "./FGUI/GuiResPackageConfigReader";
import SpriteResPackageConfigReader from "./FGUI/SpriteResPackageConfigReader";
import Emitter from "./Libs/Emitter";
import MenuManager from "./GameFrame/Menu/MenuManager";
import ChannelManager from "./GameFrame/Channel/ChannelManager";
import ModelManager from "./GameModule/ModelManager";
import VersionManager from "./GameVersion/VersionManager";
import GameApplicationBrowser from "./Bridge/Browser/GameApplicationBrowser";
import AudioManager from "./GameFrame/Sound/AudioManager";
import GameTimeData from "./GameFrame/Datas/GameTimeData";
import GameSystemMessag from "./GameModule/GameSystemMessage";
import LaunchText from "./Config/Keys/LaunchText";
import LoaderSettingHandler from "./GameFrame/Loader/LoaderSettingHandler";
import LoaderManager from "./GameFrame/Loader/LoaderManager";
import Home from "./Home/Home";
import AntNet from "./AntFrame/Net/AntNet";
import ProtoHandlerList from "./AntFrame/Handlers/ProtoHandlerList";
import TypedSignal from "./Libs/signals/TypedSignal";
import UserData from "./GameModule/DataStructs/UserData";
import GameLaunch from "./GameLaunch";
import ProtoSenderList from "./AntFrame/ProtoSenderList";
import ConfigExpression from './Config/ConfigExpression';
import StageClickFx from "./FGUI/Customs/StageClickFx";
import CursorManager from "./GameFrame/Cursor/CursorManager";
import GamePreload from "./GamePreload";
import ConstConfig from './Config/ConstConfig';
import TookManager from "./SystemTook/TookManager";

export default class Game
{
    //=====================
    // 游戏设置
    //----------------------

    // 分辨率设置
    static screenSetting:ScreenSettingConfig = new ScreenSettingConfig();
    // 设备设置
    static deviceSetting: GameDeviceConfig =  new GameDeviceConfig();
    // 浏览器信息
    static browserSetting: BrowserDetectConfig = new BrowserDetectConfig();
    // 应用桥接
    static application: GameApplication = new GameApplicationBrowser();
    // 游戏启动文本
    static launchText: LaunchText = new LaunchText();




    //=====================
    // 游戏框架模块
    //----------------------

    static launch: GameLaunch = new GameLaunch();

    // 资源
    static asset: AssetManager = new AssetManager();
    // 配置
    static config: ConfigManager = new ConfigManager();
    // 多语言
    static lang: LangManager = LangManager.Instance;
    // 常量配置
    static constant: ConstConfig = new ConstConfig();
    // 配置文件表达式
    static configExp: ConfigExpression = new ConfigExpression();
    // 声音
    static sound: AudioManager = new AudioManager();
    // 时间
    static time: GameTimeData = new GameTimeData();
    // 本地数据存储
    static localStorage: GameLocalStorage = GameLocalStorage.Instance;
    // 加载界面
    static loader: LoaderManager = LoaderManager.Instance;
    // 加载界面事件
    static loaderSettingHandler: LoaderSettingHandler = new LoaderSettingHandler();
    // 菜单
    static menu: MenuManager = new MenuManager();
    // 消息对话框
    static system: GameSystemMessag = new GameSystemMessag();
    // 渠道
    static channel: ChannelManager = ChannelManager.Instance;
    // 版本管理
    static version: VersionManager = VersionManager.Instance;
    // 光标
    static cursor: CursorManager = new CursorManager();
    // 资源预加载
    static preload:GamePreload = new GamePreload();
    
    //=====================
    // 游戏模块
    //----------------------

    // 数据模型
    static moduleModel: ModelManager = new ModelManager();

    // 自己用户角色数据
    static user: UserData = new UserData();

    
    //=====================
    // 资源
    //----------------------
    
    // ui资源配置
    static guiRes: GuiResPackageConfigReader = new GuiResPackageConfigReader();
    static spriteRes: SpriteResPackageConfigReader = new SpriteResPackageConfigReader();


    
    //=====================
    // 事件
    //----------------------

    // 游戏--事件
    static event: Emitter = new Emitter();

    // 网络
    static net = AntNet;
    // 协议--消息处理器列表
    static protoHandler ;
    // 协议--消息发送器列表
    static sender = new ProtoSenderList();
    // 订阅管理器
    static took = new TookManager();
    
    // // 协议--事件--成功
    // static protoOkEvent: Emitter = new Emitter();
    // // 协议--Oob列表事件--成功
    // static protoOobListOkEvent: Emitter = new Emitter();
    // // 协议--事件--失败
    // static protoFailEvent: Emitter = new Emitter();
    

    
    //=====================
    // 家园
    //----------------------
    static home: Home = new Home();

    //=====================
    // 其他
    //----------------------
    
    /** 屏幕点击特效 */
    static stageClickFx = new StageClickFx();
    
    //=====================
    // 初始化
    //----------------------
    static init()
    {
        Game.protoHandler = new ProtoHandlerList();
        Game.protoHandler.init();
    }

}
window["Game"] = Game;