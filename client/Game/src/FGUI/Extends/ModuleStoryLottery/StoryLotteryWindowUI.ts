/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryLotteryWindowUIStruct from "../../Generates/ModuleStoryLottery/StoryLotteryWindowUIStruct";
import StoryLotteryWindow from "../../../GameModule/ViewWindows/StoryLotteryWindow";
import Game from "../../../Game";
import GameEventKey from "../../../GameEventKey";

export enum ViewType{
    bgView = 0,     // 招募界面
    awardView,      // 招募结果界面
    faildView,      // 招募失败返还金币界面
    awardPreview,   // 招募预览界面
}

export enum AwardState{
    nomarl = 1,     // 抽到未拥有的
    isHave,         // 抽到拥有的，转换为金币
    faild,          // 抽奖失败
}

export default class StoryLotteryWindowUI extends StoryLotteryWindowUIStruct
{
    // 窗口
    moduleWindow: StoryLotteryWindow;
    testIndex = 0;

    onWindowInited(): void{
        this.m_bgView.m_btnBack.onClick( this, this.back );
        this.m_bgView.m_btnPreview.onClick( this, this.onChangeView, [ViewType.awardPreview] );
        this.m_awardView.m_btnOK.onClick( this, this.onAwardViewClick )
        this.m_faildView.m_btnOK.onClick( this, this.onChangeView, [ViewType.bgView] )
        // this.m_testBtn.onClick( this, this.onTest )
    }

    onWindowShow(): void{
        this.initStaticData()
        Game.event.add(GameEventKey.StoryLottery_State, this.updateView, this)
        Game.event.add(GameEventKey.StoryLoteery_award, this.updateAward, this)
        Game.event.add(GameEventKey.StoryLoteery_UpdateView, this.onChangeView, this)

        let gashaponData = Game.moduleModel.gashapon.getGashaponByMenuId( this.moduleWindow.menuId )
        if ( !gashaponData ){
            console.error("剧本招募配表错误！！！")
            return
        }
        let id = gashaponData["0"]["id"]
        Game.sender.storyLotterySender.getStoryLotteryState( id );
    }

    onWindowHide(): void{

    }

    onTest(): void{
        this.testIndex ++;
        if (this.testIndex > 3){
            this.testIndex = 0
        }
        this.onChangeView( this.testIndex )
    }

    back(): void{
        Laya.timer.clearAll(this.m_bgView);
        this.moduleWindow.menuClose();
    }

    // 静态数据，只需初始化一次
    initStaticData(): void{
        this.m_awardPreview.initListData(); // 初始化预览界面，只需初始化一次
        this.m_bgView.initGashaponData( this.moduleWindow.menuId ); // 初始化默认界面数据，抽奖相关配置
    }

    updateView(): void{
        this.m_bgView.updateProtoData();
        this.m_bgView.updateView();
    }

    updateAward( msg ): void{
        this.m_bgView.updateProtoData();
        this.m_bgView.updateView();
        let data = msg["0"]
        let state = data.storyExtractState
        // console.log("抽奖结果状态", state )
        switch(state){
            case AwardState.nomarl:
                this.onChangeView( ViewType.awardView, data )
                break
            case AwardState.isHave:
                this.onChangeView( ViewType.awardView, data )
                break
            case AwardState.faild:
                this.onChangeView( ViewType.faildView, data )
                break
        }
    }

    // 奖励界面确定按钮
    onAwardViewClick(){
        if ( this.m_awardView.awardState == AwardState.isHave ){
            this.onChangeView( ViewType.faildView, this.m_awardView.awardData );
        }else{
            this.onChangeView( ViewType.bgView );
        }
    }

    // 切换界面标签
    onChangeView( index: number, data?: Array<any> ){
        if (!index){
            index = 0
        }
        this.m_showView.setSelectedIndex( index )

        switch(index){
            case ViewType.bgView:
                this.m_bgView.updateView();
                break;
            case ViewType.awardView:
                this.m_awardView.updateView( data );
                break;
            case ViewType.faildView:
                this.m_faildView.updateView( data );
                break;
            case ViewType.awardPreview:
                this.m_awardPreview.updateView();
                break
            default:
                break;
        }
    }
}