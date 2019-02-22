namespace Games
{
    //======================
    // 加载界面--转圈
    //----------------------
    export class LoaderCirclePanel extends LoaderPanel
    {
        public constructor() 
        {
            super();
        }


        protected onInit():void
        { 
            this.contentPane = fgui.System.GlobalModalWaiting.createInstance();
            this.center();
            
            //弹出窗口的动效已中心为轴心
            this.setPivot(0.5, 0.5);
        }
    }
}