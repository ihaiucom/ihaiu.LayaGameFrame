import MWindow from "../../GameFrame/Module/MWindow";

//======================
// 游戏主界面
//----------------------
export default class HomeWindow extends MWindow
{
    constructor()
    {
        super();
    }

    
    // 设置主界面显示
    setHomeShow()
    {
        if (this.contentPane && !this.contentPane.visible)
        {
            this.contentPane.visible = true;
            this.onShown();
        }
    }

    // 设置主界面隐藏
    setHomeHide()
    {
        if (this.contentPane && this.contentPane.visible)
        {
            this.contentPane.visible = false;
            this.onHide();
        }
    }
}