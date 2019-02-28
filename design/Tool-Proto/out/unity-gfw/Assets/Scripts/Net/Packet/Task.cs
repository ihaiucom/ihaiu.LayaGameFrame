// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Task
{
    /// <summary>
    ///  请求
    /// </summary>
    [RequestMsg(URL = "task/reward")]
    public class RewardRequest
    {
        /// <summary>
        ///  id
        /// </summary>
        public string tId = default(string); 
    } 

    /// <summary>
    ///  回复
    /// </summary>
    public class RewardResponse 
    {
        /// <summary>
        ///  id
        /// </summary>
        public string tId = default(string);
        /// <summary>
        ///  奖励内容
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

}
