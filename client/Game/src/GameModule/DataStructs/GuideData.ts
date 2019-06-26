import DTStoryEffect from '../../Config/ConfigExtends/DTStoryEffect';
import Game from '../../Game';
import GuideConfig from '../../Config/ConfigExtends/GuideConfig';
import PlotConfig from '../../Config/ConfigExtends/PlotConfig';
import GuideUIFind from '../../SystemGuide/Views/GuideUIFind';
import GuideConfigReader from '../../Config/ReaderExtends/GuideConfigReader';
import PlotData from './PlotData';

export default class GuideData {

    private _guideUIFind: GuideUIFind;
    private _id: number;
    private _data: GuideConfig;
    private _groupId: number;
    private _isPlot: boolean = false;
    _plotData: PlotData;
    _UIData: Array<any>;

    constructor()  {

    }

    //创引导数据单位
	static Create( msg: GuideConfig ): GuideData {
        let guide = new GuideData();
        guide._id = msg.id;
        guide._data = msg;
        guide._groupId = msg.group;
        guide._isPlot = msg.plot_group_id? true: false;
        guide._plotData = PlotData.Create( msg.plot_group_id );
        if ( !guide._isPlot ) // 剧情引导不需要索引建筑\UI
        {
            guide._guideUIFind = new GuideUIFind();
            // guide._UIData = guide._guideUIFind.getUI( msg );
        }

		return guide;
    }
    
    /**
     * 引导组id
     */
    get groupId(): number{
        return this._groupId
    }

    /**
     * 引导配置数据
     */
    get data(): GuideConfig{
        return this._data
    }

    /**
     * 引导||剧情对话 id
     */
    get id(): number{
        return this._id;
    }

    /**
     * 引导：0
     * 剧情对话：1
     */
    get type(): number{
        return this._isPlot? 1 : 0;
    }

    /**
     * 是否为剧情
     */
    get isPlot(): boolean
    {
        return this._isPlot;
    }

    /**
     * 获取剧情对话组数据
     */
    get plotGroupData(): PlotData {
        return this._plotData
    }
}