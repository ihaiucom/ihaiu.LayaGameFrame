import DTItemNum from "../../Config/ConfigExtends/DTItemNum";
import DTRewardRandom from "../../Config/ConfigExtends/DTRewardRandom";
import StudioAudienceEvaluationConfig from "../../Config/ConfigExtends/StudioAudienceEvaluationConfig";
import Game from "../../Game";
import ItemData from "./ItemData";
import TEXT from '../../Config/Keys/TEXT';
import GlobalKey from '../../Config/Keys/GlobalKey';
import GlobalConfig from '../../Config/ConfigExtends/GlobalConfig';
import IStudioResult = proto.IStudioResult;
import IGameItem = proto.IGameItem;
import ItemType = proto.ItemType;

/** 拍摄--结算 */
export default class StudioResultData
{
    /** 拍摄级别 StudioLevel.xlsx(1	一般, 2	良好, 3	大卖, 4	超级大卖, 5	神话, 6	传说) */
    level:int = 1;

    
    /** 拍摄得分 (0--10分) */
    score:int = 0;
    /** 拍摄得分 (0--10分) */
    publicPraise: int = 0;
    
    /** 首次 收益/收视率 */
    firstProfit:int = 0;

    
    /** 首次 奖励 */
    firstReward:ItemData[] = [];
    
    /** 持续 收益/收视率 */
    continuedProfit:int = 0;
    
    /** 持续 购买人数 */
    continuedBuyCount:int = 0;
    
    /** 持续 观众评论 */
    audienceEvaluation:int[] = [];
    
    /** 获取 经验 本地数据 */
    expReward: number = 0;


    /** 发送奖励前记录等级经验 */
    previousLevel: number = 0;
    previousExp: number = 0;
    
    /** 清理数据 */
    clear()
    {
        this.level = 1;
        this.score = 0;
        this.firstProfit = 0;
        this.firstReward.length = 0;
        this.continuedProfit = 0;
        this.continuedBuyCount = 0;
        this.audienceEvaluation.length = 0;
        this.expReward = 0;
    }

    /** 设置协议数据 */
    setProtoData(data: IStudioResult)
    {
        this.level = data.level;
        this.score = data.score;
        this.firstProfit = data.firstProfit;
        this.continuedProfit = data.continuedProfit;
        this.continuedBuyCount = data.continuedBuyCount;
        this.audienceEvaluation = data.audienceEvaluation;

        // for(let item of data.firstReward)
        // {
        //     if(item.type == ItemType.exp) {
        //         this.expReward = item.count;
        //     }else {
        //         let itemData = new ItemData();
        //         itemData.setProtoData(item);
        //         this.firstReward.push(itemData);
        //     }
        // }
        
        // for(let item of data.expReward)
        // {
        //     let itemData = new ItemData();
        //     itemData.setProtoData(item);
        //     this.expReward.push(itemData);
        // }
        
    }
    /** 2842人已购买 */
    get ticketsSold(): string {
        return TEXT.StudioTicketsSold.format(this.continuedBuyCount);
    }

    /** 总收益 --- 总收益200000元 */
    get totalProfit(): string {
        return TEXT.StudioTotalProfit.format(this.continuedProfit);
    }

    /** 获取拍摄等级图片-- 大卖 ，良好等 */
    get evaluationLevelIcon(): string {
        let icon = "";
        let studioLevelConfig = Game.config.studioLevel.getConfig(this.level);
        if(studioLevelConfig){
            let avatarConfig = Game.config.avatar.getConfig(studioLevelConfig.icon);
            if(avatarConfig)
                icon = avatarConfig.iconUrl;
        }
        return icon;
    }

    private _audienceEvaluationConfigs: StudioAudienceEvaluationConfig[]
    /** 观众评论 配置列表 */
    get audienceEvaluationConfigs(): StudioAudienceEvaluationConfig[]
    {
        if(!this._audienceEvaluationConfigs)
        {
            this._audienceEvaluationConfigs = [];
            let num = GlobalConfig.getValue(GlobalKey.studio_evaluation_num);
            if(isNaN(num))
                throw "StudioResultData.ts: Global配置异常";
            
            for(let id of this.audienceEvaluation)
            {
                let config = Game.config.studioAudienceEvaluation.getConfig(id);
                if(config)
                    this._audienceEvaluationConfigs.push(config);
                if(this._audienceEvaluationConfigs.length >= num) {
                    break;
                }
            }
        }
        return this._audienceEvaluationConfigs;
    }

}
