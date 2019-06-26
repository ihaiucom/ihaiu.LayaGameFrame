/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StoryLotteryRewardPreviewStruct from "../../Generates/ModuleStoryLottery/StoryLotteryRewardPreviewStruct";
import StorySeriesData from "../../../GameModule/DataStructs/StorySeriesData";
import StoryLotteryAwardIcon from "./StoryLotteryAwardIcon";
import StorySeriesConfigReader from "../../../Config/ReaderExtends/StorySeriesConfigReader";
import Game from "../../../Game";
import StoryLotteryWindowUI from "./StoryLotteryWindowUI";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";

export default class StoryLotteryRewardPreview extends StoryLotteryRewardPreviewStruct
{
    itemDatas = [];
    isInit = false;
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_awardList.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_frame.m_closeBtn.onClick(this, this.close);
        this.m_btnOK.onClick( this, this.close )
    }

    renderListItem(index: number, item: StoryLotteryAwardIcon): void  {
        item.RenderItem(this.itemDatas[index]);
    }

    initListData(): void{
        if ( this.isInit ) {
            return
        }
        let itemDatas = []
        let list = Game.config.storySeries.getAllConfigs();
        for ( let baseData of list ){
            let storyIDs = baseData.storyID
            let itemID = storyIDs[0]
            let itemData = Game.config.story.getConfig( itemID )
            itemDatas.push( itemData )
        }
        this.itemDatas = itemDatas
        this.isInit = true

        // 必须设置list大小，否则不会主动刷新
        this.m_awardList.numItems = itemDatas.length;
    }

    updateView(): void{
        this.dialogCtrl.open();
    }

    close(): void  {
        this.dialogCtrl.close();
    }
}