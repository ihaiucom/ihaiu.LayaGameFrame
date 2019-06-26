import Dictionary from "./Dictionary";
import DoubleKeyMap from "./DoubleKeyMap";

export class MouseKeepItem
{
     time: number = 100;
     target:any;
     funObj: any;
     func:Function;

    private callFun()
    {
        if(this.funObj)
        {
            this.func.apply(this.funObj);
        }
        else
        {
            this.func();
        }  
    }

    private onMouseDown()
    {
        this.callFun();
        Laya.timer.loop(this.time, this, this.onLoop);
        
    }

    private onMouseUp()
    {
        Laya.timer.clearAll(this);
    }

    private onLoop()
    {
        this.callFun();
    }

    private isStarted = false;
    start(time:number = 100)
    {
        this.stop();
        this.target.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
        this.target.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
    }

    stop()
    {
        if(this.target)
        {
            this.target.off(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            this.target.off(Laya.Event.MOUSE_UP, this, this.onMouseUp);
        }
        Laya.timer.clearAll(this);
    }
    
    clear()
    {
        this.stop();
        this.target = null;
        this.funObj = null;
        this.func = null;
        Laya.Pool.recoverByClass(this);
    }

}

export default class MouseKEEP 
{

    // target, func, MouseKeepItem
   private static dict = new DoubleKeyMap<any, any, MouseKeepItem>();

   static get(target:any, caller: any, func:Function): MouseKeepItem
   {
        let item : MouseKeepItem= this.dict.getValue(target, func);
        if(item && item.funObj == caller)
        {
            return item;
        }
        return null;
   }

   static getOrCreate(target:any, caller: any, func:Function): MouseKeepItem
   {
        let item = this.get(target, caller, func);
        if(!item)
        {
            item = Laya.Pool.createByClass(MouseKeepItem);
            item.target = target;
            item.funObj = caller;
            item.func = func;
            this.dict.add(target, func, item);
        }
        return item;
   }
    
    static off(target:any, caller: any, func:Function)
    {
        let item = this.get(target, caller, func);
        if(item)
        {
            this.dict.remove(target, func);
            item.clear();
        }
    }

    static on(target:any, caller: any, func:Function, time:number = 500): void 
    {
        let item = this.getOrCreate(target, caller, func);
        item.start(time);
    }

}