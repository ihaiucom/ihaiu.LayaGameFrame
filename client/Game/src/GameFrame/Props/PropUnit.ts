import Dictionary from "../../Libs/Helpers/Dictionary";
import PropAttachData from "./PropAttachData";
import PropHelper from "./PropHelper";
import { PropType } from "./PropType";
import Prop from "./Prop";
import PropIdGroup from "./PropIdGroup";
import PropId from "./PropId";

/** 单位属性（如：英雄、士兵、艺人） */
export default class PropUnit
{
    /** 基本属性 */
    public bases = new Dictionary<int, float>();

    /** 附加具体值, 相对基础值 */
    public basesadds = new Dictionary<int, float>();

    /** 附加百分比, 相对基础值 */
    public basepers = new Dictionary<int, float>();

    /** 附加百分比，相对上限值，比如血量 */
    public maxpers = new Dictionary<int, float>();

    /** 附加具体值 */
    public adds = new Dictionary<int, float>();

    /** 附加百分比 */
    public pers = new Dictionary<int, float>();

    /** 终于属性 */
    public finals = new Dictionary<int, float>();
    
    /** 附加属性数据字典 */
    public attachProps = new Dictionary<int, PropAttachData>();

    
    private getPropDict(propType: PropType):Dictionary<int, float>
    {
        switch (propType)
        {
            case PropType.Base:
                return this.bases;
            case PropType.Basesadd:
                return this.basesadds;
            case PropType.Baseper:
                return this.basepers;
            case PropType.Maxper:
                return this.maxpers;
            case PropType.Add:
                return this.adds;
            case PropType.Per:
                return this.pers;
            case PropType.Final:
                return this.finals;
        }
    }

    
    /** 获取属性值 */
    public getPropByTypeid(propTypeId: int):float
    {
        return this.getProp(PropHelper.PropTypeid2Id(propTypeId), PropHelper.PropTypeid2Type(propTypeId));
    }
    
    public getProp(propId:int , propType: PropType ):float
    {
        let dict = this.getPropDict(propType);
        return dict.getValueOrDefault(propId, 0);
    }

     /** 设置属性值 */
     public setPropByTypeid(propTypeId:int , propVal:float )
     {
         this.setProp(PropHelper.PropTypeid2Id(propTypeId), PropHelper.PropTypeid2Type(propTypeId), propVal);
     }

     public setProp(propId:int , propType:PropType , propVal:float )
     {
        let dict = this.getPropDict(propType);
        dict.set(propId, propVal);
     }



     
    /** 减属性 */
    public subProp( prop:Prop)
    {
        this.addProp(prop.id, prop.type, - prop.val);
        //if(prop.GroupType == PropGroupType.State && GetProp(prop.Id, prop.PropType) < 0)
        //{
        //    Loger.LogErrorFormat("减属性的状态 小于0， 有可能减的次数 多与加的次数");
        //    SetProp(prop.Id, prop.PropType, 0);
        //}
    }

    /** 加属性值 */
    public addPropByData(prop:Prop)
    {
        this.addProp(prop.id, prop.type, prop.val);
    }

    public addPropByTypeid(propTypeId:int , propVal:float )
    {
        this.addProp(PropHelper.PropTypeid2Id(propTypeId), PropHelper.PropTypeid2Type(propTypeId), propVal);
    }

    public addProp(propId:int , propType:PropType , propVal:float )
    {
        let dict = this.getPropDict(propType);
        let val = dict.getValueOrDefault(propId) + propVal;
        dict.set(propId, val);
    }

    

