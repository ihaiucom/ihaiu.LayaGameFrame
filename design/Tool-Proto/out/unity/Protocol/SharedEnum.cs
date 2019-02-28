/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/
 
/// <summary>
///  错误提示
/// </summary>
public enum EError
{
    NoError = 0,
    /// <summary>
    /// 服务器错误
    /// </summary>
    ServerError = 1,
    /// <summary>
    /// 数据错误
    /// </summary>
    DataError = 2,
    /// <summary>
    /// 不明错误
    /// </summary>
    UnknownError = 3,
    /// <summary>
    /// 数据繁忙
    /// </summary>
    DataBusy = 4,
    /// <summary>
    /// 找不到用户id
    /// </summary>
    NoUsrId = 5,
    /// <summary>
    /// 账号被冻结
    /// </summary>
    Frozen = 6,
    /// <summary>
    /// 账号被停用
    /// </summary>
    Dropped = 7,
}    

/// <summary>
///  货币类型
/// </summary>
public enum EMoneyType
{
    /// <summary>
    ///  代币
    /// </summary>
    Money = 1,
    /// <summary>
    ///  钻石
    /// </summary>
    Diamond = 2,
    /// <summary>
    ///  元宝
    /// </summary>
    Gold = 3,
    /// <summary>
    ///  金币
    /// </summary>
    Coin = 4,
}    

/// <summary>
///  商品标志
/// </summary>
public enum EGoodsFlag
{
    /// <summary>
    ///  默认无
    /// </summary>
    None = 0,
    /// <summary>
    ///  新品
    /// </summary>
    New = 1,
    /// <summary>
    ///  热销
    /// </summary>
    Hot = 2,
    /// <summary>
    ///  打折
    /// </summary>
    Discount = 3,
    /// <summary>
    ///  下架
    /// </summary>
    SoldOut = 4,
}    

/// <summary>
///  接受关卡的条件类型
/// </summary>
public enum EAcceptCondition
{
    /// <summary>
    ///  前置关卡ID
    /// </summary>
    acceptcondition_front_id = 1,
    /// <summary>
    ///  等级
    /// </summary>
    acceptcondition_level = 2,
}    

/// <summary>
///  完成关卡的条件类型
/// </summary>
public enum ECompleteCondition
{
    /// <summary>
    ///  分数
    /// </summary>
    completecondition_score = 1,
    /// <summary>
    ///  杀人数
    /// </summary>
    completecondition_kill = 2,
}    

/// <summary>
///  完成关卡的奖励类型
/// </summary>
public enum ECompleteReward
{
    /// <summary>
    ///  经验
    /// </summary>
    completereward_exp = 1,
    /// <summary>
    ///  物品
    /// </summary>
    completereward_item = 2,
    /// <summary>
    ///  金币
    /// </summary>
    completereward_gold = 3,
}    

public enum EUsrState
{
    /// <summary>
    ///  新账号
    /// </summary>
    uninit = 1,
    /// <summary>
    ///  选择初始艺人
    /// </summary>
    init_actor = 2,
    /// <summary>
    ///  启用
    /// </summary>
    usual = 3,
    /// <summary>
    ///  冻结
    /// </summary>
    frozen = 4,
    /// <summary>
    ///  停用
    /// </summary>
    dropped = 5,
}    

/// <summary>
///  玩家数值cid 作为一个物品
/// </summary>
public enum EItemNumber
{
    /// <summary>
    ///  钻石
    /// </summary>
    diamond = 1,
    /// <summary>
    ///  金币
    /// </summary>
    gold = 2,
}    

public enum EPublishTypeCode
{
    /// <summary>
    ///  sdk公告
    /// </summary>
    sdknotice = 1,
    /// <summary>
    ///  用户邮箱
    /// </summary>
    usrmail = 2,
    /// <summary>
    ///  游戏内邮箱
    /// </summary>
    gamemail = 9,
    /// <summary>
    ///  游戏内公告
    /// </summary>
    gamenotice = 10,
}    

public enum EUserSex
{
    boy = 2001,
    girl = 2002,
}    

