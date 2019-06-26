import GuideUIHelper from "./GuideUIHelper";
import MailItem from "../../FGUI/Extends/ModuleEmail/MailItem";
import LoginWindowUI from "../../FGUI/Extends/ModuleLogin/LoginWindowUI";
import MailWindowUI from "../../FGUI/Extends/ModuleEmail/MailWindowUI";
import GuideConfig from "../../Config/ConfigExtends/GuideConfig";
import { GuideUITypeConfig } from "./GuideMenuConfig";

export default class GuideUIFind
{

    getName(){

    }

    public getUI( msg: GuideConfig ): fairygui.GObject
    {
        if(!msg) return null;
        let menuId = msg.menu_id
        switch (msg.highlight_type) {
            case GuideUITypeConfig.Build:
                
                break;
        
            default:
                break;
        }

        let window = GuideUIHelper.getWindow(menuId);
        if(!window) return null;
        let contentPane = window.contentPane;
        if(!contentPane) return null;
        

        // 效率不高，写函数字典查找
        let id = 0;
        switch(id)
        {
            case 1:
            if(contentPane instanceof LoginWindowUI)
            {
                return contentPane.m_loginPanel.m_btn_guest;
            }
            break;

            case 2:
            if(contentPane instanceof MailWindowUI)
            {
                if(contentPane.m_list.numChildren > 0)
                {
                    let item:MailItem = <any> contentPane.m_list.getChildAt(0);
                    return item.m_title;
                }
            }
            break;

        }
    }

}