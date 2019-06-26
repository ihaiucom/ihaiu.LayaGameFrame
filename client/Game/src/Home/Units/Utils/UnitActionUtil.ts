import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import Game from "../../../Game";
import UnitData from "../Components/UnitData";
import UnitActionData from "../Components/UnitActionData";
import { UnitOrientationType } from "../ExtEnums/UnitOrientationType";
import TransformData from "../Components/TransformData";

export default class UnitActionUtils
{
    /** 获取朝向 */
    static getOrientation(fromX: number, fromY: number, toX: number, toY: number):UnitOrientationType
    {
        let newx: number = toX - fromX;
        let newy: number = toY - fromY;

        let result = UnitOrientationType.Front_LetDown;
        // 新一象限 右下
        if (newx >= 0 && newy > 0) 
        {
            result = UnitOrientationType.Front_RightDown;
        }
        // 新二象限 左下
        else if (newx < 0 && newy >= 0) 
        {
            result = UnitOrientationType.Front_LetDown;
        }
        // 新三象限 左上
        else if (newx <= 0 && newy < 0) 
        {
            result = UnitOrientationType.Back_LetUp;
        }
        // 新四象限 右上
        else if (newx > 0 && newy <= 0) 
        {
            result = UnitOrientationType.Back_RightUp;
        }
        return result;
    }

    /** 设置朝向 */
    static setOrientationTarget(engine: HomeWorld, entity: Entity, toX: number, toY: number)
    {
        let transform = entity.getComponent(TransformData);
        let orientation = this.getOrientation(transform.position.x, transform.position.y, toX, toY);
        this.setOrientation(engine, entity, orientation);
    }

    /** 设置朝向 */
    static setOrientation(engine: HomeWorld, entity: Entity, orientation: UnitOrientationType)
    {
        let unit = entity.getComponent(UnitData);
        let transform = entity.getComponent(TransformData);
        let view = engine.unitViewMap.getValue(unit.unityType, unit.unitId);

        transform.orientation = orientation;

        if(view)
        {
            view.setOrientation(orientation);
        }

    }

    /** 播放动作 */
    static playAction(engine: HomeWorld, entity: Entity, actionId: int)
    {
        let unit = entity.getComponent(UnitData);
        let action = entity.getComponent(UnitActionData);
        let actionConfig = Game.config.actorAction.getConfig(actionId);
        let view = engine.unitViewMap.getValue(unit.unityType, unit.unitId);

        action.actionId = actionId;

        if(view)
        {
            if(actionConfig.isFront && !actionConfig.isBack)
            {
                if(view.orientation != UnitOrientationType.Front_LetDown && 
                    view.orientation != UnitOrientationType.Front_RightDown
                )
                {
                    view.setOrientation(UnitOrientationType.Front_LetDown);
                }
            }
            else if(!actionConfig.isFront && actionConfig.isBack)
            {
                if(view.orientation != UnitOrientationType.Back_LetUp && 
                    view.orientation != UnitOrientationType.Back_RightUp
                )
                {
                    view.setOrientation(UnitOrientationType.Back_LetUp);
                }
            }
            view.playAction(actionId, actionConfig.isLoop, true);
            // view.playAction(actionId, true, true);

        }
    }


}