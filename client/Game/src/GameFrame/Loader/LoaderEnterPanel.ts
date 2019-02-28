import LoaderPanel from "./LoaderPanel";
import LaunchLoaderPanel from "../../FGUI/Extends/GameLaunch/LaunchLoaderPanel";
import Game from "../../Game";
import Random from "../../Libs/Helpers/Random";

//======================
// 加载界面--进入游戏
//----------------------
export default class LoaderEnterPanel extends LoaderPanel
{
    loader: LaunchLoaderPanel;
    tips: string[] = [];


    public constructor() 
    {
        super();
    }


    protected onInit(): void
    {
        this.loader = LaunchLoaderPanel.createInstance();
        this.contentPane = this.loader;
        // this.center();

        //弹出窗口的动效已中心为轴心
        // this.setPivot(0.5, 0.5);
        super.onInit();
        this.tips = Game.launchText.tips;
        this.setVersion();

    }


    // 显示完成
    protected onShown(): void
    {
        super.onShown();
        this.beginTips();
        this.setVersion();
        Game.version.sLocalVersionChange.add(this.setVersion, this);
    }

    // 隐藏完成
    protected onHide(): void
    {
        super.onHide();
        this.stopTips();
        Game.version.sLocalVersionChange.remove(this.setVersion, this);
    }

    beginTips()
    {
        this.stopTips();
        if (this.tips && this.tips.length > 0)
        {
            this.__setTipHandler();
        }
    }

    stopTips()
    {
        if (this.__setTipHandlerTimer > 0)
        {
            clearTimeout(this.__setTipHandlerTimer);
            this.__setTipHandlerTimer = -1;
        }
    }

    private __setTipHandlerTimer = -1;
    private __setTipHandler()
    {
        this.loader.m_help.text = this.tips[Random.range(0, this.tips.length)];
        this.__setTipHandlerTimer = setTimeout(() =>
        {
            this.__setTipHandler();
        }, Random.range(100, 400));
    }


    // 设置最大值
    setMax(value: number)
    {
        // console.log("LoaderEnterPanel.setMax  value=" + value);
        this.loader.m_progressBar.max = value;
    }


    // 设置加载进度
    setValue(value: number)
    {
        // console.log("LoaderEnterPanel.setValue  value=" + value);
        this.loader.m_progressBar.value = value;

    }

    // 设置Tip
    setTip(tip: string)
    {
        this.loader.m_title.text = tip;
    }

    setTips(tips: string[])
    {
        // this.loader.m_help.text = tips[0];
    }

    // 设置版本号
    setVersion()
    {
        this.loader.m_txt_gamever.text = "GameVersion:" + Game.version.localAppVersionData.toString();
        this.loader.m_txt_resVer.text = "ResVersion:" + Game.version.localResVersionData.toString();
    }
}