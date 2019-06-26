import ParticleGroup from "../../../Libs/Helpers/ParticleGroup";
import R from "../../../Config/Keys/R";

export class BuildingAnimation
{
    obj: fairygui.GLoader;

    
    private colorFilter = new Laya.ColorFilter();
    private _colorFilters = [];
    get colorFilters()
    {
        if(this._colorFilters.length == 0)
            this._colorFilters.push(this.colorFilter);
        return this._colorFilters;
    }

    private _colorBrightness: number = 0;
    get colorBrightness()
    {
        return this._colorBrightness;
    }

    set colorBrightness(val)
    {
        this._colorBrightness = val;
        this.colorFilter.reset();
        this.colorFilter.adjustColor(val, val, 0, 0);
        this.obj.filters = this.colorFilters;
    }

    private _emptyFilters = [];
    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.obj);
        this.obj.filters = this._emptyFilters;
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
                R.particles.DecorationShowIn_1_Star1,
                R.particles.DecorationShowIn_2_Star2,
                R.particles.DecorationShowIn_3_Line,
                R.particles.DecorationShowIn_4_Glow
            ];
            this.particleGroup = new ParticleGroup();
            await this.particleGroup.init(this.obj.displayObject, arr);
        }
        this.particleGroup.setPosRangeScale(this.obj.width / 200, this.obj.height / 300);
        this.particleGroup.setContainer(this.obj.displayObject);
		// this.particleGroup.addToContainerTop();
		// this.particleGroup.generateHelperPoint();
		this.particleGroup.x = this.obj.width >> 1;
		this.particleGroup.y = this.obj.height * 0.8;
		this.particleGroup.stop();
    }

    playShowIn(url?: string)
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
        Laya.Tween.clearAll(this.obj);
        

        let obj = this.obj;
        Laya.Tween.to(obj, {alpha: 0.2}, 170, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>{
            obj.url = url;
        }), 0);
        Laya.Tween.to(obj, {alpha: 1.0}, 200, Laya.Ease.quadOut, null, 0 + 170);
		this.particleGroup.addToContainerTop();
        this.particleGroup.play();
        Laya.timer.once(400, this, this.onPlayEnd);
    }

    private onPlayEnd()
    {
        this.clear();
    }
}

export default class BuildingAnimationHelper 
{
    static async showIn(obj: fairygui.GLoader, url?: string)
    {
        let ctrl = Laya.Pool.createByClass(BuildingAnimation);
        await ctrl.init(obj);
        ctrl.playShowIn(url);
    }
}