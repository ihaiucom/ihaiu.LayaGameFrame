import MModel from "../../GameFrame/Module/MModel";
import StudioData from "../DataStructs/StudioData";
import StudioStoryData from "../DataStructs/StudioStoryData";
import Dictionary from "../../Libs/Helpers/Dictionary";
import Signal from '../../Libs/signals/Signal';
import PropId from '../../GameFrame/Props/PropId';
import GlobalConfig from '../../Config/ConfigExtends/GlobalConfig';
import GlobalKey from '../../Config/Keys/GlobalKey';
import TimeHelper from '../../GameHelpers/TimeHelper';
import TEXT from '../../Config/Keys/TEXT';
import IStudioData = proto.IStudioData;
import IStudioStory = proto.IStudioStory;
import StudioStorySelectS2C = proto.StudioStorySelectS2C;
import IStudioActorHistoryPos = proto.IStudioActorHistoryPos;
import StudioStep = proto.StudioStep;
import StudioEventType = proto.StudioEventType;
/**
 * 拍摄 数据模型
 */
export default class StudioModel extends MModel 
{
    sStepChange: Signal = new Signal();

    /** 当前拍摄数据 */
    current: StudioData = new StudioData();
    
    /** 可以选剧本列表 */
    storys: StudioStoryData[] = [];

    /** 剧本持续收益时间 */
    get continueTimeTxt(): string {
        let duration = 0;
        let val2 = GlobalConfig.getValue2(GlobalKey.studio_continue_reward_time);
        if(val2) {
            let sec = val2[0].v1;
            let times = val2[0].v2;
            duration = sec * times;
        }
        let str = TimeHelper.TimeFormatXHXMXSWithoutZero(duration);
        return TEXT.StudioContinueTime.format(str);
    }

    private storyDict: Dictionary<int, StudioStoryData> = new Dictionary<int, StudioStoryData>();
    getStory(storyId:int)
    {
        return this.storyDict.getValue(storyId);
    }


    /** 获取当前步骤 */
    get step(): StudioStep
    {
        if(!this.current)
        {
            return StudioStep.studioStepInvalid;
        }
        return this.current.step;
    }

    setActorPosList(actorPosList: IStudioActorHistoryPos[]) {

    }

    

    /** 设置协议数据 */
    setStudioData(data: IStudioData)
    {
        let current = this.current;
        let step: StudioStep = data.step;

        // current.step = data.step;
        if(data.selectStoryList && data.selectStoryList.length > 0)
            this.setStoryList(data.selectStoryList);
        // 剧本
        if(data.story)
            current.story.setProtoData(data.story);
        else
            current.story.clear();


        // 艺人列表
        if(data.actors && data.actors.length > 0)
        {
            current.setProtoActors(<any>data.actors);
        }
        else
        {
            current.actors.length = 0;
        }

        // 事件
        if(data.event)
            current.event.setProtoData(data.event);
        else
            current.event.clear();
        
        // 结算
        if(data.result)
            current.result.setProtoData(data.result);
        else
            current.result.clear();

        // 艺人巢
        if(step > StudioStep.selectStory)
            current.generateActorCell();


        // 设置步骤
        this.setStep(step);
    }

    /** 设置剧本列表 */
    setStoryList(list: IStudioStory[])
    {
        this.storys.length = 0;
        this.storyDict.clear();
        for(let item of list)
        {
            let storyData = new StudioStoryData();
            storyData.setProtoData(item);
            this.storys.push(storyData);
            this.storyDict.add(storyData.storyId, storyData);
        }
    }

    /** 选择剧本 */
    selectStory(storyId: int, storyName: string)
    {
        let storyData = this.getStory(storyId);
        storyData.storyName = storyName;
        this.current.story.copyValue(storyData);
        this.current.generateActorCell();
    }

    /** 选择艺人 */
    selectActor(actors: any[]) {
        // if(actors && actors.length > 0)
        if(actors && actors.length > 0)
        {
            this.current.setProtoActors(<any>actors);
        }else {
            this.current.clearActors();
        }
    }

    /** 设置事件数据 */
    setEventData(eventId:int, eventType:StudioEventType)
    {
        this.current.event.eventId = eventId;
        this.current.event.eventType = eventType;
    }

    /** 选择事件 */
    selectEventOption(event: any)
    {
        this.current.event.setProtoData(event);
    }

    /** 设置步骤 */
    setStep(step: StudioStep)
    {
        this.current.step = step;
        this.sStepChange.dispatch();
    }
}