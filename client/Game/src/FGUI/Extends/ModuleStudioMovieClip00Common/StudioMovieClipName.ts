/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipNameStruct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipNameStruct";
import StudioActorState = proto.StudioActorState;
import PlayProgressData from "../../Customs/StudioMovieClipCtrlV2/PlayProgressData";
import SyncHellper from "../../../Libs/Helpers/SyncHelper";
export default class StudioMovieClipName extends StudioMovieClipNameStruct
{
    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.m_bg);
        // Laya.Tween.clearAll(this.m_icon);
        
        if(this.parent)
            this.removeFromParent();
            StudioMovieClipName._poolRecover(this);
            
        
        this.alpha = 1;
        this.m_bg.scaleX = this.m_bg.scaleY = 3;
        this.m_bg.alpha = 1;

        
        // this.m_icon.scaleX = this.m_icon.scaleY = 3;
        // this.m_icon.alpha = 1;
    }

    private static pool: StudioMovieClipName[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): StudioMovieClipName
    {
        let item: StudioMovieClipName;
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
    private static _poolRecover(item: StudioMovieClipName)
    {
        if(this.pool.indexOf(item) == -1)
            this.pool.push(item);
    }

    setSceneType(sceneType:StudioActorState)
    {
        let index = 0;
        switch(sceneType)
        {
            case StudioActorState.help:
                index = 0;
                break;
            case StudioActorState.normal:
                index = 1;
                break;
            case StudioActorState.best:
                index = 2;
                break;
        }
        this.m_state.selectedIndex = index;
    }

    
    /** 播放 */
    async playIn(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        
        Laya.Tween.clearAll(this);
        this.alpha = 1;
        this.m_showIn.play(null, 1, 0, 0);

        // Laya.Tween.clearAll(this.m_bg);
        // this.m_bg.scaleX = this.m_bg.scaleY = 5;
        // this.m_bg.alpha = 0;
        // Laya.Tween.to(this.m_bg, {scaleX: 1, scaleY: 1}, 100, Laya.Ease.linearOut);
        // Laya.Tween.to(this.m_bg, {alpha: 1}, 50, Laya.Ease.linearNone);

        
        // Laya.Tween.clearAll(this.m_icon);
        // this.m_icon.scaleX = this.m_icon.scaleY = 5;
        // this.m_icon.alpha = 0;
        // Laya.Tween.to(this.m_icon, { scaleX: 0.8, scaleY: 0.8 }, 70, Laya.Ease.linearNone, null, 70);
        // Laya.Tween.to(this.m_icon, { scaleX: 1, scaleY: 1 }, 50, Laya.Ease.linearNone, null, 150);
        // Laya.Tween.to(this.m_icon, { alpha: 1 }, 20, Laya.Ease.linearNone, null, 70);

        await SyncHellper.waitTime(300);
        
    }

    /** 播放 */
    async playOut(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        
        Laya.Tween.clearAll(this);
        Laya.Tween.to(this, {alpha: 0}, 200, Laya.Ease.linearNone);
        
        return Promise.resolve(true);
    }

}