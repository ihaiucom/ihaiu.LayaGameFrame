import AbstractUnitView from "./AbstractUnitView";
import SkeletonView from "./SkeletonView";
import SkeletonData from "../Units/Components/SkeletonData";
import { UnitOrientationType } from "../Units/ExtEnums/UnitOrientationType";
import { Engine } from "../../Libs/ECS/Engine";
import UnitData from "../Units/Components/UnitData";

/** 单位视图--骨骼动画 */
export default class SkeletonUnitView extends AbstractUnitView
{
    
    skeletonPathF: string;
    texturePathF: string;
    
    skeletonPathB: string;
    texturePathB: string;

    /** 所有方向的
     * 0 前 左下
     * 1 后 右上
     */
    private avatars: SkeletonView[] = [];
    private _currentAvatar: SkeletonView;

    get currentAvatar(): SkeletonView
    {
        return this._currentAvatar;
    }

    set currentAvatar(val: SkeletonView)
    {
        if (this._currentAvatar != val) 
        {
            if (this._currentAvatar) 
               this._currentAvatar.setVisible(false);

            this._currentAvatar = val;
            if (this._currentAvatar) 
            {
                this._currentAvatar.setXY(this.x, this.y); 
                this._currentAvatar.playAction(this.actionName, this.actionLoop);
                this._currentAvatar.setVisible(true);
            }
        }
    }


    /** 初始化 */
    install(skeletonData: SkeletonData, engine: Engine, unitData: UnitData)
    {
        this.engine = engine;
        this.unitData = unitData;

        this.skeletonPathF = skeletonData.skeletonPathF;
        this.texturePathF = skeletonData.texturePathF;

        this.skeletonPathB = skeletonData.skeletonPathB;
        this.texturePathB = skeletonData.texturePathB;

        let avatar: SkeletonView;

        // 前
        avatar = SkeletonView.poolGet();
        avatar.install(this.skeletonPathF, this.texturePathF, engine, unitData);
        this.avatars.push(avatar);
        window['avatarF'] = avatar;
        
        // 后
        avatar = SkeletonView.poolGet();
        avatar.install(this.skeletonPathB, this.texturePathB, engine, unitData);
        this.avatars.push(avatar);
        window['avatarB'] = avatar;

        this.currentAvatar = this.avatars[0];
        this.isInstalled = true;
        window['unitView'] = this;
    }
    
    /** 销毁 */
    destory()
    {
        for(let avatar of this.avatars)
        {
            avatar.destory();
        }
        this._currentAvatar = null;
        super.destory();
        this.poolRecover();
    }

    
    /** 设置朝向 */
    setOrientation(orientation: UnitOrientationType)
    {
        super.setOrientation(orientation);

        switch(orientation)
        {
            case UnitOrientationType.Front_LetDown:
                this.currentAvatar = this.avatars[0];
                this.currentAvatar.setHorizontalMirror(false);
                break;

                
            case UnitOrientationType.Front_RightDown:
                this.currentAvatar = this.avatars[0];
                this.currentAvatar.setHorizontalMirror(true);
                break;
                
            case UnitOrientationType.Back_LetUp:
                this.currentAvatar = this.avatars[1];
                this.currentAvatar.setHorizontalMirror(true);
                break;
                
            case UnitOrientationType.Back_RightUp:
                this.currentAvatar = this.avatars[1];
                this.currentAvatar.setHorizontalMirror(false);
                break;
        }
    }

    
     /** 设置位置 */
     setXY(x: number, y: number)
     {
         x += this.offsetX;
         y += this.offsetY;
         
         super.setXY(x, y);
         this.currentAvatar.setXY(x, y);
         
     }
 
     /** 设置缩放 */
     setScale(scale:  number)
     {
         super.setScale(scale);

         for(let avatar of this.avatars)
         {
            avatar.setScale(scale);
         }
     }
 

    
    /** 视图容器 */
    setParent(parent: Laya.Sprite)
    {
        super.setParent(parent);
        
        for(let avatar of this.avatars)
        {
           avatar.setParent(parent);
        }
    }

    /** 是否在场景中 */
    get isInHierarchy()
    {
        return this.currentAvatar && this.currentAvatar.isInHierarchy;
    }
    
    /** 显示层级 */
    setHierarchyIndex(val: number)
    {
        if(this._hierarchyIndex == val)
            return;

        super.setHierarchyIndex(val);
        
        let i = 0;
        for(let avatar of this.avatars)
        {
           avatar.setHierarchyIndex(val * 2 + i);
           i ++;
        }

    }

    
    setHierarchyTop(isHierarchyTop: boolean)
    {
        super.setHierarchyTop(isHierarchyTop);
        
        for(let avatar of this.avatars)
        {
           avatar.setHierarchyTop(isHierarchyTop);
        }
    }

    
    /** 是否可见 */
    setVisible(val: boolean)
    {
        super.setVisible(val);
        this.currentAvatar.setVisible(val);
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
        this.currentAvatar.playAction(nameOrIndex, loop, force);
    }

    
    
    /** 设置是否可以鼠标交互 */
    setEnableMouse(val: boolean)
    {
        super.setEnableMouse(val);
        if(val)
        {
            for(let avatar of this.avatars)
            {
                avatar.setEnableMouse(val);
                avatar.sClick.add(this.onMouseClick, this);
                avatar.sMouseDown.add(this.onMouseDown, this);
                avatar.sMouseDownLong.add(this.onMouseDownLong, this);
            }
        }
        else
        {
            for(let avatar of this.avatars)
            {
                avatar.setEnableMouse(false);
                avatar.sClick.remove(this.onMouseClick, this);
                avatar.sMouseDown.remove(this.onMouseDown, this);
                avatar.sMouseDownLong.remove(this.onMouseDownLong, this);
            }
        }
    }

    onMouseClick(avatar: SkeletonView, event?:Laya.Event)
    {
        this.sClick.dispatch(this, event);
    }

    onMouseDown(avatar: SkeletonView, event?:Laya.Event)
    {
        this.sMouseDown.dispatch(this, event);
    }
    onMouseDownLong(avatar: SkeletonView, event?:Laya.Event)
    {
        this.sMouseDownLong.dispatch(this, event);
    }

    
    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Pool.recoverByClass(this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): SkeletonUnitView
    {
        return Laya.Pool.createByClass(SkeletonUnitView);
    }
}