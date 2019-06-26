import { PropType } from "./PropType";
import PropHelper from "./PropHelper";
import PropField from "./PropField";
import Game from "../../Game";
import PropertyConfig from "../../Config/ConfigExtends/PropertyConfig";
import { PropGroupType } from "./PropGroupType";

export default class Prop
{
    private static UID:int = 0;
    uid;
    constructor()
    {
        this.uid = Prop.UID ++;
    }
    
    private _type: PropType;
    private _id: int;
    private _typeId: int;

    public val: float = 0;

    clone():Prop
    {
        let d = new Prop();
        d._type = this._type;
        d._id = this._id;
        d._typeId = this._typeId;
        d.val = this.val;
        if(isNaN(this.val))
            d.val = 0;
        return d;
    }

    copyValue(p: Prop): Prop
    {
        this._type = p._type;
        this._id = p._id;
        this._typeId = p._typeId;
        this.val = p.val;
        if(isNaN(p.val))
            this.val = 0;
        return this;
    }

    public toString()
    {
        return `Prop {id:${this.id}, val:${this.val}, field:${this.field}, name:${this.name}, type:${this.type}, }`;
    }

    public static ToStr(list:Prop[]): string
    {
        let str = "";
        for(let prop of list)
        {
            str += "    " + prop.toString();
        }

        return str;
    }

    /**
     * 创建Prop
     * @param propId  属性ID
     * @param propVal  值
     * @param propType 属性类型
     */
    public static Create(propId: int, propVal: float, propType: PropType = PropType.Add): Prop
    {
        let prop = new Prop();
        prop._typeId = PropHelper.GetTypeId(propId, propType);
        prop._id = propId;
        prop._type = propType;
        prop.val = propVal;
        
        if(isNaNOrEmpty(propVal))
            prop.val = 0;
        return prop;
    }

    /**
     * 创建Prop
     * @param propTypeId 属性类型ID
     * @param propVal 值
     */
    public static CreateByTypeid(propTypeId: int, propVal: float): Prop
    {
        let prop = new Prop();
        prop._typeId = propTypeId;
        prop._id = PropHelper.PropTypeid2Id(propTypeId);
        prop._type = PropHelper.PropTypeid2Type(propTypeId);
        prop.val = propVal;
        if(isNaN(propVal))
            prop.val = 0;
        return prop;
    }

    /**
     * 创建Prop
     * @param proField 属性字段
     * @param propVal 值
     */
    public static CreateByField(proField: string, propVal: float)
    {
        let prop = new Prop();
        prop._id = PropHelper.GetPropId(proField);
        prop._type = PropType.Add;
        prop._typeId = PropHelper.GetTypeId(prop._id, prop._type);
        prop.val = propVal;
        if(isNaN(propVal))
            prop.val = 0;
        return prop;
    }


    // id
    public get id(): int
    {
        return this._id;
    }

    public set id(value: int)
    {
        this._id = value;
        this._typeId = PropHelper.GetTypeId(this._id, this._type);
    }

    // type
    public get type():PropType
    {
        return this._type;
    }

    public set type(value: PropType)
    {
        this._type = value;
        this._typeId = PropHelper.GetTypeId(this._id, this._type);
    }

    // typeId
    public get typeId(): int
    {
        return this._typeId;
    }

    public set typeId(value: int)
    {
        this._typeId = value;
        this._id = PropHelper.PropTypeid2Id(value);
        this._type = PropHelper.PropTypeid2Type(value);
    }


    /** 配置 */
    public get config():PropertyConfig
    {
        return Game.config.property.getConfig(this._id);
    }


    /** 组类型 */
    public get groupType():PropGroupType
    {
        return this.config.groupType;
    }

    
    /** 是否可以回滚 */
    public get enableRevert(): boolean
    {
        return this.groupType != PropGroupType.Nonrevert;
    }

    /** 属性字段名 */
    public get field():string
    {
        return this.config.field;
    }

    /** 显示名称 */
    public get name(): string
    {
        return this.config.name;
    }

    /** 图标URL */
    public get icon(): string
    {
        return this.config.iconUrl;
    }

    /** 是否可见 */
    public get visiable():boolean
    {
        return this.config.visible;
    }













    
}