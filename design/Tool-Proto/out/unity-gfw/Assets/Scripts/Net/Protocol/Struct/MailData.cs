/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class MailData  : ShardDBObject
    {
        /// <summary>
        ///  标题
        /// </summary>
        public string title = default(string);
        /// <summary>
        ///  内容
        /// </summary>
        public string content = default(string);
        /// <summary>
        ///  奖励列表
        /// </summary>
        public List<ItemDesc> itemList = default(List<ItemDesc>);
        /// <summary>
        ///  创建时间
        /// </summary>
        public long createTime = default(long);
        /// <summary>
        ///  过期时间
        /// </summary>
        public long endTime = default(long);
        public bool IsRewardGot = default(bool);
        /// <summary>
        ///  是否是新邮件
        /// </summary>
        public bool isNew = default(bool);
    }
    

}

