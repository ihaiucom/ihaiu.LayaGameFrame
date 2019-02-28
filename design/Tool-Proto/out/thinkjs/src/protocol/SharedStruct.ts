/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:50,
 *  PLEASE DO NOT REWRITE.
 */

import * as SE from "./SharedEnum";

export class DBBase { // 所有入库对象应该继承此类
}

export class DBObject extends DBBase { // 普通数据的基类
    uuid: string = ""; 
}

export class ShardDBObject extends DBBase { // 分库分表数据的基类
    uuid: string = ""; 
    entityId: number = 0; 
}

export class UsrData extends ShardDBObject { 
    usrName: string = ""; // 玩家名字
    channel: string = ""; // 渠道代码
    registerTime: number = 0; // 注册时间 unix时间戳
    registerIP: string = ""; // 注册IP
    lastLoginTime: number = 0; // 次登录时间 unix时间戳
    lastLoginIP: string = ""; // 上次登录IP
    usrState: SE.EUsrState = 0; // 玩家状态
    usrRemark: string = ""; // 状态注释
    usrFreezeTime: number = 0; // 冻结的到期时间 0是永久冻结 unix时间戳
}

export class RoomInfo { 
    roomId: number = 0; // 房间ID
    floor: number = 0; // 房间所在楼层
}

export class GameInfo extends ShardDBObject { 
    name: string = ""; // 玩家名字
    portrait: number = 0; // 头像id
    sex: SE.EUserSex = 0; // 性别
    level: number = 0; // 等级
    fans: number = 0; // 粉丝数量
    cup: number = 0; // 奖杯数量
    stall: number = 0; // 比赛档次
    vipLevel: number = 0; // vip等级
    vipExp: number = 0; // vip经验
    extendFloor: number = 0; // 扩建的楼层
    buildRoomInfo: Array<RoomInfo> | null = null; // 建造的房间信息
    maxActor: number = 0; // 最大艺人数
    maxHideActor: number = 0; // 最大隐藏艺人数
    noseIntoNum: number = 0; // 查探次数
    noseIntoTime: number = 0; // 查探时间
    resetNoseIntoTime: number = 0; // 查探次数,时间重置时间
    noseIntoActorEffectTime: number = 0; // 查探的艺人生效时间
    noseIntoActorList: Array<number> | null = null; // 查探的艺人ID
    expected: number = 0; // 期待值
    daysCultivateCount: number = 0; // 今日公司培养次数
    resetDaysCultivateCountTime: number = 0; // 每日重置时间
    dailyTaskUpdateTime: number = 0; // 日常任务更新时间
    achievementTaskUpdateTime: number = 0; // 成就任务更新时间
    mallLimitDailyUpdateTime: number = 0; // 商城每日限购更新时间
    mallLimitWeeklyUpdateTime: number = 0; // 商城每周限购更新时间
    findStoryTime: number = 0; // 搜罗次数
    lastTimeFindStory: number = 0; // 上次搜罗时间
    lastResetTime: number = 0; // 上次夸天重置时间
    theaterIds: Array<number> | null = null; // 院线信息
    lastGetStreetRewardTimt: number = 0; // 上次领取街区奖励的时间
    lastSendGroupRankListTime: number = 0; // 上次祝贺总票房时间
    lastSendGroupMovieRankListTime: number = 0; // 上次祝贺最高票房时间
    sendGroupRankListTimes: number = 0; // 祝贺次数
    initActorId: number = 0; // 初始化选择艺人id
}

