/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;


/// <summary>
///  所有入库对象应该继承此类
/// </summary>
public class DBBase 
{
}

/// <summary>
///  普通数据的基类
/// </summary>
public class DBObject  : DBBase
{
    public string uuid = default(string);
}

/// <summary>
///  分库分表数据的基类
/// </summary>
public class ShardDBObject  : DBBase
{
    public string uuid = default(string);
    public long entityId = default(long);
}

public class UsrData  : ShardDBObject
{
    /// <summary>
    ///  玩家名字
    /// </summary>
    public string usrName = default(string);
    /// <summary>
    ///  渠道代码
    /// </summary>
    public string channel = default(string);
    /// <summary>
    ///  注册时间 unix时间戳
    /// </summary>
    public long registerTime = default(long);
    /// <summary>
    ///  注册IP
    /// </summary>
    public string registerIP = default(string);
    /// <summary>
    ///  次登录时间 unix时间戳
    /// </summary>
    public long lastLoginTime = default(long);
    /// <summary>
    ///  上次登录IP
    /// </summary>
    public string lastLoginIP = default(string);
    /// <summary>
    ///  玩家状态
    /// </summary>
    public EUsrState usrState = 0;
    /// <summary>
    ///  状态注释
    /// </summary>
    public string usrRemark = default(string);
    /// <summary>
    ///  冻结的到期时间 0是永久冻结 unix时间戳
    /// </summary>
    public long usrFreezeTime = default(long);
}

public class RoomInfo 
{
    /// <summary>
    ///  房间ID
    /// </summary>
    public int roomId = default(int);
    /// <summary>
    ///  房间所在楼层
    /// </summary>
    public int floor = default(int);
}

public class GameInfo  : ShardDBObject
{
    /// <summary>
    ///  玩家名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  头像id
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public EUserSex sex = 0;
    /// <summary>
    ///  等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  粉丝数量
    /// </summary>
    public long fans = default(long);
    /// <summary>
    ///  奖杯数量
    /// </summary>
    public int cup = default(int);
    /// <summary>
    ///  比赛档次
    /// </summary>
    public int stall = default(int);
    /// <summary>
    ///  vip等级
    /// </summary>
    public int vipLevel = default(int);
    /// <summary>
    ///  vip经验
    /// </summary>
    public long vipExp = default(long);
    /// <summary>
    ///  扩建的楼层
    /// </summary>
    public int extendFloor = default(int);
    /// <summary>
    ///  建造的房间信息
    /// </summary>
    public List<RoomInfo> buildRoomInfo = default(List<RoomInfo>);
    /// <summary>
    ///  最大艺人数
    /// </summary>
    public int maxActor = default(int);
    /// <summary>
    ///  最大隐藏艺人数
    /// </summary>
    public int maxHideActor = default(int);
    /// <summary>
    ///  查探次数
    /// </summary>
    public int noseIntoNum = default(int);
    /// <summary>
    ///  查探时间
    /// </summary>
    public long noseIntoTime = default(long);
    /// <summary>
    ///  查探次数,时间重置时间
    /// </summary>
    public long resetNoseIntoTime = default(long);
    /// <summary>
    ///  查探的艺人生效时间
    /// </summary>
    public long noseIntoActorEffectTime = default(long);
    /// <summary>
    ///  查探的艺人ID
    /// </summary>
    public List<int> noseIntoActorList = default(List<int>);
    /// <summary>
    ///  期待值
    /// </summary>
    public int expected = default(int);
    /// <summary>
    ///  今日公司培养次数
    /// </summary>
    public int daysCultivateCount = default(int);
    /// <summary>
    ///  每日重置时间
    /// </summary>
    public long resetDaysCultivateCountTime = default(long);
    /// <summary>
    ///  日常任务更新时间
    /// </summary>
    public long dailyTaskUpdateTime = default(long);
    /// <summary>
    ///  成就任务更新时间
    /// </summary>
    public long achievementTaskUpdateTime = default(long);
    /// <summary>
    ///  商城每日限购更新时间
    /// </summary>
    public long mallLimitDailyUpdateTime = default(long);
    /// <summary>
    ///  商城每周限购更新时间
    /// </summary>
    public long mallLimitWeeklyUpdateTime = default(long);
    /// <summary>
    ///  搜罗次数
    /// </summary>
    public int findStoryTime = default(int);
    /// <summary>
    ///  上次搜罗时间
    /// </summary>
    public long lastTimeFindStory = default(long);
    /// <summary>
    ///  上次夸天重置时间
    /// </summary>
    public long lastResetTime = default(long);
    /// <summary>
    ///  院线信息
    /// </summary>
    public List<int> theaterIds = default(List<int>);
    /// <summary>
    ///  上次领取街区奖励的时间
    /// </summary>
    public long lastGetStreetRewardTimt = default(long);
    /// <summary>
    ///  上次祝贺总票房时间
    /// </summary>
    public long lastSendGroupRankListTime = default(long);
    /// <summary>
    ///  上次祝贺最高票房时间
    /// </summary>
    public long lastSendGroupMovieRankListTime = default(long);
    /// <summary>
    ///  祝贺次数
    /// </summary>
    public int sendGroupRankListTimes = default(int);
    /// <summary>
    ///  初始化选择艺人id
    /// </summary>
    public int initActorId = default(int);
}

