import {progressBox} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async GetRewardAction() {
        const reqData = <progressBox.GetRewardRequest>(<any>this.post()).data;
        const resData = new progressBox.GetRewardResponse();

        this.success(resData);
    }
}
