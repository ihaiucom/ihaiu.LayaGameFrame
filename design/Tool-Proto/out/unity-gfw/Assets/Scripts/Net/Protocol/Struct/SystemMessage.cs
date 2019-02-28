/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class SystemMessage 
    {
        /// <summary>
        ///  玩家id
        /// </summary>
        public int userId = default(int);
        /// <summary>
        ///  信息id // 世界频道的消息id
        /// </summary>
        public int messageId = default(int);
        /// <summary>
        ///  信息id //MsgChat表
        /// </summary>
        public int message = default(int);
        /// <summary>
        ///  发送时间
        /// </summary>
        public int time = default(int);
        /// <summary>
        ///  信息详情
        /// </summary>
        public List<FieldInfo> fieldInfo = default(List<FieldInfo>);
    }
    

}

