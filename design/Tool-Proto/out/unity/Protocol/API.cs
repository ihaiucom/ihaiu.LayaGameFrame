/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:49,
 *  PLEASE DO NOT REWRITE.
 **/
 
using System.Collections.Generic;

public class GameDataPxy {
    
    /// <summary>
    ///  请求注册
    /// </summary>
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

    public static ServerResponse<AuthResponse> Auth(string pass)
    {
        var url = ServerContext.UrlPathJoin("GameData", "Auth");
        var req = new AuthRequest()
        {
            pass = pass,
        };
        return new ServerResponse<AuthResponse>(url, req);
    } 

    /// <summary>
    ///  请求游客转正
    /// </summary>
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

    public static ServerResponse<VisitorAuthResponse> VisitorAuth(string name, string pass)
    {
        var url = ServerContext.UrlPathJoin("GameData", "VisitorAuth");
        var req = new VisitorAuthRequest()
        {
            name = name,
            pass = pass,
        };
        return new ServerResponse<VisitorAuthResponse>(url, req);
    } 

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
    ///  请求初始化游戏数据
    /// </summary>
    /// <param name="name"> 公司名字</param> 
    /// <param name="sex"> 性别</param> 
    /// <returns></returns>
    public static ServerResponse<InitGameDataResponse> InitGameData(string name, EUserSex sex)
    {
        var url = ServerContext.UrlPathJoin("GameData", "InitGameData");
        var req = new InitGameDataRequest()
        {
            name = name,
            sex = sex,
        };
        return new ServerResponse<InitGameDataResponse>(url, req);
    } 

    /// <summary>
    ///  请求登陆
    /// </summary>
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

    /// <summary>
    ///  玩家数据初始化提交
    /// </summary>
    /// <param name="pass"> 密码</param> 
    /// <param name="channel"> 客户端的渠道代码</param> 
    /// <returns></returns>
    public static ServerResponse<GetLoginGameDataResponse> GetLoginGameData(string pass, string channel)
    {
        var url = ServerContext.UrlPathJoin("GameData", "GetLoginGameData");
        var req = new GetLoginGameDataRequest()
        {
            pass = pass,
            channel = channel,
        };
        return new ServerResponse<GetLoginGameDataResponse>(url, req);
    } 

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

    public static ServerResponse<GetInitGameDataResponse> GetInitGameData(List<string> nameList)
    {
        var url = ServerContext.UrlPathJoin("GameData", "GetInitGameData");
        var req = new GetInitGameDataRequest()
        {
            nameList = nameList,
        };
        return new ServerResponse<GetInitGameDataResponse>(url, req);
    } 

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

    /// <summary>
    ///  修改玩家的名字
    /// </summary>
    /// <param name="playerName"> 更改后的名字</param> 
    /// <returns></returns>
    public static ServerResponse<RenameGameDataResponse> RenameGameData(string playerName)
    {
        var url = ServerContext.UrlPathJoin("GameData", "RenameGameData");
        var req = new RenameGameDataRequest()
        {
            playerName = playerName,
        };
        return new ServerResponse<RenameGameDataResponse>(url, req);
    } 

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

    /// <summary>
    ///  修改玩家的个性签名
    /// </summary>
    /// <param name="perSignature"> 修改玩家的个性签名</param> 
    /// <returns></returns>
    public static ServerResponse<RePerSignatureGameDataResponse> RePerSignatureGameData(string perSignature)
    {
        var url = ServerContext.UrlPathJoin("GameData", "RePerSignatureGameData");
        var req = new RePerSignatureGameDataRequest()
        {
            perSignature = perSignature,
        };
        return new ServerResponse<RePerSignatureGameDataResponse>(url, req);
    } 

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

    /// <summary>
    ///  修改玩家的头像
    /// </summary>
    /// <param name="type"> 0表示穿戴 1表示购买</param> 
    /// <param name="portraitId"> 头像ID</param> 
    /// <returns></returns>
    public static ServerResponse<RePortraitGameDataResponse> RePortraitGameData(int type, int portraitId)
    {
        var url = ServerContext.UrlPathJoin("GameData", "RePortraitGameData");
        var req = new RePortraitGameDataRequest()
        {
            type = type,
            portraitId = portraitId,
        };
        return new ServerResponse<RePortraitGameDataResponse>(url, req);
    } 

    public class GetGameInfoExtRequest
    {
    } 

    public class GetGameInfoExtResponse
    {
    } 

    /// <summary>
    ///  获取玩家拓展信息
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetGameInfoExtResponse> GetGameInfoExt()
    {
        var url = ServerContext.UrlPathJoin("GameData", "GetGameInfoExt");
        var req = new GetGameInfoExtRequest()
        {
        };
        return new ServerResponse<GetGameInfoExtResponse>(url, req);
    } 

    public class GetInitActorRequest
    {
        public int index = default(int);
    } 

    public class GetInitActorResponse
    {
    } 

    /// <summary>
    ///  选择初始化艺人
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetInitActorResponse> GetInitActor(int index)
    {
        var url = ServerContext.UrlPathJoin("GameData", "GetInitActor");
        var req = new GetInitActorRequest()
        {
            index = index,
        };
        return new ServerResponse<GetInitActorResponse>(url, req);
    } 

    public class GetNoticeListRequest
    {
    } 

    public class GetNoticeListResponse
    {
        public List<Notice> noticeList = default(List<Notice>);
    } 

    public static ServerResponse<GetNoticeListResponse> GetNoticeList()
    {
        var url = ServerContext.UrlPathJoin("GameData", "GetNoticeList");
        var req = new GetNoticeListRequest()
        {
        };
        return new ServerResponse<GetNoticeListResponse>(url, req);
    } 

}

public class CinemaBuildPxy {
    
    /// <summary>
    ///  请求
    /// </summary>
    public class ExtendFloorRequest
    {
        /// <summary>
        ///  楼层数
        /// </summary>
        public int floor = default(int);
    } 

    public class ExtendFloorResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  当前扩充的楼层数
        /// </summary>
        public int floor = default(int);
    } 

    /// <summary>
    ///  扩建楼层
    /// </summary>
    /// <param name="floor"> 楼层数</param> 
    /// <returns></returns>
    public static ServerResponse<ExtendFloorResponse> ExtendFloor(int floor)
    {
        var url = ServerContext.UrlPathJoin("CinemaBuild", "ExtendFloor");
        var req = new ExtendFloorRequest()
        {
            floor = floor,
        };
        return new ServerResponse<ExtendFloorResponse>(url, req);
    } 

    public class BuildRoomRequest
    {
        /// <summary>
        ///  楼层数
        /// </summary>
        public int floor = default(int);
        /// <summary>
        ///  建筑类型
        /// </summary>
        public int roomType = default(int);
    } 

    public class BuildRoomResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  楼层数
        /// </summary>
        public int floor = default(int);
        /// <summary>
        ///  建筑id
        /// </summary>
        public int roomId = default(int);
    } 

    /// <summary>
    ///  建造房间
    /// </summary>
    /// <param name="floor"> 楼层数</param> 
    /// <param name="roomType"> 建筑类型</param> 
    /// <returns></returns>
    public static ServerResponse<BuildRoomResponse> BuildRoom(int floor, int roomType)
    {
        var url = ServerContext.UrlPathJoin("CinemaBuild", "BuildRoom");
        var req = new BuildRoomRequest()
        {
            floor = floor,
            roomType = roomType,
        };
        return new ServerResponse<BuildRoomResponse>(url, req);
    } 

    public class UpgradeRoomRequest
    {
        /// <summary>
        ///  建筑id
        /// </summary>
        public int roomId = default(int);
    } 

    public class UpgradeRoomResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  升级前的房间id
        /// </summary>
        public int preRoomId = default(int);
        /// <summary>
        ///  建筑id
        /// </summary>
        public int roomId = default(int);
    } 

    /// <summary>
    ///  升级房间
    /// </summary>
    /// <param name="roomId"> 建筑id</param> 
    /// <returns></returns>
    public static ServerResponse<UpgradeRoomResponse> UpgradeRoom(int roomId)
    {
        var url = ServerContext.UrlPathJoin("CinemaBuild", "UpgradeRoom");
        var req = new UpgradeRoomRequest()
        {
            roomId = roomId,
        };
        return new ServerResponse<UpgradeRoomResponse>(url, req);
    } 

    public class GoldExchangeRequest
    {
        /// <summary>
        ///  兑换的次数
        /// </summary>
        public int count = default(int);
    } 

    public class GoldExchangeResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  兑换次数
        /// </summary>
        public int count = default(int);
        /// <summary>
        ///  今日已经兑换的次数
        /// </summary>
        public int totalCount = default(int);
    } 

    /// <summary>
    ///  金币兑换
    /// </summary>
    /// <param name="count"> 兑换的次数</param> 
    /// <returns></returns>
    public static ServerResponse<GoldExchangeResponse> GoldExchange(int count)
    {
        var url = ServerContext.UrlPathJoin("CinemaBuild", "goldExchange");
        var req = new GoldExchangeRequest()
        {
            count = count,
        };
        return new ServerResponse<GoldExchangeResponse>(url, req);
    } 

}

public class TestPxy {
    
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

    /// <summary>
    ///  添加道具
    /// </summary>
    /// <param name="itemId"> 道具id</param> 
    /// <param name="amount"> 道具数量</param> 
    /// <returns></returns>
    public static ServerResponse<AddItemResponse> AddItem(int itemId, int amount)
    {
        var url = ServerContext.UrlPathJoin("test", "AddItem");
        var req = new AddItemRequest()
        {
            itemId = itemId,
            amount = amount,
        };
        return new ServerResponse<AddItemResponse>(url, req);
    } 

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

    /// <summary>
    ///  增加粉丝(公司升级)
    /// </summary>
    /// <param name="amount"> 粉丝数量</param> 
    /// <returns></returns>
    public static ServerResponse<AddFansResponse> AddFans(int amount)
    {
        var url = ServerContext.UrlPathJoin("test", "AddFans");
        var req = new AddFansRequest()
        {
            amount = amount,
        };
        return new ServerResponse<AddFansResponse>(url, req);
    } 

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

    /// <summary>
    ///  增加期待值
    /// </summary>
    /// <param name="amount"> 期待值数量</param> 
    /// <returns></returns>
    public static ServerResponse<AddExpectResponse> AddExpect(int amount)
    {
        var url = ServerContext.UrlPathJoin("test", "AddExpect");
        var req = new AddExpectRequest()
        {
            amount = amount,
        };
        return new ServerResponse<AddExpectResponse>(url, req);
    } 

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

    /// <summary>
    ///  删除电影
    /// </summary>
    /// <param name="uuid"> 电影id</param> 
    /// <returns></returns>
    public static ServerResponse<DeleteMovieResponse> DeleteMovie(string uuid)
    {
        var url = ServerContext.UrlPathJoin("test", "DeleteMovie");
        var req = new DeleteMovieRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<DeleteMovieResponse>(url, req);
    } 

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

    /// <summary>
    ///  添加剧本
    /// </summary>
    /// <param name="starId"> 剧本星级</param> 
    /// <param name="amount"> 数量</param> 
    /// <returns></returns>
    public static ServerResponse<AddStarStoryResponse> AddStarStory(int starId, int amount)
    {
        var url = ServerContext.UrlPathJoin("test", "AddStarStory");
        var req = new AddStarStoryRequest()
        {
            starId = starId,
            amount = amount,
        };
        return new ServerResponse<AddStarStoryResponse>(url, req);
    } 

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

    /// <summary>
    ///  添加剧本
    /// </summary>
    /// <param name="storyId"> 剧本id</param> 
    /// <returns></returns>
    public static ServerResponse<AddStoryResponse> AddStory(int storyId)
    {
        var url = ServerContext.UrlPathJoin("test", "AddStory");
        var req = new AddStoryRequest()
        {
            storyId = storyId,
        };
        return new ServerResponse<AddStoryResponse>(url, req);
    } 

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

    /// <summary>
    ///  添加艺人技能经验
    /// </summary>
    /// <param name="actorId"> 艺人id</param> 
    /// <returns></returns>
    public static ServerResponse<AddActorSkillExpResponse> AddActorSkillExp(int actorId, int amount)
    {
        var url = ServerContext.UrlPathJoin("test", "AddActorSkillExp");
        var req = new AddActorSkillExpRequest()
        {
            actorId = actorId,
            amount = amount,
        };
        return new ServerResponse<AddActorSkillExpResponse>(url, req);
    } 

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

