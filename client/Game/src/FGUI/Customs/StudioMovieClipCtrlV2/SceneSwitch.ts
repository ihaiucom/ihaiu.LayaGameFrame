import PlayProgressData from "./PlayProgressData";
import { IStudioMovieClip } from "./IStudioMovieClip";
import StudioMovieClipSwitch from "../../Extends/ModuleStudioMovieClip00Common/StudioMovieClipSwitch";
import StudioMovieClipSwitch2 from "../../Extends/ModuleStudioMovieClip00Common/StudioMovieClipSwitch2";

/** 拍摄动画 -- 切场动画控制器 */
export default class SceneSwitch
{
     /** 丢回对象池 */
     public poolRecover()
     {
         if(this.view)
         {
            this.view.poolRecover();
            this.view = null;
         }
         Laya.Pool.recoverByClass(this);
     }
 
     /** 从对象池里获取对象 */
     public static poolGet(): SceneSwitch
     {
         return Laya.Pool.createByClass( SceneSwitch);
     }

     studioMovieClip: IStudioMovieClip;
     view: StudioMovieClipSwitch2;
    
    /** 播放 */
    async play(progressData: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
            
        return new Promise<boolean>((resolve)=>
        {
            this.studioMovieClip.addViewTop(this.view);
            this.view.m_view.m_t0.play(Laya.Handler.create(this, ()=>
            {
                resolve(true);
                this.view.removeFromParent();
            } 
            ));
        });
    }


    
    
    /** 初始化 */
    init(studioMovieClip: IStudioMovieClip)
    {
        this.studioMovieClip = studioMovieClip;
        this.view = StudioMovieClipSwitch2.poolGet();


        this.view.m_view.m_t0.setAutoPlay(false);
    }

}