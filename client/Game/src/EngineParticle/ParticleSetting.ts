export default class ParticleSetting
{
    
    /** 是否本地坐标系， 会跟随主容器移动 */
    isLocal: boolean = false;

    /**原始贴图*/
    sourceTextureName=null;
    
    /**贴图*/
    textureName=null;
    /**贴图个数,默认为1可不设置*/
    textureCount=1;
    /**由于循环队列判断算法，最大饱和粒子数为maxPartices-1*/
    maxPartices=100;

    /**粒子生命时间(单位:秒）*/
    life= -1;

    /**粒子持续时间(单位:秒）*/
    duration=1;
    /**如果大于0，某些粒子的持续时间会小于其他粒子,并具有随机性(单位:无）*/
    ageAddScale=0;
    /**粒子受发射器速度的敏感度（需在自定义发射器中编码设置）*/
    emitterVelocitySensitivity=1;
    /**最小开始尺寸（单位：2D像素、3D坐标）*/
    minStartSize=100;
    /**最大开始尺寸（单位：2D像素、3D坐标）*/
    maxStartSize=100;
    /**最小结束尺寸（单位：2D像素、3D坐标）*/
    minEndSize=100;
    /**最大结束尺寸（单位：2D像素、3D坐标）*/
    maxEndSize=100;
    /** 最小角度 */
    minAngle = 0;
    /** 最大角度 */
    maxAngle = 360;
    /**最小水平速度（单位：2D像素、3D坐标）*/
    minHorizontalVelocity=0;
    /**最大水平速度（单位：2D像素、3D坐标）*/
    maxHorizontalVelocity=0;
    /**最小垂直速度（单位：2D像素、3D坐标）*/
    minVerticalVelocity=0;
    /**最大垂直速度（单位：2D像素、3D坐标）*/
    maxVerticalVelocity=0;
    /**等于1时粒子从出生到消亡保持一致的速度，等于0时粒子消亡时速度为0，大于1时粒子会保持加速（单位：无）*/
    endVelocity=1;
    /**最小旋转速度（单位：2D弧度/秒、3D弧度/秒）*/
    minRotateSpeed=0;
    /**最大旋转速度（单位：2D弧度/秒、3D弧度/秒）*/
    maxRotateSpeed=0;
    /**最小开始半径（单位：2D像素、3D坐标）*/
    minStartRadius=0;
    /**最大开始半径（单位：2D像素、3D坐标）*/
    maxStartRadius=0;
    /**最小结束半径（单位：2D像素、3D坐标）*/
    minEndRadius=0;
    /**最大结束半径（单位：2D像素、3D坐标）*/
    maxEndRadius=0;
    /**最小水平开始弧度（单位：2D弧度、3D弧度）*/
    minHorizontalStartRadian=0;
    /**最大水平开始弧度（单位：2D弧度、3D弧度）*/
    maxHorizontalStartRadian=0;
    /**最小垂直开始弧度（单位：2D弧度、3D弧度）*/
    minVerticalStartRadian=0;
    /**最大垂直开始弧度（单位：2D弧度、3D弧度）*/
    maxVerticalStartRadian=0;
    /**是否使用结束弧度,false为结束时与起始弧度保持一致,true为根据minHorizontalEndRadian、maxHorizontalEndRadian、minVerticalEndRadian、maxVerticalEndRadian计算结束弧度。*/
    useEndRadian=true;
    /**最小水平结束弧度（单位：2D弧度、3D弧度）*/
    minHorizontalEndRadian=0;
    /**最大水平结束弧度（单位：2D弧度、3D弧度）*/
    maxHorizontalEndRadian=0;
    /**最小垂直结束弧度（单位：2D弧度、3D弧度）*/
    minVerticalEndRadian=0;
    /**最大垂直结束弧度（单位：2D弧度、3D弧度）*/
    maxVerticalEndRadian=0;
    /**false代表RGBA整体插值，true代表RGBA逐分量插值*/
    colorComponentInter=false;
    /**false代表使用参数颜色数据，true代表使用原图颜色数据*/
    disableColor=false;
    /**混合模式，待调整，引擎中暂无BlendState抽象*/
    blendState=0;
    /**发射器类型,"point","box","sphere","ring"*/
    emitterType="null";
    /**发射器发射速率*/
    emissionRate=10;
    /**球发射器半径*/
    sphereEmitterRadius=1;
    /**球发射器速度*/
    sphereEmitterVelocity=0;
    /**球发射器速度随机值*/
    sphereEmitterVelocityAddVariance=0;
    /**环发射器半径*/
    ringEmitterRadius=30;
    /**环发射器速度*/
    ringEmitterVelocity=0;
    /**环发射器速度随机值*/
    ringEmitterVelocityAddVariance=0;
    /**环发射器up向量，0代表X轴,1代表Y轴,2代表Z轴*/
    ringEmitterUp=2;
    gravity=new Float32Array([0,0,0]);
    minStartColor=new Float32Array([1,1,1,1]);
    maxStartColor=new Float32Array([1,1,1,1]);
    minEndColor=new Float32Array([1,1,1,1]);
    maxEndColor=new Float32Array([1,1,1,1]);
    pointEmitterPosition=new Float32Array([0,0,0]);
    pointEmitterPositionVariance=new Float32Array([0,0,0]);
    pointEmitterVelocity=new Float32Array([0,0,0]);
    pointEmitterVelocityAddVariance=new Float32Array([0,0,0]);
    boxEmitterCenterPosition=new Float32Array([0,0,0]);
    boxEmitterSize=new Float32Array([0,0,0]);
    boxEmitterVelocity=new Float32Array([0,0,0]);
    boxEmitterVelocityAddVariance=new Float32Array([0,0,0]);
    sphereEmitterCenterPosition=new Float32Array([0,0,0]);
    ringEmitterCenterPosition=new Float32Array([0,0,0]);
    positionVariance=new Float32Array([0,0,0]);

    private static _defaultSetting: ParticleSetting;
    private static get defaultSetting()
    {
        if(!this._defaultSetting)
            this._defaultSetting = new ParticleSetting();

        return this._defaultSetting;
    }

    static checkSetting(setting: ParticleSetting)
    {
        let key;
        for(key in ParticleSetting.defaultSetting)
        {
            if(!setting.hasOwnProperty(key))
            {
                setting[key] = ParticleSetting.defaultSetting[key];
            }
        }

        
		setting.endVelocity=+setting.endVelocity;
		setting.gravity[0]=+setting.gravity[0];
		setting.gravity[1]=+setting.gravity[1];
		setting.gravity[2]=+setting.gravity[2];
    }

}