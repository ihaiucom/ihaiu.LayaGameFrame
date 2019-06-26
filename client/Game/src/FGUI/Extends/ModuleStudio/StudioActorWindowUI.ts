/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorWindowUIStruct from "../../Generates/ModuleStudio/StudioActorWindowUIStruct";
import Game from '../../../Game';
import Res from '../../../Config/Keys/Res';
import R from "../../../Config/Keys/R";
import StudioData from '../../../GameModule/DataStructs/StudioData';
import StudioStep = proto.StudioStep;


export default class StudioActorWindowUI extends StudioActorWindowUIStruct {
    public get studioData(): StudioData {
        return Game.moduleModel.studio.current;
    }

    /** 是否播放从艺人选择到标签匹配页面的过渡动画 */
    public __tweenFlag: boolean = false;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        // this.m_frame.m_icon.url = Res.getBgUrl(R.bg.Studio);
        let that = this;
        this.m_cellPanel.actorWindow = that;
        this.m_selectPanel.actorWindow = that;
    }

    onWindowShow() {
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++");
        this._addListeners();
        this.updateView();
    }

    onWindowHide(): void {
        this._removeListeners();
    }

    private _addListeners() {
        this.m_closeBtn.onClick(this, this.closeModuleWindow);
        this.m_selectPanel.m_nextBtn.onClick(this, this.nextBtnOnClick);
        this.m_dispalyPanel.m_startBtn.onClick(this, this.startBtnOnClick);
        this.m_mask.onClick(this, this.stopDisplayItemAnimations);
        
    }

    private _removeListeners() {
        this.m_closeBtn.offClick(this, this.closeModuleWindow);
        this.m_selectPanel.m_nextBtn.offClick(this, this.nextBtnOnClick);
        this.m_dispalyPanel.m_startBtn.offClick(this, this.startBtnOnClick);
        this.m_mask.offClick(this, this.stopDisplayItemAnimations);
    }

    async updateView() {
        
        this._updateActorsInfo();
        this.m_windowType.setSelectedIndex(0);
        let step = this.studioData.step;
        let isSelectActor = StudioStep.selectActor == step;
        let showMask = false;
        switch (step) {
            case StudioStep.selectActor:
            {
                this.m_windowType.setSelectedPage("actor");
                this.updateSelectActorView();
            }
                break;
            case StudioStep.matchingDisplay:
            {
                showMask = true;
                this.m_windowType.setSelectedPage("display");
                await this.showDisplay(this.__tweenFlag);
            }
            break;
            case StudioStep.selectEventOption:
            {
                this.m_windowType.setSelectedPage("event");
                this.m_eventDialog.onShow();
            }
            break;
            case StudioStep.eventEvaluations:
            {
                this.m_windowType.setSelectedPage("event2");
                this.m_eventDialog.onShow();
            }
            break;
        
            default:
                break;
        }
        this.m_mask.visible = showMask;
        this.__tweenFlag = isSelectActor;
    }

    private updateSelectActorView() {
        this.m_selectPanel.x = 0;
        this.m_dispalyPanel.x = this.width;
        if(this.studioData)
        {
            let nextIndex = this.studioData.getNextActorCellIndex();
            this.playStartBtnAnimation(-1 == nextIndex)
        }
    }
    
    private async showDisplay(flag: boolean) {
        await this.showMatchingDisplay(flag);
        let that = this;
        let actors = this.studioData.actors.slice();
        let duration = Game.constant.studio.MatchingDisplay_Interval;
        this.m_dispalyPanel.m_displayList.updateView(actors);
        for (let index = 0; index < actors.length; index++) {
            this.m_cellPanel.playItemAnimation(index,duration,duration*index);
            this.m_dispalyPanel.playItemAnimation(index,duration,duration*index);
        }
        
        Laya.timer.once(duration*actors.length, this, ()=>{
            that.m_mask.offClick(that, that.stopDisplayItemAnimations);
            that.m_mask.visible = false;
        });
    }

    public stopDisplayItemAnimations() {
        this.m_mask.offClick(this, this.stopDisplayItemAnimations);
        this.m_mask.visible = false;        
        if (StudioStep.matchingDisplay == this.studioData.step) {//标签匹配
            this.m_cellPanel.stopItemAnimations();
            this.m_dispalyPanel.stopItemAnimations();
        }        
    }

    private _updateActorsInfo(selectedIndex: number = 0) {
        this.playStartBtnAnimation(-1 == this.studioData.getNextActorCellIndex());
        this.m_cellPanel.updateView(this.studioData,selectedIndex);
    }

    /** cell 点击事件 */
    cellOnClick(index: number) {
        if (StudioStep.matchingDisplay == this.studioData.step) {//标签匹配
            this.m_dispalyPanel.scrollMatchingDispaly(index);
        } else {//选艺人
            this.m_selectPanel.updateView(this.studioData.actorCells[index]);
        }
    }

    /**
     * 展示标签匹配
     * @param isTween default is true
     */
    private async showMatchingDisplay(isTween: boolean = true) {

        return new Promise<void>(resolve=>{

            let duration = 1000;
            let p = this.m_selectPanel;
            let p2 = this.m_dispalyPanel;
            if (isTween) {
                let callback = ()=>{
                    resolve();
                }
                let handler = Laya.Handler.create(this,callback,null,true);
                Laya.Tween.to(p, { x: -p.width }, duration, Laya.Ease.quadOut,handler);
                Laya.Tween.to(p2, { x: 0 }, duration, Laya.Ease.quadOut);
            } else {
                p.x = -this.width;
                p2.x = 0;
                resolve();
            }
        })
    }

    private showSelectActor() {
        this.m_selectPanel.x = 0;
        this.m_dispalyPanel.x = this.width;
    }

     /** 选择艺人 */
     async selectActor(actorId: number, characterId: number): Promise<boolean> {
        let result = await Game.sender.studio.actorSelect(characterId, actorId);
        if (result) {
            let nextindex = this.studioData.getNextActorCellIndex(characterId);
            if(-1 == nextindex)
            {
                nextindex = this.studioData.getActorCellIndex(characterId);
            }
            this._updateActorsInfo(nextindex);
        }
        return result;
    }

    playStartBtnAnimation(isPlay: boolean)
    {
        this.m_selectPanel.playStartBtnAnimation(isPlay);
    }


    async nextBtnOnClick() {
        let result = await Game.sender.studio.studioNextStep(StudioStep.matchingDisplay);
    }
    async startBtnOnClick() {
        // this.showSelectActor();
        this.stopDisplayItemAnimations();
        let s2c = await Game.sender.studio.matchingDisplayEnd();
    }
    closeModuleWindow() {
        this["moduleWindow"].window.menuClose();
    }

}