import {movie} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  拍摄电影
     */
    async MakeFilmAction() {
        const reqData = <movie.MakeFilmRequest>(<any>this.post()).data;
        const resData = new movie.MakeFilmResponse();

        this.success(resData);
    }

    /**
     *  设置电影名字
     */
    async SetMovieNameAction() {
        const reqData = <movie.SetMovieNameRequest>(<any>this.post()).data;
        const resData = new movie.SetMovieNameResponse();

        this.success(resData);
    }

    /**
     *  设置艺人
     */
    async SetActorAction() {
        const reqData = <movie.SetActorRequest>(<any>this.post()).data;
        const resData = new movie.SetActorResponse();

        this.success(resData);
    }

    /**
     *  确认艺人选择
     */
    async ConfirmSetActorAction() {
        const reqData = <movie.ConfirmSetActorRequest>(<any>this.post()).data;
        const resData = new movie.ConfirmSetActorResponse();

        this.success(resData);
    }

    /**
     *  选择剧本类型
     */
    async ChoseTypeAction() {
        const reqData = <movie.ChoseTypeRequest>(<any>this.post()).data;
        const resData = new movie.ChoseTypeResponse();

        this.success(resData);
    }

    /**
     *  接受媒体访问
     */
    async AcceptMediaVisitAction() {
        const reqData = <movie.AcceptMediaVisitRequest>(<any>this.post()).data;
        const resData = new movie.AcceptMediaVisitResponse();

        this.success(resData);
    }

    /**
     *  电影发布
     */
    async PublishMovieAction() {
        const reqData = <movie.PublishMovieRequest>(<any>this.post()).data;
        const resData = new movie.PublishMovieResponse();

        this.success(resData);
    }

    /**
     *  上映结束
     */
    async BattleOverAction() {
        const reqData = <movie.BattleOverRequest>(<any>this.post()).data;
        const resData = new movie.BattleOverResponse();

        this.success(resData);
    }

    /**
     *  推广电影
     */
    async SpreadMovieAction() {
        const reqData = <movie.SpreadMovieRequest>(<any>this.post()).data;
        const resData = new movie.SpreadMovieResponse();

        this.success(resData);
    }

    /**
     *  领取收益
     */
    async GetRewardMovieAction() {
        const reqData = <movie.GetRewardMovieRequest>(<any>this.post()).data;
        const resData = new movie.GetRewardMovieResponse();

        this.success(resData);
    }

    /**
     *  切换城市
     */
    async SwitchCityAction() {
        const reqData = <movie.SwitchCityRequest>(<any>this.post()).data;
        const resData = new movie.SwitchCityResponse();

        this.success(resData);
    }

    /**
     *  更新电影状态
     */
    async UpdateMovieStateAction() {
        const reqData = <movie.UpdateMovieStateRequest>(<any>this.post()).data;
        const resData = new movie.UpdateMovieStateResponse();

        this.success(resData);
    }

    /**
     *  领取剧本目标奖励
     */
    async GetStoryGoalsAction() {
        const reqData = <movie.GetStoryGoalsRequest>(<any>this.post()).data;
        const resData = new movie.GetStoryGoalsResponse();

        this.success(resData);
    }

    /**
     *  删除电影
     */
    async DeleteMovieAction() {
        const reqData = <movie.DeleteMovieRequest>(<any>this.post()).data;
        const resData = new movie.DeleteMovieResponse();

        this.success(resData);
    }

    /**
     *  刷新电影剧本
     */
    async RefreshMovieStoryAction() {
        const reqData = <movie.RefreshMovieStoryRequest>(<any>this.post()).data;
        const resData = new movie.RefreshMovieStoryResponse();

        this.success(resData);
    }
}
