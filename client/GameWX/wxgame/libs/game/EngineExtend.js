
// if (DOMParser && DOMParser.initXMl)
// {
// 	var _jsXmlNode = DOMParser.initXMl();
// 	if (_jsXmlNode)
// 	{
// 		_jsXmlNode = _jsXmlNode.constructor.prototype;

// 		if (_jsXmlNode)
// 		{
// 			_jsXmlNode.setAttribute = function (name, value)
// 			{
// 				if (this["attributes"] && this["attributes"][name])
// 					this["attributes"][name]["nodeValue"] = value;
// 			}
// 		}
// 	}
// }


fairygui.GRichTextField.prototype.handleSizeChanged = function()
{
	this.div.size(this.width,this.height);
    this.div.style.width = this.width;
    this.div.style.height = this.height;
}


function meval(code)
{
    return new Function("return " + code)();
}