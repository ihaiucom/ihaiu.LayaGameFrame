// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Chat
{
    [RequestMsg(URL = "chat/MessageNotice")]
    public class MessageNoticeRequest
    {
        public int channel = default(int); 
    } 

    public class MessageNoticeResponse 
    {
        /// <summary>
        ///  房间号，世界频道时：为0
        /// </summary>
        public int roomId = default(int);
        public NewMessageInfo newMessage = default(NewMessageInfo);
    } 

    [RequestMsg(URL = "chat/NewMessage")]
    public class NewMessageRequest
    {
    } 

    public class NewMessageResponse 
    {
        /// <summary>
        ///  世界频道,新消息总数量
        /// </summary>
        public NewMessageInfo worldInfo = default(NewMessageInfo);
        /// <summary>
        ///  私人频道,新消息总数量
        /// </summary>
        public NewMessageInfo privateInfo = default(NewMessageInfo);
        /// <summary>
        ///  公司频道，新消息总数量
        /// </summary>
        public NewMessageInfo companyInfo = default(NewMessageInfo);
    } 

    [RequestMsg(URL = "chat/AllMessage")]
    public class AllMessageRequest
    {
    } 

    public class AllMessageResponse 
    {
        /// <summary>
        ///  世界频道
        /// </summary>
        public List<MessageInfo> worldUserInfo = default(List<MessageInfo>);
        /// <summary>
        ///  世界频道
        /// </summary>
        public List<SystemMessage> worldSystemInfo = default(List<SystemMessage>);
        /// <summary>
        ///  私人频道
        /// </summary>
        public List<PrivateListInfo> privateInfo = default(List<PrivateListInfo>);
        /// <summary>
        ///  公司频道
        /// </summary>
        public List<MessageInfo> companyInfo = default(List<MessageInfo>);
    } 

    [RequestMsg(URL = "chat/SendMessage")]
    public class SendMessageRequest
    {
        /// <summary>
        ///  信息
        /// </summary>
        public string message = default(string); 
        /// <summary>
        ///  接收者
        /// </summary>
        public int recipient = default(int); 
        /// <summary>
        ///  房间号，如果是世界频道，不判断该字段
        /// </summary>
        public int roomId = default(int); 
        /// <summary>
        ///  频道
        /// </summary>
        public int channel = default(int); 
    } 

    public class SendMessageResponse 
    {
        /// <summary>
        ///  房间号
        /// </summary>
        public int roomId = default(int);
        /// <summary>
        ///  信息
        /// </summary>
        public MessageInfo message = default(MessageInfo);
    } 

    [RequestMsg(URL = "chat/PullMessage")]
    public class PullMessageRequest
    {
        /// <summary>
        ///  频道
        /// </summary>
        public int channel = default(int); 
        /// <summary>
        ///  房间号，如果是世界频道，不判断该字段
        /// </summary>
        public int roomId = default(int); 
        /// <summary>
        ///  0：新消息，非0：旧消息
        /// </summary>
        public int messageId = default(int); 
    } 

    public class PullMessageResponse 
    {
        /// <summary>
        ///  最新玩家消息
        /// </summary>
        public List<MessageInfo> messageInfo = default(List<MessageInfo>);
        /// <summary>
        ///  最新系统消息
        /// </summary>
        public List<SystemMessage> systemMessageInfo = default(List<SystemMessage>);
        /// <summary>
        ///  频道
        /// </summary>
        public int channel = default(int);
        /// <summary>
        ///  房间号，如果是世界频道，不判断该字段
        /// </summary>
        public int roomId = default(int);
    } 

    [RequestMsg(URL = "chat/Sheielding")]
    public class SheieldingRequest
    {
        /// <summary>
        ///  玩家id
        /// </summary>
        public int userId = default(int); 
    } 

    public class SheieldingResponse 
    {
    } 

    [RequestMsg(URL = "chat/ReleaseShield")]
    public class ReleaseShieldRequest
    {
        /// <summary>
        ///  玩家id
        /// </summary>
        public int userId = default(int); 
    } 

    public class ReleaseShieldResponse 
    {
    } 

    [RequestMsg(URL = "chat/recruit")]
    public class RecruitRequest
    {
    } 

    public class RecruitResponse 
    {
    } 

}
