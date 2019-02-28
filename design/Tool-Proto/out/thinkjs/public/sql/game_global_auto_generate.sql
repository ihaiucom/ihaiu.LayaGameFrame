-- MADE BY GENERATOR AT 2018-12-10 20:14:50,
-- PLEASE DO NOT REWRITE.


--
-- Database: `game_global`
--
CREATE DATABASE IF NOT EXISTS `game_global` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `game_global`;

-- --------------------------------------------------------

--
-- 表的结构 `OrderData`
--

DROP TABLE IF EXISTS `OrderData`;
CREATE TABLE IF NOT EXISTS `OrderData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `orderId` bigint(20) NOT NULL COMMENT ' 订单号',
  `outerOrderId` varchar(64) NOT NULL COMMENT ' 三方订单id',
  `productId` varchar(64) NOT NULL COMMENT ' 商品编号',
  `productNum` int(11) NOT NULL COMMENT ' 商品数量',
  `createTime` bigint(20) NOT NULL COMMENT ' unix时间戳',
  `paymentTime` bigint(20) NOT NULL COMMENT ' unix时间戳 (收到第三方支付系统成功支付的回调的时间)',
  `handleCount` int(11) NOT NULL COMMENT ' 处理次数',
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `StoryMessage`
--

DROP TABLE IF EXISTS `StoryMessage`;
CREATE TABLE IF NOT EXISTS `StoryMessage` (
  `uuid` varchar(64) NOT NULL,
  `storyId` int(11) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `RankListData`
--

DROP TABLE IF EXISTS `RankListData`;
CREATE TABLE IF NOT EXISTS `RankListData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` bigint(20) NOT NULL,
  `serverId` int(11) NOT NULL COMMENT ' 服务器id',
  `serverUuid` varchar(64) NOT NULL COMMENT ' 服务器唯一id',
  `groupId` int(11) NOT NULL COMMENT ' 分组id',
  `lastGroupId` int(11) NOT NULL COMMENT ' 昨天的街区分组',
  `lastRank` int(11) NOT NULL COMMENT ' 昨日排名',
  `lastWeakRank` int(11) NOT NULL COMMENT ' 上周排名',
  `propaganda_department` bigint(20) NOT NULL COMMENT ' 建造宣传部的时间',
  `isGetLastReward` tinyint(4) NOT NULL COMMENT ' 是否领取昨日奖励',
  `isChangeServerName` tinyint(4) NOT NULL COMMENT ' 是否修改过服务器名字',
  `big_sell` int(11) NOT NULL COMMENT ' 大卖电影数量',
  `totalBoxOffice` bigint(20) NOT NULL COMMENT ' 最高总票房',
  `totalBoxOfficeRank` int(11) NOT NULL COMMENT ' 最高总票房排名',
  `historyBestTotalBoxOffice` int(11) NOT NULL COMMENT ' 历史总票房最佳',
  `historyBestTotalBoxOfficeRank` int(11) NOT NULL COMMENT ' 历史总票房最佳排名',
  `historyBestTotalBexOfficeBlockLevel` int(11) NOT NULL COMMENT ' 历史最佳的街区',
  `historyBestTotalBexOfficeTotal` int(11) NOT NULL COMMENT ' 当前街区玩家人数',
  `historyIsNew` tinyint(4) NOT NULL COMMENT ' 是否新记录',
  `movies` int(11) NOT NULL COMMENT ' 电影拍摄数量',
  `bestBoxOffice` bigint(20) NOT NULL COMMENT ' 最高票房',
  `bestBoxOfficeName` varchar(64) NOT NULL COMMENT ' 最高票房电影',
  `bestBoxOfficeRank` int(11) NOT NULL COMMENT ' 最高票房排名',
  `rewardFlags` text NOT NULL COMMENT ' 奖励领取标记',
  `isNew` tinyint(4) NOT NULL COMMENT ' 是否当天第一次获取',
  PRIMARY KEY (`uuid`),KEY `ENTITYID`(`entityId`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `DanmuData`
--

DROP TABLE IF EXISTS `DanmuData`;
CREATE TABLE IF NOT EXISTS `DanmuData` (
  `uuid` varchar(64) NOT NULL,
  `data` text NOT NULL COMMENT ' 弹幕数据',
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 表的结构 `AccountCooperateData`
--

DROP TABLE IF EXISTS `AccountCooperateData`;
CREATE TABLE IF NOT EXISTS `AccountCooperateData` (
  `uuid` varchar(64) NOT NULL,
  `friendEntityId` varchar(64) NOT NULL COMMENT ' 成为好友的玩家',
  `appList` text NOT NULL COMMENT '请求他为好友的玩家信息',
  `weekTimes` int(11) NOT NULL COMMENT ' 一周内合作不同人的次数',
  `lastWeek` int(11) NOT NULL COMMENT ' 合作时间',
  `firstCooperate` tinyint(4) NOT NULL COMMENT ' 首次合作奖励 true 表示已经领取过',
  `firstACooperate` tinyint(4) NOT NULL COMMENT ' 首次通过账号查找建立合作 true 表示已经领取过',
  `isCaptain` tinyint(4) NOT NULL,
  `isRead` tinyint(4) NOT NULL COMMENT ' false 不需要播放特效，true需要播放 ',
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 账号邀请合作数据';

--
-- 表的结构 `AutoCooperateData`
--

DROP TABLE IF EXISTS `AutoCooperateData`;
CREATE TABLE IF NOT EXISTS `AutoCooperateData` (
  `uuid` varchar(64) NOT NULL,
  `applyEntityId` varchar(64) NOT NULL COMMENT ' 申请人',
  `lastTime` bigint(20) NOT NULL COMMENT ' 申请时间',
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 公共邀请合作数据';

--
-- 表的结构 `CooperateTaskData`
--

DROP TABLE IF EXISTS `CooperateTaskData`;
CREATE TABLE IF NOT EXISTS `CooperateTaskData` (
  `uuid` varchar(64) NOT NULL,
  `tasks` text NOT NULL,
  `currentStar` int(11) NOT NULL COMMENT ' 当前星级',
  `progree` int(11) NOT NULL,
  `lastTime` int(11) NOT NULL,
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 合作任务';

--
-- 表的结构 `CooperateOrderData`
--

DROP TABLE IF EXISTS `CooperateOrderData`;
CREATE TABLE IF NOT EXISTS `CooperateOrderData` (
  `uuid` varchar(64) NOT NULL,
  `entityId` int(11) NOT NULL COMMENT ' 订单方',
  `portrait` int(11) NOT NULL COMMENT ' 头像ID',
  `orderUuid` varchar(64) NOT NULL COMMENT ' 订单唯一ID',
  `itemId` int(11) NOT NULL,
  `amount` bigint(20) NOT NULL,
  `lastTime` bigint(20) NOT NULL COMMENT ' 放入时间',
  PRIMARY KEY (`uuid`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT=' 合作订单';



