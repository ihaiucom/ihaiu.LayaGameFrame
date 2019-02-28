// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Pay
{
    [RequestMsg(URL = "pay/StartOrder")]
    public class StartOrderRequest
    {
        /// <summary>
        ///  商品id
        /// </summary>
        public int id = default(int); 
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class StartOrderResponse 
    {
        /// <summary>
        ///  商品id
        /// </summary>
        public int id = default(int);
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int);
        /// <summary>
        ///  订单id
        /// </summary>
        public string orderId = default(string);
    } 

    [RequestMsg(URL = "pay/FinishOrder")]
    public class FinishOrderRequest
    {
        /// <summary>
        ///  订单id
        /// </summary>
        public string orderId = default(string); 
        /// <summary>
        ///  结果 0 成功, 1 失败
        /// </summary>
        public int result = default(int); 
    } 

    public class FinishOrderResponse 
    {
        /// <summary>
        ///  订单id
        /// </summary>
        public string orderId = default(string);
        /// <summary>
        ///  结果 0 成功, 1 失败
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

}
