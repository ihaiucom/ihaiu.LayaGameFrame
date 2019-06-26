/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioMovieClipSkillLeftItemStruct from "../../Generates/ModuleStudioMovieClip00Common/StudioMovieClipSkillLeftItemStruct";
import { StudioActorSkillData } from '../../../GameModule/DataStructs/StudioActorData';
import NumberRoller from '../../../Libs/Helpers/NumberRoller';
import TextPrint from '../../../Libs/Helpers/TextPrint';
import StudioActorData from '../../../GameModule/DataStructs/StudioActorData';
import ParticleFly from "../../../Libs/Helpers/ParticleFly";
import R from "../../../Config/Keys/R";
import PlayProgressData from "../../Customs/StudioMovieClipCtrlV2/PlayProgressData";

export default class StudioMovieClipSkillLeftItem extends StudioMovieClipSkillLeftItemStruct
{
    
    actorData: StudioActorData;
    fromPos = new Laya.Point();
    toPos = new Laya.Point();
    onWindowInited(): void
    {
        
    }
    
    setData(data: StudioActorData)
    {
        this.actorData = data;
        this.visible = true;
        this.m_actor.setActorIcon(data.bodyIconUrl);
        /**fairygui动效 */
        let handler = Laya.Handler.create(this, this.finishAnimation);
        this.m_t0.play(handler);
        /** 文字渐显动效 */
        Laya.timer.once(540, this, this.showSkillLb,null, false);
        /** 分数滚动动效 */
        Laya.timer.once(540, this, this.scoreRolling,null, false);
    }

    showSkillLb()
    {
        let print = new TextPrint();
        print.init(this.m_content, this.actorData.skills[0].skillName,50,500,1);
        print.playByDuration();
    }

    scoreRolling()
    {
        this.m_value.text = this.actorData.skills[0].score + "";
        NumberRoller.rolling(this.m_value,540);
    }

    finishAnimation()
    {
        this.visible = false;
    }

    async play(progressData: PlayProgressData, toX: number, toY: number): Promise<boolean>
    {
        if(progressData.checkIsPlayed())
            return Promise.resolve(false);
        this.fromPos = this.m_value.localToGlobal();
        this.toPos.x = toX;
        this.toPos.y = toY;
        
        let particle = ParticleFly.poolGet();
        await particle.init([R.particles.StudioSkillStar]);
        
        // particle.setColor(this.particleColorR, this.particleColorG, this.particleColorB, this.particleColorA);
        particle.play([R.particles.StudioSkillStar], this.parent.displayObject, this.fromPos, this.toPos, 500);
        
        Laya.Tween.clearAll(this);
        // Laya.Tween.to(this, {x: toX, y: toY}, 500, Laya.Ease.linearNone);
        // Laya.Tween.to(this, {alpha: 0}, 100, Laya.Ease.linearNone, null, 400);
    }
}