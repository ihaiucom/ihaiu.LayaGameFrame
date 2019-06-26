import AbstractUnitView from "./AbstractUnitView";
import { Engine } from "../../Libs/ECS/Engine";
import { EventType } from "../Units/EventType";
import UnitData from "../Units/Components/UnitData";
import HomeWorld from "../Units/Worlds/HomeWorld";
import TransformData from "../Units/Components/TransformData";
import Game from "../../Game";
import { CursorType } from "../../GameFrame/Cursor/CursorType";
import GameEventKey from "../../GameEventKey";

/** 拖拽控制器 */
export default class UnitDragCtrl
{
    
    /** 丢回对象池 */
    public poolRecover()
    {
        Laya.Pool.recoverByClass(this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): UnitDragCtrl
    {
        return Laya.Pool.createByClass(UnitDragCtrl);
    }

    engine: HomeWorld;
    unitData: UnitData;
    transformData: TransformData;
    unitView: AbstractUnitView;
    /** 是否初始化 */
    isInstalled: boolean = false;
    
     /** 初始化 */
     install(unitView: AbstractUnitView, engine: Engine, unitData: UnitData)
     {
         if(this.isInstalled) return;
         this.isInstalled = true;

         this.engine = <any>engine;
         this.unitData = unitData;
         this.unitView = unitView;
         this.unitView.setEnableMouse(true);
         this.transformData = unitData.entity.getComponent(TransformData);
         
        // this.unitView.sMouseDown.add(this.onMouseDown, this);
        this.unitView.sMouseDownLong.add(this.onMouseDown, this);
     }

     
    /** 销毁 */
    destory()
    {
        if(this.unitView)
            this.unitView.sMouseDown.remove(this.onMouseDown, this);

        this.unitView = null;

        this.isInstalled = false;
        this.poolRecover();
    }



    mouseDownTimestamp = 0;
    toucheId = -1;
    onMouseDown(unitView: AbstractUnitView, e?:Laya.Event)
    {
        if(e)
        {
            if(this.toucheId == -1)
            {
                e.stopPropagation();
                
                this.toucheId = e.touchId;
                this.mouseDownTimestamp = Laya.timer.currTimer;
                
                this.engine.unitCmdUtil.dragBegin(this.unitData.unityType, this.unitData.unitId);
                // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
                Laya.timer.frameLoop(1, this, this.onLoop);
                // Game.cursor.show(CursorType.Handler, event.stageX, event.stageY, 0, -440);
                
                Game.event.dispatch(GameEventKey.Home_DragUnitEnter);
            }
            
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        }
    }

    private p = new Laya.Point();
    onMouseUp(e:Laya.Event)
    {
        if(e && e.touchId == this.toucheId)
        {
            this.toucheId = -1;
            // Game.cursor.hide();
            Laya.stage.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.timer.clear(this, this.onLoop);
            this.engine.unitCmdUtil.dragEnd(this.unitData.unityType, this.unitData.unitId);
            Game.event.dispatch(GameEventKey.Home_DragUnitExit);

            if(this.transformData)
            {
                let p = this.p;
                p.x = this.transformData.position.x;
                p.y = this.transformData.position.y;
                p = this.engine.scene.scene2D.localToGlobal(p, false);
                if(p.x <= 0 || p.x >= Laya.stage.width || p.y <= 130 || p.y >= Laya.stage.height - 130)
                {
                    this.engine.scene.scene2D.movieTo(this.transformData.position.x, this.transformData.position.y);
                }
            }
        }
    }

    onMouseMove(e:Laya.Event)
    {
        if(e)
        {
            let p = this.p;
            p.x = e.stageX;
            p.y = e.stageY;

            if(e.touches)
            {
                for(let touch of e.touches)
                {
                    if(touch.identifier == this.toucheId || touch.toucheId == this.toucheId)
                    {
                        p.x = touch.stageX;
                        p.y = touch.stageY;
                    }
                }
            }
            p = this.engine.scene.scene2D.globalToLocal(p, false);
            this.transformData.position.x = p.x;
            this.transformData.position.y = p.y;
        }
    }

    onLoop()
    {
        let event = Laya.MouseManager.instance._event;
        
        // console.info("event.touchId=" , event.touchId);
        // console.info( event.touches);
        this.onMouseMove(event);
    }
}