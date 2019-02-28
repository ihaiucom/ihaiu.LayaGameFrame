// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.ManageOrder
{
    [RequestMsg(URL = "manageOrder/PutItem")]
    public class PutItemRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string); 
        /// <summary>
        ///  协助的人
        /// </summary>
        public int entityId = default(int); 
        /// <summary>
        ///  物品baseId 
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  0操作自己的订单，1别人的
        /// </summary>
        public int type = default(int); 
    } 

    public class PutItemResponse 
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  奖励信息
        /// </summary>
        public ItemDesc itemInfo = default(ItemDesc);
        /// <summary>
        ///  0操作自己的订单，1别人的
        /// </summary>
        public int type = default(int);
    } 

    [RequestMsg(URL = "manageOrder/DelOrder")]
    public class DelOrderRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class DelOrderResponse 
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "manageOrder/FinishOrder")]
    public class FinishOrderRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class FinishOrderResponse 
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "manageOrder/DealOrder")]
    public class DealOrderRequest
    {
    } 

    public class DealOrderResponse 
    {
    } 

}
