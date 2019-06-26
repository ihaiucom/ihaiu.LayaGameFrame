/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import SystemAlertMessageStruct from "../../Generates/GameLaunch/SystemAlertMessageStruct";
import MenuLayer from "../../../GameFrame/Menu/MenuLayer";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";
import Ease = Laya.Ease;
import Tween = Laya.Tween;
import Handler = Laya.Handler;
import Game from "../../../Game";

export default class SystemAlertMessage extends SystemAlertMessageStruct
{
    private yesFun: Function;
    private yesObj: any;
    private isClickButtonAutoClose: boolean;

    
    private get closeButton (): fairygui.GButton
    {
        return this.m_dialog.m_closeButton;
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
    open(txt: string,
        title: string = "",
        yesObj: any = null,
        yesFun: Function = null,
        yesTxt: string = null,
        closeButtonVisiable: boolean = true,
        buttonEnable: boolean = true,
        isClickButtonAutoClose: boolean = true)
    {

        if (isNullOrEmpty(title))
        {
            title = "";
        }

        this.yesFun = yesFun;
        this.yesObj = yesObj;
        this.isClickButtonAutoClose = isClickButtonAutoClose;

        this.m_content.text = txt;
        this.m_title.text = title;
        this.m_okBtn.title = yesTxt;


        this.m_okBtn.enabled = buttonEnable;
        this.closeButton.enabled = buttonEnable;
        this.closeButton.visible = closeButtonVisiable;



        this.m_okBtn.onClick(this, this.onClickYes);
        this.closeButton.onClick(this, this.close);

        MenuLayer.showDialogModel();
        FguiHelper.centerScreen(this);
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
            if (this.yesObj)
            {
                this.yesFun.apply(this.yesObj);
            }
            else
            {
                this.yesFun();
            }
        }
    }
}