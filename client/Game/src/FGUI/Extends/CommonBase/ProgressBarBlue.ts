/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ProgressBarBlueStruct from "../../Generates/CommonBase/ProgressBarBlueStruct";
import TEXT from '../../../Config/Keys/TEXT';

export default class ProgressBarBlue extends ProgressBarBlueStruct
{
    
	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
    }
    public updateProgress(current:number, max:number): void {
        // if(current == 0) 
        //     this.value = 1;
        // else
        //     this.value = current;

            this.value = current;
            this.max = max;
        window["_bar"] = this;
        this.m_title.text = TEXT.Progress.format(current,max);
    }
}