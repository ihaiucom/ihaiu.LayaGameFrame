/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import PlotDialogViewStruct from "../../Generates/SystemModuleGuide/PlotDialogViewStruct";
import GuideStepAction from "../../../SystemGuide/Actions/GuideStepAction";
import GuideData from "../../../GameModule/DataStructs/GuideData";
import PlotConfig from "../../../Config/ConfigExtends/PlotConfig";
import PlotData from "../../../GameModule/DataStructs/PlotData";

export default class PlotDialogView extends PlotDialogViewStruct
{
    private _plotConfig: PlotConfig; // 单条剧情数据
    private _step: GuideStepAction;

    protected constructFromXML(xml: any): void  {
        super.constructFromXML(xml);
        this.m_buttonDialog.onClick( this, this.onClickDialog );
        this.m_info.m_button1.onClick( this, this.onClickButton1 );
        this.m_info.m_button2.onClick( this, this.onClickButton2 );
    }

    updateView( step: GuideStepAction, index?: number ){
        this._step = step;
        let plotData = step.guideStepConfig.plotGroupData
        let plotConfig = plotData.data(index);
        if (!plotConfig)
        {
            this._step.end()
            return
        }

        this._plotConfig = plotConfig;

        this.m_buttonDialog.m_name.text = plotConfig.content;
        this.m_info.updateView( plotConfig );
    }

    // 点击对话框进入下一步
    onClickDialog(): void{
        if ( !this._plotConfig.option_type )
        {
            this.updateView( this._step );
        }
    }

    // 点击按钮1进入下一步， 下方按钮
    onClickButton1(): void{
        this.updateView( this._step, 1 );
    }

    // 点击按钮2进入下一步， 上方按钮
    onClickButton2(): void{
        this.updateView( this._step, 2 );
    }
}