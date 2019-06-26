/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioEventSelectPanelStruct from "../../Generates/ModuleStudio/StudioEventSelectPanelStruct";
import StudioSESelectItem from './StudioSESelectItem';
import Game from "../../../Game";

export default class StudioEventSelectPanel extends StudioEventSelectPanelStruct
{

    /** 事件选项 */
    get optionsList(): string[] {
        return Game.moduleModel.studio.current.event.eventOptionsList;
    }
    
    protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
        this.m_list.itemRenderer = Laya.Handler.create(this, this.ItemRenderer, null, false);
        this.m_list.itemProvider = Laya.Handler.create(this, this.ItemProvider, null, false);
        
    }
    
    onWindowDestory(): boolean  {
        let handlers =
            [
                this.m_list.itemRenderer,
                this.m_list.itemProvider
            ];

        for (let handler of handlers)  {
            if (handler)  {
                handler.clear();
                handler.recover();
            }
        }
        handlers.length = 0;

        return false;
    }
    
    updateView() {
        this.m_list.numItems = this.optionsList.length;
    }

    ItemRenderer(index: number, item: StudioSESelectItem) {
        let data = this.optionsList[index];
        item.updateView(data, index);
    }

    ItemProvider(index: number) {
        return StudioSESelectItem.URL;
    }
}