public class GameInfoExt  : ShardDBObject
{
    /// <summary>
    ///  个性签名
    /// </summary>
    public string perSignature = default(string);
    /// <summary>
    ///  拍摄过的电影数
    /// </summary>
    public int totalFilm = default(int);
    /// <summary>
    ///  票房总数
    /// </summary>
    public long numBoxOffice = default(long);
    /// <summary>
    ///  订单总数
    /// </summary>
    public int numOrders = default(int);
    /// <summary>
    ///  最高档生产线
    /// </summary>
    public int numProductionLine = default(int);
    /// <summary>
    ///  公务次数
    /// </summary>
    public int numOfficialBusiness = default(int);
    /// <summary>
    ///  会议次数
    /// </summary>
    public int numMeeting = default(int);
    /// <summary>
    ///  拜访次数
    /// </summary>
    public int numVisit = default(int);
    /// <summary>
    ///  分组第一次数
    /// </summary>
    public int numGroupBest = default(int);
    /// <summary>
    ///  获得最佳艺术指导奖次数
    /// </summary>
    public int numBestArtDirection = default(int);
    /// <summary>
    ///  获得最佳表演奖次数
    /// </summary>
    public int numBestPerformer = default(int);
    /// <summary>
    ///  获得最受欢迎奖次数
    /// </summary>
    public int numBestPublicPraise = default(int);
    /// <summary>
    ///  获得金橄榄奖次数
    /// </summary>
    public int numGoldenOliveAward = default(int);
    /// <summary>
    ///  最高口碑
    /// </summary>
    public int bestWordOfMouth = default(int);
    /// <summary>
    ///  口碑最高的电影
    /// </summary>
    public string bestWordOfMouthFilm = default(string);
    /// <summary>
    ///  最高票房
    /// </summary>
    public long bestBoxOffice = default(long);
    /// <summary>
    ///  票房最高的电影
    /// </summary>
    public string bestBoxOfficeFilm = default(string);
    /// <summary>
    ///  叙事片数量
    /// </summary>
    public int numNarrativeFilm = default(int);
    /// <summary>
    ///  动作片数量
    /// </summary>
    public int numActionFilm = default(int);
    /// <summary>
    ///  爱情片数量
    /// </summary>
    public int numAffectionalFilm = default(int);
    /// <summary>
    ///  动画片数量
    /// </summary>
    public int numCartoonFilm = default(int);
    /// <summary>
    ///  喜剧片数量
    /// </summary>
    public int numComedyFilm = default(int);
    /// <summary>
    ///  歌舞片数量
    /// </summary>
    public int numMusicalFilm = default(int);
    /// <summary>
    ///  恐怖片数量
    /// </summary>
    public int numHorrorFilm = default(int);
    /// <summary>
    ///  悬疑片数量
    /// </summary>
    public int numSuspense = default(int);
    /// <summary>
    ///  头像ID列表
    /// </summary>
    public List<int> portraitList = default(List<int>);
}

public class ItemDesc 
{
    /// <summary>
    ///  配置表id
    /// </summary>
    public int itemId = default(int);
    /// <summary>
    ///  奖励物品数量
    /// </summary>
    public long amount = default(long);
}

public class GMMsgLog  : ShardDBObject
{
    public int messageId = default(int);
    public EPublishTypeCode publishTypeCode = 0;
    /// <summary>
    ///  接受次数
    /// </summary>
    public int receiveCount = default(int);
    /// <summary>
    ///  unix时间戳
    /// </summary>
    public long receiveTime = default(long);
}

public class OrderData  : DBObject
{
    public long entityId = default(long);
    /// <summary>
    ///  订单号
    /// </summary>
    public long orderId = default(long);
    /// <summary>
    ///  三方订单id
    /// </summary>
    public string outerOrderId = default(string);
    /// <summary>
    ///  商品编号
    /// </summary>
    public string productId = default(string);
    /// <summary>
    ///  商品数量
    /// </summary>
    public int productNum = default(int);
    /// <summary>
    ///  unix时间戳
    /// </summary>
    public long createTime = default(long);
    /// <summary>
    ///  unix时间戳 (收到第三方支付系统成功支付的回调的时间)
    /// </summary>
    public long paymentTime = default(long);
    /// <summary>
    ///  处理次数
    /// </summary>
    public int handleCount = default(int);
}

public class Notice 
{
    /// <summary>
    ///  标题
    /// </summary>
    public string title = default(string);
    /// <summary>
    ///  内容
    /// </summary>
    public string content = default(string);
    public string messageDetailUrl = default(string);
    /// <summary>
    ///  奖励列表
    /// </summary>
    public List<ItemDesc> itemList = default(List<ItemDesc>);
}

public class MailDesc 
{
    /// <summary>
    ///  标题
    /// </summary>
    public string title = default(string);
    /// <summary>
    ///  内容
    /// </summary>
    public string content = default(string);
    /// <summary>
    ///  奖励列表
    /// </summary>
    public List<ItemDesc> itemList = default(List<ItemDesc>);
    /// <summary>
    ///  创建时间
    /// </summary>
    public long createTime = default(long);
    /// <summary>
    ///  过期时间
    /// </summary>
    public long endTime = default(long);
    public bool IsRewardGot = default(bool);
    /// <summary>
    ///  是否是新邮件
    /// </summary>
    public bool isNew = default(bool);
}

public class ItemData  : ShardDBObject
{
    /// <summary>
    ///  对应的策划表id
    /// </summary>
    public int itemId = default(int);
    /// <summary>
    ///  物品的数量
    /// </summary>
    public long amount = default(long);
    /// <summary>
    ///  创建(获得)时间
    /// </summary>
    public long createTime = default(long);
}

public class StorySuitData  : ShardDBObject
{
    /// <summary>
    ///  剧本套id
    /// </summary>
    public int storySuitId = default(int);
    /// <summary>
    ///  集齐剧本进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  剧本目标进度
    /// </summary>
    public int progress2 = default(int);
    /// <summary>
    ///  状态
    /// </summary>
    public int status = default(int);
}

public class StoryData  : ShardDBObject
{
    /// <summary>
    ///  剧本id
    /// </summary>
    public int storyId = default(int);
    /// <summary>
    ///  每个剧本所要达成的目标列表
    /// </summary>
    public List<StoryProgress> storyProgressInfo = default(List<StoryProgress>);
    /// <summary>
    ///  状态
    /// </summary>
    public int status = default(int);
    /// <summary>
    ///  进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  最高票房
    /// </summary>
    public long maxScore = default(long);
    /// <summary>
    ///  上次拍摄时间
    /// </summary>
    public long shootLastTime = default(long);
}

public class StoryProgress 
{
    /// <summary>
    ///  1拍摄剧本 2媒体评分 3票房大卖以上
    /// </summary>
    public int id = default(int);
    /// <summary>
    ///  进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  是否完成
    /// </summary>
    public int status = default(int);
}

public class Assets 
{
    /// <summary>
    ///  赠送的类型
    /// </summary>
    public int giveType = default(int);
    /// <summary>
    ///  赠送的等级
    /// </summary>
    public int giveLevel = default(int);
    /// <summary>
    ///  赠送的物品
    /// </summary>
    public List<ItemDesc> giveItemList = default(List<ItemDesc>);
    /// <summary>
    ///  额外赠送物品上限
    /// </summary>
    public int extraGiveACLimit = default(int);
}

public class shootInfo 
{
    /// <summary>
    ///  拍摄类型
    /// </summary>
    public int type = default(int);
    /// <summary>
    ///  熟练经验
    /// </summary>
    public int proficiencyExp = default(int);
    /// <summary>
    ///  熟练等级
    /// </summary>
    public int proficiencyLevel = default(int);
}

public class skillTriggerCondition 
{
    /// <summary>
    ///  触发条件类型
    /// </summary>
    public int type = default(int);
    /// <summary>
    ///  触发条件数值
    /// </summary>
    public int value = default(int);
}

