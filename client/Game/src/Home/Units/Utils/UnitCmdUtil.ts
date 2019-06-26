import HomeWorld from "../Worlds/HomeWorld";
import { UnitType } from "../ExtEnums/UnitType";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import UnitCmdData from "../Components/UnitCmdData";
import UnitHelper from "./UnitHelper";
import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import CmdReflex from "../Cmds/CmdReflex";
import { Engine } from "../../../Libs/ECS/Engine";
import { Entity } from "../../../Libs/ECS/Entity";
import { DialogueType } from "../ExtEnums/DialogueType";
import { TalkType } from "../ExtEnums/TalkType";

export default class UnitCmdUtils
{
    engine: HomeWorld;
    install(engine: HomeWorld)
    {
        this.engine = engine;
    }

    /** 清除命令队列 */
    clearActions(unitType: UnitType, unitId: int, queueType: UnitCmdQueueType = UnitCmdQueueType.All, isForce= true)
    {
        let cmd = this.engine.getUnitCompoenent<UnitCmdData>(unitType, unitId, UnitCmdData);
        if(!cmd)
            return;

        let map = cmd.actionQueueMap;
        if(queueType == UnitCmdQueueType.All)
        {
            let queueList = UnitHelper.UnitCmdQueueTypeList;
            for(let queueType of queueList)
            {
                this.clearQueueActions(map.get(queueType), isForce);
                if(isForce)
                    cmd.clearQueue(queueType);
            }
        }
        else
        {
            this.clearQueueActions(map.get(queueType), isForce);
            if(isForce)
                cmd.clearQueue(queueType);
        }

    }

    
    private clearQueueActions(list: AbstractCmdAction[], isForce = true)
    {
        if(!list) return;

        for(let action of list)
        {
            action.end(isForce);
            if(isForce)
                this.removeAction(action);
        }

        if(isForce)
        {
            list.length = 0;
        }
    }

    removeAction(action: AbstractCmdAction)
    {
        if(action.cmdData)
        {
            action.cmdData.queueMap.removeItem(action.cmdQueueType, action.cmdConfig);
            action.cmdData.actionQueueMap.removeItem(action.cmdQueueType, action);
            action.cmdConfig.poolRecover();
            action.poolRecover();
        }
    }

    /** 添加命令 */
    addAction(entity:Entity, cmdType: UnitCmdType, cmd?:UnitCmdData, ...args)
    {
        if(!cmd)
            cmd = entity.getComponent(UnitCmdData);
        
        if(!cmd)
            return;

        let cmdCls = CmdReflex.getCmdClsss(cmdType);
        if(cmdCls)
        {
            cmdCls.generate(this.engine, entity, cmd, cmdType, ...args);
        }
    }

    /** 锁定命令队列 */
    lockWait(unitType: UnitType, unitId: int)
    {
        this.clearActions(unitType, unitId, UnitCmdQueueType.Transform);
        let cmd = this.engine.getUnitCompoenent<UnitCmdData>(unitType, unitId, UnitCmdData);
        if(!cmd)
            return;
        
        this.addAction(cmd.entity, UnitCmdType.LockWait, cmd);
        
    }


    /** 开始拖拽 */
    dragBegin(unitType: UnitType, unitId: int)
    {
        this.clearActions(unitType, unitId, UnitCmdQueueType.Transform);
        let cmd = this.engine.getUnitCompoenent<UnitCmdData>(unitType, unitId, UnitCmdData);
        if(!cmd)
            return;
            
        this.addAction(cmd.entity, UnitCmdType.Drag, cmd);
    }

    /** 结束拖拽 */
    dragEnd(unitType: UnitType, unitId: int)
    {
        this.clearActions(unitType, unitId, UnitCmdQueueType.Transform, false);
    }

    /** 直接坐某个位置 */
    sitdown(unitType: UnitType, unitId: int, seatNodeId:int, isForce: boolean)
    {
        let cmd = this.engine.getUnitCompoenent<UnitCmdData>(unitType, unitId, UnitCmdData);
        if(!cmd)
            return;

        this.addAction(cmd.entity, UnitCmdType.Sitdown, cmd, seatNodeId, isForce );
    }

    /** 待机 */
    idle(unitType: UnitType, unitId: int)
    {
        this.clearActions(unitType, unitId, UnitCmdQueueType.Transform);
        let cmd = this.engine.getUnitCompoenent<UnitCmdData>(unitType, unitId, UnitCmdData);
        if(!cmd)
            return;
        
        this.addAction(cmd.entity, UnitCmdType.Idle, cmd);
    }

    /** 冒泡说话 */
    bubbleTalkGroup(unitType: UnitType, unitId: int, groupType: DialogueType, isClear: boolean = true, duration: number = -1)
    {
        if(isClear)
        {
            this.clearActions(unitType, unitId, UnitCmdQueueType.Talk);
        }
        
        let cmd = this.engine.getUnitCompoenent<UnitCmdData>(unitType, unitId, UnitCmdData);
        if(!cmd)
            return;
            
        this.addAction(cmd.entity, UnitCmdType.BubbleTalk, cmd, TalkType.GroupId,  groupType, duration);
    }

    /** 清空冒泡说话 */
    clearBubbleTalk(unitType: UnitType, unitId: int)
    {
        this.clearActions(unitType, unitId, UnitCmdQueueType.Talk);
    }





}