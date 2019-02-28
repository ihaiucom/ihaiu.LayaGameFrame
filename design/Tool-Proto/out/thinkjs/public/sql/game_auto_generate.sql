-- MADE BY GENERATOR AT 2018-12-10 20:14:50,
-- PLEASE DO NOT REWRITE.


--
-- Database: `game`
--
CREATE DATABASE IF NOT EXISTS `game` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `game`;

-- --------------------------------------------------------

--
-- 表的结构 `UsrData`
--

DROP TABLE IF EXISTS `UsrData`;
CREATE TABLE IF NOT EXISTS `UsrData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `usrName` varchar(64) NOT NULL COMMENT ' 玩家名字',
  `channel` varchar(64) NOT NULL COMMENT ' 渠道代码',
  `registerTime` bigint(20) NOT NULL COMMENT ' 注册时间 unix时间戳',
  `registerIP` varchar(64) NOT NULL COMMENT ' 注册IP',
  `lastLoginTime` bigint(20) NOT NULL COMMENT ' 次登录时间 unix时间戳',
  `lastLoginIP` varchar(64) NOT NULL COMMENT ' 上次登录IP',
  `usrState` tinyint(4) COMMENT ' 玩家状态',
  `usrRemark` varchar(64) NOT NULL COMMENT ' 状态注释',
  `usrFreezeTime` bigint(20) NOT NULL COMMENT ' 冻结的到期时间 0是永久冻结 unix时间戳',
  PRIMARY KEY (`uuid`),KEY `ENTITYID` (`entityId`),UNIQUE KEY `USRNAME` (`usrName`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `GameInfo`
--

DROP TABLE IF EXISTS `GameInfo`;
CREATE TABLE IF NOT EXISTS `GameInfo` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `name` varchar(64) NOT NULL COMMENT ' 玩家名字',
  `portrait` int(11) NOT NULL COMMENT ' 头像id',
  `sex` smallint COMMENT ' 性别',
  `level` int(11) NOT NULL COMMENT ' 等级',
  `fans` bigint(20) NOT NULL COMMENT ' 粉丝数量',
  `cup` int(11) NOT NULL COMMENT ' 奖杯数量',
  `stall` int(11) NOT NULL COMMENT ' 比赛档次',
  `vipLevel` int(11) NOT NULL COMMENT ' vip等级',
  `vipExp` bigint(20) NOT NULL COMMENT ' vip经验',
  `extendFloor` int(11) NOT NULL COMMENT ' 扩建的楼层',
  `buildRoomInfo` text NOT NULL COMMENT ' 建造的房间信息',
  `maxActor` int(11) NOT NULL COMMENT ' 最大艺人数',
  `maxHideActor` int(11) NOT NULL COMMENT ' 最大隐藏艺人数',
  `noseIntoNum` int(11) NOT NULL COMMENT ' 查探次数',
  `noseIntoTime` bigint(20) NOT NULL COMMENT ' 查探时间',
  `resetNoseIntoTime` bigint(20) NOT NULL COMMENT ' 查探次数,时间重置时间',
  `noseIntoActorEffectTime` bigint(20) NOT NULL COMMENT ' 查探的艺人生效时间',
  `noseIntoActorList` text NOT NULL COMMENT ' 查探的艺人ID',
  `expected` int(11) NOT NULL COMMENT ' 期待值',
  `daysCultivateCount` int(11) NOT NULL COMMENT ' 今日公司培养次数',
  `resetDaysCultivateCountTime` bigint(20) NOT NULL COMMENT ' 每日重置时间',
  `dailyTaskUpdateTime` bigint(20) NOT NULL COMMENT ' 日常任务更新时间',
  `achievementTaskUpdateTime` bigint(20) NOT NULL COMMENT ' 成就任务更新时间',
  `mallLimitDailyUpdateTime` bigint(20) NOT NULL COMMENT ' 商城每日限购更新时间',
  `mallLimitWeeklyUpdateTime` bigint(20) NOT NULL COMMENT ' 商城每周限购更新时间',
  `findStoryTime` int(11) NOT NULL COMMENT ' 搜罗次数',
  `lastTimeFindStory` bigint(20) NOT NULL COMMENT ' 上次搜罗时间',
  `lastResetTime` bigint(20) NOT NULL COMMENT ' 上次夸天重置时间',
  `theaterIds` text NOT NULL COMMENT ' 院线信息',
  `lastGetStreetRewardTimt` bigint(20) NOT NULL COMMENT ' 上次领取街区奖励的时间',
  `lastSendGroupRankListTime` bigint(20) NOT NULL COMMENT ' 上次祝贺总票房时间',
  `lastSendGroupMovieRankListTime` bigint(20) NOT NULL COMMENT ' 上次祝贺最高票房时间',
  `sendGroupRankListTimes` int(11) NOT NULL COMMENT ' 祝贺次数',
  `initActorId` int(11) NOT NULL COMMENT ' 初始化选择艺人id',
  PRIMARY KEY (`uuid`),KEY `ENTITYID` (`entityId`),UNIQUE KEY `NAME` (`name`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `GameInfoExt`
--

DROP TABLE IF EXISTS `GameInfoExt`;
CREATE TABLE IF NOT EXISTS `GameInfoExt` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `perSignature` text COMMENT ' 个性签名',
  `totalFilm` int(11) NOT NULL COMMENT ' 拍摄过的电影数',
  `numBoxOffice` bigint(20) NOT NULL COMMENT ' 票房总数',
  `numOrders` int(11) NOT NULL COMMENT ' 订单总数',
  `numProductionLine` int(11) NOT NULL COMMENT ' 最高档生产线',
  `numOfficialBusiness` int(11) NOT NULL COMMENT ' 公务次数',
  `numMeeting` int(11) NOT NULL COMMENT ' 会议次数',
  `numVisit` int(11) NOT NULL COMMENT ' 拜访次数',
  `numGroupBest` int(11) NOT NULL COMMENT ' 分组第一次数',
  `numBestArtDirection` int(11) NOT NULL COMMENT ' 获得最佳艺术指导奖次数',
  `numBestPerformer` int(11) NOT NULL COMMENT ' 获得最佳表演奖次数',
  `numBestPublicPraise` int(11) NOT NULL COMMENT ' 获得最受欢迎奖次数',
  `numGoldenOliveAward` int(11) NOT NULL COMMENT ' 获得金橄榄奖次数',
  `bestWordOfMouth` int(11) NOT NULL COMMENT ' 最高口碑',
  `bestWordOfMouthFilm` varchar(64) NOT NULL COMMENT ' 口碑最高的电影',
  `bestBoxOffice` bigint(20) NOT NULL COMMENT ' 最高票房',
  `bestBoxOfficeFilm` varchar(64) NOT NULL COMMENT ' 票房最高的电影',
  `numNarrativeFilm` int(11) NOT NULL COMMENT ' 叙事片数量',
  `numActionFilm` int(11) NOT NULL COMMENT ' 动作片数量',
  `numAffectionalFilm` int(11) NOT NULL COMMENT ' 爱情片数量',
  `numCartoonFilm` int(11) NOT NULL COMMENT ' 动画片数量',
  `numComedyFilm` int(11) NOT NULL COMMENT ' 喜剧片数量',
  `numMusicalFilm` int(11) NOT NULL COMMENT ' 歌舞片数量',
  `numHorrorFilm` int(11) NOT NULL COMMENT ' 恐怖片数量',
  `numSuspense` int(11) NOT NULL COMMENT ' 悬疑片数量',
  `portraitList` text NOT NULL COMMENT ' 头像ID列表',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `GMMsgLog`
--

DROP TABLE IF EXISTS `GMMsgLog`;
CREATE TABLE IF NOT EXISTS `GMMsgLog` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `messageId` int(11) NOT NULL,
  `publishTypeCode` tinyint(4),
  `receiveCount` int(11) NOT NULL COMMENT ' 接受次数',
  `receiveTime` bigint(20) NOT NULL COMMENT ' unix时间戳',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ItemData`
