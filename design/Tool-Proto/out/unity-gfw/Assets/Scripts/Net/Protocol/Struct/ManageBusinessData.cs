/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