/// <summary>
///  道具类型
/// </summary>
public enum EItemCategory
{
    /// <summary>
    ///  钻石
    /// </summary>
    diamond = 1,
    /// <summary>
    ///  金币
    /// </summary>
    gold = 2,
    /// <summary>
    ///  美元
    /// </summary>
    dollar = 3,
    /// <summary>
    ///  周边产品
    /// </summary>
    other = 4,
    /// <summary>
    ///  普通道具
    /// </summary>
    normal = 5,
    /// <summary>
    ///  资产
    /// </summary>
    assets = 6,
    /// <summary>
    ///  合同
    /// </summary>
    contract = 7,
    /// <summary>
    ///  礼包
    /// </summary>
    giftbag = 8,
    /// <summary>
    ///  拍摄许可证
    /// </summary>
    licence = 10,
    /// <summary>
    ///  奖杯
    /// </summary>
    cup = 14,
    /// <summary>
    ///  碎片选择礼包
    /// </summary>
    piecesgiftbag = 17,
    /// <summary>
    ///  剧本
    /// </summary>
    story = 18,
}    

public enum EItemId
{
    diamond = 1,
    gold = 2,
    dollar = 3,
    /// <summary>
    ///  拍摄许可证
    /// </summary>
    licence = 4,
    fans = 5,
    /// <summary>
    ///  点赞
    /// </summary>
    praise = 6,
    /// <summary>
    ///  图纸
    /// </summary>
    drawing = 7,
    /// <summary>
    ///  期待
    /// </summary>
    expect = 8,
    /// <summary>
    ///  进修卡
    /// </summary>
    study_card = 5004,
    /// <summary>
    ///  星探卡
    /// </summary>
    talent = 5007,
    /// <summary>
    ///  改公司名道具
    /// </summary>
    player_rename_card = 5008,
    /// <summary>
    ///  技能药剂，增加体力
    /// </summary>
    actor_stamina_water = 5010,
    /// <summary>
    ///  忠诚卡
    /// </summary>
    actor_loyalty_card = 5003,
    /// <summary>
    ///  宣传册
    /// </summary>
    brochure = 5005,
    /// <summary>
    ///  喇叭
    /// </summary>
    horn = 5006,
}    

/// <summary>
///  gameData 模块相关枚举
/// </summary>
public enum EGameDataRename
{
    renameLengthMin = 4,
    renameLengthMax = 18,
    rePerSignatureLengthMax = 100,
}    

/// <summary>
///  storyStack 表的枚举
/// </summary>
public enum EStoryStack
{
    /// <summary>
    ///  剧本搜罗每天搜罗次数
    /// </summary>
    story_stack_daily_times = 2045,
    /// <summary>
    ///  剧本搜罗每次消耗物品
    /// </summary>
    story_stack_search_cost = 2046,
    /// <summary>
    ///  剧本搜罗每阶段搜罗冷却加速消耗资源类型和数量
    /// </summary>
    story_stack_cd_stage_cost = 2047,
    /// <summary>
    ///  剧本搜罗阶段时长
    /// </summary>
    story_stack_cd_stage_length = 2048,
    /// <summary>
    ///  剧本搜罗冷却时间
    /// </summary>
    story_stack_cd = 2050,
    /// <summary>
    ///  每日刷新时间
    /// </summary>
    story_stack_daily_update = 2051,
    /// <summary>
    ///  剧本搜罗冷却功能开放所需街区等级
    /// </summary>
    story_stack_cd_block_level = 2052,
}    

/// <summary>
///  story 模块的枚举
/// </summary>
public enum EStoryModule
{
    noFinish = 0,
    finish = 1,
    hadGet = 2,
    randomLength = 3,
    shootTime = 5,
    score = 8,
}    