public class skillInfo 
{
    /// <summary>
    ///  技能ID
    /// </summary>
    public int skillId = default(int);
    /// <summary>
    ///  是否生效
    /// </summary>
    public bool isEffect = default(bool);
    /// <summary>
    ///  触发技能的条件,多个条件，有一个满足就生效
    /// </summary>
    public List<skillTriggerCondition> triggerCondition = default(List<skillTriggerCondition>);
}

public class ActorData  : ShardDBObject
{
    /// <summary>
    ///  艺人id
    /// </summary>
    public int actorId = default(int);
    /// <summary>
    ///  艺人名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  是否雪藏
    /// </summary>
    public bool hide = default(bool);
    /// <summary>
    ///  等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  等级进度
    /// </summary>
    public long levelExp = default(long);
    /// <summary>
    ///  片酬
    /// </summary>
    public long payCheck = default(long);
    /// <summary>
    ///  体力
    /// </summary>
    public int stamina = default(int);
    /// <summary>
    ///  体力上限
    /// </summary>
    public int staminaLimit = default(int);
    /// <summary>
    ///  忠诚度经验
    /// </summary>
    public int LoyaltyExp = default(int);
    /// <summary>
    ///  忠诚度等级
    /// </summary>
    public int LoyaltyLevel = default(int);
    /// <summary>
    ///  培养次数
    /// </summary>
    public int cultivateCount = default(int);
    /// <summary>
    ///  培养次数上限
    /// </summary>
    public int cultivateCountLimit = default(int);
    /// <summary>
    ///  赠送资产次数
    /// </summary>
    public int giveAssetsCount = default(int);
    /// <summary>
    ///  赠送资产次数上限
    /// </summary>
    public int giveAssetsCountLimit = default(int);
    /// <summary>
    ///  赠送资产列表
    /// </summary>
    public List<Assets> giveAssetsList = default(List<Assets>);
    /// <summary>
    ///  技能经验
    /// </summary>
    public int skillExp = default(int);
    /// <summary>
    ///  技能信息列表
    /// </summary>
    public List<skillInfo> skillList = default(List<skillInfo>);
    /// <summary>
    ///  拍摄类型熟练度
    /// </summary>
    public List<shootInfo> shootTypeList = default(List<shootInfo>);
    /// <summary>
    ///  场面属性
    /// </summary>
    public int spectacle = default(int);
    /// <summary>
    ///  表演属性
    /// </summary>
    public int perform = default(int);
    /// <summary>
    ///  剧情属性
    /// </summary>
    public int plot = default(int);
    /// <summary>
    ///  艺术属性
    /// </summary>
    public int art = default(int);
    /// <summary>
    ///  参与拍摄票房影响力总和
    /// </summary>
    public long boxOfficeCount = default(long);
    /// <summary>
    ///  获取奖杯数量
    /// </summary>
    public int cupCount = default(int);
    /// <summary>
    ///  拍摄电影次数
    /// </summary>
    public int movieCount = default(int);
    /// <summary>
    ///  娱乐属性
    /// </summary>
    public int entertainment = default(int);
    /// <summary>
    ///  生产线id
    /// </summary>
    public int produceId = default(int);
    /// <summary>
    ///  助理信息
    /// </summary>
    public List<AssistantInfo> assistantInfos = default(List<AssistantInfo>);
}

public class AssistantInfo 
{
    /// <summary>
    ///  助理id  1 2 3 4
    /// </summary>
    public int id = default(int);
    /// <summary>
    ///  助理等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  增加的艺人标签
    /// </summary>
    public int actorSign = default(int);
}

public class CityData  : ShardDBObject
{
    /// <summary>
    ///  最后一个城市
    /// </summary>
    public int lastCity = default(int);
    /// <summary>
    ///  总部城市
    /// </summary>
    public int headquarters = default(int);
    /// <summary>
    ///  形象大使
    /// </summary>
    public List<int> ambassador = default(List<int>);
    /// <summary>
    ///  金币上限
    /// </summary>
    public long maxGold = default(long);
    /// <summary>
    ///  粉丝上限
    /// </summary>
    public long maxFans = default(long);
    /// <summary>
    ///  金币掉落速度
    /// </summary>
    public long speedGold = default(long);
    /// <summary>
    ///  粉丝掉落速度
    /// </summary>
    public long speedFans = default(long);
    /// <summary>
    ///  上次更新掉落的金币
    /// </summary>
    public long lastGold = default(long);
    /// <summary>
    ///  上次更新掉落的粉丝
    /// </summary>
    public long lastFans = default(long);
    /// <summary>
    ///  上次更新掉落的时间戳
    /// </summary>
    public long lastDropTimestamp = default(long);
    /// <summary>
    ///  上次结算时间
    /// </summary>
    public long lastTime = default(long);
    /// <summary>
    ///  掉落列表
    /// </summary>
    public List<ItemDesc> dropList = default(List<ItemDesc>);
    /// <summary>
    ///  当前宣传的地区
    /// </summary>
    public int lastArea = default(int);
    /// <summary>
    ///  当前宣传进度
    /// </summary>
    public int lastAreaProgress = default(int);
    /// <summary>
    ///  宣传大使
    /// </summary>
    public int propagandaActor = default(int);
    /// <summary>
    ///  路演成功标记
    /// </summary>
    public bool roadShowFlag = default(bool);
}

public class skillEffectInfo 
{
    /// <summary>
    ///  技能ID
    /// </summary>
    public int actId = default(int);
    /// <summary>
    ///  增加的数值%
    /// </summary>
    public float value = default(float);
}

public class ActorSkillEffect  : ShardDBObject
{
    /// <summary>
    ///  获得金币速度
    /// </summary>
    public float getGoldSpeed = default(float);
    /// <summary>
    ///  生产线收益
    /// </summary>
    public float productionEarnings = default(float);
    /// <summary>
    ///  演员片酬
    /// </summary>
    public List<skillEffectInfo> actorPaycheck = default(List<skillEffectInfo>);
    /// <summary>
    ///  收益票房
    /// </summary>
    public List<skillEffectInfo> boxOfficeEarnings = default(List<skillEffectInfo>);
    /// <summary>
    ///  城市获取金币时间
    /// </summary>
    public float cityGetGoldTime = default(float);
    /// <summary>
    ///  升级金币消耗
    /// </summary>
    public List<skillEffectInfo> upgradeGoldCost = default(List<skillEffectInfo>);
    /// <summary>
    ///  拍摄时全属性增加
    /// </summary>
    public List<skillEffectInfo> shootTotalAttrIncrease = default(List<skillEffectInfo>);
}

public class TempData  : ShardDBObject
{
    /// <summary>
    ///  上次重置时间
    /// </summary>
    public long lastResetTime = default(long);
}

