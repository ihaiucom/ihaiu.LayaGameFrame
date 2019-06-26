/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioSSInfoStruct from "../../Generates/ModuleStudio/StudioSSInfoStruct";
import StudioData from '../../../GameModule/DataStructs/StudioData';
import Game from '../../../Game';
import TextPrint from '../../../Libs/Helpers/TextPrint';

export default class StudioSSInfo extends StudioSSInfoStruct 
{
    print = new TextPrint();
    // 窗口隐藏
    onWindowHide(): void 
    {
        this.print.stop();
        this.m_title.text = "";
    }

    updateView() 
    {
        let data = Game.moduleModel.studio.current;
        this.m_title.text = "";
        this.print.init(this.m_title, data.expectIntroduction);
        this.print.playBySpeed();
    }
}