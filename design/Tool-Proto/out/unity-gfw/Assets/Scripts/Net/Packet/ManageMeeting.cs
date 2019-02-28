// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.ManageMeeting
{
    [RequestMsg(URL = "manageMeeting/GetReward")]
    public class GetRewardRequest
    {
        /// <summary>
        ///  0领取 1回绝
        /// </summary>
        public int type = default(int); 
    } 

    public class GetRewardResponse 
    {
        /// <summary>
        ///  0领取 1回绝
        /// </summary>
        public int type = default(int);
    } 

    [RequestMsg(URL = "manageMeeting/Markup")]
    public class MarkupRequest
    {
        /// <summary>
        ///  2 50% 1 200%
        /// </summary>
        public int type = default(int); 
    } 

    public class MarkupResponse 
    {
        /// <summary>
        ///  2 50% 1 200%
        /// </summary>
        public int type = default(int);
    } 

}
