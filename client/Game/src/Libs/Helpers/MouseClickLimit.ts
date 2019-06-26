import DoubleKeyMap from "./DoubleKeyMap";

export class MouseClickLimitItem
{
    /** 可点击频率 */
    frequencyMillisecond: number = 500;
    /** 最后一次点击时间戳 */
    lastClickTimestamp = 0;
    
    displayObj:Laya.Sprite | fairygui.GObject;
    listenCaller: any;
    listenFun:Function;


    private callFun()
    {
        if(this.listenCaller)
        {
            this.listenFun.apply(this.listenCaller);
        }
        else
        {
            this.listenFun();
        }  
    }

    onClick()
    {
        if(Laya.timer.currTimer - this.lastClickTimestamp > this.frequencyMillisecond)
        {
            this.lastClickTimestamp = Laya.timer.currTimer;
            this.callFun();
        }
    }


    private isStarted = false;
    start(time:number = 100)
    {
        if(this.isStarted)
            return;

        // this.stop();
        this.isStarted = true;
        if(this.displayObj instanceof fairygui.GObject)
        {
            this.displayObj.onClick(this, this.onClick);
        }
        else
        {
            this.displayObj.on(Laya.Event.CLICK, this, this.onClick);
        }
    }

    stop()
    {
        this.isStarted = false;
        if(this.displayObj)
        {
            if(this.displayObj instanceof fairygui.GObject)
            {
                this.displayObj.offClick(this, this.onClick);
            }
            else
            {
                this.displayObj.off(Laya.Event.CLICK, this, this.onClick);
            }
        }
        Laya.timer.clearAll(this);
    }

    clear()
    {
        this.stop();
        this.displayObj = null;
        this.listenCaller = null;
        this.listenFun = null;
        this.frequencyMillisecond = 500;
        this.isStarted = false;

        Laya.Pool.recoverByClass(this);
    }
}

/** 鼠标点击频繁度限制 */
export default class MouseClickLimit 
{
    // displayObj, listenFun, MouseClickLimitItem
   private static dict = new DoubleKeyMap<any, Function, MouseClickLimitItem>();

   static get(displayObj:any, listenCaller: any, listenFun:Function): MouseClickLimitItem
   {
        let item : MouseClickLimitItem= this.dict.getValue(displayObj, listenFun);
        if(item && item.listenCaller == listenCaller)
        {
            return item;
        }
        return null;
   }

   static getOrCreate(displayObj:any, listenCaller: any, listenFun:Function): MouseClickLimitItem
   {
        let item = this.get(displayObj, listenCaller, listenFun);
        if(!item)
        {
            item = Laya.Pool.createByClass(MouseClickLimitItem);
            item.displayObj = displayObj;
            item.listenCaller = listenCaller;
            item.listenFun = listenFun;
            this.dict.add(displayObj, listenFun, item);
        }
        return item;
   }
    

    static onClick(fguiObj: fairygui.GObject, listenCaller: any, listenFun: Function, frequencyMillisecond: number = 500)
    {
        let item = this.getOrCreate(fguiObj, listenCaller, listenFun);
        item.frequencyMillisecond = frequencyMillisecond;
        item.start();
    }
    
    static offClick(fguiObj: fairygui.GObject, listenCaller: any, listenFun: Function)
    {
        let item = this.get(fguiObj, listenCaller, listenFun);
        if(item)
        {
            this.dict.remove(fguiObj, listenFun);
            item.clear();
        }
    }

    static on(displayObj: Laya.Sprite, listenCaller: any, listenFun: Function, frequencyMillisecond: number = 500)
    {
        let item = this.getOrCreate(displayObj, listenCaller, listenFun);
        item.frequencyMillisecond = frequencyMillisecond;
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