public class MovieData  : ShardDBObject
{
    /// <summary>
    ///  电影id
    /// </summary>
    public int movieId = default(int);
    /// <summary>
    ///  电影名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  当前状态
    /// </summary>
    public EMovieState state = 0;
    /// <summary>
    ///  艺人选择 / 剧本选择
    /// </summary>
    public List<int> data = default(List<int>);
    /// <summary>
    ///  电影成本
    /// </summary>
    public List<long> movieCost = default(List<long>);
    /// <summary>
    ///  市场期待
    /// </summary>
    public List<int> expected = default(List<int>);
    /// <summary>
    ///  战斗过程
    /// </summary>
    public List<BattleData> battleData = default(List<BattleData>);
    /// <summary>
    ///  战斗过程
    /// </summary>
    public List<BattleData> battleDataEx = default(List<BattleData>);
    /// <summary>
    ///  拍摄类型
    /// </summary>
    public int type = default(int);
    /// <summary>
    ///  艺人熟练度增加经验
    /// </summary>
    public List<int> actorShootType = default(List<int>);
    /// <summary>
    ///  是否疲劳
    /// </summary>
    public bool isTired = default(bool);
    /// <summary>
    ///  是否领取剧本奖励
    /// </summary>
    public bool isGetStoryGoals = default(bool);
    /// <summary>
    ///  媒体访问
    /// </summary>
    public List<MediaVisitDesc> mediaVisit = default(List<MediaVisitDesc>);
    /// <summary>
    ///  期待值
    /// </summary>
    public int mExpected = default(int);
    /// <summary>
    ///  平均媒体评价
    /// </summary>
    public int mediaCommend = default(int);
    /// <summary>
    ///  媒体评价
    /// </summary>
    public List<int> mediaCommendArr = default(List<int>);
    /// <summary>
    ///  媒体评价获得的点赞数
    /// </summary>
    public int praise = default(int);
    /// <summary>
    ///  首映票房
    /// </summary>
    public long premiereBoxOffice = default(long);
    /// <summary>
    ///  额外票房
    /// </summary>
    public long extBoxOffice = default(long);
    /// <summary>
    ///  观众口碑
    /// </summary>
    public int publicPraise = default(int);
    /// <summary>
    ///  上映天数
    /// </summary>
    public List<long> runDays = default(List<long>);
    /// <summary>
    ///  总票房
    /// </summary>
    public long totalBoxOffice = default(long);
    /// <summary>
    ///  总成本
    /// </summary>
    public long totalMovieCost = default(long);
    /// <summary>
    ///  评价系数
    /// </summary>
    public int evaluationCon = default(int);
    /// <summary>
    ///  依次对应5种属性结果, 场面, 表演, 剧情, 艺术, 娱乐
    /// </summary>
    public List<int> attribute = default(List<int>);
    /// <summary>
    ///  5种属性最大值, 场面, 表演, 剧情, 艺术, 娱乐
    /// </summary>
    public List<int> maxAttribute = default(List<int>);
    /// <summary>
    ///  5种属性平均值, 场面, 表演, 剧情, 艺术, 娱乐
    /// </summary>
    public List<int> avrAttribute = default(List<int>);
    /// <summary>
    ///  随机次数
    /// </summary>
    public int dropCount = default(int);
    /// <summary>
    ///  票房评价
    /// </summary>
    public EBoxOfficeEvaluation boxOfficeEvaluation = 0;
    /// <summary>
    ///  推广城市id
    /// </summary>
    public int extendCity = default(int);
    /// <summary>
    ///  推广关注度
    /// </summary>
    public int attentionValue = default(int);
    /// <summary>
    ///  推广关注度进度
    /// </summary>
    public int attentionProgress = default(int);
    /// <summary>
    ///  掉落物品
    /// </summary>
    public List<ItemDesc> dropItemList = default(List<ItemDesc>);
    /// <summary>
    ///  持续收益
    /// </summary>
    public long contineTransceiver = default(long);
    /// <summary>
    ///  开始时间戳
    /// </summary>
    public long startTime = default(long);
    /// <summary>
    ///  上次操作时间
    /// </summary>
    public long lastTime = default(long);
}

public class BattleData 
{
    /// <summary>
    ///  艺人id
    /// </summary>
    public int actorId = default(int);
    /// <summary>
    ///  属性id
    /// </summary>
    public int propertyId = default(int);
    /// <summary>
    ///  属性值
    /// </summary>
    public int value = default(int);
}

public class CityGainsInfo 
{
    /// <summary>
    ///  物品ID
    /// </summary>
    public int itemId = default(int);
    /// <summary>
    ///  速度
    /// </summary>
    public long speed = default(long);
    /// <summary>
    ///  上限
    /// </summary>
    public long limit = default(long);
    /// <summary>
    ///  基础值
    /// </summary>
    public long baseNum = default(long);
}

public class MediaVisitDesc 
{
    /// <summary>
    ///  媒体id
    /// </summary>
    public int mediaId = default(int);
    /// <summary>
    ///  媒体等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  是否接受
    /// </summary>
    public bool bAccept = default(bool);
}

/// <summary>
///  经营订单
/// </summary>
public class ManageOrderData  : ShardDBObject
{
    /// <summary>
    ///  经营订单ID
    /// </summary>
    public int orderId = default(int);
    /// <summary>
    ///  已经塞入的物品
    /// </summary>
    public List<OrderItems> items = default(List<OrderItems>);
    /// <summary>
    ///  订单位置信息
    /// </summary>
    public int position = default(int);
    /// <summary>
    ///  订单开始时间
    /// </summary>
    public long lastTime = default(long);
    /// <summary>
    ///  是否是删除订单 true表示被删除了
    /// </summary>
    public bool delFlag = default(bool);
}

public class OrderItems 
{
    public int itemId = default(int);
    public long amount = default(long);
    /// <summary>
    ///  自己放的为0 好友帮忙的是好友的头像
    /// </summary>
    public int portrait = default(int);
}

public class ProgressBoxData  : ShardDBObject
{
    /// <summary>
    ///  模块ID 读取enum.json里 
    /// </summary>
    public int moduleId = default(int);
    /// <summary>
    ///  宝箱进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  领取宝箱状态
    /// </summary>
    public int staus = default(int);
    /// <summary>
    ///  上次领取时间
    /// </summary>
    public long lastTime = default(long);
}