--

DROP TABLE IF EXISTS `ItemData`;
CREATE TABLE IF NOT EXISTS `ItemData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `itemId` int(11) NOT NULL COMMENT ' 对应的策划表id',
  `amount` bigint(20) NOT NULL COMMENT ' 物品的数量',
  `createTime` bigint(20) NOT NULL COMMENT ' 创建(获得)时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `StorySuitData`
--

DROP TABLE IF EXISTS `StorySuitData`;
CREATE TABLE IF NOT EXISTS `StorySuitData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `storySuitId` int(11) NOT NULL COMMENT ' 剧本套id',
  `progress` int(11) NOT NULL COMMENT ' 集齐剧本进度',
  `progress2` int(11) NOT NULL COMMENT ' 剧本目标进度',
  `status` int(11) NOT NULL COMMENT ' 状态',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `StoryData`
--

DROP TABLE IF EXISTS `StoryData`;
CREATE TABLE IF NOT EXISTS `StoryData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `storyId` int(11) NOT NULL COMMENT ' 剧本id',
  `storyProgressInfo` text NOT NULL COMMENT ' 每个剧本所要达成的目标列表',
  `status` int(11) NOT NULL COMMENT ' 状态',
  `progress` int(11) NOT NULL COMMENT ' 进度',
  `maxScore` bigint(20) NOT NULL COMMENT ' 最高票房',
  `shootLastTime` bigint(20) NOT NULL COMMENT ' 上次拍摄时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ActorData`
