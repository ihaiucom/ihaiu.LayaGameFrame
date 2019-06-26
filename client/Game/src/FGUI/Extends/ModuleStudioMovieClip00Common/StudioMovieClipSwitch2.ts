/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipSwitch2Struct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipSwitch2Struct";

export default class StudioMovieClipSwitch2 extends StudioMovieClipSwitch2Struct
{
    
    /** 丢回对象池 */
    public poolRecover()
    {
        if(this.parent)
            this.removeFromParent();
        this.m_view.m_t0.stop();
        
        StudioMovieClipSwitch2._poolRecover(this);
    }

    private static pool: StudioMovieClipSwitch2[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): StudioMovieClipSwitch2
    {
        let item: StudioMovieClipSwitch2;
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
    private static _poolRecover(item: StudioMovieClipSwitch2)
    {
        if(this.pool.indexOf(item) == -1)
            this.pool.push(item);
    }
}