export class GameInfoExt extends ShardDBObject { 
    perSignature: string = ""; // 个性签名
    totalFilm: number = 0; // 拍摄过的电影数
    numBoxOffice: number = 0; // 票房总数
    numOrders: number = 0; // 订单总数
    numProductionLine: number = 0; // 最高档生产线
    numOfficialBusiness: number = 0; // 公务次数
    numMeeting: number = 0; // 会议次数
    numVisit: number = 0; // 拜访次数
    numGroupBest: number = 0; // 分组第一次数
    numBestArtDirection: number = 0; // 获得最佳艺术指导奖次数
    numBestPerformer: number = 0; // 获得最佳表演奖次数
    numBestPublicPraise: number = 0; // 获得最受欢迎奖次数
    numGoldenOliveAward: number = 0; // 获得金橄榄奖次数
    bestWordOfMouth: number = 0; // 最高口碑
    bestWordOfMouthFilm: string = ""; // 口碑最高的电影
    bestBoxOffice: number = 0; // 最高票房
    bestBoxOfficeFilm: string = ""; // 票房最高的电影
    numNarrativeFilm: number = 0; // 叙事片数量
    numActionFilm: number = 0; // 动作片数量
    numAffectionalFilm: number = 0; // 爱情片数量
    numCartoonFilm: number = 0; // 动画片数量
    numComedyFilm: number = 0; // 喜剧片数量
    numMusicalFilm: number = 0; // 歌舞片数量
    numHorrorFilm: number = 0; // 恐怖片数量
    numSuspense: number = 0; // 悬疑片数量
    portraitList: Array<number> | null = null; // 头像ID列表
}

export class ItemDesc { 
    itemId: number = 0; // 配置表id
    amount: number = 0; // 奖励物品数量
}

export class GMMsgLog extends ShardDBObject { 
    messageId: number = 0; 
    publishTypeCode: SE.EPublishTypeCode = 0; 
    receiveCount: number = 0; // 接受次数
    receiveTime: number = 0; // unix时间戳
}

export class OrderData extends DBObject { 
    entityId: number = 0; 
    orderId: number = 0; // 订单号
    outerOrderId: string = ""; // 三方订单id
    productId: string = ""; // 商品编号
    productNum: number = 0; // 商品数量
    createTime: number = 0; // unix时间戳
    paymentTime: number = 0; // unix时间戳 (收到第三方支付系统成功支付的回调的时间)
    handleCount: number = 0; // 处理次数
}

export class Notice { 
    title: string = ""; // 标题
    content: string = ""; // 内容
    messageDetailUrl: string = ""; 
    itemList: Array<ItemDesc> | null = null; // 奖励列表
}

export class MailDesc { 
    title: string = ""; // 标题
    content: string = ""; // 内容
    itemList: Array<ItemDesc> | null = null; // 奖励列表
    createTime: number = 0; // 创建时间
    endTime: number = 0; // 过期时间
    IsRewardGot: boolean = false; 
    isNew: boolean = false; // 是否是新邮件
}

export class ItemData extends ShardDBObject { 
    itemId: number = 0; // 对应的策划表id
    amount: number = 0; // 物品的数量
    createTime: number = 0; // 创建(获得)时间
}

export class StorySuitData extends ShardDBObject { 
    storySuitId: number = 0; // 剧本套id
    progress: number = 0; // 集齐剧本进度
    progress2: number = 0; // 剧本目标进度
    status: number = 0; // 状态
}

export class StoryData extends ShardDBObject { 
    storyId: number = 0; // 剧本id
    storyProgressInfo: Array<StoryProgress> | null = null; // 每个剧本所要达成的目标列表
    status: number = 0; // 状态
    progress: number = 0; // 进度
    maxScore: number = 0; // 最高票房
    shootLastTime: number = 0; // 上次拍摄时间
}

export class StoryProgress { 
    id: number = 0; // 1拍摄剧本 2媒体评分 3票房大卖以上
    progress: number = 0; // 进度
    status: number = 0; // 是否完成
}

export class Assets { 
    giveType: number = 0; // 赠送的类型
    giveLevel: number = 0; // 赠送的等级
    giveItemList: Array<ItemDesc> | null = null; // 赠送的物品
    extraGiveACLimit: number = 0; // 额外赠送物品上限
}

export class shootInfo { 
    type: number = 0; // 拍摄类型
    proficiencyExp: number = 0; // 熟练经验
    proficiencyLevel: number = 0; // 熟练等级
}