/// <summary>
///  经营生产
/// </summary>
public class ManageProduceData  : ShardDBObject
{
    /// <summary>
    ///  生产ID
    /// </summary>
    public int produceId = default(int);
    /// <summary>
    ///  已经生产了多少个
    /// </summary>
    public int hadNum = default(int);
    /// <summary>
    ///  派遣的艺人ID
    /// </summary>
    public int actId = default(int);
    /// <summary>
    ///  生产线等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  生产技能列表
    /// </summary>
    public List<SkillLevel> skills = default(List<SkillLevel>);
    /// <summary>
    ///  生产倍数
    /// </summary>
    public List<int> randomNums = default(List<int>);
    /// <summary>
    ///  排队生产多少个
    /// </summary>
    public int produceNum = default(int);
    /// <summary>
    ///  开始生产时间
    /// </summary>
    public long lastTime = default(long);
    /// <summary>
    ///  领取的时候清零，方便合作任务计算生产次数
    /// </summary>
    public long hadProduceTimes = default(long);
}

public class SkillLevel 
{
    /// <summary>
    ///  技能ID 1队列数量 2 储存上限 3 生产时长 4 每次产出
    /// </summary>
    public int skillId = default(int);
    /// <summary>
    ///  技能等级
    /// </summary>
    public int level = default(int);
}

public class AttrChangeInfo 
{
    /// <summary>
    ///  属性id
    /// </summary>
    public int attrId = default(int);
    /// <summary>
    ///  改变的值
    /// </summary>
    public int value = default(int);
}

public class MovieLicenceResetTimeData  : ShardDBObject
{
    /// <summary>
    ///  上次刷新时间
    /// </summary>
    public long lastResetTime = default(long);
    /// <summary>
    ///  当天恢复数量
    /// </summary>
    public int dailyCount = default(int);
    /// <summary>
    ///  上次恢复时间
    /// </summary>
    public long lastUpdateTime = default(long);
    /// <summary>
    ///  当前cd值
    /// </summary>
    public int cd = default(int);
}

/// <summary>
///  经营公务
/// </summary>
public class ManageBusinessData  : ShardDBObject
{
    /// <summary>
    ///  公务ID
    /// </summary>
    public int businessId = default(int);
    /// <summary>
    ///  当天阅读次数
    /// </summary>
    public int dailyCount = default(int);
    /// <summary>
    ///  公务队列上限
    /// </summary>
    public int lineLimit = default(int);
    /// <summary>
    ///  上次恢复时间
    /// </summary>
    public long lastUpdateTime = default(long);
    /// <summary>
    ///  上次刷新时间
    /// </summary>
    public long lastResetTime = default(long);
}

/// <summary>
///  经营探班
/// </summary>
public class ManageVisitData  : ShardDBObject
{
    /// <summary>
    ///  探班ID
    /// </summary>
    public int visitId = default(int);
    /// <summary>
    ///  艺人ID
    /// </summary>
    public int actId = default(int);
    /// <summary>
    ///  开始探班的时间
    /// </summary>
    public long startTime = default(long);
    /// <summary>
    ///  探班队列刷新时间
    /// </summary>
    public long lastTime = default(long);
    /// <summary>
    ///  探班队列上限
    /// </summary>
    public int lineLimit = default(int);
    /// <summary>
    ///  间隔时间
    /// </summary>
    public long intervalTime = default(long);
    /// <summary>
    ///  是否正处于接待
    /// </summary>
    public bool isReceptior = default(bool);
}

public class StoryMessageDesc 
{
    /// <summary>
    ///  玩家名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  玩家id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  头像id
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public EUserSex sex = 0;
    /// <summary>
    ///  玩家等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  留言时间
    /// </summary>
    public long timestamp = default(long);
    /// <summary>
    ///  信息
    /// </summary>
    public string message = default(string);
}

public class StoryMessage  : DBObject
{
    public int storyId = default(int);
    public List<StoryMessageDesc> message = default(List<StoryMessageDesc>);
}

public class ActorShortDesc 
{
    public int actorId = default(int);
    public string name = default(string);
}

public class MovieShortData 
{
    /// <summary>
    ///  id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  电影唯一id(MovieData.uuid)
    /// </summary>
    public string uuid = default(string);
    /// <summary>
    ///  电影id
    /// </summary>
    public int movieId = default(int);
    /// <summary>
    ///  电影名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  艺人选择 / 剧本选择
    /// </summary>
    public List<ActorShortDesc> data = default(List<ActorShortDesc>);
    /// <summary>
    ///  拍摄类型
    /// </summary>
    public int type = default(int);
    /// <summary>
    ///  票房
    /// </summary>
    public long totalBoxOffice = default(long);
    /// <summary>
    ///  票房等级评价
    /// </summary>
    public int boxOfficeEvaluation = default(int);
    /// <summary>
    ///  平均媒体评价
    /// </summary>
    public int mediaCommend = default(int);
    /// <summary>
    ///  观众口碑
    /// </summary>
    public int publicPraise = default(int);
}

public class BestMovieDesc 
{
    /// <summary>
    ///  uuid
    /// </summary>
    public string movieUuid = default(string);
    /// <summary>
    ///  电影id
    /// </summary>
    public int movieId = default(int);
    /// <summary>
    ///  电影名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  总票房
    /// </summary>
    public long totalBoxOffice = default(long);
    /// <summary>
    ///  票房等级评价
    /// </summary>
    public int boxOfficeEvaluation = default(int);
}

public class PlayerShortData 
{
    /// <summary>
    ///  id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  头像id
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public EUserSex sex = 0;
    /// <summary>
    ///  名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  等级
    /// </summary>
    public int level = default(int);
    /// <summary>
    ///  街区等级
    /// </summary>
    public int blockLevel = default(int);
    /// <summary>
    ///  个性签名
    /// </summary>
    public string perSignature = default(string);
    /// <summary>
    ///  时长占领
    /// </summary>
    public int city = default(int);
    /// <summary>
    ///  艺人数量
    /// </summary>
    public int numActor = default(int);
    /// <summary>
    ///  建筑层数
    /// </summary>
    public int numBuilding = default(int);
    /// <summary>
    ///  票房评价对应次数
    /// </summary>
    public List<int> boxOfficeEvaluation = default(List<int>);
    /// <summary>
    ///  每日票房最佳 uuid
    /// </summary>
    public string dailyBestMovie = default(string);
    /// <summary>
    ///  票房前三
    /// </summary>
    public List<BestMovieDesc> bestMovie = default(List<BestMovieDesc>);
}

public class ServerListDesc 
{
    /// <summary>
    ///  头像id
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public EUserSex sex = 0;
    /// <summary>
    ///  名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  id
    /// </summary>
    public int userId = default(int);
    public string movieUuid = default(string);
    /// <summary>
    ///  电影id
    /// </summary>
    public int movieId = default(int);
    public string movieName = default(string);
    /// <summary>
    ///  总票房
    /// </summary>
    public long totalBoxOffice = default(long);
}

