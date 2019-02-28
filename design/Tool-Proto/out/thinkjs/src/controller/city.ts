import {city} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  设置宣传大使
     */
    async SetPropagandaActorAction() {
        const reqData = <city.SetPropagandaActorRequest>(<any>this.post()).data;
        const resData = new city.SetPropagandaActorResponse();

        this.success(resData);
    }

    /**
     *  宣传
     */
    async PropagandaAction() {
        const reqData = <city.PropagandaRequest>(<any>this.post()).data;
        const resData = new city.PropagandaResponse();

        this.success(resData);
    }

    /**
     *  路演
     */
    async RoadshowAction() {
        const reqData = <city.RoadshowRequest>(<any>this.post()).data;
        const resData = new city.RoadshowResponse();

        this.success(resData);
    }

    /**
     *  设置形象大使
     */
    async SetAmbassadorAction() {
        const reqData = <city.SetAmbassadorRequest>(<any>this.post()).data;
        const resData = new city.SetAmbassadorResponse();

        this.success(resData);
    }

    /**
     *  领取收益
     */
    async GetRewardAction() {
        const reqData = <city.GetRewardRequest>(<any>this.post()).data;
        const resData = new city.GetRewardResponse();

        this.success(resData);
    }

    /**
     *  占领城市
     */
    async HoldCityAction() {
        const reqData = <city.HoldCityRequest>(<any>this.post()).data;
        const resData = new city.HoldCityResponse();

        this.success(resData);
    }
}
