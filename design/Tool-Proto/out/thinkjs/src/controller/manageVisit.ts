import {manageVisit} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  开始探班
     */
    async StartVisitAction() {
        const reqData = <manageVisit.StartVisitRequest>(<any>this.post()).data;
        const resData = new manageVisit.StartVisitResponse();

        this.success(resData);
    }

    /**
     *  领取探班奖励
     */
    async GetRewardAction() {
        const reqData = <manageVisit.GetRewardRequest>(<any>this.post()).data;
        const resData = new manageVisit.GetRewardResponse();

        this.success(resData);
    }

    /**
     *  开始接待
     */
    async StartReceAction() {
        const reqData = <manageVisit.StartReceRequest>(<any>this.post()).data;
        const resData = new manageVisit.StartReceResponse();

        this.success(resData);
    }
}
