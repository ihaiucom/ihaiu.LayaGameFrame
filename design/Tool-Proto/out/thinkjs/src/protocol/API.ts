/**
 *  MADE BY GENERATOR AT 2018-12-10 20:14:50,
 *  PLEASE DO NOT REWRITE.
 */
 
import * as SS from "./SharedStruct";
import * as SE from "./SharedEnum";

export namespace GameData {

    export class AuthRequest { // 请求注册 
        pass: string = ""; // 密码
    } 

    export class AuthResponse {  
        result: number = 0; // 返回 0成功 1失败
    }  
    
    export class VisitorAuthRequest { // 请求游客转正 
        name: string = ""; // 用户名
        pass: string = ""; // 密码
    } 

    export class VisitorAuthResponse {  
        result: number = 0; // 返回 0成功 1不是游客账号 2绑定失败 3重名
    }  
    
    export class InitGameDataRequest {  
        name: string = ""; // 公司名字
        sex: SE.EUserSex = 0; // 性别
    } 

    export class InitGameDataResponse {  
        result: number = 0; // 返回 0成功 1失败
    }  
    
    export class GetLoginGameDataRequest { // 请求登陆 
        pass: string = ""; // 密码
        channel: string = ""; // 客户端的渠道代码
    } 

    export class GetLoginGameDataResponse {  
        serverCode: string = ""; // 服务器编号
        serverName: string = ""; // 服务器名称
        noticeList: Array<SS.Notice> | null = null; 
        timeZone: string = ""; // 时区
    }  
    
    export class GetInitGameDataRequest {  
        nameList: Array<string> | null = null; // 需要获取的类型的string描述 DBOType枚举
    } 

    export class GetInitGameDataResponse {  
    }  
    
    export class RenameGameDataRequest {  
        playerName: string = ""; // 更改后的名字
    } 

    export class RenameGameDataResponse {  
        result: number = 0; // 返回 0成功 1失败 2无须更改
    }  
    
    export class RePerSignatureGameDataRequest {  
        perSignature: string = ""; // 修改玩家的个性签名
    } 

    export class RePerSignatureGameDataResponse {  
        result: number = 0; // 返回 0成功 1失败
    }  
    
    export class RePortraitGameDataRequest {  
        type: number = 0; // 0表示穿戴 1表示购买
        portraitId: number = 0; // 头像ID
    } 

    export class RePortraitGameDataResponse {  
        result: number = 0; // 返回 0成功 1失败 2无须更改
    }  
    
    export class GetGameInfoExtRequest {  
    } 

    export class GetGameInfoExtResponse {  
    }  
    
    export class GetInitActorRequest {  
        index: number = 0; 
    } 

    export class GetInitActorResponse {  
    }  
    
    export class GetNoticeListRequest {  
    } 

    export class GetNoticeListResponse {  
        noticeList: Array<SS.Notice> | null = null; 
    }  
    
}

export namespace CinemaBuild {

    export class ExtendFloorRequest { // 请求 
        floor: number = 0; // 楼层数
    } 

    export class ExtendFloorResponse {  
        result: number = 0; // 0,成功，非0，错误码
        floor: number = 0; // 当前扩充的楼层数
    }  
    
    export class BuildRoomRequest {  
        floor: number = 0; // 楼层数
        roomType: number = 0; // 建筑类型
    } 

    export class BuildRoomResponse {  
        result: number = 0; // 0,成功，非0，错误码
        floor: number = 0; // 楼层数
        roomId: number = 0; // 建筑id
    }  
    
    export class UpgradeRoomRequest {  
        roomId: number = 0; // 建筑id
    } 

    export class UpgradeRoomResponse {  
        result: number = 0; // 0,成功，非0，错误码
        preRoomId: number = 0; // 升级前的房间id
        roomId: number = 0; // 建筑id
    }  
    
    export class goldExchangeRequest {  
        count: number = 0; // 兑换的次数
    } 

    export class goldExchangeResponse {  
        result: number = 0; // 0,成功，非0，错误码
        count: number = 0; // 兑换次数
        totalCount: number = 0; // 今日已经兑换的次数
    }  
    
}

export namespace test {

    export class AddItemRequest {  
        itemId: number = 0; // 道具id
        amount: number = 0; // 道具数量
    } 

    export class AddItemResponse {  
    }  
    
    export class AddFansRequest {  
        amount: number = 0; // 粉丝数量
    } 

    export class AddFansResponse {  
    }  
    
