import Game from "../../Game";

export default class GashaponSender 
{
    //请求抽奖
    async extractGashapon(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncGamerExtractGashaponC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求保底奖励6
    async giftGashapon(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncGamerGetAllowanceC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }
}