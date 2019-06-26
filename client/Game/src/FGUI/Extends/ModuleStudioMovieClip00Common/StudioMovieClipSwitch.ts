/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipSwitchStruct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipSwitchStruct";

export default class StudioMovieClipSwitch extends StudioMovieClipSwitchStruct
{
    
    /** 丢回对象池 */
    public poolRecover()
    {
        if(this.parent)
            this.removeFromParent();
        this.m_t0.stop();
        
        StudioMovieClipSwitch._poolRecover(this);
    }

    private static pool: StudioMovieClipSwitch[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): StudioMovieClipSwitch
    {
        let item: StudioMovieClipSwitch;
        if(this.pool.length > 0)
        {
            item = this.pool.pop();
        }
        else
        {
            item = this.createInstance();
        }
        return item;
    }

    
    /** 丢回对象池 */
    private static _poolRecover(item: StudioMovieClipSwitch)
    {
        if(this.pool.indexOf(item) == -1)
            this.pool.push(item);
    }
}