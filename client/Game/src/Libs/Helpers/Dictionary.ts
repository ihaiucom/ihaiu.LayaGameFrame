export default class Dictionary<K, T>
{
    private dict: { [key: string]: T;[key: number]: T; } = {};

    private _count: number = 0;

    get count()
    {
        return this._count;
    }

    add(key: string | number, val: T)
    {
        if (this.hasKey(key) === false)
        {
            this._count++;
        }
        this.dict[key] = val;
    }

    set(key: string | number, val: T)
    {
        if (this.hasKey(key) === false)
        {
            this._count++;
        }
        this.dict[key] = val;
    }

    remove(key: string | number)
    {
        if (this.hasKey(key))
        {
            this._count--;
        }
        // this.dict[key] = undefined;
        delete this.dict[key];
    }

    hasKey(key: string | number)
    {
        return this.dict[key] != undefined
    }

    getValue(key: string | number)
    {
        return this.dict[key];
    }

    getValueOrDefault(key: string | number, _default?: T)
    {
        if (this.hasKey(key))
        {
            return this.getValue(key);
        }
        else
        {
            return _default;
        }
    }

    __getDict()
    {
        return this.dict;
    }

    getValues(): T[]
    {
        let list: T[] = [];
        for (var key in this.dict) 
        {
            list.push(this.dict[key]);
        }

        return list;
    }

    getKeys()
    {
        let list = [];
        for (var key in this.dict) 
        {
            list.push(key);
        }

        return list;
    }

    clear()
    {
        this.dict = {};
        this._count = 0;
    }


}