public enum EMovieState
{
    /// <summary>
    ///  选择剧本
    /// </summary>
    chooseScript = 2,
    /// <summary>
    ///  修改剧本名称
    /// </summary>
    renameFilm = 3,
    /// <summary>
    ///  当前市场反馈
    /// </summary>
    currentMarketInf = 4,
    /// <summary>
    ///  选择艺人
    /// </summary>
    chooseActor = 5,
    /// <summary>
    ///  薪酬计算
    /// </summary>
    costView = 6,
    /// <summary>
    ///  艺人展示
    /// </summary>
    yRShowView = 7,
    /// <summary>
    ///  艺人对影片的契合度
    /// </summary>
    compatibility = 8,
    /// <summary>
    ///  正在拍摄中
    /// </summary>
    filming = 9,
    /// <summary>
    ///  选择类型
    /// </summary>
    chooseType = 10,
    /// <summary>
    ///  选择后的提示
    /// </summary>
    chooseTip = 11,
    /// <summary>
    ///  宣传
    /// </summary>
    propaganda = 12,
    /// <summary>
    ///  杀青
    /// </summary>
    complete = 13,
    /// <summary>
    ///  艺人熟练度
    /// </summary>
    actorUpdate = 14,
    /// <summary>
    ///  杀青对比情况
    /// </summary>
    proficiency = 15,
    /// <summary>
    ///  选择院线
    /// </summary>
    chooseTheater = 16,
    /// <summary>
    ///  媒体评价
    /// </summary>
    noticeFeedBack = 17,
    /// <summary>
    ///  首映票房
    /// </summary>
    SYPF = 18,
    /// <summary>
    ///  观众口碑
    /// </summary>
    audienceReputation = 19,
    /// <summary>
    ///  上映结果
    /// </summary>
    result = 20,
    /// <summary>
    ///  下映提示
    /// </summary>
    overMarket = 21,
    /// <summary>
    ///  结算分享界面
    /// </summary>
    Jiesuan = 22,
    /// <summary>
    ///  奖励物品提示
    /// </summary>
    rewardTip = 23,
    /// <summary>
    ///  持续收益
    /// </summary>
    contineTransceiver = 24,
}    

public enum EGlobalId
{
    /// <summary>
    ///  最多可同时进行持续收益的电影数量
    /// </summary>
    maxMovieNum = 9,
    /// <summary>
    ///  临时演员id
    /// </summary>
    tempActor = 9999,
    /// <summary>
    ///  首部电影演员巨石强森
    /// </summary>
    firstActor = 9997,
    /// <summary>
    ///  忠诚卡增加赠送物品上限
    /// </summary>
    loyaltyCardLimit = 1035,
}    

public enum EMovieType
{
}    

/// <summary>
///  票房评价
/// </summary>
public enum EBoxOfficeEvaluation
{
    /// <summary>
    ///  一般
    /// </summary>
    normal = 1,
    /// <summary>
    ///  良好
    /// </summary>
    good = 2,
    /// <summary>
    ///  大卖
    /// </summary>
    big_sell = 3,
    /// <summary>
    ///  超卖
    /// </summary>
    great_sell = 4,
    /// <summary>
    ///  神话
    /// </summary>
    myth_sell = 5,
    /// <summary>
    ///  传奇
    /// </summary>
    marvel_sell = 6,
}    

public enum EProgressBoxId
{
    /// <summary>
    ///  经营订单进度宝箱
    /// </summary>
    manageOrder = 1,
    /// <summary>
    ///  日常任务宝箱
    /// </summary>
    dailyTask = 2,
    /// <summary>
    ///  合作任务宝箱
    /// </summary>
    cooperateTask = 3,
}    

/// <summary>
///  经营生产
/// </summary>
public enum EManageProduce
{
    /// <summary>
    ///  队列
    /// </summary>
    line = 1,
    /// <summary>
    ///  存储
    /// </summary>
    save = 2,
    /// <summary>
    ///  时间减免
    /// </summary>
    time = 3,
    /// <summary>
    ///  每次产出
    /// </summary>
    output_initial = 4,
    /// <summary>
    ///  美元生产线时间
    /// </summary>
    dollarIntervalTime = 11,
    /// <summary>
    ///  生产纪念品的生产线ID，该生产线只产生美元
    /// </summary>
    baseProduceId = 100,
    /// <summary>
    ///  间隔时间
    /// </summary>
    intervalTime = 300,
}    

public enum ERankListType
{
    /// <summary>
    ///  自己的排名
    /// </summary>
    SelfList = 1,
    /// <summary>
    ///  全服排行榜
    /// </summary>
    ServerList = 2,
    /// <summary>
    ///  分组总票房
    /// </summary>
    GroupList = 3,
    /// <summary>
    ///  分组影片票房
    /// </summary>
    GroupMovieList = 4,
}    

/// <summary>
///  成就或者任务的状态
/// </summary>
public enum EAchievementState
{
    /// <summary>
    ///  初始化
    /// </summary>
    none = 0,
    /// <summary>
    ///  可接
    /// </summary>
    receivable = 1,
    /// <summary>
    ///  已接
    /// </summary>
    received = 2,
    /// <summary>
    ///  完成
    /// </summary>
    finished = 3,
    /// <summary>
    ///  已领奖的
    /// </summary>
    rewarded = 4,
}    

