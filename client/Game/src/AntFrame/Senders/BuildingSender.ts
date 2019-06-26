import Game from "../../Game";

export default class BuildingSender 
{
    //请求创建/升级--建造
    async buildingLevelUp(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncBuildLevelUpC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求创建/升级--成功
    async buildingEndOfLevelUp(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncBuildEndOfLevelUpC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    //请求突破
    async buildingBreakUp(id: number): Promise<boolean>{
        let s2c = await Game.net.AsyncBuildBreakUpC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    // 请求领取建筑资源
    async buildingGetProductItem(id:number): Promise<boolean>
    {
        let s2c = await Game.net.AsyncBuildGetProductC2S(id);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    // 请求领取建筑资源
    async buildingSpeedUp(id:number, type: number): Promise<boolean>
    {
        let s2c = await Game.net.AsyncBuildSpeedUpC2S(id, type);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    // 请求入驻艺人槽
    async buildingEnterActorCell(actorid:number, cellid: number): Promise<boolean>
    {
        let s2c = await Game.net.AsyncActorEnterBuildC2S(actorid, cellid);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }

    // 请求离开艺人槽
    async buildingLeaveActorCell(actorid: number): Promise<boolean>
    {
        let s2c = await Game.net.AsyncActorLeaveBuildC2S(actorid);
        if (s2c.error == 0) {
            
        }

        return Promise.resolve(s2c.error == 0);
    }
}