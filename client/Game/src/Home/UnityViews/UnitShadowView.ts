import Res from "../../Config/Keys/Res";
import R from "../../Config/Keys/R";
import Game from "../../Game";

export default class UnitShadowView
{
    displayObject: Laya.Sprite;
    
    /** 是否初始化 */
    isInstalled: boolean = false;

     /** 初始化 */
     install()
     {
         if(this.isInstalled) return;
         this.isInstalled = true;
        let path = Res.getSpritePathHasExt(R.sprite.Unit_Shadow);
        this.displayObject = new Laya.Sprite();
        this.displayObject.loadImage(path);
     }

     
    /** 销毁 */
    destory()
    {
        if(this.displayObject)
        {
            this.displayObject.removeSelf();
        }

        this.isInstalled = false;
        this.poolRecover();
    }

    
    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Pool.recoverByClass(this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): UnitShadowView
    {
        return Laya.Pool.createByClass(UnitShadowView);
    }

    
    /** 设置位置 */
    setXY(x: number, y: number)
    {
        this.displayObject.pos(x - 28, y - 13);
    }

    
    /** 是否可见 */
    protected _visible = true;
    get visible(): boolean
    {
        return this._visible;
    }

    setVisible(val: boolean)
    {
        this._visible = val;
        this.displayObject.visible = val;
    }

    

    /** 视图容器 */
    protected parent: Laya.Sprite;
    setParent(parent: Laya.Sprite)
    {
        this.parent = parent;
        parent.addChild(this.displayObject);
    }

    
    /**
     * 播放动画
     *
     * @param	nameOrIndex	动画名字或者索引
     * @param	loop		是否循环播放
     * @param	force		false,如果要播的动画跟上一个相同就不生效,true,强制生效
     */
    playAction(nameOrIndex: any, loop: boolean = true, force: boolean = false): void 
    {
        let config = Game.config.actorAction.getConfig(nameOrIndex);
        if(config)
        {
            this.displayObject.visible = config.shadowVisiable && this._visible;
        }

    }
}