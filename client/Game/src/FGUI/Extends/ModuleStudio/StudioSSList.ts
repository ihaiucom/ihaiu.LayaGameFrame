/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioSSListStruct from "../../Generates/ModuleStudio/StudioSSListStruct";
import StudioSSItem from './StudioSSItem';
import Dictionary from '../../../Libs/Helpers/Dictionary';
import StudioStoryData from '../../../GameModule/DataStructs/StudioStoryData';
import UIVirtualList from "../../../Libs/Helpers/UIVirtualList";

export default class StudioSSList extends StudioSSListStruct {

    items: StudioSSItem[] = [];
    dataList: StudioStoryData[] = []

    private _selectedIndex : number = -1;
    public get selectedIndex() : number {
        return this._selectedIndex;
    }

    virtualList = new UIVirtualList<StudioSSItem>();
    
    get itemList(): StudioSSItem[]
    {
        return this.virtualList.list;
    }

    onWindowShow() {
        this.virtualList.sSelected.add(this.selectedItem, this);
    }

    onWindowHide() {
        this.virtualList.sSelected.remove(this.selectedItem, this);
    }

    selectedItem(item: StudioSSItem) {
        for(let index = 0; index < this.m_content.numChildren; index++) {
            let tmpItem =  <StudioSSItem>this.m_content.getChildAt(index);
            if(item == tmpItem) {
                this._selectedIndex = index;
                
                tmpItem.setSelectedState(1);
            }else {
                tmpItem.setSelectedState(2);
            }
        }
        // this._selectedIndex = this.m_content.getChildIndex(item);
        this.scrollToView(item);
    }

    public scrollToView(item: StudioSSItem) {
        this.scrollPane.scrollToView(item, true);
    }
    

    async updateView(storys: StudioStoryData[]) {
        this.dataList = storys;
        this.clear();
        let duration = 700;
        this.scrollPane.scrollTop(false);
        for (let index = 0; index < storys.length; index++) {
            let item = StudioSSItem.poolGet();
            this.addItem(item,index);
            
            this.playItemAnimation(index, duration, duration*index);
        }
        
    }

    addItem(item: StudioSSItem, index: number) {

        item.width = this.m_content.width;
        this.items.splice(index,0, item);
        this.m_content.addChildAt(item,index);
        this.virtualList.add(item);
        this.m_content.height += item.height;
    }

    clear() {
        Laya.timer.clearAll(this);
        while(this.m_content.numChildren > 0)
        {
            let item = this.m_content.getChildAt(0);
            if(item instanceof StudioSSItem)
                item.poolRecover();
        }
        this.m_content.height = 0;
        this._selectedIndex = -1;
        this.virtualList.clear();
    }

    playItemAnimation(index: number, duration:number, delay: number) {
        let item = this.items[index];
        item.fromY= this.height + index * (item.height);
        item.toY = index * (item.height);
        item.y = item.fromY;
        Laya.timer.once(delay, this, this._playItem, [item, index], false);
    }

    private _playItem(item: StudioSSItem, index: number)
    {
        let that = this;
        this.m_content.height = (index+1) * item.height;
        // let g = this.m_content.displayObject.graphics;
        // g.clear();
        // g.drawRect(0, 0, this.m_content.width,  this.m_content.height, '#00FF0033', '#FF00FF', 2);
        if(this.m_content.height >= this.height)
        {
            this.scrollPane.scrollBottom(true);
        }
        item.tweenTo(item.fromY, item.toY, 500, 0, ()=>{
        });
        item.updateView(that.dataList[index]);
    }

}