import Label from "./Label";

export default class LabelList
{
    private _list: Label[] = [];
    private _dict = {};


    // 添加
    public add(label: Label)
    {
        this._dict[label.type] = label;
        this._list.push(label);
        return this;
    }

    // 获取
    public get(labelType: int): Label
    {
        return this._dict[labelType];
    }

    // 获取值
    public getVal(labelType: int): int
    {
        let label = this.get(labelType);
        return label ? label.val : 0;
    }

    public getVals(labelType:int) : int[]
    {
        let label = this.get(labelType);
        return label ? label.vals : [];
    }


    // 设置单个的值
    public setVal(labelType:int, val:int): Label
    {
        let label = this.get(labelType);
        if(label)
        {
            label.val = val;
        }
        else
        {
            label = new Label();
            label.type = labelType;
            label.val = val;
            this.add(label);
        }
        return label;
    }

    // 设置数组的值
    public setVals(labelType:int, vals:int[])
    {
        let label = this.get(labelType);
        if(label)
        {
            label.vals = vals;
        }
        else
        {
            label = new Label();
            label.type = labelType;
            label.vals = vals;
            this.add(label);
        }
        return label;
    }

    /** 获取列表 */
    public get list(): Label[]
    {
        return this._list;
    }


    /** 是否匹配 */
    isMatching(labelList: LabelList): boolean
    {
        let result = true;
        for(let item of this._list)
        {
            if(item.val != labelList.getVal(item.type))
            {
                result = false;
                break;
            }
        }
        return result;
    }

}