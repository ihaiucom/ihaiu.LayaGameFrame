import MModel from '../../GameFrame/Module/MModel';
import Game from '../../Game';
import GameEventKey from '../../GameEventKey';
import GetStoryExtractInfoS2C = proto.GetStoryExtractInfoS2C;
import StoryLotteryData from '../DataStructs/StoryLotteryData';
import { MenuId } from '../MenuId';
export default class StoryLotteryModel extends MModel {

    private mStateData: StoryLotteryData;
    private mUpdateData;
    private mGashaponID = 0;
    private mGoldAwardNum = 0;

    constructor() {
        super();
    }

    // 进入界面时设置初始服务器数据
    setProtoData( msg: GetStoryExtractInfoS2C){
        this.mStateData = StoryLotteryData.Create( msg.gashapon );
        Game.event.dispatch( GameEventKey.StoryLottery_State )
    }

    // 抽奖结束后刷新服务器数据
    updateProtoData( msg ){
        if (this.mGashaponID != 0){
            if (msg.id == this.mGashaponID){
                this.mStateData = StoryLotteryData.Create( msg );
                Game.event.dispatch( GameEventKey.StoryLottery_State )
            }
        }else{
            let gashaponData =  Game.moduleModel.gashapon.getGashaponByMenuId( MenuId.StoryLottery )
            if (gashaponData != null && gashaponData.length > 0 ){
                this.mGashaponID = gashaponData["0"]["id"]
            }
        }
    }

    getProtoData(){
        return this.mStateData
    }

    setProtoCleanCDDate(msg){
        this.updateProtoData( msg.gashapon )
    }

    setProtoBuyNumDate(msg){
        this.updateProtoData( msg.gashapon )
    }

    setProtoLotteryData(msg){
        Game.event.dispatch( GameEventKey.StoryLoteery_award, [msg] )
    }
}