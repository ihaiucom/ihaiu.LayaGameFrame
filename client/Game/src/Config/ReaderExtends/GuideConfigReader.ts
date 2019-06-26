/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////


import GuideConfigReaderStruct from "../ReaderStructs/GuideConfigReaderStruct";
import UnOrderMultiMap from "../../Libs/Helpers/UnOrderMultiMap";
import GuideConfig from "../ConfigExtends/GuideConfig";

export default class GuideConfigReader extends GuideConfigReaderStruct
{
    private _groupDict: UnOrderMultiMap<number, GuideConfig> = new UnOrderMultiMap<number, GuideConfig>();
    private _groupIdList: int[]= [];

    firstGroupId = 0;
    
    onGameLoadedAll() 
    {
        super.onGameLoadedAll();

        let groups = this._groupDict;

        let list = this.configs.getValues();
        for (let i = 0; i < list.length; i++) 
        {
            let config: GuideConfig = list[i];
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
    getGroupValues( groupId: number ): GuideConfig[]
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