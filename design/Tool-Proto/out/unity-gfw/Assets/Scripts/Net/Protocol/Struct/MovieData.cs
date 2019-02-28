/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