    export class AddExpectRequest {  
        amount: number = 0; // 期待值数量
    } 

    export class AddExpectResponse {  
    }  
    
    export class DeleteMovieRequest {  
        uuid: string = ""; // 电影id
    } 

    export class DeleteMovieResponse {  
    }  
    
    export class AddStarStoryRequest {  
        starId: number = 0; // 剧本星级
        amount: number = 0; // 数量
    } 

    export class AddStarStoryResponse {  
    }  
    
    export class AddStoryRequest {  
        storyId: number = 0; // 剧本id
    } 

    export class AddStoryResponse {  
    }  
    
    export class AddActorSkillExpRequest {  
        actorId: number = 0; // 艺人id
        amount: number = 0; 
    } 

    export class AddActorSkillExpResponse {  
    }  
    
    export class AddStoryProgressRequest {  
        storyId: number = 0; // 剧本唯一ID
        index: number = 0; // 哪一个
    } 

    export class AddStoryProgressResponse {  
    }  
    
    export class FinishGuideRequest {  
    } 

    export class FinishGuideResponse {  
    }  
    
    export class debugRequest {  
        num: number = 0; 
    } 

    export class debugResponse {  
    }  
    
    export class AddGiftRequest {  
        giftUuid: string = ""; // 兑换码
        giftId: number = 0; // 兑换码配置文件 id
        targetId: number = 0; // 指定使用者
        startTime: number = 0; // 开始时间
        endTime: number = 0; // 结束时间
        total: number = 0; // 总共可用次数
    } 

    export class AddGiftResponse {  
    }  
    
    export class SetBlockLevelRequest {  
        level: number = 0; // 街区等级
    } 

    export class SetBlockLevelResponse {  
    }  
    
    export class RefreshTimeRequest {  
        type: SE.EGMRefreshType = 0; // 刷新类型
    } 

    export class RefreshTimeResponse {  
    }  
    
    export class PutOrderItemsRequest {  
        uuid: string = ""; // 唯一订单编号
    } 

    export class PutOrderItemsResponse {  
        uuid: string = ""; // 唯一订单编号
    }  
    
    export class GetAutoCooperateRequest {  
    } 

    export class GetAutoCooperateResponse {  
        loseNum: number = 0; 
        successNum: number = 0; 
    }  
    
    export class UpdateOscarRequest {  
    } 

    export class UpdateOscarResponse {  
    }  
    
    export class setAllStoryGoldRequest {  
    } 

    export class setAllStoryGoldResponse {  
    }  
    
    export class LockAllProduceRequest {  
    } 

    export class LockAllProduceResponse {  
    }  
    
    export class SetSecretaryStatusRequest {  
        status: number = 0; // 小秘书状态
    } 

    export class SetSecretaryStatusResponse {  
    }  
    
    export class CleanSecretaryTimesRequest {  
    } 

    export class CleanSecretaryTimesResponse {  
    }  
    
    export class GetRechargeGiftRequest {  
    } 

    export class GetRechargeGiftResponse {  
    }  
    
    export class GotoCityRequest {  
        id: number = 0; // 1... 最后一个城市的编号
    } 

    export class GotoCityResponse {  
    }  
    
    export class GotoCityBeforeRequest {  
        id: number = 0; // 1... 最后一个城市的编号
    } 

    export class GotoCityBeforeResponse {  
    }  
    
    export class AddManageRequest {  
    } 

    export class AddManageResponse {  
    }  
    
    export class SetAllActorLvRequest {  
    } 

    export class SetAllActorLvResponse {  
    }  
    
}

export namespace item {

    export class SellOutRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
        amount: number = 0; // 道具数量
    } 

    export class SellOutResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
    export class CompoundRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
        amount: number = 0; // 道具数量
    } 

    export class CompoundResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
    export class SplitRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
        amount: number = 0; // 道具数量
    } 

    export class SplitResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
    export class UseRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
        amount: number = 0; // 道具数量
    } 

    export class UseResponse {  
        uuid: string = ""; // 道具唯一编号
        dropout: Array<SS.ItemDesc> | null = null; // 掉落物品
    }  
    
    export class UsePiecesGiftBagRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
        amount: number = 0; // 道具数量
        selItemId: number = 0; // 选择的物品ID
    } 

    export class UsePiecesGiftBagResponse {  
        uuid: string = ""; // 道具唯一编号
        dropout: Array<SS.ItemDesc> | null = null; // 掉落物品
    }  
    
    export class CompoundActorRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
    } 

    export class CompoundActorResponse {  
        uuid: string = ""; // 道具唯一编号
        actorId: number = 0; // 艺人id
        items: Array<SS.ItemDesc> | null = null; // 获得的物品列表
    }  
    
    export class UseActorSkillWaterRequest {  
        uuid: string = ""; // 道具唯一编号
        itemId: number = 0; // 道具id
        actorId: number = 0; // 艺人id
        amount: number = 0; // 数量
    } 

    export class UseActorSkillWaterResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
}

