import Game from '../../Game';
export default class GMSender 
{
    /**
     * 添加物品
     * @param itemId 物品id
     * @param num 物品数量
     */
    async addItem(itemId: number, num: number)
    {
        // let s2c = await Game.net.AsyncGamerGmAddItemC2S(itemId,num);
        // console.log("s2c = ", s2c);
        
    }

    async addActor(actorId: number) {
        // let s2c = await Game.net.AsyncGamerGmActorAddC2S(actorId);
        // console.log("s2c = ", s2c);
    }

    async gmCommand(cmd: string) {
        console.log(cmd);
        let s2c = await Game.net.GMC2S(cmd);
        
    }
}