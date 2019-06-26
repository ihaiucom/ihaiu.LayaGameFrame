import Assembly from "../../Libs/Assembly";
import IdleCmdConfig from "./CmdConfigs/IdleCmdConfig";
import { IdleCmdAction } from "./CmdActions/IdleCmdAction";
import MovePathCmdConfig from "./CmdConfigs/MovePathCmdConfig";
import { MovePathCmdAction } from "./CmdActions/MovePathCmdAction";
import GroupGotoSitdownCmdConfig from "./CmdConfigs/GroupGotoSitdownCmdConfig";
import ActionCmdConfig from "./CmdConfigs/ActionCmdConfig";
import { ActionCmdAction } from "./CmdActions/ActionCmdAction";
import { SitdownCmdAction } from "./CmdActions/SitdownCmdAction";
import SitdownCmdConfig from "./CmdConfigs/SitdownCmdConfig";
import BubbleTalkCmdConfig from "./CmdConfigs/BubbleTalkCmdConfig";
import { BubbleTalkCmdAction } from "./CmdActions/BubbleTalkCmdAction";
import { DragCmdAction } from "./CmdActions/DragCmdAction";
import DragCmdConfig from "./CmdConfigs/DragCmdConfig";
import LockWaitCmdConfig from "./CmdConfigs/LockWaitCmdConfig";
import { LockWaitCmdAction } from "./CmdActions/LockWaitCmdAction";

export default class CmdIncludes
{
    private static isInstalled = false;
    static install()
    {
        if(this.isInstalled)
            return;
        
        // configs
        Assembly.register(<any>LockWaitCmdConfig, 'LockWaitCmdConfig');
        Assembly.register(<any>IdleCmdConfig, 'IdleCmdConfig');
        Assembly.register(<any>ActionCmdConfig, 'ActionCmdConfig');
        Assembly.register(<any>MovePathCmdConfig, 'MovePathCmdConfig');
        Assembly.register(<any>SitdownCmdConfig, 'SitdownCmdConfig');
        Assembly.register(<any>DragCmdConfig, 'DragCmdConfig');
        Assembly.register(<any>BubbleTalkCmdConfig, 'BubbleTalkCmdConfig');
        Assembly.register(<any>GroupGotoSitdownCmdConfig, 'GroupGotoSitdownCmdConfig');
        
        


        // actions
        Assembly.register(<any>LockWaitCmdAction, 'LockWaitCmdAction');
        Assembly.register(<any>IdleCmdAction, 'IdleCmdAction');
        Assembly.register(<any>ActionCmdAction, 'ActionCmdAction');
        Assembly.register(<any>MovePathCmdAction, 'MovePathCmdAction');
        Assembly.register(<any>SitdownCmdAction, 'SitdownCmdAction');
        Assembly.register(<any>DragCmdAction, 'DragCmdAction');
        Assembly.register(<any>BubbleTalkCmdAction, 'BubbleTalkCmdAction');
    }
}