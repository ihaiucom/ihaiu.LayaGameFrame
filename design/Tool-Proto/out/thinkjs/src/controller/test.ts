import {test} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  添加道具
     */
    async AddItemAction() {
        const reqData = <test.AddItemRequest>(<any>this.post()).data;
        const resData = new test.AddItemResponse();

        this.success(resData);
    }

    /**
     *  增加粉丝(公司升级)
     */
    async AddFansAction() {
        const reqData = <test.AddFansRequest>(<any>this.post()).data;
        const resData = new test.AddFansResponse();

        this.success(resData);
    }

    /**
     *  增加期待值
     */
    async AddExpectAction() {
        const reqData = <test.AddExpectRequest>(<any>this.post()).data;
        const resData = new test.AddExpectResponse();

        this.success(resData);
    }

    /**
     *  删除电影
     */
    async DeleteMovieAction() {
        const reqData = <test.DeleteMovieRequest>(<any>this.post()).data;
        const resData = new test.DeleteMovieResponse();

        this.success(resData);
    }

    /**
     *  添加剧本
     */
    async AddStarStoryAction() {
        const reqData = <test.AddStarStoryRequest>(<any>this.post()).data;
        const resData = new test.AddStarStoryResponse();

        this.success(resData);
    }

    /**
     *  添加剧本
     */
    async AddStoryAction() {
        const reqData = <test.AddStoryRequest>(<any>this.post()).data;
        const resData = new test.AddStoryResponse();

        this.success(resData);
    }

    /**
     *  添加艺人技能经验
     */
    async AddActorSkillExpAction() {
        const reqData = <test.AddActorSkillExpRequest>(<any>this.post()).data;
        const resData = new test.AddActorSkillExpResponse();

        this.success(resData);
    }

    /**
     *  添加剧本进度
     */
    async AddStoryProgressAction() {
        const reqData = <test.AddStoryProgressRequest>(<any>this.post()).data;
        const resData = new test.AddStoryProgressResponse();

        this.success(resData);
    }

    async FinishGuideAction() {
        const reqData = <test.FinishGuideRequest>(<any>this.post()).data;
        const resData = new test.FinishGuideResponse();

        this.success(resData);
    }

    async debugAction() {
        const reqData = <test.debugRequest>(<any>this.post()).data;
        const resData = new test.debugResponse();

        this.success(resData);
    }

    /**
     *  增加一个兑换码
     */
    async AddGiftAction() {
        const reqData = <test.AddGiftRequest>(<any>this.post()).data;
        const resData = new test.AddGiftResponse();

        this.success(resData);
    }

    async SetBlockLevelAction() {
        const reqData = <test.SetBlockLevelRequest>(<any>this.post()).data;
        const resData = new test.SetBlockLevelResponse();

        this.success(resData);
    }

    /**
     *  刷新时间
     */
    async RefreshTimeAction() {
        const reqData = <test.RefreshTimeRequest>(<any>this.post()).data;
        const resData = new test.RefreshTimeResponse();

        this.success(resData);
    }

    /**
     *  完成订单 
     */
    async PutOrderItemsAction() {
        const reqData = <test.PutOrderItemsRequest>(<any>this.post()).data;
        const resData = new test.PutOrderItemsResponse();

        this.success(resData);
    }

    async GetAutoCooperateAction() {
        const reqData = <test.GetAutoCooperateRequest>(<any>this.post()).data;
        const resData = new test.GetAutoCooperateResponse();

        this.success(resData);
    }

    /**
     *  奥斯卡颁奖
     */
    async UpdateOscarAction() {
        const reqData = <test.UpdateOscarRequest>(<any>this.post()).data;
        const resData = new test.UpdateOscarResponse();

        this.success(resData);
    }

    /**
     *  将所有剧本设置为金本
     */
    async setAllStoryGoldAction() {
        const reqData = <test.setAllStoryGoldRequest>(<any>this.post()).data;
        const resData = new test.setAllStoryGoldResponse();

        this.success(resData);
    }

    /**
     *  一键解锁所有生产线 未加解锁限制判断 并且加了10000钻石以及 10000 生产图纸
     */
    async LockAllProduceAction() {
        const reqData = <test.LockAllProduceRequest>(<any>this.post()).data;
        const resData = new test.LockAllProduceResponse();

        this.success(resData);
    }

    /**
     *  设置小秘书状态
     */
    async SetSecretaryStatusAction() {
        const reqData = <test.SetSecretaryStatusRequest>(<any>this.post()).data;
        const resData = new test.SetSecretaryStatusResponse();

        this.success(resData);
    }

    /**
     *  清除小秘书使用次数
     */
    async CleanSecretaryTimesAction() {
        const reqData = <test.CleanSecretaryTimesRequest>(<any>this.post()).data;
        const resData = new test.CleanSecretaryTimesResponse();

        this.success(resData);
    }

    /**
     *  领取充值礼包
     */
    async GetRechargeGiftAction() {
        const reqData = <test.GetRechargeGiftRequest>(<any>this.post()).data;
        const resData = new test.GetRechargeGiftResponse();

        this.success(resData);
    }

    /**
     *   一键占领城市
     */
    async GotoCityAction() {
        const reqData = <test.GotoCityRequest>(<any>this.post()).data;
        const resData = new test.GotoCityResponse();

        this.success(resData);
    }

    /**
     *  设置占领城市前状态
     */
    async GotoCityBeforeAction() {
        const reqData = <test.GotoCityBeforeRequest>(<any>this.post()).data;
        const resData = new test.GotoCityBeforeResponse();

        this.success(resData);
    }

    /**
     *  会议 公务 探班次数全满
     */
    async AddManageAction() {
        const reqData = <test.AddManageRequest>(<any>this.post()).data;
        const resData = new test.AddManageResponse();

        this.success(resData);
    }

    /**
     *  非雪藏艺人正常升级每次十级
     */
    async SetAllActorLvAction() {
        const reqData = <test.SetAllActorLvRequest>(<any>this.post()).data;
        const resData = new test.SetAllActorLvResponse();

        this.success(resData);
    }
}
