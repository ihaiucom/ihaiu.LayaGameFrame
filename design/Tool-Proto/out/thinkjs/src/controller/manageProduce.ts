import {manageProduce} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  生产
     */
    async ProduceAction() {
        const reqData = <manageProduce.ProduceRequest>(<any>this.post()).data;
        const resData = new manageProduce.ProduceResponse();

        this.success(resData);
    }

    /**
     *  领取奖励
     */
    async GetRewardAction() {
        const reqData = <manageProduce.GetRewardRequest>(<any>this.post()).data;
        const resData = new manageProduce.GetRewardResponse();

        this.success(resData);
    }

    /**
     *  生产升级
     */
    async UplevelAction() {
        const reqData = <manageProduce.UplevelRequest>(<any>this.post()).data;
        const resData = new manageProduce.UplevelResponse();

        this.success(resData);
    }

    /**
     *  派遣艺人
     */
    async SendActorAction() {
        const reqData = <manageProduce.SendActorRequest>(<any>this.post()).data;
        const resData = new manageProduce.SendActorResponse();

        this.success(resData);
    }

    /**
     *  解锁
     */
    async DeblockingAction() {
        const reqData = <manageProduce.DeblockingRequest>(<any>this.post()).data;
        const resData = new manageProduce.DeblockingResponse();

        this.success(resData);
    }

    /**
     *  一键领取
     */
    async QuickGetRewardAction() {
        const reqData = <manageProduce.QuickGetRewardRequest>(<any>this.post()).data;
        const resData = new manageProduce.QuickGetRewardResponse();

        this.success(resData);
    }

    /**
     *  一键生产
     */
    async QuickProduceAction() {
        const reqData = <manageProduce.QuickProduceRequest>(<any>this.post()).data;
        const resData = new manageProduce.QuickProduceResponse();

        this.success(resData);
    }

    /**
     *  清除倒计时
     */
    async cleanTimeAction() {
        const reqData = <manageProduce.cleanTimeRequest>(<any>this.post()).data;
        const resData = new manageProduce.cleanTimeResponse();

        this.success(resData);
    }
}
