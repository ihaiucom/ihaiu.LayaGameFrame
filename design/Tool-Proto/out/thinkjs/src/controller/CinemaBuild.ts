import {CinemaBuild} from "../protocol/API";
import {think} from "thinkjs";
import Base from "./base";

export default class Controller extends Base {
    /**
     *  扩建楼层
     */
    async ExtendFloorAction() {
        const reqData = <CinemaBuild.ExtendFloorRequest>(<any>this.post()).data;
        const resData = new CinemaBuild.ExtendFloorResponse();

        this.success(resData);
    }

    /**
     *  建造房间
     */
    async BuildRoomAction() {
        const reqData = <CinemaBuild.BuildRoomRequest>(<any>this.post()).data;
        const resData = new CinemaBuild.BuildRoomResponse();

        this.success(resData);
    }

    /**
     *  升级房间
     */
    async UpgradeRoomAction() {
        const reqData = <CinemaBuild.UpgradeRoomRequest>(<any>this.post()).data;
        const resData = new CinemaBuild.UpgradeRoomResponse();

        this.success(resData);
    }

    /**
     *  金币兑换
     */
    async goldExchangeAction() {
        const reqData = <CinemaBuild.goldExchangeRequest>(<any>this.post()).data;
        const resData = new CinemaBuild.goldExchangeResponse();

        this.success(resData);
    }
}
