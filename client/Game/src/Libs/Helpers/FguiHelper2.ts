
// // 屏幕自适应
// function autoScreenSize(content: fairygui.GObject, alignH?: string, alignV?: string)
// {
// 	let rate = ScreenSetting.screenScaleExpand;

// 	content.width = content.sourceWidth * rate;
// 	content.height = content.sourceHeight * rate;
// 	if (alignH)
// 	{
// 		let parent = fairygui.GRoot.inst;

// 		switch (alignH)
// 		{
// 			case Laya.Stage.ALIGN_LEFT:
// 				content.x = 0;
// 				break;
// 			case Laya.Stage.ALIGN_CENTER:
// 				content.x = (parent.width - content.width) * 0.5;
// 				break;
// 			case Laya.Stage.ALIGN_RIGHT:
// 				content.x = parent.width - content.width;
// 				break;
// 		}

// 		switch (alignV)
// 		{
// 			case Laya.Stage.ALIGN_TOP:
// 				content.y = 0;
// 				break;
// 			case Laya.Stage.ALIGN_MIDDLE:
// 				content.y = (parent.height - content.height) * 0.5;
// 				break;
// 			case Laya.Stage.ALIGN_BOTTOM:
// 				content.y = parent.height - content.height;
// 				break;
// 		}
// 	}
// }

// // 屏幕居中
// function centerScreen(content: fairygui.GObject)
// {
// 	content.x = (ScreenSetting.screenWidth - content.width) * 0.5;
// 	content.y = (ScreenSetting.screenHeight - content.height) * 0.5;
// }

// function centerScreenForCenter(content: fairygui.GObject)
// {
// 	content.x = ScreenSetting.screenWidth * 0.5;
// 	content.y = ScreenSetting.screenHeight * 0.5;
// }

// // 屏幕大小
// function setScreenSize(content: fairygui.GObject)
// {
// 	content.width = ScreenSetting.screenWidth;
// 	content.height = ScreenSetting.screenHeight;
// }



// /** 获取值，使用访问路径 */
// function getValueForPath(path: string, content?: any, ...args)
// {

// 	if (path.endsWith("()"))
// 	{
// 		return getFunResultForPath(path, content, ...args);
// 	}
// 	else
// 	{
// 		return getFieldValueForPath(path, content);
// 	}
// }


// /** 获取函数结果值，使用访问路径 */
// function getFunResultForPath(path: string, content?: any, ...args)
// {
// 	if (path.endsWith("()"))
// 	{
// 		path = path.replace("()", "");
// 		let fun: Function = getFieldValueForPath(path, content);
// 		if (fun)
// 		{
// 			let paths = path.split(/[\.\/]/);
// 			if (paths.length == 1)
// 			{
// 				if (args.length == 1)
// 				{
// 					return fun.apply(content, args[0]);
// 				}
// 				return fun.apply(content, args);
// 			}
// 			else
// 			{
// 				let objPath = "";
// 				let gap = "";
// 				for (let i = 0; i < paths.length - 1; i++)
// 				{
// 					objPath += gap + paths[i];
// 					gap = ".";
// 				}

// 				let obj = getFieldValueForPath(objPath, content);
// 				if (args.length == 1)
// 				{
// 					return fun.apply(obj, args[0]);
// 				}
// 				return fun.apply(obj, args);
// 			}
// 		}
// 	}
// 	else
// 	{
// 		return getFieldValueForPath(path, content);
// 	}
// }

// /** 获取值，使用访问路径 */
// function getFieldValueForPath(path: string, content?: any): any
// {
// 	if (!content)
// 	{
// 		content = window;
// 		if (!content)
// 		{
// 			content = this;
// 		}
// 	}

// 	let paths = path.split(/[\.\/]/);
// 	let val = content;
// 	for (let i = 0; i < paths.length; i++)
// 	{
// 		if (val[paths[i]])
// 		{
// 			val = val[paths[i]];
// 		}
// 		else
// 		{
// 			return null;
// 		}
// 	}
// 	return val;
// }
