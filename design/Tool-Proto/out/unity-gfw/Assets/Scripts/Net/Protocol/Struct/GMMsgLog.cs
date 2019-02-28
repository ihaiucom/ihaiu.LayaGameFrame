/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class GMMsgLog  : ShardDBObject
    {
        public int messageId = default(int);
        public EPublishTypeCode publishTypeCode = 0;
        /// <summary>
        ///  接受次数
        /// </summary>
        public int receiveCount = default(int);
        /// <summary>
        ///  unix时间戳
        /// </summary>
        public long receiveTime = default(long);
    }
    

}

