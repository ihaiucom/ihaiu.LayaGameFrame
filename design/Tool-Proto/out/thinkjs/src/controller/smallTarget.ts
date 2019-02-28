import {smallTarget} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  等级礼包
     */
    async LevGiftAction() {
        const reqData = <smallTarget.LevGiftRequest>(<any>this.post()).data;
        const resData = new smallTarget.LevGiftResponse();

        this.success(resData);
    }

    async CupGiftAction() {
        const reqData = <smallTarget.CupGiftRequest>(<any>this.post()).data;
        const resData = new smallTarget.CupGiftResponse();

        this.success(resData);
    }

    async GetCupMailAction() {
        const reqData = <smallTarget.GetCupMailRequest>(<any>this.post()).data;
        const resData = new smallTarget.GetCupMailResponse();

        this.success(resData);
    }
}
