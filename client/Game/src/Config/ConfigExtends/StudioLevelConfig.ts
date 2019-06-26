/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import StudioLevelConfigStruct from "../ConfigStructs/StudioLevelConfigStruct";

export default class StudioLevelConfig extends StudioLevelConfigStruct
{
    /** 段若值 */
    segment: number = 0;
    
    /** 最小值占总比 */
    minRate: number = 0;
    /** 最大值占总比 */
    maxRate: number = 0;
}