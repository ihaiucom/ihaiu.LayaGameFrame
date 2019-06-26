import Game from "../../Game";

export default class StoryLotterySender 
{
    // 请求剧本招募状态
    async getStoryLotteryState( id: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncGetStoryExtractInfoC2S( id );
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }

    // 清除剧本招募CD
    async cleanLotteryCD( id: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncCleanStoryExtractCDC2S( id );
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }

    // 购买招募次数
    async buyLotteryNum( id: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncPurchaseStoryExtractNumC2S( id );
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }  

    // 抽奖
    async lottery( id: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncStoryExtractGashaponC2S( id );
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }
}