    /// <summary>
    ///  添加剧本进度
    /// </summary>
    /// <param name="storyId"> 剧本唯一ID</param> 
    /// <param name="index"> 哪一个</param> 
    /// <returns></returns>
    public static ServerResponse<AddStoryProgressResponse> AddStoryProgress(int storyId, int index)
    {
        var url = ServerContext.UrlPathJoin("test", "AddStoryProgress");
        var req = new AddStoryProgressRequest()
        {
            storyId = storyId,
            index = index,
        };
        return new ServerResponse<AddStoryProgressResponse>(url, req);
    } 

    public class FinishGuideRequest
    {
    } 

    public class FinishGuideResponse
    {
    } 

    public static ServerResponse<FinishGuideResponse> FinishGuide()
    {
        var url = ServerContext.UrlPathJoin("test", "FinishGuide");
        var req = new FinishGuideRequest()
        {
        };
        return new ServerResponse<FinishGuideResponse>(url, req);
    } 

    public class DebugRequest
    {
        public int num = default(int);
    } 

    public class DebugResponse
    {
    } 

    public static ServerResponse<DebugResponse> Debug(int num)
    {
        var url = ServerContext.UrlPathJoin("test", "debug");
        var req = new DebugRequest()
        {
            num = num,
        };
        return new ServerResponse<DebugResponse>(url, req);
    } 

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

    /// <summary>
    ///  增加一个兑换码
    /// </summary>
    /// <param name="giftUuid"> 兑换码</param> 
    /// <param name="giftId"> 兑换码配置文件 id</param> 
    /// <param name="targetId"> 指定使用者</param> 
    /// <param name="startTime"> 开始时间</param> 
    /// <param name="endTime"> 结束时间</param> 
    /// <param name="total"> 总共可用次数</param> 
    /// <returns></returns>
    public static ServerResponse<AddGiftResponse> AddGift(string giftUuid, int giftId, int targetId, int startTime, int endTime, int total)
    {
        var url = ServerContext.UrlPathJoin("test", "AddGift");
        var req = new AddGiftRequest()
        {
            giftUuid = giftUuid,
            giftId = giftId,
            targetId = targetId,
            startTime = startTime,
            endTime = endTime,
            total = total,
        };
        return new ServerResponse<AddGiftResponse>(url, req);
    } 

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

    public static ServerResponse<SetBlockLevelResponse> SetBlockLevel(int level)
    {
        var url = ServerContext.UrlPathJoin("test", "SetBlockLevel");
        var req = new SetBlockLevelRequest()
        {
            level = level,
        };
        return new ServerResponse<SetBlockLevelResponse>(url, req);
    } 

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

    /// <summary>
    ///  刷新时间
    /// </summary>
    /// <param name="type"> 刷新类型</param> 
    /// <returns></returns>
    public static ServerResponse<RefreshTimeResponse> RefreshTime(EGMRefreshType type)
    {
        var url = ServerContext.UrlPathJoin("test", "RefreshTime");
        var req = new RefreshTimeRequest()
        {
            type = type,
        };
        return new ServerResponse<RefreshTimeResponse>(url, req);
    } 

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

    /// <summary>
    ///  完成订单 
    /// </summary>
    /// <param name="uuid"> 唯一订单编号</param> 
    /// <returns></returns>
    public static ServerResponse<PutOrderItemsResponse> PutOrderItems(string uuid)
    {
        var url = ServerContext.UrlPathJoin("test", "PutOrderItems");
        var req = new PutOrderItemsRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<PutOrderItemsResponse>(url, req);
    } 

    public class GetAutoCooperateRequest
    {
    } 

    public class GetAutoCooperateResponse
    {
        public int loseNum = default(int);
        public int successNum = default(int);
    } 

    public static ServerResponse<GetAutoCooperateResponse> GetAutoCooperate()
    {
        var url = ServerContext.UrlPathJoin("test", "GetAutoCooperate");
        var req = new GetAutoCooperateRequest()
        {
        };
        return new ServerResponse<GetAutoCooperateResponse>(url, req);
    } 

    public class UpdateOscarRequest
    {
    } 

    public class UpdateOscarResponse
    {
    } 

    /// <summary>
    ///  奥斯卡颁奖
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<UpdateOscarResponse> UpdateOscar()
    {
        var url = ServerContext.UrlPathJoin("test", "UpdateOscar");
        var req = new UpdateOscarRequest()
        {
        };
        return new ServerResponse<UpdateOscarResponse>(url, req);
    } 

    public class SetAllStoryGoldRequest
    {
    } 

    public class SetAllStoryGoldResponse
    {
    } 

    /// <summary>
    ///  将所有剧本设置为金本
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<SetAllStoryGoldResponse> SetAllStoryGold()
    {
        var url = ServerContext.UrlPathJoin("test", "setAllStoryGold");
        var req = new SetAllStoryGoldRequest()
        {
        };
        return new ServerResponse<SetAllStoryGoldResponse>(url, req);
    } 

    public class LockAllProduceRequest
    {
    } 

    public class LockAllProduceResponse
    {
    } 

    /// <summary>
    ///  一键解锁所有生产线 未加解锁限制判断 并且加了10000钻石以及 10000 生产图纸
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<LockAllProduceResponse> LockAllProduce()
    {
        var url = ServerContext.UrlPathJoin("test", "LockAllProduce");
        var req = new LockAllProduceRequest()
        {
        };
        return new ServerResponse<LockAllProduceResponse>(url, req);
    } 

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

    /// <summary>
    ///  设置小秘书状态
    /// </summary>
    /// <param name="status"> 小秘书状态</param> 
    /// <returns></returns>
    public static ServerResponse<SetSecretaryStatusResponse> SetSecretaryStatus(int status)
    {
        var url = ServerContext.UrlPathJoin("test", "SetSecretaryStatus");
        var req = new SetSecretaryStatusRequest()
        {
            status = status,
        };
        return new ServerResponse<SetSecretaryStatusResponse>(url, req);
    } 

    public class CleanSecretaryTimesRequest
    {
    } 

    public class CleanSecretaryTimesResponse
    {
    } 

    /// <summary>
    ///  清除小秘书使用次数
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<CleanSecretaryTimesResponse> CleanSecretaryTimes()
    {
        var url = ServerContext.UrlPathJoin("test", "CleanSecretaryTimes");
        var req = new CleanSecretaryTimesRequest()
        {
        };
        return new ServerResponse<CleanSecretaryTimesResponse>(url, req);
    } 

    public class GetRechargeGiftRequest
    {
    } 

    public class GetRechargeGiftResponse
    {
    } 

    /// <summary>
    ///  领取充值礼包
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetRechargeGiftResponse> GetRechargeGift()
    {
        var url = ServerContext.UrlPathJoin("test", "GetRechargeGift");
        var req = new GetRechargeGiftRequest()
        {
        };
        return new ServerResponse<GetRechargeGiftResponse>(url, req);
    } 

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

    /// <summary>
    ///   一键占领城市
    /// </summary>
    /// <param name="id"> 1... 最后一个城市的编号</param> 
    /// <returns></returns>
    public static ServerResponse<GotoCityResponse> GotoCity(int id)
    {
        var url = ServerContext.UrlPathJoin("test", "GotoCity");
        var req = new GotoCityRequest()
        {
            id = id,
        };
        return new ServerResponse<GotoCityResponse>(url, req);
    } 

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

    /// <summary>
    ///  设置占领城市前状态
    /// </summary>
    /// <param name="id"> 1... 最后一个城市的编号</param> 
    /// <returns></returns>
    public static ServerResponse<GotoCityBeforeResponse> GotoCityBefore(int id)
    {
        var url = ServerContext.UrlPathJoin("test", "GotoCityBefore");
        var req = new GotoCityBeforeRequest()
        {
            id = id,
        };
        return new ServerResponse<GotoCityBeforeResponse>(url, req);
    } 

    public class AddManageRequest
    {
    } 

    public class AddManageResponse
    {
    } 

    /// <summary>
    ///  会议 公务 探班次数全满
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<AddManageResponse> AddManage()
    {
        var url = ServerContext.UrlPathJoin("test", "AddManage");
        var req = new AddManageRequest()
        {
        };
        return new ServerResponse<AddManageResponse>(url, req);
    } 

    public class SetAllActorLvRequest
    {
    } 

    public class SetAllActorLvResponse
    {
    } 

    /// <summary>
    ///  非雪藏艺人正常升级每次十级
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<SetAllActorLvResponse> SetAllActorLv()
    {
        var url = ServerContext.UrlPathJoin("test", "SetAllActorLv");
        var req = new SetAllActorLvRequest()
        {
        };
        return new ServerResponse<SetAllActorLvResponse>(url, req);
    } 

}

public class ItemPxy {
    
    public class SellOutRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int);
    } 

    public class SellOutResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  道具出售
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <param name="amount"> 道具数量</param> 
    /// <returns></returns>
    public static ServerResponse<SellOutResponse> SellOut(string uuid, int itemId, int amount)
    {
        var url = ServerContext.UrlPathJoin("item", "SellOut");
        var req = new SellOutRequest()
        {
            uuid = uuid,
            itemId = itemId,
            amount = amount,
        };
        return new ServerResponse<SellOutResponse>(url, req);
    } 

    public class CompoundRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int);
    } 

    public class CompoundResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  道具合成
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <param name="amount"> 道具数量</param> 
    /// <returns></returns>
    public static ServerResponse<CompoundResponse> Compound(string uuid, int itemId, int amount)
    {
        var url = ServerContext.UrlPathJoin("item", "Compound");
        var req = new CompoundRequest()
        {
            uuid = uuid,
            itemId = itemId,
            amount = amount,
        };
        return new ServerResponse<CompoundResponse>(url, req);
    } 

    public class SplitRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int);
    } 

    public class SplitResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  道具拆分
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <param name="amount"> 道具数量</param> 
    /// <returns></returns>
    public static ServerResponse<SplitResponse> Split(string uuid, int itemId, int amount)
    {
        var url = ServerContext.UrlPathJoin("item", "Split");
        var req = new SplitRequest()
        {
            uuid = uuid,
            itemId = itemId,
            amount = amount,
        };
        return new ServerResponse<SplitResponse>(url, req);
    } 

    public class UseRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int);
    } 

    public class UseResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  使用道具
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <param name="amount"> 道具数量</param> 
    /// <returns></returns>
    public static ServerResponse<UseResponse> Use(string uuid, int itemId, int amount)
    {
        var url = ServerContext.UrlPathJoin("item", "Use");
        var req = new UseRequest()
        {
            uuid = uuid,
            itemId = itemId,
            amount = amount,
        };
        return new ServerResponse<UseResponse>(url, req);
    } 

    public class UsePiecesGiftBagRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  道具数量
        /// </summary>
        public int amount = default(int);
        /// <summary>
        ///  选择的物品ID
        /// </summary>
        public int selItemId = default(int);
    } 

    public class UsePiecesGiftBagResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  使用碎片礼包道具
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <param name="amount"> 道具数量</param> 
    /// <param name="selItemId"> 选择的物品ID</param> 
    /// <returns></returns>
    public static ServerResponse<UsePiecesGiftBagResponse> UsePiecesGiftBag(string uuid, int itemId, int amount, int selItemId)
    {
        var url = ServerContext.UrlPathJoin("item", "UsePiecesGiftBag");
        var req = new UsePiecesGiftBagRequest()
        {
            uuid = uuid,
            itemId = itemId,
            amount = amount,
            selItemId = selItemId,
        };
        return new ServerResponse<UsePiecesGiftBagResponse>(url, req);
    } 

    public class CompoundActorRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
    } 

    public class CompoundActorResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int);
        /// <summary>
        ///  获得的物品列表
        /// </summary>
        public List<ItemDesc> items = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  合成艺人
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <returns></returns>
    public static ServerResponse<CompoundActorResponse> CompoundActor(string uuid, int itemId)
    {
        var url = ServerContext.UrlPathJoin("item", "CompoundActor");
        var req = new CompoundActorRequest()
        {
            uuid = uuid,
            itemId = itemId,
        };
        return new ServerResponse<CompoundActorResponse>(url, req);
    } 

    public class UseActorSkillWaterRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  道具id
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int);
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int);
    } 

    public class UseActorSkillWaterResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  使用艺人技能经验药水
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="itemId"> 道具id</param> 
    /// <param name="actorId"> 艺人id</param> 
    /// <param name="amount"> 数量</param> 
    /// <returns></returns>
    public static ServerResponse<UseActorSkillWaterResponse> UseActorSkillWater(string uuid, int itemId, int actorId, int amount)
    {
        var url = ServerContext.UrlPathJoin("item", "UseActorSkillWater");
        var req = new UseActorSkillWaterRequest()
        {
            uuid = uuid,
            itemId = itemId,
            actorId = actorId,
            amount = amount,
        };
        return new ServerResponse<UseActorSkillWaterResponse>(url, req);
    } 

}

