import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";
import R from "../../../Config/Keys/R";

export class DecorationAnimation
{
    obj: any;

    clear()
    {
        this.particleGroup.stop();
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
                R.particles.DecorationShowIn_1_Star1,
                R.particles.DecorationShowIn_2_Star2,
                R.particles.DecorationShowIn_3_Line,
                R.particles.DecorationShowIn_4_Glow
            ];
            this.particleGroup = new ParticleGroup();
            await this.particleGroup.init(this.obj, arr);
        }
        this.particleGroup.setPosRangeScale(this.obj.width / 200, this.obj.height / 300);
        this.particleGroup.setContainer(this.obj);
		// this.particleGroup.addToContainerTop();
		// this.particleGroup.generateHelperPoint();
		this.particleGroup.x = this.obj.width >> 1;
		this.particleGroup.y = this.obj.height * 0.6;
		this.particleGroup.stop();
    }

    playShowIn(time:number, y?: number)
    {
        if (time) {
            this.particleGroup.addToContainerTop();
            this.particleGroup.play(-1);
            Laya.timer.once(time, this, this.onPlayEnd);   
        }
    }

    private onPlayEnd()
    {
        this.clear();
    }
}

export default class DecorationAnimationHelper
{

    static async showIn(obj: any,time: number, y?: number)
    {
        let ctrl = Laya.Pool.createByClass(DecorationAnimation);
        await ctrl.init(obj);
        ctrl.playShowIn(time, y);
        return ctrl;
    }


}