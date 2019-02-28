import {item} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  道具出售
     */
    async SellOutAction() {
        const reqData = <item.SellOutRequest>(<any>this.post()).data;
        const resData = new item.SellOutResponse();

        this.success(resData);
    }

    /**
     *  道具合成
     */
    async CompoundAction() {
        const reqData = <item.CompoundRequest>(<any>this.post()).data;
        const resData = new item.CompoundResponse();

        this.success(resData);
    }

    /**
     *  道具拆分
     */
    async SplitAction() {
        const reqData = <item.SplitRequest>(<any>this.post()).data;
        const resData = new item.SplitResponse();

        this.success(resData);
    }

    /**
     *  使用道具
     */
    async UseAction() {
        const reqData = <item.UseRequest>(<any>this.post()).data;
        const resData = new item.UseResponse();

        this.success(resData);
    }

    /**
     *  合成艺人
     */
    async CompoundActorAction() {
        const reqData = <item.CompoundActorRequest>(<any>this.post()).data;
        const resData = new item.CompoundActorResponse();

        this.success(resData);
    }

    /**
     *  使用艺人技能经验药水
     */
    async UseActorSkillWaterAction() {
        const reqData = <item.UseActorSkillWaterRequest>(<any>this.post()).data;
        const resData = new item.UseActorSkillWaterResponse();

        this.success(resData);
    }

    /**
     *  使用碎片礼包道具
     */
    async UsePiecesGiftBagAction() {
        const reqData = <item.UsePiecesGiftBagRequest>(<any>this.post()).data;
        const resData = new item.UsePiecesGiftBagResponse();

        this.success(resData);
    }
}
