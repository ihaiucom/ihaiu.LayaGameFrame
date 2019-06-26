import RewardConfig from "../../Config/ConfigExtends/RewardConfig";

export default class RewardData {
    id: number;          //奖励ID
    config: RewardConfig;//奖励配置

    //创建七日活动数据单位
	static Create(config: RewardConfig): RewardData {
		let reward   = new RewardData();
        reward.id = config.id;
        reward.config = config;

		return reward;
    }
}