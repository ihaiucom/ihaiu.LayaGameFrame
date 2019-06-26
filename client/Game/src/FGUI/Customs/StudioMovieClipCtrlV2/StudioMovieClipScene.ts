import StudioActorData from "../../../GameModule/DataStructs/StudioActorData";
import SceneSwitch from "./SceneSwitch";
import PlayProgressData from "./PlayProgressData";
import Random from "../../../Libs/Helpers/Random";
import StudioMovieClip01Normal from "../../Extends/ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import ActorGroup from "./ActorGroup";
import StudioMovieClipName from "../../Extends/ModuleStudioMovieClip00Common/StudioMovieClipName";
import PropIconItem from "../../Extends/CommonGame/PropIconItem";
import PropHelper from "../../../GameFrame/Props/PropHelper";
import SyncHellper from "../../../Libs/Helpers/SyncHelper";
import Mathf from "../../../Libs/Mathf";
import Game from "../../../Game";

/** 拍摄动画 -- 艺人场 */
export default class StudioMovieClipScene
{
    // 场景类型
    sceneType: proto.StudioActorState;

    // 拍摄动画
    studioMovieClip: StudioMovieClip01Normal;

    // 艺人数据列表
    actors: StudioActorData[];

    // 属性总分
    scorePropTotal: number = 0;

    // 艺人组
    actorGroup:ActorGroup = new ActorGroup();
    // 场景名称
    nameView: StudioMovieClipName;
    // 五个属性图标
    propIcons: PropIconItem[] = [];

    // 切场动画
    sceneSwitch: SceneSwitch;

    get hasActor(): boolean
    {
        return this.actors && this.actors.length > 0;
    }


    /** 设置 艺人数据列表 */
    setActors(actors: StudioActorData[])
    {
        this.actors = actors;
        this.scorePropTotal = 0;
        for(let item of actors)
        {
            this.scorePropTotal += item.scorePropTotal;
        }
    }

    /** 生成艺人展示和技能展示 */
    generate()
    {
        this.clear();
        this.actorGroup.studioMovieClip = this.studioMovieClip;
        this.actorGroup.setActors(this.actors);
        this.actorGroup.generate();

        
        this.nameView = StudioMovieClipName.poolGet();
        this.nameView.setSceneType(this.sceneType);
        this.nameView.x = Laya.stage.width * 0.5;
        this.nameView.y = Laya.stage.height - this.nameView.height - 30;
        if(Game.browserSetting.isLiuHai)
            this.nameView.y -= Game.screenSetting.liuHaiHeightBottom;


        let propIds = PropHelper.ActorPropIds;
        let xStart = 100;
        let xGap = (Laya.stage.width - xStart * 2) / Math.max(2, propIds.length);
        for(let i = 0; i <  propIds.length; i ++)
        {
            let item = PropIconItem.poolGet();
            item.setPropId(propIds[i]);
            item.y = Laya.stage.height - 400;
            item.x = item.width * 0.75 + xStart + xGap * i;
            
            this.propIcons.push(item);
        }


        this.sceneSwitch = SceneSwitch.poolGet();
        this.sceneSwitch.init(this.studioMovieClip);
    }


    /** 清理 */
    clear()
    {
        this.actorGroup.clear();

        if(this.nameView)
        {
            this.nameView.poolRecover();
            this.nameView = null;
        }
        
        for(let propItem of this.propIcons)
        {
            propItem.poolRecover();
        }
        this.propIcons.length = 0;

        if(this.sceneSwitch)
        {
            this.sceneSwitch.poolRecover();
            this.sceneSwitch = null;
        }
    }

    
    /** 播放 */
    async play(progressData?: PlayProgressData): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        
            
        console.log("播放场景");
        await this.actorGroup.playIn(progressData);
        this.studioMovieClip.addViewMiddle(this.nameView);
        await this.nameView.playIn(progressData);
        for(let propIcon of this.propIcons)
        {
            this.studioMovieClip.addViewMiddle(propIcon);
            await propIcon.playIn(progressData);
        }
        
        await SyncHellper.waitTime(300);

        
        let beginX = this.studioMovieClip.progressPosForLayoutMiddle.x;
        let y = this.studioMovieClip.progressPosForLayoutMiddle.y;
        let endPos = this.studioMovieClip.getProgressPosForLayoutMiddleByAddPropVal(this.scorePropTotal);
        let xLength = endPos.x - beginX;
        let xGap = xLength / this.propIcons.length;
        console.log(beginX, endPos.x, xLength, xGap);
        // 进度条加值
        this.studioMovieClip.addProgressVal(this.scorePropTotal);
        for(let i =0 ; i < this.propIcons.length; i ++)
        {
            let propIcon = this.propIcons[i];
            await propIcon.playOut(progressData, Mathf.Lerp(beginX, endPos.x, i / this.propIcons.length * 0.2), y);
        }
        

        await SyncHellper.waitTime(1000);
        console.log("播放场景 完成");
        
    }

    /** 播放完成 */
    async playEnd(progressData?: PlayProgressData)
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);

        await this.nameView.playOut(progressData);
        await this.actorGroup.playOut(progressData);


        // 切场
        await this.sceneSwitch.play(progressData);
        this.actorGroup.clear();
        this.clear();
        return Promise.resolve(true);
    }
    

}