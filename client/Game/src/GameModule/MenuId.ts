
// 模块ID
export enum MenuId
{
    /*------------- 系统  ------------ */

    /** 主界面 */
    Home = 100,
    /** 登录 */
    Login = 101,
    /** 创建角色 */
    CreateRole = 102,
    /** 角色信息 */
    PlayerInfo = 103,
    /** 排行榜 */
    Rank = 104,
    /** 设置 */
    SystemSetting = 105,
    /** 邮件 */
    Mail = 107,
    /** 聊天 */
    Chat = 108,

    
    /*------------- 主菜单  ------------ */

    /** 背包 */
    Bag = 140,
    /** 拍摄 */
    Studio = 150,
    /** 剧本 */
    StoryLibrary = 160,
    /** 艺人 */
    ActorList = 180,
    /** 好友 */
    Friend = 190,
    

    /*------------- 活动  ------------ */
    /** 商城 */
    Shop = 121,
    /** 充值 */
    Recharge = 122,
    /** 日常任务 */
    DailyTask = 123,
    /** 日常签到 */
    DailySignin = 124,
    /** 活动 */
    Activity = 125,
    /** 公告 */
    Notice = 126,

    
    
    



    
    /*------------- 拍摄  ------------ */
    /** 拍摄--持续收益 */
    StudioContinue = 15001,
    /** 拍摄--拍摄结束持续收益介绍 */
    StudioContinueInfo = 15002,
    
    /*------------- 剧本  ------------ */
    
    
    /** 剧本信息  */
    StoryInfo = 16001,

    /** 剧本招募  */
    StoryLottery = 16002,

    /*------------- 建筑  ------------ */

    /** 建筑 */
    BuildingInfo = 170,

    /** 建筑艺人 */
    BuildingActor = 171,

    
    /*------------- 艺人  ------------ */
    
    /** 艺人详情 */
    ActorDetail = 18001,
    /** 艺人粉丝 */
    ActorFans = 18002,
    
    /** 情报 */
    Information = 18003,
    /** 情报分析 */
    InformationAnalysis = 18004,
    

    /*------------- 好友  ------------ */


    /*------------- 子菜单组  ------------ */
    SubMenuButtonBegin = 1000000,



}

window["MenuId"] = MenuId;