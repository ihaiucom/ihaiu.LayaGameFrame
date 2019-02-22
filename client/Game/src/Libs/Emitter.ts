/**
 * 事件
 */
export default class Emitter
{
    /** 监听数组 */
    private listeners = {};

    /** 是否把事件名称抛当参数抛给回调 */
    private isDispatchName = false;

    constructor(isDispatchName: boolean = false)
    {
        this.isDispatchName = isDispatchName;
    }

    /** 
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    public add(name: string, callback: Function, context: any)
    {
        let hasRegistered = false;
        let observers: Observer[] = this.listeners[name];
        if (!observers) 
        {
            this.listeners[name] = [];
        }
        else
        {
            let length = observers.length;
            for (let i = 0; i < length; i++) 
            {
                let observer = observers[i];
                if (observer.comparAll(callback, context)) 
                {
                    hasRegistered = true;
                }
            }
        }

        if (!hasRegistered)
        {
            this.listeners[name].push(new Observer(callback, context));
        }
    }

    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    public remove(name: string, callback: Function, context: any)
    {
        let observers: Observer[] = this.listeners[name];
        if (!observers) return;
        let length = observers.length;
        for (let i = 0; i < length; i++)
        {
            let observer = observers[i];
            if (observer.compar(context))
            {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0)
        {
            delete this.listeners[name];
        }
    }

    /**
     * 发送事件
     * @param name 事件名称
     */
    public dispatch(name: string, ...args: any[])
    {
        let observers: Observer[] = this.listeners[name];
        if (!observers) return;
        let length = observers.length;
        for (let i = length - 1; i >= 0; i--)
        {
            let observer = observers[i];
            if (this.isDispatchName)
            {
                observer.notify(name, ...args);
            }
            else
            {
                observer.notify(...args);
            }
        }
    }
}

/**
 * 观察者
 */
class Observer
{
    /** 回调函数 */
    private callback: Function = null;
    /** 上下文 */
    private context: any = null;

    constructor(callback: Function, context: any)
    {
        let self = this;
        self.callback = callback;
        self.context = context;
    }

    /**
     * 发送通知
     * @param args 不定参数
     */
    notify(...args: any[]): void
    {
        let self = this;
        self.callback.call(self.context, ...args);
    }

    /**
     * 上下文比较
     * @param context 上下文
     */
    compar(context: any): boolean
    {
        return context == this.context;
    }


    /**
     * 上下文比较
     * @param context 上下文
     */
    comparAll(callback: Function, context: any): boolean
    {
        return callback == this.callback && context == this.context;
    }
}