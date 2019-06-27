function isNumber(x) {
    return typeof x === "number";
}
//判断是否是正整数
function isInt(s) {
    if (s != null) {
        var r, re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return (r == s) ? true : false;
    }
    return false;
}
function isString(x) {
    return typeof x === "string";
}
function isNullOrEmpty(x) {
    if (x instanceof Array)
        return x == null || x == undefined;
    return x == null || x == undefined || x == "";

}

function isNaNOrEmpty(x)
{
	return isNaN(x) || x === undefined || x === null
}

// 获取类名
function getClassName(obj) {
    return obj["constructor"]["name"];
}
// 获取函数名
function getFunctionName(method) {
    return method["name"] || method.toString().match(/function\s*([^(]*)\(/)[1];
}
// 获取时间戳
function getTime() {
    return new Date().getTime();
}
// 获取时间戳 （秒）
function getTimeStamp() {
    return Math.floor(getTime() / 1000);
}
function bToStr(b) {
    if (b < 1024) {
        return b + "B";
    }
    var kb = b / 1024;
    return kbToStr(kb);
}
function kbToStr(kb) {
    if (kb < 1024) {
        return Math.ceil(kb) + "KB";
    }
    var mb = kb / 1024;
    if (mb < 1024) {
        return (Math.ceil(mb * 100) / 100) + "MB";
    }
    var gb = mb / 1024;
    return (Math.ceil(gb * 100) / 100) + "GB";
}


function arrayRemoveItem(arr, item)
{
	var i = arr.indexOf(item);
	if(i != -1)
	{
		arr.splice(i, 1);
		return true;
	}
	return false;
}


window.isNumber = isNumber;
window.isInt = isInt;
window.isString = isString;
window.isNullOrEmpty = isNullOrEmpty;
window.isNaNOrEmpty = isNaNOrEmpty;
window.getClassName = getClassName;
window.getFunctionName = getFunctionName;
window.getTime = getTime;
window.getTimeStamp = getTimeStamp;
window.bToStr = bToStr;
window.kbToStr = kbToStr;
window.arrayRemoveItem = arrayRemoveItem;