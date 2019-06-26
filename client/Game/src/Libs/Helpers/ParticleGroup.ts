import Particle2D from "../../EngineParticle/Particle2D";
import Particle2DCache from "./Particle2DCache";

/** 粒子组 */
export default class ParticleGroup
{
    // 粒子资源列表
    resList: string[];
    // 容器
    container: Laya.Sprite;

    // 粒子列表
    particles: Particle2D[] = [];

    private _x: number = 0;
    private _y: number = 0;
    private _scaleX: number = 1;
    private _scaleY: number = 1;
    private _posRangeScaleX: number = 1;
    private _posRangeScaleY: number = 1;
    private _posRangeScaleZ: number = 1;

    private _isPlaying: boolean = false;
    private helper:Laya.Sprite;

    generateHelperPoint()
    {
        this.helper = new Laya.Sprite();
        this.helper.graphics.drawCircle(0, 0, 5, '#FF0000', '#00FF00', 5);
        this.container.addChild(this.helper);
    }
    
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

        if(this.helper)
            this.helper.x = val;
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

        if(this.helper)
            this.helper.y = val;
    }

    setScale(x: number, y: number)
    {
        this._scaleX = x;
        this._scaleY = y;
        
        for(let item of this.particles)
        {
            item.scale(x, y)
        }
    }

    
    /** 设置发射范围 */
    setPosRangeScale(x: number = 1, y: number = 1, z: number = 1)
    {
        this._posRangeScaleX = x;
        this._posRangeScaleY = y;
        this._posRangeScaleZ = z;

        for(let item of this.particles)
        {
            item.setPosRangeScale(x, y, z)
        }
    }

    addToContainerBottom()
    {
        for(let item of this.particles)
        {
            this.container.addChildAt(item, 0);
        }
    }

    

    addToContainerTop()
    {
        for(let item of this.particles)
        {
            this.container.addChild(item);
        }
    }

    setContainer(container: Laya.Sprite)
    {
        this.container = container;
    }

    /** 初始化 */
    async init(container: Laya.Sprite, resList: string[], textureList: string[] = null)
    {
        this.container = container;
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

        this.x = this._x;
        this.y = this._y;
        this.setScale(this._scaleX, this._scaleY);
        this.setPosRangeScale(this._posRangeScaleX, this._posRangeScaleY, this._posRangeScaleZ);

        if(this._isPlaying)
        {
            this.play(this.duration);
        }
        else
        {
            this.stop();
        }
    }

    duration = -1;
    /** 播放 */
    play(duration: number = -1)
    {
        this._isPlaying = true;
        this.duration = duration;

        // if(this.container)
        // {
        //     for(let item of this.particles)
        //     {
        //         this.container.addChild(item);
        //     }
        // }
        
        for(let item of this.particles)
        {
            item.reset();
            item.play();
        }

        Laya.timer.clearAll(this);
        if(duration > 0)
        {
            Laya.timer.once(duration, this, this.stop);
        }
    }

    /** 停止 */
    stop()
    {
        this._isPlaying = false;
        
        for(let item of this.particles)
        {
            item.stop();
            item.removeSelf();
        }
    }

}