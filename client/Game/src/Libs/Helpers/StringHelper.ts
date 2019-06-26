function toStringArray(txt: string, separator = /[:,;&]/): string[]
{
    return txt.split(separator);
}

function toIntArray(txt: string, separator = /[:,;&]/): number[]
{
    let list: number[] = [];
    let arr = toStringArray(txt, separator);
    for (let i = 0; i < arr.length; i++)
    {
        list.push(parseInt(arr[i]));
    }
    return list;
}



function toFloatArray(txt: string, separator = /[:,;&]/): number[]
{
    let list: number[] = [];
    let arr = toStringArray(txt, separator);
    for (let i = 0; i < arr.length; i++)
    {
        list.push(parseFloat(arr[i]));
    }
    return list;
}

function toInt(val: string): number
{
    return parseInt(val);
}

function toFloat(val: string): number
{
    return parseFloat(val);
}

function toBoolean(val: any): boolean
{
    if (val)
    {
        if (isNumber(val))
        {
            return val != 0;
        }
        else if (isString(val))
        {
            return val == "true" || parseInt(val) != 0;
        }
        return true;
    }
    else
    {
        return false;
    }
}


function toBooleanArray(txt: string, separator = /[:,;&]/): boolean[]
{
    let list: boolean[] = [];
    let arr = toStringArray(txt, separator);
    for (let i = 0; i < arr.length; i++)
    {
        list.push(toBoolean(arr[i]));
    }
    return list;
}



function configCellToArray(txt: string, separator = /[;]/): string[]
{
    return toStringArray(txt, separator);
}

function csvGetInt(csv: string[], i: number): number
{
    return parseInt(csv[i]);
}


function csvGetFloat(csv: string[], i: number): number
{
    return parseFloat(csv[i]);
}

function csvGetBoolean(csv: string[], i: number): boolean
{
    return toBoolean(csv[i]);
}

function csvGetString(csv: string[], i: number): string
{
    return csv[i];
}

function firstUpperCase(str: string): string
{
    return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2)
    {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}


/**
 * format('{0} {1} {2}', params1, params2, params3)
 * format('{0} {1:U} {2:L}', params1, params2, params3)
 * @param value 
 * @param args 
 */
function format(value, ...args): string
{
    try
    {
        return value.replace(/{(\d+(:.*)?)}/g, function (match, i)
        {
            var s = match.split(':');
            if (s.length > 1)
            {
                i = i[0];
                match = s[1].replace('}', '');
            }

            var arg = formatPattern(match, args[i]);
            return typeof arg != 'undefined' && arg != null ? arg : "";
        });
    }
    catch (e)
    {
        return "";
    }
}

function formatPattern(match, arg): string
{
    switch (match)
    {
        case 'L':
            arg = arg.toLowerCase();
            break;
        case 'U':
            arg = arg.toUpperCase();
            break;
        default:
            break;
    }

    return arg;
}


function isNullOrWhiteSpace(value: string): boolean
{
    try
    {
        if (value == null || value == 'undefined')
            return false;

        return value.replace(/\s/g, '').length < 1;
    }
    catch (e)
    {
        return false;
    }
}


//开头与结尾是否有空格字符
function isStartOrEndWithSpace(s: string)
{
    var index = s.indexOf(" ");
    var lastIndex = s.lastIndexOf(" ")
    if (index == 0 || lastIndex == s.length - 1)
    {
        return true;
    }
    return false;
}

//开头与结尾是否是数字
function isStartOrEndWithNumber(s: string)
{
    var fristChar = s.charAt(0);
    var lastChar = s.charAt(s.length - 1);
    if (isInt(fristChar) || isInt(lastChar))
    {
        return true;
    }
    return false;
}

function trim(s)
{
    return s.replace(/[\r\n]/g, "");
}

//////////////////////////////////////////////////////////////////////////
class __NumberUnitText
{
    static B: string = "B";
    static M: string = "M";
    static K: string = "K";
}

class __NumberUnitValue
{
    static K: number = 1000;
    static M: number = 1000 * 1000;
    static B: number = 1000 * 1000 * 1000;
}

/**
 * 格式化数字 为K M B格式化
 * @param value 数字
 * @param fixed 数字保留几位
 */
function formatNumberUnit(value: number, fixed: number = 1): string
{
    var str = ""
    if (value >= __NumberUnitValue.B * 10)
    {
        value = value / __NumberUnitValue.B;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.B;
    }
    else if (value >= __NumberUnitValue.M * 10)
    {
        value = value / __NumberUnitValue.M;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.M;
    }
    else if (value >= __NumberUnitValue.K * 10)
    {
        value = value / __NumberUnitValue.K;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.K;
    }
    else
    {
        str = Math.floor(value) + "";
    }

    var a = str.split(".")
    var num = parseInt(a[0]);
    var result = num.toLocaleString('en-US');

    if (a.length >= 2)
    {
        if (fixed > 0)
        {
            result = result + "." + a[1];
        }
        else
        {
            result = result + a[1];
        }
    }

    return result;
}

function formatArrayNumberUnit(fmat: string, ...numbs: number[])
{
    let args: string[] = [];
    for (var index = 0; index < numbs.length; index++)
    {
        var num = numbs[index];
        args.push(formatNumberUnit(num, num > 1000 ? 1 : 0));
    }
    return fmat.format(...args);
}

/**
 * 数字转化为字母 大写
 * @param value 数字
 * @param isCapital 是否大写
 */
function numberToLetter(value: number, isCapital: boolean = true)
{
    if (value <= 0)
    {
        return null;
    }
    let letter: string = "";
    value--;
    if (value > 26)
    {
        return "";
    }
    if (value < 0)
    {
        return "";
    }
    let AString = isCapital ? 'A' : 'a';
    letter = String.fromCharCode(value + AString.charCodeAt(0));
    return letter;
}

function getStringLength(str)
{
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++)
    {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
};