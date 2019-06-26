/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BuildingWindowUIGJCStruct from "../../Generates/ModuleBuildingGJC/BuildingWindowUIGJCStruct";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";
import BuildingWindow from "../../../GameModule/ViewWindows/BuildingWindow";
import BuildingData from "../../../GameModule/DataStructs/BuildingData";

//-------------FGUI控制器-----------------
//建造--升级--突破     操作
export enum BuildingBuildType {
    Make  = 0,    
    Level = 1,
    Break = 2
}

//满足--不满足        条件
export enum BuildingConditionType {
    NO = 0,    
    OK = 1
}

//详情--建造          页签
export enum BuildingTabType {
    Content = 0,  
    Build = 1
}

//详情--配置          页签
export enum BuildingContentType {
    Produce = 0,  
    Config = 1
}

export default class BuildingWindowUIGJC extends BuildingWindowUIGJCStruct
{
    private buildingData: BuildingData;

    //窗口
    moduleWindow: BuildingWindow;

    //窗口初始化完毕
    onWindowInited(): void {
        this.m_headView.m_btnClose.onClick(this, this.close);
        this.m_btnClose.onClick(this, this.close);
    }

    //关闭界面
    close(): void  {
        Game.event.dispatch(GameEventKey.Build_CloseWindow, this.buildingData);
        this.moduleWindow.menuClose();
    }

    //主窗口显示时将被调
    onWindowShow(): void  {
        let building: BuildingData  = this.moduleWindow.menuParameter.args[0];
        this.buildingData = building;

        let pageIndex: number = this.m_footView.m_page.selectedIndex;
        this.m_headView.updateView(building, pageIndex)
        switch (pageIndex) {
            case BuildingTabType.Content:
                this.m_footView.m_contentPage.updateView(building);
                break;
            case BuildingTabType.Build:
                this.m_footView.m_levelPage.updateView(building);
                break;
        
            default:
                break;
        }
        
        Game.event.add(GameEventKey.Build_CloseWindowUI, this.close, this);
    }

    //主窗口关闭时将被调
    onWindowHide(): void  {
        Laya.Tween.clearAll(this);

        this.m_footView.m_contentPage.hideView();
        this.m_footView.m_levelPage.hideView();

        Game.event.remove(GameEventKey.Build_CloseWindowUI, this.close, this);
    }

    // 窗口即将打开，可以在这里做缓动
    onWindowWillShow()
    {
        
    }

    // 窗口即将关闭，可以在这里做缓动
    onWindowWillHide(): void
    {

        Game.event.dispatch(GameEventKey.Home_SendSceneZoomBuildingExit);
    }
}