public class CityPxy {
    
    public class SetPropagandaActorRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int);
        /// <summary>
        ///  区域id
        /// </summary>
        public int areaId = default(int);
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int);
    } 

    public class SetPropagandaActorResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  设置宣传大使
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="cityId"> 城市id</param> 
    /// <param name="areaId"> 区域id</param> 
    /// <param name="actorId"> 艺人id</param> 
    /// <returns></returns>
    public static ServerResponse<SetPropagandaActorResponse> SetPropagandaActor(string uuid, int cityId, int areaId, int actorId)
    {
        var url = ServerContext.UrlPathJoin("city", "SetPropagandaActor");
        var req = new SetPropagandaActorRequest()
        {
            uuid = uuid,
            cityId = cityId,
            areaId = areaId,
            actorId = actorId,
        };
        return new ServerResponse<SetPropagandaActorResponse>(url, req);
    } 

    public class PropagandaRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int);
        /// <summary>
        ///  区域id
        /// </summary>
        public int areaId = default(int);
    } 

    public class PropagandaResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  宣传
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="cityId"> 城市id</param> 
    /// <param name="areaId"> 区域id</param> 
    /// <returns></returns>
    public static ServerResponse<PropagandaResponse> Propaganda(string uuid, int cityId, int areaId)
    {
        var url = ServerContext.UrlPathJoin("city", "Propaganda");
        var req = new PropagandaRequest()
        {
            uuid = uuid,
            cityId = cityId,
            areaId = areaId,
        };
        return new ServerResponse<PropagandaResponse>(url, req);
    } 

    public class RoadshowRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int);
        /// <summary>
        ///  区域id
        /// </summary>
        public int areaId = default(int);
    } 

    public class RoadshowResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  0成功 1失败
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  路演
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="cityId"> 城市id</param> 
    /// <param name="areaId"> 区域id</param> 
    /// <returns></returns>
    public static ServerResponse<RoadshowResponse> Roadshow(string uuid, int cityId, int areaId)
    {
        var url = ServerContext.UrlPathJoin("city", "Roadshow");
        var req = new RoadshowRequest()
        {
            uuid = uuid,
            cityId = cityId,
            areaId = areaId,
        };
        return new ServerResponse<RoadshowResponse>(url, req);
    } 

    public class SetAmbassadorRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int);
        /// <summary>
        ///  位置1,2,3,4....
        /// </summary>
        public int psition = default(int);
        /// <summary>
        ///  艺人唯一ID
        /// </summary>
        public string actuuid = default(string);
    } 

    public class SetAmbassadorResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  设置形象大使
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <param name="cityId"> 城市id</param> 
    /// <param name="psition"> 位置1,2,3,4....</param> 
    /// <param name="actuuid"> 艺人唯一ID</param> 
    /// <returns></returns>
    public static ServerResponse<SetAmbassadorResponse> SetAmbassador(string uuid, int cityId, int psition, string actuuid)
    {
        var url = ServerContext.UrlPathJoin("city", "SetAmbassador");
        var req = new SetAmbassadorRequest()
        {
            uuid = uuid,
            cityId = cityId,
            psition = psition,
            actuuid = actuuid,
        };
        return new ServerResponse<SetAmbassadorResponse>(url, req);
    } 

    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  城市id
        /// </summary>
        public int cityId = default(int);
    } 

    public class GetRewardResponse
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  领取收益
    /// </summary>
    /// <param name="uuid"> 唯一编号</param> 
    /// <param name="cityId"> 城市id</param> 
    /// <returns></returns>
    public static ServerResponse<GetRewardResponse> GetReward(string uuid, int cityId)
    {
        var url = ServerContext.UrlPathJoin("city", "GetReward");
        var req = new GetRewardRequest()
        {
            uuid = uuid,
            cityId = cityId,
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

    public class HoldCityRequest
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class HoldCityResponse
    {
        /// <summary>
        ///  道具唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  占领城市
    /// </summary>
    /// <param name="uuid"> 道具唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<HoldCityResponse> HoldCity(string uuid)
    {
        var url = ServerContext.UrlPathJoin("city", "HoldCity");
        var req = new HoldCityRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<HoldCityResponse>(url, req);
    } 

}

public class MoviePxy {
    
    public class MakeFilmRequest
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class MakeFilmResponse
    {
        /// <summary>
        ///  唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  拍摄电影
    /// </summary>
    /// <param name="uuid"> 唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<MakeFilmResponse> MakeFilm(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "MakeFilm");
        var req = new MakeFilmRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<MakeFilmResponse>(url, req);
    } 

    public class SetMovieNameRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  选择的电影下标, 从0开始
        /// </summary>
        public int index = default(int);
        /// <summary>
        ///  名字
        /// </summary>
        public string name = default(string);
    } 

    public class SetMovieNameResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  设置电影名字
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="index"> 选择的电影下标, 从0开始</param> 
    /// <param name="name"> 名字</param> 
    /// <returns></returns>
    public static ServerResponse<SetMovieNameResponse> SetMovieName(string uuid, int index, string name)
    {
        var url = ServerContext.UrlPathJoin("movie", "SetMovieName");
        var req = new SetMovieNameRequest()
        {
            uuid = uuid,
            index = index,
            name = name,
        };
        return new ServerResponse<SetMovieNameResponse>(url, req);
    } 

    public class SetActorRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  选择的电影下标, 从0开始
        /// </summary>
        public int index = default(int);
        /// <summary>
        ///  艺人id
        /// </summary>
        public int actorId = default(int);
    } 

    public class SetActorResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  设置艺人
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="index"> 选择的电影下标, 从0开始</param> 
    /// <param name="actorId"> 艺人id</param> 
    /// <returns></returns>
    public static ServerResponse<SetActorResponse> SetActor(string uuid, int index, int actorId)
    {
        var url = ServerContext.UrlPathJoin("movie", "SetActor");
        var req = new SetActorRequest()
        {
            uuid = uuid,
            index = index,
            actorId = actorId,
        };
        return new ServerResponse<SetActorResponse>(url, req);
    } 

    public class ConfirmSetActorRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class ConfirmSetActorResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  确认艺人选择
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<ConfirmSetActorResponse> ConfirmSetActor(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "ConfirmSetActor");
        var req = new ConfirmSetActorRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<ConfirmSetActorResponse>(url, req);
    } 

    public class ChoseTypeRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  电影类型
        /// </summary>
        public EMovieType type = 0;
    } 

    public class ChoseTypeResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  类型契合度
        /// </summary>
        public int storyShootType = default(int);
    } 

    /// <summary>
    ///  选择剧本类型
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="type"> 电影类型</param> 
    /// <returns></returns>
    public static ServerResponse<ChoseTypeResponse> ChoseType(string uuid, EMovieType type)
    {
        var url = ServerContext.UrlPathJoin("movie", "ChoseType");
        var req = new ChoseTypeRequest()
        {
            uuid = uuid,
            type = type,
        };
        return new ServerResponse<ChoseTypeResponse>(url, req);
    } 

    public class AcceptMediaVisitRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  媒体id
        /// </summary>
        public int mediaId = default(int);
    } 

    public class AcceptMediaVisitResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        public int addExpection = default(int);
    } 

    /// <summary>
    ///  接受媒体访问
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="mediaId"> 媒体id</param> 
    /// <returns></returns>
    public static ServerResponse<AcceptMediaVisitResponse> AcceptMediaVisit(string uuid, int mediaId)
    {
        var url = ServerContext.UrlPathJoin("movie", "AcceptMediaVisit");
        var req = new AcceptMediaVisitRequest()
        {
            uuid = uuid,
            mediaId = mediaId,
        };
        return new ServerResponse<AcceptMediaVisitResponse>(url, req);
    } 

    public class PublishMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  院线id
        /// </summary>
        public int theaterId = default(int);
    } 

    public class PublishMovieResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  电影发布
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="theaterId"> 院线id</param> 
    /// <returns></returns>
    public static ServerResponse<PublishMovieResponse> PublishMovie(string uuid, int theaterId)
    {
        var url = ServerContext.UrlPathJoin("movie", "PublishMovie");
        var req = new PublishMovieRequest()
        {
            uuid = uuid,
            theaterId = theaterId,
        };
        return new ServerResponse<PublishMovieResponse>(url, req);
    } 

    public class BattleOverRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class BattleOverResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  上映结束
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<BattleOverResponse> BattleOver(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "BattleOver");
        var req = new BattleOverRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<BattleOverResponse>(url, req);
    } 

    public class SpreadMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class SpreadMovieResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  推广电影
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<SpreadMovieResponse> SpreadMovie(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "SpreadMovie");
        var req = new SpreadMovieRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<SpreadMovieResponse>(url, req);
    } 

    public class GetRewardMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class GetRewardMovieResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  领取收益
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<GetRewardMovieResponse> GetRewardMovie(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "GetRewardMovie");
        var req = new GetRewardMovieRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<GetRewardMovieResponse>(url, req);
    } 

    public class SwitchCityRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  城市ID
        /// </summary>
        public int cityId = default(int);
    } 

    public class SwitchCityResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  切换城市
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="cityId"> 城市ID</param> 
    /// <returns></returns>
    public static ServerResponse<SwitchCityResponse> SwitchCity(string uuid, int cityId)
    {
        var url = ServerContext.UrlPathJoin("movie", "SwitchCity");
        var req = new SwitchCityRequest()
        {
            uuid = uuid,
            cityId = cityId,
        };
        return new ServerResponse<SwitchCityResponse>(url, req);
    } 

    public class UpdateMovieStateRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  当前电影状态
        /// </summary>
        public EMovieState state = 0;
    } 

    public class UpdateMovieStateResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  更新电影状态
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <param name="state"> 当前电影状态</param> 
    /// <returns></returns>
    public static ServerResponse<UpdateMovieStateResponse> UpdateMovieState(string uuid, EMovieState state)
    {
        var url = ServerContext.UrlPathJoin("movie", "UpdateMovieState");
        var req = new UpdateMovieStateRequest()
        {
            uuid = uuid,
            state = state,
        };
        return new ServerResponse<UpdateMovieStateResponse>(url, req);
    } 

    public class GetStoryGoalsRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class GetStoryGoalsResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  领取剧本目标奖励
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<GetStoryGoalsResponse> GetStoryGoals(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "GetStoryGoals");
        var req = new GetStoryGoalsRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<GetStoryGoalsResponse>(url, req);
    } 

    public class DeleteMovieRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class DeleteMovieResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  删除电影
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<DeleteMovieResponse> DeleteMovie(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "DeleteMovie");
        var req = new DeleteMovieRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<DeleteMovieResponse>(url, req);
    } 

    public class RefreshMovieStoryRequest
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class RefreshMovieStoryResponse
    {
        /// <summary>
        ///  电影唯一编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  刷新电影剧本
    /// </summary>
    /// <param name="uuid"> 电影唯一编号</param> 
    /// <returns></returns>
    public static ServerResponse<RefreshMovieStoryResponse> RefreshMovieStory(string uuid)
    {
        var url = ServerContext.UrlPathJoin("movie", "RefreshMovieStory");
        var req = new RefreshMovieStoryRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<RefreshMovieStoryResponse>(url, req);
    } 

}

public class ActorPxy {
    
    /// <summary>
    ///  请求
    /// </summary>
    public class NoseInfoActorRequest
    {
        /// <summary>
        ///  是否使用星探卡，强制查探
        /// </summary>
        public bool isUseCard = default(bool);
    } 

    public class NoseInfoActorResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  查探艺人
    /// </summary>
    /// <param name="isUseCard"> 是否使用星探卡，强制查探</param> 
    /// <returns></returns>
    public static ServerResponse<NoseInfoActorResponse> NoseInfoActor(bool isUseCard)
    {
        var url = ServerContext.UrlPathJoin("Actor", "NoseInfoActor");
        var req = new NoseInfoActorRequest()
        {
            isUseCard = isUseCard,
        };
        return new ServerResponse<NoseInfoActorResponse>(url, req);
    } 