export namespace city {

    export class SetPropagandaActorRequest {  
        uuid: string = ""; // 道具唯一编号
        cityId: number = 0; // 城市id
        areaId: number = 0; // 区域id
        actorId: number = 0; // 艺人id
    } 

    export class SetPropagandaActorResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
    export class PropagandaRequest {  
        uuid: string = ""; // 道具唯一编号
        cityId: number = 0; // 城市id
        areaId: number = 0; // 区域id
    } 

    export class PropagandaResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
    export class RoadshowRequest {  
        uuid: string = ""; // 道具唯一编号
        cityId: number = 0; // 城市id
        areaId: number = 0; // 区域id
    } 

    export class RoadshowResponse {  
        uuid: string = ""; // 道具唯一编号
        result: number = 0; // 0成功 1失败
    }  
    
    export class SetAmbassadorRequest {  
        uuid: string = ""; // 道具唯一编号
        cityId: number = 0; // 城市id
        psition: number = 0; // 位置1,2,3,4....
        actuuid: string = ""; // 艺人唯一ID
    } 

    export class SetAmbassadorResponse {  
        uuid: string = ""; // 道具唯一编号
        dropout: Array<SS.ItemDesc> | null = null; // 掉落物品
    }  
    
    export class GetRewardRequest {  
        uuid: string = ""; // 唯一编号
        cityId: number = 0; // 城市id
    } 

    export class GetRewardResponse {  
        uuid: string = ""; // 唯一编号
        dropout: Array<SS.ItemDesc> | null = null; 
    }  
    
    export class HoldCityRequest {  
        uuid: string = ""; // 道具唯一编号
    } 

    export class HoldCityResponse {  
        uuid: string = ""; // 道具唯一编号
    }  
    
}

export namespace movie {

    export class MakeFilmRequest {  
        uuid: string = ""; // 唯一编号
    } 

    export class MakeFilmResponse {  
        uuid: string = ""; // 唯一编号
    }  
    
    export class SetMovieNameRequest {  
        uuid: string = ""; // 电影唯一编号
        index: number = 0; // 选择的电影下标, 从0开始
        name: string = ""; // 名字
    } 

    export class SetMovieNameResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class SetActorRequest {  
        uuid: string = ""; // 电影唯一编号
        index: number = 0; // 选择的电影下标, 从0开始
        actorId: number = 0; // 艺人id
    } 

    export class SetActorResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class ConfirmSetActorRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class ConfirmSetActorResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class ChoseTypeRequest {  
        uuid: string = ""; // 电影唯一编号
        type: SE.EMovieType = 0; // 电影类型
    } 

    export class ChoseTypeResponse {  
        uuid: string = ""; // 电影唯一编号
        storyShootType: number = 0; // 类型契合度
    }  
    
    export class AcceptMediaVisitRequest {  
        uuid: string = ""; // 电影唯一编号
        mediaId: number = 0; // 媒体id
    } 

    export class AcceptMediaVisitResponse {  
        uuid: string = ""; // 电影唯一编号
        addExpection: number = 0; 
    }  
    
    export class PublishMovieRequest {  
        uuid: string = ""; // 电影唯一编号
        theaterId: number = 0; // 院线id
    } 

    export class PublishMovieResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class BattleOverRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class BattleOverResponse {  
        uuid: string = ""; // 电影唯一编号
        dropout: Array<SS.ItemDesc> | null = null; // 掉落
    }  
    
    export class SpreadMovieRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class SpreadMovieResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class GetRewardMovieRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class GetRewardMovieResponse {  
        uuid: string = ""; // 电影唯一编号
        dropout: Array<SS.ItemDesc> | null = null; // 掉落物品
    }  
    
    export class SwitchCityRequest {  
        uuid: string = ""; // 电影唯一编号
        cityId: number = 0; // 城市ID
    } 

