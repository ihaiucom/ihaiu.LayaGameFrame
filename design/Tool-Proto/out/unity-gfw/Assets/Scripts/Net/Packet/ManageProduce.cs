// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.ManageProduce
{
    [RequestMsg(URL = "manageProduce/Produce")]
    public class ProduceRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class ProduceResponse 
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "manageProduce/GetReward")]
    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class GetRewardResponse 
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "manageProduce/Uplevel")]
    public class UplevelRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  升级效果id
        /// </summary>
        public int skillId = default(int); 
    } 

    public class UplevelResponse 
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  升级效果id
        /// </summary>
        public int skillId = default(int);
    } 

    [RequestMsg(URL = "manageProduce/SendActor")]
    public class SendActorRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  艺人的唯一ID 
        /// </summary>
        public int actBaseId = default(int); 
    } 

    public class SendActorResponse 
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  艺人的唯一ID 
        /// </summary>
        public int actBaseId = default(int);
    } 

    [RequestMsg(URL = "manageProduce/Deblocking")]
    public class DeblockingRequest
    {
        /// <summary>
        ///  需要解锁的生产ID
        /// </summary>
        public int produceId = default(int); 
    } 

    public class DeblockingResponse 
    {
        /// <summary>
        ///  需要解锁的生产ID
        /// </summary>
        public int produceId = default(int);
    } 

    [RequestMsg(URL = "manageProduce/QuickGetReward")]
    public class QuickGetRewardRequest
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int); 
    } 

    public class QuickGetRewardResponse 
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int);
    } 

    [RequestMsg(URL = "manageProduce/QuickProduce")]
    public class QuickProduceRequest
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int); 
    } 

    public class QuickProduceResponse 
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int);
        /// <summary>
        ///  生产了多少个
        /// </summary>
        public int num = default(int);
    } 

    [RequestMsg(URL = "manageProduce/cleanTime")]
    public class CleanTimeRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class CleanTimeResponse 
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

}
