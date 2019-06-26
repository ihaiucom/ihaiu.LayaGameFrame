/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioActorCellPanelStruct from "../../Generates/ModuleStudio/StudioActorCellPanelStruct";
import StudioData from '../../../GameModule/DataStructs/StudioData';
import StudioActorWindowUI from './StudioActorWindowUI';
import StudioActorCellData from "../../../GameModule/DataStructs/StudioActorCellData";
import StudioActorCell from './StudioActorCell';
import StudioStep = proto.StudioStep;

export default class StudioActorCellPanel extends StudioActorCellPanelStruct
{
    actorWindow: StudioActorWindowUI;

    actorCells: StudioActorCellData[];
    private previousIndex: number = -1;
    studioData: StudioData;
    
    onWindowShow() {
        let len = this.actorCells.length;
        let selectIndex = -1;
        if(this.studioData)
        {
           selectIndex = this.studioData.getNextActorCellIndex();
        }
        for(let index = 0; index < 6; index++) {
            let item = <StudioActorCell>this['m_cell'+index];
            item.selected = false;
            if(index < len) {
                item.enabled = true;
                item.onClick(this, this.cellOnClick,[index]);
                item.updateView(this.actorCells[index]);
            }else {
                item.offClick(this, this.cellOnClick);
                item.enabled = false;
                item.m_cellState.setSelectedPage('useless');
            }
            if(this.actorWindow.studioData.step == StudioStep.selectActor) {
                let clickIndex = -1;
                if(selectIndex == index || (selectIndex == -1 && 0 == index))
                {
                    item.fireClick(false);
                    this.cellOnClick(index);
                }
            }
        }
    }

    onWindowHide(): void  {
        this.clear();
    }

    unselect() {
        for(let index = 0; index < 6; index++) {
            this['m_cell'+index].selected = false;
        }
    }

    clear() {
        for(let index = 0; index < 6; index++) {
            this['m_cell'+index].offClick(this, this.cellOnClick);
        }
        this.previousIndex = -1;
    }
    
    updateView(data: StudioData, selectIndex: number = 0) {
        this.studioData = data;
        if(selectIndex == 0)
        {
            let nextIndex = data.getNextActorCellIndex();
            nextIndex != -1 && (selectIndex = nextIndex)
        }
        this.actorCells = data.actorCells;
        let len = this.actorCells.length;
        for(let index = 0; index < 6; index++) {
            let item = <StudioActorCell>this['m_cell'+index];
            if(index < len) {
                let cellData = this.actorCells[index];
                if(selectIndex == index)
                {
                    item.fireClick(false);
                    this.cellOnClick(index);
                }
                item.updateView(cellData);
            }
        }

    }
    playItemAnimation(index: number, duration:number, delay: number) {
       
        Laya.timer.once(delay, this, this._playItem, [index], false);
    }

    private _playItem(index: number) {
        for(let i =0; i < this.numChildren; i++)
        {
            let item = <StudioActorCell>this.getChildAt(i);
            item.selected = index == i;
        }
        // item.play();
    }
    
    public stopItemAnimations() {
        Laya.timer.clearAll(this);
        let len = this.actorCells.length;
        for(let index = 0; index < 6; index++) {
            let item = <StudioActorCell>this['m_cell'+index];
            if(index < len) {
                item.stop();
            }
        }
    }

    /** cell 点击事件 */
    cellOnClick(index: number) {
        if(index != this.previousIndex && -1 != this.previousIndex) {
            let item = <StudioActorCell>this['m_cell'+this.previousIndex];
            item.selected = false;
        }
        this.previousIndex = index;
        this.actorWindow.cellOnClick(index);
    }
}