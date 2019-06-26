/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingLockTitleStruct from "../../Generates/SystemModuleHomeMap/BuildingLockTitleStruct";
import SpriteShake from "../../../Libs/Helpers/SpriteShake";

export default class BuildingLockTitle extends BuildingLockTitleStruct
{
    setVisible(visible:boolean)
    {
        if (this._play && !visible) {
            SpriteShake.off(this.m_imgLock);
        }
        this.visible = visible;
    }

    private _play:boolean = false;
    playShakeAction()
    {
        if (!this._play && this.visible) {
            this._play = true;
            SpriteShake.on(this.m_imgLock, 1000, true, 2000);
        }
    }
}