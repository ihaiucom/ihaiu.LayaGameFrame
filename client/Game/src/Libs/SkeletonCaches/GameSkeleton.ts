import SkeletonCache from "./SkeletonCache";
import TempletCache from "./TempletCache";

export default class GameSkeleton
{
    /** 骨骼动画对象缓存池 */
    static skeletonCache = new SkeletonCache();

    /** 骨骼动画模板缓存池 */
    static templetCache = new TempletCache();

    
    /** UI骨骼动画对象缓存池 */
    static uiSkeletonCache = new SkeletonCache();
    

}


window['GameSkeleton'] = GameSkeleton;