/**
 * 屏幕分辨率
 */
export default class ScreenSettingConfig
{
	// 开发分辨率
	developWidth = 720;
	developHeight = 1280;
	get developAspect(): number
	{
		return this.developWidth / this.developHeight;
	}

	// 屏幕分辨率
	get screenWidth(): number
	{
		return fairygui.GRoot.inst.width;
	}

	get screenHeight(): number
	{
		return fairygui.GRoot.inst.height;
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

	get screenScaleShrink(): number
	{
		let rate = 1;
		if (this.screenAspect <= this.developAspect)
		{
			rate = this.screenHeight / this.developHeight;
		}
		else
		{
			rate = this.screenWidth / this.developWidth;
		}
		return rate;
	}
}