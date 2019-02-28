import {story} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  搜罗剧本
     */
    async findStoryAction() {
        const reqData = <story.findStoryRequest>(<any>this.post()).data;
        const resData = new story.findStoryResponse();

        this.success(resData);
    }

    /**
     *  清除搜罗时间
     */
    async cleanFindStoryAction() {
        const reqData = <story.cleanFindStoryRequest>(<any>this.post()).data;
        const resData = new story.cleanFindStoryResponse();

        this.success(resData);
    }

    /**
     *  领取剧本组奖励
     */
    async getRewardAction() {
        const reqData = <story.getRewardRequest>(<any>this.post()).data;
        const resData = new story.getRewardResponse();

        this.success(resData);
    }

    /**
     *  获取剧本留言信息
     */
    async GetMessageAction() {
        const reqData = <story.GetMessageRequest>(<any>this.post()).data;
        const resData = new story.GetMessageResponse();

        this.success(resData);
    }

    /**
     *  剧本留言
     */
    async SetMessageAction() {
        const reqData = <story.SetMessageRequest>(<any>this.post()).data;
        const resData = new story.SetMessageResponse();

        this.success(resData);
    }
}
