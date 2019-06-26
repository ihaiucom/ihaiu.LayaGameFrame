import Particle2D from "../../EngineParticle/Particle2D";
import Particle2DCache from "./Particle2DCache";


export default class ParticleFly
{

    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Pool.recoverByClass(this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): ParticleFly
    {
        return Laya.Pool.createByClass( ParticleFly);
    }



    particles: Particle2D[] = [];

    private _x: number = 0;
    private _y: number = 0;

    get x(): number
    {
        return this._x;
    }

    set x(val: number)
    {
        this._x = val;
        for(let item of this.particles)
        {
            item.x = val;
        }
    }

    get y(): number
    {
        return this._y;
    }

    set y(val: number)
    {
        this._y = val;
        for(let item of this.particles)
        {
            item.y = val;
        }
    }

    setColor(r: number, g: number, b: number, a: number)
    {
        for(let item of this.particles)
        {
            item.setColor(r, g, b, a);
        }
    }

    async init(resList: string[], textureList: string[] = null)
    {
        if(this.particles.length > 0) return;

        let i = 0;
        for(let res of resList)
        {
            let textureName = null;
            if(textureList && i < textureList.length )
            {
                textureName = textureList[i];
            }

            // R.particles.StudioScore
            let p = await Particle2DCache.get(res, textureName);
            this.particles.push(p);
            i ++;
        }
    }
    

    async play(resList: string[], container: Laya.Sprite, from: Laya.Point, to: Laya.Point, duration = 1000, ease: Function =  Laya.Ease.linearNone, textureList: string[] = null): Promise<void>
    {
        await this.init(resList, textureList);

        this.x = from.x;
        this.y = from.y;

        for(let item of this.particles)
        {
            container.addChild(item);
            item.emitter.start();
            item.play();
        }

        Laya.Tween.clearAll(this);

        return new Promise<void>((resolve)=>
        {
            Laya.Tween.to(this, {x: to.x, y: to.y}, duration, ease, Laya.Handler.create(this, ()=>
            {
                resolve();
                this.onPlayEnd();
            }), 10);
         });
         
    }

    private onPlayEnd()
    {
        for(let item of this.particles)
        {
            item.stop();

        }

        Laya.timer.once(3000, this, this.stop);
    }

    stop()
    {
        Laya.Tween.clearAll(this);
        for(let item of this.particles)
        {
            item.stop();
            item.removeSelf();
            Particle2DCache.recover(item);
        }
        this.poolRecover();
    }
}