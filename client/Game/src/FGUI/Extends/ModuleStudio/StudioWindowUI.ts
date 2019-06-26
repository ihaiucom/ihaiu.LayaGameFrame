/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioWindowUIStruct from "../../Generates/ModuleStudio/StudioWindowUIStruct";
import Game from '../../../Game';
import { MenuId } from "../../../GameModule/MenuId";
import StudioSSWindowUI from './StudioSSWindowUI';
import StudioData from '../../../GameModule/DataStructs/StudioData';
import StudioShareWindowUI from './StudioShareWindowUI';
import StudioFSWindowUI from './StudioFSWindowUI';
import StudioCPWindowUI from './StudioCPWindowUI';
import StudioMovieClip01Normal from "../ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import TEXT from '../../../Config/Keys/TEXT';
import FguiHelper from '../../../Libs/Helpers/FguiHelper';
import StudioWindow from '../../../GameModule/ViewWindows/StudioWindow';
import Dictionary from '../../../Libs/Helpers/Dictionary';
import StudioStep = proto.StudioStep;
import StudioActorWindowUI from "./StudioActorWindowUI";
import SyncHellper from '../../../Libs/Helpers/SyncHelper';

export default class StudioWindowUI extends StudioWindowUIStruct {

    static aaaList = [];
    // 窗口
    moduleWindow: StudioWindow;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);
        window['studio'] = this;
        window['StudioWindowUI'] = StudioWindowUI;
        StudioWindowUI.aaaList.push(this);
    }

    public get currentData(): StudioData {
        return Game.moduleModel.studio.current;
    }

    private viewDict = new Dictionary<StudioStep, fairygui.GComponent>();
    public getView(step: StudioStep) {
        return this.viewDict.getValue(step);
    }

    public getOrCreateView(step: StudioStep) {
        switch (step) {
            case StudioStep.matchingDisplay:
            case StudioStep.eventEvaluations:
            case StudioStep.selectEventOption:
                step = StudioStep.selectActor;
                break;
                
        }
        let view = this.getView(step);
        if (!view) {
            switch (step) {
                case StudioStep.selectStory://1选择剧本
                    view = StudioSSWindowUI.createInstance();
                    break;
                case StudioStep.selectActor://2选择艺人
                    // view = StudioSAWindowUI.createInstance();
                    view = StudioActorWindowUI.createInstance();
                    break;
                // case StudioStep.selectEventOption://3选择事件选项
                //     view = StudioSEWindowUI.createInstance();
                //     break;
                // case StudioStep.matchingDisplay://6 匹配展示(Label)
                //     view = StudioMDWindowUI.createInstance();
                //     break;
                case StudioStep.propDisplay://7 拍摄展示(Prop)
                    view = StudioMovieClip01Normal.createInstance();
                    break;
                case StudioStep.shareDisplay://8 分享展示
                    view = StudioShareWindowUI.createInstance();
                    break;
                    case StudioStep.firstReward://10 后续收益
                    view = StudioCPWindowUI.createInstance();
                    break;
                    case StudioStep.end://9 首播结算
                        view = StudioFSWindowUI.createInstance();
                        break;
            }

            if (view) {
                // FguiHelper.setScreenSize(view);
                view.width = this.width;
                view.height = this.height;
                FguiHelper.setChildWindow(view, this.moduleWindow);
                FguiHelper.callChildOnWindowInited(view);
                this.viewDict.add(step, view);
            }
        }
        return view;
    }

    private _movieClip: StudioMovieClip01Normal = null;
    public get movieClip(): StudioMovieClip01Normal {
        if (null == this._movieClip) {
            this._movieClip = StudioMovieClip01Normal.createInstance();
            this._movieClip.sClose.add(this.movieClipCloseAction, this);
        }
        return this._movieClip;
    }

    onWindowInited(): void {

    }
    onWindowShow(): void {
        Game.moduleModel.studio.sStepChange.add(this.CheckStep, this);
        this.Init();
    }


    test() {
        // let ct = StudioCPDialog.createInstance();
        // this.showView(ct);
        Game.system.toastText("ontinueTimeTxt");

    }

    onWindowHide(): void {
        Game.moduleModel.studio.sStepChange.remove(this.CheckStep, this);
    }

    async Init() {
        // let result = await Game.sender.studio.studio();
        // if (!result) {
            // let view = this.getOrCreateView(StudioStep.selectStory);
            // this.showView(view);
        // }
        await SyncHellper.waitFrame(1);
        this.CheckStep();
    }


    private lastCheckStepTimestamp = 0;
    async CheckStep() {
        if(Laya.timer.currTimer - this.lastCheckStepTimestamp < 100)
        {
            this.lastCheckStepTimestamp = Laya.timer.currTimer;
            return;
        }

        let view = this.getOrCreateView(this.currentData.step);
        switch (this.currentData.step) {
            case StudioStep.studio://5 没有事件时
                Game.sender.studio.studioStart();
                break;
            case StudioStep.propDisplay://7 拍摄展示(Prop)
                {
                    if (view instanceof StudioMovieClip01Normal) {
                        if (view.isEnableSetData) {
                            view.sClose.add(this.movieClipCloseAction, this);
                            view.setStudioData(Game.moduleModel.studio.current);
                            view.generate();
                            view.play();
                        }
                    }
                }
                break;
            case StudioStep.shareDisplay://8 分享展示
                {
                    if (view instanceof StudioShareWindowUI)
                        view.setData(Game.moduleModel.studio.current);
                }
                break;
            case StudioStep.studioStepInvalid://12 结束
                this.studioEndAction();
                break;
        }
        if (view) {
            this.showView(view);
        }
    }

    private _currentView: fairygui.GComponent;
    showView(view: fairygui.GComponent) {
        if (this._currentView) {
            this._currentView.removeFromParent();
            FguiHelper.callChildOnWindowHide(this._currentView);
            this._currentView = null;
        }
        this._currentView = view;
        if(this._currentView)
        {
            this.addChild(view);
            FguiHelper.callChildOnWindowShow(this._currentView);
        }

        // this._children.forEach(child => {
        //     child.visible = false;
        // })
        // if (this != view.parent) {
        //     this.addChild(view);
        // }
        // view.visible = true;
    }

    menuClose() {
        while (this.numChildren > 0) 
        {
            FguiHelper.callChildOnWindowHide(<any>this.getChildAt(0));
            this.removeChildAt(0);
        }
        Game.menu.close(MenuId.Studio);
        this._currentView = null;
    }

    /** 拍摄展示结束 */
    movieClipCloseAction() {
        Game.sender.studio.studioNextStep(StudioStep.shareDisplay);
    }

    async studioEndAction() {
        this.menuClose();
        // let exp = Game.moduleModel.studio.current.result.expReward;
        // Game.system.toastText(TEXT.CompanyExperience.format(exp));
        Game.menu.open(MenuId.StudioContinueInfo);
    }
}