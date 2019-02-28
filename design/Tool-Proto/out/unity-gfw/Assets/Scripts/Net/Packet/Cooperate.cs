// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Cooperate
{
    [RequestMsg(URL = "cooperate/Apply")]
    public class ApplyRequest
    {
        /// <summary>
        ///  合作者ID 为0时，为公开邀请
        /// </summary>
        public int entityId = default(int); 
    } 

    public class ApplyResponse 
    {
    } 

    [RequestMsg(URL = "cooperate/CancelCooperate")]
    public class CancelCooperateRequest
    {
    } 

    public class CancelCooperateResponse 
    {
    } 

    [RequestMsg(URL = "cooperate/Relieve")]
    public class RelieveRequest
    {
    } 

    public class RelieveResponse 
    {
    } 

    [RequestMsg(URL = "cooperate/Approve")]
    public class ApproveRequest
    {
        /// <summary>
        ///  审批类型 0同意 1拒绝
        /// </summary>
        public int type = default(int); 
        /// <summary>
        ///  审批的哪个玩家
        /// </summary>
        public string entityId = default(string); 
    } 

    public class ApproveResponse 
    {
        /// <summary>
        ///  审批类型 0同意 1拒绝
        /// </summary>
        public int type = default(int);
        /// <summary>
        ///  审批的哪个玩家
        /// </summary>
        public string entityId = default(string);
    } 

    [RequestMsg(URL = "cooperate/GetInfo")]
    public class GetInfoRequest
    {
        public List<string> oldOrderUuids = default(List<string>); 
    } 

    public class GetInfoResponse 
    {
    } 

    [RequestMsg(URL = "cooperate/TaskOperate")]
    public class TaskOperateRequest
    {
        /// <summary>
        ///  任务操作 0接取 1协作
        /// </summary>
        public int type = default(int); 
        /// <summary>
        ///  哪个任务
        /// </summary>
        public int taskId = default(int); 
        /// <summary>
        ///  星级
        /// </summary>
        public int star = default(int); 
    } 

    public class TaskOperateResponse 
    {
        /// <summary>
        ///  任务操作 0接取 1协作
        /// </summary>
        public int type = default(int);
        /// <summary>
        ///  哪个任务
        /// </summary>
        public int taskId = default(int);
        /// <summary>
        ///  星级
        /// </summary>
        public int star = default(int);
    } 

    [RequestMsg(URL = "cooperate/GetTaskReward")]
    public class GetTaskRewardRequest
    {
        /// <summary>
        ///  哪个任务
        /// </summary>
        public int taskId = default(int); 
        /// <summary>
        ///  星级 
        /// </summary>
        public int star = default(int); 
    } 

    public class GetTaskRewardResponse 
    {
        /// <summary>
        ///  哪个任务
        /// </summary>
        public int taskId = default(int);
        /// <summary>
        ///  星级
        /// </summary>
        public int star = default(int);
    } 

    [RequestMsg(URL = "cooperate/GiveReward")]
    public class GiveRewardRequest
    {
        /// <summary>
        ///  赠送物品ID
        /// </summary>
        public int itemId = default(int); 
    } 

    public class GiveRewardResponse 
    {
        public int itemId = default(int);
    } 

    [RequestMsg(URL = "cooperate/GetProgressTask")]
    public class GetProgressTaskRequest
    {
        /// <summary>
        ///  领取哪一个
        /// </summary>
        public int index = default(int); 
    } 

    public class GetProgressTaskResponse 
    {
        public int index = default(int);
    } 

    [RequestMsg(URL = "cooperate/ReadCooperate")]
    public class ReadCooperateRequest
    {
    } 

    public class ReadCooperateResponse 
    {
    } 

    [RequestMsg(URL = "cooperate/GetTaskInfo")]
    public class GetTaskInfoRequest
    {
    } 

    public class GetTaskInfoResponse 
    {
    } 

    [RequestMsg(URL = "cooperate/GetOrderInfo")]
    public class GetOrderInfoRequest
    {
        public List<string> oldOrderUuids = default(List<string>); 
    } 

    public class GetOrderInfoResponse 
    {
    } 

}
