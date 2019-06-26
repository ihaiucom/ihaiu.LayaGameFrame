import ConfigManagerList from "./ConfigManagerList";
import TypedSignal from "../Libs/signals/TypedSignal";
import Signal from "../Libs/signals/Signal";
import ConfigLoaderInterface from "./Interfaces/ConfigLoaderInterface";
import Typed3Signal from "../Libs/signals/Typed3Signal";
import ConfigManagerExpressionList from "./ConfigManagerExpressionList";

export default class ConfigManager extends ConfigManagerExpressionList
{
    // 消息--加载进度
    sLoadProgress: Typed3Signal<number, number, number> = new Typed3Signal<number, number, number>();
    // 消息--加载完成
    sLoaded: Signal = new Signal()
    // 加载器
    configLoader: ConfigLoaderInterface;

    // 加载进度
    loadProgress = 0;

    async loadAllAsync():Promise<void>
    {
        return new Promise<void>((resolve)=>{
           this.loadAll();
           
           this.sLoaded.addOnce(()=>
           {
                resolve();
           }, this);
		});
    }

    
    // 加载所有
    loadAll()
    {
        this.loadProgress = 0;
        let count = this.renders.length;
        let loadedNum = 0;
        let onItemLoaded = () =>
        {
            loadedNum++;

            this.loadProgress = loadedNum / count;
            this.sLoadProgress.dispatch(loadedNum, count, this.loadProgress);


            if (loadedNum >= count)
            {
                this.onGameLoadedAll();
            }
        };

        for (let i = 0; i < this.renders.length; i++)
        {
            this.renders[i].load(this.configLoader, onItemLoaded);
        }

    }

    // 加载完成所有
    onGameLoadedAll()
    {
        for (let i = 0; i < this.renders.length; i++)
        {
            this.renders[i].onGameLoadedAll();
        }

        this.sLoaded.dispatch();
    }



}