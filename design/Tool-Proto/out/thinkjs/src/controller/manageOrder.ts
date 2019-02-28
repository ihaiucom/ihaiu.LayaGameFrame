import {manageOrder} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  放入物品
     */
    async PutItemAction() {
        const reqData = <manageOrder.PutItemRequest>(<any>this.post()).data;
        const resData = new manageOrder.PutItemResponse();

        this.success(resData);
    }

    /**
     *  销毁订单
     */
    async DelOrderAction() {
        const reqData = <manageOrder.DelOrderRequest>(<any>this.post()).data;
        const resData = new manageOrder.DelOrderResponse();

        this.success(resData);
    }

    /**
     *  完成订单
     */
    async FinishOrderAction() {
        const reqData = <manageOrder.FinishOrderRequest>(<any>this.post()).data;
        const resData = new manageOrder.FinishOrderResponse();

        this.success(resData);
    }

    /**
     *  订单过期处理
     */
    async DealOrderAction() {
        const reqData = <manageOrder.DealOrderRequest>(<any>this.post()).data;
        const resData = new manageOrder.DealOrderResponse();

        this.success(resData);
    }
}
