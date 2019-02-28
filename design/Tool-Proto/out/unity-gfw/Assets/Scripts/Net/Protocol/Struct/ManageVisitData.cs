/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  经营探班
    /// </summary>
    public class ManageVisitData  : ShardDBObject
    {
        /// <summary>
        ///  探班ID
        /// </summary>
        public int visitId = default(int);
        /// <summary>
        ///  艺人ID
        /// </summary>
        public int actId = default(int);
        /// <summary>
        ///  开始探班的时间
        /// </summary>
        public long startTime = default(long);
        /// <summary>
        ///  探班队列刷新时间
        /// </summary>
        public long lastTime = default(long);
        /// <summary>
        ///  探班队列上限
        /// </summary>
        public int lineLimit = default(int);
        /// <summary>
        ///  间隔时间
        /// </summary>
        public long intervalTime = default(long);
        /// <summary>
        ///  是否正处于接待
        /// </summary>
        public bool isReceptior = default(bool);
    }
    

}

