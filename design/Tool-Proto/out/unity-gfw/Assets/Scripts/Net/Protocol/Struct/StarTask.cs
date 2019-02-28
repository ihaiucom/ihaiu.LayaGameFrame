/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  星级任务
    /// </summary>
    public class StarTask 
    {
        /// <summary>
        ///  任务ID
        /// </summary>
        public int taskid = default(int);
        /// <summary>
        ///  任务类型
        /// </summary>
        public int taskType = default(int);
        /// <summary>
        ///  奖励ID
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  队长奖励物品数量
        /// </summary>
        public int captainItemNum = default(int);
        /// <summary>
        ///  队员奖励物品数量
        /// </summary>
        public int itemNum = default(int);
        /// <summary>
        ///  需要的参数
        /// </summary>
        public List<int> needParam = default(List<int>);
        /// <summary>
        ///  任务进度
        /// </summary>
        public int progress = default(int);
        /// <summary>
        ///  0未完成  1已完成 2领取
        /// </summary>
        public int status = default(int);
        /// <summary>
        ///  协助任务的玩家
        /// </summary>
        public string helpUuid = default(string);
        /// <summary>
        ///  接取任务的玩家
        /// </summary>
        public string receiveUuid = default(string);
    }
    

}

