/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioFSWindowUIStruct from "../../Generates/ModuleStudio/StudioFSWindowUIStruct";
import Game from '../../../Game';
import StudioResultData from '../../../GameModule/DataStructs/StudioResultData';
import TEXT from '../../../Config/Keys/TEXT';
import StudioData from '../../../GameModule/DataStructs/StudioData';
import StudioStep = proto.StudioStep;

export default class StudioFSWindowUI extends StudioFSWindowUIStruct
{
    private get studioData(): StudioData {
        return Game.moduleModel.studio.current;
    }
    
    private get resultData(): StudioResultData {
        return this.studioData.result;
    }
    
    protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
    }

    // 窗口显示
    onWindowShow(): void
    {
        this.m_nextBtn.onClick(this,this.nextBtnOnClick);
        this.updateView();
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        this.m_nextBtn.offClick(this,this.nextBtnOnClick);
        Laya.timer.clearAll(this);
        Game.system.userLevelAndExpPlay.sExp.remove(this.setExp, this);
        Game.system.userLevelAndExpPlay.sLevel.remove(this.setLevel, this);
    }

    updateView() {
        switch(this.studioData.step)
        {
            case StudioStep.studioStepInvalid:
                return;
        }
        let result = this.resultData;
        this.m_rate.updateView(result);

        this.setLevel(Game.user.levelSnapshotData.level);
        Game.system.userLevelAndExpPlay.sExp.add(this.setExp, this);
        Game.system.userLevelAndExpPlay.sLevel.add(this.setLevel, this);
        Game.system.userLevelAndExpPlay.playTo();

        if(result.firstReward && result.firstReward.length > 0) {
            this.m_awardPanel.visible = true;
            this.m_awardPanel.updateView(result);
        }
    }

    private setExp(exp: number, expMax: number)
    {
        this.m_progressBar.max = expMax;
        this.m_progressBar.value = exp;
        console.log(exp + "/" + expMax);
    }

    private setLevel(level: number, isMaxLevel: boolean = false)
    {
        this.m_progressBar.m_level2.text = level+"";
    }

    nextBtnOnClick() {
        Game.moduleModel.studio.setStep(StudioStep.studioStepInvalid);
    }
}