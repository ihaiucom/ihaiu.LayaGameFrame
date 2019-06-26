import Game from '../../Game';
import StudioModel from "../../GameModule/DataModels/StudioModel";
import StudioContinuedModel from "../../GameModule/DataModels/StudioContinuedModel";
import StudioStep = proto.StudioStep;

/** 拍摄 */
export default class StudioSender
{
    get studioModel():StudioModel
    {
        return Game.moduleModel.studio;
    }

    get studioContinuedModel(): StudioContinuedModel
    {
        return Game.moduleModel.studioContinued;
    }


    /** 第一次获取数据 */
    async studio(): Promise<boolean>
    {
        let result = true;
        let s2c = await Game.net.AsyncStudioC2S();
        console.log("**********studio data***********", s2c);
        
        result = s2c.error == 0;
        if (result) 
        {
            this.studioModel.setActorPosList(s2c.actorPosList);
            this.studioModel.setStudioData(s2c.data);
        }
        return Promise.resolve(result);
    }


    /** 选择剧本 */
    async storySelect(storyId:int, storyName: string): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioStorySelectC2S(storyId, storyName);
        let result = s2c.error == 0;
        if(result)
        {
            this.studioModel.setStudioData(s2c.data);
            // this.studioModel.setStep(StudioStep.selectActor);
        }


        return Promise.resolve(result);
    }

    
    /** 选择艺人 */
    async actorSelect(storyCharactersId:int, actorId:int): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioActorSelectC2S(storyCharactersId, actorId);
        let result = s2c.error == 0;
        // if(result && s2c.actors && s2c.actors.length > 0)
        if(result )
        {
            this.studioModel.selectActor(s2c.actors);
            this.studioModel.current.generateActorCell();
        }


        return Promise.resolve(result);
    }


    /** 选择艺人完成 */
    async matchingDisplayEnd(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioMatchingDisplayEndC2S();
        let result = s2c.error == 0;
        if(result) {
            //handled in GamerNotifyStudioEventS2CHandler.ts
        }

        return Promise.resolve(result);
    }

    /**
     * 选择事件
     * @param eventOption 事件选项：1,2,3
     */
    async eventOptionSelect(eventOption:int): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioEventOptionSelectC2S(eventOption);
        let result = s2c.error == 0;
        if(result)
        {
            this.studioModel.selectEventOption(s2c.event);
            this.studioModel.setStep(StudioStep.eventEvaluations);
        }


        return Promise.resolve(result);
    }

    /** 开始拍摄 */
    async studioStart(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioStartC2S();
        
        let result = s2c.error == 0;
        if(result)
        {
            console.log("******studioStart********", s2c.data);
            
            this.studioModel.setStudioData(s2c.data);
            // this.studioModel.setStep(StudioStep.propDisplay);
        }


        return Promise.resolve(result);
    }

    /** 继续下一步骤 */
    async studioNextStep(step: number): Promise<boolean>
    {
        if(step == StudioStep.end) {
            Game.user.levelSnapshot();
        }
        let s2c = await Game.net.AsyncStudioNextStepC2S(step);

        
        let result = s2c.error == 0;
        if(result)
        {
            this.studioModel.setStep(s2c.step);
        }


        return Promise.resolve(result);
    }




    
    //==========================================================
    // 拍摄后期收益
    //-----------------------------------------------------------

    
    /** 拍摄后期收益--数据列表 */
    async studioContinuedListC2S(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioContinuedListC2S();
        
        let result = s2c.error == 0;
        if(result)
        {
            this.studioContinuedModel.setProtoListData(s2c.list);
        }
        result = result && s2c.list && s2c.list.length > 0;

        return Promise.resolve(result);
    }

    
    /** 拍摄后期收益--获取收益 */
    async studioContinuedReceive(uid:int): Promise<boolean[]>
    {
        let s2c = await Game.net.AsyncStudioContinuedReceiveC2S(uid);

        
        let result = s2c.error == 0;
        let isAllReceived = false;
        if(result)
        {
            this.studioContinuedModel.updateProtoData(s2c);
            s2c.data.receivePeriod >= 7 && (isAllReceived = true);
        }

        return Promise.resolve([result, isAllReceived]);
    }
    
    /** 拍摄后期收益--获取所有收益 */
    async studioContinuedReceiveAll(): Promise<boolean>
    {
        let s2c = await Game.net.AsyncStudioContinuedReceiveAllC2S();
        
        let result = s2c.error == 0;
        if(result)
        {
            this.studioContinuedModel.updateProtoListData(s2c);
        }


        return Promise.resolve(result);
    }

    
    
    private get testData(): any {
        var data = {
            step: 0,//步骤
            story: { //已选剧本
                storyType: 1703,//剧本风格
                storyId: 1043,// 剧本id
                storyName: "黑天鹅",// 剧本名字
                expect: 0,//期待值
                eventNum: 0,//事件
                season: 0, //季
                episode: 0, //期
            },
            actors: null,
            event: null,
            result: null,

        }
        return data;
    }

    async reqStudio() {
       
        // Game.moduleModel.studio.updateCurrentStudioData(this.testData); //测试数据

        let s2c = await Game.net.AsyncStudioC2S();
        if(s2c.error == 0) {
            console.log("++++++++++++", s2c);
            // Game.moduleModel.studio.updateCurrentStudioData(s2c.data);
        }
        return Promise.resolve(s2c.error == 0);
    }

    
    
}