import MathUtil = Laya.MathUtil;
import ParticleSetting from "./ParticleSetting";

export default class ParticleData
{
    // 位置 [x, y, z]
    position: Float32Array;
    // 速度 [x, y, z]
    velocity: Float32Array;
    // 起始 颜色 [r, g, b, a]
    startColor: Float32Array;
    // 结束 颜色 [r, g, b, a]
    endColor: Float32Array;
    // 大小和旋转 [startSize, endSize,  rotateSpeed]
    sizeRotation: Float32Array;
    // 半径 [StartRadius,EndRadius]
    radius: Float32Array;
    // 弧度 [HorizontalStartRadian,VerticalStartRadian, HorizontalEndRadian, VerticalEndRadian]
    radian: Float32Array;
    // 缩放持续时间
    durationAddScale: number;
    // 绘制次数
    time: number;

    constructor()
    {

    }
    
    static Create(settings: ParticleSetting, position: Float32Array, velocity: Float32Array, time: number): ParticleData
    {
        var particleData=new ParticleData();
        particleData.position=position;


        //=====================
        // 设置速度 [x, y, z]
        //---------------------

        // 缩放 e = f * b;
        MathUtil.scaleVector3(velocity, settings.emitterVelocitySensitivity, ParticleData._tempVelocity);
        // 水平速度（单位：2D像素、3D坐标）
        var horizontalVelocity: number = MathUtil.lerp(settings.minHorizontalVelocity, settings.maxHorizontalVelocity, Math.random());
        // 水平角度
        var horizontalAngle=MathUtil.lerp(settings.minAngle, settings.maxAngle, Math.random());
        
        
        // 水平速度
		ParticleData._tempVelocity[0] += horizontalVelocity * Math.cos(horizontalAngle);
        ParticleData._tempVelocity[1] += horizontalVelocity * Math.sin(horizontalAngle);
        // 垂直速度
        ParticleData._tempVelocity[1] += MathUtil.lerp(settings.minVerticalVelocity, settings.maxVerticalVelocity, Math.random());
        
        particleData.velocity = ParticleData._tempVelocity;



        //=====================
        // 设置颜色 [r, g, b, a]
        //---------------------
        
		particleData.startColor=ParticleData._tempStartColor;
        particleData.endColor=ParticleData._tempEndColor;
        
		var i=0;
        if (settings.disableColor)
        {
            for (i=0;i < 3;i++)
            {
				particleData.startColor[i]=1;
				particleData.endColor[i]=1;
            }
            
            // alpha
			particleData.startColor[i] = MathUtil.lerp(settings.minStartColor[i], settings.maxStartColor[i], Math.random());
			particleData.endColor[i] = MathUtil.lerp(settings.minEndColor[i], settings.maxEndColor[i], Math.random());
		}
        else
        {
            if (settings.colorComponentInter)
            {
                for (i=0;i < 4;i++)
                {
					particleData.startColor[i]=MathUtil.lerp(settings.minStartColor[i], settings.maxStartColor[i], Math.random());
					particleData.endColor[i]=MathUtil.lerp(settings.minEndColor[i], settings.maxEndColor[i], Math.random());
				}
            }
            else 
            {
				MathUtil.lerpVector4(settings.minStartColor, settings.maxStartColor, Math.random(), particleData.startColor);
				MathUtil.lerpVector4(settings.minEndColor, settings.maxEndColor, Math.random(), particleData.endColor);
			}
        }
        
        
        //=====================
        // 设置 大小和旋转速度 [startSize, endSize,  rotateSpeed]
        //---------------------
		particleData.sizeRotation= ParticleData._tempSizeRotation;
		var sizeRandom=Math.random();
		particleData.sizeRotation[0] = MathUtil.lerp(settings.minStartSize,settings.maxStartSize,sizeRandom);
		particleData.sizeRotation[1] = MathUtil.lerp(settings.minEndSize,settings.maxEndSize,sizeRandom);
        particleData.sizeRotation[2] = MathUtil.lerp(settings.minRotateSpeed,settings.maxRotateSpeed,Math.random());
        

        //=====================
        // 设置 半径 [StartRadius,EndRadius]
        //---------------------

		particleData.radius=ParticleData._tempRadius;
		var radiusRandom=Math.random();
		particleData.radius[0]=MathUtil.lerp(settings.minStartRadius,settings.maxStartRadius,radiusRandom);
        particleData.radius[1]=MathUtil.lerp(settings.minEndRadius,settings.maxEndRadius,radiusRandom);
        
        //=====================
        // 设置 弧度 [HorizontalStartRadian,VerticalStartRadian, HorizontalEndRadian, VerticalEndRadian]
        //---------------------
		particleData.radian=ParticleData._tempRadian;
		particleData.radian[0]=MathUtil.lerp(settings.minHorizontalStartRadian,settings.maxHorizontalStartRadian,Math.random());
		particleData.radian[1]=MathUtil.lerp(settings.minVerticalStartRadian,settings.maxVerticalStartRadian,Math.random());
		var useEndRadian=settings.useEndRadian;
		particleData.radian[2]=useEndRadian?MathUtil.lerp(settings.minHorizontalEndRadian,settings.maxHorizontalEndRadian,Math.random()):particleData.radian[0];
		particleData.radian[3]=useEndRadian?MathUtil.lerp(settings.minVerticalEndRadian,settings.maxVerticalEndRadian,Math.random()):particleData.radian[1];
        
        
        // 设置 缩放持续时间
        particleData.durationAddScale=settings.ageAddScale *Math.random();
        
        // 设置 次数
        particleData.time=time;
        
		return particleData;

    }



    // 速度 [x, y, z]
    private static ___tempVelocity: Float32Array;
    private static get _tempVelocity()
    {
        if(!this.___tempVelocity)
            this.___tempVelocity=new Float32Array(3);

        return this.___tempVelocity;
    }


    // 起始颜色 [r, g, b, a]
    private static __tempStartColor: Float32Array;
    private static get _tempStartColor()
    {
        if(!this.__tempStartColor)
            this.__tempStartColor=new Float32Array(4);

        return this.__tempStartColor;
    }


    
    // 结束颜色 [r, g, b, a]
    private static __tempEndColor: Float32Array;
    private static get _tempEndColor()
    {
        if(!this.__tempEndColor)
            this.__tempEndColor=new Float32Array(4);

        return this.__tempEndColor;
    }



    // 大小和旋转速度 [startSize, endSize,  rotateSpeed]
    private static __tempSizeRotation: Float32Array;
    private static get _tempSizeRotation()
    {
        if(!this.__tempSizeRotation)
            this.__tempSizeRotation=new Float32Array(3);

        return this.__tempSizeRotation;
    }


    // 半径 [StartRadius,EndRadius]
    private static __tempRadius: Float32Array;
    private static get _tempRadius()
    {
        if(!this.__tempRadius)
            this.__tempRadius=new Float32Array(2);

        return this.__tempRadius;
    }
    
    // 弧度 [HorizontalStartRadian,VerticalStartRadian, HorizontalEndRadian, VerticalEndRadian]
    private static __tempRadian: Float32Array;
    private static get _tempRadian()
    {
        if(!this.__tempRadian)
            this.__tempRadian=new Float32Array(4);

        return this.__tempRadian;
    }
    
}