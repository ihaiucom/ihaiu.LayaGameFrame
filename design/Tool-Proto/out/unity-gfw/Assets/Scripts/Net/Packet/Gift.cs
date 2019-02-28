// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Gift
{
    [RequestMsg(URL = "Gift/Exchange")]
    public class ExchangeRequest
    {
        /// <summary>
        ///  兑换码 id
        /// </summary>
        public string id = default(string); 
    } 

    public class ExchangeResponse 
    {
        public int result = default(int);
        /// <summary>
        ///  掉落
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

}
