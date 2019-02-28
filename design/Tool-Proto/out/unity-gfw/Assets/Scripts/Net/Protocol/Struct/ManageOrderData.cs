/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  经营订单
    /// </summary>
    public class ManageOrderData  : ShardDBObject
    {
        /// <summary>
        ///  经营订单ID
        /// </summary>
        public int orderId = default(int);
        /// <summary>
        ///  已经塞入的物品
        /// </summary>
        public List<OrderItems> items = default(List<OrderItems>);
        /// <summary>
        ///  订单位置信息
        /// </summary>
        public int position = default(int);
        /// <summary>
        ///  订单开始时间
        /// </summary>
        public long lastTime = default(long);
        /// <summary>
        ///  是否是删除订单 true表示被删除了
        /// </summary>
        public bool delFlag = default(bool);
    }
    

}

