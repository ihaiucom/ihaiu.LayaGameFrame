/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioSESelectItemStruct from "../../Generates/ModuleStudio/StudioSESelectItemStruct";
import Random from '../../../Libs/Helpers/Random';

export default class StudioSESelectItem extends StudioSESelectItemStruct
{
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        window["ttt"] = this.m_t0;
    }
    updateView(content: string, index: number) {
        this._playAnimation(index);
        this.m_content.text = content;
    }

    private _playAnimation(index: number)
    {
        this.m_t0.playing && (this.m_t0.stop())
        this.m_t0.play(null,-1, index*0.3);
    }
}