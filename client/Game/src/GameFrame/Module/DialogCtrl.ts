import MenuLayer from "../Menu/MenuLayer";
import FguiHelper from "../../Libs/Helpers/FguiHelper";

export default class DialogCtrl
{
    private dialogUI: fairygui.GComponent;

    init(dialogUI: fairygui.GComponent): DialogCtrl
    {
        this.dialogUI = dialogUI;
        
        FguiHelper.setScreenSize(dialogUI);
        return this;
    }

    open()
    {
        MenuLayer.dialog.addChild(this.dialogUI);
    }


    

    close()
    {
        this.dialogUI.removeFromParent();
    }

    
    // 设置关闭按钮 关闭当前窗口
    setCloseBtnEvent()
    {
        if(this.dialogUI && this.dialogUI["m_frame"] && this.dialogUI["m_frame"].getChild("closeBtn"))
        {
            this.dialogUI["m_frame"].getChild("closeBtn").onClick(this, this.close);
        }
    }



}