/// <summary>
///  成就或者任务的类型
/// </summary>
public enum EAchievementType
{
    /// <summary>
    ///  日常
    /// </summary>
    daily = 1,
    /// <summary>
    ///  成就
    /// </summary>
    achievement = 2,
    /// <summary>
    ///  剧本
    /// </summary>
    story = 3,
    /// <summary>
    ///  主线任务
    /// </summary>
    mainTask = 4,
}    

/// <summary>
///  商店限购类型
/// </summary>
public enum EMallItemLimitType
{
    /// <summary>
    ///  每日
    /// </summary>
    daily = 1,
    /// <summary>
    ///  每周
    /// </summary>
    weekly = 2,
}    

/// <summary>
///  经营事务
/// </summary>
public enum EManageBusiness
{
    /// <summary>
    ///  基础代办事务上限
    /// </summary>
    baseLine = 10,
    /// <summary>
    ///  间隔时长
    /// </summary>
    interval = 180,
}    

/// <summary>
///  经营探班
/// </summary>
public enum EManageVisit
{
    /// <summary>
    ///  基础探班队列
    /// </summary>
    baseLine = 3,
    /// <summary>
    ///  过期时长
    /// </summary>
    overdueTime = 180,
    /// <summary>
    ///  基本间隔时间
    /// </summary>
    baseIntervalTime = 300,
}    

/// <summary>
///  经营订单
/// </summary>
public enum EManageOrder
{
    /// <summary>
    ///  最多显示9个订单
    /// </summary>
    baseLength = 9,
    /// <summary>
    ///  订单存活时间
    /// </summary>
    baseTime = 1200,
    /// <summary>
    ///  删除订单缓存时间
    /// </summary>
    delTime = 20,
}    

/// <summary>
///  邮件ID枚举
/// </summary>
public enum EMailId
{
    /// <summary>
    ///  合作邀请失败
    /// </summary>
    cooperateApplyFail = 3,
    /// <summary>
    ///  订单过期邮件ID
    /// </summary>
    orderId = 4,
    /// <summary>
    /// 伙伴赠送
    /// </summary>
    partnerGive = 7,
    /// <summary>
    ///  首次建立合作奖励
    /// </summary>
    firstCooperate = 8,
    /// <summary>
    ///  首次账号查找建立合作
    /// </summary>
    firstAccountCooperate = 9,
    /// <summary>
    ///  删除的订单邮件ID
    /// </summary>
    delOrderId = 10,
    /// <summary>
    /// 订单奖励过期
    /// </summary>
    rewardOrder = 11,
    /// <summary>
    ///  日程任务未领取
    /// </summary>
    dailyTask = 12,
    /// <summary>
    ///  奖杯礼包
    /// </summary>
    cupPackage = 13,
}    

/// <summary>
///  秘书拥有类型
/// </summary>
public enum ESecretaryType
{
    /// <summary>
    ///  未获取
    /// </summary>
    noHave = 0,
    /// <summary>
    ///  终生拥有
    /// </summary>
    had = 1,
    /// <summary>
    ///  暂时拥有
    /// </summary>
    temporaryHad = 2,
}    

/// <summary>
///  秘书表枚举
/// </summary>
public enum ESecretary
{
    /// <summary>
    ///  艺人技能训练经验增加N%
    /// </summary>
    skillExp = 2,
    /// <summary>
    ///  艺人培养时间减少N%
    /// </summary>
    trainTime = 3,
    /// <summary>
    ///  星探等待时间减少N%
    /// </summary>
    searchTime = 4,
    /// <summary>
    ///  每天额外星探次数增加N
    /// </summary>
    starSearch = 5,
    /// <summary>
    ///  城市自动宣传次数
    /// </summary>
    cityTimes = 6,
    /// <summary>
    ///  自动处理公务次数
    /// </summary>
    workTimes = 7,
    /// <summary>
    ///  自动接待次数
    /// </summary>
    visitTimes = 8,
    /// <summary>
    ///  秘书体验活动开始时间
    /// </summary>
    secretaryExpStart = 9,
    /// <summary>
    ///  秘书体验活动结束时间
    /// </summary>
    secretaryExpEnd = 10,
    /// <summary>
    /// 许可证申请时长
    /// </summary>
    applicationDuration = 11,
    /// <summary>
    /// 申请许可证物品类型
    /// </summary>
    applicationLicense = 12,
    /// <summary>
    ///  申请许可证物品数量
    /// </summary>
    applicationLicenseNum = 13,
    /// <summary>
    ///  每日免费领取礼包ID
    /// </summary>
    freeGiftId = 1001,
    /// <summary>
    ///  每日需要花费领取的礼包ID
    /// </summary>
    moneyGiftId = 2001,
}    

