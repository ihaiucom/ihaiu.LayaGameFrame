
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
import Random from "../../../Libs/Helpers/Random";
import { Entity } from "../../../Libs/ECS/Entity";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import CmdReflex from "../Cmds/CmdReflex";


/**
 * 单位命令--生成系统
 */
export default class UnitCmdGenerateSystem extends System
{
    handlerClassType = <any> SkeletonData;
    family?: Family;
    constructor() 
    {
        super();
        this.priority = SystemPriority.ViewPositionSystem;
    }

    onAttach(engine: HomeWorld) 
    {
        super.onAttach(engine);
        this.family = new FamilyBuilder(engine).include(UnitData , UnitCmdData).build();
    }


    update(engine: HomeWorld, delta: number): void
    {
        let cmd: UnitCmdData;
        for (let entity of this.family.entities) 
        {
            cmd = entity.getComponent(UnitCmdData);
            if(cmd.getQueueCount(UnitCmdQueueType.Transform) <= 0)
            {
                let random = Random.range(0, cmd.enableCmds.length);
                let cmdType = cmd.enableCmds[random];
                let cmdCls = CmdReflex.getCmdClsss(cmdType);
                if(cmdCls)
                {
                    cmdCls.generate(engine, entity, cmd, cmdType);
                }

                // if(cmd.enableTalkCmds.length > 0)
                // {
                //     let random = Random.range(0, cmd.enableTalkCmds.length);
                //     let cmdType = cmd.enableTalkCmds[random];
                //     let cmdCls = CmdReflex.getCmdClsss(cmdType);
                //     if(cmdCls)
                //     {
                //         cmdCls.generate(engine, entity, cmd, cmdType);
                //     }
                // }
            }
        }
    }


}