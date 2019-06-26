/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import GameRandomNameConfigStruct from "../ConfigStructs/GameRandomNameConfigStruct";
import Random from "../../Libs/Helpers/Random";

export default class GameRandomNameConfig extends GameRandomNameConfigStruct
{
    /** 随机名称 */
    randomName(exclude:string): string
    {
        let excludeIndex = this.names.indexOf(exclude);
        let index = Random.range(0, this.names.length);
        while(excludeIndex == index)
        {
            index = Random.range(0, this.names.length);
        }
        return this.names[index];
    }
}