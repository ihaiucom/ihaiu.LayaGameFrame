// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-11-30 09:55:36,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.LevGift
{
    [RequestMsg(URL = "levGift/GetLevGift")]
    public class GetLevGiftRequest
    {
    } 

    public class GetLevGiftResponse 
    {
        /// <summary>
        ///  礼包id
        /// </summary>
        public int giftId = default(int);
    } 

}
