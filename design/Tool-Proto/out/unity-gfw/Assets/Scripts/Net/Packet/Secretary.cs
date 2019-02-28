// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Secretary
{
    [RequestMsg(URL = "secretary/GetDailyReward")]
    public class GetDailyRewardRequest
    {
    } 

    public class GetDailyRewardResponse 
    {
    } 

    [RequestMsg(URL = "secretary/OpenSecretary")]
    public class OpenSecretaryRequest
    {
        /// <summary>
        ///  操作哪一个模块小秘书
        /// </summary>
        public int key = default(int); 
        /// <summary>
        ///  0关闭 1开启
        /// </summary>
        public int type = default(int); 
    } 

    public class OpenSecretaryResponse 
    {
        /// <summary>
        ///  操作哪一个模块小秘书
        /// </summary>
        public int key = default(int);
        /// <summary>
        ///  0关闭 1开启
        /// </summary>
        public int type = default(int);
    } 

    [RequestMsg(URL = "secretary/ApplyMovieLicence")]
    public class ApplyMovieLicenceRequest
    {
    } 

    public class ApplyMovieLicenceResponse 
    {
    } 

    [RequestMsg(URL = "secretary/RewardMovieLicence")]
    public class RewardMovieLicenceRequest
    {
    } 

    public class RewardMovieLicenceResponse 
    {
    } 

}