    public class RecruitActorRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public int actorId = default(int);
    } 

    public class RecruitActorResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  艺人ID
        /// </summary>
        public int actorId = default(int);
        /// <summary>
        ///  是否新加艺人
        /// </summary>
        public bool isNewActor = default(bool);
    } 

    /// <summary>
    ///  招募艺人
    /// </summary>
    /// <param name="actorId"> 艺人ID</param> 
    /// <returns></returns>
    public static ServerResponse<RecruitActorResponse> RecruitActor(int actorId)
    {
        var url = ServerContext.UrlPathJoin("Actor", "RecruitActor");
        var req = new RecruitActorRequest()
        {
            actorId = actorId,
        };
        return new ServerResponse<RecruitActorResponse>(url, req);
    } 

    public class HideActorRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  是否雪藏艺人，true雪藏，false取消雪藏
        /// </summary>
        public bool isHide = default(bool);
    } 

    public class HideActorResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  雪藏艺人
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <param name="isHide"> 是否雪藏艺人，true雪藏，false取消雪藏</param> 
    /// <returns></returns>
    public static ServerResponse<HideActorResponse> HideActor(string uuid, bool isHide)
    {
        var url = ServerContext.UrlPathJoin("Actor", "HideActor");
        var req = new HideActorRequest()
        {
            uuid = uuid,
            isHide = isHide,
        };
        return new ServerResponse<HideActorResponse>(url, req);
    } 

    public class AddActorSlotRequest
    {
    } 

    public class AddActorSlotResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  增加艺人槽位
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<AddActorSlotResponse> AddActorSlot()
    {
        var url = ServerContext.UrlPathJoin("Actor", "AddActorSlot");
        var req = new AddActorSlotRequest()
        {
        };
        return new ServerResponse<AddActorSlotResponse>(url, req);
    } 

    public class UpgradeActorRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
    } 

    public class UpgradeActorResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  艺人升级
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <returns></returns>
    public static ServerResponse<UpgradeActorResponse> UpgradeActor(string uuid)
    {
        var url = ServerContext.UrlPathJoin("Actor", "UpgradeActor");
        var req = new UpgradeActorRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<UpgradeActorResponse>(url, req);
    } 

    public class GiveActorAssetsRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  赠送类型
        /// </summary>
        public int giveType = default(int);
        /// <summary>
        ///  赠送等级
        /// </summary>
        public int giveLevel = default(int);
        /// <summary>
        ///  赠送数量
        /// </summary>
        public int giveNum = default(int);
    } 

    public class GiveActorAssetsResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  赠送艺人资产
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <param name="giveType"> 赠送类型</param> 
    /// <param name="giveLevel"> 赠送等级</param> 
    /// <param name="giveNum"> 赠送数量</param> 
    /// <returns></returns>
    public static ServerResponse<GiveActorAssetsResponse> GiveActorAssets(string uuid, int giveType, int giveLevel, int giveNum)
    {
        var url = ServerContext.UrlPathJoin("Actor", "GiveActorAssets");
        var req = new GiveActorAssetsRequest()
        {
            uuid = uuid,
            giveType = giveType,
            giveLevel = giveLevel,
            giveNum = giveNum,
        };
        return new ServerResponse<GiveActorAssetsResponse>(url, req);
    } 

    public class UpgradeActorSkillRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  技能ID
        /// </summary>
        public int skillId = default(int);
    } 

    public class UpgradeActorSkillResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  艺人技能升级
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <param name="skillId"> 技能ID</param> 
    /// <returns></returns>
    public static ServerResponse<UpgradeActorSkillResponse> UpgradeActorSkill(string uuid, int skillId)
    {
        var url = ServerContext.UrlPathJoin("Actor", "UpgradeActorSkill");
        var req = new UpgradeActorSkillRequest()
        {
            uuid = uuid,
            skillId = skillId,
        };
        return new ServerResponse<UpgradeActorSkillResponse>(url, req);
    } 

    public class ActorTrainRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  培养类型
        /// </summary>
        public int trainType = default(int);
        /// <summary>
        ///  使用钻石
        /// </summary>
        public bool useDiamond = default(bool);
    } 

    public class ActorTrainResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  培养类型
        /// </summary>
        public int trainType = default(int);
        /// <summary>
        ///  属性改变列表
        /// </summary>
        public List<AttrChangeInfo> attrChangeList = default(List<AttrChangeInfo>);
    } 

    /// <summary>
    ///  艺人培养
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <param name="trainType"> 培养类型</param> 
    /// <param name="useDiamond"> 使用钻石</param> 
    /// <returns></returns>
    public static ServerResponse<ActorTrainResponse> ActorTrain(string uuid, int trainType, bool useDiamond)
    {
        var url = ServerContext.UrlPathJoin("Actor", "ActorTrain");
        var req = new ActorTrainRequest()
        {
            uuid = uuid,
            trainType = trainType,
            useDiamond = useDiamond,
        };
        return new ServerResponse<ActorTrainResponse>(url, req);
    } 

    public class ActorChangeNameRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  艺人名字
        /// </summary>
        public string name = default(string);
    } 

    public class ActorChangeNameResponse
    {
        /// <summary>
        ///  0,成功，非0，错误码
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  艺人改名
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <param name="name"> 艺人名字</param> 
    /// <returns></returns>
    public static ServerResponse<ActorChangeNameResponse> ActorChangeName(string uuid, string name)
    {
        var url = ServerContext.UrlPathJoin("Actor", "ActorChangeName");
        var req = new ActorChangeNameRequest()
        {
            uuid = uuid,
            name = name,
        };
        return new ServerResponse<ActorChangeNameResponse>(url, req);
    } 

    public class ActorExerciseStartRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string aId = default(string);
        /// <summary>
        ///  训练队列id
        /// </summary>
        public string eId = default(string);
    } 

    public class ActorExerciseStartResponse
    {
        /// <summary>
        ///  艺人 id
        /// </summary>
        public string aId = default(string);
    } 

    /// <summary>
    ///  艺人训练开始
    /// </summary>
    /// <param name="aId"> 艺人ID</param> 
    /// <param name="eId"> 训练队列id</param> 
    /// <returns></returns>
    public static ServerResponse<ActorExerciseStartResponse> ActorExerciseStart(string aId, string eId)
    {
        var url = ServerContext.UrlPathJoin("Actor", "ActorExerciseStart");
        var req = new ActorExerciseStartRequest()
        {
            aId = aId,
            eId = eId,
        };
        return new ServerResponse<ActorExerciseStartResponse>(url, req);
    } 

    public class ActorExerciseRewardRequest
    {
        /// <summary>
        ///  训练队列id
        /// </summary>
        public string eId = default(string);
        /// <summary>
        ///  是否使用钻石
        /// </summary>
        public bool useMoney = default(bool);
    } 

    public class ActorExerciseRewardResponse
    {
        /// <summary>
        ///  艺人 id
        /// </summary>
        public string aId = default(string);
        /// <summary>
        ///  队列 id
        /// </summary>
        public string eId = default(string);
    } 

    /// <summary>
    ///  艺人结束训练
    /// </summary>
    /// <param name="eId"> 训练队列id</param> 
    /// <param name="useMoney"> 是否使用钻石</param> 
    /// <returns></returns>
    public static ServerResponse<ActorExerciseRewardResponse> ActorExerciseReward(string eId, bool useMoney)
    {
        var url = ServerContext.UrlPathJoin("Actor", "ActorExerciseReward");
        var req = new ActorExerciseRewardRequest()
        {
            eId = eId,
            useMoney = useMoney,
        };
        return new ServerResponse<ActorExerciseRewardResponse>(url, req);
    } 

    public class ActorExerciseAddRequest
    {
    } 

    public class ActorExerciseAddResponse
    {
        /// <summary>
        ///  训练队列 
        /// </summary>
        public string eId = default(string);
    } 

    /// <summary>
    ///  增加训练队列
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<ActorExerciseAddResponse> ActorExerciseAdd()
    {
        var url = ServerContext.UrlPathJoin("Actor", "ActorExerciseAdd");
        var req = new ActorExerciseAddRequest()
        {
        };
        return new ServerResponse<ActorExerciseAddResponse>(url, req);
    } 

    public class GiveLoyaltyCardRequest
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  赠送类型
        /// </summary>
        public int giveType = default(int);
        /// <summary>
        ///  赠送忠诚卡数量
        /// </summary>
        public int num = default(int);
    } 

    public class GiveLoyaltyCardResponse
    {
        /// <summary>
        ///  艺人ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  赠送类型
        /// </summary>
        public int giveType = default(int);
    } 

    /// <summary>
    ///  赠送忠诚卡
    /// </summary>
    /// <param name="uuid"> 艺人ID</param> 
    /// <param name="giveType"> 赠送类型</param> 
    /// <param name="num"> 赠送忠诚卡数量</param> 
    /// <returns></returns>
    public static ServerResponse<GiveLoyaltyCardResponse> GiveLoyaltyCard(string uuid, int giveType, int num)
    {
        var url = ServerContext.UrlPathJoin("Actor", "GiveLoyaltyCard");
        var req = new GiveLoyaltyCardRequest()
        {
            uuid = uuid,
            giveType = giveType,
            num = num,
        };
        return new ServerResponse<GiveLoyaltyCardResponse>(url, req);
    } 

    public class AssistantUpLvRequest
    {
        /// <summary>
        ///  艺人uuid
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  助理id
        /// </summary>
        public int id = default(int);
    } 

    public class AssistantUpLvResponse
    {
        /// <summary>
        ///  艺人uuid
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  助理id
        /// </summary>
        public int id = default(int);
    } 

    /// <summary>
    ///  艺人助理升级
    /// </summary>
    /// <param name="uuid"> 艺人uuid</param> 
    /// <param name="id"> 助理id</param> 
    /// <returns></returns>
    public static ServerResponse<AssistantUpLvResponse> AssistantUpLv(string uuid, int id)
    {
        var url = ServerContext.UrlPathJoin("Actor", "AssistantUpLv");
        var req = new AssistantUpLvRequest()
        {
            uuid = uuid,
            id = id,
        };
        return new ServerResponse<AssistantUpLvResponse>(url, req);
    } 

}

public class StoryPxy {
    
    public class FindStoryRequest
    {
    } 

    public class FindStoryResponse
    {
        /// <summary>
        ///  搜罗类型 1剧本 2物品
        /// </summary>
        public int type = default(int);
        /// <summary>
        ///  物品ID 剧本ID
        /// </summary>
        public int id = default(int);
        /// <summary>
        ///  数量
        /// </summary>
        public int num = default(int);
        /// <summary>
        ///  已经搜罗次数
        /// </summary>
        public int time = default(int);
        /// <summary>
        ///  上次免费搜罗时间
        /// </summary>
        public int refreshTime = default(int);
    } 

    /// <summary>
    ///  搜罗剧本
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<FindStoryResponse> FindStory()
    {
        var url = ServerContext.UrlPathJoin("story", "findStory");
        var req = new FindStoryRequest()
        {
        };
        return new ServerResponse<FindStoryResponse>(url, req);
    } 

    public class CleanFindStoryRequest
    {
    } 

    public class CleanFindStoryResponse
    {
        /// <summary>
        ///  0 成功 1 失败 
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  上次免费搜罗时间
        /// </summary>
        public int refreshTime = default(int);
    } 

    /// <summary>
    ///  清除搜罗时间
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<CleanFindStoryResponse> CleanFindStory()
    {
        var url = ServerContext.UrlPathJoin("story", "cleanFindStory");
        var req = new CleanFindStoryRequest()
        {
        };
        return new ServerResponse<CleanFindStoryResponse>(url, req);
    } 

    public class GetRewardRequest
    {
        /// <summary>
        ///  剧本组ID
        /// </summary>
        public int storySuitId = default(int);
    } 

    public class GetRewardResponse
    {
        /// <summary>
        ///  剧本组ID
        /// </summary>
        public int storySuitId = default(int);
        /// <summary>
        ///  0 成功 1 失败
        /// </summary>
        public int result = default(int);
    } 

