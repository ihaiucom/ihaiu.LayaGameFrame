import {chat} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  新消息通知
     */
    async MessageNoticeAction() {
        const reqData = <chat.MessageNoticeRequest>(<any>this.post()).data;
        const resData = new chat.MessageNoticeResponse();

        this.success(resData);
    }

    /**
     *  主页面新消息通知
     */
    async NewMessageAction() {
        const reqData = <chat.NewMessageRequest>(<any>this.post()).data;
        const resData = new chat.NewMessageResponse();

        this.success(resData);
    }

    /**
     *  各个频道消息
     */
    async AllMessageAction() {
        const reqData = <chat.AllMessageRequest>(<any>this.post()).data;
        const resData = new chat.AllMessageResponse();

        this.success(resData);
    }

    /**
     *  发送信息
     */
    async SendMessageAction() {
        const reqData = <chat.SendMessageRequest>(<any>this.post()).data;
        const resData = new chat.SendMessageResponse();

        this.success(resData);
    }

    /**
     *  拉取消息
     */
    async PullMessageAction() {
        const reqData = <chat.PullMessageRequest>(<any>this.post()).data;
        const resData = new chat.PullMessageResponse();

        this.success(resData);
    }

    /**
     *  屏蔽玩家
     */
    async SheieldingAction() {
        const reqData = <chat.SheieldingRequest>(<any>this.post()).data;
        const resData = new chat.SheieldingResponse();

        this.success(resData);
    }

    /**
     *  解除屏蔽
     */
    async ReleaseShieldAction() {
        const reqData = <chat.ReleaseShieldRequest>(<any>this.post()).data;
        const resData = new chat.ReleaseShieldResponse();

        this.success(resData);
    }

    /**
     *  招募集团
     */
    async recruitAction() {
        const reqData = <chat.recruitRequest>(<any>this.post()).data;
        const resData = new chat.recruitResponse();

        this.success(resData);
    }
}
