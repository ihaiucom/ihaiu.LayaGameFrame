// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.SmallTarget
{
    [RequestMsg(URL = "smallTarget/LevGift")]
    public class LevGiftRequest
    {
    } 

    public class LevGiftResponse 
    {
        /// <summary>
        ///  礼包id
        /// </summary>
        public int giftId = default(int);
    } 

    /// <summary>
    ///  奖杯礼包
    /// </summary>
    [RequestMsg(URL = "smallTarget/CupGift")]
    public class CupGiftRequest
    {
    } 

    public class CupGiftResponse 
    {
        public int giftId = default(int);
    } 

    /// <summary>
    ///  奖杯礼包邮件
    /// </summary>
    [RequestMsg(URL = "smallTarget/GetCupMail")]
    public class GetCupMailRequest
    {
    } 

    public class GetCupMailResponse 
    {
        public int giftId = default(int);
    } 

}
