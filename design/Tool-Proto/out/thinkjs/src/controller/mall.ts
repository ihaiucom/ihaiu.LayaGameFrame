import {mall} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async buyAction() {
        const reqData = <mall.buyRequest>(<any>this.post()).data;
        const resData = new mall.buyResponse();

        this.success(resData);
    }
}
