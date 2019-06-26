import Dictionary from "../../Libs/Helpers/Dictionary";
import { AssetItemType } from "./AssetItemType";
import Loader = Laya.Loader;
import AssetItemInfo from "./AssetItemInfo";

export default class AssetHelper
{
    private static _layaLoaderType2AssetItemTypeDict;
    static get layaLoaderType2AssetItemTypeDict(): Dictionary<string, AssetItemType>
    {
        if (!AssetHelper._layaLoaderType2AssetItemTypeDict)
        {
            let dict = new Dictionary<string, AssetItemType>();
            dict.add(Loader.IMAGE, AssetItemType.Image);
            dict.add(Loader.TEXTURE2D, AssetItemType.TEXTURE2D);
            dict.add(Loader.BUFFER, AssetItemType.Buffer);
            dict.add(Loader.SOUND, AssetItemType.Sound);
            dict.add(Loader.TEXT, AssetItemType.Text);
            dict.add(Loader.JSON, AssetItemType.Json);
            dict.add(Loader.XML, AssetItemType.Xml);
            dict.add(Loader.FONT, AssetItemType.Font);
            dict.add(Loader.TTF, AssetItemType.TTF);

            AssetHelper._layaLoaderType2AssetItemTypeDict = dict;
        }

        return AssetHelper._layaLoaderType2AssetItemTypeDict;
    }

    
    private static _assetItemType2LayaLoaderTypeDict;
    static get assetItemType2LayaLoaderTypeDict(): Dictionary<AssetItemType, string>
    {
        if (!AssetHelper._assetItemType2LayaLoaderTypeDict)
        {
            let d = this.layaLoaderType2AssetItemTypeDict.__getDict();
            let dict = new Dictionary<AssetItemType, string>();
            for(let key in d)
            {
                dict[d[key]] = d;
            }

            AssetHelper._assetItemType2LayaLoaderTypeDict = dict;
        }

        return AssetHelper._assetItemType2LayaLoaderTypeDict;
    }



    static layaLoaderType2AssetItemType(loader: string | Loader): AssetItemType
    {
        return AssetHelper.layaLoaderType2AssetItemTypeDict.getValue(<string>loader);
    }
    
    static assetItemType2LayaLoaderType(type: AssetItemType): string
    {
        return AssetHelper.assetItemType2LayaLoaderTypeDict.getValue(type);
    }

    
    static getAssetItemKey(item: AssetItemInfo): string
    {
        return item.type + " " + item.url;
    }
}