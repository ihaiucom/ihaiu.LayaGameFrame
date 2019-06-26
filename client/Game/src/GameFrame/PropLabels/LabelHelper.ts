import BaseConfig from "../../Config/BaseConfig";
import LabelList from "./LabelList";
import LabelField from "./LabelField";
import LabelType from "./LabelType";
import Dictionary from '../../Libs/Helpers/Dictionary';

export default class LabelHelper
{
    private static _fieldList: string[];
    private static _preFieldList: string[];
    private static _preListFieldList: string[];
    /** 字段列表 */
    public static get FieldList()
    {
        if(!LabelHelper._fieldList)
        {
            let list = LabelHelper._fieldList = [];

            for(let field in LabelField)
            {
                list.push(LabelField[field]);
            }
            
        }
        return LabelHelper._fieldList;
    }

    /** 包含前缀字段列表 (label_xxx) */
    public static get PreFieldList()
    {
        if(!LabelHelper._preFieldList)
        {
            let list = LabelHelper._preFieldList = [];

            for(let field of LabelHelper.FieldList)
            {
                list.push(this.getPreField( field ));
            }
            
        }
        return LabelHelper._preFieldList;
    }

    private static prefFieldDict: Dictionary<string, string> = new Dictionary<string, string>();
    public static getPreField(field: string): string
    {
        let result = this.prefFieldDict.getValue(field);
        if(!result)
        {
            result = "label_" + field;
            this.prefFieldDict.add(field, result);
        }
        return result;
    }

    /** 包含前缀字段列表 (label_list_xxx) */
    public static get PreListFieldList()
    {
        if(!LabelHelper._preListFieldList)
        {
            let list = LabelHelper._preListFieldList = [];

            for(let field of LabelHelper.FieldList)
            {
                list.push(this.getPreListField(field));
            }
            
        }
        return LabelHelper._preListFieldList;
    }
    
    private static preListFieldDict: Dictionary<string, string> = new Dictionary<string, string>();
    public static getPreListField(field: string): string
    {
        
        let result = this.preListFieldDict.getValue(field);
        if(!result)
        {
            result = "label_list_" + field;
            this.preListFieldDict.add(field, result);
        }
        return result;
    }

    
    /** 获取LabelType，根据LabelField */
    public static  GetLabelType(  labelType:string ):int
    {
        return LabelType[labelType];
    }


    
    /**
     * 生成配置 LabelList
     */
    public static GenerateConfigLabelList(config: BaseConfig, labelList: LabelList)
    {
        this.GenerateConfigLabelListForFields(config, labelList,  LabelHelper.FieldList);
    }

    
    
    /**
     * 生成配置 LabelList 制定 Fields
     */
    public static GenerateConfigLabelListForFields(config: BaseConfig, labelList: LabelList, fields: string[])
    {
        let count = fields.length;


        for(let i = 0; i < count; i ++)
        {
            let val = config[this.getPreField(fields[i])];
            let vals = config[this.getPreListField(fields[i])];
            let labelType = LabelHelper.GetLabelType(fields[i]);

            if(!labelType)
            {
                console.error(`labelType is undefined ${fields[i]}`);
            }

            if(val !== undefined && val != 0)
            {
                labelList.setVal(labelType, val);
            }

            if(vals !== undefined && vals.length > 0)
            {
                labelList.setVals(labelType, vals);
            }
        }
    }

}