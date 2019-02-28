import {task} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async rewardAction() {
        const reqData = <task.rewardRequest>(<any>this.post()).data;
        const resData = new task.rewardResponse();

        this.success(resData);
    }
}
