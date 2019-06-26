import DailytaskConfig from '../../Config/ConfigExtends/DailytaskConfig';
/**
 * 日常任务要求 类型
 */
export enum DailyTaskRequireType
{
    /** 建造建筑 */
    Build_Building = 1,
    /** 升级建筑 */
    Uplevel_Building = 2,
    /** 升级艺人 */
    Uplevel_Actor = 3,
}

/**
 * 日常任务要求 参数类型
 */
export enum DailyTaskRequireArgType
{
    /** 次数 */
    Count,

    /** 建筑ID */
    BuildingId,
    
    /** 拍摄等级 获得次数 */
    StudioLevelCount
}

export default abstract class DailyTaskBaseRequire 
{
    type: DailyTaskRequireType;
    count: int = 0;
    static GetArgType(require: int)
    {
        switch(require)
        {
            case 1:
            case 2:
            case 7:
            case 12:
            case 13:
            case 19:
                return DailyTaskRequireArgType.BuildingId;
            case 11:
                return DailyTaskRequireArgType.StudioLevelCount;
            default:
                return DailyTaskRequireArgType.Count;
        }
    }

    static Generate(config: DailytaskConfig): DailyTaskBaseRequire
    {
        let result : DailyTaskBaseRequire;
        let argType = this.GetArgType(config.require); 
        switch(argType)
        {
            case DailyTaskRequireArgType.BuildingId:
            {
                let r = new  DailyTaskBuildingRequire();
                r.buildingId = config.goal;
                r.count = config.s_goal;
                result = r;
            }
                break;
            case DailyTaskRequireArgType.StudioLevelCount:
            {
                let r = new  DailyTaskStudioLevelCountRequire();
                r.studioLevel = config.goal;
                r.count = config.s_goal;
                result = r;
            }
                break;
            default:
            {
                
                let r = new  DailyTaskCountRequire();
                r.count = config.goal;
                result = r;
            }
                break;
        }

        result.type = config.require;
        return result;
    }
}


export class DailyTaskBuildingRequire extends DailyTaskBaseRequire
{
    buildingId: int;
}


export class DailyTaskCountRequire extends DailyTaskBaseRequire
{
}

export class DailyTaskStudioLevelCountRequire extends DailyTaskBaseRequire
{
    studioLevel: int;
}