    export class SwitchCityResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class UpdateMovieStateRequest {  
        uuid: string = ""; // 电影唯一编号
        state: SE.EMovieState = 0; // 当前电影状态
    } 

    export class UpdateMovieStateResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class GetStoryGoalsRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class GetStoryGoalsResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
    export class DeleteMovieRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class DeleteMovieResponse {  
        uuid: string = ""; // 电影唯一编号
        dropout: Array<SS.ItemDesc> | null = null; // 掉落物品
    }  
    
    export class RefreshMovieStoryRequest {  
        uuid: string = ""; // 电影唯一编号
    } 

    export class RefreshMovieStoryResponse {  
        uuid: string = ""; // 电影唯一编号
    }  
    
}

export namespace Actor {

    export class NoseInfoActorRequest { // 请求 
        isUseCard: boolean = false; // 是否使用星探卡，强制查探
    } 

    export class NoseInfoActorResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class RecruitActorRequest {  
        actorId: number = 0; // 艺人ID
    } 

    export class RecruitActorResponse {  
        result: number = 0; // 0,成功，非0，错误码
        actorId: number = 0; // 艺人ID
        isNewActor: boolean = false; // 是否新加艺人
    }  
    
    export class HideActorRequest {  
        uuid: string = ""; // 艺人ID
        isHide: boolean = false; // 是否雪藏艺人，true雪藏，false取消雪藏
    } 

    export class HideActorResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class AddActorSlotRequest {  
    } 

    export class AddActorSlotResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class UpgradeActorRequest {  
        uuid: string = ""; // 艺人ID
    } 

    export class UpgradeActorResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class GiveActorAssetsRequest {  
        uuid: string = ""; // 艺人ID
        giveType: number = 0; // 赠送类型
        giveLevel: number = 0; // 赠送等级
        giveNum: number = 0; // 赠送数量
    } 

    export class GiveActorAssetsResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class UpgradeActorSkillRequest {  
        uuid: string = ""; // 艺人ID
        skillId: number = 0; // 技能ID
    } 

    export class UpgradeActorSkillResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class ActorTrainRequest {  
        uuid: string = ""; // 艺人ID
        trainType: number = 0; // 培养类型
        useDiamond: boolean = false; // 使用钻石
    } 

    export class ActorTrainResponse {  
        result: number = 0; // 0,成功，非0，错误码
        uuid: string = ""; // 艺人ID
        trainType: number = 0; // 培养类型
        attrChangeList: Array<SS.AttrChangeInfo> | null = null; // 属性改变列表
    }  
    
    export class ActorChangeNameRequest {  
        uuid: string = ""; // 艺人ID
        name: string = ""; // 艺人名字
    } 

    export class ActorChangeNameResponse {  
        result: number = 0; // 0,成功，非0，错误码
    }  
    
    export class ActorExerciseStartRequest {  
        aId: string = ""; // 艺人ID
        eId: string = ""; // 训练队列id
    } 

    export class ActorExerciseStartResponse {  
        aId: string = ""; // 艺人 id
    }  
    
    export class ActorExerciseRewardRequest {  
        eId: string = ""; // 训练队列id
        useMoney: boolean = false; // 是否使用钻石
    } 

    export class ActorExerciseRewardResponse {  
        aId: string = ""; // 艺人 id
        eId: string = ""; // 队列 id
    }  
    
    export class ActorExerciseAddRequest {  
    } 

    export class ActorExerciseAddResponse {  
        eId: string = ""; // 训练队列 
    }  
    
    export class GiveLoyaltyCardRequest {  
        uuid: string = ""; // 艺人ID
        giveType: number = 0; // 赠送类型
        num: number = 0; // 赠送忠诚卡数量
    } 

    export class GiveLoyaltyCardResponse {  
        uuid: string = ""; // 艺人ID
        giveType: number = 0; // 赠送类型
    }  
    
    export class AssistantUpLvRequest {  
        uuid: string = ""; // 艺人uuid
        id: number = 0; // 助理id
    } 

    export class AssistantUpLvResponse {  
        uuid: string = ""; // 艺人uuid
        id: number = 0; // 助理id
    }  
    
}

export namespace story {

    export class findStoryRequest {  
    } 

    export class findStoryResponse {  
        type: number = 0; // 搜罗类型 1剧本 2物品
        id: number = 0; // 物品ID 剧本ID
        num: number = 0; // 数量
        time: number = 0; // 已经搜罗次数
        refreshTime: number = 0; // 上次免费搜罗时间
    }  
    
