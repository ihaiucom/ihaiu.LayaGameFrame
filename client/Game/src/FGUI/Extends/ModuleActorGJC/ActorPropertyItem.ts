/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorPropertyItemStruct from "../../Generates/ModuleActorGJC/ActorPropertyItemStruct";
import ActorData from "../../../GameModule/DataStructs/ActorData";

export default class ActorPropertyItem extends ActorPropertyItemStruct
{
    RenderItem(data: any, add: number): void {
        this.m_labBase.text = data.val;
        this.m_labAdd.text  = add ? ("+" + add) : ""; 
    }
}