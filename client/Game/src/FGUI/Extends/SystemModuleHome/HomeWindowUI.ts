/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import HomeWindowUIStruct from "../../Generates/SystemModuleHome/HomeWindowUIStruct";
import Game from '../../../Game';
import Dictionary from "../../../Libs/Helpers/Dictionary";
import { MenuId } from "../../../GameModule/MenuId";
import MenuButtonCtl from "../../Customs/MenuButtonCtrl";
import GameEventKey from "../../../GameEventKey";

export default class HomeWindowUI extends HomeWindowUIStruct
{

    /** 特殊菜单按钮 */
    private specialMenuCtrlList: MenuButtonCtl[] = [];
    private specialMenuCtrlDict: Dictionary<MenuId, MenuButtonCtl> = new Dictionary<MenuId, MenuButtonCtl>();

    /** 添加 特殊菜单按钮 */
    addSpecialMenu(menuId:MenuId, button: fairygui.GObject)
    {
        let menuConfig = Game.config.menu.getConfig(menuId);
        let ctl = new MenuButtonCtl(<any>button);
        ctl.setMenuConfig(menuConfig);
        this.specialMenuCtrlList.push(ctl);
        this.specialMenuCtrlDict.add(ctl.menuId, ctl);
    }


    // 窗口初始化完毕
    onWindowInited(): void
    {

        this.addSpecialMenu(MenuId.ActorFans, this.m_menuAppointmentButton);
        this.addSpecialMenu(MenuId.Rank, this.m_topMainBar.m_street);
        this.addSpecialMenu(MenuId.PlayerInfo, this.m_topMainBar.m_headInfo);

        window['homeWindowUI'] = this;
    }

    

    // 窗口显示
    onWindowShow(): void
    {
        Game.system.userLevelAndExpPlay.startSystemListen();
        Game.event.add(GameEventKey.Home_SceneZoomChange, this.onSceneZoomChange, this);
        Game.event.add(GameEventKey.Home_SceneZoomEnd, this.onSceneZoomEnd, this);
        Game.event.add(GameEventKey.Home_SceneZoomBuildingEnter, this.onHomeSceneZoomBuildingEnter, this);
        Game.event.add(GameEventKey.Home_SceneZoomBuildingExit, this.onHomeSceneZoomBuildingExit, this);
        this.initTweenView();
        
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Game.system.userLevelAndExpPlay.stopSystemListen();
        Game.event.remove(GameEventKey.Home_SceneZoomChange, this.onSceneZoomChange, this);
        Game.event.remove(GameEventKey.Home_SceneZoomEnd, this.onSceneZoomEnd, this);
        Game.event.remove(GameEventKey.Home_SceneZoomBuildingEnter, this.onHomeSceneZoomBuildingEnter, this);
        Game.event.remove(GameEventKey.Home_SceneZoomBuildingExit, this.onHomeSceneZoomBuildingExit, this);
    }

    onClickExitViewButton()
    {
    }

    onRefreshUnlock()
    {
        for (let item of this.specialMenuCtrlList)
        {
            item.refreshUnlock(true);
        }
    }

    private isSceneZoomBuildingEnter = false;
    onHomeSceneZoomBuildingEnter()
    {
        this.isSceneZoomBuildingEnter = true;
        this.tweenHide();
    }

    onHomeSceneZoomBuildingExit()
    {
        this.isSceneZoomBuildingEnter = false;
        this.tweenShow();
    }

    get tweenZoomBegin()
    {
        return 0.5;
    }

    get tweenZoomEnd()
    {
        return 1;
    }

    lastSceneZoomRate = 0;
    zoomRate2TweenRate(zoomRate: number)
    {
        zoomRate = Math.max(zoomRate, this.tweenZoomBegin);
        zoomRate = Math.min(zoomRate, this.tweenZoomEnd);
        zoomRate = (zoomRate - this.tweenZoomBegin) / (this.tweenZoomEnd - this.tweenZoomBegin);
        return (1 - zoomRate) * this.tweenRateLength;
    }
    onSceneZoomChange(zoomRate: number)
    {
        if(this.isSceneZoomBuildingEnter) return;
        this.lastSceneZoomRate = zoomRate;
        let tweenRate = this.zoomRate2TweenRate(zoomRate);
        Laya.Tween.to(this, {tweenRate: tweenRate}, 100, Laya.Ease.linearNone, null, 0, true);
    }

    onSceneZoomEnd(zoomRate: number)
    {
        if(this.isSceneZoomBuildingEnter) return;
        this.lastSceneZoomRate = zoomRate;
        if(zoomRate >= this.tweenZoomEnd)
        {
            this.tweenHide();
        }
        else
        {
            this.tweenShow();
        }
    }

