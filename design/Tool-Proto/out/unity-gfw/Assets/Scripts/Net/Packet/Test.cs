// ----------------------------------------
//
//  MADE BY GENERATOR AT 2018-12-10 20:14:49,
//  PLEASE DO NOT REWRITE.
//
// ----------------------------------------

using GameFramework.Net;
using System.Collections.Generic;
using StarForce;

namespace StarForce.Test
{
    [RequestMsg(URL = "test/AddItem")]
    public class AddItemRequest
    {
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int); 
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class AddItemResponse 
    {
    } 

    [RequestMsg(URL = "test/AddFans")]
    public class AddFansRequest
    {
        /// <summary>
        ///  粉丝数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class AddFansResponse 
    {
    } 

    [RequestMsg(URL = "test/AddExpect")]
    public class AddExpectRequest
    {
        /// <summary>
        ///  期待值数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class AddExpectResponse 
    {
    } 

    [RequestMsg(URL = "test/DeleteMovie")]
    public class DeleteMovieRequest
    {
        /// <summary>
        ///  电影id
        /// </summary>
        public string uuid = default(string); 
    } 

    public class DeleteMovieResponse 
    {
    } 

    [RequestMsg(URL = "test/AddStarStory")]
    public class AddStarStoryRequest
    {
        /// <summary>
        ///  剧本星级
        /// </summary>
        public int starId = default(int); 
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int); 
    } 

    public class AddStarStoryResponse 
    {
    } 

    [RequestMsg(URL = "test/AddStory")]
    public class AddStoryRequest
    {
        /// <summary>
        ///  剧本id
        /// </summary>
        public int storyId = default(int); 
    } 

    public class AddStoryResponse 
    {
    } 

    [RequestMsg(URL = "test/AddActorSkillExp")]
    public class AddActorSkillExpRequest
    {
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int); 
        public int amount = default(int); 
    } 

    public class AddActorSkillExpResponse 
    {
    } 

    [RequestMsg(URL = "test/AddStoryProgress")]
    public class AddStoryProgressRequest
    {
        /// <summary>
        ///  剧本唯一ID
        /// </summary>
        public int storyId = default(int); 
        /// <summary>
        ///  哪一个
        /// </summary>
        public int index = default(int); 
    } 

    public class AddStoryProgressResponse 
    {
    } 

    [RequestMsg(URL = "test/FinishGuide")]
    public class FinishGuideRequest
    {
    } 

    public class FinishGuideResponse 
    {
    } 

    [RequestMsg(URL = "test/debug")]
    public class DebugRequest
    {
        public int num = default(int); 
    } 

    public class DebugResponse 
    {
    } 

    [RequestMsg(URL = "test/AddGift")]
    public class AddGiftRequest
    {
        /// <summary>
        ///  兑换码
        /// </summary>
        public string giftUuid = default(string); 
        /// <summary>
        ///  兑换码配置文件 id
        /// </summary>
        public int giftId = default(int); 
        /// <summary>
        ///  指定使用者
        /// </summary>
        public int targetId = default(int); 
        /// <summary>
        ///  开始时间
        /// </summary>
        public int startTime = default(int); 
        /// <summary>
        ///  结束时间
        /// </summary>
        public int endTime = default(int); 
        /// <summary>
        ///  总共可用次数
        /// </summary>
        public int total = default(int); 
    } 

    public class AddGiftResponse 
    {
    } 

    [RequestMsg(URL = "test/SetBlockLevel")]
    public class SetBlockLevelRequest
    {
        /// <summary>
        ///  街区等级
        /// </summary>
        public int level = default(int); 
    } 

    public class SetBlockLevelResponse 
    {
    } 

    [RequestMsg(URL = "test/RefreshTime")]
    public class RefreshTimeRequest
    {
        /// <summary>
        ///  刷新类型
        /// </summary>
        public EGMRefreshType type = 0; 
    } 

    public class RefreshTimeResponse 
    {
    } 

    [RequestMsg(URL = "test/PutOrderItems")]
    public class PutOrderItemsRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string); 
    } 

    public class PutOrderItemsResponse 
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    [RequestMsg(URL = "test/GetAutoCooperate")]
    public class GetAutoCooperateRequest
    {
    } 

    public class GetAutoCooperateResponse 
    {
        public int loseNum = default(int);
        public int successNum = default(int);
    } 

    [RequestMsg(URL = "test/UpdateOscar")]
    public class UpdateOscarRequest
    {
    } 

    public class UpdateOscarResponse 
    {
    } 

    [RequestMsg(URL = "test/setAllStoryGold")]
    public class SetAllStoryGoldRequest
    {
    } 

    public class SetAllStoryGoldResponse 
    {
    } 

    [RequestMsg(URL = "test/LockAllProduce")]
    public class LockAllProduceRequest
    {
    } 

    public class LockAllProduceResponse 
    {
    } 

    [RequestMsg(URL = "test/SetSecretaryStatus")]
    public class SetSecretaryStatusRequest
    {
        /// <summary>
        ///  小秘书状态
        /// </summary>
        public int status = default(int); 
    } 

    public class SetSecretaryStatusResponse 
    {
    } 

    [RequestMsg(URL = "test/CleanSecretaryTimes")]
    public class CleanSecretaryTimesRequest
    {
    } 

    public class CleanSecretaryTimesResponse 
    {
    } 

    [RequestMsg(URL = "test/GetRechargeGift")]
    public class GetRechargeGiftRequest
    {
    } 

    public class GetRechargeGiftResponse 
    {
    } 

    [RequestMsg(URL = "test/GotoCity")]
    public class GotoCityRequest
    {
        /// <summary>
        ///  1... 最后一个城市的编号
        /// </summary>
        public int id = default(int); 
    } 

    public class GotoCityResponse 
    {
    } 

    [RequestMsg(URL = "test/GotoCityBefore")]
    public class GotoCityBeforeRequest
    {
        /// <summary>
        ///  1... 最后一个城市的编号
        /// </summary>
        public int id = default(int); 
    } 

    public class GotoCityBeforeResponse 
    {
    } 

    [RequestMsg(URL = "test/AddManage")]
    public class AddManageRequest
    {
    } 

    public class AddManageResponse 
    {
    } 

    [RequestMsg(URL = "test/SetAllActorLv")]
    public class SetAllActorLvRequest
    {
    } 

    public class SetAllActorLvResponse 
    {
    } 

}
