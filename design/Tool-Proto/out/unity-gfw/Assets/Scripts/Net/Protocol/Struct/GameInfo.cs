/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

