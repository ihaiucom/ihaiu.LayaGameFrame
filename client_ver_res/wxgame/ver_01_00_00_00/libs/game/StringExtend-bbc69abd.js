String.prototype.format = function (args)
{
    var result = this;
    if (arguments.length > 0)
    {
        if (arguments.length == 1 && typeof (args) == "object")
        {
            for (var key in args)
            {
                if (args[key] != undefined)
                {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else
        {
            for (var i = 0; i < arguments.length; i++)
            {
                if (arguments[i] != undefined)
                {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}



String.format = function () 
{
    if (arguments.length == 0)
        return null;

    var str = arguments[0];
    for (var i = 1; i < arguments.length; i++)
    {
        var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

String.prototype.eStartsWith = function (str, ignoreCase)
{
    return fairygui.utils.ToolSet.startsWith(this, str, ignoreCase);
}

String.prototype.eEndsWith = function (str, ignoreCase)
{
    return fairygui.utils.ToolSet.endsWith(this, str, ignoreCase);
}

String.prototype.trimLeft = function (targetString)
{
    return fairygui.utils.ToolSet.trimLeft(targetString);
}

String.prototype.trimRight = function (targetString)
{
    return fairygui.utils.ToolSet.trimRight(targetString);
}


// String.prototype.replaceAll = function (searchValue, replaceValue)
// {
//     var reg = new RegExp(searchValue, "g");
//     return this.replace(reg, replaceValue);
// }

