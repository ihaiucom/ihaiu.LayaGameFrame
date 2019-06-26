import { UnitOrientationType } from "../Units/ExtEnums/UnitOrientationType";
import UnitShadowView from "./UnitShadowView";
import TypedSignal from "../../Libs/signals/TypedSignal";
import UnitDragCtrl from "./UnitDragCtrl";
import Typed2Signal from "../../Libs/signals/Typed2Signal";
import { Engine } from "../../Libs/ECS/Engine";
import UnitData from "../Units/Components/UnitData";

/** 抽象单位视图 */
export default abstract class AbstractUnitView
{
    engine: Engine;
    unitData: UnitData;


    /** 是否初始化 */
    isInstalled: boolean = false;

    /** 是否销毁 */
    isDestoryed: boolean = false;
    
    /** 阴影 */
    shadow:UnitShadowView;
    /** 拖拽控制器 */
    drag:UnitDragCtrl;
    
    /** 销毁 */
    destory()
    {
        this.sMouseDownLong.removeAll();
        this.sMouseDown.removeAll();
        this.sClick.removeAll();
        this.setEnableMouse(false);

        if(this.shadow)
        {
            this.shadow.poolRecover();
            this.shadow = null;
        }
        this._hasShadow = false;
        this.isDestoryed = true;
    }

    /** 是否有阴影 */
    private _hasShadow: boolean = false;
    get hasShadow(): boolean
    {
        return this._hasShadow;
    }

    addShadow(shadowParent: Laya.Sprite)
    {
        this._hasShadow = true;
        if(!this.shadow)
        {
            this.shadow = UnitShadowView.poolGet();
            this.shadow.install();
            this.shadow.setParent(shadowParent);
            this.shadow.setXY(this.x, this.y);
            this.shadow.setVisible(this.visible);
        }
    }
    
    // 缩放
    protected _scale: number  = 1;
    get scale(): number
    {
        return this._scale;
    }

    // 朝向
    protected _orientation: UnitOrientationType = UnitOrientationType.Front_LetDown;
    get orientation(): UnitOrientationType
    {
        return this._orientation;
    }

    // 位置偏移
    offsetX: number = 0;
    offsetY: number = 0;
    
    // 位置
    protected _x: number = 0;
    protected _y: number = 0;

    get x(): number
    {
        return this._x;
    }


    get y(): number
    {
        return this._y;
    }


    /** 设置位置 */
    setXY(x: number, y: number)
    {
        this._x = x;
        this._y = y;

        if(this.hasShadow)
            this.shadow.setXY(x, y);
    }

    /** 设置缩放 */
    setScale(scale:  number)
    {
        this._scale = scale;
    }

    /** 设置朝向 */
    setOrientation(orientation: UnitOrientationType)
    {
        this._orientation = orientation;
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
        if(this.hasShadow)
            this.shadow.setVisible(val);
    }

    

    /** 视图容器 */
    protected parent: Laya.Sprite;
    setParent(parent: Laya.Sprite)
    {
        this.parent = parent;
    }

    /** 是否在场景中 */
    protected _isInHierarchy = false;
    get isInHierarchy()
    {
        return this._isInHierarchy;
    }

    set isInHierarchy(val: boolean)
    {
        this._isInHierarchy = val;
    }

    /** 显示层级 */
    protected _hierarchyIndex = 0;
    get hierarchyIndex(): number
    {
        return this._hierarchyIndex;
    }

    setHierarchyIndex(val: number)
    {
        this._hierarchyIndex = val;
    }

    
    isHierarchyTop = false;
    setHierarchyTop(isHierarchyTop: boolean)
    {
        this.isHierarchyTop = isHierarchyTop;
    }

    /** 动作名称 */
    actionName: any = 0;
    /** 动作是否循环 */
    actionLoop: boolean = true;
    
    /**
     * 播放动画
     *
     * @param	nameOrIndex	动画名字或者索引
     * @param	loop		是否循环播放
     * @param	force		false,如果要播的动画跟上一个相同就不生效,true,强制生效
     */
    playAction(nameOrIndex: any, loop: boolean = true, force: boolean = false): void 
    {
        this.actionName = nameOrIndex;
        this.actionLoop = loop;
        if(this.hasShadow)
            this.shadow.playAction(nameOrIndex, loop, force);
    }

    

    //===============================
    // 鼠标交互
    //-------------------------------
    sMouseDownLong  = new Typed2Signal<AbstractUnitView, Laya.Event>();
    sMouseDown  = new Typed2Signal<AbstractUnitView, Laya.Event>();
    sClick      = new Typed2Signal<AbstractUnitView, Laya.Event>();
    private _enableMouse: boolean = false;
    get enableMouse()
    {
        return this._enableMouse;
    }

    /** 设置是否可以鼠标交互 */
    setEnableMouse(val: boolean)
    {
        this._enableMouse = val;
    }

    addDragCtrl()
    {
        if(!this.drag)
        {
            this.drag = UnitDragCtrl.poolGet();
            this.drag.install(this, this.engine, this.unitData);
        }
    }



}