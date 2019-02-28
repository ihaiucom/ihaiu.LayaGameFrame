import {levGift} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async GetLevGiftAction() {
        const reqData = <levGift.GetLevGiftRequest>(<any>this.post()).data;
        const resData = new levGift.GetLevGiftResponse();

        this.success(resData);
    }
}
