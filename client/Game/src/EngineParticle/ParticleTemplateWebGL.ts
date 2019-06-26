import WebGLContext2D = Laya.WebGLContext2D;
import Render = Laya.Render;
import MeshParticle2D = Laya.MeshParticle2D;
import ParticleTemplateBase from "./ParticleTemplateBase";
import ParticleData from "./ParticleData";

export default class ParticleTemplateWebGL extends ParticleTemplateBase
{
    /** 顶点数据 */
    protected _vertices: Float32Array;
    protected _mesh: Laya.MeshParticle2D;
    protected _conchMesh: any;
    protected _floatCountPerVertex: number = 29;

    //0~3为CornerTextureCoordinate,
    //4~6为Position,
    //7~9Velocity,
    //10到13为StartColor,
    //14到17为EndColor,
    //18到20位SizeRotation，
    //21到22位Radius,
    //23到26位Radian，
    //27为DurationAddScaleShaderValue,
    //28为Time
    protected _firstActiveElement: number = 0;
    protected _firstNewElement: number = 0;
    protected _firstFreeElement: number = 0;
    protected _firstRetiredElement: number = 0;
    _currentTime: number = 0;
    protected _drawCounter: number = 0;

    constructor(setting)
    {
        super();
        this.settings = setting;
    }

    reUse(context: WebGLContext2D, pos: number): number
    {
        return 0;
    }

    /** 初始化 */
    protected initialize(): void
    {
        var floatStride=0;
		if (Render.isConchApp){
			this._vertices=this._conchMesh._float32Data;
			floatStride=MeshParticle2D.const_stride / 4;
		}
		else{
			this._vertices=this._mesh._vb.getFloat32Array();
			floatStride=this._mesh._stride / 4;
		};
		
		this.floatStride = floatStride;
		var bufi=0;
		var bufStart=0;
		for (var i=0;i < this.settings.maxPartices;i++){
			var random=Math.random();
			var cornerYSegement=this.settings.textureCount ? 1.0 / this.settings.textureCount :1.0;
			var cornerY=NaN;
			for (cornerY=0;cornerY < this.settings.textureCount;cornerY+=cornerYSegement){
				if (random < cornerY+cornerYSegement)
					break ;
			}
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=0;
			this._vertices[bufi++]=cornerY;
			bufi=(bufStart+=floatStride);
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=cornerY;
			bufi=bufStart+=floatStride;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=cornerY+cornerYSegement;
			bufi=bufStart+=floatStride;
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=0;
			this._vertices[bufi++]=cornerY+cornerYSegement;
			bufi=bufStart+=floatStride;
		}

	}
	
	floatStride: number = 29;
	reset()
	{
		var floatStride=0;
		if (Render.isConchApp){
			floatStride=MeshParticle2D.const_stride / 4;
		}
		else{
			floatStride=this._mesh._stride / 4;
		};
		this.floatStride = floatStride;
		var bufi=0;
		var bufStart=0;

		for (var i=0;i < this.settings.maxPartices;i++)
		{
			var random=Math.random();
			var cornerYSegement=this.settings.textureCount ? 1.0 / this.settings.textureCount :1.0;
			var cornerY=NaN;
			for (cornerY=0;cornerY < this.settings.textureCount;cornerY+=cornerYSegement){
				if (random < cornerY+cornerYSegement)
					break ;
			}

			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=0;
			this._vertices[bufi++]=cornerY;
			bufi=(bufStart+=floatStride);
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=cornerY;
			bufi=bufStart+=floatStride;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=cornerY+cornerYSegement;
			bufi=bufStart+=floatStride;
			this._vertices[bufi++]=-1;
			this._vertices[bufi++]=1;
			this._vertices[bufi++]=0;
			this._vertices[bufi++]=cornerY+cornerYSegement;
			bufi=bufStart+=floatStride;

		}
		this._firstActiveElement = 0;
		this._firstNewElement = 0;
		this._firstFreeElement = 0;
		this._firstRetiredElement = 0;
		this._drawCounter = 0;
		this._currentTime=0;
	}