    /// <summary>
    ///  领取剧本组奖励
    /// </summary>
    /// <param name="storySuitId"> 剧本组ID</param> 
    /// <returns></returns>
    public static ServerResponse<GetRewardResponse> GetReward(int storySuitId)
    {
        var url = ServerContext.UrlPathJoin("story", "getReward");
        var req = new GetRewardRequest()
        {
            storySuitId = storySuitId,
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

    public class GetMessageRequest
    {
        /// <summary>
        ///  剧本ID
        /// </summary>
        public int stroyId = default(int);
    } 

    public class GetMessageResponse
    {
        /// <summary>
        ///  剧本ID
        /// </summary>
        public int stroyId = default(int);
        public List<StoryMessageDesc> message = default(List<StoryMessageDesc>);
    } 

    /// <summary>
    ///  获取剧本留言信息
    /// </summary>
    /// <param name="stroyId"> 剧本ID</param> 
    /// <returns></returns>
    public static ServerResponse<GetMessageResponse> GetMessage(int stroyId)
    {
        var url = ServerContext.UrlPathJoin("story", "GetMessage");
        var req = new GetMessageRequest()
        {
            stroyId = stroyId,
        };
        return new ServerResponse<GetMessageResponse>(url, req);
    } 

    public class SetMessageRequest
    {
        /// <summary>
        ///  剧本ID
        /// </summary>
        public int stroyId = default(int);
        /// <summary>
        ///  内容
        /// </summary>
        public string content = default(string);
    } 

    public class SetMessageResponse
    {
        /// <summary>
        ///  0 成功 1 失败
        /// </summary>
        public int stroyId = default(int);
    } 

    /// <summary>
    ///  剧本留言
    /// </summary>
    /// <param name="stroyId"> 剧本ID</param> 
    /// <param name="content"> 内容</param> 
    /// <returns></returns>
    public static ServerResponse<SetMessageResponse> SetMessage(int stroyId, string content)
    {
        var url = ServerContext.UrlPathJoin("story", "SetMessage");
        var req = new SetMessageRequest()
        {
            stroyId = stroyId,
            content = content,
        };
        return new ServerResponse<SetMessageResponse>(url, req);
    } 

}

public class ManageOrderPxy {
    
    public class PutItemRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  协助的人
        /// </summary>
        public int entityId = default(int);
        /// <summary>
        ///  物品baseId 
        /// </summary>
        public int itemId = default(int);
        /// <summary>
        ///  0操作自己的订单，1别人的
        /// </summary>
        public int type = default(int);
    } 

    public class PutItemResponse
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  奖励信息
        /// </summary>
        public ItemDesc itemInfo = default(ItemDesc);
        /// <summary>
        ///  0操作自己的订单，1别人的
        /// </summary>
        public int type = default(int);
    } 

    /// <summary>
    ///  放入物品
    /// </summary>
    /// <param name="uuid"> 唯一订单编号</param> 
    /// <param name="entityId"> 协助的人</param> 
    /// <param name="itemId"> 物品baseId </param> 
    /// <param name="type"> 0操作自己的订单，1别人的</param> 
    /// <returns></returns>
    public static ServerResponse<PutItemResponse> PutItem(string uuid, int entityId, int itemId, int type)
    {
        var url = ServerContext.UrlPathJoin("manageOrder", "PutItem");
        var req = new PutItemRequest()
        {
            uuid = uuid,
            entityId = entityId,
            itemId = itemId,
            type = type,
        };
        return new ServerResponse<PutItemResponse>(url, req);
    } 

    public class DelOrderRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class DelOrderResponse
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  销毁订单
    /// </summary>
    /// <param name="uuid"> 唯一订单编号</param> 
    /// <returns></returns>
    public static ServerResponse<DelOrderResponse> DelOrder(string uuid)
    {
        var url = ServerContext.UrlPathJoin("manageOrder", "DelOrder");
        var req = new DelOrderRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<DelOrderResponse>(url, req);
    } 

    public class FinishOrderRequest
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class FinishOrderResponse
    {
        /// <summary>
        ///  唯一订单编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  完成订单
    /// </summary>
    /// <param name="uuid"> 唯一订单编号</param> 
    /// <returns></returns>
    public static ServerResponse<FinishOrderResponse> FinishOrder(string uuid)
    {
        var url = ServerContext.UrlPathJoin("manageOrder", "FinishOrder");
        var req = new FinishOrderRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<FinishOrderResponse>(url, req);
    } 

    public class DealOrderRequest
    {
    } 

    public class DealOrderResponse
    {
    } 

    /// <summary>
    ///  订单过期处理
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<DealOrderResponse> DealOrder()
    {
        var url = ServerContext.UrlPathJoin("manageOrder", "DealOrder");
        var req = new DealOrderRequest()
        {
        };
        return new ServerResponse<DealOrderResponse>(url, req);
    } 

}

public class ProgressBoxPxy {
    
    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一进度宝箱编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  档位
        /// </summary>
        public int gear = default(int);
    } 

    public class GetRewardResponse
    {
        /// <summary>
        ///  唯一进度宝箱编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  档位
        /// </summary>
        public int gear = default(int);
    } 

    public static ServerResponse<GetRewardResponse> GetReward(string uuid, int gear)
    {
        var url = ServerContext.UrlPathJoin("progressBox", "GetReward");
        var req = new GetRewardRequest()
        {
            uuid = uuid,
            gear = gear,
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

}

public class ManageProducePxy {
    
    public class ProduceRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class ProduceResponse
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  生产
    /// </summary>
    /// <param name="uuid"> 唯一生产编号</param> 
    /// <returns></returns>
    public static ServerResponse<ProduceResponse> Produce(string uuid)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "Produce");
        var req = new ProduceRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<ProduceResponse>(url, req);
    } 

    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class GetRewardResponse
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  领取奖励
    /// </summary>
    /// <param name="uuid"> 唯一生产编号</param> 
    /// <returns></returns>
    public static ServerResponse<GetRewardResponse> GetReward(string uuid)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "GetReward");
        var req = new GetRewardRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

    public class UplevelRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  升级效果id
        /// </summary>
        public int skillId = default(int);
    } 

    public class UplevelResponse
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  升级效果id
        /// </summary>
        public int skillId = default(int);
    } 

    /// <summary>
    ///  生产升级
    /// </summary>
    /// <param name="uuid"> 唯一生产编号</param> 
    /// <param name="skillId"> 升级效果id</param> 
    /// <returns></returns>
    public static ServerResponse<UplevelResponse> Uplevel(string uuid, int skillId)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "Uplevel");
        var req = new UplevelRequest()
        {
            uuid = uuid,
            skillId = skillId,
        };
        return new ServerResponse<UplevelResponse>(url, req);
    } 

    public class SendActorRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  艺人的唯一ID 
        /// </summary>
        public int actBaseId = default(int);
    } 

    public class SendActorResponse
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  艺人的唯一ID 
        /// </summary>
        public int actBaseId = default(int);
    } 

    /// <summary>
    ///  派遣艺人
    /// </summary>
    /// <param name="uuid"> 唯一生产编号</param> 
    /// <param name="actBaseId"> 艺人的唯一ID </param> 
    /// <returns></returns>
    public static ServerResponse<SendActorResponse> SendActor(string uuid, int actBaseId)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "SendActor");
        var req = new SendActorRequest()
        {
            uuid = uuid,
            actBaseId = actBaseId,
        };
        return new ServerResponse<SendActorResponse>(url, req);
    } 

    public class DeblockingRequest
    {
        /// <summary>
        ///  需要解锁的生产ID
        /// </summary>
        public int produceId = default(int);
    } 

    public class DeblockingResponse
    {
        /// <summary>
        ///  需要解锁的生产ID
        /// </summary>
        public int produceId = default(int);
    } 

    /// <summary>
    ///  解锁
    /// </summary>
    /// <param name="produceId"> 需要解锁的生产ID</param> 
    /// <returns></returns>
    public static ServerResponse<DeblockingResponse> Deblocking(int produceId)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "Deblocking");
        var req = new DeblockingRequest()
        {
            produceId = produceId,
        };
        return new ServerResponse<DeblockingResponse>(url, req);
    } 

    public class QuickGetRewardRequest
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int);
    } 

    public class QuickGetRewardResponse
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int);
    } 

    /// <summary>
    ///  一键领取
    /// </summary>
    /// <param name="stall"> 档位</param> 
    /// <returns></returns>
    public static ServerResponse<QuickGetRewardResponse> QuickGetReward(int stall)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "QuickGetReward");
        var req = new QuickGetRewardRequest()
        {
            stall = stall,
        };
        return new ServerResponse<QuickGetRewardResponse>(url, req);
    } 

    public class QuickProduceRequest
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int);
    } 

    public class QuickProduceResponse
    {
        /// <summary>
        ///  档位
        /// </summary>
        public int stall = default(int);
        /// <summary>
        ///  生产了多少个
        /// </summary>
        public int num = default(int);
    } 

    /// <summary>
    ///  一键生产
    /// </summary>
    /// <param name="stall"> 档位</param> 
    /// <returns></returns>
    public static ServerResponse<QuickProduceResponse> QuickProduce(int stall)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "QuickProduce");
        var req = new QuickProduceRequest()
        {
            stall = stall,
        };
        return new ServerResponse<QuickProduceResponse>(url, req);
    } 

    public class CleanTimeRequest
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    public class CleanTimeResponse
    {
        /// <summary>
        ///  唯一生产编号
        /// </summary>
        public string uuid = default(string);
    } 

    /// <summary>
    ///  清除倒计时
    /// </summary>
    /// <param name="uuid"> 唯一生产编号</param> 
    /// <returns></returns>
    public static ServerResponse<CleanTimeResponse> CleanTime(string uuid)
    {
        var url = ServerContext.UrlPathJoin("manageProduce", "cleanTime");
        var req = new CleanTimeRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<CleanTimeResponse>(url, req);
    } 

}

public class RankPxy {
    
    public class GetSelfListRequest
    {
    } 

    public class GetSelfListResponse
    {
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public SelfRankListDesc data = default(SelfRankListDesc);
    } 

    /// <summary>
    ///  获取自己的排名信息
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetSelfListResponse> GetSelfList()
    {
        var url = ServerContext.UrlPathJoin("rank", "GetSelfList");
        var req = new GetSelfListRequest()
        {
        };
        return new ServerResponse<GetSelfListResponse>(url, req);
    } 

    public class GetServerRankListRequest
    {
    } 

    public class GetServerRankListResponse
    {
        /// <summary>
        ///  全服排名
        /// </summary>
        public int selfRank = default(int);
        /// <summary>
        ///  自己的排行榜数据
        /// </summary>
        public ServerListDesc selfData = default(ServerListDesc);
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public List<ServerListDesc> data = default(List<ServerListDesc>);
    } 

    /// <summary>
    ///  获取全服排行榜
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetServerRankListResponse> GetServerRankList()
    {
        var url = ServerContext.UrlPathJoin("rank", "GetServerRankList");
        var req = new GetServerRankListRequest()
        {
        };
        return new ServerResponse<GetServerRankListResponse>(url, req);
    } 

    public class GetGroupRankListRequest
    {
    } 

    public class GetGroupRankListResponse
    {
        /// <summary>
        ///  全服排名
        /// </summary>
        public int selfRank = default(int);
        /// <summary>
        ///  自己的排行榜数据
        /// </summary>
        public GroupListDesc selfData = default(GroupListDesc);
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public List<GroupListDesc> data = default(List<GroupListDesc>);
    } 

    /// <summary>
    ///  获取分组总票房排行榜
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetGroupRankListResponse> GetGroupRankList()
    {
        var url = ServerContext.UrlPathJoin("rank", "GetGroupRankList");
        var req = new GetGroupRankListRequest()
        {
        };
        return new ServerResponse<GetGroupRankListResponse>(url, req);
    } 

    public class GetGroupMovieRankListRequest
    {
    } 

    public class GetGroupMovieRankListResponse
    {
        /// <summary>
        ///  全服排名
        /// </summary>
        public int selfRank = default(int);
        /// <summary>
        ///  自己的排行榜数据
        /// </summary>
        public GroupMovieListDesc selfData = default(GroupMovieListDesc);
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public List<GroupMovieListDesc> data = default(List<GroupMovieListDesc>);
    } 

    /// <summary>
    ///  获取分组电影排行榜
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetGroupMovieRankListResponse> GetGroupMovieRankList()
    {
        var url = ServerContext.UrlPathJoin("rank", "GetGroupMovieRankList");
        var req = new GetGroupMovieRankListRequest()
        {
        };
        return new ServerResponse<GetGroupMovieRankListResponse>(url, req);
    } 

    public class GetMovieShortDataRequest
    {
        /// <summary>
        ///  电影唯一id
        /// </summary>
        public string uuid = default(string);
    } 

    public class GetMovieShortDataResponse
    {
        /// <summary>
        ///  排行榜数据
        /// </summary>
        public MovieShortData data = default(MovieShortData);
    } 

    /// <summary>
    ///  获取电影基本信息
    /// </summary>
    /// <param name="uuid"> 电影唯一id</param> 
    /// <returns></returns>
    public static ServerResponse<GetMovieShortDataResponse> GetMovieShortData(string uuid)
    {
        var url = ServerContext.UrlPathJoin("rank", "GetMovieShortData");
        var req = new GetMovieShortDataRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<GetMovieShortDataResponse>(url, req);
    } 

