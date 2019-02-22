function toStringArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    return txt.split(separator);
}
function toIntArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(parseInt(arr[i]));
    }
    return list;
}
function toFloatArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(parseFloat(arr[i]));
    }
    return list;
}
function toInt(val) {
    return parseInt(val);
}
function toFloat(val) {
    return parseFloat(val);
}
function toBoolean(val) {
    if (val) {
        if (isNumber(val)) {
            return val != 0;
        }
        else if (isString(val)) {
            return val == "true" || parseInt(val) != 0;
        }
        return true;
    }
    else {
        return false;
    }
}
function toBooleanArray(txt, separator) {
    if (separator === void 0) { separator = /[:,;]/; }
    var list = [];
    var arr = toStringArray(txt, separator);
    for (var i = 0; i < arr.length; i++) {
        list.push(toBoolean(arr[i]));
    }
    return list;
}
function configCellToArray(txt, separator) {
    if (separator === void 0) { separator = /[;]/; }
    return toStringArray(txt, separator);
}
function csvGetInt(csv, i) {
    return parseInt(csv[i]);
}
function csvGetFloat(csv, i) {
    return parseFloat(csv[i]);
}
function csvGetBoolean(csv, i) {
    return toBoolean(csv[i]);
}
function csvGetString(csv, i) {
    return csv[i];
}
function firstUpperCase(str) {
    return str.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
        return $1.toUpperCase() + $2.toLowerCase();
    });
}
/**
 * format('{0} {1} {2}', params1, params2, params3)
 * format('{0} {1:U} {2:L}', params1, params2, params3)
 * @param value
 * @param args
 */
function format(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    try {
        return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
            var s = match.split(':');
            if (s.length > 1) {
                i = i[0];
                match = s[1].replace('}', '');
            }
            var arg = formatPattern(match, args[i]);
            return typeof arg != 'undefined' && arg != null ? arg : "";
        });
    }
    catch (e) {
        return "";
    }
}
function formatPattern(match, arg) {
    switch (match) {
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
function isNullOrWhiteSpace(value) {
    try {
        if (value == null || value == 'undefined')
            return false;
        return value.replace(/\s/g, '').length < 1;
    }
    catch (e) {
        return false;
    }
}
//开头与结尾是否有空格字符
function isStartOrEndWithSpace(s) {
    var index = s.indexOf(" ");
    var lastIndex = s.lastIndexOf(" ");
    if (index == 0 || lastIndex == s.length - 1) {
        return true;
    }
    return false;
}
//开头与结尾是否是数字
function isStartOrEndWithNumber(s) {
    var fristChar = s.charAt(0);
    var lastChar = s.charAt(s.length - 1);
    if (isInt(fristChar) || isInt(lastChar)) {
        return true;
    }
    return false;
}
function trim(s) {
    return s.replace(/[\r\n]/g, "");
}
//////////////////////////////////////////////////////////////////////////
var __NumberUnitText = /** @class */ (function () {
    function __NumberUnitText() {
    }
    __NumberUnitText.B = "B";
    __NumberUnitText.M = "M";
    __NumberUnitText.K = "K";
    return __NumberUnitText;
}());
var __NumberUnitValue = /** @class */ (function () {
    function __NumberUnitValue() {
    }
    __NumberUnitValue.K = 1000;
    __NumberUnitValue.M = 1000 * 1000;
    __NumberUnitValue.B = 1000 * 1000 * 1000;
    return __NumberUnitValue;
}());
/**
 * 格式化数字 为K M B格式化
 * @param value 数字
 * @param fixed 数字保留几位
 */
function formatNumberUnit(value, fixed) {
    if (fixed === void 0) { fixed = 1; }
    var str = "";
    if (value >= __NumberUnitValue.B * 10) {
        value = value / __NumberUnitValue.B;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.B;
    }
    else if (value >= __NumberUnitValue.M * 10) {
        value = value / __NumberUnitValue.M;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.M;
    }
    else if (value >= __NumberUnitValue.K * 10) {
        value = value / __NumberUnitValue.K;
        str = value.toFixed(fixed + 1).slice(0, -1) + __NumberUnitText.K;
    }
    else {
        str = Math.floor(value) + "";
    }
    var a = str.split(".");
    var num = parseInt(a[0]);
    var result = num.toLocaleString('en-US');
    if (a.length >= 2) {
        if (fixed > 0) {
            result = result + "." + a[1];
        }
        else {
            result = result + a[1];
        }
    }
    return result;
}
function formatArrayNumberUnit(fmat) {
    var numbs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbs[_i - 1] = arguments[_i];
    }
    var args = [];
    for (var index = 0; index < numbs.length; index++) {
        var num = numbs[index];
        args.push(formatNumberUnit(num, num > 1000 ? 1 : 0));
    }
    return fmat.format.apply(fmat, args);
}
/**
 * 数字转化为字母 大写
 * @param value 数字
 * @param isCapital 是否大写
 */
function numberToLetter(value, isCapital) {
    if (isCapital === void 0) { isCapital = true; }
    if (value <= 0) {
        return null;
    }
    var letter = "";
    value--;
    if (value > 26) {
        return "";
    }
    if (value < 0) {
        return "";
    }
    var AString = isCapital ? 'A' : 'a';
    letter = String.fromCharCode(value + AString.charCodeAt(0));
    return letter;
}
function getStringLength(str) {
    ///<summary>获得字符串实际长度，中文2，英文1</summary>
    ///<param name="str">要获得长度的字符串</param>
    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128)
            realLength += 1;
        else
            realLength += 2;
    }
    return realLength;
}
;
