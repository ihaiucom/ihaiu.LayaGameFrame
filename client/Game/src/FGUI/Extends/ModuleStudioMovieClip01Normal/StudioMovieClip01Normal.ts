/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClip01NormalStruct from "../../Generates/ModuleStudioMovieClip01Normal/StudioMovieClip01NormalStruct";
import { IStudioMovieClip } from "../../Customs/StudioMovieClipCtrlV2/IStudioMovieClip";
import StudioData from "../../../GameModule/DataStructs/StudioData";
import Signal from "../../../Libs/signals/Signal";
import PlayProgressData from "../../Customs/StudioMovieClipCtrl/PlayProgressData";
import StudioMovieClipScene from "../../Customs/StudioMovieClipCtrlV2/StudioMovieClipScene";
import FguiHelper from "../../../Libs/Helpers/FguiHelper";
import Game from "../../../Game";
import Random from "../../../Libs/Helpers/Random";
import StudioActorData, { StudioActorSkillData } from "../../../GameModule/DataStructs/StudioActorData";
import PropHelper from "../../../GameFrame/Props/PropHelper";
import Prop from "../../../GameFrame/Props/Prop";
import StudioActorState = proto.StudioActorState;
import R from "../../../Config/Keys/R";
import Particle2D from "../../../EngineParticle/Particle2D";

export default class StudioMovieClip01Normal extends StudioMovieClip01NormalStruct implements IStudioMovieClip
{
    /** 拍摄数据 */
    studioData: StudioData;
    
    /** 关闭事件 */
    sClose:Signal = new Signal();
    
    /** 播放进度数据 */
    playProgressData = new PlayProgressData();

    
    /** 场 列表  */
    scenes: StudioMovieClipScene[] = [];
    playScenes: StudioMovieClipScene[] = [];

    
    /** 场 -- 助阵艺人  */
    helperScene = new StudioMovieClipScene();
    /** 场 -- 普通艺人  */
    normalScene = new StudioMovieClipScene();
    /** 场 -- mvp艺人  */
    mvpScene = new StudioMovieClipScene();

    
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        
        this.helperScene.sceneType = StudioActorState.help;
        this.normalScene.sceneType = StudioActorState.normal;
        this.mvpScene.sceneType = StudioActorState.best;
        this.scenes.push(this.helperScene);
        this.scenes.push(this.normalScene);
        this.scenes.push(this.mvpScene);

        for(let scene of this.scenes)
        {
            scene.studioMovieClip = this;
        }

        window['smc'] = this;



