import CountActivitiesConfig from "../../Config/ConfigExtends/CountActivitiesConfig";
import RewardConfig from "../../Config/ConfigExtends/RewardConfig";
import Game from "../../Game";
import RewardData from "./RewardData";

export default class CountActivitiesData {
    id: number;         //七日活动ID
    config: CountActivitiesConfig;

    //创建七日活动数据单位
	static Create(config: CountActivitiesConfig): CountActivitiesData {
		let activity   = new CountActivitiesData();
        activity.id = config.id;
        activity.config = config;

		return activity;
    }
    
    private _rewardData: RewardData;
    //奖励数据
    getReward(): RewardData {
        if (!this._rewardData) {
            let config = Game.config.reward.getConfig(this.config.rewardId);
            this._rewardData = RewardData.Create(config);
        }
        return this._rewardData;
    }
}