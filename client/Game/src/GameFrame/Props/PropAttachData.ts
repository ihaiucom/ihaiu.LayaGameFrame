import Prop from "./Prop";
import PropUnit from "./PropUnit";
import Log from "../Log/Log";

export default class PropAttachData
{
    private static UID = 10000;

    public uid:int = 0;
    public props: Prop[];

    constructor(props: Prop[], uid: number = 0)
    {
        if(uid == 0)
        {
            uid = PropAttachData.UID ++;
        }
        this.uid = uid;
        this.props = props;
    }

    public static Create(props: Prop[], uid: number = 0): PropAttachData
    {
        return new PropAttachData(props, uid);
    }


    /** 将属性数据附加给单位 */
    public App(unit: PropUnit)
    {
        let revertCount = 0;
        for (let prop of this.props)
        {
            if(isNaN(prop.val))
            {
                Log.Error("PropAttachData App  Val IsNaN  ", prop);
            }
            unit.addPropByData(prop);

            if(prop.enableRevert)
            {
                revertCount++;
            }
        }

        if (revertCount > 0)
        {
            unit.attachProps.add(this.uid, this);
        }

    }

    
    /** 将属性数据从单位回滚 */
    public Revoke(unit: PropUnit )
    {
        if (!unit.attachProps.hasKey(this.uid))
            return;

        for(let prop of this.props)
        {
            if(prop.enableRevert)
            {
                unit.subProp(prop);
            }
        }

        unit.attachProps.remove(this.uid);
    }

    public toString()
    {
        return `PropAttachData uid=${this.uid}, \n${Prop.ToStr(this.props)}`;
    }

    
}