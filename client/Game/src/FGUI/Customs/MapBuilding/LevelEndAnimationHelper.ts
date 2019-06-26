import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";
import R from "../../../Config/Keys/R";

export class LevelAnimation
{
    obj: fairygui.GLoader;

    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.obj);
        this.particleGroup.stop();
        this.obj = null;
        Laya.Pool.recoverByClass(this);
    }

    async init(obj: fairygui.GLoader)
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
            await this.particleGroup.init(this.obj.displayObject, arr);
        }
        this.particleGroup.setPosRangeScale(this.obj.width / 100, this.obj.height / 150);
        this.particleGroup.setContainer(this.obj.displayObject);
		// this.particleGroup.addToContainerTop();
		// this.particleGroup.generateHelperPoint();
		this.particleGroup.x = this.obj.width >> 1;
		this.particleGroup.y = this.obj.height * 0.8;
		this.particleGroup.stop();
    }

    playShowIn(time?: number)
    {
		this.particleGroup.addToContainerTop();
        this.particleGroup.play(-1);
        Laya.timer.once(time, this, this.onPlayEnd);
    }

    private onPlayEnd()
    {
        this.clear();
    }
}   

export default class LevelEndAnimationHelper {
    
}