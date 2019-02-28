/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  合作任务
    /// </summary>
    public class CooperateTaskData  : DBObject
    {
        public List<Ctask> tasks = default(List<Ctask>);
        /// <summary>
        ///  当前星级
        /// </summary>
        public int currentStar = default(int);
        public int progree = default(int);
        public int lastTime = default(int);
    }
    

}

