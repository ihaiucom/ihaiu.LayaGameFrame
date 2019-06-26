function isNumber(x: any): x is number
{
	return typeof x === "number";
}


//判断是否是正整数
function isInt(s)
{
	if (s != null)
	{
		var r, re;
		re = /\d*/i; //\d表示数字,*表示匹配多个数字
		r = s.match(re);
		return (r == s) ? true : false;
	}
	return false;
}

function isString(x: any): x is string
{
	return typeof x === "string";
}

function isNullOrEmpty(x: string | string[])
{
	if (x instanceof Array)
		return x == null || x == undefined;
	return x == null || x == undefined || x == "";
}

function isNaNOrEmpty(x: number)
{
	return isNaN(x) || x === undefined || x === null
}

// 获取类名
function getClassName(obj: any): string
{
	return obj["constructor"]["name"];
}

// 获取函数名
function getFunctionName(method: Function): string
{
	return method["name"] || method.toString().match(/function\s*([^(]*)\(/)[1]
}

// 获取时间戳
function getTime(): number
{
	return new Date().getTime();
}

// 获取时间戳 （秒）
function getTimeStamp(): number
{
	return Math.floor(getTime() / 1000);
}





function bToStr(b): string
{
	if (b < 1024)
	{
		return b + "B";
	}
	let kb = b / 1024;
	return kbToStr(kb);
}



function kbToStr(kb): string
{
	if (kb < 1024)
	{
		return Math.ceil(kb) + "KB";
	}

	let mb = kb / 1024;
	if (mb < 1024)
	{
		return (Math.ceil(mb * 100) / 100) + "MB";
	}

	let gb = mb / 1024;
	return (Math.ceil(gb * 100) / 100) + "GB";
}

function arrayRemoveItem(arr: any[], item: any): boolean
{
	var i = arr.indexOf(item);
	if(i != -1)
	{
		arr.splice(i, 1);
		return true;
	}
	return false;
}


