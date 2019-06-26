import { UnitCmdQueueType } from "../ExtEnums/UnitCmdQueueType";

export default class UnitHelper
{
    /** 命令队列类型 列表 */
    private static _UnitCmdQueueTypeList:UnitCmdQueueType[];
    static get UnitCmdQueueTypeList():UnitCmdQueueType[]
    {
        if(!this._UnitCmdQueueTypeList)
        {
            let list = 
            [
                UnitCmdQueueType.Transform,
                UnitCmdQueueType.Talk,
                UnitCmdQueueType.Other,
            ];
            this._UnitCmdQueueTypeList = list;
        }
        return this._UnitCmdQueueTypeList;
    }
}