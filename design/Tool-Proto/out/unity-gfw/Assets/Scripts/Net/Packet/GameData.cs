// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.GameData
{
    /// <summary>
    ///  请求注册
    /// </summary>
    [RequestMsg(URL = "GameData/Auth")]
    public class AuthRequest
    {
        /// <summary>
        ///  密码
        /// </summary>
        public string pass = default(string); 
    } 

    public class AuthResponse 
    {
        /// <summary>
        ///  返回 0成功 1失败
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  请求游客转正
    /// </summary>
    [RequestMsg(URL = "GameData/VisitorAuth")]
    public class VisitorAuthRequest
    {
        /// <summary>
        ///  用户名
        /// </summary>
        public string name = default(string); 
        /// <summary>
        ///  密码
        /// </summary>
        public string pass = default(string); 
    } 

    public class VisitorAuthResponse 
    {
        /// <summary>
        ///  返回 0成功 1不是游客账号 2绑定失败 3重名
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "GameData/InitGameData")]
    public class InitGameDataRequest
    {
        /// <summary>
        ///  公司名字
        /// </summary>
        public string name = default(string); 
        /// <summary>
        ///  性别
        /// </summary>
        public EUserSex sex = 0; 
    } 

    public class InitGameDataResponse 
    {
        /// <summary>
        ///  返回 0成功 1失败
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  请求登陆
    /// </summary>
    [RequestMsg(URL = "GameData/GetLoginGameData")]
    public class GetLoginGameDataRequest
    {
        /// <summary>
        ///  密码
        /// </summary>
        public string pass = default(string); 
        /// <summary>
        ///  客户端的渠道代码
        /// </summary>
        public string channel = default(string); 
    } 

    public class GetLoginGameDataResponse 
    {
        /// <summary>
        ///  服务器编号
        /// </summary>
        public string serverCode = default(string);
        /// <summary>
        ///  服务器名称
        /// </summary>
        public string serverName = default(string);
        public List<Notice> noticeList = default(List<Notice>);
        /// <summary>
        ///  时区
        /// </summary>
        public string timeZone = default(string);
    } 

    [RequestMsg(URL = "GameData/GetInitGameData")]
    public class GetInitGameDataRequest
    {
        /// <summary>
        ///  需要获取的类型的string描述 DBOType枚举
        /// </summary>
        public List<string> nameList = default(List<string>); 
    } 

    public class GetInitGameDataResponse 
    {
    } 

    [RequestMsg(URL = "GameData/RenameGameData")]
    public class RenameGameDataRequest
    {
        /// <summary>
        ///  更改后的名字
        /// </summary>
        public string playerName = default(string); 
    } 

    public class RenameGameDataResponse 
    {
        /// <summary>
        ///  返回 0成功 1失败 2无须更改
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "GameData/RePerSignatureGameData")]
    public class RePerSignatureGameDataRequest
    {
        /// <summary>
        ///  修改玩家的个性签名
        /// </summary>
        public string perSignature = default(string); 
    } 

    public class RePerSignatureGameDataResponse 
    {
        /// <summary>
        ///  返回 0成功 1失败
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "GameData/RePortraitGameData")]
    public class RePortraitGameDataRequest
    {
        /// <summary>
        ///  0表示穿戴 1表示购买
        /// </summary>
        public int type = default(int); 
        /// <summary>
        ///  头像ID
        /// </summary>
        public int portraitId = default(int); 
    } 

    public class RePortraitGameDataResponse 
    {
        /// <summary>
        ///  返回 0成功 1失败 2无须更改
        /// </summary>
        public int result = default(int);
    } 

    [RequestMsg(URL = "GameData/GetGameInfoExt")]
    public class GetGameInfoExtRequest
    {
    } 

    public class GetGameInfoExtResponse 
    {
    } 

    [RequestMsg(URL = "GameData/GetInitActor")]
    public class GetInitActorRequest
    {
        public int index = default(int); 
    } 

    public class GetInitActorResponse 
    {
    } 

    [RequestMsg(URL = "GameData/GetNoticeList")]
    public class GetNoticeListRequest
    {
    } 

    public class GetNoticeListResponse 
    {
        public List<Notice> noticeList = default(List<Notice>);
    } 

}
