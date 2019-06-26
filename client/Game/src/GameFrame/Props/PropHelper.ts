import { PropType } from "./PropType";
import BaseConfig from "../../Config/BaseConfig";
import PropList from "./PropList";
import PropField from "./PropField";
import PropId from './PropId';
import Dictionary from '../../Libs/Helpers/Dictionary';

export default class PropHelper
{
    // 最大值
    private static TYPE_ID_MASK = 100;

    
    /** 获取propId, 根据 propTypeId */
    public static PropTypeid2Id(propTypeId: int): int
    {
        return propTypeId % PropHelper.TYPE_ID_MASK;
    }

    
    /** 获取propType, 根据 propTypeId */
    public static PropTypeid2Type(propTypeId: int): PropType
    {
        return Math.floor(propTypeId / PropHelper.TYPE_ID_MASK);
    }

    /** 获取propTypeId, 根据 propId和propType */
    public static GetTypeId(propId: int, propType:PropType): int
    {
        return propType * PropHelper.TYPE_ID_MASK + propId;
    }

    
    /** 获取属性ID，根据属性字段 */
    public static  GetPropId(  propField:string ):int
    {
        return PropId[propField];
    }


    
    /** 获取属性字段，根据属性ID */
    public static  GetPropField(  propId:int ):string
    {
        return PropHelper.ID2FieldDict.getValue(propId);
    }
    

    /** 字段列表 */
    private static _fieldList: string[];
    public static get FieldList(): string[]
    {
        if(!PropHelper._fieldList)
        {
            let list = PropHelper._fieldList = [];

            for(let field in PropField)
            {
                list.push(PropField[field]);
            }
        }
        return PropHelper._fieldList;
    }

    /** 带有前缀的字段列表 */
    private static _preFieldList: string[];
    public static get PreFieldList(): string[]
    {
        
        if(!PropHelper._preFieldList)
        {
            
            let list = PropHelper._preFieldList = [];

            for(let field of PropHelper.FieldList)
            {
                list.push("prop_" + field);
            }
        }
        return PropHelper._preFieldList;
    }

    private static _ID2FieldDict:Dictionary<int, string>;
    private static get ID2FieldDict():Dictionary<int, string>
    {
        if(!PropHelper._ID2FieldDict)
        {
            let dict = PropHelper._ID2FieldDict = new Dictionary<int, string>();
            for(let field in PropId)
            {
                if(field.toLowerCase() == "list")
                    continue;
                dict.add(PropId[field], field);
            }

        }

        return PropHelper._ID2FieldDict;

    }

    /**
     * 生成配置 PropList
     */
    public static GenerateConfigPropList(config: BaseConfig, propList: PropList)
    {
        let fields = PropHelper.FieldList;
        let preFields = PropHelper.PreFieldList;
        let count = fields.length;

        for(let i = 0; i < count; i ++)
        {
            let val = config[preFields[i]];
            if(val !== undefined)
            {
                let propId = PropHelper.GetPropId(fields[i]);
                propList.setVal(propId, val);
            }
        }
    }

    /** 艺人5属性 */
    private static _actorPropIds:int[];
    public static get ActorPropIds():int[]
    {
        if(!this._actorPropIds)
        {
            this._actorPropIds = [
                PropId.charm,
                PropId.eloquence,
                PropId.entertainment,
                PropId.act,
                PropId.talent
            ];

        }
        return this._actorPropIds;
    }

    /** 艺人5属性 */
    private static _actorPropIdsHasAll:int[];
    public static get ActorPropIdsHasAll():int[]
    {
        if(!this._actorPropIdsHasAll)
        {
            this._actorPropIdsHasAll = [
                PropId.tabAll,
                PropId.charm,
                PropId.eloquence,
                PropId.entertainment,
                PropId.act,
                PropId.talent
            ];
        }
        return this._actorPropIdsHasAll;
    }

}