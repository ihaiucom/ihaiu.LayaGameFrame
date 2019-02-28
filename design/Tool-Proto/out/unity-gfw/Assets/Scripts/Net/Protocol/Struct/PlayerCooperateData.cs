/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
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
    

}

