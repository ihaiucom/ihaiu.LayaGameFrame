/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import DailytaskConfigStruct from "../ConfigStructs/DailytaskConfigStruct";
import DailyTaskBaseRequire from "../../GameModule/DataStructs/DailyTaskRequire";
import { DailyTaskBuildingRequire } from '../../GameModule/DataStructs/DailyTaskRequire';

export default class DailytaskConfig extends DailytaskConfigStruct
{
    get buildingId(): number
    {
        return isNaN(this.building)?0:this.building;
    }
    
    private _requireData:DailyTaskBaseRequire;
    get requireData(): DailyTaskBaseRequire
    {
        if(!this._requireData)
        {
            this._requireData = DailyTaskBaseRequire.Generate(this);
        }
        return this._requireData;
    }

    getRequireData<T extends DailyTaskBaseRequire>(): T
    {
        return <T> this.requireData;
    }

}