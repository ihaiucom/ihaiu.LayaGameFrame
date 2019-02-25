import MenuLayer from "../Menu/MenuLayer";


//======================
// 转圈
//----------------------
export default class Circle extends fairygui.Window
{
    private loaderCircle: fairygui.GComponent;
    public constructor() 
    {
        super();
    }

        
    protected onInit():void
    { 
        this.loaderCircle = fgui.System.GlobalModalWaiting.createInstance();
        this.contentPane = this.loaderCircle;
        this.center();
        
        //弹出窗口的动效已中心为轴心
        this.setPivot(0.5, 0.5);
    }

    show()
    {
        super.showOn(MenuLayer.loader);
    }
}