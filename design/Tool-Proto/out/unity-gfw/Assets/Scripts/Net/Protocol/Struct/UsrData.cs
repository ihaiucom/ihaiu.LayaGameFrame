/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/

using System.Collections.Generic;

namespace StarForce
{
    public class UsrData  : ShardDBObject
    {
        /// <summary>
        ///  玩家名字
        /// </summary>
        public string usrName = default(string);
        /// <summary>
        ///  渠道代码
        /// </summary>
        public string channel = default(string);
        /// <summary>
        ///  注册时间 unix时间戳
        /// </summary>
        public long registerTime = default(long);
        /// <summary>
        ///  注册IP
        /// </summary>
        public string registerIP = default(string);
        /// <summary>
        ///  次登录时间 unix时间戳
        /// </summary>
        public long lastLoginTime = default(long);
        /// <summary>
        ///  上次登录IP
        /// </summary>
        public string lastLoginIP = default(string);
        /// <summary>
        ///  玩家状态
        /// </summary>
        public EUsrState usrState = 0;
        /// <summary>
        ///  状态注释
        /// </summary>
        public string usrRemark = default(string);
        /// <summary>
        ///  冻结的到期时间 0是永久冻结 unix时间戳
        /// </summary>
        public long usrFreezeTime = default(long);
    }
    

}

