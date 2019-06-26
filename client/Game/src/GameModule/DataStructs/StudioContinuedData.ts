
import Game from '../../Game';
import StoryConfig from "../../Config/ConfigExtends/StoryConfig";
import GameStringHelper from "../../GameHelpers/GameStringHelper";
import LabelType from '../../GameFrame/PropLabels/LabelType';
import TimeHelper from '../../GameHelpers/TimeHelper';
import Random from '../../Libs/Helpers/Random';

import StudioStoryType = proto.StudioStoryType;
import IStudioContinuedData = proto.IStudioContinuedData;
import IStudioContinuedUpdateData = proto.IStudioContinuedUpdateData;
import GlobalConfig from '../../Config/ConfigExtends/GlobalConfig';
import GlobalKey from '../../Config/Keys/GlobalKey';
import Dictionary from '../../Libs/Helpers/Dictionary';

/** 拍摄后期收益数据 */
export default class StudioContinuedData {

    /** 事件ID */
    uid: int;


    /** 剧本ID */
    storyId: int = 0;

    /** 剧本名称 */
    storyName: string = "";
    /** 剧本星级 */
    star = 0;
    /** 剧本类型（0：普通本1：金本） */
    storyType: StudioStoryType = StudioStoryType.StudioStoryType_Normal;

    /** 剧本季数 */
    season: int;

    /** 剧本期数 */
    episode: int;
    /** 剧本评分 */
    publicPraise: int = 0;
    /** 柱状图收益 */
    profitList: int[];

    // /** 收益--当前可以领取的 */
    // profitCurrent: int;

    /** 收益--计时开始时间戳 (秒) */
    profitTimestamp: int = 0;
    /** 收益--结束时间戳 */
    profitEndTimestamp: int = 0;

    /** 剩余可领取奖励 */
    remainProfit: int = 0;

    /** 单次可领取奖励 */
    intervalProfit: int = 0;

    /** 单个柱状图播放动画时长 */
    interval: int;
    receivePeriod: int;
    // /** 收益--间隔多长时间收益1次  (秒) */
    // profitCd: int;

    // /** 收益--每次收益数量 */
    // profitNum: int;

    clear()  {
        this.uid = 0
        this.storyId = 0;
        this.storyName = "";
        this.star = 0;
        this.storyType = StudioStoryType.StudioStoryType_Normal;
        this.season = 0;
        this.episode = 0;
        this.publicPraise = 0;
        this.profitList = [];
        this.profitTimestamp = 0;
        this.profitEndTimestamp = 0;
        this.remainProfit = 0;
        this.intervalProfit = 0;
        this.interval = 0;
        this.receivePeriod = 0;
    }
    /** 设置协议数据 */
    setProtoData(data: IStudioContinuedData) {
        this.clear();
        for (let key in data) {
            this[key] = data[key];
        }
    }

    updateProtoData(data: IStudioContinuedUpdateData)
    {
        if(data.uid == this.uid)
            this.receivePeriod = data.receivePeriod;
    }

    /** 剧本配置 */
    get storyConfig(): StoryConfig {
        return Game.config.story.getConfig(this.storyId);
    }

    /** 类型 */
    get typeString(): string {
        let labelConfig = this.storyConfig.labelList.get(LabelType.storyType);
        return labelConfig.name;
    }

    get typeIcon(): string {
        let labelConfig = Game.config.label.getConfig(this.storyConfig.label_storyType);
        let avatarConfig = Game.config.avatar.getConfig(labelConfig.icon);
        return avatarConfig.iconUrl;
    }

    /** 获取全名 "《{0} 第{1}季》 第{3}期" */
    get storyNameAll(): string {
        return GameStringHelper.StoryNameAll(this.storyName, this.season, this.episode, this.storyConfig.getEpisodeCount(this.season));
    }

    /** 海报图片 */
    get iconUrl(): string {
        return this.storyConfig.iconUrl;
    }

    /** 收益倒计时 */
    get timeLeft(): string  {
        let time = this.profitEndTimestamp - Game.time.serverSeconds;
        if (time <= 0)  {
            return "";
        }
        return TimeHelper.TimeleftHHMMSS(this.profitEndTimestamp);
    }