public class GroupListDesc 
{
    /// <summary>
    ///  头像id
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public EUserSex sex = 0;
    /// <summary>
    ///  名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  总票房
    /// </summary>
    public long totalBoxOffice = default(long);
}

public class GroupMovieListDesc 
{
    /// <summary>
    ///  名字
    /// </summary>
    public string name = default(string);
    public string movieUuid = default(string);
    /// <summary>
    ///  电影id
    /// </summary>
    public int movieId = default(int);
    /// <summary>
    ///  电影名字
    /// </summary>
    public string movieName = default(string);
    /// <summary>
    ///  id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  总票房
    /// </summary>
    public long totalBoxOffice = default(long);
}

public class SelfRankListDesc 
{
    /// <summary>
    ///  全服排名
    /// </summary>
    public int MainRank = default(int);
    /// <summary>
    ///  分组总排行排名
    /// </summary>
    public int groupList = default(int);
    /// <summary>
    ///  服务器名称
    /// </summary>
    public string serverName = default(string);
}

public class RankListData  : DBObject
{
    public long entityId = default(long);
    /// <summary>
    ///  服务器id
    /// </summary>
    public int serverId = default(int);
    /// <summary>
    ///  服务器唯一id
    /// </summary>
    public string serverUuid = default(string);
    /// <summary>
    ///  分组id
    /// </summary>
    public int groupId = default(int);
    /// <summary>
    ///  昨天的街区分组
    /// </summary>
    public int lastGroupId = default(int);
    /// <summary>
    ///  昨日排名
    /// </summary>
    public int lastRank = default(int);
    /// <summary>
    ///  上周排名
    /// </summary>
    public int lastWeakRank = default(int);
    /// <summary>
    ///  建造宣传部的时间
    /// </summary>
    public long propaganda_department = default(long);
    /// <summary>
    ///  是否领取昨日奖励
    /// </summary>
    public bool isGetLastReward = default(bool);
    /// <summary>
    ///  是否修改过服务器名字
    /// </summary>
    public bool isChangeServerName = default(bool);
    /// <summary>
    ///  大卖电影数量
    /// </summary>
    public int big_sell = default(int);
    /// <summary>
    ///  最高总票房
    /// </summary>
    public long totalBoxOffice = default(long);
    /// <summary>
    ///  最高总票房排名
    /// </summary>
    public int totalBoxOfficeRank = default(int);
    /// <summary>
    ///  历史总票房最佳
    /// </summary>
    public int historyBestTotalBoxOffice = default(int);
    /// <summary>
    ///  历史总票房最佳排名
    /// </summary>
    public int historyBestTotalBoxOfficeRank = default(int);
    /// <summary>
    ///  历史最佳的街区
    /// </summary>
    public int historyBestTotalBexOfficeBlockLevel = default(int);
    /// <summary>
    ///  当前街区玩家人数
    /// </summary>
    public int historyBestTotalBexOfficeTotal = default(int);
    /// <summary>
    ///  是否新记录
    /// </summary>
    public bool historyIsNew = default(bool);
    /// <summary>
    ///  电影拍摄数量
    /// </summary>
    public int movies = default(int);
    /// <summary>
    ///  最高票房
    /// </summary>
    public long bestBoxOffice = default(long);
    /// <summary>
    ///  最高票房电影
    /// </summary>
    public string bestBoxOfficeName = default(string);
    /// <summary>
    ///  最高票房排名
    /// </summary>
    public int bestBoxOfficeRank = default(int);
    /// <summary>
    ///  奖励领取标记
    /// </summary>
    public List<int> rewardFlags = default(List<int>);
    /// <summary>
    ///  是否当天第一次获取
    /// </summary>
    public bool isNew = default(bool);
}

/// <summary>
///  任务结构
/// </summary>
public class TaskData  : ShardDBObject
{
    /// <summary>
    ///  对应的策划表id
    /// </summary>
    public int cid = default(int);
    /// <summary>
    ///  任务类型
    /// </summary>
    public EAchievementType type = 0;
    /// <summary>
    ///  完成进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  成就或任务状态
    /// </summary>
    public EAchievementState state = 0;
}

/// <summary>
///  单个商品限购数据
/// </summary>
public class MallItemLimitData  : ShardDBObject
{
    /// <summary>
    ///  商品id
    /// </summary>
    public int id = default(int);
    /// <summary>
    ///  限购类型
    /// </summary>
    public EMallItemLimitType type = 0;
    /// <summary>
    ///  已经购买的个数
    /// </summary>
    public int amount = default(int);
}

public class MailData  : ShardDBObject
{
    /// <summary>
    ///  标题
    /// </summary>
    public string title = default(string);
    /// <summary>
    ///  内容
    /// </summary>
    public string content = default(string);
    /// <summary>
    ///  奖励列表
    /// </summary>
    public List<ItemDesc> itemList = default(List<ItemDesc>);
    /// <summary>
    ///  创建时间
    /// </summary>
    public long createTime = default(long);
    /// <summary>
    ///  过期时间
    /// </summary>
    public long endTime = default(long);
    public bool IsRewardGot = default(bool);
    /// <summary>
    ///  是否是新邮件
    /// </summary>
    public bool isNew = default(bool);
}

/// <summary>
///  经营会议
/// </summary>
public class ManageMeetingData  : ShardDBObject
{
    /// <summary>
    ///  会议ID
    /// </summary>
    public int meetID = default(int);
    /// <summary>
    ///  选择的随机结果
    /// </summary>
    public int randResult = default(int);
    /// <summary>
    ///  会议队列刷新时间
    /// </summary>
    public long lastTime = default(long);
    /// <summary>
    ///  会议队列上限
    /// </summary>
    public int lineLimit = default(int);
    /// <summary>
    ///  间隔时间
    /// </summary>
    public long intervalTime = default(long);
}

public class DanmuItem 
{
    /// <summary>
    ///  用户 id
    /// </summary>
    public int id = default(int);
    /// <summary>
    ///  用户姓名
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  时间戳
    /// </summary>
    public long time = default(long);
    /// <summary>
    ///  弹幕消息
    /// </summary>
    public string msg = default(string);
}

public class DanmuData  : DBObject
{
    /// <summary>
    ///  弹幕数据
    /// </summary>
    public List<DanmuItem> data = default(List<DanmuItem>);
}

/// <summary>
///  日常签到数据
/// </summary>
public class DailySign  : ShardDBObject
{
    /// <summary>
    ///  签到数
    /// </summary>
    public int count = default(int);
    /// <summary>
    ///  更新时间
    /// </summary>
    public long updateTime = default(long);
}

