/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PropIconItemStruct from "../../Generates/CommonGame/PropIconItemStruct";
import PlayProgressData from "../../Customs/StudioMovieClipCtrlV2/PlayProgressData";
import PropId from "../../../GameFrame/Props/PropId";
import StudioMovieClip01Normal from "../ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import SyncHellper from "../../../Libs/Helpers/SyncHelper";
import ParticleFly from "../../../Libs/Helpers/ParticleFly";
import R from "../../../Config/Keys/R";

export default class PropIconItem extends PropIconItemStruct
{
    
    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Tween.clearAll(this);
        
        if(this.parent)
            this.removeFromParent();
            PropIconItem._poolRecover(this);
            
        this.scaleX = this.scaleY = 1;
        this.alpha = 1;
    }

    private static pool: PropIconItem[] = [];

    /** 从对象池里获取对象 */
    public static poolGet(): PropIconItem
    {
        let item: PropIconItem;
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
    private static _poolRecover(item: PropIconItem)
    {
        if(this.pool.indexOf(item) == -1)
            this.pool.push(item);
    }

    
    
    
    /** 播放 */
    async playIn(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        
        Laya.Tween.clearAll(this);
        this.scaleX = this.scaleY = 0;
        this.alpha = 0;
        Laya.Tween.to(this, {scaleX: 1, scaleY: 1, alpha: 1}, 100, Laya.Ease.backOut);
        
        await SyncHellper.waitTime(40);
        
    }

    fromPos = new Laya.Point();
    toPos = new Laya.Point();
    particleColorR = 1;
    particleColorG = 1;
    particleColorB = 1;
    particleColorA = 1;

    /** 播放 */
    async playOut(progressData: PlayProgressData, toX: number, toY: number): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
            
        this.fromPos.x = this.x;
        this.fromPos.y = this.y;

        this.toPos.x = toX;
        this.toPos.y = toY;
        
        let particle = ParticleFly.poolGet();
        await particle.init([R.particles.StudioPropScore]);
        // particle.setColor(this.particleColorR, this.particleColorG, this.particleColorB, this.particleColorA);
        particle.play([R.particles.StudioPropScore], this.parent.displayObject, this.fromPos, this.toPos, 500);
        
        Laya.Tween.clearAll(this);
        Laya.Tween.to(this, {x: toX, y: toY}, 500, Laya.Ease.linearNone);
        Laya.Tween.to(this, {alpha: 0}, 100, Laya.Ease.linearNone, null, 400);
        
        await SyncHellper.waitTime(100);

    }

    setPropId(propId: int)
    {
        let index = propId - PropId.charm;
        this.m_prop.selectedIndex = index;

        switch(propId)
        {
            case PropId.charm:
                this.particleColorR = 238 / 255;
                this.particleColorG = 157 / 255;
                this.particleColorB = 251 / 255;
                break;
            case PropId.eloquence:
                this.particleColorR = 154 / 255;
                this.particleColorG = 191 / 255;
                this.particleColorB = 252 / 255;
                break;
            case PropId.entertainment:
                this.particleColorR = 255 / 255;
                this.particleColorG = 144 / 255;
                this.particleColorB = 162 / 255;
                break;
            case PropId.act:
                this.particleColorR = 92 / 255;
                this.particleColorG = 222 / 255;
                this.particleColorB = 193 / 255;
                break;
            case PropId.talent:
                this.particleColorR = 255 / 255;
                this.particleColorG = 183 / 255;
                this.particleColorB = 138 / 255;
                break;

        }
        
        this.particleColorR = 1;
        this.particleColorG = 1;
        this.particleColorB = 1;
        this.particleColorA = 0.5;
    }
}