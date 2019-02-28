import {sevenAddUp} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async GetRewardAction() {
        const reqData = <sevenAddUp.GetRewardRequest>(<any>this.post()).data;
        const resData = new sevenAddUp.GetRewardResponse();

        this.success(resData);
    }

    /**
     *  跨天触发
     */
    async TouchAction() {
        const reqData = <sevenAddUp.TouchRequest>(<any>this.post()).data;
        const resData = new sevenAddUp.TouchResponse();

        this.success(resData);
    }
}
