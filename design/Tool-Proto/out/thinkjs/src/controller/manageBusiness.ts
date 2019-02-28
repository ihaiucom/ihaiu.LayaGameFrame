import {manageBusiness} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  领取奖励
     */
    async GetRewardAction() {
        const reqData = <manageBusiness.GetRewardRequest>(<any>this.post()).data;
        const resData = new manageBusiness.GetRewardResponse();

        this.success(resData);
    }
}