--

DROP TABLE IF EXISTS `ActorData`;
CREATE TABLE IF NOT EXISTS `ActorData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `actorId` int(11) NOT NULL COMMENT ' 艺人id',
  `name` varchar(64) NOT NULL COMMENT ' 艺人名字',
  `hide` tinyint(4) NOT NULL COMMENT ' 是否雪藏',
  `level` int(11) NOT NULL COMMENT ' 等级',
  `levelExp` bigint(20) NOT NULL COMMENT ' 等级进度',
  `payCheck` bigint(20) NOT NULL COMMENT ' 片酬',
  `stamina` int(11) NOT NULL COMMENT ' 体力',
  `staminaLimit` int(11) NOT NULL COMMENT ' 体力上限',
  `LoyaltyExp` int(11) NOT NULL COMMENT ' 忠诚度经验',
  `LoyaltyLevel` int(11) NOT NULL COMMENT ' 忠诚度等级',
  `cultivateCount` int(11) NOT NULL COMMENT ' 培养次数',
  `cultivateCountLimit` int(11) NOT NULL COMMENT ' 培养次数上限',
  `giveAssetsCount` int(11) NOT NULL COMMENT ' 赠送资产次数',
  `giveAssetsCountLimit` int(11) NOT NULL COMMENT ' 赠送资产次数上限',
  `giveAssetsList` text NOT NULL COMMENT ' 赠送资产列表',
  `skillExp` int(11) NOT NULL COMMENT ' 技能经验',
  `skillList` text NOT NULL COMMENT ' 技能信息列表',
  `shootTypeList` text NOT NULL COMMENT ' 拍摄类型熟练度',
  `spectacle` int(11) NOT NULL COMMENT ' 场面属性',
  `perform` int(11) NOT NULL COMMENT ' 表演属性',
  `plot` int(11) NOT NULL COMMENT ' 剧情属性',
  `art` int(11) NOT NULL COMMENT ' 艺术属性',
  `boxOfficeCount` bigint(20) NOT NULL COMMENT ' 参与拍摄票房影响力总和',
  `cupCount` int(11) NOT NULL COMMENT ' 获取奖杯数量',
  `movieCount` int(11) NOT NULL COMMENT ' 拍摄电影次数',
  `entertainment` int(11) NOT NULL COMMENT ' 娱乐属性',
  `produceId` int(11) NOT NULL COMMENT ' 生产线id',
  `assistantInfos` text NOT NULL COMMENT ' 助理信息',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `CityData`
--

DROP TABLE IF EXISTS `CityData`;
CREATE TABLE IF NOT EXISTS `CityData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `lastCity` int(11) NOT NULL COMMENT ' 最后一个城市',
  `headquarters` int(11) NOT NULL COMMENT ' 总部城市',
  `ambassador` text NOT NULL COMMENT ' 形象大使',
  `maxGold` bigint(20) NOT NULL COMMENT ' 金币上限',
  `maxFans` bigint(20) NOT NULL COMMENT ' 粉丝上限',
  `speedGold` bigint(20) NOT NULL COMMENT ' 金币掉落速度',
  `speedFans` bigint(20) NOT NULL COMMENT ' 粉丝掉落速度',
  `lastGold` bigint(20) NOT NULL COMMENT ' 上次更新掉落的金币',
  `lastFans` bigint(20) NOT NULL COMMENT ' 上次更新掉落的粉丝',
  `lastDropTimestamp` bigint(20) NOT NULL COMMENT ' 上次更新掉落的时间戳',
  `lastTime` bigint(20) NOT NULL COMMENT ' 上次结算时间',
  `dropList` text NOT NULL COMMENT ' 掉落列表',
  `lastArea` int(11) NOT NULL COMMENT ' 当前宣传的地区',
  `lastAreaProgress` int(11) NOT NULL COMMENT ' 当前宣传进度',
  `propagandaActor` int(11) NOT NULL COMMENT ' 宣传大使',
  `roadShowFlag` tinyint(4) NOT NULL COMMENT ' 路演成功标记',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ActorSkillEffect`
--

DROP TABLE IF EXISTS `ActorSkillEffect`;
CREATE TABLE IF NOT EXISTS `ActorSkillEffect` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `getGoldSpeed` float COMMENT ' 获得金币速度',
  `productionEarnings` float COMMENT ' 生产线收益',
  `actorPaycheck` text NOT NULL COMMENT ' 演员片酬',
  `boxOfficeEarnings` text NOT NULL COMMENT ' 收益票房',
  `cityGetGoldTime` float COMMENT ' 城市获取金币时间',
  `upgradeGoldCost` text NOT NULL COMMENT ' 升级金币消耗',
  `shootTotalAttrIncrease` text NOT NULL COMMENT ' 拍摄时全属性增加',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `TempData`
--

DROP TABLE IF EXISTS `TempData`;
CREATE TABLE IF NOT EXISTS `TempData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `lastResetTime` bigint(20) NOT NULL COMMENT ' 上次重置时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `MovieData`
--

