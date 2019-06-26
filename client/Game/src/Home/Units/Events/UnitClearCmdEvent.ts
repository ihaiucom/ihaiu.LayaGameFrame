import { EventType } from "../EventType";
import { UnitType } from "../ExtEnums/UnitType";
import HomeEventHandler from "./HomeEventHandler";
import UnitCmdData from "../Components/UnitCmdData";
import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";
import UnitHelper from "../Utils/UnitHelper";
import AbstractCmdAction from "../Cmds/CmdAction";

export default class UnitClearCmdEvent extends HomeEventHandler
{
    static __eventType: string = EventType.UnitClearCmd;

    public Run(unitType: UnitType, unitId: int, queueType: UnitCmdQueueType = UnitCmdQueueType.All): void
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
                this.clearQueueActions(map.get(queueType));
            }
        }
        else
        {
            this.clearQueueActions(map.get(queueType));
        }
    }

    clearQueueActions(list: AbstractCmdAction[])
    {
        if(!list) return;

        for(let action of list)
        {
            action.end();
        }
    }
}
