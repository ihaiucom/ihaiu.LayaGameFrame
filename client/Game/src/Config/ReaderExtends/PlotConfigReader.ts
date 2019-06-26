/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import PlotConfigReaderStruct from "../ReaderStructs/PlotConfigReaderStruct";
import PlotConfig from "../ConfigExtends/PlotConfig";
import UnOrderMultiMap from "../../Libs/Helpers/UnOrderMultiMap";

export default class PlotConfigReader extends PlotConfigReaderStruct
{
    private _groupDict: UnOrderMultiMap<number, PlotConfig> = new UnOrderMultiMap<number, PlotConfig>();
    private _groupIdList: int[]= [];

    firstGroupId = 0;
    
    onGameLoadedAll() 
    {
        super.onGameLoadedAll();

        let groups = this._groupDict;

        let list = this.configs.getValues();
        for (let i = 0; i < list.length; i++) 
        {
            let config: PlotConfig = list[i];
            if(!this._groupDict.ContainsKey(config.group))
            {
                this._groupIdList.push(config.group);
            }

            this._groupDict.addItem(config.group, config);
            
        }

        if(this._groupIdList.length > 0)
            this.firstGroupId = this._groupIdList[0];
    }

    /**
     * 获取组列表
     * @param groupId 
     */
    getGroupValues( groupId: number ): PlotConfig[]
    {
        return this._groupDict.get(groupId);
    }


    /**
     * 获取下一个组ID
     * @param groupId 组ID
     */
    getNextGroupId(groupId: int): int
    {
        let i = this._groupIdList.indexOf(groupId);
        if(i < this._groupIdList.length -1)
        {
            return this._groupIdList[groupId + 1];
        }
        return -1;
    }

}