    export class cleanFindStoryRequest {  
    } 

    export class cleanFindStoryResponse {  
        result: number = 0; // 0 成功 1 失败 
        refreshTime: number = 0; // 上次免费搜罗时间
    }  
    
    export class getRewardRequest {  
        storySuitId: number = 0; // 剧本组ID
    } 

    export class getRewardResponse {  
        storySuitId: number = 0; // 剧本组ID
        result: number = 0; // 0 成功 1 失败
    }  
    
    export class GetMessageRequest {  
        stroyId: number = 0; // 剧本ID
    } 

    export class GetMessageResponse {  
        stroyId: number = 0; // 剧本ID
        message: Array<SS.StoryMessageDesc> | null = null; 
    }  
    
    export class SetMessageRequest {  
        stroyId: number = 0; // 剧本ID
        content: string = ""; // 内容
    } 

    export class SetMessageResponse {  
        stroyId: number = 0; // 0 成功 1 失败
    }  
    
}

export namespace manageOrder {

    export class PutItemRequest {  
        uuid: string = ""; // 唯一订单编号
        entityId: number = 0; // 协助的人
        itemId: number = 0; // 物品baseId 
        type: number = 0; // 0操作自己的订单，1别人的
    } 

    export class PutItemResponse {  
        uuid: string = ""; // 唯一订单编号
        itemInfo: SS.ItemDesc | null = null; // 奖励信息
        type: number = 0; // 0操作自己的订单，1别人的
    }  
    
    export class DelOrderRequest {  
        uuid: string = ""; // 唯一订单编号
    } 

    export class DelOrderResponse {  
        uuid: string = ""; // 唯一订单编号
    }  
    
    export class FinishOrderRequest {  
        uuid: string = ""; // 唯一订单编号
    } 

    export class FinishOrderResponse {  
        uuid: string = ""; // 唯一订单编号
    }  
    
    export class DealOrderRequest {  
    } 

    export class DealOrderResponse {  
    }  
    
}

export namespace progressBox {

    export class GetRewardRequest {  
        uuid: string = ""; // 唯一进度宝箱编号
        gear: number = 0; // 档位
    } 

    export class GetRewardResponse {  
        uuid: string = ""; // 唯一进度宝箱编号
        gear: number = 0; // 档位
    }  
    
}

export namespace manageProduce {

    export class ProduceRequest {  
        uuid: string = ""; // 唯一生产编号
    } 

    export class ProduceResponse {  
        uuid: string = ""; // 唯一生产编号
    }  
    
    export class GetRewardRequest {  
        uuid: string = ""; // 唯一生产编号
    } 

    export class GetRewardResponse {  
        uuid: string = ""; // 唯一生产编号
    }  
    
    export class UplevelRequest {  
        uuid: string = ""; // 唯一生产编号
        skillId: number = 0; // 升级效果id
    } 

    export class UplevelResponse {  
        uuid: string = ""; // 唯一生产编号
        skillId: number = 0; // 升级效果id
    }  
    
    export class SendActorRequest {  
        uuid: string = ""; // 唯一生产编号
        actBaseId: number = 0; // 艺人的唯一ID 
    } 

    export class SendActorResponse {  
        uuid: string = ""; // 唯一生产编号
        actBaseId: number = 0; // 艺人的唯一ID 
    }  
    
    export class DeblockingRequest {  
        produceId: number = 0; // 需要解锁的生产ID
    } 

    export class DeblockingResponse {  
        produceId: number = 0; // 需要解锁的生产ID
    }  
    
    export class QuickGetRewardRequest {  
        stall: number = 0; // 档位
    } 

    export class QuickGetRewardResponse {  
        stall: number = 0; // 档位
    }  
    
    export class QuickProduceRequest {  
        stall: number = 0; // 档位
    } 

    export class QuickProduceResponse {  
        stall: number = 0; // 档位
        num: number = 0; // 生产了多少个
    }  
    
    export class cleanTimeRequest {  
        uuid: string = ""; // 唯一生产编号
    } 

    export class cleanTimeResponse {  
        uuid: string = ""; // 唯一生产编号
    }  
    
}

export namespace rank {

    export class GetSelfListRequest {  
    } 

    export class GetSelfListResponse {  
        data: SS.SelfRankListDesc | null = null; // 排行榜数据
    }  
    
    export class GetServerRankListRequest {  
    } 

