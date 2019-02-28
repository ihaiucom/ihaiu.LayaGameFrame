/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  任务结构
    /// </summary>
    public class TaskData  : ShardDBObject
    {
        /// <summary>
        ///  对应的策划表id
        /// </summary>
        public int cid = default(int);
        /// <summary>
        ///  任务类型
        /// </summary>
        public EAchievementType type = 0;
        /// <summary>
        ///  完成进度
        /// </summary>
        public int progress = default(int);
        /// <summary>
        ///  成就或任务状态
        /// </summary>
        public EAchievementState state = 0;
    }
    

}

