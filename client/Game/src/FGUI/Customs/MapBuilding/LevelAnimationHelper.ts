import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";
import R from "../../../Config/Keys/R";

export class LevelAnimation
{
    obj: any;

    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
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
            let arr = [
                R.particles.BuildingLevelShow
            ];
            this.particleGroup = new ParticleGroup();
            await this.particleGroup.init(this.obj, arr);
        }
        this.particleGroup.setPosRangeScale(this.obj.width / 100, this.obj.height / 150);
        this.particleGroup.setContainer(this.obj);
		// this.particleGroup.addToContainerTop();
		// this.particleGroup.generateHelperPoint();
		this.particleGroup.x = this.obj.width >> 1;
		this.particleGroup.y = this.obj.height * 0.8;
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