    export class GetServerRankListResponse {  
        selfRank: number = 0; // 全服排名
        selfData: SS.ServerListDesc | null = null; // 自己的排行榜数据
        data: Array<SS.ServerListDesc> | null = null; // 排行榜数据
    }  
    
    export class GetGroupRankListRequest {  
    } 

    export class GetGroupRankListResponse {  
        selfRank: number = 0; // 全服排名
        selfData: SS.GroupListDesc | null = null; // 自己的排行榜数据
        data: Array<SS.GroupListDesc> | null = null; // 排行榜数据
    }  
    
    export class GetGroupMovieRankListRequest {  
    } 

    export class GetGroupMovieRankListResponse {  
        selfRank: number = 0; // 全服排名
        selfData: SS.GroupMovieListDesc | null = null; // 自己的排行榜数据
        data: Array<SS.GroupMovieListDesc> | null = null; // 排行榜数据
    }  
    
    export class GetMovieShortDataRequest {  
        uuid: string = ""; // 电影唯一id
    } 

    export class GetMovieShortDataResponse {  
        data: SS.MovieShortData | null = null; // 排行榜数据
    }  
    
    export class GetPlayerShortDataRequest {  
        userId: number = 0; // id
    } 

    export class GetPlayerShortDataResponse {  
        data: SS.PlayerShortData | null = null; // 玩家信息
    }  
    
    export class GetServerListRewardRequest {  
        uuid: string = ""; // 排行榜唯一id
    } 

    export class GetServerListRewardResponse {  
        dropout: Array<SS.ItemDesc> | null = null; // 奖励物品
    }  
    
    export class ChangeServerNameRequest {  
        uuid: string = ""; // 排行榜唯一id
        name: string = ""; // 服务器名称
    } 

    export class ChangeServerNameResponse {  
    }  
    
    export class GetOscarDataRequest {  
    } 

    export class GetOscarDataResponse {  
    }  
    
    export class GetOscarRewardRequest {  
        type: SE.EOscarType = 0; 
    } 

    export class GetOscarRewardResponse {  
        dropout: Array<SS.ItemDesc> | null = null; 
    }  
    
    export class ChoseTheaterRequest {  
        theaterId: number = 0; 
    } 

    export class ChoseTheaterResponse {  
    }  
    
    export class GetStreetRewardRequest {  
        type: number = 0; // 0 街区奖励 1 排行榜祝贺, 2 总票房排行榜祝贺
    } 

    export class GetStreetRewardResponse {  
        type: number = 0; 
        dropout: Array<SS.ItemDesc> | null = null; 
    }  
    
}

export namespace task {

    export class rewardRequest { // 请求 
        tId: string = ""; // id
    } 

    export class rewardResponse { // 回复 
        tId: string = ""; // id
        dropout: Array<SS.ItemDesc> | null = null; // 奖励内容
    }  
    
}

export namespace mall {

    export class buyRequest {  
        goodsId: number = 0; // 商品编号
        amount: number = 0; // 商品数量
    } 

    export class buyResponse {  
        result: number = 0; // 返回购买结果
    }  
    
}

export namespace Mail {

    export class MailGetRewardRequest {  
        uuid: string = ""; 
    } 

    export class MailGetRewardResponse {  
        uuid: string = ""; 
        dropout: Array<SS.ItemDesc> | null = null; 
    }  
    
    export class MailGetRewardManyRequest {  
        uuid: Array<string> | null = null; 
    } 

    export class MailGetRewardManyResponse {  
        uuid: Array<string> | null = null; 
        dropout: Array<SS.ItemDesc> | null = null; 
    }  
    
    export class MailDeleteManyRequest {  
        uuid: Array<string> | null = null; 
    } 

    export class MailDeleteManyResponse {  
        uuid: Array<string> | null = null; 
    }  
    
    export class MailDeleteRequest {  
        uuid: string = ""; 
    } 

    export class MailDeleteResponse {  
        uuid: string = ""; 
    }  
    
    export class MailReadRequest {  
        uuid: string = ""; 
    } 

    export class MailReadResponse {  
        uuid: string = ""; 
    }  
    
}

export namespace Gift {

    export class ExchangeRequest {  
        id: string = ""; // 兑换码 id
    } 

    export class ExchangeResponse {  
        result: number = 0; 
        dropout: Array<SS.ItemDesc> | null = null; // 掉落
    }  
    
}

export namespace manageBusiness {

    export class GetRewardRequest {  
    } 

    export class GetRewardResponse {  
    }  
    
}

