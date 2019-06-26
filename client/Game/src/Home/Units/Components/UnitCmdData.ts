import { Component } from "../../../Libs/ECS/Component";
import Assembly from "../../../Libs/Assembly";
import { UnitType } from "../ExtEnums/UnitType";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import UnOrderMultiMap from "../../../Libs/Helpers/UnOrderMultiMap";
import { AbstractCmdConfig } from "../Cmds/CmdConfigs";
import AbstractCmdAction from "../Cmds/CmdAction";
import UnitHelper from "../Utils/UnitHelper";

/** 单位命令数据 */
export default class UnitCmdData extends Component
{

    /** 单位可以执行的命令 */
    enableCmds: UnitCmdType[] = [];
    /** 单位可以执行的命令 */
    enableTalkCmds: UnitCmdType[] = [];
    
    /** 命令配置队列字典 */
    queueMap = new UnOrderMultiMap<UnitCmdQueueType, AbstractCmdConfig>();

    /** 命令执行队列字典, 不序列化 */
    actionQueueMap = new UnOrderMultiMap<UnitCmdQueueType, AbstractCmdAction>();


    /** 添加命令配置 */
    add(cmd: AbstractCmdConfig)
    {
        this.queueMap.addItem(cmd.cmdQueueType, cmd);
    }


    /** 获取命令队列 */
    getQueue(queueType: UnitCmdQueueType): AbstractCmdConfig[]
    {
        return this.queueMap.get(queueType);
    }

    /** 清空队列 */
    clearQueue(queueType: UnitCmdQueueType)
    {
        let list = this.getQueue(queueType);

        if(list)
        {
            for(let item of list)
            {
                item.poolRecover();
            }
            list.length = 0;
        }
    }

    /** 清空所有队列 */
    clearAllQueue()
    {
        let queueTypes = UnitHelper.UnitCmdQueueTypeList;
        for(let queueType of queueTypes)
        {
            this.clearQueue(queueType);
        }
    }

    /** 获取队列数量 */
    getQueueCount(queueType: UnitCmdQueueType): number
    {
        let list = this.getQueue(queueType);
        return list ? list.length : 0;
    }

    /** 获取所有队列数量 */
    getAllQueueCount(): number
    {
        return this.queueMap.allCount;
    }

    release()
    {
        this.clearAllQueue();
        this.actionQueueMap.clear();
        this.enableCmds.length = 0;
    }

}