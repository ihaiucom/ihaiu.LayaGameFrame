import { LoaderId } from "./LoaderId";
import LoaderPanelInterface from "./LoaderPanelInterface";
import MenuLayer from "../Menu/MenuLayer";

//======================
// 加载界面控制器
//----------------------
export default class LoaderCtl
{
    // 加载ID
    loaderId: LoaderId;

    // 加载面板
    loaderPanel: LoaderPanelInterface;

    // 是否已经打开
    isOpened = false;

    //延时显示加载面板Handler
    delayShowPanelHandler: number = -1;

    get isDelayShowPanel(): boolean
    {
        return this.loaderId == LoaderId.Module;
    }

    // 打开
    open()
    {
        this.isOpened = true;

        if (this.loaderPanel)
        {
            this.loaderPanel.showOn(MenuLayer.loader);
            this.loaderPanel.setContentVisiable(true);
            if (this.isDelayShowPanel)
            {
                this.loaderPanel.setContentVisiable(false);
                clearTimeout(this.delayShowPanelHandler);
                this.delayShowPanelHandler = setTimeout(() =>
                {
                    this.loaderPanel.setContentVisiable(true);
                }, 100);
            }
        }
    }

    // 关闭
    close()
    {
        if (this.delayShowPanelHandler != -1)
        {
            clearTimeout(this.delayShowPanelHandler);
            this.delayShowPanelHandler = -1;
        }

        this.isOpened = false;
        if (this.loaderPanel)
        {
            this.loaderPanel.hide();
            if (this.isDelayShowPanel)
            {
                this.loaderPanel.setContentVisiable(false);
            }
        }
    }

    // 设置进度
    setProgress(progress: number)
    {
        // console.log("LoaderCtl.setProgress  progress=" + progress);
        if (this.loaderPanel)
            this.loaderPanel.setValue(progress);
    }


    // 设置进度最大值
    setMax(max: number)
    {
        if (this.loaderPanel)
            this.loaderPanel.setMax(max);
    }

    // 设置Tip
    setTip(txt: string)
    {
        if (this.loaderPanel)
            this.loaderPanel.setTip(txt);
    }

    setTips(txts: string[])
    {
        if (this.loaderPanel)
            this.loaderPanel.setTips(txts);
    }

    // 设置版本号
    setVersion()
    {

        if (this.loaderPanel)
            this.loaderPanel.setVersion();
    }



}