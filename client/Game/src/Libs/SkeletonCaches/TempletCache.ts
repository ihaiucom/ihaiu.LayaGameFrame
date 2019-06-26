import Templet = Laya.Templet;
import Event = laya.events.Event;
import Dictionary from "../../Libs/Helpers/Dictionary";
import Game from "../../Game";
import { AssetItemType } from "../../GameFrame/AssetManagers/AssetItemType";

/**
 * 骨骼动画模版 缓存池
 */
export default class TempletCache
{
    
    // 已经解析好的
    private dict = new Dictionary<string, Templet>();
    // 引用次数
    private referenceCountDict = new Dictionary<string, number>();
    // 最后一次返回时间
    private lastTimeDict = new Dictionary<string, number>();

    
    // 获取缓存		
    private getCacheItem(texturePath: string): Templet
    {
        return this.dict.getValue(texturePath);
    }
    
    // 销毁模板
    private destoryItem(texturePath: string, skPath: string)
    {
        let tpl = this.getCacheItem(texturePath);
        if (tpl)
        {
            // console.log("destory Skeleton Templet:" + texturePath);
            tpl.destroy();
            this.dict.remove(texturePath);
        }

        Laya.loader.clearRes(texturePath);
        Laya.loader.clearRes(skPath);
    }

    // 返回模板
    recoverItem(texturePath: string, skPath: string)
    {
        let num = this.referenceCountDict.getValueOrDefault(texturePath, 0);
        if (num > 0)
        {
            num = num - 1;
            this.referenceCountDict.set(texturePath, num);
        }

        this.lastTimeDict.add(texturePath, Game.time.localTime);

        // if (num <= 0)
        // {
        //     this.destoryItem(texturePath, skPath);
        // }
    }

    // 请求模板		
    async requrestItemAsync(texturePath: string, skPath: string):  Promise<Templet>
    {
        console.log(`TempletCache.requrestItemAsync: texturePath=${texturePath}, skPath=${skPath}`);
           
        if(isNullOrEmpty(texturePath) || isNullOrEmpty(skPath) )
        {
            console.warn(`TempletCache.requrestItemAsync: texturePath=${texturePath}, skPath=${skPath}`);
            return null;
        }

        // 设置引用次数
        let num = this.referenceCountDict.getValueOrDefault(texturePath, 0);
        this.referenceCountDict.add(texturePath, num + 1);

        let tpl = this.getCacheItem(texturePath);
        if (!tpl)
        {
            tpl = await TempletCache.CreateTempletAsync(texturePath, skPath);
            


            if(tpl)
            {
                // console.log("skPath=" + skPath);
                // console.log("texturePath=" + texturePath);

                // let count = tpl.getAnimationCount();
                // console.log("动画数量" + count);
                // for(let i = 0; i < count; i ++)
                // {
                //     let name = tpl.getAniNameByIndex(i);
                //     console.log(i, name);
                // }
                
                this.dict.add(texturePath, tpl);
            }
            else
            {
                
                console.warn("没有找到资源 texturePath=" + texturePath);
            }
        }

        return tpl;
    }

    /**
     * 异步创建骨骼动画模板
     * @param texturePath 皮肤路径
     * @param skPath 骨骼数据路径
     */
    static async CreateTempletAsync(texturePath: string, skPath: string):  Promise<Templet>
    {
        let sk = await Game.asset.loadAsync(skPath, AssetItemType.Buffer);
        let texture = await Game.asset.loadAsync(texturePath, AssetItemType.Image);


        return new Promise<Templet>((resolve)=>
        {
            if(!sk || !texture)
            {
                if(texturePath )console.warn(`不存在文件 ${texturePath}`);
                if(skPath )console.warn(`不存在文件 ${skPath}`);
                
                resolve(null);
                return;
            }

            let tpl = new Templet();
            
            tpl.once(Event.COMPLETE, this, ()=>
            {
                resolve(tpl);
            });

            tpl.once(Event.ERROR, this, ()=>
            {
                tpl.destroy();
                resolve(null);
            });
            
            try {
                
                tpl.parseData(texture, sk);
            } catch (error) {
                console.error(error);
                resolve(null);
            }
        
        });
    }

}