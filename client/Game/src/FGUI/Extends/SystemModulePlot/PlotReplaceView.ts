/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotReplaceViewStruct from "../../Generates/SystemModulePlot/PlotReplaceViewStruct";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import PlotReplaceItem from "./PlotReplaceItem";

export default class PlotReplaceView extends PlotReplaceViewStruct
{
    itemDatas = [];
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_itemLlist.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_frame.m_closeBtn.onClick(this, this.close);
    }

    renderListItem(index: number, item: PlotReplaceItem): void  {
        item.RenderItem(this.itemDatas[index]);
    }

    updateView( data: Array<any> ){
        this.m_itemLlist.numItems = 0;
        this.dialogCtrl.open();
    }

    close(): void  {
        this.dialogCtrl.close();
    }
}