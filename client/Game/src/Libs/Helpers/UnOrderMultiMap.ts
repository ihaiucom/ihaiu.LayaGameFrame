import Dictionary from "./Dictionary";

export default class UnOrderMultiMap<T, K>
{
    private dictionary: Dictionary<T, K[]> = new Dictionary<T, K[]>();
    
    __getDict()
    {
        return this.dictionary;
    }
    
    // 重用list
    private queue : K[][] = [];

    
    private FetchList(): K[]
    {
        if (this.queue.length > 0)
        {
            let list = this.queue.shift();
            list.length = 0;
            return list;
        }
        return  [];
    }


    private RecycleList(list: K[])
    {
        list.length = 0;
        // 防止暴涨
        if (this.queue.length > 100)
        {
            return;
        }
        this.queue.push(list);
    }


    addItem(t: T, k: K)
    {
        let list = this.dictionary.getValue(<any>t);
        if(!list)
        {
            list = this.FetchList();
            this.dictionary.add(<any>t, list);
        }
        list.push(k);
    }

    
    removeItem(t: T, k: K): boolean
    {
        let list: K[] = this.dictionary.getValue(<any>t);
        if (!list)
        {
            return false;
        }


        if (!arrayRemoveItem(list, k))
        {
            return false;
        }

        if (list.length == 0)
        {
            this.RecycleList(list);
            this.dictionary.remove(<any>t);
        }
        return true;
    }

    
    removeList(t: T)
    {
        let list = this.dictionary.getValue(<any>t);
        if (!list)
        {
            this.RecycleList(list);
        }
        return this.dictionary.remove(<any>t);
    }

    get count(): int
    {
        return this.dictionary.count;
    }

    get allCount():int
    {
        let objs =this.dictionary.__getDict();
        let list;
        let count = 0;
        for(let key in objs)
        {
            list = objs[key];
            count += list.length;
        }
        return count;
    }


    /// <summary>
    /// 不返回内部的list,copy一份出来
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    public getAll(t: T): K[]
    {
        let list: K[] = this.dictionary.getValue(<any> t);
        if (!list)
        {
            return [];
        }
        return list.slice(0);
    }

    

    /// <summary>
    /// 返回内部的list
    /// </summary>
    /// <param name="t"></param>
    /// <returns></returns>
    public get(t: T): K[]
    {
        return this.dictionary.getValue(<any>t);
    }


    public Contains(t: T, k: K): boolean
    {
        let list = this.get(t);
        if (!list)
        {
            return false;
        }
        return list.indexOf(k) != -1;
        // return list.includes(k);
    }
    

    public ContainsKey(t: T): boolean
    {
        return this.dictionary.hasKey(<any> t);
    }

    
    public clear()
    {
        let values = this.dictionary.getKeys();
        for(let val of values)
        {
            this.RecycleList(val);
        }
        this.dictionary.clear();
    }



}