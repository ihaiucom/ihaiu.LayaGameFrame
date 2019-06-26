import DailyTaskGiftState = proto.DailyTaskGiftState;
import DailytaskrewardConfig from "../../Config/ConfigExtends/DailytaskrewardConfig";
import Game from "../../Game";

export default class DailyTaskGiftData
{
    id: number = 0;
    state: DailyTaskGiftState = DailyTaskGiftState.Unreceived;
    
    setProtoData(data: proto.IDailyTaskGift)
	{
		for(let key in data)
		{
			this[key] = data[key];
		}
    }

    /** 根据宝箱是否打开 */
    get iconUrl(): string
    {
        if(this.state == DailyTaskGiftState.Unreceived)
            return this.config.rewardIconUrl;
        else
            return this.config.receivedRewardIconUrl;
    }
    
    /**礼包配置 */
    get config(): DailytaskrewardConfig
    {
        return Game.config.dailytaskreward.getConfig(this.id);
    }
}