/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioContinueInfoUIStruct from "../../Generates/ModuleStudio/StudioContinueInfoUIStruct";
import StudioContinuedModel from "../../../GameModule/DataModels/StudioContinuedModel";
import Game from "../../../Game";
import StudioContinuedData from "../../../GameModule/DataStructs/StudioContinuedData";
import StudioData from '../../../GameModule/DataStructs/StudioData';
import { MenuId } from "../../../GameModule/MenuId";
import TEXT from "../../../Config/Keys/TEXT";

export default class StudioContinueInfoUI extends StudioContinueInfoUIStruct
{
    public get model(): StudioContinuedModel {
        return Game.moduleModel.studioContinued;
    }

    public get dataList(): StudioContinuedData[] {
        return this.model.list;
    }

    public get continueData():StudioContinuedData
    {
        return this.model.latestData;
    }

    public get studioData(): StudioData
    {
        return Game.moduleModel.studio.current;
    }

    // 窗口显示
    onWindowShow(): void
    {
        window["info"] = this;
        this.m_getBtn.onClick(this, this.onClose);
        this.m_frame.m_closeBtn.onClick(this, this.onClose);
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Game.moduleModel.studio.current.clear();
        this.m_getBtn.offClick(this, this.onClose);
        this.m_frame.m_closeBtn.offClick(this, this.onClose);
        this.model.latestData.clear();
        this.clear();
    }
    async updateView()
    {
        this.m_panel.updateView(this.continueData);
    }

    onClose()
    {
        let duration = 500;
        Laya.Tween.to(this.m_panel, {alpha:0},0.3 * duration,Laya.Ease.linearNone,null,0.7* duration);
        Laya.Tween.to(this.m_panel, {x: -50,y:134, scaleX:0,scaleY:0},duration);
        Laya.Tween.to(this.m_group, {alpha: 0}, duration);
        Laya.timer.once(duration, this, this.__close,null,false);
    }
    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }

    private __close()
    {
        Game.menu.close(MenuId.StudioContinueInfo);
        // this.removeFromParent();
    }

   
}