/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScoreProgressMarkStruct from "../../Generates/ModuleStudioMovieClip00Common/ScoreProgressMarkStruct";
import StudioLevelConfig from "../../../Config/ConfigExtends/StudioLevelConfig";

export default class ScoreProgressMark extends ScoreProgressMarkStruct
{
    studioLevelConfig: StudioLevelConfig;

    emptyFilters = [];
    lightFilters = [];
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        // let glowFilter = new laya.filters.GlowFilter('#6bf6ff', 6, 0, 0);
        // this.lightFilters.push(glowFilter);
    }

    private _isLight: boolean = false;
    get isLight()
    {
        return this._isLight;
    }

    set isLight(val: boolean)
    {
        if(val == this._isLight)
            return;

        this._isLight = val;
        if(val)
        {
            this.m_state.selectedIndex = 1;
            this.m_light.scaleX = 0;
            this.m_light.scaleY = 0;
            Laya.Tween.to(this.m_light, {scaleX: 1.4, scaleY: 1.4}, 100, Laya.Ease.linearNone, null, 0);
            Laya.Tween.to(this.m_light, {scaleX: 1, scaleY: 1}, 200, Laya.Ease.linearNone, null, 100);
        }
        else
        {
            this.m_state.selectedIndex = 0;
        }


        // if(val)
        // {
        //     this.m_title.filters = this.lightFilters;
        //     Laya.Tween.clearAll(this.m_title);
        //     Laya.Tween.to(this.m_title, {scaleX: 1.5, scaleY: 1.5}, 200, Laya.Ease.linearOut);
        //     Laya.Tween.to(this.m_title, {scaleX: 1, scaleY: 1}, 100, Laya.Ease.linearOut, null, 200);
        // }
        // else
        // {
        //     this.m_title.filters = this.emptyFilters;
        // }
    }
}