export class skillTriggerCondition { 
    type: number = 0; // 触发条件类型
    value: number = 0; // 触发条件数值
}

export class skillInfo { 
    skillId: number = 0; // 技能ID
    isEffect: boolean = false; // 是否生效
    triggerCondition: Array<skillTriggerCondition> | null = null; // 触发技能的条件,多个条件，有一个满足就生效
}

export class ActorData extends ShardDBObject { 
    actorId: number = 0; // 艺人id
    name: string = ""; // 艺人名字
    hide: boolean = false; // 是否雪藏
    level: number = 0; // 等级
    levelExp: number = 0; // 等级进度
    payCheck: number = 0; // 片酬
    stamina: number = 0; // 体力
    staminaLimit: number = 0; // 体力上限
    LoyaltyExp: number = 0; // 忠诚度经验
    LoyaltyLevel: number = 0; // 忠诚度等级
    cultivateCount: number = 0; // 培养次数
    cultivateCountLimit: number = 0; // 培养次数上限
    giveAssetsCount: number = 0; // 赠送资产次数
    giveAssetsCountLimit: number = 0; // 赠送资产次数上限
    giveAssetsList: Array<Assets> | null = null; // 赠送资产列表
    skillExp: number = 0; // 技能经验
    skillList: Array<skillInfo> | null = null; // 技能信息列表
    shootTypeList: Array<shootInfo> | null = null; // 拍摄类型熟练度
    spectacle: number = 0; // 场面属性
    perform: number = 0; // 表演属性
    plot: number = 0; // 剧情属性
    art: number = 0; // 艺术属性
    boxOfficeCount: number = 0; // 参与拍摄票房影响力总和
    cupCount: number = 0; // 获取奖杯数量
    movieCount: number = 0; // 拍摄电影次数
    entertainment: number = 0; // 娱乐属性
    produceId: number = 0; // 生产线id
    assistantInfos: Array<AssistantInfo> | null = null; // 助理信息
}

export class AssistantInfo { 
    id: number = 0; // 助理id  1 2 3 4
    level: number = 0; // 助理等级
    actorSign: number = 0; // 增加的艺人标签
}

export class CityData extends ShardDBObject { 
    lastCity: number = 0; // 最后一个城市
    headquarters: number = 0; // 总部城市
    ambassador: Array<number> | null = null; // 形象大使
    maxGold: number = 0; // 金币上限
    maxFans: number = 0; // 粉丝上限
    speedGold: number = 0; // 金币掉落速度
    speedFans: number = 0; // 粉丝掉落速度
    lastGold: number = 0; // 上次更新掉落的金币
    lastFans: number = 0; // 上次更新掉落的粉丝
    lastDropTimestamp: number = 0; // 上次更新掉落的时间戳
    lastTime: number = 0; // 上次结算时间
    dropList: Array<ItemDesc> | null = null; // 掉落列表
    lastArea: number = 0; // 当前宣传的地区
    lastAreaProgress: number = 0; // 当前宣传进度
    propagandaActor: number = 0; // 宣传大使
    roadShowFlag: boolean = false; // 路演成功标记
}

export class skillEffectInfo { 
    actId: number = 0; // 技能ID
    value: number = 0.0; // 增加的数值%
}

export class ActorSkillEffect extends ShardDBObject { 
    getGoldSpeed: number = 0.0; // 获得金币速度
    productionEarnings: number = 0.0; // 生产线收益
    actorPaycheck: Array<skillEffectInfo> | null = null; // 演员片酬
    boxOfficeEarnings: Array<skillEffectInfo> | null = null; // 收益票房
    cityGetGoldTime: number = 0.0; // 城市获取金币时间
    upgradeGoldCost: Array<skillEffectInfo> | null = null; // 升级金币消耗
    shootTotalAttrIncrease: Array<skillEffectInfo> | null = null; // 拍摄时全属性增加
}

export class TempData extends ShardDBObject { 
    lastResetTime: number = 0; // 上次重置时间
}

