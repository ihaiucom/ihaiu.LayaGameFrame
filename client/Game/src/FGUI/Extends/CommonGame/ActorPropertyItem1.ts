/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ActorPropertyItem1Struct from "../../Generates/CommonGame/ActorPropertyItem1Struct";
import TEXT from '../../../Config/Keys/TEXT';

export default class ActorPropertyItem1 extends ActorPropertyItem1Struct
{
    updateView(data: number) {
        this.m_num.text = TEXT.StudioPlusNum.format(data);;
    }
}