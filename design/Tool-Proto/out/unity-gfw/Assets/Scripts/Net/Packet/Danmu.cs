// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Danmu
{
    [RequestMsg(URL = "Danmu/set")]
    public class SetRequest
    {
        /// <summary>
        ///  颁奖场次 Id
        /// </summary>
        public int id = default(int); 
        /// <summary>
        ///  弹幕消息
        /// </summary>
        public string msg = default(string); 
    } 

    public class SetResponse 
    {
    } 

    /// <summary>
    ///  可以传入 time 表示获取这个时间戳以后的弹幕
    /// </summary>
    [RequestMsg(URL = "Danmu/get")]
    public class GetRequest
    {
        /// <summary>
        ///  颁奖场次 Id
        /// </summary>
        public int id = default(int); 
        /// <summary>
        ///  时间戳
        /// </summary>
        public int time = default(int); 
    } 

    public class GetResponse 
    {
        /// <summary>
        ///  返回结果
        /// </summary>
        public List<DanmuItem> data = default(List<DanmuItem>);
        /// <summary>
        ///  返回的时间戳
        /// </summary>
        public int time = default(int);
    } 

}