    get canRecieve(): boolean  {
        // return Game.time.serverSeconds - this.profitTimestamp > this.interval;
        return true;
    }

    /** 当前可领取收益 */
    get profit(): number  {
        let amount = 0;
        if (this.canRecieve)  {
            let profits = this.profitList.slice(this.receivePeriod, this.currentChartIndex);
            profits.forEach(profit => {
                amount += profit;
            });
        }

        return amount;
    }

    /** 网综总持续时间 单位(秒) */
    get continueTime(): number {
        let duration = 0;
        let val2 = GlobalConfig.getValue2(GlobalKey.studio_continue_reward_time);
        if(val2) {
            let sec = val2[0].v1;
            let times = val2[0].v2;
            duration = sec * times;
        }
        return duration;
    }

    /** 当前播放动画柱状条索引 */
    get currentChartIndex(): number
    {
        return Math.floor((Game.time.serverSeconds - this.profitTimestamp) / this.interval);
    }

    /** 当前播放动画柱状条值 */
    get currentValue(): number
    {
        let seconds = (Game.time.serverSeconds - this.profitTimestamp) % this.interval;
        let max = this.maxProfitBefore(this.currentChartIndex+1);
        let maxIndex = this.profitList.indexOf(max);
        let val = 0;
        let total = 0;
        if(maxIndex == this.currentChartIndex)
        {
            total = max;
        }else
        {
            total = this.profitList[this.currentChartIndex];
        }
        let halfInterval = this.interval / 2;
        if(seconds < halfInterval)
        {
            val = total * 0.75 *seconds / halfInterval;
        }
        else
        {
            val = total * 0.75 + total * 0.25 * (seconds - halfInterval) /halfInterval;
        }
       
        return Math.floor(val);
    }

    /** 进度条动态最大值 */
    public get maxProfit(): number
    {
        return this.getMaxProfitWidthIndex(this.currentChartIndex);
    }

    public getMaxProfitWidthIndex(index: number)
    {
        let max = this.maxProfitBefore(index+1);
        let preMax = this.maxProfitBefore(index);
        let maxIndex = this.profitList.indexOf(max);
        if(maxIndex == index)
        {
            max = (max - preMax) * this.currentValue / max + preMax;
        }
        return Math.floor(max);
    }

    public maxProfitBefore(index: number): number
    {
        index <= 0 && (index = 1);
        if(index > this.profitList.length)
            return 0;
        let tmpList = this.profitList.slice(0, index);
        let max = Math.max.apply(null, tmpList);
        return max;
    }

    /** 柱状图高度可能改变，所以这里返回的是占最大值的比例 */
    public get newProfitList(): number[]
    {
        let list = [];
        let tmpList = this.profitList.slice(0, this.currentChartIndex+1);
        for(let index = 0; index < this.profitList.length; index++)
        {
            if(index > this.currentChartIndex)
            {
                list.push(0);
            }
            else if(index == this.currentChartIndex)
            {
                list.push(this.currentValue)
                continue;
            }
            else
                list.push(tmpList[index]);
        }
        return list;
    }

    private replaceOrInsertAt(arr: number[],index: number, value: number)
    {
        if(arr.length > index)
        {
            arr.splice(index, 1, value);
        }
        else
        {
            arr.push(value);
        }
    }

    static get testData(): StudioContinuedData
    {
        let data = new StudioContinuedData();
        data.uid = 1;
        data.storyId = 10203010;
        data.storyName = "明日之子";
        data.star = 0;
        data.storyType = StudioStoryType.StudioStoryType_Normal;
        data.season = 1;
        data.episode = 1;
        data.publicPraise = 3.9000000953674316;
        data.profitList = [76, 92, 123, 68, 102, 145, 131];
        data.profitTimestamp = Game.time.serverSeconds;
        data.profitEndTimestamp = Game.time.serverSeconds + 40 * 7;
        data.remainProfit = 707;
        data.intervalProfit = 140;
        data.interval = 40;
        data.receivePeriod = 5;
        return data;
    }
}

