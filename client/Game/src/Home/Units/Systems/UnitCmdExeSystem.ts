
import Assembly from "../../../Libs/Assembly";
import { StartSystem } from "../../../Libs/ECS/Interfaces";
import SkeletonData from "../Components/SkeletonData";
import UnitData from "../Components/UnitData";
import HomeWorld from "../Worlds/HomeWorld";
import SkeletonUnitView from "../../UnityViews/SkeletonUnitView";
import { System } from "../../../Libs/ECS/System";
import { Family, FamilyBuilder } from "../../../Libs/ECS/Family";
import TransformData from "../Components/TransformData";
import { SystemPriority } from "../SystemPriority";
import AbstractUnitView from "../../UnityViews/AbstractUnitView";
import UnitCmdData from "../Components/UnitCmdData";
import AbstractCmdAction from "../Cmds/CmdAction";
import { UnitCmdState } from "../ExtEnums/UnitCmdState";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import CmdReflex from "../Cmds/CmdReflex";
import UnitHelper from "../Utils/UnitHelper";


/**
 * 单位命令--执行系统
 */
export default class UnitCmdExeSystem extends System
{
    handlerClassType = <any> SkeletonData;
    family?: Family;
    constructor() 
    {
        super();
        this.priority = SystemPriority.UnitCmdExeSystem;
    }

    onAttach(engine: HomeWorld) 
    {
        super.onAttach(engine);
        this.family = new FamilyBuilder(engine).include(UnitData , UnitCmdData).build();
    }

    private get queueTypes(): UnitCmdQueueType[]
    {
        return UnitHelper.UnitCmdQueueTypeList;
    }

    private willRemoveList: AbstractCmdAction[] = [];
    update(engine: HomeWorld, delta: number): void
    {
        let cmd: UnitCmdData;
        let actions: AbstractCmdAction[];

        for (let entity of this.family.entities) 
        {
            cmd = entity.getComponent(UnitCmdData);
            for(let queueType of this.queueTypes)
            {
                actions = cmd.actionQueueMap.get(queueType);
                // 执行
                if(actions && actions.length > 0)
                {
                    for(let action of actions)
                    {
                        if(action.state != UnitCmdState.Ended)
                        {
                            action.exe(delta);
                        }
                        
                        // 命令已经完成
                        if(action.state == UnitCmdState.Ended)
                        {
                            this.willRemoveList.push(action);
                        }
                    }
                }
                // 将新命令配置添加进来
                else
                {
                    let configs = cmd.getQueue(queueType);
                    if(configs && configs.length > 0)
                    {
                        let config = configs[0];
                        let action = CmdReflex.poolGetCmdAction(config.cmdType);
                        if(action)
                        {
                            action.init(engine, entity, cmd, config);
                            cmd.actionQueueMap.addItem(queueType, action);
                        }
                    }
                }
            }

        }

        // 移除完成了的
        for(let action of this.willRemoveList)
        {
            engine.unitCmdUtil.removeAction(action);
        }
        this.willRemoveList.length = 0;
    }
}