export class MovieData extends ShardDBObject { 
    movieId: number = 0; // 电影id
    name: string = ""; // 电影名字
    state: SE.EMovieState = 0; // 当前状态
    data: Array<number> | null = null; // 艺人选择 / 剧本选择
    movieCost: Array<number> | null = null; // 电影成本
    expected: Array<number> | null = null; // 市场期待
    battleData: Array<BattleData> | null = null; // 战斗过程
    battleDataEx: Array<BattleData> | null = null; // 战斗过程
    type: number = 0; // 拍摄类型
    actorShootType: Array<number> | null = null; // 艺人熟练度增加经验
    isTired: boolean = false; // 是否疲劳
    isGetStoryGoals: boolean = false; // 是否领取剧本奖励
    mediaVisit: Array<MediaVisitDesc> | null = null; // 媒体访问
    mExpected: number = 0; // 期待值
    mediaCommend: number = 0; // 平均媒体评价
    mediaCommendArr: Array<number> | null = null; // 媒体评价
    praise: number = 0; // 媒体评价获得的点赞数
    premiereBoxOffice: number = 0; // 首映票房
    extBoxOffice: number = 0; // 额外票房
    publicPraise: number = 0; // 观众口碑
    runDays: Array<number> | null = null; // 上映天数
    totalBoxOffice: number = 0; // 总票房
    totalMovieCost: number = 0; // 总成本
    evaluationCon: number = 0; // 评价系数
    attribute: Array<number> | null = null; // 依次对应5种属性结果, 场面, 表演, 剧情, 艺术, 娱乐
    maxAttribute: Array<number> | null = null; // 5种属性最大值, 场面, 表演, 剧情, 艺术, 娱乐
    avrAttribute: Array<number> | null = null; // 5种属性平均值, 场面, 表演, 剧情, 艺术, 娱乐
    dropCount: number = 0; // 随机次数
    boxOfficeEvaluation: SE.EBoxOfficeEvaluation = 0; // 票房评价
    extendCity: number = 0; // 推广城市id
    attentionValue: number = 0; // 推广关注度
    attentionProgress: number = 0; // 推广关注度进度
    dropItemList: Array<ItemDesc> | null = null; // 掉落物品
    contineTransceiver: number = 0; // 持续收益
    startTime: number = 0; // 开始时间戳
    lastTime: number = 0; // 上次操作时间
}

export class BattleData { 
    actorId: number = 0; // 艺人id
    propertyId: number = 0; // 属性id
    value: number = 0; // 属性值
}

export class CityGainsInfo { 
    itemId: number = 0; // 物品ID
    speed: number = 0; // 速度
    limit: number = 0; // 上限
    baseNum: number = 0; // 基础值
}

export class MediaVisitDesc { 
    mediaId: number = 0; // 媒体id
    level: number = 0; // 媒体等级
    bAccept: boolean = false; // 是否接受
}

export class ManageOrderData extends ShardDBObject { // 经营订单
    orderId: number = 0; // 经营订单ID
    items: Array<OrderItems> | null = null; // 已经塞入的物品
    position: number = 0; // 订单位置信息
    lastTime: number = 0; // 订单开始时间
    delFlag: boolean = false; // 是否是删除订单 true表示被删除了
}

export class OrderItems { 
    itemId: number = 0; 
    amount: number = 0; 
    portrait: number = 0; // 自己放的为0 好友帮忙的是好友的头像
}

export class ProgressBoxData extends ShardDBObject { 
    moduleId: number = 0; // 模块ID 读取enum.json里 
    progress: number = 0; // 宝箱进度
    staus: number = 0; // 领取宝箱状态
    lastTime: number = 0; // 上次领取时间
}

