import Game from "../../Game";
import { LoaderId } from "./LoaderId";
import Mathf from "../../Libs/Mathf";

//======================
// 加载界面消息处理器
//----------------------
export default class LoaderSettingHandler
{
	percent: number = 0;
    private showPercent: number = 0;
    
	loading(percent: number)
	{
		this.percent = percent;
    }
    
	setTip(txt: string)
	{
        let ctl = Game.loader.getLoaderCtl(LoaderId.Launch);
        ctl.setTip(txt);
    }

    setPercent(percent: number)
    {
        let ctl = Game.loader.getLoaderCtl(LoaderId.Launch);
        ctl.setMax(100);
        ctl.setProgress(percent);
    }

    //=============

	private _tweenHandler;

	private starTweenPrecent()
	{
		this.stopTweenPrecent();
		this._tweenHandler = setInterval(() =>
		{
			this.showPercent = Math.ceil(Mathf.Lerp(this.showPercent, this.percent, 0.1));
			this.setPercent(this.showPercent);
			if(this.showPercent >= 100)
				this.stopTweenPrecent();
		}, 100);
	}

	private stopTweenPrecent()
	{
		if (this._tweenHandler)
		{
			clearInterval(this._tweenHandler);
			this._tweenHandler = null;
		}
	}


    
	// 开始加载	
	onBegin()
	{
		this.loading(0);
		this.starTweenPrecent();
    }
    

	// 加载配置	
	onLoadedConfig(index: number, count: number, rate: number)
	{
		this.setTip(Game.launchText.LoadedConfig);
		this.loading(0 + Math.floor(rate * 40));
	}

	// 加载语言配置
	onLoadedLangConfig(index: number, count: number, rate: number)
	{
		this.setTip(Game.launchText.LoadedConfig);
		this.loading(40 + Math.floor(rate * 20));
    }
    
	// 加载UI
	onLoadedFgui(index: number, count: number)
	{
		this.setTip(Game.launchText.LoadedUI);
		this.loading(60 + Math.floor((index / count) * 40));
    }
    
	// 完成	
	onEnd()
	{
		this.setTip(Game.launchText.LoadedEnd);
		this.loading(100);
	}
}