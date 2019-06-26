/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import InformationPoolItemStruct from "../../Generates/ModuleInformationGJC/InformationPoolItemStruct";
import TEXT from "../../../Config/Keys/TEXT";
import Game from "../../../Game";
import GashaponPoolData from "../../../GameModule/DataStructs/GashaponPoolData";
import GameEventKey from "../../../GameEventKey";
import { InformationViewType } from "./InformationWindowUIGJC";

export default class InformationPoolItem extends InformationPoolItemStruct
{
    public dataSource:GashaponPoolData;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_btnView.onClick(this, this.view);
        this.m_btnResolver.onClick(this, this.resolver);
        this.m_btnGift.onClick(this, this.gift);
    }

    private view(event: Event): void {
        event.stopPropagation();
        Game.system.informationBoardShow(this.dataSource.desc);
    }

    private resolver(event: Event): void {
        event.stopPropagation();
        Game.event.dispatch(GameEventKey.Information_SelectView, InformationViewType.Resolver);
    }

    private gift(event: Event): void {
        event.stopPropagation();
        Game.sender.gashapon.giftGashapon(this.dataSource.type);
    }

    RenderItem(data: GashaponPoolData)  {
        this.dataSource = data;

        // this.m_imgIcon.url = data.iconUrl;
        this.m_labNum.text = format(TEXT.Progress, data.allowance, data.allowanceNum);
        this.m_progressNum.value = Math.floor(data.allowance / data.allowanceNum * 100);
        this.m_btnGift.visible = (data.allowance == data.allowanceNum);
    }
}