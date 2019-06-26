import DTFixItemNum from "../../Config/ConfigExtends/DTFixItemNum";
import GashaponConfig from "../../Config/ConfigExtends/GashaponConfig";
import Game from "../../Game";

export default class GashaponData {
    
    private _config: GashaponConfig;

    /**
     * 抽奖配置
     */
    set config(val: GashaponConfig) {
        this._config = val;
    }

    get config(): GashaponConfig {
        return this._config;
    }

    // 抽奖ID
    id: number;

    // 抽奖次数
    extractNum: number

    // 免费次数
    freeNum: number;

    // 下一次免费时间
    nextFreeTime: number;

    // 开始时间
    startTime: number;

    // 结束时间
    endTime: number;

    // 剧本招募相关
    storyCurrentExtractNum: number; // 招募次数
    // storyExtractState: number; // CD状态
    storyExtractStartTime: number; // CD开始时间
    storyExtractEndTime: number; // CD结束时间
    storyPurchaseNum: number; // 抽奖次数购买数

    static Create(msg: any): GashaponData {
        let gashaponData = new GashaponData();
        gashaponData.id = msg.id;
        gashaponData.extractNum = msg.extractNum;
        gashaponData.freeNum = msg.freeNum;
        gashaponData.nextFreeTime = msg.nextFreeTime;
        gashaponData.startTime = msg.startTime;
        gashaponData.endTime = msg.endTime;
        gashaponData.config = Game.config.gashapon.getConfig(msg.id);

        // 剧本招募相关
        gashaponData.storyCurrentExtractNum = msg.storyCurrentExtractNum;
        // gashaponData.storyExtractState = msg.storyExtractState;
        gashaponData.storyExtractStartTime = msg.storyExtractStartTime;
        gashaponData.storyExtractEndTime = msg.storyExtractEndTime;
        gashaponData.storyPurchaseNum = msg.storyPurchaseNum;

        return gashaponData;
    }

    /**
     * 所属模块
     */
    get menuId(): number {
        return this.config.menu;
    }

    /**
     * 类型
     */
    get type(): number {
        return this.config.type;
    }

    /**
     * 海报路径
     */
    get iconUrl(): string {
        return //this.config.pic;
    }

    /**
     * 抽奖消耗
     */
    get costItem(): DTFixItemNum {
        return this.config.cost[0];
    }
    
}