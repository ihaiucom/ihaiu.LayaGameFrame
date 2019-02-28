// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.DailySign
{
    [RequestMsg(URL = "dailySign/sign")]
    public class SignRequest
    {
    } 

    public class SignResponse 
    {
        /// <summary>
        ///  掉落
        /// </summary>
        public ItemDesc dropout = default(ItemDesc);
    } 

}
