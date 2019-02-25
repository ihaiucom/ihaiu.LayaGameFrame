import Dictionary from "../Libs/Helpers/Dictionary";
import Game from "../Game";

export default class FGLoader extends fairygui.GLoader
{
	// 最后一次没有设置引用的时间
	static freeDictForTime: Dictionary<string, number> = new Dictionary<string, number>();
	// 引用次数
	static freeDictForNum: Dictionary<string, number> = new Dictionary<string, number>();

	private static _freeList: string[] = [];
	public static get freeList(): string[]
	{
		if (FGLoader._freeList.length > 0)
		{
			FGLoader._freeList.length = 0;
		}

		let dict = FGLoader.freeDictForNum.__getDict();
		for (let url in dict)
		{
			// console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
			if (FGLoader.freeDictForNum.getValue(url) <= 0)
			{
				FGLoader._freeList.push(url);
			}
		}

		return FGLoader._freeList;
	}


	static setUse(url: string)
	{
		let num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) + 1 : 1;
		FGLoader.freeDictForNum.add(url, num);
	}

	static setFree(url: string)
	{
		if (url.indexOf("/MenuIcon/") != -1)
			return;


		FGLoader.freeDictForTime.add(url, Game.time.localTime);
		let num = FGLoader.freeDictForNum.hasKey(url) ? FGLoader.freeDictForNum.getValue(url) - 1 : 0;
		if (num < 0) num = 0;
		FGLoader.freeDictForNum.add(url, num);
	}

	static removeFree(url: string)
	{
		FGLoader.freeDictForTime.remove(url);
		FGLoader.freeDictForNum.remove(url);
	}

	/**
	 * 清理所有没有使用的
	 */
	static clearAllFree(list?: string[])
	{
		if (!list) list = FGLoader.freeList;
		while (list.length > 0)
		{
			let url = list.pop();
			// console.log("--ClearRes:" + url);
			FGLoader.removeFree(url);
			Laya.loader.clearRes(url);
		}
	}



	private static _freeLongList: string[] = [];
	/**
	 * 清理长时间没有使用的
	 */
	static clearFreeLong()
	{
		if (FGLoader.freeDictForNum.count <= Game.deviceSetting.fguiLoaderCacheNum)
			return;

		FGLoader._freeLongList.length = 0;
		let dict = FGLoader.freeDictForNum.__getDict();
		for (let url in dict)
		{
			// console.log(FGLoader.freeDictForNum.getValue(url) + " " + url);
			if (FGLoader.freeDictForNum.getValue(url) <= 0)
			{
				let time = Game.time.localTime - FGLoader.freeDictForTime.getValueOrDefault(url, 0);
				if (time > Game.deviceSetting.fguiLoaderCacheTime)
					FGLoader._freeLongList.push(url);
			}
		}

		FGLoader.clearAllFree(FGLoader._freeLongList);
	}








	protected loadContent(): void
	{
		super.loadContent();
	}


	getPackagenameByUrl(url: string)
	{
		return url.replace("ui://", "").split("/")[0];
	}

	protected loadFromPackage(itemURL: string): void
	{
		// console.log("loadFromPackage:" + itemURL);
		let packageItem = fairygui.UIPackage.getItemByURL(itemURL);
		if (packageItem)
		{
			super.loadFromPackage(itemURL);
		}
		else
		{
			let packagename = this.getPackagenameByUrl(itemURL);
			let config = Game.spriteRes.getconfig(packagename);
			if (!config)
			{
				config = Game.guiRes.getconfig(packagename);
			}

			if (config)
			{
				Game.asset.loadFgui(config, this, this.onLoadPackage);
			}

		}
	}


	private onLoadPackage()
	{
		// console.log("onLoadPackage:" + this.url);
		super.loadFromPackage(this.url);
	}

	protected loadExternal(): void
	{

        /*
        开始外部载入，地址在url属性
        载入完成后调用OnExternalLoadSuccess
        载入失败调用OnExternalLoadFailed
        注意：如果是外部载入，在载入结束后，调用OnExternalLoadSuccess或OnExternalLoadFailed前，
        比较严谨的做法是先检查url属性是否已经和这个载入的内容不相符。
        如果不相符，表示loader已经被修改了。
        这种情况下应该放弃调用OnExternalLoadSuccess或OnExternalLoadFailed。
        */


		// console.log("loadExternal:" + this.url);

		FGLoader.setUse(this.url);
		super.loadExternal();
	}

	//释放外部载入的资源
	protected freeExternal(texture: laya.resource.Texture): void
	{
		// console.log("freeExternal:" + this.url + "  " + texture.url);
		super.freeExternal(texture);
		if (!isNullOrEmpty(texture.url))
		{
			FGLoader.setFree(texture.url);
			texture.url = "";
		}

		// Laya.loader.clearRes(texture.url);
	}

	// 载入完成后调用
	protected onExternalLoadSuccess(texture: laya.resource.Texture): void
	{
		// console.log("onExternalLoadSuccess:" + this.url);
		super.onExternalLoadSuccess(texture);
	}


	// 载入失败调用
	protected onExternalLoadFailed(): void
	{
		super.onExternalLoadFailed();
	}

}