
import Dictionary from "../Libs/Helpers/Dictionary";
import Game from "../Game";
import { GMCmdItemData } from "./GMCmdItemData";

export default class GMCmdList
{
    name: string;
    list: GMCmdItemData[] = [];
    dict: Dictionary<string, GMCmdItemData> = new Dictionary<string, GMCmdItemData>();

    constructor(name: string)
    {
        this.name = name;
    }

    setList(arr: GMCmdItemData[], isClient: boolean = false)
    {
        this.list = arr;
        for (let i = 0; i < arr.length; i++)
        {
            let item = arr[i];
            item.title = `${item.name} (${item.cnname})`;
            item.datatxt = JSON.stringify(item.data);
            item.isClient = isClient;
            this.dict.add(item.name, item);
        }

        this.read();
    }

    add(item: GMCmdItemData)
    {
        this.list.push(item);
    }

    clear()
    {
        this.list = [];
        this.dict.clear();
        this.save();
    }

    clearCache()
    {
        Game.localStorage.removeItem(this.lsKey, true);
    }

    private get lsKey()
    {
        return this.name;
    }

    save()
    {
        Game.localStorage.setJSON(this.lsKey, this.list, true);
    }

    read()
    {
        let list: GMCmdItemData[] = Game.localStorage.getJSON(this.lsKey, true);
        if (!list) return;
        for (let i = 0; i < list.length; i++)
        {
            let item = list[i];
            let pre = this.dict.getValue(item.name);
            if (pre)
            {
                pre.datatxt = item.datatxt;
            }
            else
            {
                this.add(item);
            }
        }
    }
}