        // this.test();
        this.setScreenSize();
        this.initParticle();
    }




    //================================================================
    // 测试
    //----------------------------------------------------------------
    test()
    {
        this.m_resetBtn.onClick(this, this.testData);
        this.m_playBtn.onClick(this, this.play);
        this.m_pauseBtn.onClick(this, this.pause);
        this.m_stopBtn.onClick(this, this.stop);
    }
    
    testData()
    {

        let studioData = new StudioData();
        studioData.story.storyId = 10210010;
        let actorIds = [10001001, 10001002, 10001013, 10001008, 10001011];
        let count = Random.rangeBoth(1,  actorIds.length);
        count = actorIds.length;
        for(let i = 0; i < count; i ++)
        {
            let actor = new StudioActorData();
            actor.actorId = actorIds[i];
            actor.actorState = StudioActorState.normal;
            // let skillCount = Random.range(1, 1);
            // for(let si = 0; si < skillCount; si ++)
            // {
            //     let skill = new StudioActorSkillData();
            //     skill.skillId = si + 1;
            //     skill.score = Random.range(40, 80);
            //     actor.skills.push(skill);
            // }

            let propIds = PropHelper.ActorPropIds;
            for(let propId of propIds)
            {
                actor.scoreProps.push( Prop.Create(propId, Random.range(400, 600)));
            }

            studioData.actors.push(actor);
        }

        studioData.actors[0].isMvp = true;
        studioData.actors[1].actorState = StudioActorState.help;
        studioData.actors[2].actorState = StudioActorState.best;
        
        studioData.result.score = Random.rangeBoth(10, 10);
        studioData.result.publicPraise = Random.rangeBoth(10, 10);

        // let r = Random.range(0, studioData.actors.length);
        // studioData.actors[r].isMvp = true;

        // r = Random.range(0, studioData.actors.length);
        // studioData.actors[r].actorState = StudioActorState.help;
        
        // r = Random.range(0, studioData.actors.length);
        // studioData.actors[r].actorState = StudioActorState.best;


        this.setStudioData(studioData);
        this.generate();
    }

    //================================================================























    
    setScreenSize()
    {
        this.setSize(Game.screenSetting.screenWidth, Game.screenSetting.screenHeight);
        FguiHelper.autoScreenScale(this.m_scenePic, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
        FguiHelper.autoScreenScaleShrink(this.m_layoutBottom, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
        FguiHelper.autoScreenScale(this.m_layoutTop, Laya.Stage.ALIGN_CENTER, Laya.Stage.ALIGN_MIDDLE);
    }

    
    // 窗口显示
    onWindowShow(): void
    {
        this.setScreenSize();
        Laya.stage.on(laya.events.Event.RESIZE, this, this.setScreenSize);
        this.m_scoreProgressBar.onWindowShow();
        if(this.particle)
        {
            this.particle.play();
        }
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        Laya.stage.off(laya.events.Event.RESIZE, this, this.setScreenSize);
        this.m_scoreProgressBar.onWindowHide();
        if(this.particle)
        {
            this.particle.stop();
        }
    }

    particle: Particle2D;
    async initParticle()
    {
        if(!this.particle)
        {
            let p = await Game.asset.createParticle(R.particles.StudioActorShow);
            p.emitter.start();
            p.play();
            p.x = this.width >> 1;
            p.y = this.height >> 1;
            this.m_layoutTop.displayObject.addChild(p);
            this.particle = p;
        }

    }






    /** 设置拍摄数据 */
    public setStudioData(studioData: StudioData)
    {
        this.studioData = studioData;

        this.helperScene.setActors(studioData.getActorsHelper());
        this.normalScene.setActors(studioData.getActorsNormal());
        this.mvpScene.setActors(studioData.getActorsBestAndMvp());
        this.m_scenePic.icon = studioData.story.scenePicUrl;
    }

    /** 生成 */
    public generate()
    {
        this.clear();

        this.m_scoreProgressBar.initByConfig(this.studioData);
        
        this.playScenes.length = 0;
        for(let scene of this.scenes)
        {
            if(scene.hasActor)
            {
                this.playScenes.push(scene);
            }
        }

        for(let scene of this.playScenes)
        {
            scene.generate();
        }
    }

    /** 清理 */
    private clear()
    {
        this.playScenes.length = 0;
        for(let scene of this.scenes)
        {
            scene.clear();
        }
        this.playProgressData.clear();
        this.offClick(this, this.onClikClose);
    }

    public get isEnableSetData()
    {
        return !this.playProgressData.isPlaying || (Game.time.localTime - this.playTime) > 3000;
    }

    private playTime = 0;


    /** 播放 */
    public async play(): Promise<boolean>
    {

        this.playTime = Game.time.localTime;

        this.playProgressData.play();
        for(let i = 0; i < this.playScenes.length; i ++)
        {
            let scene = this.playScenes[i];
            await scene.play(this.playProgressData);
            if(i < this.playScenes.length - 1)
            {
                await scene.playEnd(this.playProgressData);
            }
        }

        return new Promise<boolean>((resolve)=>
        {
            this.onClick(this, this.onClikClose);
        });
    }

    private onClikClose()
    {
        this.stop();
        this.removeFromParent();
        this.sClose.dispatch();
    }

    /** 停止 */
    stop()
    {
        this.clear();
    }

    /** 暂停 */
    pause()
    {
        this.playProgressData.pause();
    }


    /** 添加视图 */
    addViewBottom(view: fairygui.GObject)
    {
        this.m_layoutBottom.addChild(view);
    }
    

    /** 添加视图 */
    addViewMiddle(view: fairygui.GObject)
    {
        this.m_layoutMiddle.addChild(view);
    }

    /** 添加视图 */
    addViewTop(view: fairygui.GObject)
    {
        this.m_layoutTop.addChild(view);
    }

    private _progressGlobalPos = new Laya.Point();
    /** 当前进度条 到达的全局坐标 */
    get progressGlobalPos(): Laya.Point
    {
        // return this.m_scoreProgressBar.currentGlobalPos;
        this._progressGlobalPos = this.m_scoreProgressBar.m_line.localToGlobal(0, 0, this._progressGlobalPos);
        return this._progressGlobalPos;
    }

    /** 当前进度条 到达的全局坐标， 相对m_layoutMiddle坐标 */
    get progressPosForLayoutMiddle(): Laya.Point
    {
        let p = this.progressGlobalPos;
        p = this.m_layoutMiddle.globalToLocal(p.x, p.y, p);
        return p;
    }

    /** 获取对应分数所在位置 */
    getProgressPosForLayoutMiddleByAddPropVal(addVal: number): Laya.Point
    {
        let p = this.m_scoreProgressBar.getGolbalPosByAddPropVal(addVal);
        p = this.m_layoutMiddle.globalToLocal(p.x, p.y, p);
        return p;
    }

    /** 添加进度值 */
    addProgressVal(addval: number)
    {
        this.m_scoreProgressBar.addPropVal(addval);
    }




}