/// <summary>
///  小秘书功能
/// </summary>
public class SecretaryData  : ShardDBObject
{
    /// <summary>
    ///  秘书存在类型 0 未获取 1终身拥有 2暂时拥有
    /// </summary>
    public ESecretaryType secretaryType = 0;
    /// <summary>
    ///  每个操作对应的次数列表
    /// </summary>
    public List<SecretaryKeyValue> timeList = default(List<SecretaryKeyValue>);
    /// <summary>
    ///  上次更新数据时间
    /// </summary>
    public long lastTime = default(long);
    /// <summary>
    ///  申请次数 
    /// </summary>
    public int applyFrequency = default(int);
    /// <summary>
    ///  上次申请时间
    /// </summary>
    public long applyLastTime = default(long);
    /// <summary>
    ///  是否申请
    /// </summary>
    public bool isApply = default(bool);
}

/// <summary>
///  小秘书列表
/// </summary>
public class SecretaryKeyValue 
{
    public int key = default(int);
    public int value = default(int);
    /// <summary>
    ///  是否开启
    /// </summary>
    public bool isOpen = default(bool);
}

/// <summary>
///  活动期间累计达到某种要求领取奖励
/// </summary>
public class SevenAddUpData  : ShardDBObject
{
    /// <summary>
    ///  活动进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  领取宝箱状态
    /// </summary>
    public int staus = default(int);
    /// <summary>
    ///  上次更新进度时间
    /// </summary>
    public long lastTime = default(long);
}

/// <summary>
///  艺人训练队列
/// </summary>
public class ActortExerciseData  : ShardDBObject
{
    /// <summary>
    ///  训练槽位顺序
    /// </summary>
    public int index = default(int);
    /// <summary>
    ///  艺人 uuid
    /// </summary>
    public string actorUuid = default(string);
    /// <summary>
    ///  开始时间
    /// </summary>
    public long startTime = default(long);
}

public class OscarDesc 
{
    /// <summary>
    ///  艺人id或者剧本id
    /// </summary>
    public int id = default(int);
    /// <summary>
    ///  艺人名字或者剧本名字
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  玩家姓名
    /// </summary>
    public string playerName = default(string);
    /// <summary>
    ///  玩家id
    /// </summary>
    public int userId = default(int);
}

public class OscarData 
{
    /// <summary>
    ///  最佳男艺人提名
    /// </summary>
    public List<OscarDesc> man = default(List<OscarDesc>);
    /// <summary>
    ///  最佳女艺人提名
    /// </summary>
    public List<OscarDesc> woman = default(List<OscarDesc>);
    /// <summary>
    ///  最佳表演提名
    /// </summary>
    public List<OscarDesc> perform = default(List<OscarDesc>);
    /// <summary>
    ///  最佳艺术提名
    /// </summary>
    public List<OscarDesc> art = default(List<OscarDesc>);
    /// <summary>
    ///  最佳口碑提名
    /// </summary>
    public List<OscarDesc> publicPraise = default(List<OscarDesc>);
    /// <summary>
    ///  最佳男艺人下标
    /// </summary>
    public int bestMan = default(int);
    /// <summary>
    ///  最佳女艺人下标
    /// </summary>
    public int bestWoman = default(int);
    /// <summary>
    ///  最佳表演下标
    /// </summary>
    public int bestPerform = default(int);
    /// <summary>
    ///  最佳艺术下标
    /// </summary>
    public int bestArt = default(int);
    /// <summary>
    ///  最佳口碑下标
    /// </summary>
    public int bestPublicPraise = default(int);
    /// <summary>
    ///  街区等级
    /// </summary>
    public int blockLevel = default(int);
}

public class PlayerOscarData 
{
    /// <summary>
    ///  大卖电影数量
    /// </summary>
    public int big_sell = default(int);
    /// <summary>
    ///  电影拍摄数量
    /// </summary>
    public int movies = default(int);
}

public class DailyEventItem 
{
    /// <summary>
    ///  时间
    /// </summary>
    public int time = default(int);
    /// <summary>
    ///  事件的 uuid
    /// </summary>
    public string uuid = default(string);
    /// <summary>
    ///  事件的名称
    /// </summary>
    public string name = default(string);
}

/// <summary>
///  日程事件
/// </summary>
public class DailyEvent  : ShardDBObject
{
    public List<DailyEventItem> data = default(List<DailyEventItem>);
}

/// <summary>
///  引导数据
/// </summary>
public class GuideData  : ShardDBObject
{
    /// <summary>
    ///  引导相关
    /// </summary>
    public List<int> guide = default(List<int>);
    /// <summary>
    ///  剧情相关
    /// </summary>
    public List<int> story = default(List<int>);
}

/// <summary>
///  合作
/// </summary>
public class PlayerCooperateData  : ShardDBObject
{
    /// <summary>
    ///  上次请求时间 
    /// </summary>
    public long lastReqTime = default(long);
    /// <summary>
    ///  上次公开请求时间 
    /// </summary>
    public long lastAutoReqTime = default(long);
    /// <summary>
    ///  领取进度宝箱状态
    /// </summary>
    public int rewardStatus = default(int);
    /// <summary>
    /// 赠送金币的次数
    /// </summary>
    public int giveGoldTime = default(int);
    /// <summary>
    ///  赠送美元的次数
    /// </summary>
    public int giveDollarTime = default(int);
    /// <summary>
    ///  领取时间
    /// </summary>
    public int lastTime = default(int);
}

/// <summary>
///  账号邀请合作数据
/// </summary>
public class AccountCooperateData  : DBObject
{
    /// <summary>
    ///  成为好友的玩家
    /// </summary>
    public string friendEntityId = default(string);
    /// <summary>
    /// 请求他为好友的玩家信息
    /// </summary>
    public List<ApplyInfo> appList = default(List<ApplyInfo>);
    /// <summary>
    ///  一周内合作不同人的次数
    /// </summary>
    public int weekTimes = default(int);
    /// <summary>
    ///  合作时间
    /// </summary>
    public int lastWeek = default(int);
    /// <summary>
    ///  首次合作奖励 true 表示已经领取过
    /// </summary>
    public bool firstCooperate = default(bool);
    /// <summary>
    ///  首次通过账号查找建立合作 true 表示已经领取过
    /// </summary>
    public bool firstACooperate = default(bool);
    public bool isCaptain = default(bool);
    /// <summary>
    ///  false 不需要播放特效，true需要播放 
    /// </summary>
    public bool isRead = default(bool);
}

public class ApplyInfo 
{
    public string entityId = default(string);
    public long lastTime = default(long);
}

