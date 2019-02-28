import {Mail} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async MailGetRewardAction() {
        const reqData = <Mail.MailGetRewardRequest>(<any>this.post()).data;
        const resData = new Mail.MailGetRewardResponse();

        this.success(resData);
    }

    /**
     *  批量领取邮件
     */
    async MailGetRewardManyAction() {
        const reqData = <Mail.MailGetRewardManyRequest>(<any>this.post()).data;
        const resData = new Mail.MailGetRewardManyResponse();

        this.success(resData);
    }

    /**
     *  批量删除邮件
     */
    async MailDeleteManyAction() {
        const reqData = <Mail.MailDeleteManyRequest>(<any>this.post()).data;
        const resData = new Mail.MailDeleteManyResponse();

        this.success(resData);
    }

    async MailDeleteAction() {
        const reqData = <Mail.MailDeleteRequest>(<any>this.post()).data;
        const resData = new Mail.MailDeleteResponse();

        this.success(resData);
    }

    async MailReadAction() {
        const reqData = <Mail.MailReadRequest>(<any>this.post()).data;
        const resData = new Mail.MailReadResponse();

        this.success(resData);
    }
}
