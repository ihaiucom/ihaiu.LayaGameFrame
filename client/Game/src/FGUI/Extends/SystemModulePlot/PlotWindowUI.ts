/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotWindowUIStruct from "../../Generates/SystemModulePlot/PlotWindowUIStruct";
import PlotWindow from "../../../GameModule/ViewWindows/PlotWindow";
import DialogCtrl from "../../../GameFrame/Module/DialogCtrl";
import Game from "../../../Game";

export enum PlotViewType{
    bg = 0,
    replace,
    award,
}

export default class PlotWindowUI extends PlotWindowUIStruct
{
    moduleWindow: PlotWindow;
    private dialogCtrl: DialogCtrl;

    onWindowInited(): void{
        this.dialogCtrl = new DialogCtrl().init(this);
        this.m_view.m_closebutton.onClick(this, this.back);
        this.m_view.m_replace.onClick(this, this.changeView, [PlotViewType.replace]);
        this.m_view.m_award.onClick(this, this.changeView, [PlotViewType.award]);
    }

    onWindowShow(): void{
        this.updateView();
    }

    onWindowHide(): void{

    }

    back(): void{
        this.moduleWindow.menuClose();
    }

    clickButton(): void{
        let index = 0
        if (index == 0){
            this.back();

            Game.system.toastText("前往剧情!!!")
            return
        }
    }

    updateView(): void{
        
    }   

    changeView( index: number, data?: Array<any> ){
        if (!index){
            index = 0;
        }
        this.m_showView.selectedIndex = index;

        switch( index ){
            case PlotViewType.bg:
                this.updateView();
                break;
            case PlotViewType.replace:
                this.m_replace.updateView( data );
                break;
            case PlotViewType.award:
                this.m_award.updateView( data );
                break;
        }
    }
}