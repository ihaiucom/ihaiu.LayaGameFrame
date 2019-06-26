import DoubleKeyMap from "./DoubleKeyMap";
import Event = Laya.Event;
import Mathf from "../Mathf";

export class MouseDownLongItem
{
    /** 可点击频率 */
    longMillisecond: number = 500;
    
    displayObj:Laya.Sprite | fairygui.GObject;
    listenCaller: any;
    listenFun:Function;


    
    /** 最后一次点击时间戳 */
    private mouseDownTimestamp = 0;
    private toucheId = -1;
    private event: Event;
    private lastMouseX: number = 0;
    private lastMouseY: number = 0;


    private callFun()
    {
        if(this.listenCaller)
        {
            this.listenFun.apply(this.listenCaller, [this.event]);
        }
        else
        {
            this.listenFun(this.event);
        }  
    }

    
    onMouseDown(e:Event)
    {
        if(this.toucheId == -1)
        {
            this.mouseDownTimestamp = Laya.timer.currTimer;
            this.toucheId = e.touchId;
            this.event = e;
            this.lastMouseX = e.stageX;
            this.lastMouseY = e.stageY;
    
            Laya.timer.clearAll(this);
            Laya.timer.once(this.longMillisecond, this, this.onDealyMouseDown);
            
            Laya.stage.on(Event.MOUSE_UP, this, this.onMouseUp);
            Laya.stage.on(Event.MOUSE_MOVE, this, this.onMouseMove);
        }
    }

    onDealyMouseDown()
    {
        this.callFun();
    }

    onMouseUp(e:Event)
    {
        if(e && e.touches && e.touches.length > 0 && e.touchId != this.toucheId)
        {
            return;
        }

        this.toucheId = -1;
        this.event = null;
        Laya.timer.clearAll(this);
        Laya.stage.off(Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
    }

    onMouseMove(e:Event)
    {
        if(e && e.touches && e.touches.length > 0 && e.touchId != this.toucheId)
        {
            return;
        }
        
        let distance = Mathf.distanceangle(this.lastMouseX, this.lastMouseY, e.stageX, e.stageY);
        if(distance > 1)
        {
            this.lastMouseX = e.stageX;
            this.lastMouseY = e.stageY;
            this.onMouseUp(e);
        }

    }


    private isStarted = false;
    start(time:number = 100)
    {
        if(this.isStarted)
            return;

        this.isStarted = true;

        if(this.displayObj instanceof fairygui.GObject)
        {
            this.displayObj.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        else
        {
            this.displayObj.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }
        
    }

    stop()
    {
        this.isStarted = false;
        if(this.displayObj)
        {
            if(this.displayObj instanceof fairygui.GObject)
            {
                this.displayObj.off(Event.MOUSE_DOWN, this, this.onMouseDown);
            }
            else
            {
                this.displayObj.off(Event.MOUSE_DOWN, this, this.onMouseDown);
            }
        }
        
        Laya.stage.off(Event.MOUSE_UP, this, this.onMouseUp);
        Laya.stage.off(Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.timer.clearAll(this);
        this.toucheId = -1;
    }

    clear()
    {
        this.stop();
        this.displayObj = null;
        this.listenCaller = null;
        this.listenFun = null;
        this.longMillisecond = 500;
        this.isStarted = false;

        Laya.Pool.recoverByClass(this);
    }
}

/** 鼠标长按 */
export default class MouseDownLong 
{
    // displayObj, listenFun, MouseDownLongItem
   private static dict = new DoubleKeyMap<any, Function, MouseDownLongItem>();

   static get(displayObj:any, listenCaller: any, listenFun:Function): MouseDownLongItem
   {
        let item : MouseDownLongItem= this.dict.getValue(displayObj, listenFun);
        if(item && item.listenCaller == listenCaller)
        {
            return item;
        }
        return null;
   }

   static getOrCreate(displayObj:any, listenCaller: any, listenFun:Function): MouseDownLongItem
   {
        let item = this.get(displayObj, listenCaller, listenFun);
        if(!item)
        {
            item = Laya.Pool.createByClass(MouseDownLongItem);
            item.displayObj = displayObj;
            item.listenCaller = listenCaller;
            item.listenFun = listenFun;
            this.dict.add(displayObj, listenFun, item);
        }
        return item;
   }
    

    static onDown(fguiObj: fairygui.GObject, listenCaller: any, listenFun: Function, longMillisecond: number = 200)
    {
        let item = this.getOrCreate(fguiObj, listenCaller, listenFun);
        item.longMillisecond = longMillisecond;
        item.start();
    }
    
    static offDown(fguiObj: fairygui.GObject, listenCaller: any, listenFun: Function)
    {
        let item = this.get(fguiObj, listenCaller, listenFun);
        if(item)
        {
            this.dict.remove(fguiObj, listenFun);
            item.clear();
        }
    }

    static on(displayObj: Laya.Sprite, listenCaller: any, listenFun: Function, longMillisecond: number = 200)
    {
        let item = this.getOrCreate(displayObj, listenCaller, listenFun);
        item.longMillisecond = longMillisecond;
        item.start();
    }

    
    static off(displayObj: Laya.Sprite, listenCaller: any, listenFun: Function)
    {
        let item = this.get(displayObj, listenCaller, listenFun);
        if(item)
        {
            this.dict.remove(displayObj, listenFun);
            item.clear();
        }
    }
}