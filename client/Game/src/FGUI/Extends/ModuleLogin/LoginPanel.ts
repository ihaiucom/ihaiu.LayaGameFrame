/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import LoginPanelStruct from "../../Generates/ModuleLogin/LoginPanelStruct";
import LoginWindow, { LoginTabType } from "../../../GameModule/ViewWindows/LoginWindow";
import Game from "../../../Game";
import { MenuId } from "../../../GameModule/MenuId";
import AntFrame from "../../../AntFrame/AntFrame";
import { AntPlatformWX } from "../../../AntFrame/Platform/AntWX";
import TEXT from "../../../Config/Keys/TEXT";

export default class LoginPanel extends LoginPanelStruct
{
    // 窗口
    moduleWindow: LoginWindow;

   // 窗口初始化完毕
   onWindowInited(): void
   {
    console.log('LoginPanel onWindowInited');
        this.m_btn_login.onClick(this, this.onClickLogin);
        this.m_btn_register.onClick(this, this.onClickRegister);
   }

   
    // 账号
    get account(): string
    {
        return this.m_accountInput.m_txt_account.text.trim();
    }

    set account(value: string)
    {
        this.m_accountInput.m_txt_account.text = value;
    }

    // 密码
    get password(): string
    {
        return this.m_passwordInput.m_txt_password.text;
    }

    set password(value: string)
    {
        this.m_passwordInput.m_txt_password.text = value;
    }

   
    // 点击按钮--登录
    onClickLogin()
    {
        Game.sender.login.login(this.account, this.password);

        // Game.menu.open(32);
        // Game.menu.close(101);
    }

    onClickRegister()
    {
        this.moduleWindow.openTab(LoginTabType.Register);
    }

    

    // 如果组件代码里添加该代码，当设该该对象的Tab显示时，将被调用。 需要注意多次连续打开同一个Tab，那边这里也将被多次调用。监听事件需注意
    onTabShow()
    {
        console.log('LoginPanel onTabShow');
        if (isNullOrEmpty(this.account))
        {
            this.account = Game.localStorage.username;
        }

        if (isNullOrEmpty(this.password))
        {
            this.password = Game.localStorage.password;
        }
    }

    
    // 窗口显示
    onWindowShow(): void
    {
        console.log('LoginPanel onWindowShow');
        // this.onTabShow();

        if(Game.browserSetting.isWeixinMinigame)
        {
            this.getAuth();
        }
    }

    async getAuth()
    {
        if(AntFrame.platform instanceof AntPlatformWX)
        {
            let antWx:AntPlatformWX = AntFrame.platform;
            let result = await antWx.WXGetSdkAuthSetting();
            if(!result)
            {
                this.setModel(true);
                let userInfo = await antWx.WXAuth();
                if(userInfo)
                {
                    this.setModel(false);
                }
            }
            else
            {
                this.setModel(false);
            }
        }
    }

    setModel(isAuth: boolean)
    {
        this.m_btn_login.title = isAuth ? TEXT.Auth : TEXT.Login;
    }

    
   // 窗口销毁
   onWindowDestory(): boolean
   {
    console.log('LoginPanel onWindowDestory');
       return false;
   }

   // 窗口隐藏
   onWindowHide(): void
   {
    console.log('LoginPanel onWindowHide');
   }

   // 该组件所在Tab 隐藏
   onTabHide(): void
   {
        console.log('LoginPanel onTabHide');
   }


}