    public class GetPlayerShortDataRequest
    {
        /// <summary>
        ///  id
        /// </summary>
        public int userId = default(int);
    } 

    public class GetPlayerShortDataResponse
    {
        /// <summary>
        ///  玩家信息
        /// </summary>
        public PlayerShortData data = default(PlayerShortData);
    } 

    /// <summary>
    ///  获取玩家基本信息
    /// </summary>
    /// <param name="userId"> id</param> 
    /// <returns></returns>
    public static ServerResponse<GetPlayerShortDataResponse> GetPlayerShortData(int userId)
    {
        var url = ServerContext.UrlPathJoin("rank", "GetPlayerShortData");
        var req = new GetPlayerShortDataRequest()
        {
            userId = userId,
        };
        return new ServerResponse<GetPlayerShortDataResponse>(url, req);
    } 

    public class GetServerListRewardRequest
    {
        /// <summary>
        ///  排行榜唯一id
        /// </summary>
        public string uuid = default(string);
    } 

    public class GetServerListRewardResponse
    {
        /// <summary>
        ///  奖励物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  领取排行榜奖励
    /// </summary>
    /// <param name="uuid"> 排行榜唯一id</param> 
    /// <returns></returns>
    public static ServerResponse<GetServerListRewardResponse> GetServerListReward(string uuid)
    {
        var url = ServerContext.UrlPathJoin("rank", "GetServerListReward");
        var req = new GetServerListRewardRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<GetServerListRewardResponse>(url, req);
    } 

    public class ChangeServerNameRequest
    {
        /// <summary>
        ///  排行榜唯一id
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  服务器名称
        /// </summary>
        public string name = default(string);
    } 

    public class ChangeServerNameResponse
    {
    } 

    /// <summary>
    ///  修改服务器名称
    /// </summary>
    /// <param name="uuid"> 排行榜唯一id</param> 
    /// <param name="name"> 服务器名称</param> 
    /// <returns></returns>
    public static ServerResponse<ChangeServerNameResponse> ChangeServerName(string uuid, string name)
    {
        var url = ServerContext.UrlPathJoin("rank", "ChangeServerName");
        var req = new ChangeServerNameRequest()
        {
            uuid = uuid,
            name = name,
        };
        return new ServerResponse<ChangeServerNameResponse>(url, req);
    } 

    public class GetOscarDataRequest
    {
    } 

    public class GetOscarDataResponse
    {
    } 

    public static ServerResponse<GetOscarDataResponse> GetOscarData()
    {
        var url = ServerContext.UrlPathJoin("rank", "GetOscarData");
        var req = new GetOscarDataRequest()
        {
        };
        return new ServerResponse<GetOscarDataResponse>(url, req);
    } 

    public class GetOscarRewardRequest
    {
        public EOscarType type = 0;
    } 

    public class GetOscarRewardResponse
    {
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    public static ServerResponse<GetOscarRewardResponse> GetOscarReward(EOscarType type)
    {
        var url = ServerContext.UrlPathJoin("rank", "GetOscarReward");
        var req = new GetOscarRewardRequest()
        {
            type = type,
        };
        return new ServerResponse<GetOscarRewardResponse>(url, req);
    } 

    public class ChoseTheaterRequest
    {
        public int theaterId = default(int);
    } 

    public class ChoseTheaterResponse
    {
    } 

    /// <summary>
    ///  签约影院
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<ChoseTheaterResponse> ChoseTheater(int theaterId)
    {
        var url = ServerContext.UrlPathJoin("rank", "ChoseTheater");
        var req = new ChoseTheaterRequest()
        {
            theaterId = theaterId,
        };
        return new ServerResponse<ChoseTheaterResponse>(url, req);
    } 

    public class GetStreetRewardRequest
    {
        /// <summary>
        ///  0 街区奖励 1 排行榜祝贺, 2 总票房排行榜祝贺
        /// </summary>
        public int type = default(int);
    } 

    public class GetStreetRewardResponse
    {
        public int type = default(int);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    public static ServerResponse<GetStreetRewardResponse> GetStreetReward(int type)
    {
        var url = ServerContext.UrlPathJoin("rank", "GetStreetReward");
        var req = new GetStreetRewardRequest()
        {
            type = type,
        };
        return new ServerResponse<GetStreetRewardResponse>(url, req);
    } 

}

public class TaskPxy {
    
    /// <summary>
    ///  请求
    /// </summary>
    public class RewardRequest
    {
        /// <summary>
        ///  id
        /// </summary>
        public string tId = default(string);
    } 

    /// <summary>
    ///  回复
    /// </summary>
    public class RewardResponse
    {
        /// <summary>
        ///  id
        /// </summary>
        public string tId = default(string);
        /// <summary>
        ///  奖励内容
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    public static ServerResponse<RewardResponse> Reward(string tId)
    {
        var url = ServerContext.UrlPathJoin("task", "reward");
        var req = new RewardRequest()
        {
            tId = tId,
        };
        return new ServerResponse<RewardResponse>(url, req);
    } 

}

public class MallPxy {
    
    public class BuyRequest
    {
        /// <summary>
        ///  商品编号
        /// </summary>
        public int goodsId = default(int);
        /// <summary>
        ///  商品数量
        /// </summary>
        public int amount = default(int);
    } 

    public class BuyResponse
    {
        /// <summary>
        ///  返回购买结果
        /// </summary>
        public int result = default(int);
    } 

    public static ServerResponse<BuyResponse> Buy(int goodsId, int amount)
    {
        var url = ServerContext.UrlPathJoin("mall", "buy");
        var req = new BuyRequest()
        {
            goodsId = goodsId,
            amount = amount,
        };
        return new ServerResponse<BuyResponse>(url, req);
    } 

}

public class MailPxy {
    
    public class MailGetRewardRequest
    {
        public string uuid = default(string);
    } 

    public class MailGetRewardResponse
    {
        public string uuid = default(string);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    public static ServerResponse<MailGetRewardResponse> MailGetReward(string uuid)
    {
        var url = ServerContext.UrlPathJoin("Mail", "MailGetReward");
        var req = new MailGetRewardRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<MailGetRewardResponse>(url, req);
    } 

    public class MailGetRewardManyRequest
    {
        public List<string> uuid = default(List<string>);
    } 

    public class MailGetRewardManyResponse
    {
        public List<string> uuid = default(List<string>);
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  批量领取邮件
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<MailGetRewardManyResponse> MailGetRewardMany(List<string> uuid)
    {
        var url = ServerContext.UrlPathJoin("Mail", "MailGetRewardMany");
        var req = new MailGetRewardManyRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<MailGetRewardManyResponse>(url, req);
    } 

    public class MailDeleteManyRequest
    {
        public List<string> uuid = default(List<string>);
    } 

    public class MailDeleteManyResponse
    {
        public List<string> uuid = default(List<string>);
    } 

    /// <summary>
    ///  批量删除邮件
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<MailDeleteManyResponse> MailDeleteMany(List<string> uuid)
    {
        var url = ServerContext.UrlPathJoin("Mail", "MailDeleteMany");
        var req = new MailDeleteManyRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<MailDeleteManyResponse>(url, req);
    } 

    public class MailDeleteRequest
    {
        public string uuid = default(string);
    } 

    public class MailDeleteResponse
    {
        public string uuid = default(string);
    } 

    public static ServerResponse<MailDeleteResponse> MailDelete(string uuid)
    {
        var url = ServerContext.UrlPathJoin("Mail", "MailDelete");
        var req = new MailDeleteRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<MailDeleteResponse>(url, req);
    } 

    public class MailReadRequest
    {
        public string uuid = default(string);
    } 

    public class MailReadResponse
    {
        public string uuid = default(string);
    } 

    public static ServerResponse<MailReadResponse> MailRead(string uuid)
    {
        var url = ServerContext.UrlPathJoin("Mail", "MailRead");
        var req = new MailReadRequest()
        {
            uuid = uuid,
        };
        return new ServerResponse<MailReadResponse>(url, req);
    } 

}

public class GiftPxy {
    
    public class ExchangeRequest
    {
        /// <summary>
        ///  兑换码 id
        /// </summary>
        public string id = default(string);
    } 

    public class ExchangeResponse
    {
        public int result = default(int);
        /// <summary>
        ///  掉落
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    /// <summary>
    ///  礼包兑换
    /// </summary>
    /// <param name="id"> 兑换码 id</param> 
    /// <returns></returns>
    public static ServerResponse<ExchangeResponse> Exchange(string id)
    {
        var url = ServerContext.UrlPathJoin("Gift", "Exchange");
        var req = new ExchangeRequest()
        {
            id = id,
        };
        return new ServerResponse<ExchangeResponse>(url, req);
    } 

}

public class ManageBusinessPxy {
    
    public class GetRewardRequest
    {
    } 

    public class GetRewardResponse
    {
    } 

