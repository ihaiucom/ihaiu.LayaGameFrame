import Render = Laya.Render;
import BlendMode = Laya.BlendMode;
import DrawParticleCmd = Laya.DrawParticleCmd;
import ParticleSetting from "./ParticleSetting";
import ParticleTemplate2D from "./ParticleTemplate2D";
import Emitter2D from "./Emitter2D";



export default class Particle2D extends Laya.Sprite
{
    private _matrix4 = [
        1,0,0,0,
        0,1,0,0,
        0,0,1,0,
        0,0,0,1];

    private _particleTemplate : ParticleTemplate2D;
    private _emitter: Emitter2D;

    /** 是否字段播放 */
    autoPlay: boolean = true;
    tempCmd: DrawParticleCmd;

    constructor(setting: ParticleSetting)
    {
        super();
        this.customRenderEnable = true;
        if(setting)
            this.setParticleSetting(setting);
    }

    /**
	*加载粒子文件
	*@param url 粒子文件地址
    */
    load(url: string)
    {
        Laya.loader.load(url, Laya.Handler.create(this, this.setParticleSetting), null, Laya.Loader.JSON);
    }

    
	/**
	*设置粒子配置数据
	*@param settings 粒子配置数据
    */
   setParticleSetting(setting: ParticleSetting)
   {
       if (!setting)return this.stop();

       ParticleSetting.checkSetting(setting);

       if(Render.isConchApp)
       {
           this._particleTemplate = new ParticleTemplate2D(setting);

           var sBlendMode = BlendMode.NAMES[setting.blendState];
           this.blendMode = sBlendMode;

           this.tempCmd = this.graphics._saveToCmd(null, 
                                                    DrawParticleCmd.create.call(this.graphics,this._particleTemplate)
                                                );
            
			this._setGraphicsCallBack();

       }
       else
       {
           if(Render.isWebGL)
           {
               this.customRenderEnable = true;
               this._particleTemplate = new ParticleTemplate2D(setting);
               this.graphics._saveToCmd(null, DrawParticleCmd.create(this._particleTemplate)  );
           }
       }

       if(!this._emitter)
       {
           this._emitter = new Emitter2D(<any>this._particleTemplate);
       }
       else
       {
           this._emitter.template=<any>this._particleTemplate;
       }

       if (this.autoPlay)
       {
           this.emitter.start();
           this.play();
       }

   }

   reset()
   {
       if(this._particleTemplate)
            this._particleTemplate.reset();
   }

   isPlaying: boolean = false;
   /**
	*播放
    */
    play()
    {
        if(this.isPlaying)
            return;
        this.isPlaying = true;
        Laya.timer.frameLoop(1, this, this._loop);
        if(this._particleTemplate.settings.life > 0)
        {
            Laya.timer.once(this._particleTemplate.settings.life * 1000, this, this.stop);
        }
    }

    
	/**
	*停止
    */
    stop()
    {
        this.isPlaying = false;
		Laya.timer.clear(this, this._loop);
        Laya.timer.clearAll(this);
    }

    private _loop()
    {
        this.advanceTime(1 / 60);
    }

    
	/**
	*时钟前进
	*@param passedTime 时钟前进时间
    */
   advanceTime(passedTime: number)
   {
       (passedTime === void 0) && (passedTime = 1);

       if(this._emitter)
       {
           this._emitter.advanceTime(passedTime);
       }
   }

   private isSetMmat: boolean  = false;
   customRender(context,x,y)
   {
       if(Render.isWebGL)
       {
           if(this.isSetMmat)
           {
            // && this._particleTemplate.settings.isLocal
            //    return;
           }

            this.isSetMmat = true;
            this._matrix4[0]=context._curMat.a;
            this._matrix4[1]=context._curMat.b;
            this._matrix4[4]=context._curMat.c;
            this._matrix4[5]=context._curMat.d;
            this._matrix4[12]=context._curMat.tx;
            this._matrix4[13]=context._curMat.ty;

            var sv=(<ParticleTemplate2D>this._particleTemplate).sv;
            // TODO ZF
			sv["u_mmat"]=this._matrix4;
			// sv.mmat=this._matrix4;
       }
   }

   destroy(destroyChild?: boolean)
   {
       (destroyChild === void 0) && (destroyChild = true);

       if((this._particleTemplate instanceof ParticleTemplate2D))
       {
           this._particleTemplate.dispose();
       }
       
       super.destroy(destroyChild);
   }

   
	/**
	*设置 粒子文件地址
	*@param path 粒子文件地址
    */
    set url(url)
    {
        this.load(url);
    }

    
	/**
	*获取粒子发射器
    */
    get emitter()
    {
        return this._emitter;
    }

    setStartColor(r: number, g: number, b: number, a: number)
    {
        let arr = this._particleTemplate.settings.minStartColor;
        arr[0] = r;
        arr[1] = g;
        arr[2] = b;
        arr[3] = a;

        arr = this._particleTemplate.settings.maxStartColor;
        arr[0] = r;
        arr[1] = g;
        arr[2] = b;
        arr[3] = a;
    }

    setEndColor(r: number, g: number, b: number, a: number)
    {
        let arr = this._particleTemplate.settings.minEndColor;
        arr[0] = r;
        arr[1] = g;
        arr[2] = b;
        arr[3] = a;

        arr = this._particleTemplate.settings.maxEndColor;
        arr[0] = r;
        arr[1] = g;
        arr[2] = b;
        arr[3] = a;
    }

    setColor(r: number, g: number, b: number, a: number)
    {
        this.setStartColor(r,g,b,a);
        this.setEndColor(r,g,b,a);
    }

    /** 设置发射范围 */
    setPosRangeScale(x: number, y: number, z: number)
    {
        this.emitter._posRange[0] = this._particleTemplate.settings.positionVariance[0] * x;
        this.emitter._posRange[1] = this._particleTemplate.settings.positionVariance[1] * x;
        this.emitter._posRange[2] = this._particleTemplate.settings.positionVariance[2] * x;
    }

}

window["Particle2D"] = Particle2D;