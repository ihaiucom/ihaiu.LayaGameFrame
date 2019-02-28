import Game from "../../Game";
import SoundKey from "../../FGUI/Generates/SoundKey";
import SystemToastMessag from "./SystemToastMessage";
import TEXT from "../../Config/Keys/TEXT";
import SystemAlertMessage from "../../FGUI/Extends/GameLaunch/SystemAlertMessage";
import SystemConfirmMessage from "../../FGUI/Extends/GameLaunch/SystemConfirmMessage";

//======================
// 转圈
//----------------------
export default class SystemMessag
{


	// 播放打开声音		
	playOpenSound()
	{
		// 播放弹出声音
		if (window["Game"] && window["Game"]["_isInstall"])
			Game.sound.playSound(SoundKey.MM02_Popup);
	}

	// 浮动消息
	private toastMessage: SystemToastMessag = new SystemToastMessag();

	// 一个按钮的对话框
	private _alertMessage: SystemAlertMessage;


	private get alertMessage()
	{
		if (!this._alertMessage)
		{
			this._alertMessage = SystemAlertMessage.createInstance();
		}
		return this._alertMessage;
	}

	// 两个按钮的对话框
	private _confirmMessage: SystemConfirmMessage;

	private get confirmMessage()
	{
		if (!this._confirmMessage)
		{
			this._confirmMessage = SystemConfirmMessage.createInstance();
		}
		return this._confirmMessage;
	}

	/*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

	// 浮动消息
	toastText(txt: string)
	{
		this.toastMessage.play(txt);
	}

	toastMsg(msgKey: TKey, ...args)
	{
		let txt = Game.config.msg.getTxtFormat(msgKey, ...args);
		this.toastMessage.play(txt);
	}

	toastFormatText(txt: string, ...args)
	{
		this.toastText(format(txt, args));
	}
	/**
	 * 道具不足提示
	 * @param id 道具id
	 */
	toastItemNotEnough(id: number)
	{
		let config = Game.config.item.getConfig(id);
		let itemName = ""
		if (config)
			itemName = config.name;
		else
			itemName = id.toString();
		this.toastText(format(TEXT.ToastTextItemNotEnough, itemName));
	}


	/*------------------------------- 我是漂亮的分割线 ----------------------------------------- */

	// 对话框消息,一个按钮, 简洁方法
	alertText(txt: string, yesObj?: any, yesFun?: Function)
	{
		this.alrtTextFull(txt, "", yesObj, yesFun);
	}

	alertMsg(msgKey: TKey, yesObj?: any, yesFun?: Function)
	{
		let txt = Game.config.msg.getTxt(msgKey);
		this.alrtTextFull(txt, "", yesObj, yesFun);
	}


	alertMsgFormat(msgKey: TKey, msgargs: any[], yesObj?: any, yesFun?: Function)
	{
		let txt = Game.config.msg.getTxtFormat(msgKey, ...msgargs);
		this.alrtTextFull(txt, "", yesObj, yesFun);
	}

	alrtTMsgFull(msgkey: TKey,
		msgargs: any[],
		title: string = "",
		yesObj: any = null,
		yesFun: Function = null,
		yesTxt: string = null,
		buttonEnable: boolean = true,
		isClickButtonAutoClose: boolean = true)
	{

		let txt = Game.config.msg.getTxtFormat(msgkey, ...msgargs);
		this.alrtTextFull(txt, "", yesObj, yesFun, yesTxt, buttonEnable, isClickButtonAutoClose);
	}





	/**
	 * 对话框消息,一个按钮
	 * @param txt 消息内容
	 * @param title 标题
	 * @param yesObj 点击yes按钮回调对象
	 * @param yesFun 点击yes按钮回调函数
	 * @param yesTxt yes按钮 文本
	 * @param closeButtonVisiable 是否显示关闭按钮
	 * @param buttonEnable 按钮是否可以点击
	 * @param isClickButtonAutoClose 点击按钮后是否自动关闭
	 */
	alrtTextFull(txt: string,
		title: string = "",
		yesObj: any = null,
		yesFun: Function = null,
		yesTxt: string = null,
		closeButtonVisiable: boolean = true,
		buttonEnable: boolean = true,
		isClickButtonAutoClose: boolean = true)
	{
		if (isNullOrEmpty(yesTxt))
		{
			yesTxt = Game.launchText.btnYes;
		}
		this.alertMessage.open(txt, title, yesObj, yesFun, yesTxt, closeButtonVisiable, buttonEnable, isClickButtonAutoClose);

		this.playOpenSound();
	}

	closeAlert()
	{
		this.alertMessage.close();
	}


	/*------------------------------- 我是漂亮的分割线 ----------------------------------------- */




	/**
	 * 对话框消息,两个按钮
	 * @param msgkey MsgConfig key
	 * @param msgargs 消息参数
	 * @param title 标题
	 * @param caller 点击按钮回调对象
	 * @param yesFun 点击yes按钮回调函数
	 * @param noFun 点击no按钮回调函数
	 * @param yesTxt yes按钮 文本
	 * @param noTxt no按钮 文本
	 * @param closeButtonVisiable 是否显示关闭按钮
	 * @param isClickButtonAutoClose 点击按钮后是否自动关闭
	 */
	confirmMsg(msgkey: TKey,
		msgargs: any[],
		title: string = "",
		caller: any = null,
		yesFun: Function = null,
		noFun: Function = null,
		yesTxt: string = null,
		noTxt: string = null,
		closeButtonVisiable: boolean = true,
		isClickButtonAutoClose: boolean = true)
	{
		let txt = Game.config.msg.getTxtFormat(msgkey, ...msgargs);
		this.confirmText(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);

	}



	/**
	 * 对话框消息,两个按钮
	 * @param txt 消息内容
	 * @param title 标题
	 * @param caller 点击按钮回调对象
	 * @param yesFun 点击yes按钮回调函数
	 * @param noFun 点击no按钮回调函数
	 * @param yesTxt yes按钮 文本
	 * @param noTxt no按钮 文本
	 * @param closeButtonVisiable 是否显示关闭按钮
	 * @param isClickButtonAutoClose 点击按钮后是否自动关闭
	 */
	confirmText(txt: string,
		title: string = "",
		caller: any = null,
		yesFun: Function = null,
		noFun: Function = null,
		yesTxt: string = null,
		noTxt: string = null,
		closeButtonVisiable: boolean = true,
		isClickButtonAutoClose: boolean = true)
	{
		if (isNullOrEmpty(yesTxt))
		{
			yesTxt = TEXT.ButtonYes;
		}

		if (isNullOrEmpty(noTxt))
		{
			noTxt = TEXT.ButtonNo;
		}
		this.confirmMessage.open(txt, title, caller, yesFun, noFun, yesTxt, noTxt, closeButtonVisiable, isClickButtonAutoClose);

		this.playOpenSound();
	}


	/*------------------------------- 我是漂亮的分割线 ----------------------------------------- */


	/**
	 * 关闭对话框
	 */
	alertMessageHide()
	{
		if (this._alertMessage)
		{
			this._alertMessage.close();
		}

		if (this._confirmMessage)
		{
			this._confirmMessage.close();
		}
	}

	/*------------------------------- 我是漂亮的分割线 ----------------------------------------- */
	
}