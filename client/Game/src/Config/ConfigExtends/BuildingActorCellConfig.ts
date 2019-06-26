/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import BuildingActorCellConfigStruct from "../ConfigStructs/BuildingActorCellConfigStruct";
import Prop from "../../GameFrame/Props/Prop";

export default class BuildingActorCellConfig extends BuildingActorCellConfigStruct
{
	get prop(): Prop {
        let propertyfield = this.propertyField;
        let value = this.isEffectValue ? this.effectValue : 0;
        let prop  = Prop.CreateByField(propertyfield, value);

        return prop;
    }

}