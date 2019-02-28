// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.CinemaBuild
{
    /// <summary>
    ///  请求
    /// </summary>
    [RequestMsg(URL = "CinemaBuild/ExtendFloor")]
    public class ExtendFloorRequest
    {
        /// <summary>
        ///  楼层数
        /// </summary>
        public int floor = default(int); 
    } 

    public class ExtendFloorResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  当前扩充的楼层数
        /// </summary>
        public int floor = default(int);
    } 

    [RequestMsg(URL = "CinemaBuild/BuildRoom")]
    public class BuildRoomRequest
    {
        /// <summary>
        ///  楼层数
        /// </summary>
        public int floor = default(int); 
        /// <summary>
        ///  建筑类型
        /// </summary>
        public int roomType = default(int); 
    } 

    public class BuildRoomResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  楼层数
        /// </summary>
        public int floor = default(int);
        /// <summary>
        ///  建筑id
        /// </summary>
        public int roomId = default(int);
    } 

    [RequestMsg(URL = "CinemaBuild/UpgradeRoom")]
    public class UpgradeRoomRequest
    {
        /// <summary>
        ///  建筑id
        /// </summary>
        public int roomId = default(int); 
    } 

    public class UpgradeRoomResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  升级前的房间id
        /// </summary>
        public int preRoomId = default(int);
        /// <summary>
        ///  建筑id
        /// </summary>
        public int roomId = default(int);
    } 

    [RequestMsg(URL = "CinemaBuild/goldExchange")]
    public class GoldExchangeRequest
    {
        /// <summary>
        ///  兑换的次数
        /// </summary>
        public int count = default(int); 
    } 

    public class GoldExchangeResponse 
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  兑换次数
        /// </summary>
        public int count = default(int);
        /// <summary>
        ///  今日已经兑换的次数
        /// </summary>
        public int totalCount = default(int);
    } 

}
