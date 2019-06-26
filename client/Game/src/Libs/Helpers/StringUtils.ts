import TEXT from "../../Config/Keys/TEXT";
import NumberTransfrom from "./NumberTransfrom";
import Mathf from "../Mathf";

export default class StringUtils
{
    /** 字符串 */
    public  static readonly empty = "";
    
    /** 小数点多少位 */
    public static  FloatLength(num: number, floatM: number = 100): string
    {
        return Mathf.FloatLength(num, floatM).toString();
    }

    /** 填充长度 */
    public static  FillLeft(str: string, length: number , c: string = '0'): string
    {
        while(str.length < length)
        {
            str = c + str;
        }
        return str;
    }

    public static  FillRight(str: string, length: number , c: string = '0'): string
    {
        while (str.length < length)
        {
            str = str + c;
        }
        return str;
    }

    private static _numberTransfrom:NumberTransfrom;
    public static get numberTransfrom():NumberTransfrom
    {
        if(!this._numberTransfrom)
        {
            this._numberTransfrom = new NumberTransfrom();
        }
        return this._numberTransfrom;
    }

    /** 获取中文数字 */
    public static GetChineseNum(num: number): string
    {
        return this.numberTransfrom.transfrom(num);
    }
}

window["StringUtils"] = StringUtils;