import MenuBarMain from "../Extends/SystemModuleMenu/MenuBarMain";
import MenuBButton from "../Extends/SystemModuleMenu/MenuBButton";
import MenuConfig from "../../Config/ConfigExtends/MenuConfig";
import FguiHelper from "../../Libs/Helpers/FguiHelper";


/**
 * 菜单按钮fgui自定义数据
 */
export interface MenuButtonData
{
    menuId: number;
    pos?: number;
    name?: number;
}



/**
 * 菜单按钮控制器
 */
export default class MenuButtonCtl
{
    menuBar: MenuBarMain;
    button: MenuBButton;
    menuButtonData: MenuButtonData;
    menuConfig: MenuConfig;

    get menuId(): number
    {
        if (this.menuConfig)
        {
            return this.menuConfig.menuId;
        }
        else
        {
            return this.menuButtonData.menuId;
        }
    }

    constructor(button: MenuBButton, menuBar: MenuBarMain = null)
    {
        this.menuBar = menuBar;
        this.button = button;
        if (!isNullOrEmpty(<string>button.data))
        {
            console.log("button.data=" + button.data);
            this.menuButtonData = JSON.parse(<string>button.data);
        }
        else
        {
            this.menuButtonData = { menuId: 0 };
        }

        if (this.button.m_red) this.button.m_red.visible = false;
        if (this.button.m_lock) this.button.m_lock.visible = false;
        this.button.onClick(this, this.onClickButton);
    }

    setMenuConfig(config: MenuConfig): void
    {
        this.menuConfig = config;
        if(this.button["m_title"])this.button["m_title"].text = config.name;
        if (this.button.m_icon && !isNullOrEmpty(config.iconUrl)) this.button.m_icon.url = config.iconUrl;
    }

    /**
     * 点击按钮事件
     */
    async onClickButton()
    {
        let enableOpen = await this.menuConfig.openMenu();
        if (enableOpen)
        {
            if(this.menuBar)
                this.menuBar.closeSubmenus();
        }
    }

    /**
     * 设置红点
     */
    setRed(val: number | boolean)
    {
        if (!this.button.m_red) return;

        if (isNumber(val))
        {
            this.button.m_red.title = val.toString();
            this.button.m_red.visible = val > 0;
        }
        else
        {
            this.button.m_red.title = "";
            this.button.m_red.visible = val;
        }
    }

    /**
     * 是否解锁
     */
    get isUnlock(): boolean
    {
        return this.menuConfig.isUnlock;
    }


    /**
     * 刷新解锁
     */
    refreshUnlock(lockIsHide?: boolean)
    {

        if (lockIsHide && !this.menuConfig.lockVisiable)
        {
            this.button.visible = this.isUnlock;
        }

        if (!this.button.visible || !this.button.parent)
        {
            return;
        }

        if (this.button.m_lock)
        {
            this.button.m_lock.visible = !this.isUnlock;
        }

        if (this.isUnlock)
        {
            FguiHelper.clearFilters(this.button.m_icon);
            // FguiHelper.clearFilters(this.button.m_title);
            
            // 系统解锁埋点
            // if (!this.userStaticDic.hasKey(this.menuId))
            // {
            //     this.userStaticDic.add(this.menuId, this.menuId);
            //     Games.Static.Instance.userorbit("sys", this.menuId.toString(), "unlock");
            // }
        }
        else
        {
            FguiHelper.halfStaturation(this.button.m_icon);
            // FguiHelper.halfStaturation(this.button.m_title);
        }
    }

    // private userStaticDic = new Dictionary<number, number>();




}