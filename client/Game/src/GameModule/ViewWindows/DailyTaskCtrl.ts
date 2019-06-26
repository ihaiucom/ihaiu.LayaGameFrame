import DailyTaskData from '../DataStructs/DailyTaskData';
import Game from '../../Game';
import GameEventKey from '../../GameEventKey';
import { MenuId } from '../MenuId';
export default class DailyTaskCtrl
{
    static taskData: DailyTaskData;
    static doTask(task: DailyTaskData)
    {
        Game.menu.close(MenuId.DailyTask);
        this.taskData = task;
        let type = this.taskData.dailyTaskType;
        switch (type) {
            case proto.Event.E_Build://建造建筑
            {
                this.focusBuilding();
            }
                break;
            case proto.Event.E_BuildLevelUp://升级建筑
            {
                this.focusBuilding();
            }
                break;
            case proto.Event.E_ActorLevelUp://升级艺人
            {
                this.openUI();
            }
                break;
            case proto.Event.E_ParseInformationNormal://普通解析艺人
            {

            }
                break;
            case proto.Event.E_ParseInformationSpecial://特殊解析艺人
            {

            }
                break;
            case proto.Event.E_OpenEnvelope://打开信封
            {
                this.openUI();
            }
                break;
            case proto.Event.E_GetBuildRewardNum://领取建筑收益次数
            {
                this.focusBuilding();
            }
                break;
            case proto.Event.E_Studio://拍摄电影
            {
                
            }
                break;
            case proto.Event.E_WatchStudioRewardNum://查看电影后续收益
            {
                this.openUI();
            }
                break;
            case proto.Event.E_GetStudioRewardNum://领取电影收益次数
            {
                this.openUI();
            }
                break;
            case proto.Event.E_StudioAndGetResult://拍摄电影并取得结果
            {
                //添加拍摄按钮引导
            }
                break;
            case proto.Event.E_BuildBreak://建筑突破
            {
                this.focusBuilding();
            }
                break;
            case proto.Event.E_BulidActorIn://建筑进驻艺人
            {
                this.focusBuilding();
            }
                break;
            
            case proto.Event.E_OpenRank://打开排行榜
            {
                this.openUI();
            }
                break;
            case proto.Event.E_Story://剧本创作
            {
                this.openUI();
            }
                break;
            case proto.Event.E_ActorGift://赠送艺人礼物
            {
                this.openUI();
            }
                break;
            case proto.Event.E_Ad://观看广告
            {

            }
                break;
            case proto.Event.E_Share://游戏分享
            {

            }
                break;
            default:
                break;
        }
    }

    private static openUI(...args: any[])
    {
        let menuId = this.taskData.config.UI;
        Game.menu.open(menuId, args);
    }

    private static focusBuilding()
    {
        let buildingId = this.taskData.buildingId;
        if(buildingId != Game.moduleModel.dailyTask.SpecialBuildingId)
            Game.event.dispatch(GameEventKey.Build_FocusBuilding, buildingId);
    }
}