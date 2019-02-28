/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  艺人训练队列
    /// </summary>
    public class ActortExerciseData  : ShardDBObject
    {
        /// <summary>
        ///  训练槽位顺序
        /// </summary>
        public int index = default(int);
        /// <summary>
        ///  艺人 uuid
        /// </summary>
        public string actorUuid = default(string);
        /// <summary>
        ///  开始时间
        /// </summary>
        public long startTime = default(long);
    }
    

}

