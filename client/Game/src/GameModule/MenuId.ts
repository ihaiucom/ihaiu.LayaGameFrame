
// 模块ID
export enum MenuId
{
    /*------------- 系统  ------------ */

    /** 主界面 */
    Home = 1,
    /** 登录 */
    Login = 101,
    /** 创建角色 */
    CreateRole = 102,
    /** 角色信息 */
    PlayerInfo = 103,
    /** 排行榜 */
    Rank = 104,
    /** 主线任务 */
    MainTask = 105,
    /** 街区 */
    Street = 106,
    /** 公告 */
    Notice = 107,
    /** 主线完成 */
    GuideComplete = 108,


    /*------------- 主菜单  ------------ */

    /** 拍摄界面 */
    War = 3,
    /** 市场 */
    Market = 5,
    /** 仓库 */
    Bag = 6,

    //艺人
    ArtistList = 4,
    ArtistDetail = 401,
    ActorDetail = 402,
    ArtistFrozen = 403,
    ArtistScoutResult = 404,
    ArtistScoutSuccess = 405,
    ArtistTrain = 406,
    ArtistTrainResult = 407,
    ArtistGet = 408,
    ArtistShare = 409,
    ArtListExercise = 410,
    ArtistAssistant = 411,

    /*------------- 右上角菜单  ------------ */

    /** 商城 */
    Shop = 21,
    /** 充值 */
    Recharge = 22,
    /** 日常以及日常奖励 */
    Mission = 23,
    MissionReward = 231,
    /** 福利 */
    Weal = 24,
    /** 活动 */
    Event = 25,
    /** 超级偶像 */
    SuperIdol = 26,




    /*------------- 右下角菜单  ------------ */

    /** 设置 */
    SystemSetting = 31,
    /** 邮件 */
    Mail = 32,
    /** 聊天 */
    Chat = 33,





    /*------------- 右中角菜单  ------------ */

    /** 奥斯卡 */
    Awards = 41,
    /** 小目标 -- 等级礼包 */
    Goal = 42,
    /** 小目标 -- 奖杯礼包 */
    CupGift = 43,

    /*------------- 左中角菜单  ------------ */
    /** 持续收益 */
    WarContinue = 301,


    /*------------- 经营子菜单  ------------ */

    /** 生产 */
    Produce = 51,
    /** 订单 */
    Order = 52,
    /** 公务 */
    Official = 53,
    /** 粉丝 */
    Fans = 54,
    /** 会议 */
    Meeting = 55,


    /*------------- 管理子菜单  ------------ */

    /** 剧本 */
    StoryLibrary = 61,
    /** 院线 */
    Cinemas = 62,
    /** 编剧 */
    Screenwriter = 63,
    /** 艺人名录 */
    Artist = 64,
    /** 宝物 */
    Treasure = 65,

    /** 剧本信息  */
    StoryInfo = 6101,


    /*------------- 社交子菜单  ------------ */

    /** 集团 */
    Group = 71,
    /** 领袖 */
    Leader = 72,
    /** 合作 */
    Cooperation = 73,



    /*------------- 合作子菜单  ------------ */
    /** 合作任务 */
    CooperationTask = 81,
    /** 合作订单 */
    CooperatOrder = 82,
    /** 送美元 */
    CooperatSentDollar = 83,
    /** 送金币 */
    CooperatSentGold = 84,

    /** 有子菜单的按钮开始ID */
    SubMenuButtonBegin = 10000,

    /**主菜单 */
    Run = 10001,
    Manage = 10002,
    Social = 10003,

    /*------------- 建筑子菜单  ------------ */
    BuildRoomUpgrade = 201,
    BuildRoomList = 202,
    GoldExchange = 203,//财务室



    PopUp = 20001,//登录弹窗
}