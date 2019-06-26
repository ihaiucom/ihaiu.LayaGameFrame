import Game from '../../Game';
import { GetRewardDialogType } from '../../FGUI/Extends/SystemModuleDialog/GetRewardDialog';
import IntelligencePaseType = proto.IntelligencePaseType;

export default class InformationSender {
    /**
     * 情报列表
     */
    async myInformationList(): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerGetIntelligenceC2S();
        if (0 == s2c.error) {
           
        }
        return Promise.resolve(s2c.error == 0);
    }

    async changeInformationState(ids: number[]): Promise<boolean>
    {
        let s2c = await Game.net.AsyncGamerChangeIntelligenceStateC2S(ids);
        if (0 == s2c.error) {
           
        }
        return Promise.resolve(s2c.error == 0);
    }

    /**
     * 解析情报
     * @param ids 
     */
    async analyzeInformation(ids: number[], type: IntelligencePaseType): Promise<boolean> {
        let s2c = await Game.net.AsyncGamerIntelligenceParseC2S(type,ids);
        if (0 == s2c.error) {
            
        }
        return Promise.resolve(s2c.error == 0);
    }



}