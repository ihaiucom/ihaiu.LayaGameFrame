import ParticleTemplateBase from "./ParticleTemplateBase";

/**
*<code>EmitterBase</code> 类是粒子发射器类
*/

export default class EmitterBase
{
    /**
    *积累的帧时间
    */
   _frameTime = 0;

   /**
    *粒子发射速率
    */
   _emissionRate = 60;

   /**
    *当前剩余发射时间
    */
   _emissionTime = 0;

   /**
    *发射粒子最小时间间隔
    */
   minEmissionTime = 1 / 60;

   protected _particleTemplate: ParticleTemplateBase;


   /**
	*开始发射粒子
	*@param duration 发射持续的时间(秒)
    */
   start(duration?: number)
   {
       (duration===void 0)&& (duration=Number.MAX_VALUE);
       if (this._emissionRate !=0)
			this._emissionTime=duration;
   }

   
	/**
	*停止发射粒子
	*@param clearParticles 是否清理当前的粒子
    */
   stop()
   {
       this._emissionTime = 0;
   }

   /**
	*清理当前的活跃粒子
	*@param clearTexture 是否清理贴图数据,若清除贴图数据将无法再播放
    */
    clear()
    {
        this._emissionTime = 0;
    }

    /**
	*发射一个粒子
	*
    */
   emit()
   {

   }

   /**
	*时钟前进
	*@param passedTime 前进时间
	*
    */
   advanceTime(passedTime: number)
   {
       (passedTime===void 0)&& (passedTime=1);

       this._emissionTime-=passedTime;
       if (this._emissionTime < 0)return;

       this._frameTime+=passedTime;
        if (this._frameTime < this.minEmissionTime)return;


        while (this._frameTime > this.minEmissionTime)
        {
			this._frameTime-=this.minEmissionTime;
			this.emit();
		}

   }

   /**
	*设置粒子粒子模板
	*@param particleTemplate 粒子模板
	*
    */
    set particleTemplate(particleTemplate: ParticleTemplateBase)
    {
        this._particleTemplate = particleTemplate;
    }

    /**
	*设置粒子发射速率
	*@param emissionRate 粒子发射速率 (个/秒)
    */
   set emissionRate(val: number)
   {
        if(val <= 0) return;

        this._emissionRate = val;
        (val > 0) && (this.minEmissionTime = 1 / val);
   }
    

	/**
	*获取粒子发射速率
	*@return 发射速率 粒子发射速率 (个/秒)
    */
    get emissionRate(): number
    {
        return this._emissionRate;
    }






}
