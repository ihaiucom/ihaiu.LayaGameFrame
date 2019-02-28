import {GameData} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    async AuthAction() {
        const reqData = <GameData.AuthRequest>(<any>this.post()).data;
        const resData = new GameData.AuthResponse();

        this.success(resData);
    }

    async VisitorAuthAction() {
        const reqData = <GameData.VisitorAuthRequest>(<any>this.post()).data;
        const resData = new GameData.VisitorAuthResponse();

        this.success(resData);
    }

    /**
     *  请求初始化游戏数据
     */
    async InitGameDataAction() {
        const reqData = <GameData.InitGameDataRequest>(<any>this.post()).data;
        const resData = new GameData.InitGameDataResponse();

        this.success(resData);
    }

    /**
     *  玩家数据初始化提交
     */
    async GetLoginGameDataAction() {
        const reqData = <GameData.GetLoginGameDataRequest>(<any>this.post()).data;
        const resData = new GameData.GetLoginGameDataResponse();

        this.success(resData);
    }

    async GetInitGameDataAction() {
        const reqData = <GameData.GetInitGameDataRequest>(<any>this.post()).data;
        const resData = new GameData.GetInitGameDataResponse();

        this.success(resData);
    }

    /**
     *  修改玩家的名字
     */
    async RenameGameDataAction() {
        const reqData = <GameData.RenameGameDataRequest>(<any>this.post()).data;
        const resData = new GameData.RenameGameDataResponse();

        this.success(resData);
    }

    /**
     *  修改玩家的个性签名
     */
    async RePerSignatureGameDataAction() {
        const reqData = <GameData.RePerSignatureGameDataRequest>(<any>this.post()).data;
        const resData = new GameData.RePerSignatureGameDataResponse();

        this.success(resData);
    }

    /**
     *  修改玩家的头像
     */
    async RePortraitGameDataAction() {
        const reqData = <GameData.RePortraitGameDataRequest>(<any>this.post()).data;
        const resData = new GameData.RePortraitGameDataResponse();

        this.success(resData);
    }

    /**
     *  获取玩家拓展信息
     */
    async GetGameInfoExtAction() {
        const reqData = <GameData.GetGameInfoExtRequest>(<any>this.post()).data;
        const resData = new GameData.GetGameInfoExtResponse();

        this.success(resData);
    }

    /**
     *  选择初始化艺人
     */
    async GetInitActorAction() {
        const reqData = <GameData.GetInitActorRequest>(<any>this.post()).data;
        const resData = new GameData.GetInitActorResponse();

        this.success(resData);
    }

    async GetNoticeListAction() {
        const reqData = <GameData.GetNoticeListRequest>(<any>this.post()).data;
        const resData = new GameData.GetNoticeListResponse();

        this.success(resData);
    }
}
