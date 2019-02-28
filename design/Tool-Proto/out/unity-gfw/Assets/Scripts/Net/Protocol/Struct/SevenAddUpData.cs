/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

