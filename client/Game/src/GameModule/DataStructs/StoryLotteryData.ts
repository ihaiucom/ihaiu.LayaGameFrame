import Game from '../../Game';
export default class StoryLotteryData {

    private _num:number; // 剩余抽奖次数
    private _buyNum: number; // 购买抽奖次数
    private _CD: number; // 抽奖CD
    // private _CDState: number; // 抽奖CD状态

    constructor()  {

    }

    //创建剧本数据单位
	static Create(msg: any): StoryLotteryData {
		let story   = new StoryLotteryData();
        story._num   = msg.storyCurrentExtractNum;
        story._CD = msg.storyExtractEndTime;
        story._buyNum = msg.storyPurchaseNum;
        // story._CDState  = msg.storyExtractState
		return story;
    }
    
    /**
     * 剩余抽奖次数
     */
    set num(val: number) {
        this._num = val;
    }

    get num(): number {
        return this._num;
    }

    /**
     * 购买抽奖次数
     */
    set buyNum(val: number) {
        this._buyNum = val;
    }

    get buyNum(): number {
        return this._buyNum;
    }

    /**
     * 抽奖CD
     */
    set CD(val: number) {
        this._CD = val;
    }

    get CD(): number {
        return this._CD;
    }

    /**
     * 抽奖CD状态
     */
    // set CDState(val: number) {
    //     this._CDState = val;
    // }

    // get CDState(): number {
    //     return this._CDState;
    // }





}