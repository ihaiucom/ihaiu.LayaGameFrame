/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioShareWindowUIStruct from "../../Generates/ModuleStudio/StudioShareWindowUIStruct";
import Game from '../../../Game';
import StudioData from "../../../GameModule/DataStructs/StudioData";
import StudioActorData from "../../../GameModule/DataStructs/StudioActorData";
import StudioShareGroup5 from "./StudioShareGroup5";
import TEXT from "../../../Config/Keys/TEXT";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";
import StudioStep = proto.StudioStep;

export default class StudioShareWindowUI extends StudioShareWindowUIStruct
{
    groupCtrls: StudioShareGroupCtrl[] = [];
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);

        for(let i = 1; i <= 5; i ++)
        {
            let view = <StudioShareGroup5><any>(this.getChild("group_" + i));
            let ctrl = new StudioShareGroupCtrl();
            ctrl.init(i, view);
            this.groupCtrls.push(ctrl);
        }


        // this.m_shareButtonBar.m_shareSinaButton.onClick(this, this.onClickSinaShareButton);
        // this.m_shareButtonBar.m_shareWeiXinButton.onClick(this, this.onClickWeiXinShareButton);
        this.onClick(this,this.closeBtnOnClick);

        
        // this.displayObject.on("display", this, this.onWindowShow);
        // this.displayObject.on("undisplay", this, this.onWindowHide);
        this.setScreenSize();
    }

    


    setScreenSize()
    {
        // this.setSize(Game.screenSetting.screenWidth, Game.screenSetting.screenHeight);
        FguiHelper.autoScreenScale(this.m_bg, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
        
        for(let ctrl of this.groupCtrls)
        {
            FguiHelper.autoScreenScaleShrink2(ctrl.view, 0.8);
        }
    }



    // 窗口显示
    onWindowShow(): void
    {
        this.setScreenSize();
        Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
        this.m_nextBtn.onClick(this, this.onClickNextButton);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
        this.m_nextBtn.offClick(this, this.onClickNextButton);
    }


    closeBtnOnClick() {
        // Game.sender.studio.studioNextStep(StudioStep.firstReward);
    }

    onClickNextButton() {
        Game.sender.studio.studioNextStep(StudioStep.firstReward);
    }

    onClickSinaShareButton()
    {
        Game.system.toastText(TEXT.Disable);
    }

    onClickWeiXinShareButton()
    {
        Game.system.toastText(TEXT.Disable);
    }

    setData(studioData: StudioData)
    {
        this.m_titleBanner.updateView(studioData.story);
        this.m_studioLevel.updateView(studioData.result);
        this.setActors(studioData.getActorsBestAndMvp());
    }

    setActors(actors: StudioActorData[])
    {
        let length = actors.length;

        let index = length - 1;
        index = Math.min(4, Math.max(0, index));
        this.m_group.setSelectedIndex(index);

        let groupCtrl = this.groupCtrls[index];
        groupCtrl.setActors(actors);
    }
}

class StudioShareGroupCtrl
{
    groupId:int = 5;
    view: StudioShareGroup5;
    actorIcons: fairygui.GLoader[] = [];
    actorNames: fairygui.GLabel[] = [];
    init(groupId: int,  view: StudioShareGroup5)
    {
        this.groupId = groupId;
        this.view = view;
        for(let i = 0; i < groupId; i ++)
        {
            let icon =  <fairygui.GLoader><any>(view.getChild("actor_" + i));
            let label = <fairygui.GLabel><any>(view.getChild("actorName_" + i));
            this.actorIcons.push(icon);
            this.actorNames.push(label);
        }
    }

    setActors(actors: StudioActorData[])
    {
        for(let i = 0; i < actors.length; i ++)
        {
            let data = actors[i];
            let icon = this.actorIcons[i];
            let label = this.actorNames[i];
            icon.url = data.bodyIconUrl;
            label.title = data.name;
        }
    }
}