/// <summary>
///  公共邀请合作数据
/// </summary>
public class AutoCooperateData  : DBObject
{
    /// <summary>
    ///  申请人
    /// </summary>
    public string applyEntityId = default(string);
    /// <summary>
    ///  申请时间
    /// </summary>
    public long lastTime = default(long);
}

/// <summary>
///  合作任务
/// </summary>
public class CooperateTaskData  : DBObject
{
    public List<Ctask> tasks = default(List<Ctask>);
    /// <summary>
    ///  当前星级
    /// </summary>
    public int currentStar = default(int);
    public int progree = default(int);
    public int lastTime = default(int);
}

public class Ctask 
{
    /// <summary>
    ///  几星任务
    /// </summary>
    public int star = default(int);
    /// <summary>
    ///  星级任务进度
    /// </summary>
    public int progree = default(int);
    public List<StarTask> starTasks = default(List<StarTask>);
}

/// <summary>
///  星级任务
/// </summary>
public class StarTask 
{
    /// <summary>
    ///  任务ID
    /// </summary>
    public int taskid = default(int);
    /// <summary>
    ///  任务类型
    /// </summary>
    public int taskType = default(int);
    /// <summary>
    ///  奖励ID
    /// </summary>
    public int itemId = default(int);
    /// <summary>
    ///  队长奖励物品数量
    /// </summary>
    public int captainItemNum = default(int);
    /// <summary>
    ///  队员奖励物品数量
    /// </summary>
    public int itemNum = default(int);
    /// <summary>
    ///  需要的参数
    /// </summary>
    public List<int> needParam = default(List<int>);
    /// <summary>
    ///  任务进度
    /// </summary>
    public int progress = default(int);
    /// <summary>
    ///  0未完成  1已完成 2领取
    /// </summary>
    public int status = default(int);
    /// <summary>
    ///  协助任务的玩家
    /// </summary>
    public string helpUuid = default(string);
    /// <summary>
    ///  接取任务的玩家
    /// </summary>
    public string receiveUuid = default(string);
}

/// <summary>
///  合作订单
/// </summary>
public class CooperateOrderData  : DBObject
{
    /// <summary>
    ///  订单方
    /// </summary>
    public int entityId = default(int);
    /// <summary>
    ///  头像ID
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  订单唯一ID
    /// </summary>
    public string orderUuid = default(string);
    public int itemId = default(int);
    public long amount = default(long);
    /// <summary>
    ///  放入时间
    /// </summary>
    public long lastTime = default(long);
}

public class PlayerLevelUp 
{
    /// <summary>
    ///  原来的等级
    /// </summary>
    public int old_level = default(int);
    /// <summary>
    ///  现在的等级
    /// </summary>
    public int now_level = default(int);
    /// <summary>
    ///  升级赠送剧本
    /// </summary>
    public List<int> story = default(List<int>);
}

public class GoldExchange 
{
    /// <summary>
    ///  兑换次数
    /// </summary>
    public int count = default(int);
}

public class NewMessageInfo 
{
    /// <summary>
    ///  未读消息的数量
    /// </summary>
    public int num = default(int);
    /// <summary>
    ///  消息类型，user/system
    /// </summary>
    public string type = default(string);
    /// <summary>
    ///  最新一条未读消息
    /// </summary>
    public MessageInfo userMsg = default(MessageInfo);
    /// <summary>
    ///  系统消息
    /// </summary>
    public SystemMessage systemMsg = default(SystemMessage);
}

public class MessageInfo 
{
    /// <summary>
    ///  玩家id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  公司名
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  头像
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public int sex = default(int);
    /// <summary>
    ///  信息id
    /// </summary>
    public int messageId = default(int);
    /// <summary>
    ///  信息
    /// </summary>
    public string message = default(string);
    /// <summary>
    ///  发送时间
    /// </summary>
    public int time = default(int);
}

public class SystemMessage 
{
    /// <summary>
    ///  玩家id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  信息id // 世界频道的消息id
    /// </summary>
    public int messageId = default(int);
    /// <summary>
    ///  信息id //MsgChat表
    /// </summary>
    public int message = default(int);
    /// <summary>
    ///  发送时间
    /// </summary>
    public int time = default(int);
    /// <summary>
    ///  信息详情
    /// </summary>
    public List<FieldInfo> fieldInfo = default(List<FieldInfo>);
}

public class FieldInfo 
{
    public int type = default(int);
    public string text = default(string);
    public string args = default(string);
}

public class PrivateListInfo 
{
    /// <summary>
    ///  房间号
    /// </summary>
    public int roomId = default(int);
    /// <summary>
    ///  玩家id
    /// </summary>
    public int userId = default(int);
    /// <summary>
    ///  公司名
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  头像
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public int sex = default(int);
    /// <summary>
    ///  信息
    /// </summary>
    public MessageInfo message = default(MessageInfo);
    /// <summary>
    ///  新消息的数量
    /// </summary>
    public int newMsgNum = default(int);
}

public class PushMessageInfo 
{
    /// <summary>
    ///  房间号
    /// </summary>
    public int roomId = default(int);
    /// <summary>
    ///  信息
    /// </summary>
    public List<MessageInfo> message = default(List<MessageInfo>);
}

public class RoomMember 
{
    /// <summary>
    ///  成员id
    /// </summary>
    public int member = default(int);
    /// <summary>
    ///  公司名
    /// </summary>
    public string name = default(string);
    /// <summary>
    ///  头像
    /// </summary>
    public int portrait = default(int);
    /// <summary>
    ///  性别
    /// </summary>
    public int sex = default(int);
    /// <summary>
    ///  上一次阅读的消息id
    /// </summary>
    public int lastRead = default(int);
}

public class LevelGiftData  : ShardDBObject
{
    /// <summary>
    ///  等级礼包id
    /// </summary>
    public int giftId = default(int);
}

/// <summary>
///  完成所有引导任务领取奖励
/// </summary>
public class GetGuideReward  : ShardDBObject
{
    /// <summary>
    ///  领取宝箱状态
    /// </summary>
    public int staus = default(int);
}

/// <summary>
///  奖杯礼包
/// </summary>
public class CupPackage  : ShardDBObject
{
    public int giftId = default(int);
    /// <summary>
    ///  进度
    /// </summary>
    public int process = default(int);
    /// <summary>
    ///  任务状态
    /// </summary>
    public int status = default(int);
    /// <summary>
    ///  礼包开启时间
    /// </summary>
    public int startTime = default(int);
}

/// <summary>
///  剧本刷新时间信息
/// </summary>
public class StoryRefreshData  : ShardDBObject
{
    /// <summary>
    ///  每日次数
    /// </summary>
    public int dayTime = default(int);
    public int lastTime = default(int);
}



