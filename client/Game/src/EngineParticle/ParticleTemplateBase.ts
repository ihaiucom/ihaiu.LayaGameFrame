import ParticleSetting from "./ParticleSetting";

export default class ParticleTemplateBase
{
    /**
    *粒子配置数据
    */
   settings: ParticleSetting = null;
   
    /**
    *粒子贴图
    */
   texture: Laya.Texture = null;
   
   x: number = 0;
   y: number = 0;

   /**
	*添加一个粒子
	*@param position 粒子位置
	*@param velocity 粒子速度
	*
    */
   addParticleArray(position: Float32Array, velocity: Float32Array)
   {

   }

   
	reset()
	{
    }
}