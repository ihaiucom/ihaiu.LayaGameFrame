import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";
import R from "../../../Config/Keys/R";

export class LevelAnimation
{
    obj: any;

    clear()
    {
        Laya.Tween.clearAll(this.obj);
        this.particleGroup.stop();
        this.obj.alpha = 1.0;
        this.obj = null;
        Laya.Pool.recoverByClass(this);
    }

    async init(obj: any)
    {
        this.obj = obj;
        await this.installParticle();
    }

     
    particleGroup: ParticleGroup;

    async installParticle()
    {
        if(!this.particleGroup)
        {
            this.particleGroup = new ParticleGroup();
            let arr = [];
            if (this.obj.width < 160 && this.obj.height < 160) {
                arr.push(R.particles.BuildingLevelShow_Yun);
                this.particleGroup.setPosRangeScale(this.obj.width / 160, this.obj.height / 160);
            }
            if (this.obj.width < 240 && this.obj.height < 240) {
                arr.push(R.particles.BuildingLevelShow_YunBig1);
                this.particleGroup.setPosRangeScale(this.obj.width / 240, this.obj.height / 240);
            }
            if (this.obj.width < 360 && this.obj.height < 360) {
                arr.push(R.particles.BuildingLevelShow_YunBig2);
                this.particleGroup.setPosRangeScale(this.obj.width / 360, this.obj.height / 360);
            }
            
            await this.particleGroup.init(this.obj, arr);
        }
        
        this.particleGroup.setContainer(this.obj);
		this.particleGroup.x = this.obj.width * 0.5;
		this.particleGroup.y = this.obj.height * 0.5;
		this.particleGroup.stop();
    }

    playShowIn(loop: boolean = false)
    {
		this.particleGroup.addToContainerTop();
        this.particleGroup.play(-1);
        if (!loop) {
            this.onPlayEnd();
        }
    }

    private onPlayEnd()
    {
        this.clear();
    }
}   
    
export default class LevelAnimationHelper {
    static async showIn(obj: any, loop: boolean = false): Promise<LevelAnimation>
    {
        let ctrl = Laya.Pool.createByClass(LevelAnimation);
        await ctrl.init(obj);
        ctrl.playShowIn(loop);
        return ctrl;
    }
}