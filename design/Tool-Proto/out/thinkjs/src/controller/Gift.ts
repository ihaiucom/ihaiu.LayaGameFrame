import {Gift} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  礼包兑换
     */
    async ExchangeAction() {
        const reqData = <Gift.ExchangeRequest>(<any>this.post()).data;
        const resData = new Gift.ExchangeResponse();

        this.success(resData);
    }
}