/// <summary>
///  经营会议枚举
/// </summary>
public enum EManageMeet
{
    /// <summary>
    ///  基础探班队列
    /// </summary>
    baseLine = 3,
    /// <summary>
    ///  基本间隔时间
    /// </summary>
    baseIntervalTime = 1200,
}    

public enum EOscarType
{
    man = 1,
    woman = 2,
    perform = 3,
    art = 4,
    publicPraise = 5,
    bestBoxOffice = 6,
    totalBoxOffice = 7,
    movies = 8,
    bigSell = 9,
}    

/// <summary>
///  GM的刷新类型
/// </summary>
public enum EGMRefreshType
{
    /// <summary>
    ///  日常签到
    /// </summary>
    dailySign = 0,
    /// <summary>
    ///  日常任务
    /// </summary>
    dailyTask = 1,
    /// <summary>
    ///  商城每日限购道具
    /// </summary>
    dailyMall = 2,
    /// <summary>
    ///  商城每周限购道具
    /// </summary>
    weeklyMall = 3,
    /// <summary>
    ///  管理生产线cd的清除
    /// </summary>
    manageProduce = 4,
    /// <summary>
    ///  七日累计登陆
    /// </summary>
    sevenAddup = 5,
    /// <summary>
    ///  剧本搜罗清除
    /// </summary>
    findStory = 6,
}    

/// <summary>
///  物品使用类型
/// </summary>
public enum EItemUseType
{
    /// <summary>
    ///  无奖励
    /// </summary>
    noReward = 0,
    /// <summary>
    ///  获得reward中所有奖励
    /// </summary>
    allReward = 1,
    /// <summary>
    ///  随机获得一项奖励
    /// </summary>
    randomReward = 2,
}    

/// <summary>
///  物品类型
/// </summary>
public enum EItemType
{
    /// <summary>
    ///  随机获得一个艺人
    /// </summary>
    randomActor = 16,
}    

public enum EGuideType
{
    /// <summary>
    ///  引导
    /// </summary>
    guide = 1,
    /// <summary>
    ///  剧情
    /// </summary>
    story = 2,
}    

public enum ENoticeType
{
    init = 1,
    add = 2,
    update = 4,
    remove = 8,
}    

public enum ECooperate
{
    taskLength = 6,
}    

public enum EChatChannel
{
    /// <summary>
    ///  私人聊天
    /// </summary>
    private = 1,
    /// <summary>
    ///  世界聊天
    /// </summary>
    world = 2,
    /// <summary>
    ///  公司聊天
    /// </summary>
    company = 3,
}    

public enum ESystemMessageId
{
    getActor1 = 1001,
    getActor2 = 1002,
    movie = 1003,
    updateName = 1004,
    createCompany = 1005,
    joinCompany = 1006,
}    

public enum ESystemType
{
    /// <summary>
    ///  玩家/公司 名称
    /// </summary>
    userName = 1,
    /// <summary>
    ///  旧名称
    /// </summary>
    oldName = 2,
    /// <summary>
    ///  艺人星级
    /// </summary>
    actorStar = 3,
    /// <summary>
    ///  艺人名称
    /// </summary>
    actorName = 4,
    /// <summary>
    ///  电影名称
    /// </summary>
    moiveName = 5,
    /// <summary>
    ///  街道等级
    /// </summary>
    blockLevel = 6,
    /// <summary>
    ///  电影等级
    /// </summary>
    boxOfficeEvaluation = 7,
    /// <summary>
    ///  集团名称
    /// </summary>
    groupName = 8,
}    

/// <summary>
/// gamedata的操作类型
/// </summary>
public enum EGameDataOps
{
    /// <summary>
    /// 初始化
    /// </summary>
    init = 1,
    /// <summary>
    /// 增加
    /// </summary>
    add = 2,
    /// <summary>
    /// 更新
    /// </summary>
    update = 4,
    /// <summary>
    /// 删除
    /// </summary>
    remove = 8,
}    

/// <summary>
///  通用枚举
/// </summary>
public class ECommon
{
    /// <summary>
    ///  名字最大长度
    /// </summary>
    public static int MaxNameLenth = 20;
    /// <summary>
    ///  默认名字
    /// </summary>
    public static string DefaultName = "Brad Pitt";
    /// <summary>
    ///  移动速度
    /// </summary>
    public static double MoveSpeed = 1.3;
    /// <summary>
    ///  开启跳跃
    /// </summary>
    public static bool CanJump = false;
}    