export class ManageProduceData extends ShardDBObject { // 经营生产
    produceId: number = 0; // 生产ID
    hadNum: number = 0; // 已经生产了多少个
    actId: number = 0; // 派遣的艺人ID
    level: number = 0; // 生产线等级
    skills: Array<SkillLevel> | null = null; // 生产技能列表
    randomNums: Array<number> | null = null; // 生产倍数
    produceNum: number = 0; // 排队生产多少个
    lastTime: number = 0; // 开始生产时间
    hadProduceTimes: number = 0; // 领取的时候清零，方便合作任务计算生产次数
}

export class SkillLevel { 
    skillId: number = 0; // 技能ID 1队列数量 2 储存上限 3 生产时长 4 每次产出
    level: number = 0; // 技能等级
}

export class AttrChangeInfo { 
    attrId: number = 0; // 属性id
    value: number = 0; // 改变的值
}

export class MovieLicenceResetTimeData extends ShardDBObject { 
    lastResetTime: number = 0; // 上次刷新时间
    dailyCount: number = 0; // 当天恢复数量
    lastUpdateTime: number = 0; // 上次恢复时间
    cd: number = 0; // 当前cd值
}

export class ManageBusinessData extends ShardDBObject { // 经营公务
    businessId: number = 0; // 公务ID
    dailyCount: number = 0; // 当天阅读次数
    lineLimit: number = 0; // 公务队列上限
    lastUpdateTime: number = 0; // 上次恢复时间
    lastResetTime: number = 0; // 上次刷新时间
}

export class ManageVisitData extends ShardDBObject { // 经营探班
    visitId: number = 0; // 探班ID
    actId: number = 0; // 艺人ID
    startTime: number = 0; // 开始探班的时间
    lastTime: number = 0; // 探班队列刷新时间
    lineLimit: number = 0; // 探班队列上限
    intervalTime: number = 0; // 间隔时间
    isReceptior: boolean = false; // 是否正处于接待
}

export class StoryMessageDesc { 
    name: string = ""; // 玩家名字
    userId: number = 0; // 玩家id
    portrait: number = 0; // 头像id
    sex: SE.EUserSex = 0; // 性别
    level: number = 0; // 玩家等级
    timestamp: number = 0; // 留言时间
    message: string = ""; // 信息
}

export class StoryMessage extends DBObject { 
    storyId: number = 0; 
    message: Array<StoryMessageDesc> | null = null; 
}

export class ActorShortDesc { 
    actorId: number = 0; 
    name: string = ""; 
}

export class MovieShortData { 
    userId: number = 0; // id
    uuid: string = ""; // 电影唯一id(MovieData.uuid)
    movieId: number = 0; // 电影id
    name: string = ""; // 电影名字
    data: Array<ActorShortDesc> | null = null; // 艺人选择 / 剧本选择
    type: number = 0; // 拍摄类型
    totalBoxOffice: number = 0; // 票房
    boxOfficeEvaluation: number = 0; // 票房等级评价
    mediaCommend: number = 0; // 平均媒体评价
    publicPraise: number = 0; // 观众口碑
}

export class BestMovieDesc { 
    movieUuid: string = ""; // uuid
    movieId: number = 0; // 电影id
    name: string = ""; // 电影名字
    totalBoxOffice: number = 0; // 总票房
    boxOfficeEvaluation: number = 0; // 票房等级评价
}

export class PlayerShortData { 
    userId: number = 0; // id
    portrait: number = 0; // 头像id
    sex: SE.EUserSex = 0; // 性别
    name: string = ""; // 名字
    level: number = 0; // 等级
    blockLevel: number = 0; // 街区等级
    perSignature: string = ""; // 个性签名
    city: number = 0; // 时长占领
    numActor: number = 0; // 艺人数量
    numBuilding: number = 0; // 建筑层数
    boxOfficeEvaluation: Array<number> | null = null; // 票房评价对应次数
    dailyBestMovie: string = ""; // 每日票房最佳 uuid
    bestMovie: Array<BestMovieDesc> | null = null; // 票房前三
}

export class ServerListDesc { 
    portrait: number = 0; // 头像id
    sex: SE.EUserSex = 0; // 性别
    name: string = ""; // 名字
    userId: number = 0; // id
    movieUuid: string = ""; 
    movieId: number = 0; // 电影id
    movieName: string = ""; 
    totalBoxOffice: number = 0; // 总票房
}

