/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  合作订单
    /// </summary>
    public class CooperateOrderData  : DBObject
    {
        /// <summary>
        ///  订单方
        /// </summary>
        public int entityId = default(int);
        /// <summary>
        ///  头像ID
        /// </summary>
        public int portrait = default(int);
        /// <summary>
        ///  订单唯一ID
        /// </summary>
        public string orderUuid = default(string);
        public int itemId = default(int);
        public long amount = default(long);
        /// <summary>
        ///  放入时间
        /// </summary>
        public long lastTime = default(long);
    }
    

}

