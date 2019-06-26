/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryLotteryBgViewStruct from "../../Generates/ModuleStoryLottery/StoryLotteryBgViewStruct";
import TEXT from '../../../Config/Keys/TEXT';
import GlobalKey from '../../../Config/Keys/GlobalKey';
import TimeHelper from "../../../GameHelpers/TimeHelper";
import MsgKey from "../../../Config/Keys/MsgKey";
import LabelType from "../../../GameFrame/PropLabels/LabelType";
import GlobalConfig from "../../../Config/ConfigExtends/GlobalConfig";
import Game from "../../../Game";
import DTGiftNumStruct from "../../../Config/ConfigStructs/DTGiftNumStruct";
import GashaponData from "../../../GameModule/DataStructs/GashaponData";
import ShaderInstall from "../../../Shader/ShanderInstall";

export enum StoryLotteryState{
    do          = 0, // 可抽取
    CD          = 1, // 有CD
    noCount     = 2, // 没有次数
}

export default class StoryLotteryBgView extends StoryLotteryBgViewStruct
{
    mState = 0;
    mGashaponID;  // 抽奖序列ID
    mGashaponData: Array<GashaponData> = [];

    private mCD = 0;    // 抽奖冷却CD
    // private mCDState;   // 抽奖冷却状态
    private mCostID;    // 抽奖花费item ID
    private mCostNum;   // 抽奖花费item number
    private mCostType;  // 抽奖花费item type
    private mMaxNum;    // 抽奖最大恢复次数
    private mNum;       // 当前生于抽奖次数

    private mCDCostID;  // 清除CD花费item ID
    private mCDCostNum; // 清除CD花费item number

    private mBuyNum;    // 当前购买次数
    private mMaxBuyNum; // 购买抽奖次数上限
    private mBuyCostID; // 购买抽奖次数花费item ID
    private mBuyCostNum; // 购买抽奖次数花费item number
    
    protected constructFromXML( xml: any ): void{
        super.constructFromXML(xml);
        this.m_btnAdd.onClick( this, this.onNoCountMsg );
        this.m_btnLottery.onClick( this, this.onLottery );
    }
    
    initGashaponData( menuID: number ): void{
        let gashaponData =  Game.moduleModel.gashapon.getGashaponByMenuId( menuID )
        if ( gashaponData == null || gashaponData.length <= 0 ){
            console.error("剧本招募数据错误!!!")
            return
        }
        this.mGashaponID = gashaponData["0"]["id"]
        let itemData = gashaponData["0"].costItem
        if (!itemData){
            console.error("剧本招募花费错误!!!")
            return
        }

        this.mCostID = itemData.itemId;
        this.mCostNum = itemData.itemNum;
        this.mCostType = itemData.itemType;
        this.mMaxNum = GlobalConfig.getValue(GlobalKey.story_create_times_max);
        this.mMaxBuyNum = GlobalConfig.getValue(GlobalKey.story_create_times_purchase_max);
        let CDItemData = GlobalConfig.getValue2(GlobalKey.story_create_skip_cost);
        if(CDItemData) {
            this.mCDCostID = CDItemData[0].v1;
            this.mCDCostNum = CDItemData[0].v2;
        }

        let BuyItemData = GlobalConfig.getValue2(GlobalKey.story_create_times_purchase_cost);
        if(BuyItemData) {
            this.mBuyCostID = BuyItemData[0].v1;
            this.mBuyCostNum = BuyItemData[0].v2;
        }
    }

    updateProtoData( ): void{
        let protoData = Game.moduleModel.storyLottery.getProtoData();
        // console.log("刷新数据22222", protoData )
        this.mNum = protoData.num
        this.mCD = protoData.CD
        this.mBuyNum = protoData.buyNum
        // this.mCDState = protoData.CDState

        // console.log("数据===================", this.mNum, this.mCD, this.mBuyNum)
    }

    updateView(): void{
        let isBool = TimeHelper.TimeleftIsOver( this.mCD )
        if ( this.mCD != 0 && !isBool ){
            // 清除CD
            this.m_btnBack.text = TEXT.StoryLotteryCD
            this.m_labGold.text = TimeHelper.TimeleftHHMMSS( this.mCD );
            this.mState = StoryLotteryState.CD;
            Laya.timer.loop( 1000, this, this.onLoop);
        }else{
            // 可抽奖
            this.m_btnBack.text = TEXT.StoryLotteryBtn
            this.m_labGold.text = TEXT.StoryLotteryGoldNum.format(this.mCostNum);
            this.mState = StoryLotteryState.do;
        }

        this.updateLotteryCount()
    }

    onLoop(): void{
        let isBool = TimeHelper.TimeleftIsOver( this.mCD )
        if (isBool){
            this.mCD = 0;
            // this.mCDState = 0;
            Laya.timer.clearAll(this);
            this.updateView();
        }else{
            this.m_labGold.text = TimeHelper.TimeleftHHMMSS(this.mCD);
        }
    }

    // 刷新抽取次数
    updateLotteryCount(): void{
        let maxNum = this.mMaxNum
        let num = this.mNum
        this.m_labNum.text = TEXT.StoryLotteryNum.format( num, maxNum );
        if( num <= 0 ){
            this.mState = StoryLotteryState.noCount
        }

        if (maxNum == num){
            this.m_btnAdd.visible = false;
        }else{
            this.m_btnAdd.visible = true;
        }
    }

    // 抽奖按钮有多种状态：抽奖、清除CD、购买次数
    onLottery(): void{
        let state = this.mState
        switch (state){
            case StoryLotteryState.noCount:
                this.onNoCountMsg();
                break;
            case StoryLotteryState.do:
                this.onDoMsg();
                break;
            case StoryLotteryState.CD:
                this.onCDMsg();
                break;
        }
    }

    // 没有次数提示
    onNoCountMsg(): void{
        if ( this.mNum < this.mMaxNum ){
            let param: Array<number> = [this.mBuyCostNum, this.mBuyNum, this.mMaxBuyNum]
            Game.system.confirmMsg( MsgKey.story_lottery_buy_num, param, null, this, this.onBuyCount )
        }
    }

    // 可以抽奖提示
    onDoMsg(): void{
        Game.system.confirmMsg( MsgKey.story_lottery_do, [this.mCostNum], null, this, this.onDo )
    }

    // 有CD提示
    onCDMsg(): void{
        Game.system.confirmMsg( MsgKey.story_lottery_time_gold, [this.mCDCostNum], null, this, this.onCD )
    }

    // 购买次数
    onBuyCount(): void{
        Game.sender.storyLotterySender.buyLotteryNum( this.mGashaponID )
    }

    // 抽奖
    onDo(): void{
        let isEnough = Game.system.checkItemNum( this.mCostID, this.mCostNum );
        if (!isEnough){
            return ;
        }

        Game.sender.storyLotterySender.lottery( this.mGashaponID );
    }

    // 清除CD
    onCD(): void{
        if (this.mCD != 0){
            Game.sender.storyLotterySender.cleanLotteryCD( this.mGashaponID )   
        }
    }
}