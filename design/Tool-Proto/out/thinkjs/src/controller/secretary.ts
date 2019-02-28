import {secretary} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  领取奖励
     */
    async GetDailyRewardAction() {
        const reqData = <secretary.GetDailyRewardRequest>(<any>this.post()).data;
        const resData = new secretary.GetDailyRewardResponse();

        this.success(resData);
    }

    async OpenSecretaryAction() {
        const reqData = <secretary.OpenSecretaryRequest>(<any>this.post()).data;
        const resData = new secretary.OpenSecretaryResponse();

        this.success(resData);
    }

    /**
     *  申请拍摄许可证
     */
    async ApplyMovieLicenceAction() {
        const reqData = <secretary.ApplyMovieLicenceRequest>(<any>this.post()).data;
        const resData = new secretary.ApplyMovieLicenceResponse();

        this.success(resData);
    }

    /**
     *  领取拍摄许可证
     */
    async RewardMovieLicenceAction() {
        const reqData = <secretary.RewardMovieLicenceRequest>(<any>this.post()).data;
        const resData = new secretary.RewardMovieLicenceResponse();

        this.success(resData);
    }
}
