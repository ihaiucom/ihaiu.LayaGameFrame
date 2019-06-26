/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipSkillStruct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipSkillStruct";
import StudioActorData, { StudioActorSkillData } from "../../../GameModule/DataStructs/StudioActorData";
import StudioMovieClip01Normal from "../ModuleStudioMovieClip01Normal/StudioMovieClip01Normal";
import PlayProgressData from "../../Customs/StudioMovieClipCtrl/PlayProgressData";
import SyncHellper from "../../../Libs/Helpers/SyncHelper";
import StudioMovieClipSkillLeftItem from './StudioMovieClipSkillLeftItem';
import StudioMovieClipSkillRightItem from './StudioMovieClipSkillRightItem';

export default class StudioMovieClipSkill extends StudioMovieClipSkillStruct
{
    testCount: number = 2;
    // 拍摄动画
    studioMovieClip: StudioMovieClip01Normal;
    // 艺人数据列表
    actors: StudioActorData[];
    // 技能数量
    count:int = 0;

     /** 设置 艺人数据列表 */
     setActors(actors: StudioActorData[])
     {
        this.count = 0;
         this.actors = actors;
         actors.forEach(actor=>{
            this.count+= actor.skills.length;
         })
     }

    async play(progressData: PlayProgressData, toX: number, toY: number): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        this.m_bg.alpha = 1;
        window['aa'] = this;
        this.m_skillCountCtrl.setSelectedIndex(this.testCount);
        for (let index = 0; index < this.testCount; index++) {
            Laya.timer.once(150*index,this,this.showItem,[index], false);
        }
        Laya.Tween.to(this.m_bg, {alpha: 0}, 200,Laya.Ease.linearNone,null,1450,false);
        await SyncHellper.waitTime(1130);
        for (let index = 0; index < this.testCount; index++) {
            let item = <StudioMovieClipSkillLeftItem|StudioMovieClipSkillRightItem>this['m_item'+ index];
            item.play(progressData, toX, toY);
        }
    }

    // 窗口显示
    onWindowShow(): void
    {
        let progressData = new PlayProgressData();
        progressData.play();
        this.play(progressData, 150,100);
    }

    showItem(index: number)
    {
        let actorData = new StudioActorData();
        actorData.actorId = 10001006;
        let skillData = new StudioActorSkillData();
        skillData.skillId = 15001001;
        skillData.score = 2134;
        actorData.skills = [skillData];
        this['m_item'+ index].setData(actorData);
    }

    // 窗口隐藏
    onWindowHide(): void
    {
    }

    /** 丢回对象池 */
    public poolRecover()
    {
        this.clear();
        this.removeFromParent();
        Laya.Pool.recover(StudioMovieClipSkill.URL, this);
    }

    /** 从对象池里获取对象 */
    public static poolGet(): StudioMovieClipSkill
    {
        let item = <StudioMovieClipSkill>Laya.Pool.getItem(StudioMovieClipSkill.URL);
        if(!item) {
            item = StudioMovieClipSkill.createInstance();
        }
        return item;
    }

    clear()
    {
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }
}