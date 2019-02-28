import {Danmu} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  设置弹幕
     */
    async setAction() {
        const reqData = <Danmu.setRequest>(<any>this.post()).data;
        const resData = new Danmu.setResponse();

        this.success(resData);
    }

    async getAction() {
        const reqData = <Danmu.getRequest>(<any>this.post()).data;
        const resData = new Danmu.getResponse();

        this.success(resData);
    }
}
