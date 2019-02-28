import {manageMeeting} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  领取奖励
     */
    async GetRewardAction() {
        const reqData = <manageMeeting.GetRewardRequest>(<any>this.post()).data;
        const resData = new manageMeeting.GetRewardResponse();

        this.success(resData);
    }

    /**
     *  加价
     */
    async MarkupAction() {
        const reqData = <manageMeeting.MarkupRequest>(<any>this.post()).data;
        const resData = new manageMeeting.MarkupResponse();

        this.success(resData);
    }
}
