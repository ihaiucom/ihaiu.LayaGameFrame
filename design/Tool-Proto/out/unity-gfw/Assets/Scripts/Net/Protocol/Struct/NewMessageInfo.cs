/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class NewMessageInfo 
    {
        /// <summary>
        ///  未读消息的数量
        /// </summary>
        public int num = default(int);
        /// <summary>
        ///  消息类型，user/system
        /// </summary>
        public string type = default(string);
        /// <summary>
        ///  最新一条未读消息
        /// </summary>
        public MessageInfo userMsg = default(MessageInfo);
        /// <summary>
        ///  系统消息
        /// </summary>
        public SystemMessage systemMsg = default(SystemMessage);
    }
    

}

