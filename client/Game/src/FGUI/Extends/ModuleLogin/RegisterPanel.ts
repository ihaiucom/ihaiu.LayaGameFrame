/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import RegisterPanelStruct from "../../Generates/ModuleLogin/RegisterPanelStruct";
import LoginWindow from "../../../GameModule/ViewWindows/LoginWindow";

export default class RegisterPanel extends RegisterPanelStruct
{
    
    moduleWindow: LoginWindow;

   // 窗口初始化完毕
   onWindowInited(): void
   {
    console.log('RegisterPanel onWindowInited');
        this.m_btn_registerback.onClick(this, this.onClickBack);
   }

   // 窗口销毁
   onWindowDestory(): boolean
   {
    console.log('RegisterPanel onWindowDestory');
       return false;
   }

   // 窗口显示
   onWindowShow(): void
   {
    console.log('RegisterPanel onWindowShow');

   }

   // 窗口隐藏
   onWindowHide(): void
   {
    console.log('RegisterPanel onWindowHide');
   }


   // 该组件所在Tab 显示
   onTabShow(): void
   {
    console.log('RegisterPanel onTabShow');

   }

   // 该组件所在Tab 隐藏
   onTabHide(): void
   {
        console.log('RegisterPanel onTabHide');
   }

   onClickBack()
   {
        this.moduleWindow.backTab();
   }
}