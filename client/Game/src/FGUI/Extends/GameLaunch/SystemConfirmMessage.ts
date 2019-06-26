/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemConfirmMessageStruct from "../../Generates/GameLaunch/SystemConfirmMessageStruct";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";

import Ease = Laya.Ease;
import Tween = Laya.Tween;
import Handler = Laya.Handler;
import Game from "../../../Game";

export default class SystemConfirmMessage extends SystemConfirmMessageStruct
{
    private caller: any;
    private yesFun: Function;
    private noFun: Function;
    private isClickButtonAutoClose: boolean;

    
    private get closeButton (): fairygui.GButton
    {
        return this.m_dialog.m_closeButton;
    }


    /**
     * 对话框消息,一个按钮
     * @param txt 消息内容
     * @param title 标题
     * @param caller 点击按钮回调对象
     * @param yesFun 点击yes按钮回调函数
     * @param yesObj 点击yes按钮回调对象
     * @param noFun 点击no按钮回调函数
     * @param noFun 点击no按钮回调对象
     * @param yesTxt yes按钮 文本
     * @param noTxt no按钮 文本
     * @param closeButtonVisiable 是否显示关闭按钮
     * @param isClickButtonAutoClose 点击按钮后是否自动关闭
     */
    open(txt: string,
        title: string = "",
        caller: any = null,
        yesFun: Function = null,
        noFun: Function = null,
        yesTxt: string = null,
        noTxt: string = null,
        closeButtonVisiable: boolean = true,
        isClickButtonAutoClose: boolean = true)
    {
        if (isNullOrEmpty(title))
        {
            title = "";
        }
        this.caller = caller;
        this.yesFun = yesFun;

        this.noFun = noFun;

        this.isClickButtonAutoClose = isClickButtonAutoClose;

        this.m_content.text = txt;
        this.m_title.text = title;
        this.m_okBtn.title = yesTxt;
        this.m_cancleBtn.title = noTxt;


        this.closeButton.visible = closeButtonVisiable;



        this.m_okBtn.onClick(this, this.onClickYes);
        this.m_cancleBtn.onClick(this, this.onClickNo);
        this.closeButton.onClick(this, this.onClickClose);

        MenuLayer.showDialogModel();
        FguiHelper.centerScreen(this);

        Tween.clearAll(this);
        this.scaleX = 0;
        this.scaleY = 0;
        this.x = Game.screenSetting.screenWidth >> 1;
        this.y = Game.screenSetting.screenHeight >> 1;
        this.alpha = 0;
        Tween.to(this, {scaleX: 1, scaleY: 1, alpha: 1}, 250, Ease.backInOut);
        MenuLayer.floatMsg.addChild(this);
    }

    close()
    {
        MenuLayer.hideDialogModel();
        Tween.to(this, {scaleX: 0, scaleY: 0, alpha: 0}, 250, Ease.quadInOut, Handler.create(this, this.onHide));
    }

    private onHide()
    {
        this.removeFromParent();
    }

    onClickYes()
    {
        if (this.isClickButtonAutoClose)
        {
            this.close();
        }

        if (this.yesFun)
        {
            if (this.caller)
            {
                this.yesFun.apply(this.caller);
            }
            else
            {
                this.yesFun();
            }
        }
    }


    onClickNo()
    {
        if (this.isClickButtonAutoClose)
        {
            this.close();
        }



        if (this.noFun)
        {
            if (this.caller)
            {
                this.noFun.apply(this.caller);
            }
            else
            {
                this.noFun();
            }
        }
    }

    onClickClose()
    {
        this.close();
    }
}