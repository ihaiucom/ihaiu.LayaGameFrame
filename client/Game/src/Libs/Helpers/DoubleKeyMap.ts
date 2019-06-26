import Dictionary from "./Dictionary";

/** 二维Key字典 */
export default class DoubleKeyMap<K1, K2, V>
{
    private key1Dict = new Dictionary<K1, Dictionary<K2, V>>();

    getDict(key1: K1): Dictionary<K2, V>
    {
        return this.key1Dict.getValue(<any>key1);
    }

    getOrCreateDict(key1: K1): Dictionary<K2, V>
    {
        let dict = this.key1Dict.getValue(<any>key1);
        if(!dict)
        {
            dict = new Dictionary<K2, V>();
            this.key1Dict.add(<any>key1, dict);
        }
        return dict;
    }

    add(key1: K1, key2: K2, v: V)
    {
        let dict = this.getOrCreateDict(key1);
        dict.add(<any>key2, v);
    }

    remove(key1: K1, key2: K2)
    {
        let dict = this.getDict(key1);
        if(dict)
        {
            dict.remove(<any>key2);
        }
    }

    getValue(key1: K1, key2: K2): V
    {
        let dict = this.getDict(key1);
        if(dict)
        {
            return dict.getValue(<any>key2);
        }
        return null;
    }
    

    getValues(key1: K1): V[]
    {
        let dict = this.getDict(key1);
        if(dict)
        {
            return dict.getValues();
        }
        return null;
    }
}