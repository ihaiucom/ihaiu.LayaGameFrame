import DebugTimerLoop from "./DebugTimerLoop";
import Dictionary from "../Libs/Helpers/Dictionary";
import Game from "../Game";

export default class DebugTimerLoopManager
{
    public static enable: boolean = false;

    private static _Instance;

    /**
     * 获取单例实例
     */
    public static get Instance(): DebugTimerLoopManager
    {
        if (!DebugTimerLoopManager._Instance)
        {
            DebugTimerLoopManager._Instance = new DebugTimerLoopManager();
        }
        return DebugTimerLoopManager._Instance;
    }


    public static onCallerRun(caller: any, method: Function): boolean
    {
        return DebugTimerLoopManager.Instance.addCaller(caller, method);
    }

    public static setCallerCost(caller: any, method: Function, cost: number)
    {
        return DebugTimerLoopManager.Instance.addCost(caller, method, cost);
    }


    public static onCall(key: string): boolean
    {
        return DebugTimerLoopManager.Instance.add(key);
    }

    static clear()
    {
        DebugTimerLoopManager.Instance.dict.clear();
    }




    dict: Dictionary<string, DebugTimerLoop> = new Dictionary<string, DebugTimerLoop>();


    add(key: string): boolean
    {
        let item = this.dict.getValue(key);
        if (!item)
        {
            item = new DebugTimerLoop();
            item.key = key;
            item.beginTime = Game.time.localTime;
            this.dict.add(item.key, item);
        }
        item.callTime = Game.time.localTime;
        return item.enable;
    }

    addCaller(caller: any, method: Function): boolean
    {
        let key = caller ? getClassName(caller) + "." + getFunctionName(method) : getFunctionName(method);

        let item = this.dict.getValue(key);
        if (!item)
        {
            item = new DebugTimerLoop();
            item.caller = caller;
            item.method = method;
            item.key = key;
            item.beginTime = new Date().getTime();
            this.dict.add(item.key, item);
        }
        item.callTime = new Date().getTime();
        return item.enable;
    }

    addCost(caller: any, method: Function, cost: number)
    {

        let key = caller ? getClassName(caller) + "." + getFunctionName(method) : getFunctionName(method);

        let item = this.dict.getValue(key);
        if (item)
        {
            item.costTime = cost;
            item.costTimeToal += cost;
            item.callNum++;
        }
    }
}
