/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import MailItemStruct from "../../Generates/ModuleEmail/MailItemStruct";
import MailData from "../../../GameModule/DataStructs/MailData";
import ItemData from "../../../GameModule/DataStructs/ItemData";
import Game from "../../../Game";
import TimeHelper from "../../../GameHelpers/TimeHelper";

export default class MailItem extends MailItemStruct
{
    public dataSource:MailData;

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.m_reward.onClick(this, this.showInfo);
    }

    showInfo(event: Event): void  {
        event.stopPropagation();
        
        Game.system.itemInfoShow(this.m_reward.dataSource);
    }

    public RenderItem(data: MailData)  {

        //---出现问题？？？？ this.dataSource跟随data进行变化
        // if (this.dataSource == data) return;
        this.dataSource   = data;

        this.m_title.text = data.theme;
        this.m_time.text  = TimeHelper.GetYMD(Number(data.time));
        this.m_read.selectedIndex = data.state == 0 ? 0 : 1;

        if (data.attachments && data.attachments.length > 0) {
            //有物品，显示第一个物品
            this.m_reward.visible = true
            this.m_reward.RenderItem(data.attachments[0]);
            this.star = data.attachments[0].itemStar;
        } else {
            this.m_reward.visible = false;
        }
    }

    set star(num: number)  {
        this.m_reward.m_Star.starNum = num;
    }
}