/**
 * 屏幕分辨率
 */
export default class ScreenSettingConfig
{
	// 开发分辨率
	developWidth = 750;
	developHeight = 1334;
	get developAspect(): number
	{
		return this.developWidth / this.developHeight;
	}

	// 屏幕分辨率
	get screenWidth(): number
	{
		return Laya.stage.width;
	}

	get screenHeight(): number
	{
		return Laya.stage.height;
	}

	
	/** 刘海屏幕高度 */
	get liuHaiHeightTop(): number
	{
		return 65;
	}

	
	/** 刘海屏幕高度 */
	get liuHaiHeightBottom(): number
	{
		return 60 + 50;
	}
	
	/** 刘海屏幕高度 */
	get screenHeightLiuHai(): number
	{
		return fairygui.GRoot.inst.height - this.liuHaiHeightTop - this.liuHaiHeightBottom;
	}

	get screenAspect(): number
	{
		return this.screenWidth / this.screenHeight;
	}

	// 获取缩放比例
	get screenScaleExpand(): number
	{
		let rate = 1;
		if (this.screenAspect <= this.developAspect)
		{
			rate = this.screenHeight / this.developHeight / (this.screenWidth / this.developWidth);
		}
		else
		{
			rate = this.screenWidth / this.developWidth / (this.screenHeight / this.developHeight);
		}
		return rate;
	}

	get screenScaleX()
	{
		return this.screenWidth / this.developWidth;
	}

	get screenScaleY()
	{
		return this.screenHeight / this.developHeight;
	}

	get screenScaleShrink(): number
	{
		return Math.min(this.screenScaleX,this.screenScaleY);
		// let rate = 1;
		// if (this.screenAspect <= this.developAspect)
		// {
		// 	rate = this.screenHeight / this.developHeight;
		// }
		// else
		// {
		// 	rate = this.screenWidth / this.developWidth;
		// }
		// return rate;
	}
}