    /// <summary>
    ///  领取奖励
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetRewardResponse> GetReward()
    {
        var url = ServerContext.UrlPathJoin("manageBusiness", "GetReward");
        var req = new GetRewardRequest()
        {
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

}

public class ManageVisitPxy {
    
    public class StartVisitRequest
    {
    } 

    public class StartVisitResponse
    {
    } 

    /// <summary>
    ///  开始探班
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<StartVisitResponse> StartVisit()
    {
        var url = ServerContext.UrlPathJoin("manageVisit", "StartVisit");
        var req = new StartVisitRequest()
        {
        };
        return new ServerResponse<StartVisitResponse>(url, req);
    } 

    public class GetRewardRequest
    {
    } 

    public class GetRewardResponse
    {
    } 

    /// <summary>
    ///  领取探班奖励
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetRewardResponse> GetReward()
    {
        var url = ServerContext.UrlPathJoin("manageVisit", "GetReward");
        var req = new GetRewardRequest()
        {
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

    public class StartReceRequest
    {
    } 

    public class StartReceResponse
    {
    } 

    /// <summary>
    ///  开始接待
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<StartReceResponse> StartRece()
    {
        var url = ServerContext.UrlPathJoin("manageVisit", "StartRece");
        var req = new StartReceRequest()
        {
        };
        return new ServerResponse<StartReceResponse>(url, req);
    } 

}

public class ManageMeetingPxy {
    
    public class GetRewardRequest
    {
        /// <summary>
        ///  0领取 1回绝
        /// </summary>
        public int type = default(int);
    } 

    public class GetRewardResponse
    {
        /// <summary>
        ///  0领取 1回绝
        /// </summary>
        public int type = default(int);
    } 

    /// <summary>
    ///  领取奖励
    /// </summary>
    /// <param name="type"> 0领取 1回绝</param> 
    /// <returns></returns>
    public static ServerResponse<GetRewardResponse> GetReward(int type)
    {
        var url = ServerContext.UrlPathJoin("manageMeeting", "GetReward");
        var req = new GetRewardRequest()
        {
            type = type,
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

    public class MarkupRequest
    {
        /// <summary>
        ///  2 50% 1 200%
        /// </summary>
        public int type = default(int);
    } 

    public class MarkupResponse
    {
        /// <summary>
        ///  2 50% 1 200%
        /// </summary>
        public int type = default(int);
    } 

    /// <summary>
    ///  加价
    /// </summary>
    /// <param name="type"> 2 50% 1 200%</param> 
    /// <returns></returns>
    public static ServerResponse<MarkupResponse> Markup(int type)
    {
        var url = ServerContext.UrlPathJoin("manageMeeting", "Markup");
        var req = new MarkupRequest()
        {
            type = type,
        };
        return new ServerResponse<MarkupResponse>(url, req);
    } 

}

public class DailySignPxy {
    
    public class SignRequest
    {
    } 

    public class SignResponse
    {
        /// <summary>
        ///  掉落
        /// </summary>
        public ItemDesc dropout = default(ItemDesc);
    } 

    /// <summary>
    ///  签到
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<SignResponse> Sign()
    {
        var url = ServerContext.UrlPathJoin("dailySign", "sign");
        var req = new SignRequest()
        {
        };
        return new ServerResponse<SignResponse>(url, req);
    } 

}

public class SecretaryPxy {
    
    public class GetDailyRewardRequest
    {
    } 

    public class GetDailyRewardResponse
    {
    } 

    /// <summary>
    ///  领取奖励
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetDailyRewardResponse> GetDailyReward()
    {
        var url = ServerContext.UrlPathJoin("secretary", "GetDailyReward");
        var req = new GetDailyRewardRequest()
        {
        };
        return new ServerResponse<GetDailyRewardResponse>(url, req);
    } 

    public class OpenSecretaryRequest
    {
        /// <summary>
        ///  操作哪一个模块小秘书
        /// </summary>
        public int key = default(int);
        /// <summary>
        ///  0关闭 1开启
        /// </summary>
        public int type = default(int);
    } 

    public class OpenSecretaryResponse
    {
        /// <summary>
        ///  操作哪一个模块小秘书
        /// </summary>
        public int key = default(int);
        /// <summary>
        ///  0关闭 1开启
        /// </summary>
        public int type = default(int);
    } 

    public static ServerResponse<OpenSecretaryResponse> OpenSecretary(int key, int type)
    {
        var url = ServerContext.UrlPathJoin("secretary", "OpenSecretary");
        var req = new OpenSecretaryRequest()
        {
            key = key,
            type = type,
        };
        return new ServerResponse<OpenSecretaryResponse>(url, req);
    } 

    public class ApplyMovieLicenceRequest
    {
    } 

    public class ApplyMovieLicenceResponse
    {
    } 

    /// <summary>
    ///  申请拍摄许可证
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<ApplyMovieLicenceResponse> ApplyMovieLicence()
    {
        var url = ServerContext.UrlPathJoin("secretary", "ApplyMovieLicence");
        var req = new ApplyMovieLicenceRequest()
        {
        };
        return new ServerResponse<ApplyMovieLicenceResponse>(url, req);
    } 

    public class RewardMovieLicenceRequest
    {
    } 

    public class RewardMovieLicenceResponse
    {
    } 

    /// <summary>
    ///  领取拍摄许可证
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<RewardMovieLicenceResponse> RewardMovieLicence()
    {
        var url = ServerContext.UrlPathJoin("secretary", "RewardMovieLicence");
        var req = new RewardMovieLicenceRequest()
        {
        };
        return new ServerResponse<RewardMovieLicenceResponse>(url, req);
    } 

}

public class SevenAddUpPxy {
    
    public class GetRewardRequest
    {
        /// <summary>
        ///  唯一七日礼包ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  档位
        /// </summary>
        public int gear = default(int);
    } 

    public class GetRewardResponse
    {
        /// <summary>
        ///  唯一七日礼包ID
        /// </summary>
        public string uuid = default(string);
        /// <summary>
        ///  档位
        /// </summary>
        public int gear = default(int);
    } 

    public static ServerResponse<GetRewardResponse> GetReward(string uuid, int gear)
    {
        var url = ServerContext.UrlPathJoin("sevenAddUp", "GetReward");
        var req = new GetRewardRequest()
        {
            uuid = uuid,
            gear = gear,
        };
        return new ServerResponse<GetRewardResponse>(url, req);
    } 

    public class TouchRequest
    {
    } 

    public class TouchResponse
    {
    } 

    /// <summary>
    ///  跨天触发
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<TouchResponse> Touch()
    {
        var url = ServerContext.UrlPathJoin("sevenAddUp", "Touch");
        var req = new TouchRequest()
        {
        };
        return new ServerResponse<TouchResponse>(url, req);
    } 

}

public class BeginnerGuidePxy {
    
    public class CompleteGuideRequest
    {
        /// <summary>
        ///  引导任务编号
        /// </summary>
        public int gId = default(int);
        /// <summary>
        ///  引导类型
        /// </summary>
        public EGuideType type = 0;
    } 

    public class CompleteGuideResponse
    {
        /// <summary>
        ///  引导任务编号
        /// </summary>
        public int gId = default(int);
        /// <summary>
        ///  引导类型
        /// </summary>
        public EGuideType type = 0;
    } 

    /// <summary>
    ///  完成一个引导任务
    /// </summary>
    /// <param name="gId"> 引导任务编号</param> 
    /// <param name="type"> 引导类型</param> 
    /// <returns></returns>
    public static ServerResponse<CompleteGuideResponse> CompleteGuide(int gId, EGuideType type)
    {
        var url = ServerContext.UrlPathJoin("BeginnerGuide", "CompleteGuide");
        var req = new CompleteGuideRequest()
        {
            gId = gId,
            type = type,
        };
        return new ServerResponse<CompleteGuideResponse>(url, req);
    } 

    public class GuideEndRewardRequest
    {
    } 

    public class GuideEndRewardResponse
    {
        /// <summary>
        ///  没有为true
        /// </summary>
        public bool isNewActor = default(bool);
    } 

    public static ServerResponse<GuideEndRewardResponse> GuideEndReward()
    {
        var url = ServerContext.UrlPathJoin("BeginnerGuide", "GuideEndReward");
        var req = new GuideEndRewardRequest()
        {
        };
        return new ServerResponse<GuideEndRewardResponse>(url, req);
    } 

}

public class DanmuPxy {
    
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
    ///  设置弹幕
    /// </summary>
    /// <param name="id"> 颁奖场次 Id</param> 
    /// <param name="msg"> 弹幕消息</param> 
    /// <returns></returns>
    public static ServerResponse<SetResponse> Set(int id, string msg)
    {
        var url = ServerContext.UrlPathJoin("Danmu", "set");
        var req = new SetRequest()
        {
            id = id,
            msg = msg,
        };
        return new ServerResponse<SetResponse>(url, req);
    } 

    /// <summary>
    ///  可以传入 time 表示获取这个时间戳以后的弹幕
    /// </summary>
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

    public static ServerResponse<GetResponse> Get(int id, int time)
    {
        var url = ServerContext.UrlPathJoin("Danmu", "get");
        var req = new GetRequest()
        {
            id = id,
            time = time,
        };
        return new ServerResponse<GetResponse>(url, req);
    } 

}

public class CooperatePxy {
    
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

    /// <summary>
    ///  寻求合作
    /// </summary>
    /// <param name="entityId"> 合作者ID 为0时，为公开邀请</param> 
    /// <returns></returns>
    public static ServerResponse<ApplyResponse> Apply(int entityId)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "Apply");
        var req = new ApplyRequest()
        {
            entityId = entityId,
        };
        return new ServerResponse<ApplyResponse>(url, req);
    } 

    public class CancelCooperateRequest
    {
    } 

    public class CancelCooperateResponse
    {
    } 

    /// <summary>
    ///  取消公开邀请
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<CancelCooperateResponse> CancelCooperate()
    {
        var url = ServerContext.UrlPathJoin("cooperate", "CancelCooperate");
        var req = new CancelCooperateRequest()
        {
        };
        return new ServerResponse<CancelCooperateResponse>(url, req);
    } 

    public class RelieveRequest
    {
    } 

    public class RelieveResponse
    {
    } 

    /// <summary>
    ///  解除合作
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<RelieveResponse> Relieve()
    {
        var url = ServerContext.UrlPathJoin("cooperate", "Relieve");
        var req = new RelieveRequest()
        {
        };
        return new ServerResponse<RelieveResponse>(url, req);
    } 

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

    /// <summary>
    ///  审批
    /// </summary>
    /// <param name="type"> 审批类型 0同意 1拒绝</param> 
    /// <param name="entityId"> 审批的哪个玩家</param> 
    /// <returns></returns>
    public static ServerResponse<ApproveResponse> Approve(int type, string entityId)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "Approve");
        var req = new ApproveRequest()
        {
            type = type,
            entityId = entityId,
        };
        return new ServerResponse<ApproveResponse>(url, req);
    } 

    public class GetInfoRequest
    {
        public List<string> oldOrderUuids = default(List<string>);
    } 

    public class GetInfoResponse
    {
    } 

    /// <summary>
    ///  主界面合作信息 10秒一次
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetInfoResponse> GetInfo(List<string> oldOrderUuids)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "GetInfo");
        var req = new GetInfoRequest()
        {
            oldOrderUuids = oldOrderUuids,
        };
        return new ServerResponse<GetInfoResponse>(url, req);
    } 

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

    /// <summary>
    ///  
    /// </summary>
    /// <param name="type"> 任务操作 0接取 1协作</param> 
    /// <param name="taskId"> 哪个任务</param> 
    /// <param name="star"> 星级</param> 
    /// <returns></returns>
    public static ServerResponse<TaskOperateResponse> TaskOperate(int type, int taskId, int star)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "TaskOperate");
        var req = new TaskOperateRequest()
        {
            type = type,
            taskId = taskId,
            star = star,
        };
        return new ServerResponse<TaskOperateResponse>(url, req);
    } 

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

    public static ServerResponse<GetTaskRewardResponse> GetTaskReward(int taskId, int star)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "GetTaskReward");
        var req = new GetTaskRewardRequest()
        {
            taskId = taskId,
            star = star,
        };
        return new ServerResponse<GetTaskRewardResponse>(url, req);
    } 

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

    /// <summary>
    ///  赠送物品
    /// </summary>
    /// <param name="itemId"> 赠送物品ID</param> 
    /// <returns></returns>
    public static ServerResponse<GiveRewardResponse> GiveReward(int itemId)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "GiveReward");
        var req = new GiveRewardRequest()
        {
            itemId = itemId,
        };
        return new ServerResponse<GiveRewardResponse>(url, req);
    } 

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

    /// <summary>
    ///  领取进度奖励
    /// </summary>
    /// <param name="index"> 领取哪一个</param> 
    /// <returns></returns>
    public static ServerResponse<GetProgressTaskResponse> GetProgressTask(int index)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "GetProgressTask");
        var req = new GetProgressTaskRequest()
        {
            index = index,
        };
        return new ServerResponse<GetProgressTaskResponse>(url, req);
    } 

    public class ReadCooperateRequest
    {
    } 

    public class ReadCooperateResponse
    {
    } 

    /// <summary>
    ///  查看合作信息
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<ReadCooperateResponse> ReadCooperate()
    {
        var url = ServerContext.UrlPathJoin("cooperate", "ReadCooperate");
        var req = new ReadCooperateRequest()
        {
        };
        return new ServerResponse<ReadCooperateResponse>(url, req);
    } 

    public class GetTaskInfoRequest
    {
    } 

    public class GetTaskInfoResponse
    {
    } 

    /// <summary>
    ///  合作任务界面 2秒一次
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetTaskInfoResponse> GetTaskInfo()
    {
        var url = ServerContext.UrlPathJoin("cooperate", "GetTaskInfo");
        var req = new GetTaskInfoRequest()
        {
        };
        return new ServerResponse<GetTaskInfoResponse>(url, req);
    } 

    public class GetOrderInfoRequest
    {
        public List<string> oldOrderUuids = default(List<string>);
    } 

    public class GetOrderInfoResponse
    {
    } 

    /// <summary>
    ///  合作订单界面 2秒一次
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GetOrderInfoResponse> GetOrderInfo(List<string> oldOrderUuids)
    {
        var url = ServerContext.UrlPathJoin("cooperate", "GetOrderInfo");
        var req = new GetOrderInfoRequest()
        {
            oldOrderUuids = oldOrderUuids,
        };
        return new ServerResponse<GetOrderInfoResponse>(url, req);
    } 

}

public class PayPxy {
    
    public class StartOrderRequest
    {
        /// <summary>
        ///  商品id
        /// </summary>
        public int id = default(int);
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int);
    } 

    public class StartOrderResponse
    {
        /// <summary>
        ///  商品id
        /// </summary>
        public int id = default(int);
        /// <summary>
        ///  数量
        /// </summary>
        public int amount = default(int);
        /// <summary>
        ///  订单id
        /// </summary>
        public string orderId = default(string);
    } 

    public static ServerResponse<StartOrderResponse> StartOrder(int id, int amount)
    {
        var url = ServerContext.UrlPathJoin("pay", "StartOrder");
        var req = new StartOrderRequest()
        {
            id = id,
            amount = amount,
        };
        return new ServerResponse<StartOrderResponse>(url, req);
    } 

    public class FinishOrderRequest
    {
        /// <summary>
        ///  订单id
        /// </summary>
        public string orderId = default(string);
        /// <summary>
        ///  结果 0 成功, 1 失败
        /// </summary>
        public int result = default(int);
    } 

    public class FinishOrderResponse
    {
        /// <summary>
        ///  订单id
        /// </summary>
        public string orderId = default(string);
        /// <summary>
        ///  结果 0 成功, 1 失败
        /// </summary>
        public int result = default(int);
        /// <summary>
        ///  掉落物品
        /// </summary>
        public List<ItemDesc> dropout = default(List<ItemDesc>);
    } 

    public static ServerResponse<FinishOrderResponse> FinishOrder(string orderId, int result)
    {
        var url = ServerContext.UrlPathJoin("pay", "FinishOrder");
        var req = new FinishOrderRequest()
        {
            orderId = orderId,
            result = result,
        };
        return new ServerResponse<FinishOrderResponse>(url, req);
    } 

}

public class ChatPxy {
    
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

