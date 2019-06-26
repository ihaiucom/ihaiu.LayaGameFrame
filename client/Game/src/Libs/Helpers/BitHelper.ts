import StringUtils from "./StringUtils";

export default class BitHelper
{
    /** 是否包含 */
    static Contain(val: number, type: number): boolean
    {
        return (val & type) != 0;
    }

    /** 添加 */
    static Add(val: number, type: number) : number
    {
        return val | type;
    }


    public static BitUnset(ui:int , len:int  , bit:int ):uint
    {
        let  mask = ((1<<len+1) -1);
        return ui & ~(mask<<bit) ;
    }

    public static BitSet(ui:uint , len:int , bit:int , val:uint ):uint
    {
        let mask = ((1<<len+1)-1);
        let nv = mask & val;
        return ui & ~(mask<<bit) | (nv<<bit);
    }

    public static BitGet(ui: uint , len: int , bit:int ):uint
    {
        let mask = ((1<<len+1)-1);
        return ui & (mask << bit);
    }

    


    
    public static Bit2Str(bit: int ):string
    {
        let kb = bit / 8 / 1024;
        if (kb < 1024)
        {
            return StringUtils.FloatLength(kb, 100) + " KB";
        }
        else
        {
            let mb = kb / 1024;
            return  StringUtils.FloatLength(mb, 100) + " MB";
        }
    }

    public static Byte2Str(bytesSize:int): string
    {
        let kb = bytesSize / 1024;
        if(kb < 1024)
        {
            return StringUtils.FloatLength(kb, 100) + " KB";
        }
        else
        {
            let mb = kb / 1024;
            return StringUtils.FloatLength(mb, 100) + " MB";
        }
    }
}