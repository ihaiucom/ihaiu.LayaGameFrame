import LangConfigReader from "../../Config/LangConfigReader";
import Game from "../../Game";

export default class FguiHelper
{

		
	// 屏幕自适应
	static autoScreenSize(content: fairygui.GObject, alignH?: string, alignV?: string)
	{
		let rate = Game.screenSetting.screenScaleExpand;

		content.width = content.sourceWidth * rate;
		content.height = content.sourceHeight * rate;
		if (alignH)
		{
			let parent = fairygui.GRoot.inst;

			switch (alignH)
			{
				case Laya.Stage.ALIGN_LEFT:
					content.x = 0;
					break;
				case Laya.Stage.ALIGN_CENTER:
					content.x = (parent.width - content.width) * 0.5;
					break;
				case Laya.Stage.ALIGN_RIGHT:
					content.x = parent.width - content.width;
					break;
			}

			switch (alignV)
			{
				case Laya.Stage.ALIGN_TOP:
					content.y = 0;
					break;
				case Laya.Stage.ALIGN_MIDDLE:
					content.y = (parent.height - content.height) * 0.5;
					break;
				case Laya.Stage.ALIGN_BOTTOM:
					content.y = parent.height - content.height;
					break;
			}
		}
	}

	// 屏幕居中
	static centerScreen(content: fairygui.GObject)
	{
		content.x = (Game.screenSetting.screenWidth - content.width) * 0.5;
		content.y = (Game.screenSetting.screenHeight - content.height) * 0.5;
	}

	static centerScreenForCenter(content: fairygui.GObject)
	{
		content.x = Game.screenSetting.screenWidth * 0.5;
		content.y = Game.screenSetting.screenHeight * 0.5;
	}

	// 屏幕大小
	static setScreenSize(content: fairygui.GObject)
	{
		content.width = Game.screenSetting.screenWidth;
		content.height = Game.screenSetting.screenHeight;
	}



	/** 获取值，使用访问路径 */
	static getValueForPath(path: string, content?: any, ...args)
	{

		if (path.endsWith("()"))
		{
			return FguiHelper.getFunResultForPath(path, content, ...args);
		}
		else
		{
			return FguiHelper.getFieldValueForPath(path, content);
		}
	}


	/** 获取函数结果值，使用访问路径 */
	static getFunResultForPath(path: string, content?: any, ...args)
	{
		if (path.endsWith("()"))
		{
			path = path.replace("()", "");
			let fun: Function = FguiHelper.getFieldValueForPath(path, content);
			if (fun)
			{
				let paths = path.split(/[\.\/]/);
				if (paths.length == 1)
				{
					if (args.length == 1)
					{
						return fun.apply(content, args[0]);
					}
					return fun.apply(content, args);
				}
				else
				{
					let objPath = "";
					let gap = "";
					for (let i = 0; i < paths.length - 1; i++)
					{
						objPath += gap + paths[i];
						gap = ".";
					}

					let obj = FguiHelper.getFieldValueForPath(objPath, content);
					if (args.length == 1)
					{
						return fun.apply(obj, args[0]);
					}
					return fun.apply(obj, args);
				}
			}
		}
		else
		{
			return FguiHelper.getFieldValueForPath(path, content);
		}
	}

	/** 获取值，使用访问路径 */
	static getFieldValueForPath(path: string, content?: any): any
	{
		if (!content)
		{
			content = window;
			if (!content)
			{
				content = this;
			}
		}

		let paths = path.split(/[\.\/]/);
		let val = content;
		for (let i = 0; i < paths.length; i++)
		{
			if (val[paths[i]])
			{
				val = val[paths[i]];
			}
			else
			{
				return null;
			}
		}
		return val;
	}










	static setStringsSource(lang: LangConfigReader)
	{
		//let txtmap = fairygui.UIPackage["_stringsSource"] = {};
		let txtmap = fairygui.TranslationHelper["strings"] = {};

		let list = lang.getConfigList();
		for (let i = 0; i < list.length; i++)
		{
			let config = list[i];
			let name = <string>config.dict.getValue("name");
			let value = <string>config.dict.getValue("value");
			let index = name.indexOf("-");

			if (value === undefined || value === null)
				continue;


			if (index == -1)
				continue;

			var uiUrl = name.substr(0, index);
			var uiNodeName = name.substr(index + 1);

			var col = txtmap[uiUrl];
			if (!col)
			{
				col = {};
				txtmap[uiUrl] = col;
			}
			col[uiNodeName] = value;

		}
	}

	//设置灰色
	static grayscaleMat: Array<number> = [0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0];
	static grayscaleFilters = null;
	static normalFilters = null;

	static setGray(component: fairygui.GObject)
	{
		if (!component)
			return;

		if (!FguiHelper.grayscaleFilters)
		{
			var grayscaleFilter: Laya.ColorFilter = new Laya.ColorFilter(FguiHelper.grayscaleMat);
			FguiHelper.grayscaleFilters = [grayscaleFilter];
		}

		component.displayObject.filters = FguiHelper.grayscaleFilters
	}

	static clearFilters(component: fairygui.GObject)
	{
		if (!component)
			return;
		component.displayObject.filters = null;
	}

	// 饱和度一半
	static saturation =
	[
		0.5, 0, 0, 0, 0, //R
		0, 0.5, 0, 0, 0, //G
		0, 0, 0.5, 0, 0, //B
		0, 0, 0, 1, 0, //A
	];


	private static _saturationFilters;
	static get saturationFilters()
	{
		if (!FguiHelper._saturationFilters)
		{
			FguiHelper._saturationFilters = [new Laya.ColorFilter(FguiHelper.saturation)];
		}
		return FguiHelper._saturationFilters;
    }
    
	// 饱和度一半
	static saturation2 =
	[
		0.25, 0, 0, 0, 0, //R
		0, 0.25, 0, 0, 0, //G
		0, 0, 0.25, 0, 0, //B
		0, 0, 0, 1, 0, //A
    ];
    
	private static _saturationFilters2;
	static get saturationFilters2()
	{
		if (!FguiHelper._saturationFilters2)
		{
			FguiHelper._saturationFilters2 = [new Laya.ColorFilter(FguiHelper.saturation2)];
		}
		return FguiHelper._saturationFilters2;
	}

	static halfStaturation(obj: fairygui.GObject)
	{
		if (!obj)
			return;
		obj.displayObject.filters = FguiHelper.saturationFilters
    }
    
	static half2Staturation(obj: fairygui.GObject)
	{
		if (!obj)
			return;
		obj.displayObject.filters = FguiHelper.saturationFilters2
	}

	//组件弹出效果
	static boundEffect(target: fairygui.GObject, duration: number = 1000)
	{
		target.setPivot(0.5, 0.5);
		target.setScale(0.5, 0.5);
		Laya.Tween.to(target, { scaleX: 1, scaleY: 1 }, duration, Laya.Ease.backOut, Laya.Handler.create(null, () =>
		{
		}), 0, true, true);
	}

}