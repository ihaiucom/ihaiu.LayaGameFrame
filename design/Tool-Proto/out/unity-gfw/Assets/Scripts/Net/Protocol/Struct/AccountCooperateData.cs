/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