/// <summary>
///  渠道枚举
/// </summary>
public class EChannel
{
    public static string facebook = "1";
    public static string google = "2";
}    

/// <summary>
/// 工具自动生成的枚举，记录协议版本号
/// </summary>
public class ProtoVersion
{
    /// <summary>
    /// 协议版本号数字表示
    /// </summary>
    public static int versionCode = 10;
    /// <summary>
    /// 协议版本号字符表示
    /// </summary>
    public static string versionName = "0.1.0";
}    

/// <summary>
/// 工具自动生成的枚举，枚举所有的存库对象
/// </summary>
public class DBOType
{
    public static string UsrData = "UsrData";
    public static string GameInfo = "GameInfo";
    public static string GameInfoExt = "GameInfoExt";
    public static string GMMsgLog = "GMMsgLog";
    public static string OrderData = "OrderData";
    public static string ItemData = "ItemData";
    public static string StorySuitData = "StorySuitData";
    public static string StoryData = "StoryData";
    public static string ActorData = "ActorData";
    public static string CityData = "CityData";
    public static string ActorSkillEffect = "ActorSkillEffect";
    public static string TempData = "TempData";
    public static string MovieData = "MovieData";
    /// <summary>
    ///  经营订单
    /// </summary>
    public static string ManageOrderData = "ManageOrderData";
    public static string ProgressBoxData = "ProgressBoxData";
    /// <summary>
    ///  经营生产
    /// </summary>
    public static string ManageProduceData = "ManageProduceData";
    public static string MovieLicenceResetTimeData = "MovieLicenceResetTimeData";
    /// <summary>
    ///  经营公务
    /// </summary>
    public static string ManageBusinessData = "ManageBusinessData";
    /// <summary>
    ///  经营探班
    /// </summary>
    public static string ManageVisitData = "ManageVisitData";
    public static string StoryMessage = "StoryMessage";
    public static string RankListData = "RankListData";
    /// <summary>
    ///  任务结构
    /// </summary>
    public static string TaskData = "TaskData";
    /// <summary>
    ///  单个商品限购数据
    /// </summary>
    public static string MallItemLimitData = "MallItemLimitData";
    public static string MailData = "MailData";
    /// <summary>
    ///  经营会议
    /// </summary>
    public static string ManageMeetingData = "ManageMeetingData";
    public static string DanmuData = "DanmuData";
    /// <summary>
    ///  日常签到数据
    /// </summary>
    public static string DailySign = "DailySign";
    /// <summary>
    ///  小秘书功能
    /// </summary>
    public static string SecretaryData = "SecretaryData";
    /// <summary>
    ///  活动期间累计达到某种要求领取奖励
    /// </summary>
    public static string SevenAddUpData = "SevenAddUpData";
    /// <summary>
    ///  艺人训练队列
    /// </summary>
    public static string ActortExerciseData = "ActortExerciseData";
    /// <summary>
    ///  日程事件
    /// </summary>
    public static string DailyEvent = "DailyEvent";
    /// <summary>
    ///  引导数据
    /// </summary>
    public static string GuideData = "GuideData";
    /// <summary>
    ///  合作
    /// </summary>
    public static string PlayerCooperateData = "PlayerCooperateData";
    /// <summary>
    ///  账号邀请合作数据
    /// </summary>
    public static string AccountCooperateData = "AccountCooperateData";
    /// <summary>
    ///  公共邀请合作数据
    /// </summary>
    public static string AutoCooperateData = "AutoCooperateData";
    /// <summary>
    ///  合作任务
    /// </summary>
    public static string CooperateTaskData = "CooperateTaskData";
    /// <summary>
    ///  合作订单
    /// </summary>
    public static string CooperateOrderData = "CooperateOrderData";
    public static string LevelGiftData = "LevelGiftData";
    /// <summary>
    ///  完成所有引导任务领取奖励
    /// </summary>
    public static string GetGuideReward = "GetGuideReward";
    /// <summary>
    ///  奖杯礼包
    /// </summary>
    public static string CupPackage = "CupPackage";
    /// <summary>
    ///  剧本刷新时间信息
    /// </summary>
    public static string StoryRefreshData = "StoryRefreshData";
}    



