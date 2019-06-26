/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MapWalkStruct from "../../Generates/SystemModuleHomeMap/MapWalkStruct";
import HomeWorld from "../../../Home/Units/Worlds/HomeWorld";

export default class MapWalk extends MapWalkStruct
{
    
	private static _Instance: MapWalk;
	static get Instance(): MapWalk
	{
		if (!this._Instance)
		{
			this._Instance = MapWalk.createInstance();
		}
		return this._Instance;
    }

    engine:HomeWorld;
    
    hit(x: number, y: number): boolean
    {
        x /= 10;
        y /= 10;
        // let p = this.engine.localToGlobal(x, y);
        // p.x /= 10;
        // p.y /= 10;
        return this.displayObject.hitTestPoint(x, y);
    }

}