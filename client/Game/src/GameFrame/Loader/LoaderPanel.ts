import LoaderPanelInterface from "./LoaderPanelInterface";
import Signal from "../../Libs/signals/Signal";
import FWindow from "../Module/FWindow";

//======================
// 加载界面
//----------------------
export default class LoaderPanel extends FWindow implements LoaderPanelInterface
{
    // 消息--显示完成
    sShowComplete: Signal = new Signal();
    // 消息--隐藏完成
    sHideComplete: Signal = new Signal();


    public constructor() 
    {
        super();
    }


    protected onInit(): void
    {
        super.onInit();
    }


    // 设置内容是否显示
    getContentVisiable(): boolean
    {
        if (this.contentPane)
        {
            return this.contentPane.visible;
        }
        return false;
    }

    setContentVisiable(value: boolean)
    {
        if (this.contentPane)
        {
            this.contentPane.visible = value;
        }
    }

    protected doShowAnimation()
    {
        this.onWindowWillShow();

        super.doShowAnimation();
    }



    protected doHideAnimation()
    {
        this.onWindowWillHide();
        super.doHideAnimation();
    }




    // 显示完成
    protected onShown(): void
    {
        this.sShowComplete.dispatch();
    }

    // 隐藏完成
    protected onHide(): void
    {
        this.sHideComplete.dispatch();
    }


    // 设置最大值
    setMax(value: number)
    {

    }

    // 设置加载进度
    setValue(value: number)
    {

    }


    // 设置Tip
    setTip(tip: string)
    {

    }

    setTips(tips: string[])
    {

    }


    // 设置版本号
    setVersion()
    {

    }
}