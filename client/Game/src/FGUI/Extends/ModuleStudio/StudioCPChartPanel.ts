/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPChartPanelStruct from "../../Generates/ModuleStudio/StudioCPChartPanelStruct";
import StudioContinuedData from '../../../GameModule/DataStructs/StudioContinuedData';
import StudioCPChartItem from './StudioCPChartItem';
import Game from '../../../Game';
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';
import StudioContinueWindowUI from './StudioContinueWindowUI';
import TEXT from "../../../Config/Keys/TEXT";

export default class StudioCPChartPanel extends StudioCPChartPanelStruct
{
    itemIndex: number = -1;
    get dataList(): number[] {
        return this.continueData.profitList;
    }

    continueData: StudioContinuedData = null;

    get totalProfit(): number {
        let sum = 0;
        this.dataList.forEach(item =>{
            sum += item;
        })
        sum += this.continueData.remainProfit;
        return sum;
    }
    
	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        // this.m_chartList.itemRenderer = Laya.Handler.create(this, this.ItemRenderer);
        // this.m_chartList.itemProvider = Laya.Handler.create(this, this.ItemProvider);
        this.m_getBtn.onClick(this, this.getBtnOnClick);
    }

    onWindowHide(): void
    {
        
    }

    testChartData: number[] = [70, 90, 140, 80, 90,120,100];
    
    updateView(data: StudioContinuedData, index: number) {
        this.continueData = data;
        this.itemIndex = index;
        this.showView();
        
        if(data instanceof StudioContinuedData)
        {
            let storyData = new StudioStoryData();
            storyData.storyId = data.storyId;
            storyData.storyType = data.storyType;
            this.m_storyIcon.updateView(storyData);
            this.m_storyType.updateView(data);
            this.m_title.text = data.storyNameAll; 
            this.m_chartList.setData(data);
            let scores = data.publicPraise.toFixed(1).split(".");
            this.m_score1.text = scores[0];
            this.m_score2.text = TEXT.StudioScorePart2.format(scores[1]);
            if(data.receivePeriod >= 7)
                this.removeSelf();
            else
                Laya.timer.loop(1000,this,this.onLoop);
        }
    }

    onLoop()
    {
        if(!this.continueData)
            return;
        if(this.continueData.canRecieve) {
            this.m_coin.text = this.continueData.profit+"";
        }
        if(!this.continueData.timeLeft)
        {
            Laya.timer.clearAll(this);
            this.m_isOnShow.setSelectedPage("off");
        }else {
            this.m_isOnShow.setSelectedPage("on");
            this.m_timeLb.text = this.continueData.timeLeft;
        }
        this.m_coin.text = this.continueData.profit +"";
    }

    ItemRenderer(index: number, item: StudioCPChartItem) {
        item.updateView(this.evaluateHeight(this.dataList[index]));
    }

    evaluateHeight(num: number):number {
        let len = Math.floor(num / this.totalProfit * 10)+4;
        return len;
    }

    ItemProvider(index: number) {
        return StudioCPChartItem.URL;
    }

    async getBtnOnClick() {
        let isAllReceived = false;
        if(this.continueData instanceof StudioContinuedData)
        {
            if(this.continueData.profit > 0)
                isAllReceived = await Game.sender.studio.studioContinuedReceive(this.continueData.uid)[1];
            else
                Game.system.toastText(TEXT.StudioContinueNotInTime);
        }
        if(isAllReceived)
        {
            this.removeSelf();
        }
    }

    public showView()
    {
        this.x = 0;
    }

    removeSelf()
    {
        let handler = Laya.Handler.create(this,this.removeItemSignal);
        Laya.Tween.to(this,
            {x: -this.width}, 
            Game.constant.studio.Continue_Remove_Duration,
            Laya.Ease.linearNone,handler);
    }
    
    public removeItemSignal()
    {
        Game.moduleModel.studioContinued.sRemveItem.dispatch(this.itemIndex);
    }

    public clear()
    {
        this.x = 0;
        this.continueData = null;
        this.itemIndex = -1;
        Laya.timer.clearAll(this);
        Laya.Tween.clearAll(this);
    }

     /** 丢回对象池 */
     public poolRecover()
     {
         this.clear();
         this.removeFromParent();
         Laya.Pool.recover(StudioCPChartPanel.URL, this);
     }
 
     /** 从对象池里获取对象 */
     public static poolGet(): StudioCPChartPanel
     {
         let item = <StudioCPChartPanel>Laya.Pool.getItem(StudioCPChartPanel.URL);
         if(!item) {
             item = StudioCPChartPanel.createInstance();
         }
         return item;
     }

}