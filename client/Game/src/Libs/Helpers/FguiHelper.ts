import LangConfigReader from "../../Config/LangConfigReader";

export default class FguiHelper
{
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