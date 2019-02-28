import {Actor} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  查探艺人
     */
    async NoseInfoActorAction() {
        const reqData = <Actor.NoseInfoActorRequest>(<any>this.post()).data;
        const resData = new Actor.NoseInfoActorResponse();

        this.success(resData);
    }

    /**
     *  招募艺人
     */
    async RecruitActorAction() {
        const reqData = <Actor.RecruitActorRequest>(<any>this.post()).data;
        const resData = new Actor.RecruitActorResponse();

        this.success(resData);
    }

    /**
     *  雪藏艺人
     */
    async HideActorAction() {
        const reqData = <Actor.HideActorRequest>(<any>this.post()).data;
        const resData = new Actor.HideActorResponse();

        this.success(resData);
    }

    /**
     *  增加艺人槽位
     */
    async AddActorSlotAction() {
        const reqData = <Actor.AddActorSlotRequest>(<any>this.post()).data;
        const resData = new Actor.AddActorSlotResponse();

        this.success(resData);
    }

    /**
     *  艺人升级
     */
    async UpgradeActorAction() {
        const reqData = <Actor.UpgradeActorRequest>(<any>this.post()).data;
        const resData = new Actor.UpgradeActorResponse();

        this.success(resData);
    }

    /**
     *  赠送艺人资产
     */
    async GiveActorAssetsAction() {
        const reqData = <Actor.GiveActorAssetsRequest>(<any>this.post()).data;
        const resData = new Actor.GiveActorAssetsResponse();

        this.success(resData);
    }

    /**
     *  艺人技能升级
     */
    async UpgradeActorSkillAction() {
        const reqData = <Actor.UpgradeActorSkillRequest>(<any>this.post()).data;
        const resData = new Actor.UpgradeActorSkillResponse();

        this.success(resData);
    }

    /**
     *  艺人培养
     */
    async ActorTrainAction() {
        const reqData = <Actor.ActorTrainRequest>(<any>this.post()).data;
        const resData = new Actor.ActorTrainResponse();

        this.success(resData);
    }

    /**
     *  艺人改名
     */
    async ActorChangeNameAction() {
        const reqData = <Actor.ActorChangeNameRequest>(<any>this.post()).data;
        const resData = new Actor.ActorChangeNameResponse();

        this.success(resData);
    }

    /**
     *  艺人训练开始
     */
    async ActorExerciseStartAction() {
        const reqData = <Actor.ActorExerciseStartRequest>(<any>this.post()).data;
        const resData = new Actor.ActorExerciseStartResponse();

        this.success(resData);
    }

    /**
     *  艺人结束训练
     */
    async ActorExerciseRewardAction() {
        const reqData = <Actor.ActorExerciseRewardRequest>(<any>this.post()).data;
        const resData = new Actor.ActorExerciseRewardResponse();

        this.success(resData);
    }

    /**
     *  增加训练队列
     */
    async ActorExerciseAddAction() {
        const reqData = <Actor.ActorExerciseAddRequest>(<any>this.post()).data;
        const resData = new Actor.ActorExerciseAddResponse();

        this.success(resData);
    }

    /**
     *  赠送忠诚卡
     */
    async GiveLoyaltyCardAction() {
        const reqData = <Actor.GiveLoyaltyCardRequest>(<any>this.post()).data;
        const resData = new Actor.GiveLoyaltyCardResponse();

        this.success(resData);
    }

    /**
     *  艺人助理升级
     */
    async AssistantUpLvAction() {
        const reqData = <Actor.AssistantUpLvRequest>(<any>this.post()).data;
        const resData = new Actor.AssistantUpLvResponse();

        this.success(resData);
    }
}
