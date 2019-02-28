import {rank} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  获取自己的排名信息
     */
    async GetSelfListAction() {
        const reqData = <rank.GetSelfListRequest>(<any>this.post()).data;
        const resData = new rank.GetSelfListResponse();

        this.success(resData);
    }

    /**
     *  获取全服排行榜
     */
    async GetServerRankListAction() {
        const reqData = <rank.GetServerRankListRequest>(<any>this.post()).data;
        const resData = new rank.GetServerRankListResponse();

        this.success(resData);
    }

    /**
     *  获取分组总票房排行榜
     */
    async GetGroupRankListAction() {
        const reqData = <rank.GetGroupRankListRequest>(<any>this.post()).data;
        const resData = new rank.GetGroupRankListResponse();

        this.success(resData);
    }

    /**
     *  获取分组电影排行榜
     */
    async GetGroupMovieRankListAction() {
        const reqData = <rank.GetGroupMovieRankListRequest>(<any>this.post()).data;
        const resData = new rank.GetGroupMovieRankListResponse();

        this.success(resData);
    }

    /**
     *  获取电影基本信息
     */
    async GetMovieShortDataAction() {
        const reqData = <rank.GetMovieShortDataRequest>(<any>this.post()).data;
        const resData = new rank.GetMovieShortDataResponse();

        this.success(resData);
    }

    /**
     *  获取玩家基本信息
     */
    async GetPlayerShortDataAction() {
        const reqData = <rank.GetPlayerShortDataRequest>(<any>this.post()).data;
        const resData = new rank.GetPlayerShortDataResponse();

        this.success(resData);
    }

    /**
     *  领取排行榜奖励
     */
    async GetServerListRewardAction() {
        const reqData = <rank.GetServerListRewardRequest>(<any>this.post()).data;
        const resData = new rank.GetServerListRewardResponse();

        this.success(resData);
    }

    /**
     *  修改服务器名称
     */
    async ChangeServerNameAction() {
        const reqData = <rank.ChangeServerNameRequest>(<any>this.post()).data;
        const resData = new rank.ChangeServerNameResponse();

        this.success(resData);
    }

    async GetOscarDataAction() {
        const reqData = <rank.GetOscarDataRequest>(<any>this.post()).data;
        const resData = new rank.GetOscarDataResponse();

        this.success(resData);
    }

    async GetOscarRewardAction() {
        const reqData = <rank.GetOscarRewardRequest>(<any>this.post()).data;
        const resData = new rank.GetOscarRewardResponse();

        this.success(resData);
    }

    /**
     *  签约影院
     */
    async ChoseTheaterAction() {
        const reqData = <rank.ChoseTheaterRequest>(<any>this.post()).data;
        const resData = new rank.ChoseTheaterResponse();

        this.success(resData);
    }

    async GetStreetRewardAction() {
        const reqData = <rank.GetStreetRewardRequest>(<any>this.post()).data;
        const resData = new rank.GetStreetRewardResponse();

        this.success(resData);
    }
}
