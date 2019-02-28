/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:50,
 *  PLEASE DO NOT REWRITE.
 */

export enum EError { // 错误提示
    NoError = 0, 
    ServerError = 1, // 服务器错误
    DataError = 2, // 数据错误
    UnknownError = 3, // 不明错误
    DataBusy = 4, // 数据繁忙
    NoUsrId = 5, // 找不到用户id
    Frozen = 6, // 账号被冻结
    Dropped = 7, // 账号被停用
}

export enum EMoneyType { // 货币类型
    Money = 1, // 代币
    Diamond = 2, // 钻石
    Gold = 3, // 元宝
    Coin = 4, // 金币
}

export enum EGoodsFlag { // 商品标志
    None = 0, // 默认无
    New = 1, // 新品
    Hot = 2, // 热销
    Discount = 3, // 打折
    SoldOut = 4, // 下架
}

export enum EAcceptCondition { // 接受关卡的条件类型
    acceptcondition_front_id = 1, // 前置关卡ID
    acceptcondition_level = 2, // 等级
}

export enum ECompleteCondition { // 完成关卡的条件类型
    completecondition_score = 1, // 分数
    completecondition_kill = 2, // 杀人数
}

export enum ECompleteReward { // 完成关卡的奖励类型
    completereward_exp = 1, // 经验
    completereward_item = 2, // 物品
    completereward_gold = 3, // 金币
}

export enum EUsrState { 
    uninit = 1, // 新账号
    init_actor = 2, // 选择初始艺人
    usual = 3, // 启用
    frozen = 4, // 冻结
    dropped = 5, // 停用
}

export enum EItemNumber { // 玩家数值cid 作为一个物品
    diamond = 1, // 钻石
    gold = 2, // 金币
}

export enum EPublishTypeCode { 
    sdknotice = 1, // sdk公告
    usrmail = 2, // 用户邮箱
    gamemail = 9, // 游戏内邮箱
    gamenotice = 10, // 游戏内公告
}

export enum EUserSex { 
    boy = 2001, 
    girl = 2002, 
}

export enum EItemCategory { // 道具类型
    diamond = 1, // 钻石
    gold = 2, // 金币
    dollar = 3, // 美元
    other = 4, // 周边产品
    normal = 5, // 普通道具
    assets = 6, // 资产
    contract = 7, // 合同
    giftbag = 8, // 礼包
    licence = 10, // 拍摄许可证
    cup = 14, // 奖杯
    piecesgiftbag = 17, // 碎片选择礼包
    story = 18, // 剧本
}

export enum EItemId { 
    diamond = 1, 
    gold = 2, 
    dollar = 3, 
    licence = 4, // 拍摄许可证
    fans = 5, 
    praise = 6, // 点赞
    drawing = 7, // 图纸
    expect = 8, // 期待
    study_card = 5004, // 进修卡
    talent = 5007, // 星探卡
    player_rename_card = 5008, // 改公司名道具
    actor_stamina_water = 5010, // 技能药剂，增加体力
    actor_loyalty_card = 5003, // 忠诚卡
    brochure = 5005, // 宣传册
    horn = 5006, // 喇叭
}

export enum EGameDataRename { // gameData 模块相关枚举
    renameLengthMin = 4, 
    renameLengthMax = 18, 
    rePerSignatureLengthMax = 100, 
}

export enum EStoryStack { // storyStack 表的枚举
    story_stack_daily_times = 2045, // 剧本搜罗每天搜罗次数
    story_stack_search_cost = 2046, // 剧本搜罗每次消耗物品
    story_stack_cd_stage_cost = 2047, // 剧本搜罗每阶段搜罗冷却加速消耗资源类型和数量
    story_stack_cd_stage_length = 2048, // 剧本搜罗阶段时长
    story_stack_cd = 2050, // 剧本搜罗冷却时间
    story_stack_daily_update = 2051, // 每日刷新时间
    story_stack_cd_block_level = 2052, // 剧本搜罗冷却功能开放所需街区等级
}

export enum EStoryModule { // story 模块的枚举
    noFinish = 0, 
    finish = 1, 
    hadGet = 2, 
    randomLength = 3, 
    shootTime = 5, 
    score = 8, 
}

export enum EMovieState { 
    chooseScript = 2, // 选择剧本
    renameFilm = 3, // 修改剧本名称
    currentMarketInf = 4, // 当前市场反馈
    chooseActor = 5, // 选择艺人
    costView = 6, // 薪酬计算
    yRShowView = 7, // 艺人展示
    compatibility = 8, // 艺人对影片的契合度
    filming = 9, // 正在拍摄中
    chooseType = 10, // 选择类型
    chooseTip = 11, // 选择后的提示
    propaganda = 12, // 宣传
    complete = 13, // 杀青
    actorUpdate = 14, // 艺人熟练度
    proficiency = 15, // 杀青对比情况
    chooseTheater = 16, // 选择院线
    noticeFeedBack = 17, // 媒体评价
    SYPF = 18, // 首映票房
    audienceReputation = 19, // 观众口碑
    result = 20, // 上映结果
    overMarket = 21, // 下映提示
    Jiesuan = 22, // 结算分享界面
    rewardTip = 23, // 奖励物品提示
    contineTransceiver = 24, // 持续收益
}

