import GlobalModalWaiting from "../../FGUI/Extends/GameLaunch/GlobalModalWaiting";
import LoaderPanel from "./LoaderPanel";

//======================
// 加载界面--转圈
//----------------------
export default class LoaderCirclePanel extends LoaderPanel
{
    public constructor() 
    {
        super();
    }


    protected onInit():void
    { 
        this.contentPane = GlobalModalWaiting.createInstance();
        this.center();
        
        //弹出窗口的动效已中心为轴心
        this.setPivot(0.5, 0.5);
    }
}