DROP TABLE IF EXISTS `MovieData`;
CREATE TABLE IF NOT EXISTS `MovieData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `movieId` int(11) NOT NULL COMMENT ' 电影id',
  `name` varchar(64) NOT NULL COMMENT ' 电影名字',
  `state` smallint COMMENT ' 当前状态',
  `data` text NOT NULL COMMENT ' 艺人选择 / 剧本选择',
  `movieCost` text NOT NULL COMMENT ' 电影成本',
  `expected` text NOT NULL COMMENT ' 市场期待',
  `battleData` text NOT NULL COMMENT ' 战斗过程',
  `battleDataEx` text NOT NULL COMMENT ' 战斗过程',
  `type` int(11) NOT NULL COMMENT ' 拍摄类型',
  `actorShootType` text NOT NULL COMMENT ' 艺人熟练度增加经验',
  `isTired` tinyint(4) NOT NULL COMMENT ' 是否疲劳',
  `isGetStoryGoals` tinyint(4) NOT NULL COMMENT ' 是否领取剧本奖励',
  `mediaVisit` text NOT NULL COMMENT ' 媒体访问',
  `mExpected` int(11) NOT NULL COMMENT ' 期待值',
  `mediaCommend` int(11) NOT NULL COMMENT ' 平均媒体评价',
  `mediaCommendArr` text NOT NULL COMMENT ' 媒体评价',
  `praise` int(11) NOT NULL COMMENT ' 媒体评价获得的点赞数',
  `premiereBoxOffice` bigint(20) NOT NULL COMMENT ' 首映票房',
  `extBoxOffice` bigint(20) NOT NULL COMMENT ' 额外票房',
  `publicPraise` int(11) NOT NULL COMMENT ' 观众口碑',
  `runDays` text NOT NULL COMMENT ' 上映天数',
  `totalBoxOffice` bigint(20) NOT NULL COMMENT ' 总票房',
  `totalMovieCost` bigint(20) NOT NULL COMMENT ' 总成本',
  `evaluationCon` int(11) NOT NULL COMMENT ' 评价系数',
  `attribute` text NOT NULL COMMENT ' 依次对应5种属性结果, 场面, 表演, 剧情, 艺术, 娱乐',
  `maxAttribute` text NOT NULL COMMENT ' 5种属性最大值, 场面, 表演, 剧情, 艺术, 娱乐',
  `avrAttribute` text NOT NULL COMMENT ' 5种属性平均值, 场面, 表演, 剧情, 艺术, 娱乐',
  `dropCount` int(11) NOT NULL COMMENT ' 随机次数',
  `boxOfficeEvaluation` tinyint(4) COMMENT ' 票房评价',
  `extendCity` int(11) NOT NULL COMMENT ' 推广城市id',
  `attentionValue` int(11) NOT NULL COMMENT ' 推广关注度',
  `attentionProgress` int(11) NOT NULL COMMENT ' 推广关注度进度',
  `dropItemList` text NOT NULL COMMENT ' 掉落物品',
  `contineTransceiver` bigint(20) NOT NULL COMMENT ' 持续收益',
  `startTime` bigint(20) NOT NULL COMMENT ' 开始时间戳',
  `lastTime` bigint(20) NOT NULL COMMENT ' 上次操作时间',
  PRIMARY KEY (`uuid`),KEY `MOVIEID` (`movieId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ManageOrderData`
--

DROP TABLE IF EXISTS `ManageOrderData`;
CREATE TABLE IF NOT EXISTS `ManageOrderData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `orderId` int(11) NOT NULL COMMENT ' 经营订单ID',
  `items` text NOT NULL COMMENT ' 已经塞入的物品',
  `position` int(11) NOT NULL COMMENT ' 订单位置信息',
  `lastTime` bigint(20) NOT NULL COMMENT ' 订单开始时间',
  `delFlag` tinyint(4) NOT NULL COMMENT ' 是否是删除订单 true表示被删除了',
  PRIMARY KEY (`uuid`),KEY `ENTITYID` (`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 经营订单';

--
-- 表的结构 `ProgressBoxData`
--

DROP TABLE IF EXISTS `ProgressBoxData`;
CREATE TABLE IF NOT EXISTS `ProgressBoxData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `moduleId` int(11) NOT NULL COMMENT ' 模块ID 读取enum.json里 ',
  `progress` int(11) NOT NULL COMMENT ' 宝箱进度',
  `staus` int(11) NOT NULL COMMENT ' 领取宝箱状态',
  `lastTime` bigint(20) NOT NULL COMMENT ' 上次领取时间',
  PRIMARY KEY (`uuid`),KEY `MODULEID` (`moduleId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ManageProduceData`
--

DROP TABLE IF EXISTS `ManageProduceData`;
CREATE TABLE IF NOT EXISTS `ManageProduceData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `produceId` int(11) NOT NULL COMMENT ' 生产ID',
  `hadNum` int(11) NOT NULL COMMENT ' 已经生产了多少个',
  `actId` int(11) NOT NULL COMMENT ' 派遣的艺人ID',
  `level` int(11) NOT NULL COMMENT ' 生产线等级',
  `skills` text NOT NULL COMMENT ' 生产技能列表',
  `randomNums` text NOT NULL COMMENT ' 生产倍数',
  `produceNum` int(11) NOT NULL COMMENT ' 排队生产多少个',
  `lastTime` bigint(20) NOT NULL COMMENT ' 开始生产时间',
  `hadProduceTimes` bigint(20) NOT NULL COMMENT ' 领取的时候清零，方便合作任务计算生产次数',
  PRIMARY KEY (`uuid`),KEY `PRODUCEID` (`produceId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 经营生产';

--
-- 表的结构 `MovieLicenceResetTimeData`
--

DROP TABLE IF EXISTS `MovieLicenceResetTimeData`;
CREATE TABLE IF NOT EXISTS `MovieLicenceResetTimeData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `lastResetTime` bigint(20) NOT NULL COMMENT ' 上次刷新时间',
  `dailyCount` int(11) NOT NULL COMMENT ' 当天恢复数量',
  `lastUpdateTime` bigint(20) NOT NULL COMMENT ' 上次恢复时间',
  `cd` int(11) NOT NULL COMMENT ' 当前cd值',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ManageBusinessData`
--

DROP TABLE IF EXISTS `ManageBusinessData`;
CREATE TABLE IF NOT EXISTS `ManageBusinessData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `businessId` int(11) NOT NULL COMMENT ' 公务ID',
  `dailyCount` int(11) NOT NULL COMMENT ' 当天阅读次数',
  `lineLimit` int(11) NOT NULL COMMENT ' 公务队列上限',
  `lastUpdateTime` bigint(20) NOT NULL COMMENT ' 上次恢复时间',
  `lastResetTime` bigint(20) NOT NULL COMMENT ' 上次刷新时间',
  PRIMARY KEY (`uuid`),KEY `BUSINESSID` (`businessId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 经营公务';

--
-- 表的结构 `ManageVisitData`
--

DROP TABLE IF EXISTS `ManageVisitData`;
CREATE TABLE IF NOT EXISTS `ManageVisitData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `visitId` int(11) NOT NULL COMMENT ' 探班ID',
  `actId` int(11) NOT NULL COMMENT ' 艺人ID',
  `startTime` bigint(20) NOT NULL COMMENT ' 开始探班的时间',
  `lastTime` bigint(20) NOT NULL COMMENT ' 探班队列刷新时间',
  `lineLimit` int(11) NOT NULL COMMENT ' 探班队列上限',
  `intervalTime` bigint(20) NOT NULL COMMENT ' 间隔时间',
  `isReceptior` tinyint(4) NOT NULL COMMENT ' 是否正处于接待',
  PRIMARY KEY (`uuid`),KEY `VISITID` (`visitId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 经营探班';

--
-- 表的结构 `TaskData`
--

DROP TABLE IF EXISTS `TaskData`;
CREATE TABLE IF NOT EXISTS `TaskData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `cid` int(11) NOT NULL COMMENT ' 对应的策划表id',
  `type` tinyint(4) COMMENT ' 任务类型',
  `progress` int(11) NOT NULL COMMENT ' 完成进度',
  `state` text NOT NULL COMMENT ' 成就或任务状态',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 任务结构';

--
-- 表的结构 `MallItemLimitData`
--

DROP TABLE IF EXISTS `MallItemLimitData`;
CREATE TABLE IF NOT EXISTS `MallItemLimitData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `id` int(11) NOT NULL COMMENT ' 商品id',
  `type` tinyint(4) COMMENT ' 限购类型',
  `amount` int(11) NOT NULL COMMENT ' 已经购买的个数',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 单个商品限购数据';

--
-- 表的结构 `MailData`
--

DROP TABLE IF EXISTS `MailData`;
CREATE TABLE IF NOT EXISTS `MailData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `title` varchar(64) NOT NULL COMMENT ' 标题',
  `content` text COMMENT ' 内容',
  `itemList` text NOT NULL COMMENT ' 奖励列表',
  `createTime` bigint(20) NOT NULL COMMENT ' 创建时间',
  `endTime` bigint(20) NOT NULL COMMENT ' 过期时间',
  `IsRewardGot` tinyint(4) NOT NULL,
  `isNew` tinyint(4) NOT NULL COMMENT ' 是否是新邮件',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `ManageMeetingData`
--

DROP TABLE IF EXISTS `ManageMeetingData`;
CREATE TABLE IF NOT EXISTS `ManageMeetingData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `meetID` int(11) NOT NULL COMMENT ' 会议ID',
  `randResult` int(11) NOT NULL COMMENT ' 选择的随机结果',
  `lastTime` bigint(20) NOT NULL COMMENT ' 会议队列刷新时间',
  `lineLimit` int(11) NOT NULL COMMENT ' 会议队列上限',
  `intervalTime` bigint(20) NOT NULL COMMENT ' 间隔时间',
  PRIMARY KEY (`uuid`),KEY `MEETID` (`meetID`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 经营会议';

--
-- 表的结构 `DailySign`
--

DROP TABLE IF EXISTS `DailySign`;
CREATE TABLE IF NOT EXISTS `DailySign` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `count` int(11) NOT NULL COMMENT ' 签到数',
  `updateTime` bigint(20) NOT NULL COMMENT ' 更新时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 日常签到数据';

--
-- 表的结构 `SecretaryData`
--

DROP TABLE IF EXISTS `SecretaryData`;
CREATE TABLE IF NOT EXISTS `SecretaryData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `secretaryType` smallint COMMENT ' 秘书存在类型 0 未获取 1终身拥有 2暂时拥有',
  `timeList` text NOT NULL COMMENT ' 每个操作对应的次数列表',
  `lastTime` bigint(20) NOT NULL COMMENT ' 上次更新数据时间',
  `applyFrequency` int(11) NOT NULL COMMENT ' 申请次数 ',
  `applyLastTime` bigint(20) NOT NULL COMMENT ' 上次申请时间',
  `isApply` tinyint(4) NOT NULL COMMENT ' 是否申请',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 小秘书功能';

--
-- 表的结构 `SevenAddUpData`
--

DROP TABLE IF EXISTS `SevenAddUpData`;
CREATE TABLE IF NOT EXISTS `SevenAddUpData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `progress` int(11) NOT NULL COMMENT ' 活动进度',
  `staus` int(11) NOT NULL COMMENT ' 领取宝箱状态',
  `lastTime` bigint(20) NOT NULL COMMENT ' 上次更新进度时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 活动期间累计达到某种要求领取奖励';

--
-- 表的结构 `ActortExerciseData`
--

DROP TABLE IF EXISTS `ActortExerciseData`;
CREATE TABLE IF NOT EXISTS `ActortExerciseData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `index` int(11) NOT NULL COMMENT ' 训练槽位顺序',
  `actorUuid` varchar(64) NOT NULL COMMENT ' 艺人 uuid',
  `startTime` bigint(20) NOT NULL COMMENT ' 开始时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 艺人训练队列';

--
-- 表的结构 `DailyEvent`
--

DROP TABLE IF EXISTS `DailyEvent`;
CREATE TABLE IF NOT EXISTS `DailyEvent` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 日程事件';

--
-- 表的结构 `GuideData`
--

DROP TABLE IF EXISTS `GuideData`;
CREATE TABLE IF NOT EXISTS `GuideData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `guide` text NOT NULL COMMENT ' 引导相关',
  `story` text NOT NULL COMMENT ' 剧情相关',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 引导数据';

--
-- 表的结构 `PlayerCooperateData`
--

DROP TABLE IF EXISTS `PlayerCooperateData`;
CREATE TABLE IF NOT EXISTS `PlayerCooperateData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `lastReqTime` bigint(20) NOT NULL COMMENT ' 上次请求时间 ',
  `lastAutoReqTime` bigint(20) NOT NULL COMMENT ' 上次公开请求时间 ',
  `rewardStatus` int(11) NOT NULL COMMENT ' 领取进度宝箱状态',
  `giveGoldTime` int(11) NOT NULL COMMENT '赠送金币的次数',
  `giveDollarTime` int(11) NOT NULL COMMENT ' 赠送美元的次数',
  `lastTime` int(11) NOT NULL COMMENT ' 领取时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 合作';

--
-- 表的结构 `LevelGiftData`
--

DROP TABLE IF EXISTS `LevelGiftData`;
CREATE TABLE IF NOT EXISTS `LevelGiftData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `giftId` int(11) NOT NULL COMMENT ' 等级礼包id',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `GetGuideReward`
--

DROP TABLE IF EXISTS `GetGuideReward`;
CREATE TABLE IF NOT EXISTS `GetGuideReward` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `staus` int(11) NOT NULL COMMENT ' 领取宝箱状态',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 完成所有引导任务领取奖励';

--
-- 表的结构 `CupPackage`
--

DROP TABLE IF EXISTS `CupPackage`;
CREATE TABLE IF NOT EXISTS `CupPackage` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `giftId` int(11) NOT NULL,
  `process` int(11) NOT NULL COMMENT ' 进度',
  `status` int(11) NOT NULL COMMENT ' 任务状态',
  `startTime` int(11) NOT NULL COMMENT ' 礼包开启时间',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 奖杯礼包';

--
-- 表的结构 `StoryRefreshData`
--

DROP TABLE IF EXISTS `StoryRefreshData`;
CREATE TABLE IF NOT EXISTS `StoryRefreshData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `dayTime` int(11) NOT NULL COMMENT ' 每日次数',
  `lastTime` int(11) NOT NULL,
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 剧本刷新时间信息';




--
-- 分库分表
--

CREATE DATABASE IF NOT EXISTS `game_0` default charset utf8 COLLATE utf8_general_ci;
USE `game_0`;
CREATE TABLE IF NOT EXISTS `UsrData_0` like `game`.`UsrData`;
CREATE TABLE IF NOT EXISTS `GameInfo_0` like `game`.`GameInfo`;
CREATE TABLE IF NOT EXISTS `GameInfoExt_0` like `game`.`GameInfoExt`;
CREATE TABLE IF NOT EXISTS `GMMsgLog_0` like `game`.`GMMsgLog`;
CREATE TABLE IF NOT EXISTS `ItemData_0` like `game`.`ItemData`;
CREATE TABLE IF NOT EXISTS `StorySuitData_0` like `game`.`StorySuitData`;
CREATE TABLE IF NOT EXISTS `StoryData_0` like `game`.`StoryData`;
CREATE TABLE IF NOT EXISTS `ActorData_0` like `game`.`ActorData`;
CREATE TABLE IF NOT EXISTS `CityData_0` like `game`.`CityData`;
CREATE TABLE IF NOT EXISTS `ActorSkillEffect_0` like `game`.`ActorSkillEffect`;
CREATE TABLE IF NOT EXISTS `TempData_0` like `game`.`TempData`;
CREATE TABLE IF NOT EXISTS `MovieData_0` like `game`.`MovieData`;
CREATE TABLE IF NOT EXISTS `ManageOrderData_0` like `game`.`ManageOrderData`;
CREATE TABLE IF NOT EXISTS `ProgressBoxData_0` like `game`.`ProgressBoxData`;
CREATE TABLE IF NOT EXISTS `ManageProduceData_0` like `game`.`ManageProduceData`;
CREATE TABLE IF NOT EXISTS `MovieLicenceResetTimeData_0` like `game`.`MovieLicenceResetTimeData`;
CREATE TABLE IF NOT EXISTS `ManageBusinessData_0` like `game`.`ManageBusinessData`;
CREATE TABLE IF NOT EXISTS `ManageVisitData_0` like `game`.`ManageVisitData`;
CREATE TABLE IF NOT EXISTS `TaskData_0` like `game`.`TaskData`;
CREATE TABLE IF NOT EXISTS `MallItemLimitData_0` like `game`.`MallItemLimitData`;
CREATE TABLE IF NOT EXISTS `MailData_0` like `game`.`MailData`;
CREATE TABLE IF NOT EXISTS `ManageMeetingData_0` like `game`.`ManageMeetingData`;
CREATE TABLE IF NOT EXISTS `DailySign_0` like `game`.`DailySign`;
CREATE TABLE IF NOT EXISTS `SecretaryData_0` like `game`.`SecretaryData`;
CREATE TABLE IF NOT EXISTS `SevenAddUpData_0` like `game`.`SevenAddUpData`;
CREATE TABLE IF NOT EXISTS `ActortExerciseData_0` like `game`.`ActortExerciseData`;
CREATE TABLE IF NOT EXISTS `DailyEvent_0` like `game`.`DailyEvent`;
CREATE TABLE IF NOT EXISTS `GuideData_0` like `game`.`GuideData`;
CREATE TABLE IF NOT EXISTS `PlayerCooperateData_0` like `game`.`PlayerCooperateData`;
CREATE TABLE IF NOT EXISTS `LevelGiftData_0` like `game`.`LevelGiftData`;
CREATE TABLE IF NOT EXISTS `GetGuideReward_0` like `game`.`GetGuideReward`;
CREATE TABLE IF NOT EXISTS `CupPackage_0` like `game`.`CupPackage`;
CREATE TABLE IF NOT EXISTS `StoryRefreshData_0` like `game`.`StoryRefreshData`;

--
-- 删除临时库
--
DROP DATABASE `game`;
