import PropId from "./PropId";

export default class PropIdGroup
{
    public id = 0;
    public maxId = 0;

    public constructor(id: int, maxId: int)
    {
        this.id = id;
        this.maxId = maxId;
    }

    

    /** 不可逆, HP、Energy */
    private static  nonrevertGroup: PropIdGroup[] ;

    /** 可回滚 */
    private static revertGroup: int[]    ;

    /** 状态 */
    private static stateGroup: int[]     ;

    public static setGroup(revertGroup: int[], stateGroup: int[])
    {
        PropIdGroup.revertGroup = revertGroup;
        PropIdGroup.stateGroup = stateGroup;
    }

    
    /** 不可逆, HP、Energy */
    public static get NonrevertGroup():PropIdGroup[]
    {
            if(PropIdGroup.nonrevertGroup == null)
            {

                let list: PropIdGroup[] = [];
                list.push( new PropIdGroup(PropId.reserve        , PropId.reserveMax         ) );
                PropIdGroup.nonrevertGroup = list;
            }
            return PropIdGroup.nonrevertGroup;
    }

    
    /** 可回滚 */
    public static get RevertGroup(): int[]
    {
        return PropIdGroup.revertGroup;
    }
    
    /** 状态 */
    public static get StateGroup(): int[]
    {
        return PropIdGroup.stateGroup;
    }

}