/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotAwardViewStruct from "../../Generates/SystemModulePlot/PlotAwardViewStruct";
import PlotAwardItem from "./PlotAwardItem";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";

export default class PlotAwardView extends PlotAwardViewStruct
{
    itemDatas = [];
    private dialogCtrl: DialogCtrl;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_list.itemRenderer = Laya.Handler.create(this, this.renderListItem, null, false);
        this.m_frame.m_closeBtn.onClick(this, this.close);
    }

    renderListItem(index: number, item: PlotAwardItem): void  {
        item.RenderItem(this.itemDatas[index]);
    }

    updateView( data: Array<any> ){
        this.m_list.numItems = 0;
        this.dialogCtrl.open();
    }

    close(): void  {
        this.dialogCtrl.close();
    }
}