    /** 初始化不可回滚最终值 */
    public initNonrevertFinals()
    {
        let             list            = PropIdGroup.NonrevertGroup;
        let             count           = list.length;
        let             group:PropIdGroup ;
        let             id              = 0;
        let             maxId           = 0;

        // final = (final + add) * (1 + per / 100)      +     base * baseper / 100      +     baseadd           + max.base * maxper
        for (let i = 0; i < count; i++)
        {
            group = list[i];
            id = group.id;
            maxId = group.maxId;

            this.finals.set(id, this.bases.getValueOrDefault(id));
        }
    }

    
    /** 计算 */
    public calculate()
    {
        this.CalculateNonrevert();
        this.CalculateRevert();
        this.CalculateState();
    }

    
        /** 计算--不可逆 */
        private CalculateNonrevert()
        {
            let             list            = PropIdGroup.NonrevertGroup;
            let             count           = list.length;
            let             group:PropIdGroup ;
            let             id              = 0;
            let             maxId           = 0;

            let base = 0;
            let basesadd = 0;
            let baseper = 0;
            let maxper = 0;
            let add = 0;
            let per = 0;
            let final = 0;
            let baseMax = 0;

            // final = (final + add) * (1 + per / 100)      +     base * baseper / 100      +     baseadd           + max.base * maxper
            for (let i = 0; i < count; i++)
            {
                group   = list[i];
                id      = group.id;
                maxId   = group.maxId;

                base = this.bases.getValueOrDefault(id, 0);
                basesadd = this.basesadds.getValueOrDefault(id, 0);
                baseper = this.basepers.getValueOrDefault(id, 0);
                maxper = this.maxpers.getValueOrDefault(id, 0);
                add = this.adds.getValueOrDefault(id, 0);
                per = this.pers.getValueOrDefault(id, 0);
                final = this.finals.getValueOrDefault(id, 0);

                baseMax = this.bases.getValueOrDefault(maxId, 0);

                final = (final + add)  *  (1 + per / 100)           +     base * baseper / 100     +     basesadd            +   baseMax * maxper;

                this.finals.set(id, final);
                this.adds.set(id, 0);
                this.pers.set(id, 0);
                this.basepers.set(id, 0);
                this.basesadds.set(id, 0);
                this.maxpers.set(id, 0);
            }
        }

        /** 计算--可回滚 */
        private CalculateRevert()
        {
            
            let             list            = PropIdGroup.RevertGroup;
            let             count           = list.length;
            let             id              = 0;

            let base = 0;
            let basesadd = 0;
            let baseper = 0;
            let maxper = 0;
            let add = 0;
            let per = 0;
            let final = 0;
            // final = (base + add)  * ( 1 + Math.max(per / 100, 1)))



            // final = (base + add) * (1 + per / 100) + base * baseper / 100 + baseadd
            for(let i = 0; i < count; i ++)
            {
                id = list[i];

                
                base = this.bases.getValueOrDefault(id, 0);
                basesadd = this.basesadds.getValueOrDefault(id, 0);
                baseper = this.basepers.getValueOrDefault(id, 0);
                maxper = this.maxpers.getValueOrDefault(id, 0);
                add = this.adds.getValueOrDefault(id, 0);
                per = this.pers.getValueOrDefault(id, 0);

                final = (base + add)   *  (1 + per / 100)   +  base * baseper / 100 + basesadd;
                 
                this.finals.set(id, final);
            }
        }


        /** 计算--状态 */
        private CalculateState()
        {
             
            let             list            = PropIdGroup.StateGroup;
            let             count           = list.length;
            let             id              = 0;

            let base = 0;
            let add = 0;
            let final = 0;



            // final = (final + add)
            for (let i = 0; i < count; i++)
            {
                id = list[i];
                
                add = this.adds.getValueOrDefault(id, 0);
                final = this.finals.getValueOrDefault(id, 0);

                final = final + add;
                this.finals.set(id, final);
                this.adds.set(id, 0);
            }
        }


        /** 属性实体--添加附加 */
        public AppProps(propAttachData: PropAttachData , calculate:boolean  = false)
        {
            if (propAttachData == null) return;

            if (this.attachProps.hasKey(propAttachData.uid))
            {
                this.RevokePropsById(propAttachData.uid);
            }
            propAttachData.App(this);


            if (calculate)
            {
                this.calculate();
            }
        }

        /** 属性实体--移除附加 */
        public RevokeProps(attachPropData: PropAttachData , calculate: boolean  = false)
        {
            if (attachPropData == null) return;

            if (this.attachProps.hasKey(attachPropData.uid))
            {
                attachPropData.Revoke(this);
            }

            if (calculate)
            {
                this.calculate();
            }
        }


        /** 属性实体--移除附加 */
        public RevokePropsById(attachPropUid:int , calculate:boolean  = false)
        {
            let propAttachData: PropAttachData = this.attachProps.getValue(attachPropUid);
            if (propAttachData)
            {
                this.RevokeProps(propAttachData, calculate);
            }
        }


        /** 属性实体--清空 */
        public RevokeAll()
        {
            let list = this.attachProps.getValues();
            let count = list.length;
            for(let i = 0; i < count; i ++)
            {
                this.RevokeProps(list[i]);
            }
            this.calculate();
        }



        /** 清空 */
        public Clear()
        {
            let list = PropId.List;
            let count = list.length;
            let id = 0;
            for (let i = 0; i < count; i++)
            {
                id = list[i]; 
                
                this.adds.set(id, 0);
                this.basesadds.set(id, 0);
                this.basepers.set(id, 0);
                this.maxpers.set(id, 0);
                this.adds.set(id, 0);
                this.pers.set(id, 0);
                this.pers.set(id, 0);
                this.finals.set(id, 0);
            }

            this.attachProps.clear();
        }



}