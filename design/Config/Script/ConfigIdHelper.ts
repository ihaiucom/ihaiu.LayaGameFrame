export default class ConfigIdHelper
{
    /** 获取建筑等级ID */
    public static getBuildingLevelId(buildingId: int, buildingLevel:int):int
    {
        return 12100000 + buildingId * 1000 + buildingLevel;
    }

    
    /** 获取建筑艺人进驻槽ID */
    public static getBuildingActorCellId(buildingId:int, cellIndex:int):int
    {
        return 12200000 + buildingId * 1000 + cellIndex;
    }

    // /** 获取建筑艺人进驻槽LevelId */
    // public static getBuildingActorEffectId(buildingActorCellId:int, buildingLevel:int):int
    // {
    //     return buildingActorCellId * 100 + buildingLevel;
    // }

    
    // /** 获取建筑效果ID */
    // public static getBuildingEffectId(buildingId:int, effectIndex:int):int
    // {
    //     return buildingId * 10000 + 100 + effectIndex;
    // }

    // /** 获取建筑效果等级LevelId */
    // public static getBuildingEffectLevelId(buildingEffectId:int, buildingLevel:int):int
    // {
    //     return buildingEffectId * 1000 + buildingLevel;
    // }


    /** 获取艺人，等级，星级 配置ID */
    public static getActorLevelStarId(actorId:int, level:int, start:int)
    {
        return actorId * 100000 + level * 100 + start;
    }
}