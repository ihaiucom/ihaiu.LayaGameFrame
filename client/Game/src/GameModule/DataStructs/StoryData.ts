import DTStoryEffect from '../../Config/ConfigExtends/DTStoryEffect';
import StoryConfig from '../../Config/ConfigExtends/StoryConfig';
import Game from '../../Game';
import StorySeriesConfig from '../../Config/ConfigExtends/StorySeriesConfig';
export default class StoryData {

    private _id: number;   
    private _name: string; 
    private _maxAudienceRatings: number; 
    private _maxScore:number;            
    private _eventList:any;    
    private _commentList:Array<any> = [];          

    private _config: StoryConfig;
    private _icon: string;
     

    index: number;

    constructor()  {

    }

    //创建剧本数据单位
	static Create(msg: any): StoryData {
		let story   = new StoryData();
        story.id   = msg.storySeriesId;
        story.name = msg.storyName;
        story.maxAudienceRatings = msg.maxAudienceRatings;
        story.maxScore  = msg.maxScore;
        story.eventList = msg.eventList;

        let serirsconfig:StorySeriesConfig = Game.config.storySeries.getConfig(msg.storySeriesId);
        story.config = Game.config.story.getConfig(serirsconfig.storyID[0]);

		return story;
    }
    
    /**
     * 剧本序列ID
     */
    set id(val: number) {
        this._id = val;
    }

    get id(): number {
        return this._id;
    }

    /**
     * 剧本名称
     */
    set name(val: string) {
        this._name = val;
    }

    get name(): string {
        return this._name;
    }

    /**
     * 最高收视率
     */
    set maxAudienceRatings(val: number) {
        this._maxAudienceRatings = val;
    }

    get maxAudienceRatings(): number {
        return this._maxAudienceRatings;
    }

    /**
     * 最高得分
     */
    set maxScore(val: number) {
        this._maxScore = val;
    }

    get maxScore(): number {
        return this._maxScore;
    }

    /**
     * 已收集事件列表
     */
    set eventList(val: any) {
        this._eventList = val;
    }

    get eventList(): any {
        return this._eventList;
    }

    /**
     * 事件是否已收集
     * @param eventid 
     */
    isGetEvent(eventid: number): boolean {
        for (let i = 0; i < this._eventList.length; i++) {
            if (eventid == this._eventList[i]) {
                return true
            }
        }

        return false;
    }

    /**
     * 剧本配置
     */
    set config(val: StoryConfig) {
        this._config = val;
    }

    get config(): StoryConfig {
        return this._config;
    }

    /**
     * 剧本星级
     */
    get star(): number {
        return this.config.starNumber;
    }

    /**
     * 剧本海报
     */
    get icon(): string {
        if (!this._icon) {
            this._icon = Game.config.avatar.getConfig(this.config.posterName).iconUrl;
        }

        return this._icon; 
    }

    /**
     * 所有事件
     */
    get allEventIds(): Array<number> {
        let storyevents = this.config.storyEventId;
        let characterevents = Game.config.storyCharacters.storyEventIds(this.id);

        return storyevents.concat(characterevents);
    }

    

}