    /// <summary>
    ///  新消息通知
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<MessageNoticeResponse> MessageNotice(int channel)
    {
        var url = ServerContext.UrlPathJoin("chat", "MessageNotice");
        var req = new MessageNoticeRequest()
        {
            channel = channel,
        };
        return new ServerResponse<MessageNoticeResponse>(url, req);
    } 

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

    /// <summary>
    ///  主页面新消息通知
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<NewMessageResponse> NewMessage()
    {
        var url = ServerContext.UrlPathJoin("chat", "NewMessage");
        var req = new NewMessageRequest()
        {
        };
        return new ServerResponse<NewMessageResponse>(url, req);
    } 

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

    /// <summary>
    ///  各个频道消息
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<AllMessageResponse> AllMessage()
    {
        var url = ServerContext.UrlPathJoin("chat", "AllMessage");
        var req = new AllMessageRequest()
        {
        };
        return new ServerResponse<AllMessageResponse>(url, req);
    } 

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

    /// <summary>
    ///  发送信息
    /// </summary>
    /// <param name="message"> 信息</param> 
    /// <param name="recipient"> 接收者</param> 
    /// <param name="roomId"> 房间号，如果是世界频道，不判断该字段</param> 
    /// <param name="channel"> 频道</param> 
    /// <returns></returns>
    public static ServerResponse<SendMessageResponse> SendMessage(string message, int recipient, int roomId, int channel)
    {
        var url = ServerContext.UrlPathJoin("chat", "SendMessage");
        var req = new SendMessageRequest()
        {
            message = message,
            recipient = recipient,
            roomId = roomId,
            channel = channel,
        };
        return new ServerResponse<SendMessageResponse>(url, req);
    } 

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

    /// <summary>
    ///  拉取消息
    /// </summary>
    /// <param name="channel"> 频道</param> 
    /// <param name="roomId"> 房间号，如果是世界频道，不判断该字段</param> 
    /// <param name="messageId"> 0：新消息，非0：旧消息</param> 
    /// <returns></returns>
    public static ServerResponse<PullMessageResponse> PullMessage(int channel, int roomId, int messageId)
    {
        var url = ServerContext.UrlPathJoin("chat", "PullMessage");
        var req = new PullMessageRequest()
        {
            channel = channel,
            roomId = roomId,
            messageId = messageId,
        };
        return new ServerResponse<PullMessageResponse>(url, req);
    } 

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

    /// <summary>
    ///  屏蔽玩家
    /// </summary>
    /// <param name="userId"> 玩家id</param> 
    /// <returns></returns>
    public static ServerResponse<SheieldingResponse> Sheielding(int userId)
    {
        var url = ServerContext.UrlPathJoin("chat", "Sheielding");
        var req = new SheieldingRequest()
        {
            userId = userId,
        };
        return new ServerResponse<SheieldingResponse>(url, req);
    } 

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

    /// <summary>
    ///  解除屏蔽
    /// </summary>
    /// <param name="userId"> 玩家id</param> 
    /// <returns></returns>
    public static ServerResponse<ReleaseShieldResponse> ReleaseShield(int userId)
    {
        var url = ServerContext.UrlPathJoin("chat", "ReleaseShield");
        var req = new ReleaseShieldRequest()
        {
            userId = userId,
        };
        return new ServerResponse<ReleaseShieldResponse>(url, req);
    } 

    public class RecruitRequest
    {
    } 

    public class RecruitResponse
    {
    } 

    /// <summary>
    ///  招募集团
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<RecruitResponse> Recruit()
    {
        var url = ServerContext.UrlPathJoin("chat", "recruit");
        var req = new RecruitRequest()
        {
        };
        return new ServerResponse<RecruitResponse>(url, req);
    } 

}

public class SmallTargetPxy {
    
    public class LevGiftRequest
    {
    } 

    public class LevGiftResponse
    {
        /// <summary>
        ///  礼包id
        /// </summary>
        public int giftId = default(int);
    } 

    /// <summary>
    ///  等级礼包
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<LevGiftResponse> LevGift()
    {
        var url = ServerContext.UrlPathJoin("smallTarget", "LevGift");
        var req = new LevGiftRequest()
        {
        };
        return new ServerResponse<LevGiftResponse>(url, req);
    } 

    /// <summary>
    ///  奖杯礼包
    /// </summary>
    public class CupGiftRequest
    {
    } 

    public class CupGiftResponse
    {
        public int giftId = default(int);
    } 

    public static ServerResponse<CupGiftResponse> CupGift()
    {
        var url = ServerContext.UrlPathJoin("smallTarget", "CupGift");
        var req = new CupGiftRequest()
        {
        };
        return new ServerResponse<CupGiftResponse>(url, req);
    } 

    /// <summary>
    ///  奖杯礼包邮件
    /// </summary>
    public class GetCupMailRequest
    {
    } 

    public class GetCupMailResponse
    {
        public int giftId = default(int);
    } 

    public static ServerResponse<GetCupMailResponse> GetCupMail()
    {
        var url = ServerContext.UrlPathJoin("smallTarget", "GetCupMail");
        var req = new GetCupMailRequest()
        {
        };
        return new ServerResponse<GetCupMailResponse>(url, req);
    } 

}

public class AccountPxy {
    
    public class AuthRequest
    {
        public string account = default(string);
    } 

    public class AuthResponse
    {
        public string account = default(string);
        public string token = default(string);
    } 

    public static ServerResponse<AuthResponse> Auth(string account)
    {
        var url = ServerContext.UrlPathJoin("account", "auth");
        var req = new AuthRequest()
        {
            account = account,
        };
        return new ServerResponse<AuthResponse>(url, req);
    } 

    public class LoginRequest
    {
        public string account = default(string);
        public string token = default(string);
    } 

    public class LoginResponse
    {
        public string jwt = default(string);
        public int userId = default(int);
        public int timestamp = default(int);
    } 

    public static ServerResponse<LoginResponse> Login(string account, string token)
    {
        var url = ServerContext.UrlPathJoin("account", "login");
        var req = new LoginRequest()
        {
            account = account,
            token = token,
        };
        return new ServerResponse<LoginResponse>(url, req);
    } 

    public class RefreshTokenRequest
    {
    } 

    public class RefreshTokenResponse
    {
        public string jwt = default(string);
    } 

    public static ServerResponse<RefreshTokenResponse> RefreshToken()
    {
        var url = ServerContext.UrlPathJoin("account", "refreshToken");
        var req = new RefreshTokenRequest()
        {
        };
        return new ServerResponse<RefreshTokenResponse>(url, req);
    } 

}

public class ClientGMPxy {
    
    public class GmTestRequest
    {
    } 

    public class GmTestResponse
    {
        public int num = default(int);
    } 

    /// <summary>
    ///  测试
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestResponse> GmTest()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTest");
        var req = new GmTestRequest()
        {
        };
        return new ServerResponse<GmTestResponse>(url, req);
    } 

    public class GmUpdateOscarRequest
    {
    } 

    public class GmUpdateOscarResponse
    {
    } 

    /// <summary>
    ///  请求奥斯卡数据
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmUpdateOscarResponse> GmUpdateOscar()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmUpdateOscar");
        var req = new GmUpdateOscarRequest()
        {
        };
        return new ServerResponse<GmUpdateOscarResponse>(url, req);
    } 

    public class GmPrintMemRequest
    {
    } 

    public class GmPrintMemResponse
    {
    } 

    /// <summary>
    ///  打印内存
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmPrintMemResponse> GmPrintMem()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmPrintMem");
        var req = new GmPrintMemRequest()
        {
        };
        return new ServerResponse<GmPrintMemResponse>(url, req);
    } 

    public class GmTestLocalStorageSaveRequest
    {
    } 

    public class GmTestLocalStorageSaveResponse
    {
    } 

    /// <summary>
    ///  测试几百个本地缓存同时存储
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestLocalStorageSaveResponse> GmTestLocalStorageSave()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestLocalStorageSave");
        var req = new GmTestLocalStorageSaveRequest()
        {
        };
        return new ServerResponse<GmTestLocalStorageSaveResponse>(url, req);
    } 

    public class GmTestLocalStorageReadRequest
    {
    } 

    public class GmTestLocalStorageReadResponse
    {
    } 

    /// <summary>
    ///  测试几百个本地缓存同时读取
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestLocalStorageReadResponse> GmTestLocalStorageRead()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestLocalStorageRead");
        var req = new GmTestLocalStorageReadRequest()
        {
        };
        return new ServerResponse<GmTestLocalStorageReadResponse>(url, req);
    } 

    public class GmTestTimerLoopRequest
    {
    } 

    public class GmTestTimerLoopResponse
    {
    } 

    /// <summary>
    ///  检测TimerLoop
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestTimerLoopResponse> GmTestTimerLoop()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestTimerLoop");
        var req = new GmTestTimerLoopRequest()
        {
        };
        return new ServerResponse<GmTestTimerLoopResponse>(url, req);
    } 

    public class GmTestReloginRequest
    {
    } 

    public class GmTestReloginResponse
    {
    } 

    /// <summary>
    ///  重新登录
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestReloginResponse> GmTestRelogin()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestRelogin");
        var req = new GmTestReloginRequest()
        {
        };
        return new ServerResponse<GmTestReloginResponse>(url, req);
    } 

    public class GmTestRelogin2Request
    {
    } 

    public class GmTestRelogin2Response
    {
    } 

    /// <summary>
    ///  重新登录2
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestRelogin2Response> GmTestRelogin2()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestRelogin2");
        var req = new GmTestRelogin2Request()
        {
        };
        return new ServerResponse<GmTestRelogin2Response>(url, req);
    } 

    public class GmTestPrintTotalActiveTweensRequest
    {
    } 

    public class GmTestPrintTotalActiveTweensResponse
    {
    } 

    /// <summary>
    ///  打印有多少个fgui的动效
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestPrintTotalActiveTweensResponse> GmTestPrintTotalActiveTweens()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestPrintTotalActiveTweens");
        var req = new GmTestPrintTotalActiveTweensRequest()
        {
        };
        return new ServerResponse<GmTestPrintTotalActiveTweensResponse>(url, req);
    } 

    public class GmTestKillAlphaTransitionRequest
    {
    } 

    public class GmTestKillAlphaTransitionResponse
    {
    } 

    /// <summary>
    ///  停止透明的fgui动效
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmTestKillAlphaTransitionResponse> GmTestKillAlphaTransition()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmTestKillAlphaTransition");
        var req = new GmTestKillAlphaTransitionRequest()
        {
        };
        return new ServerResponse<GmTestKillAlphaTransitionResponse>(url, req);
    } 

    public class GmPauseRequest
    {
    } 

    public class GmPauseResponse
    {
    } 

    /// <summary>
    ///  暂停游戏
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmPauseResponse> GmPause()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmPause");
        var req = new GmPauseRequest()
        {
        };
        return new ServerResponse<GmPauseResponse>(url, req);
    } 

    public class GmPauseRebderRequest
    {
    } 

    public class GmPauseRebderResponse
    {
    } 

    /// <summary>
    ///  暂停游戏渲染
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmPauseRebderResponse> GmPauseRebder()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmPauseRebder");
        var req = new GmPauseRebderRequest()
        {
        };
        return new ServerResponse<GmPauseRebderResponse>(url, req);
    } 

    public class GmCacheAsRequest
    {
    } 

    public class GmCacheAsResponse
    {
    } 

    /// <summary>
    ///  设置cacheAs
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmCacheAsResponse> GmCacheAs()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmCacheAs");
        var req = new GmCacheAsRequest()
        {
        };
        return new ServerResponse<GmCacheAsResponse>(url, req);
    } 

    public class GmStopAllTransformRequest
    {
    } 

    public class GmStopAllTransformResponse
    {
    } 

    /// <summary>
    ///  停止所有东西
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmStopAllTransformResponse> GmStopAllTransform()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmStopAllTransform");
        var req = new GmStopAllTransformRequest()
        {
        };
        return new ServerResponse<GmStopAllTransformResponse>(url, req);
    } 

    public class GmEnablePrinLoopRequest
    {
    } 

    public class GmEnablePrinLoopResponse
    {
    } 

    /// <summary>
    ///  是否打印loop开关
    /// </summary>
    /// <returns></returns>
    public static ServerResponse<GmEnablePrinLoopResponse> GmEnablePrinLoop()
    {
        var url = ServerContext.UrlPathJoin("ClientGM", "gmEnablePrinLoop");
        var req = new GmEnablePrinLoopRequest()
        {
        };
        return new ServerResponse<GmEnablePrinLoopResponse>(url, req);
    } 

}

        
        