export enum EGlobalId { 
    maxMovieNum = 9, // 最多可同时进行持续收益的电影数量
    tempActor = 9999, // 临时演员id
    firstActor = 9997, // 首部电影演员巨石强森
    loyaltyCardLimit = 1035, // 忠诚卡增加赠送物品上限
}

export enum EMovieType { 
}

export enum EBoxOfficeEvaluation { // 票房评价
    normal = 1, // 一般
    good = 2, // 良好
    big_sell = 3, // 大卖
    great_sell = 4, // 超卖
    myth_sell = 5, // 神话
    marvel_sell = 6, // 传奇
}

export enum EProgressBoxId { 
    manageOrder = 1, // 经营订单进度宝箱
    dailyTask = 2, // 日常任务宝箱
    cooperateTask = 3, // 合作任务宝箱
}

export enum EManageProduce { // 经营生产
    line = 1, // 队列
    save = 2, // 存储
    time = 3, // 时间减免
    output_initial = 4, // 每次产出
    dollarIntervalTime = 11, // 美元生产线时间
    baseProduceId = 100, // 生产纪念品的生产线ID，该生产线只产生美元
    intervalTime = 300, // 间隔时间
}

export enum ERankListType { 
    SelfList = 1, // 自己的排名
    ServerList = 2, // 全服排行榜
    GroupList = 3, // 分组总票房
    GroupMovieList = 4, // 分组影片票房
}

export enum EAchievementState { // 成就或者任务的状态
    none = 0, // 初始化
    receivable = 1, // 可接
    received = 2, // 已接
    finished = 3, // 完成
    rewarded = 4, // 已领奖的
}

export enum EAchievementType { // 成就或者任务的类型
    daily = 1, // 日常
    achievement = 2, // 成就
    story = 3, // 剧本
    mainTask = 4, // 主线任务
}

export enum EMallItemLimitType { // 商店限购类型
    daily = 1, // 每日
    weekly = 2, // 每周
}

export enum EManageBusiness { // 经营事务
    baseLine = 10, // 基础代办事务上限
    interval = 180, // 间隔时长
}

export enum EManageVisit { // 经营探班
    baseLine = 3, // 基础探班队列
    overdueTime = 180, // 过期时长
    baseIntervalTime = 300, // 基本间隔时间
}

export enum EManageOrder { // 经营订单
    baseLength = 9, // 最多显示9个订单
    baseTime = 1200, // 订单存活时间
    delTime = 20, // 删除订单缓存时间
}

export enum EMailId { // 邮件ID枚举
    cooperateApplyFail = 3, // 合作邀请失败
    orderId = 4, // 订单过期邮件ID
    partnerGive = 7, //伙伴赠送
    firstCooperate = 8, // 首次建立合作奖励
    firstAccountCooperate = 9, // 首次账号查找建立合作
    delOrderId = 10, // 删除的订单邮件ID
    rewardOrder = 11, //订单奖励过期
    dailyTask = 12, // 日程任务未领取
    cupPackage = 13, // 奖杯礼包
}

export enum ESecretaryType { // 秘书拥有类型
    noHave = 0, // 未获取
    had = 1, // 终生拥有
    temporaryHad = 2, // 暂时拥有
}

export enum ESecretary { // 秘书表枚举
    skillExp = 2, // 艺人技能训练经验增加N%
    trainTime = 3, // 艺人培养时间减少N%
    searchTime = 4, // 星探等待时间减少N%
    starSearch = 5, // 每天额外星探次数增加N
    cityTimes = 6, // 城市自动宣传次数
    workTimes = 7, // 自动处理公务次数
    visitTimes = 8, // 自动接待次数
    secretaryExpStart = 9, // 秘书体验活动开始时间
    secretaryExpEnd = 10, // 秘书体验活动结束时间
    applicationDuration = 11, //许可证申请时长
    applicationLicense = 12, //申请许可证物品类型
    applicationLicenseNum = 13, // 申请许可证物品数量
    freeGiftId = 1001, // 每日免费领取礼包ID
    moneyGiftId = 2001, // 每日需要花费领取的礼包ID
}

export enum EManageMeet { // 经营会议枚举
    baseLine = 3, // 基础探班队列
    baseIntervalTime = 1200, // 基本间隔时间
}

