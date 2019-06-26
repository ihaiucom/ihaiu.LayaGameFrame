import StoryEventConfig from "../../Config/ConfigExtends/StoryEventConfig";
import Game from '../../Game';
import StudioEventEvaluationConfig from "../../Config/ConfigExtends/StudioEventEvaluationConfig";
import StudioAudienceEvaluationConfig from '../../Config/ConfigExtends/StudioAudienceEvaluationConfig';
import IStudioEvent = proto.IStudioEvent;
import StudioEventType = proto.StudioEventType;

/** 拍摄--事件 */
export default class StudioEvent {
    /** 事件ID */
    eventId: int = 0;

    /** 事件类型 */
    eventType: StudioEventType = StudioEventType.storyInvalid;

    /** 事件选项: 1,2,3 */
    eventOption: int = 0;

    /** 事件评价列表 */
    eventEvaluations: int[] = [];

    /** 艺人事件时的艺人 */
    eventActorId: int = 0;

    /** 清理数据 */
    clear()  {
        this.eventId = 0;
        this.eventType = StudioEventType.storyInvalid;
        this.eventOption = 0;
        if (this.eventEvaluations) this.eventEvaluations.length = 0;
    }

    /** 设置协议数据 */
    setProtoData(data: IStudioEvent)  {
        this.clear();
        for (let key in data)  {
            this[key] = data[key];
        }
    }


    /** 事件配置 */
    get eventConfig(): StoryEventConfig  {
        return Game.config.storyEvent.getConfig(this.eventId);
    }

    get iconUrl(): string {
        return Game.moduleModel.studio.current.eventIconUrl;
    }

    /** 获取事件选项 */
    get eventOptionsList(): string[] {
        return this.eventConfig.options;
    }

    /** 事件描述 */
    get detailPart1(): string {
        return this.eventConfig.detailPart1;
    }
    /** 事件选项描述（在选择完事件后显示 */
    get detailPart2(): string[] {
        return this.eventConfig.detailPart2;
    }

    /** 事件完整描述 */
    get detail(): string {
        if(this.eventOption>0) {
            return this.detailPart2[this.eventOption-1];
            // return this.detailPart1+ this.eventOptionsList[this.eventOption-1] +this.detailPart2[this.eventOption-1];
        }
    }

    /** 获取事件评论配置列表 */
    get eventEvaluationConfigList(): StudioEventEvaluationConfig[]  {
        if (!this.eventEvaluations)  {
            let type = this.eventConfig.studioEventEvaluationType[this.eventOption];
            return Game.config.studioEventEvaluation.getTypeConfigList(type);
        }


        let list = [];
        let eventEvaluations = this.eventEvaluations;
        for (let id of eventEvaluations)  {
            let config = Game.config.studioEventEvaluation.getConfig(id);
            list.push(config);
        }

        return list;
    }




}