/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ScoreProgressBarStruct from "../../Generates/ModuleStudioMovieClip00Common/ScoreProgressBarStruct";
import Particle2D from "../../../EngineParticle/Particle2D";
import Game from "../../../Game";
import R from "../../../Config/Keys/R";
import StudioData from "../../../GameModule/DataStructs/StudioData";
import ScoreProgressMark from "./ScoreProgressMark";

export default class ScoreProgressBar extends ScoreProgressBarStruct
{
    scoreProgressParticle: Particle2D;

    // 评分
    scoreTotal = 100;
    scoreValue = 0;

    // 属性值
    propTotal = 100;
    propValue = 0;

    // 属性转评分 乘的系数
    prop2ScoreMul = 1;

    markList: ScoreProgressMark[] = [];

    
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
    }
    

    public initByConfig(studioData: StudioData)
    {
        let scoreTotal = studioData.result.score + studioData.result.publicPraise;
        let propTotal = studioData.scoreTotal;
        this.prop2ScoreMul = scoreTotal > 0 && propTotal > 0 ? scoreTotal / propTotal : 1;
        this.scoreTotal = scoreTotal;
        this.propTotal = propTotal;

        this.scoreValue = 0;
        this.propValue = 0;

        this.max = Game.config.studioLevel.maxLevelConfig.max;
        this.value = 0;



        let i = 0;
        this.markList.length = 0;
        let configlist = Game.config.studioLevel.progressList;
        for(let config of configlist)
        {
            let mark = <ScoreProgressMark><any>(this.getChild("mark_" + config.id));
            if(mark)
            {
                // mark.m_title.text = config.name;
                mark.studioLevelConfig = config;
                mark.x = config.minRate * this.width;
                mark.isLight = false;
                mark.m_drak.m_level.selectedIndex = i;
                mark.m_light.m_level.selectedIndex = i;
                this.markList.push(mark);
                i ++;
            }
        }


        this.tweenScoreValue = 0;
        this.initParticle();

    }


    addPropVal(addVal: number)
    {
        this.propValue += addVal;
        this.scoreValue = this.propValue * this.prop2ScoreMul;

        Laya.Tween.clearAll(this);
        Laya.Tween.to(this, {tweenScoreValue: this.scoreValue}, 100 * 5 + 100, Laya.Ease.quartOut, null, 500);
    }

    get tweenScoreValue(): number
    {
        return this.value;
    }

    set tweenScoreValue(val: number)
    {
        this.value = val;
        this.m_value.text = (val / this.prop2ScoreMul).toFixed().toString();
        this.m_line.x = this.value / this.max * this.width;
        this.m_line.visible = this.m_line.x > 30 && this.m_line.x < this.width - 30;
        for(let item of this.markList)
        {
            item.isLight = val >= item.studioLevelConfig.min;
        }
    }

    
    
    // 初始化粒子
    async initParticle()
    {
        // 进度条
        let p = await Game.asset.createParticle(R.particles.StudioProgress);
		p.emitter.start();
        p.play();

        let sprite=  this.m_line.displayObject;
        p.y = sprite.height >> 1;
        sprite.addChild(p);
        this.scoreProgressParticle = p;
    }

    
    // 窗口显示
    onWindowShow(): void
    {
        if(this.scoreProgressParticle)
        {
            this.scoreProgressParticle.play();
        }
    }

    // 窗口隐藏
    onWindowHide(): void
    {
        if(this.scoreProgressParticle)
        {
            this.scoreProgressParticle.stop();
        }
    }

    private p = new Laya.Point();
    
    getGolbalPosVal(val: number): Laya.Point
    {
        let p = this.p;
        let r = val / this.max;
        p.x = this.width * r;
        p.y = this.height * 0.5;
        p = this.localToGlobal(p.x, p.y);
        return p;
    }

    getGolbalPosByPropVal(val: number): Laya.Point
    {
        return this.getGolbalPosVal(val * this.prop2ScoreMul);
    }
    
    getGolbalPosByAddPropVal(addVal: number): Laya.Point
    {
        return this.getGolbalPosByPropVal(this.propValue + addVal);
    }

    
    get currentGlobalPos(): Laya.Point
    {
        return this.getGolbalPosByPropVal(this.value)
    }


}