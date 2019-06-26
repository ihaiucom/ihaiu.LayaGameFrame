import AbstractUnitView from "./AbstractUnitView";
import GameSkeleton from "../SkeletonCaches/GameSkeleton";
import Game from "../../Game";
import { Engine } from "../../Libs/ECS/Engine";
import UnitData from "../Units/Components/UnitData";
import MouseDownLong from "../../Libs/Helpers/MouseDownLong";

export default class SkeletonView extends AbstractUnitView
{
    skeletonPath: string;
    texturePath: string;
    skeleton: Laya.Skeleton;



    /** 初始化 */
    install(skeletonPath: string, texturePath: string, engine: Engine, unitData: UnitData)
    {
        console.log(`SkeletonView install  ${skeletonPath}, ${texturePath}`);
        this.engine = engine;
        this.unitData = unitData;
        this.skeletonPath = skeletonPath;
        this.texturePath = texturePath;
        if(!skeletonPath) return;
        this.installAsync(skeletonPath, texturePath);
    }

    async installAsync(skeletonPath: string, texturePath: string)
    {
        console.log(`SkeletonView installAsync  ${skeletonPath}, ${texturePath}`);
        this.skeleton = await GameSkeleton.skeletonCache.requrestItemAsync(texturePath, skeletonPath);
        
        console.log(`SkeletonView skeleton=${this.skeleton}`);

        // 如果已经销毁
        if(this.isDestoryed)
        {
            this.destory();
        }
        else if(this.skeleton)
        {
            this.isInstalled = true;
            this.skeleton.mouseThrough = true;
            this.skeleton.hitTestPrior = true;
            
            this.skeleton.play(0, true);
            this.setHorizontalMirror(this.horizontalMirror);
            this.playAction(this.actionName, this.actionLoop);
            this.setVisible(this.visible);
            this.setScale(this.scale);
            this.setXY(this.x, this.y);
            this.setEnableMouse(this.enableMouse);
            


            if(this.parent)
                this.setParent(this.parent);
        }
    }

    /** 销毁 */
    destory()
    {
        if(this.skeleton)
        {
            GameSkeleton.skeletonCache.recoverItem(this.texturePath, this.skeleton);
            this.skeleton = null;
        }
        super.destory();
        this.poolRecover();
    }

     /** 设置位置 */
     setXY(x: number, y: number)
     {
         super.setXY(x, y);
         if(this.skeleton)
         {
             this.skeleton.pos(x, y);
             this.skeleton.zOrder = y;
         }
     }
 
     /** 设置缩放 */
     setScale(scale:  number)
     {
         super.setScale(scale);
         
         if(this.skeleton)
         {
             this.skeleton.scale(this.horizontalMirror ? -scale : scale, scale);
         }
     }
 

    
    /** 视图容器 */
    setParent(parent: Laya.Sprite)
    {
        super.setParent(parent);
        if(this.skeleton)
        {
            this.parent.addChild(this.skeleton);
            this.isInHierarchy = true;
        }
    }

    

    
    /** 显示层级 */
    setHierarchyIndex(val: number)
    {
        if(this._hierarchyIndex == val)
            return;

        if(val >= this.parent.numChildren)  val = this.parent.numChildren - 1;
        super.setHierarchyIndex(val);

        if(!this.isHierarchyTop && this.skeleton)
        {
            this.parent.setChildIndex(this.skeleton, val);
        }
    }

    setHierarchyTop(isHierarchyTop: boolean)
    {
        super.setHierarchyTop(isHierarchyTop);
        
        if(this.skeleton)
        {
            if(isHierarchyTop)
            {
                this.parent.addChildAt(this.skeleton, this.parent.numChildren - 1);
            }
            else
            {
                this.setHierarchyIndex(this._hierarchyIndex);
            }
        }
    }
    
    /** 是否可见 */
    setVisible(val: boolean)
    {
        super.setVisible(val);

        if(this.skeleton)
        {
            this.skeleton.visible = val;

            if(val)
            {
                
                this.playAction(this.actionName, this.actionLoop);
                this.skeleton.resume();
            }
            else
            {
                this.skeleton.paused(); 
            }
        }
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
        super.playAction(nameOrIndex, loop, force);
        if(this.skeleton)
        {
            let config = Game.config.actorAction.getConfig(nameOrIndex);
            if(config)
            {
                this.skeleton.play(config.actionName, loop, force);
            }
            else
            {
                this.skeleton.play(nameOrIndex, loop, force);
            }
        }
    }

    
    // 水平镜像
    protected _horizontalMirror: boolean  = false;
    get horizontalMirror(): boolean
    {
        return this._horizontalMirror;
    }

    setHorizontalMirror(val: boolean)
    {
        if( this.skeleton)
        {
            this.skeleton.scaleX = val ? -this.scale : this.scale;
        }
    }

    
    /** 设置是否可以鼠标交互 */
    setEnableMouse(val: boolean)
    {
        super.setEnableMouse(val);
        if(this.skeleton)
        {
            this.skeleton.mouseEnabled = val;
            if(val)
            {
                this.skeleton.mouseEnabled = true;
                this.skeleton.on(Laya.Event.CLICK, this.sClick, this.sClick.dispatch, [this]);
                this.skeleton.on(Laya.Event.MOUSE_DOWN, this.sMouseDown, this.sMouseDown.dispatch, [this]);
                MouseDownLong.on(this.skeleton, this, this.onMouseDownLong);
            }
            else
            {
                this.skeleton.mouseEnabled = false;
                this.skeleton.off(Laya.Event.CLICK, this.sClick, this.sClick.dispatch);
                this.skeleton.off(Laya.Event.MOUSE_DOWN, this.sMouseDown, this.sMouseDown.dispatch);
                MouseDownLong.off(this.skeleton, this, this.onMouseDownLong);
            }
        }
    }

    onMouseDownLong(e:Laya.Event)
    {
        this.sMouseDownLong.dispatch(this, e);
    }


    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Pool.recoverByClass(this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): SkeletonView
    {
        return Laya.Pool.createByClass(SkeletonView);
    }
  




}