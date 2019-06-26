import Game from "../../Game";

export default class ActivitySender {
    //请求获取活动奖励
    async getActivityReward(id:number): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGetActivityRewardC2S(id);
        if (s2c.error == 0) {
            
        }
    
        return Promise.resolve(s2c.error == 0);
    }
}