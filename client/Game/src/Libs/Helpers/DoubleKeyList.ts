import Dictionary from "./Dictionary";
import UnOrderMultiMap from "./UnOrderMultiMap";

/** 二维Key字典列表 */
export default class DoubleKeyList<K1, K2, V>
{
    private key1Dict = new Dictionary<K1, UnOrderMultiMap<K2, V>>();

    getDict(key1: K1): UnOrderMultiMap<K2, V>
    {
        return this.key1Dict.getValue(<any>key1);
    }

    getOrCreateDict(key1: K1): UnOrderMultiMap<K2, V>
    {
        let dict = this.key1Dict.getValue(<any>key1);
        if(!dict)
        {
            dict = new UnOrderMultiMap<K2, V>();
            this.key1Dict.add(<any>key1, dict);
        }
        return dict;
    }

    addItem(key1: K1, key2: K2, v: V)
    {
        let dict = this.getOrCreateDict(key1);
        dict.addItem(key2, v);
    }

    removeItem(key1: K1, key2: K2, v: V)
    {
        let dict = this.getDict(key1);
        if(dict)
        {
            dict.removeItem(key2, v);
        }
    }

    getItemList(key1: K1, key2: K2): V[]
    {
        let dict = this.getDict(key1);
        if(dict)
        {
            return dict.get(key2);
        }
        return null;
    }

}