    tweenShow()
    {
        
        Laya.Tween.clearTween(this);
        Laya.Tween.to(this, {tweenRate: HomeWindowUI.TWEEN_RATE_SHOW}, 200, Laya.Ease.linearIn);
    }

    tweenHide()
    {
        Laya.Tween.clearTween(this);
        Laya.Tween.to(this, {tweenRate: HomeWindowUI.TWEEN_RATE_HIDE}, 200, Laya.Ease.linearIn);
    }

    public static TWEEN_RATE_SHOW = 100;
    public static TWEEN_RATE_HIDE = 0;

    get tweenRateLength()
    {
        return HomeWindowUI.TWEEN_RATE_SHOW - HomeWindowUI.TWEEN_RATE_HIDE;
    }


    private _tweenRate: number = 100;
    public get tweenRate(): number
    {
        return this._tweenRate;
    }

    public set tweenRate(val)
    {
        this._tweenRate = val;
        let r = val / (this.tweenRateLength);
        
        let v: fairygui.GComponent;
        for(let view of this._tweenViews)
        {
            v = <any> view;
            v.x = Laya.MathUtil.lerp(view.hideX, view.initX, r);
            v.y = Laya.MathUtil.lerp(view.hideY, view.initY, r);
        }
        
        for(let view of this._tweenViews2)
        {
            v = <any> view;
            v.x = Laya.MathUtil.lerp(view.hideX, view.initX, r);
            v.y = Laya.MathUtil.lerp(view.hideY, view.initY, r);
        }

        this.tweenVisiable = r > 0;
        this.tweenVisiable2 = !this.isSceneZoomBuildingEnter && r < 1;
    }

    

    private _tweenVisiable: boolean = true;
    get tweenVisiable(): boolean
    {
        return this._tweenVisiable;
    }

    set tweenVisiable(val: boolean)
    {
        if(this._tweenVisiable == val)
            return;

        this._tweenVisiable = val;
        
        let v: fairygui.GComponent;
        for(let view of this._tweenViews)
        {
            v = <any> view;
            v.visible = val;
        }
    }
    
    

    private _tweenVisiable2: boolean = true;
    get tweenVisiable2(): boolean
    {
        return this._tweenVisiable2;
    }

    set tweenVisiable2(val: boolean)
    {
        if(this._tweenVisiable2 == val)
            return;

        this._tweenVisiable2 = val;
        
        let v: fairygui.GComponent;
        for(let view of this._tweenViews2)
        {
            v = <any> view;
            v.visible = val;
        }
    }



    private _tweenViews: TweenView[] = [];
    private _tweenViews2: TweenView[] = [];
    initTweenView()
    {
        if(this._tweenViews.length > 0)
            return;

        let views = this._tweenViews;
        let views2 = this._tweenViews2;
        let view: TweenView;
        let v: fairygui.GComponent;

        // down
        view = <any> this.m_mainMenuBar;
        v = <any>view;
        view.layout = TweenViewLayout.Buttom;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x;
        view.hideY = v.y + 200;
        views.push(view);
        
        // down
        view = <any> this.m_bgBottom;
        v = <any>view;
        view.layout = TweenViewLayout.Buttom;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x;
        view.hideY = v.y + 200;
        views.push(view);

        // top
        view = <any> this.m_topMainBar;
        v = <any>view;
        view.layout = TweenViewLayout.Top;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x;
        view.hideY = v.y - 250;
        views.push(view);
        

        // top
        view = <any> this.m_bgTop;
        v = <any>view;
        view.layout = TweenViewLayout.Top;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x;
        view.hideY = v.y - 250;
        views.push(view);

        

        // right
        view = <any> this.m_rightBottomMenuBar;
        v = <any>view;
        view.layout = TweenViewLayout.Right;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x + 250;
        view.hideY = v.y;
        views.push(view);
        
        view = <any> this.m_rightTopMenuBar;
        v = <any>view;
        view.layout = TweenViewLayout.Right;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x + 400;
        view.hideY = v.y;
        views.push(view);
        
        view = <any> this.m_menuAppointmentButton;
        v = <any>view;
        view.layout = TweenViewLayout.Right;
        view.isHide = true;
        view.initX = v.x;
        view.initY = v.y;
        view.hideX = v.x + 400;
        view.hideY = v.y;
        views.push(view);

        
    }
}

enum TweenViewLayout
{
    Top,
    Buttom,
    Let,
    Right
}

interface TweenView
{
    layout: TweenViewLayout;
    isHide: boolean;

    initX: number;
    initY: number;

    hideX: number;
    hideY: number;
}