export class GroupListDesc { 
    portrait: number = 0; // 头像id
    sex: SE.EUserSex = 0; // 性别
    name: string = ""; // 名字
    userId: number = 0; // id
    totalBoxOffice: number = 0; // 总票房
}

export class GroupMovieListDesc { 
    name: string = ""; // 名字
    movieUuid: string = ""; 
    movieId: number = 0; // 电影id
    movieName: string = ""; // 电影名字
    userId: number = 0; // id
    totalBoxOffice: number = 0; // 总票房
}

export class SelfRankListDesc { 
    MainRank: number = 0; // 全服排名
    groupList: number = 0; // 分组总排行排名
    serverName: string = ""; // 服务器名称
}

export class RankListData extends DBObject { 
    entityId: number = 0; 
    serverId: number = 0; // 服务器id
    serverUuid: string = ""; // 服务器唯一id
    groupId: number = 0; // 分组id
    lastGroupId: number = 0; // 昨天的街区分组
    lastRank: number = 0; // 昨日排名
    lastWeakRank: number = 0; // 上周排名
    propaganda_department: number = 0; // 建造宣传部的时间
    isGetLastReward: boolean = false; // 是否领取昨日奖励
    isChangeServerName: boolean = false; // 是否修改过服务器名字
    big_sell: number = 0; // 大卖电影数量
    totalBoxOffice: number = 0; // 最高总票房
    totalBoxOfficeRank: number = 0; // 最高总票房排名
    historyBestTotalBoxOffice: number = 0; // 历史总票房最佳
    historyBestTotalBoxOfficeRank: number = 0; // 历史总票房最佳排名
    historyBestTotalBexOfficeBlockLevel: number = 0; // 历史最佳的街区
    historyBestTotalBexOfficeTotal: number = 0; // 当前街区玩家人数
    historyIsNew: boolean = false; // 是否新记录
    movies: number = 0; // 电影拍摄数量
    bestBoxOffice: number = 0; // 最高票房
    bestBoxOfficeName: string = ""; // 最高票房电影
    bestBoxOfficeRank: number = 0; // 最高票房排名
    rewardFlags: Array<number> | null = null; // 奖励领取标记
    isNew: boolean = false; // 是否当天第一次获取
}

export class TaskData extends ShardDBObject { // 任务结构
    cid: number = 0; // 对应的策划表id
    type: SE.EAchievementType = 0; // 任务类型
    progress: number = 0; // 完成进度
    state: SE.EAchievementState = 0; // 成就或任务状态
}

export class MallItemLimitData extends ShardDBObject { // 单个商品限购数据
    id: number = 0; // 商品id
    type: SE.EMallItemLimitType = 0; // 限购类型
    amount: number = 0; // 已经购买的个数
}

export class MailData extends ShardDBObject { 
    title: string = ""; // 标题
    content: string = ""; // 内容
    itemList: Array<ItemDesc> | null = null; // 奖励列表
    createTime: number = 0; // 创建时间
    endTime: number = 0; // 过期时间
    IsRewardGot: boolean = false; 
    isNew: boolean = false; // 是否是新邮件
}

export class ManageMeetingData extends ShardDBObject { // 经营会议
    meetID: number = 0; // 会议ID
    randResult: number = 0; // 选择的随机结果
    lastTime: number = 0; // 会议队列刷新时间
    lineLimit: number = 0; // 会议队列上限
    intervalTime: number = 0; // 间隔时间
}

export class DanmuItem { 
    id: number = 0; // 用户 id
    name: string = ""; // 用户姓名
    time: number = 0; // 时间戳
    msg: string = ""; // 弹幕消息
}

export class DanmuData extends DBObject { 
    data: Array<DanmuItem> | null = null; // 弹幕数据
}

export class DailySign extends ShardDBObject { // 日常签到数据
    count: number = 0; // 签到数
    updateTime: number = 0; // 更新时间
}