export namespace manageVisit {

    export class StartVisitRequest {  
    } 

    export class StartVisitResponse {  
    }  
    
    export class GetRewardRequest {  
    } 

    export class GetRewardResponse {  
    }  
    
    export class StartReceRequest {  
    } 

    export class StartReceResponse {  
    }  
    
}

export namespace manageMeeting {

    export class GetRewardRequest {  
        type: number = 0; // 0领取 1回绝
    } 

    export class GetRewardResponse {  
        type: number = 0; // 0领取 1回绝
    }  
    
    export class MarkupRequest {  
        type: number = 0; // 2 50% 1 200%
    } 

    export class MarkupResponse {  
        type: number = 0; // 2 50% 1 200%
    }  
    
}

export namespace dailySign {

    export class signRequest {  
    } 

    export class signResponse {  
        dropout: SS.ItemDesc | null = null; // 掉落
    }  
    
}

export namespace secretary {

    export class GetDailyRewardRequest {  
    } 

    export class GetDailyRewardResponse {  
    }  
    
    export class OpenSecretaryRequest {  
        key: number = 0; // 操作哪一个模块小秘书
        type: number = 0; // 0关闭 1开启
    } 

    export class OpenSecretaryResponse {  
        key: number = 0; // 操作哪一个模块小秘书
        type: number = 0; // 0关闭 1开启
    }  
    
    export class ApplyMovieLicenceRequest {  
    } 

    export class ApplyMovieLicenceResponse {  
    }  
    
    export class RewardMovieLicenceRequest {  
    } 

    export class RewardMovieLicenceResponse {  
    }  
    
}

export namespace sevenAddUp {

    export class GetRewardRequest {  
        uuid: string = ""; // 唯一七日礼包ID
        gear: number = 0; // 档位
    } 

    export class GetRewardResponse {  
        uuid: string = ""; // 唯一七日礼包ID
        gear: number = 0; // 档位
    }  
    
    export class TouchRequest {  
    } 

    export class TouchResponse {  
    }  
    
}

export namespace BeginnerGuide {

    export class CompleteGuideRequest {  
        gId: number = 0; // 引导任务编号
        type: SE.EGuideType = 0; // 引导类型
    } 

    export class CompleteGuideResponse {  
        gId: number = 0; // 引导任务编号
        type: SE.EGuideType = 0; // 引导类型
    }  
    
    export class GuideEndRewardRequest {  
    } 

    export class GuideEndRewardResponse {  
        isNewActor: boolean = false; // 没有为true
    }  
    
}

export namespace Danmu {

    export class setRequest {  
        id: number = 0; // 颁奖场次 Id
        msg: string = ""; // 弹幕消息
    } 

    export class setResponse {  
    }  
    
    export class getRequest { // 可以传入 time 表示获取这个时间戳以后的弹幕 
        id: number = 0; // 颁奖场次 Id
        time: number = 0; // 时间戳
    } 

    export class getResponse {  
        data: Array<SS.DanmuItem> | null = null; // 返回结果
        time: number = 0; // 返回的时间戳
    }  
    
}

export namespace cooperate {

    export class ApplyRequest {  
        entityId: number = 0; // 合作者ID 为0时，为公开邀请
    } 

    export class ApplyResponse {  
    }  
    
    export class CancelCooperateRequest {  
    } 

    export class CancelCooperateResponse {  
    }  
    
    export class RelieveRequest {  
    } 

    export class RelieveResponse {  
    }  
    
    export class ApproveRequest {  
        type: number = 0; // 审批类型 0同意 1拒绝
        entityId: string = ""; // 审批的哪个玩家
    } 

    export class ApproveResponse {  
        type: number = 0; // 审批类型 0同意 1拒绝
        entityId: string = ""; // 审批的哪个玩家
    }  
    
    export class GetInfoRequest {  
        oldOrderUuids: Array<string> | null = null; 
    } 

    export class GetInfoResponse {  
    }  
    
    export class TaskOperateRequest {  
        type: number = 0; // 任务操作 0接取 1协作
        taskId: number = 0; // 哪个任务
        star: number = 0; // 星级
    } 

    export class TaskOperateResponse {  
        type: number = 0; // 任务操作 0接取 1协作
        taskId: number = 0; // 哪个任务
        star: number = 0; // 星级
    }  
    
    export class GetTaskRewardRequest {  
        taskId: number = 0; // 哪个任务
        star: number = 0; // 星级 
    } 

