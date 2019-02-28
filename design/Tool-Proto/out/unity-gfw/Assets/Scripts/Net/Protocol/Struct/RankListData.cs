/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

