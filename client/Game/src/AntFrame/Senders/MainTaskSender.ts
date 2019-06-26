import Game from "../../Game";

export default class MainTaskSender 
{
    // 领取主线任务
    async senderMainTaskState( type: number, id: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncGamerAcceptTaskC2S( type, id );
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }

    // 主线任务领奖
    async getAward( type: number, id: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncGamerGetTaskRewardC2S(  type, id );
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }
}