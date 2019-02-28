/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

