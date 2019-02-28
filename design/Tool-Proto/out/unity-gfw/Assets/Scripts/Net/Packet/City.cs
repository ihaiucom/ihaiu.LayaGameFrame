// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.City
{
    [RequestMsg(URL = "city/SetPropagandaActor")]
    public class SetPropagandaActorRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int); 
        /// <summary>
        ///  区域id
        /// </summary>
        public int areaId = default(int); 
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int); 
    } 

    public class SetPropagandaActorResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "city/Propaganda")]
    public class PropagandaRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int); 
        /// <summary>
        ///  区域id
        /// </summary>
        public int areaId = default(int); 
    } 

    public class PropagandaResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "city/Roadshow")]
    public class RoadshowRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int); 
        /// <summary>
        ///  区域id
        /// </summary>
        public int areaId = default(int); 
    } 

    public class RoadshowResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  0成功 1失败
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "city/SetAmbassador")]
    public class SetAmbassadorRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int); 
        /// <summary>
        ///  位置1,2,3,4....
        /// </summary>
        public int psition = default(int); 
        /// <summary>
        ///  艺人唯一ID
        /// </summary>
        public string actuuid = default(string); 
    } 

    public class SetAmbassadorResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "city/GetReward")]
    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int); 
    } 

    public class GetRewardResponse 
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    [RequestMsg(URL = "city/HoldCity")]
    public class HoldCityRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class HoldCityResponse 
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

}
