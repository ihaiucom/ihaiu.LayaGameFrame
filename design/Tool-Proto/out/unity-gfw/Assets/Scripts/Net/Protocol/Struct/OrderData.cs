/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class OrderData  : DBObject
    {
        public long entityId = default(long);
        /// <summary>
        ///  订单号
        /// </summary>
        public long orderId = default(long);
        /// <summary>
        ///  三方订单id
        /// </summary>
        public string outerOrderId = default(string);
        /// <summary>
        ///  商品编号
        /// </summary>
        public string productId = default(string);
        /// <summary>
        ///  商品数量
        /// </summary>
        public int productNum = default(int);
        /// <summary>
        ///  unix时间戳
        /// </summary>
        public long createTime = default(long);
        /// <summary>
        ///  unix时间戳 (收到第三方支付系统成功支付的回调的时间)
        /// </summary>
        public long paymentTime = default(long);
        /// <summary>
        ///  处理次数
        /// </summary>
        public int handleCount = default(int);
    }
    

}

