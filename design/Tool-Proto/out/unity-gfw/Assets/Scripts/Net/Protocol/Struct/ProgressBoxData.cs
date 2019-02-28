/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class ProgressBoxData  : ShardDBObject
    {
        /// <summary>
        ///  模块ID 读取enum.json里 
        /// </summary>
        public int moduleId = default(int);
        /// <summary>
        ///  宝箱进度
        /// </summary>
        public int progress = default(int);
        /// <summary>
        ///  领取宝箱状态
        /// </summary>
        public int staus = default(int);
        /// <summary>
        ///  上次领取时间
        /// </summary>
        public long lastTime = default(long);
    }
    

}