export class SecretaryData extends ShardDBObject { // 小秘书功能
    secretaryType: SE.ESecretaryType = 0; // 秘书存在类型 0 未获取 1终身拥有 2暂时拥有
    timeList: Array<SecretaryKeyValue> | null = null; // 每个操作对应的次数列表
    lastTime: number = 0; // 上次更新数据时间
    applyFrequency: number = 0; // 申请次数 
    applyLastTime: number = 0; // 上次申请时间
    isApply: boolean = false; // 是否申请
}

export class SecretaryKeyValue { // 小秘书列表
    key: number = 0; 
    value: number = 0; 
    isOpen: boolean = false; // 是否开启
}

export class SevenAddUpData extends ShardDBObject { // 活动期间累计达到某种要求领取奖励
    progress: number = 0; // 活动进度
    staus: number = 0; // 领取宝箱状态
    lastTime: number = 0; // 上次更新进度时间
}

export class ActortExerciseData extends ShardDBObject { // 艺人训练队列
    index: number = 0; // 训练槽位顺序
    actorUuid: string = ""; // 艺人 uuid
    startTime: number = 0; // 开始时间
}

export class OscarDesc { 
    id: number = 0; // 艺人id或者剧本id
    name: string = ""; // 艺人名字或者剧本名字
    playerName: string = ""; // 玩家姓名
    userId: number = 0; // 玩家id
}

export class OscarData { 
    man: Array<OscarDesc> | null = null; // 最佳男艺人提名
    woman: Array<OscarDesc> | null = null; // 最佳女艺人提名
    perform: Array<OscarDesc> | null = null; // 最佳表演提名
    art: Array<OscarDesc> | null = null; // 最佳艺术提名
    publicPraise: Array<OscarDesc> | null = null; // 最佳口碑提名
    bestMan: number = 0; // 最佳男艺人下标
    bestWoman: number = 0; // 最佳女艺人下标
    bestPerform: number = 0; // 最佳表演下标
    bestArt: number = 0; // 最佳艺术下标
    bestPublicPraise: number = 0; // 最佳口碑下标
    blockLevel: number = 0; // 街区等级
}

export class PlayerOscarData { 
    big_sell: number = 0; // 大卖电影数量
    movies: number = 0; // 电影拍摄数量
}

export class DailyEventItem { 
    time: number = 0; // 时间
    uuid: string = ""; // 事件的 uuid
    name: string = ""; // 事件的名称
}

export class DailyEvent extends ShardDBObject { // 日程事件
    data: Array<DailyEventItem> | null = null; 
}

export class GuideData extends ShardDBObject { // 引导数据
    guide: Array<number> | null = null; // 引导相关
    story: Array<number> | null = null; // 剧情相关
}

export class PlayerCooperateData extends ShardDBObject { // 合作
    lastReqTime: number = 0; // 上次请求时间 
    lastAutoReqTime: number = 0; // 上次公开请求时间 
    rewardStatus: number = 0; // 领取进度宝箱状态
    giveGoldTime: number = 0; //赠送金币的次数
    giveDollarTime: number = 0; // 赠送美元的次数
    lastTime: number = 0; // 领取时间
}

export class AccountCooperateData extends DBObject { // 账号邀请合作数据
    friendEntityId: string = ""; // 成为好友的玩家
    appList: Array<ApplyInfo> | null = null; //请求他为好友的玩家信息
    weekTimes: number = 0; // 一周内合作不同人的次数
    lastWeek: number = 0; // 合作时间
    firstCooperate: boolean = false; // 首次合作奖励 true 表示已经领取过
    firstACooperate: boolean = false; // 首次通过账号查找建立合作 true 表示已经领取过
    isCaptain: boolean = false; 
    isRead: boolean = false; // false 不需要播放特效，true需要播放 
}

export class ApplyInfo { 
    entityId: string = ""; 
    lastTime: number = 0; 
}

