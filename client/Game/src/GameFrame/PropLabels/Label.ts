import LabelConfig from "../../Config/ConfigExtends/LabelConfig";
import Game from "../../Game";
import LabelTypeConfig from "../../Config/ConfigExtends/LabelTypeConfig";

export default class Label
{
    // LabelType
    public type: int;

    // LabelValue
    public val:int;

    // LabelValue[]
    public vals:int[];


    // 字段 配置
    public get fieldConfig(): LabelTypeConfig
    {
        return Game.config.labelType.getConfig(this.type);
    }
    
    // 值 配置
    public get valConfig(): LabelConfig
    {
        return Game.config.label.getConfig(this.val);
    }

    // 字段 描述名
    public get fieldName(): string
    {
        return this.fieldConfig.Name;
    }

    // 字段名
    public get field(): string
    {
        return this.fieldConfig.field;
    }

    // 值 描述名
    public get name(): string
    {
        return this.valConfig.name;
    }

    // 图标URL
    public get icon(): string
    {
        return this.valConfig.iconUrl;
    }




}