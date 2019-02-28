// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.ProgressBox
{
    [RequestMsg(URL = "progressBox/GetReward")]
    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一进度宝箱编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  档位
        /// </summary>
        public int gear = default(int); 
    } 

    public class GetRewardResponse 
    {
        /// <summary>
        ///  唯一进度宝箱编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  档位
        /// </summary>
        public int gear = default(int);
    } 

}
