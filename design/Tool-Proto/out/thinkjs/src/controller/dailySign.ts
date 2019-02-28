import {dailySign} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  签到
     */
    async signAction() {
        const reqData = <dailySign.signRequest>(<any>this.post()).data;
        const resData = new dailySign.signResponse();

        this.success(resData);
    }
}