export enum EOscarType { 
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

export enum EGMRefreshType { // GM的刷新类型
    dailySign = 0, // 日常签到
    dailyTask = 1, // 日常任务
    dailyMall = 2, // 商城每日限购道具
    weeklyMall = 3, // 商城每周限购道具
    manageProduce = 4, // 管理生产线cd的清除
    sevenAddup = 5, // 七日累计登陆
    findStory = 6, // 剧本搜罗清除
}

export enum EItemUseType { // 物品使用类型
    noReward = 0, // 无奖励
    allReward = 1, // 获得reward中所有奖励
    randomReward = 2, // 随机获得一项奖励
}

export enum EItemType { // 物品类型
    randomActor = 16, // 随机获得一个艺人
}

export enum EGuideType { 
    guide = 1, // 引导
    story = 2, // 剧情
}

export enum ENoticeType { 
    init = 1, 
    add = 2, 
    update = 4, 
    remove = 8, 
}

export enum ECooperate { 
    taskLength = 6, 
}

export enum EChatChannel { 
    private = 1, // 私人聊天
    world = 2, // 世界聊天
    company = 3, // 公司聊天
}

export enum ESystemMessageId { 
    getActor1 = 1001, 
    getActor2 = 1002, 
    movie = 1003, 
    updateName = 1004, 
    createCompany = 1005, 
    joinCompany = 1006, 
}

export enum ESystemType { 
    userName = 1, // 玩家/公司 名称
    oldName = 2, // 旧名称
    actorStar = 3, // 艺人星级
    actorName = 4, // 艺人名称
    moiveName = 5, // 电影名称
    blockLevel = 6, // 街道等级
    boxOfficeEvaluation = 7, // 电影等级
    groupName = 8, // 集团名称
}

export class ECommon { // 通用枚举
    static MaxNameLenth = 20; // 名字最大长度
    static DefaultName = "Brad Pitt"; // 默认名字
    static MoveSpeed = 1.3; // 移动速度
    static CanJump = false; // 开启跳跃
}

export class EChannel { // 渠道枚举
    static facebook = "1"; 
    static google = "2"; 
}

export class ProtoVersion { //工具自动生成的枚举，记录协议版本号
    static versionCode = 10; //协议版本号数字表示
    static versionName = "0.1.0"; //协议版本号字符表示
}

export class DBOType { //工具自动生成的枚举，枚举所有的存库对象
    static UsrData = "UsrData"; 
    static GameInfo = "GameInfo"; 
    static GameInfoExt = "GameInfoExt"; 
    static GMMsgLog = "GMMsgLog"; 
    static OrderData = "OrderData"; 
    static ItemData = "ItemData"; 
    static StorySuitData = "StorySuitData"; 
    static StoryData = "StoryData"; 
    static ActorData = "ActorData"; 
    static CityData = "CityData"; 
    static ActorSkillEffect = "ActorSkillEffect"; 
    static TempData = "TempData"; 
    static MovieData = "MovieData"; 
    static ManageOrderData = "ManageOrderData"; // 经营订单
    static ProgressBoxData = "ProgressBoxData"; 
    static ManageProduceData = "ManageProduceData"; // 经营生产
    static MovieLicenceResetTimeData = "MovieLicenceResetTimeData"; 
    static ManageBusinessData = "ManageBusinessData"; // 经营公务
    static ManageVisitData = "ManageVisitData"; // 经营探班
    static StoryMessage = "StoryMessage"; 
    static RankListData = "RankListData"; 
    static TaskData = "TaskData"; // 任务结构
    static MallItemLimitData = "MallItemLimitData"; // 单个商品限购数据
    static MailData = "MailData"; 
    static ManageMeetingData = "ManageMeetingData"; // 经营会议
    static DanmuData = "DanmuData"; 
    static DailySign = "DailySign"; // 日常签到数据
    static SecretaryData = "SecretaryData"; // 小秘书功能
    static SevenAddUpData = "SevenAddUpData"; // 活动期间累计达到某种要求领取奖励
    static ActortExerciseData = "ActortExerciseData"; // 艺人训练队列
    static DailyEvent = "DailyEvent"; // 日程事件
    static GuideData = "GuideData"; // 引导数据
    static PlayerCooperateData = "PlayerCooperateData"; // 合作
    static AccountCooperateData = "AccountCooperateData"; // 账号邀请合作数据
    static AutoCooperateData = "AutoCooperateData"; // 公共邀请合作数据
    static CooperateTaskData = "CooperateTaskData"; // 合作任务
    static CooperateOrderData = "CooperateOrderData"; // 合作订单
    static LevelGiftData = "LevelGiftData"; 
    static GetGuideReward = "GetGuideReward"; // 完成所有引导任务领取奖励
    static CupPackage = "CupPackage"; // 奖杯礼包
    static StoryRefreshData = "StoryRefreshData"; // 剧本刷新时间信息
}

export class DBOShared { //工具自动生成的枚举，枚举所有的存库对象的元信息
    static UsrData = { dbname: 'game',tbname: 'UsrData',shared: true }; 
    static GameInfo = { dbname: 'game',tbname: 'GameInfo',shared: true }; 
    static GameInfoExt = { dbname: 'game',tbname: 'GameInfoExt',shared: true }; 
    static GMMsgLog = { dbname: 'game',tbname: 'GMMsgLog',shared: true }; 
    static OrderData = { dbname: 'game_global',tbname: 'OrderData',shared: false }; 
    static ItemData = { dbname: 'game',tbname: 'ItemData',shared: true }; 
    static StorySuitData = { dbname: 'game',tbname: 'StorySuitData',shared: true }; 
    static StoryData = { dbname: 'game',tbname: 'StoryData',shared: true }; 
    static ActorData = { dbname: 'game',tbname: 'ActorData',shared: true }; 
    static CityData = { dbname: 'game',tbname: 'CityData',shared: true }; 
    static ActorSkillEffect = { dbname: 'game',tbname: 'ActorSkillEffect',shared: true }; 
    static TempData = { dbname: 'game',tbname: 'TempData',shared: true }; 
    static MovieData = { dbname: 'game',tbname: 'MovieData',shared: true }; 
    static ManageOrderData = { dbname: 'game',tbname: 'ManageOrderData',shared: true }; // 经营订单
    static ProgressBoxData = { dbname: 'game',tbname: 'ProgressBoxData',shared: true }; 
    static ManageProduceData = { dbname: 'game',tbname: 'ManageProduceData',shared: true }; // 经营生产
    static MovieLicenceResetTimeData = { dbname: 'game',tbname: 'MovieLicenceResetTimeData',shared: true }; 
    static ManageBusinessData = { dbname: 'game',tbname: 'ManageBusinessData',shared: true }; // 经营公务
    static ManageVisitData = { dbname: 'game',tbname: 'ManageVisitData',shared: true }; // 经营探班
    static StoryMessage = { dbname: 'game_global',tbname: 'StoryMessage',shared: false }; 
    static RankListData = { dbname: 'game_global',tbname: 'RankListData',shared: false }; 
    static TaskData = { dbname: 'game',tbname: 'TaskData',shared: true }; // 任务结构
    static MallItemLimitData = { dbname: 'game',tbname: 'MallItemLimitData',shared: true }; // 单个商品限购数据
    static MailData = { dbname: 'game',tbname: 'MailData',shared: true }; 
    static ManageMeetingData = { dbname: 'game',tbname: 'ManageMeetingData',shared: true }; // 经营会议
    static DanmuData = { dbname: 'game_global',tbname: 'DanmuData',shared: false }; 
    static DailySign = { dbname: 'game',tbname: 'DailySign',shared: true }; // 日常签到数据
    static SecretaryData = { dbname: 'game',tbname: 'SecretaryData',shared: true }; // 小秘书功能
    static SevenAddUpData = { dbname: 'game',tbname: 'SevenAddUpData',shared: true }; // 活动期间累计达到某种要求领取奖励
    static ActortExerciseData = { dbname: 'game',tbname: 'ActortExerciseData',shared: true }; // 艺人训练队列
    static DailyEvent = { dbname: 'game',tbname: 'DailyEvent',shared: true }; // 日程事件
    static GuideData = { dbname: 'game',tbname: 'GuideData',shared: true }; // 引导数据
    static PlayerCooperateData = { dbname: 'game',tbname: 'PlayerCooperateData',shared: true }; // 合作
    static AccountCooperateData = { dbname: 'game_global',tbname: 'AccountCooperateData',shared: false }; // 账号邀请合作数据
    static AutoCooperateData = { dbname: 'game_global',tbname: 'AutoCooperateData',shared: false }; // 公共邀请合作数据
    static CooperateTaskData = { dbname: 'game_global',tbname: 'CooperateTaskData',shared: false }; // 合作任务
    static CooperateOrderData = { dbname: 'game_global',tbname: 'CooperateOrderData',shared: false }; // 合作订单
    static LevelGiftData = { dbname: 'game',tbname: 'LevelGiftData',shared: true }; 
    static GetGuideReward = { dbname: 'game',tbname: 'GetGuideReward',shared: true }; // 完成所有引导任务领取奖励
    static CupPackage = { dbname: 'game',tbname: 'CupPackage',shared: true }; // 奖杯礼包
    static StoryRefreshData = { dbname: 'game',tbname: 'StoryRefreshData',shared: true }; // 剧本刷新时间信息
}