    update(elapsedTime: number): void
    {
		this._currentTime+=elapsedTime / 1000;
		
		if(this.settings.isLocal)
		{
			this.updateAllPosition();
		}
		this.retireActiveParticles();
		this.freeRetiredParticles();
		if (this._firstActiveElement==this._firstFreeElement)
			this._currentTime=0;
		if (this._firstRetiredElement==this._firstActiveElement)
			this._drawCounter=0;

    }

    /** 注销活动粒子 */
    retireActiveParticles()
    {
        var epsilon=0.0001;
		var particleDuration=this.settings.duration;
		while (this._firstActiveElement !=this._firstNewElement){
			var offset=this._firstActiveElement *this._floatCountPerVertex *4;
			
			
			var index=offset+28;
			var particleAge=this._currentTime-this._vertices[index];
			particleAge *=(1.0+this._vertices[offset+27]);
			if (particleAge+epsilon < particleDuration)
				break ;
			this._vertices[index]=this._drawCounter;
			this._firstActiveElement++;
			if (this._firstActiveElement >=this.settings.maxPartices)
				this._firstActiveElement=0;
			
		}
    }

    /** 注销自由粒子 */
    freeRetiredParticles()
    {
        while (this._firstRetiredElement !=this._firstActiveElement){
			var age=this._drawCounter-this._vertices[this._firstRetiredElement *this._floatCountPerVertex *4+28];
			if (age < 3)
				break ;
			this._firstRetiredElement++;
			if (this._firstRetiredElement >=this.settings.maxPartices)
				this._firstRetiredElement=0;
		}

    }

    addNewParticlesToVertexBuffer(): void
    {

	}
	
	private offsetX = 0;
	private offsetY = 0;
	private lastX = null;
	private lastY = 0;
	updateAllPosition()
	{
		if(this.lastX != null)
		{
			this.offsetX = this.x - this.lastX;
			this.offsetY = this.y - this.lastY;
			// if(this.offsetX < 0.1 && this.offsetY < 0.1)
			// 	return;

			var bufi=0;
			var bufStart=0;
			var floatStride = this.floatStride;

			for (var i=0;i < this.settings.maxPartices;i++)
			{
				bufStart = (i * 4) * floatStride;
				for (let vi = 0; vi < 4; vi ++)
				{
					bufi = bufStart + vi * floatStride + 4;

					this._vertices[bufi++] += this.offsetX;
					this._vertices[bufi++] += this.offsetY;
				}
			}
		}

		this.lastX = this.x;
		this.lastY = this.y;

	}

    //由于循环队列判断算法，
    //当下一个freeParticle等于retiredParticle时不添加例子，意味循环队列中永远有一个空位。
    //（由于此判断算法快速、简单，所以放弃了使循环队列饱和的复杂算法（需判断freeParticle在retiredParticle前、后两种情况并不同处理））
    addParticleArray(position: Float32Array, velocity: Float32Array): void
    {
        var nextFreeParticle=this._firstFreeElement+1;

		if (nextFreeParticle >=this.settings.maxPartices)
            nextFreeParticle=0;
            
		if (nextFreeParticle===this._firstRetiredElement)
            return;
            
        var particleData=ParticleData.Create(this.settings,position,velocity, this._currentTime);
        
        var startIndex=this._firstFreeElement *this._floatCountPerVertex *4;
        
        for (var i=0;i < 4;i++)
        {
			var j=0,offset=0;
			for (j=0,offset=4;j < 3;j++)
			{
				this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.position[j];
			}
            
			for (j=0,offset=7;j < 3;j++)
                this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.velocity[j];
            
			for (j=0,offset=10;j < 4;j++)
                this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.startColor[j];
            
			for (j=0,offset=14;j < 4;j++)
                this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.endColor[j];
            
			for (j=0,offset=18;j < 3;j++)
                this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.sizeRotation[j];
            
			for (j=0,offset=21;j < 2;j++)
                this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.radius[j];
            
			for (j=0,offset=23;j < 4;j++)
                this._vertices[startIndex+i *this._floatCountPerVertex+offset+j]=particleData.radian[j];
            
			this._vertices[startIndex+i *this._floatCountPerVertex+27]=particleData.durationAddScale;
			this._vertices[startIndex+i *this._floatCountPerVertex+28]=particleData.time;
        }
        
		this._firstFreeElement=nextFreeParticle;

    }
}