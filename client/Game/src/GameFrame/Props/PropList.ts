import Prop from "./Prop";
import Dictionary from "../../Libs/Helpers/Dictionary";
import { PropType } from "./PropType";

export default class PropList
{
    private _list: Prop[] = [];
    private _dict = {};

    // 添加
    public add(prop: Prop)
    {
        this._dict[prop.id] = prop;
        this._list.push(prop);
        return this;
    }

    // 获取
    public get(propId: int): Prop
    {
        return this._dict[propId];
    }

    // 获取值
    public getVal(propId: int): float
    {
        let prop = this.get(propId);
        if(prop)
            return prop.val;
        return 0;
    }

    // 添加值
    public addOrSetVal(propId:int, val:float, propType: PropType = PropType.Add ): Prop
    {
        let prop = this.get(propId);
        if(prop)
        {

            if(isNaN(val))
                val = 0;
            prop.val += val;
        }
        else
        {
            prop = Prop.Create(propId,  val, propType);
            this.add(prop);
        }
        return prop;
    }

    public setVal(propId:int, val:float, propType: PropType = PropType.Add ): Prop
    {
        let prop = this.get(propId);
        if(prop)
        {
            if(isNaN(val))
                val = 0;
            prop.val += val;
        }
        else
        {
            prop = Prop.Create(propId, val, propType);
            this.add(prop);
        }
        return prop;
    }

    /** 获取列表 */
    public get list(): Prop[]
    {
        return this._list;
    }

    public clear(): void {
        this._dict = {};
        this._list = [];;
    }

}