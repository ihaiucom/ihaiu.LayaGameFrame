import DTStoryEffect from '../../Config/ConfigExtends/DTStoryEffect';
import Game from '../../Game';
import PlotConfig from '../../Config/ConfigExtends/PlotConfig';
import UnOrderMultiMap from '../../Libs/Helpers/UnOrderMultiMap';
export default class PlotData {
    private _groupId: number;
    private _groupData: PlotConfig[];
    private _plotOrder: number = 1; // 剧情顺序id, 默认从1开始,
    private _groupDict: UnOrderMultiMap<number, PlotConfig> = new UnOrderMultiMap<number, PlotConfig>();
    private _data;

    constructor()  {

    }

    //创建剧情对话数据单位
	static Create( groupID: number ): PlotData {
        let guide = new PlotData();
        guide._groupId = groupID;
        guide._groupData = Game.config.plot.getGroupValues( groupID )
		return guide;
    }
    
    private sortGroupDataByOrder( groupData: PlotConfig[] ):void{
        for ( let config of groupData )
        {
            let order = config.group_order
            this._groupDict.addItem( order, config );
        }
    }

    /**
     * 剧情对话组id
     */
    get groupId(): number{
        return this._groupId
    }

    /**
     * 剧情对话数据
     */
    data( index?: number ): PlotConfig{
        var curData = this._data
        this._data = this.nextData( curData, index )
        return this._data
    }

    /**
     * 剧情对话配置数据
     * @param curData 当前使用的数据,用于获取下一条数据
     * @param index 剧情引导,玩家点击按钮的标记
     */
    nextData( curData?: PlotConfig, index?: number ): PlotConfig{
        var data;
        if (!curData)
        {
            // 返回当前组首条数据, 数组以0开始, order 从1开始, order默认初始化 
            data = this._groupData[this._plotOrder - 1];
        }
        else
        {
            // 返回当前组下一条数据
            if ( curData.option_type )// 多个可选按钮, 点击后剧情顺序被更换
            {
                let param1 = curData.option1_next_group_order 
                let param2 = curData.option2_next_group_order
                if (index == 1)
                {
                    this._plotOrder = param1; // 使用下一步的order 替换当前order
                }
                else
                {
                    this._plotOrder = param2; // 使用下一步的order 替换当前order
                }

                console.log("赵书记222222", param1, param2, this._plotOrder )

                data = this._groupData[this._plotOrder - 1];        
            }
            else
            {
                this._plotOrder++;
                data = this._groupData[this._plotOrder - 1];
            }
        }
        return data
    }   
}