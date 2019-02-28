/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    /// <summary>
    ///  单个商品限购数据
    /// </summary>
    public class MallItemLimitData  : ShardDBObject
    {
        /// <summary>
        ///  商品id
        /// </summary>
        public int id = default(int);
        /// <summary>
        ///  限购类型
        /// </summary>
        public EMallItemLimitType type = 0;
        /// <summary>
        ///  已经购买的个数
        /// </summary>
        public int amount = default(int);
    }
    

}