export class AutoCooperateData extends DBObject { // 公共邀请合作数据
    applyEntityId: string = ""; // 申请人
    lastTime: number = 0; // 申请时间
}

export class CooperateTaskData extends DBObject { // 合作任务
    tasks: Array<Ctask> | null = null; 
    currentStar: number = 0; // 当前星级
    progree: number = 0; 
    lastTime: number = 0; 
}

export class Ctask { 
    star: number = 0; // 几星任务
    progree: number = 0; // 星级任务进度
    starTasks: Array<StarTask> | null = null; 
}

export class StarTask { // 星级任务
    taskid: number = 0; // 任务ID
    taskType: number = 0; // 任务类型
    itemId: number = 0; // 奖励ID
    captainItemNum: number = 0; // 队长奖励物品数量
    itemNum: number = 0; // 队员奖励物品数量
    needParam: Array<number> | null = null; // 需要的参数
    progress: number = 0; // 任务进度
    status: number = 0; // 0未完成  1已完成 2领取
    helpUuid: string = ""; // 协助任务的玩家
    receiveUuid: string = ""; // 接取任务的玩家
}

export class CooperateOrderData extends DBObject { // 合作订单
    entityId: number = 0; // 订单方
    portrait: number = 0; // 头像ID
    orderUuid: string = ""; // 订单唯一ID
    itemId: number = 0; 
    amount: number = 0; 
    lastTime: number = 0; // 放入时间
}

export class PlayerLevelUp { 
    old_level: number = 0; // 原来的等级
    now_level: number = 0; // 现在的等级
    story: Array<number> | null = null; // 升级赠送剧本
}

export class GoldExchange { 
    count: number = 0; // 兑换次数
}

export class NewMessageInfo { 
    num: number = 0; // 未读消息的数量
    type: string = ""; // 消息类型，user/system
    userMsg: MessageInfo | null = null; // 最新一条未读消息
    systemMsg: SystemMessage | null = null; // 系统消息
}

export class MessageInfo { 
    userId: number = 0; // 玩家id
    name: string = ""; // 公司名
    portrait: number = 0; // 头像
    sex: number = 0; // 性别
    messageId: number = 0; // 信息id
    message: string = ""; // 信息
    time: number = 0; // 发送时间
}

export class SystemMessage { 
    userId: number = 0; // 玩家id
    messageId: number = 0; // 信息id // 世界频道的消息id
    message: number = 0; // 信息id //MsgChat表
    time: number = 0; // 发送时间
    fieldInfo: Array<FieldInfo> | null = null; // 信息详情
}

export class FieldInfo { 
    type: number = 0; 
    text: string = ""; 
    args: string = ""; 
}

export class PrivateListInfo { 
    roomId: number = 0; // 房间号
    userId: number = 0; // 玩家id
    name: string = ""; // 公司名
    portrait: number = 0; // 头像
    sex: number = 0; // 性别
    message: MessageInfo | null = null; // 信息
    newMsgNum: number = 0; // 新消息的数量
}

export class PushMessageInfo { 
    roomId: number = 0; // 房间号
    message: Array<MessageInfo> | null = null; // 信息
}

export class RoomMember { 
    member: number = 0; // 成员id
    name: string = ""; // 公司名
    portrait: number = 0; // 头像
    sex: number = 0; // 性别
    lastRead: number = 0; // 上一次阅读的消息id
}

export class LevelGiftData extends ShardDBObject { 
    giftId: number = 0; // 等级礼包id
}

export class GetGuideReward extends ShardDBObject { // 完成所有引导任务领取奖励
    staus: number = 0; // 领取宝箱状态
}

export class CupPackage extends ShardDBObject { // 奖杯礼包
    giftId: number = 0; 
    process: number = 0; // 进度
    status: number = 0; // 任务状态
    startTime: number = 0; // 礼包开启时间
}

export class StoryRefreshData extends ShardDBObject { // 剧本刷新时间信息
    dayTime: number = 0; // 每日次数
    lastTime: number = 0; 
}



