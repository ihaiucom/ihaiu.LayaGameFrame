/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  经营会议
    /// </summary>
    public class ManageMeetingData  : ShardDBObject
    {
        /// <summary>
        ///  会议ID
        /// </summary>
        public int meetID = default(int);
        /// <summary>
        ///  选择的随机结果
        /// </summary>
        public int randResult = default(int);
        /// <summary>
        ///  会议队列刷新时间
        /// </summary>
        public long lastTime = default(long);
        /// <summary>
        ///  会议队列上限
        /// </summary>
        public int lineLimit = default(int);
        /// <summary>
        ///  间隔时间
        /// </summary>
        public long intervalTime = default(long);
    }
    

}

