import {BeginnerGuide} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  完成一个引导任务
     */
    async CompleteGuideAction() {
        const reqData = <BeginnerGuide.CompleteGuideRequest>(<any>this.post()).data;
        const resData = new BeginnerGuide.CompleteGuideResponse();

        this.success(resData);
    }

    async GuideEndRewardAction() {
        const reqData = <BeginnerGuide.GuideEndRewardRequest>(<any>this.post()).data;
        const resData = new BeginnerGuide.GuideEndRewardResponse();

        this.success(resData);
    }
}
