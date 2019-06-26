import Dictionary from "../../../Libs/Helpers/Dictionary";
import { UnitCmdType } from "../ExtEnums/UnitCmdType";
import { ClassType } from "../../../Libs/ECS/Interfaces";
import Assembly from "../../../Libs/Assembly";
import { AssemblyNamespace } from "../../../Libs/AssemblyNamespace";
import AbstractCmdAction from "./CmdAction";
import HomeWorld from "../Worlds/HomeWorld";
import { Entity } from "../../../Libs/ECS/Entity";
import UnitCmdData from "../Components/UnitCmdData";
import { AbstractCmdConfig } from "./CmdConfigs";
import CmdIncludes from "../CmdIncludes";

/** 类信息 */
export interface CmdClassType extends ClassType
{
  __CmdType: UnitCmdType;
  generate(engine: HomeWorld, entity: Entity, cmdData: UnitCmdData, cmdType: UnitCmdType, ...args);

}

export default class CmdReflex
{
    private static cmds = new Dictionary<UnitCmdType, CmdClassType>();
    private static cmdActions = new Dictionary<UnitCmdType, CmdClassType>();

    private static isInstlled: boolean = false;
    static install()
    {
        if(this.isInstlled) return;
        this.isInstlled = true;

        CmdIncludes.install();


        let list: CmdClassType[];

        list = <any> Assembly.get(AssemblyNamespace.UnitCmds);
        for(let cls of list)
        {
            this.cmds.add(cls.__CmdType, cls);
        }
        
        list = <any> Assembly.get(AssemblyNamespace.UnitCmdActions);
        for(let cls of list)
        {
            this.cmdActions.add(cls.__CmdType, cls);
        }
    }

    static getCmdClsss(cmdType: UnitCmdType)
    {
        return this.cmds.getValue(cmdType);
    }

    static getCmdActionClsss(cmdType: UnitCmdType)
    {
        return this.cmdActions.getValue(cmdType);
    }

    static poolGetCmd(cmdType: UnitCmdType)
    {
        let cls = this.getCmdClsss(cmdType);
        if(!cls) return null;

        let obj: AbstractCmdConfig = Laya.Pool.createByClass(cls);
        return obj;
    }
    

    static poolGetCmdAction(cmdType: UnitCmdType)
    {
        let cls = this.getCmdActionClsss(cmdType);
        if(!cls) return null;

        let obj: AbstractCmdAction = Laya.Pool.createByClass(cls);
        return obj;
    }



}