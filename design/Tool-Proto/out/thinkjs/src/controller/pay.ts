import {pay} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async StartOrderAction() {
        const reqData = <pay.StartOrderRequest>(<any>this.post()).data;
        const resData = new pay.StartOrderResponse();

        this.success(resData);
    }

    async FinishOrderAction() {
        const reqData = <pay.FinishOrderRequest>(<any>this.post()).data;
        const resData = new pay.FinishOrderResponse();

        this.success(resData);
    }
}
