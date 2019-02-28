import {cooperate} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  寻求合作
     */
    async ApplyAction() {
        const reqData = <cooperate.ApplyRequest>(<any>this.post()).data;
        const resData = new cooperate.ApplyResponse();

        this.success(resData);
    }

    /**
     *  取消公开邀请
     */
    async CancelCooperateAction() {
        const reqData = <cooperate.CancelCooperateRequest>(<any>this.post()).data;
        const resData = new cooperate.CancelCooperateResponse();

        this.success(resData);
    }

    /**
     *  解除合作
     */
    async RelieveAction() {
        const reqData = <cooperate.RelieveRequest>(<any>this.post()).data;
        const resData = new cooperate.RelieveResponse();

        this.success(resData);
    }

    /**
     *  审批
     */
    async ApproveAction() {
        const reqData = <cooperate.ApproveRequest>(<any>this.post()).data;
        const resData = new cooperate.ApproveResponse();

        this.success(resData);
    }

    /**
     *  主界面合作信息 10秒一次
     */
    async GetInfoAction() {
        const reqData = <cooperate.GetInfoRequest>(<any>this.post()).data;
        const resData = new cooperate.GetInfoResponse();

        this.success(resData);
    }

    /**
     *  
     */
    async TaskOperateAction() {
        const reqData = <cooperate.TaskOperateRequest>(<any>this.post()).data;
        const resData = new cooperate.TaskOperateResponse();

        this.success(resData);
    }

    async GetTaskRewardAction() {
        const reqData = <cooperate.GetTaskRewardRequest>(<any>this.post()).data;
        const resData = new cooperate.GetTaskRewardResponse();

        this.success(resData);
    }

    /**
     *  赠送物品
     */
    async GiveRewardAction() {
        const reqData = <cooperate.GiveRewardRequest>(<any>this.post()).data;
        const resData = new cooperate.GiveRewardResponse();

        this.success(resData);
    }

    /**
     *  领取进度奖励
     */
    async GetProgressTaskAction() {
        const reqData = <cooperate.GetProgressTaskRequest>(<any>this.post()).data;
        const resData = new cooperate.GetProgressTaskResponse();

        this.success(resData);
    }

    /**
     *  查看合作信息
     */
    async ReadCooperateAction() {
        const reqData = <cooperate.ReadCooperateRequest>(<any>this.post()).data;
        const resData = new cooperate.ReadCooperateResponse();

        this.success(resData);
    }

    /**
     *  合作任务界面 2秒一次
     */
    async GetTaskInfoAction() {
        const reqData = <cooperate.GetTaskInfoRequest>(<any>this.post()).data;
        const resData = new cooperate.GetTaskInfoResponse();

        this.success(resData);
    }

    /**
     *  合作订单界面 2秒一次
     */
    async GetOrderInfoAction() {
        const reqData = <cooperate.GetOrderInfoRequest>(<any>this.post()).data;
        const resData = new cooperate.GetOrderInfoResponse();

        this.success(resData);
    }
}
