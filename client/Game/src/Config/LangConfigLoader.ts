import LangConfigLoaderList from "./LangConfigLoaderList";
import Signal from "../Libs/signals/Signal";
import ConfigLoaderInterface from "./Interfaces/ConfigLoaderInterface";
import Typed3Signal from "../Libs/signals/Typed3Signal";
import Dictionary from "../Libs/Helpers/Dictionary";
import TEXT from "./Keys/TEXT";
import FguiHelper from "../Libs/Helpers/FguiHelper";
import LangConfigReader from "./LangConfigReader";

/// 配置读取器列表
export default class LangConfigLoader extends LangConfigLoaderList
{
    // 消息--加载进度
    sLoadProgress: Typed3Signal<number, number, number> = new Typed3Signal<number, number, number>();
    // 消息--加载完成
    sLoaded: Signal = new Signal()

    // 加载器
    configLoader: ConfigLoaderInterface;

    // 加载进度
    loadProgress = 0;

    // 是否已经加载完成
    isLoadCompleted = false;
    
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
        // if (this.renders.indexOf(this.textCode) != -1)
        // {
        // 	this.renders.slice(this.renders.indexOf(this.textCode), 1);
        // 	this.renders.slice(this.renders.indexOf(this.textFgui), 1);
        // }


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
            this.renders[i].lang = this.lang;
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

        // 设置代码文本	
        this.setCodeTEXT();
        // 设置fgui文本
        FguiHelper.setStringsSource(this.textFgui);

        this.isLoadCompleted = true;
        this.sLoaded.dispatch();
    }







    textRenders: LangConfigReader[] = [];
    // 消息--加载完成
    sTextLoaded: Signal = new Signal()
    loadText()
    {
        let renders = this.textRenders;
        if (renders.length == 0)
        {
            renders.push(this.textCode);
            renders.push(this.textFgui);
        }

        this.loadProgress = 0;
        let count = renders.length;
        let loadedNum = 0;
        let onItemLoaded = () =>
        {
            loadedNum++;

            if (loadedNum >= count)
            {
                this.onLoadTextComplte();
            }
        };


        for (let i = 0; i < renders.length; i++)
        {
            renders[i].lang = this.lang;
            renders[i].load(this.configLoader, onItemLoaded);
        }
    }


    // 加载完成TEXT
    onLoadTextComplte()
    {
        let renders = this.textRenders;
        for (let i = 0; i < renders.length; i++)
        {
            renders[i].onGameLoadedAll();
        }

        // 设置代码文本	
        this.setCodeTEXT();
        // 设置fgui文本
        FguiHelper.setStringsSource(this.textFgui);

        this.sTextLoaded.dispatch();
    }








    private _srcTEXT: Dictionary<string, string>;

    // 设置代码文本		
    setCodeTEXT()
    {

        if (!this._srcTEXT && TEXT)		
        {
            this._srcTEXT = new Dictionary<string, string>();
            for (let key in TEXT)
            {
                this._srcTEXT.add(key, TEXT[key]);
            }
        }


        let list = this.textCode.getConfigList();
        for (let i = 0; i < list.length; i++)
        {
            let item = list[i];
            let key = <string>item.dict.getValue("key");
            let value = <string>item.dict.getValue("value");
            if (!isNullOrEmpty(value))
            {
                TEXT[key] = value;
            }
        }

    }

}