    export class GetTaskRewardResponse {  
        taskId: number = 0; // 哪个任务
        star: number = 0; // 星级
    }  
    
    export class GiveRewardRequest {  
        itemId: number = 0; // 赠送物品ID
    } 

    export class GiveRewardResponse {  
        itemId: number = 0; 
    }  
    
    export class GetProgressTaskRequest {  
        index: number = 0; // 领取哪一个
    } 

    export class GetProgressTaskResponse {  
        index: number = 0; 
    }  
    
    export class ReadCooperateRequest {  
    } 

    export class ReadCooperateResponse {  
    }  
    
    export class GetTaskInfoRequest {  
    } 

    export class GetTaskInfoResponse {  
    }  
    
    export class GetOrderInfoRequest {  
        oldOrderUuids: Array<string> | null = null; 
    } 

    export class GetOrderInfoResponse {  
    }  
    
}

export namespace pay {

    export class StartOrderRequest {  
        id: number = 0; // 商品id
        amount: number = 0; // 数量
    } 

    export class StartOrderResponse {  
        id: number = 0; // 商品id
        amount: number = 0; // 数量
        orderId: string = ""; // 订单id
    }  
    
    export class FinishOrderRequest {  
        orderId: string = ""; // 订单id
        result: number = 0; // 结果 0 成功, 1 失败
    } 

    export class FinishOrderResponse {  
        orderId: string = ""; // 订单id
        result: number = 0; // 结果 0 成功, 1 失败
        dropout: Array<SS.ItemDesc> | null = null; // 掉落物品
    }  
    
}

export namespace chat {

    export class MessageNoticeRequest {  
        channel: number = 0; 
    } 

    export class MessageNoticeResponse {  
        roomId: number = 0; // 房间号，世界频道时：为0
        newMessage: SS.NewMessageInfo | null = null; 
    }  
    
    export class NewMessageRequest {  
    } 

    export class NewMessageResponse {  
        worldInfo: SS.NewMessageInfo | null = null; // 世界频道,新消息总数量
        privateInfo: SS.NewMessageInfo | null = null; // 私人频道,新消息总数量
        companyInfo: SS.NewMessageInfo | null = null; // 公司频道，新消息总数量
    }  
    
    export class AllMessageRequest {  
    } 

    export class AllMessageResponse {  
        worldUserInfo: Array<SS.MessageInfo> | null = null; // 世界频道
        worldSystemInfo: Array<SS.SystemMessage> | null = null; // 世界频道
        privateInfo: Array<SS.PrivateListInfo> | null = null; // 私人频道
        companyInfo: Array<SS.MessageInfo> | null = null; // 公司频道
    }  
    
    export class SendMessageRequest {  
        message: string = ""; // 信息
        recipient: number = 0; // 接收者
        roomId: number = 0; // 房间号，如果是世界频道，不判断该字段
        channel: number = 0; // 频道
    } 

    export class SendMessageResponse {  
        roomId: number = 0; // 房间号
        message: SS.MessageInfo | null = null; // 信息
    }  
    
    export class PullMessageRequest {  
        channel: number = 0; // 频道
        roomId: number = 0; // 房间号，如果是世界频道，不判断该字段
        messageId: number = 0; // 0：新消息，非0：旧消息
    } 

    export class PullMessageResponse {  
        messageInfo: Array<SS.MessageInfo> | null = null; // 最新玩家消息
        systemMessageInfo: Array<SS.SystemMessage> | null = null; // 最新系统消息
        channel: number = 0; // 频道
        roomId: number = 0; // 房间号，如果是世界频道，不判断该字段
    }  
    
    export class SheieldingRequest {  
        userId: number = 0; // 玩家id
    } 

    export class SheieldingResponse {  
    }  
    
    export class ReleaseShieldRequest {  
        userId: number = 0; // 玩家id
    } 

    export class ReleaseShieldResponse {  
    }  
    
    export class recruitRequest {  
    } 

    export class recruitResponse {  
    }  
    
}

export namespace smallTarget {

    export class LevGiftRequest {  
    } 

    export class LevGiftResponse {  
        giftId: number = 0; // 礼包id
    }  
    
    export class CupGiftRequest { // 奖杯礼包 
    } 

    export class CupGiftResponse {  
        giftId: number = 0; 
    }  
    
    export class GetCupMailRequest { // 奖杯礼包邮件 
    } 

    export class GetCupMailResponse {  
        giftId: number = 0; 
    }  
    
}

        
        