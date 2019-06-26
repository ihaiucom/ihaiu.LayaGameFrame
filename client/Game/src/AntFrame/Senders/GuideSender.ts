import Game from "../../Game";

export default class GuideSender 
{
    // 发送引导步骤
    async setGuideProgress( progress: number ): Promise<boolean>{
        let s2c = await Game.net.AsyncGamerSetGuideProgressC2S( progress );
        if ( s2c.error == 0 ){

        }
        Game.moduleModel.guide.setProgress( progress ); // 触发下一步引导
        return Promise.resolve(s2c.error == 0);
    }

    // 获取引导数据
    async getGuideProgress( ): Promise<boolean>{
        let s2c = await Game.net.AsyncGamerGetGuideProgressC2S();
        if ( s2c.error == 0 ){

        }
        return Promise.resolve(s2c.error == 0);
    }
}