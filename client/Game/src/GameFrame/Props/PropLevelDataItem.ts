import Prop from "./Prop";
import PropertyConfig from "../../Config/ConfigExtends/PropertyConfig";
import Game from "../../Game";
import Pool = Laya.Pool;

export default class PropLevelDataItem
{
    /** 属性ID */
    public propId = 0;

    /** 当前属性 */
    public val = 0;

    /** 下一等级 属性 */
    public nextVal = 0;

    /** 差值 */
    public sub = 0;

    get config(): PropertyConfig
    {
        return Game.config.property.getConfig(this.propId);
    }

    /** 显示名称 */
    get name(): string
    {
        return this.config.name;
    }

    /** 字段名称 */
    get field(): string
    {
        return this.config.field;
    }

    /** 图标URL */
    get icon(): string
    {
        return this.config.iconUrl;
    }

    /** 是否可见 */
    public get visiable():boolean
    {
        return this.config.visible;
    }


    // 计算差值
    calculate()
    {
        this.sub = this.nextVal - this.val;
    }

    /** 丢回对象池 */
    public poolRecover()
    {
        this.propId = 0;
        this.val = 0;
        this.nextVal = 0;
        this.sub = 0;
        Pool.recover(PropLevelDataItem.POOL_SIGN, this)
    }



    private static POOL_SIGN = "PropLevelDataItem";
    /** 从对象池里获取对象 */
    public static poolGet():PropLevelDataItem
    {
        let item = <PropLevelDataItem> Pool.getItemByClass(PropLevelDataItem.POOL_SIGN, PropLevelDataItem)
        return item;
    }



}