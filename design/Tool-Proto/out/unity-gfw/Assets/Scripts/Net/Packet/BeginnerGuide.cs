// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.BeginnerGuide
{
    [RequestMsg(URL = "BeginnerGuide/CompleteGuide")]
    public class CompleteGuideRequest
    {
        /// <summary>
        ///  引导任务编号
        /// </summary>
        public int gId = default(int); 
        /// <summary>
        ///  引导类型
        /// </summary>
        public EGuideType type = 0; 
    } 

    public class CompleteGuideResponse 
    {
        /// <summary>
        ///  引导任务编号
        /// </summary>
        public int gId = default(int);
        /// <summary>
        ///  引导类型
        /// </summary>
        public EGuideType type = 0;
    } 

    [RequestMsg(URL = "BeginnerGuide/GuideEndReward")]
    public class GuideEndRewardRequest
    {
    } 

    public class GuideEndRewardResponse 
    {
        /// <summary>
        ///  没有为true
        /// </summary>
        public bool isNewActor = default(bool);
    } 

}
