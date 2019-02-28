// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Mall
{
    [RequestMsg(URL = "mall/buy")]
    public class BuyRequest
    {
        /// <summary>
        ///  商品编号
        /// </summary>
        public int goodsId = default(int); 
        /// <summary>
        ///  商品数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class BuyResponse 
    {
        /// <summary>
        ///  返回购买结果
        /// </summary>
        public int result = default(int);
    } 

}
