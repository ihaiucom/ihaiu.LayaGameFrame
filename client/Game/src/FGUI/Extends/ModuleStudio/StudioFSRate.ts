/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioFSRateStruct from "../../Generates/ModuleStudio/StudioFSRateStruct";
import StudioResultData from '../../../GameModule/DataStructs/StudioResultData';
import StudioFSNumber from './StudioFSNumber';

export default class StudioFSRate extends StudioFSRateStruct
{
    updateView(data: StudioResultData) {
        let profit = data.firstProfit;
        let numList = profit.toString().split('').reverse();
        if(numList.length <= 9)
            this.m_numLength.setSelectedIndex(numList.length);
        for (let index = 0; index < 5; index++) {
            let fsNumber: StudioFSNumber = <StudioFSNumber>this['m_num'+index];
            if(index < numList.length) {
                const num = numList[index];
                fsNumber.m_setNumber.setSelectedIndex(Number(num));
            }else {
                fsNumber.m_setNumber.setSelectedIndex(10);
            }
        }
    }
}