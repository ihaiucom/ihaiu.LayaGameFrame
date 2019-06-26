/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import ChartPolygonPropertyViewStruct from "../../Generates/CommonBase/ChartPolygonPropertyViewStruct";
import ChartPolygonView from "../../../Libs/ChartPolygonView/ChartPolygonView";
import ChartPolygonPropertyText from "./ChartPolygonPropertyText";
import Prop from "../../../GameFrame/Props/Prop";
import Random from "../../../Libs/Helpers/Random";
import PropId from "../../../GameFrame/Props/PropId";
import PropHelper from '../../../GameFrame/Props/PropHelper';
import { ClassType } from '../../../Libs/ECS/Interfaces';

export default class ChartPolygonPropertyView extends ChartPolygonPropertyViewStruct
{

    /** 几边形 */
    polygonNum = -1;
    chart: ChartPolygonView  ;
    private textItems: ChartPolygonPropertyText[] = [];
    private textItemPool: ChartPolygonPropertyText[] = [];

    props: Prop[] = [];
    private centerX = 0;
    private centerY = 0;

    private textClass:any;
    textRadius: number = 96;

	protected constructFromXML(xml: any): void 
	{
        super.constructFromXML(xml);
        this.m_tmp.removeFromParent();
        // this.test();
    }

    init(radius: number = 96, textRadius: number = 96, angleOffset: number = -15,  textClass:any = null)
    {
        if(!textClass)
        {
            textClass = ChartPolygonPropertyText;
        }

        this.textClass = textClass;
        this.textRadius = textRadius;

        this.centerX = this.width >> 1;
        this.centerY = this.width >> 1;
        this.chart = new ChartPolygonView();
        this.chart.radius = radius;
        this.chart.angleOffset = angleOffset;
        this.chart.x = this.width >> 1;
        this.chart.y = this.height >> 1;
        this.displayObject.addChildAt(this.chart, 0);

        window['aa'] = this;
    }

    
    testMin = 100;
    testMax = 500;

    test()
    {
        this.testData();
        Laya.stage.on(Laya.Event.CLICK, this, this.testData);
    }

    testData()
    {
        let propIds = PropHelper.ActorPropIds;

        let data = [];
        let prop;
        for(let id of propIds)
        {
            prop = Prop.Create(id, Random.range(this.testMin, this.testMax));
            data.push(prop);
        }

        
        this.setData(data);
    }


    setData(props: Prop[], isTween: boolean = true)
    {

        if(this.polygonNum != props.length)
        {
            this.polygonNum = props.length;
            this.initTexts();
        }

        this.props = props;
        this.chart.setData(props, isTween);
        Laya.timer.clearAll(this);
        Laya.timer.frameLoop(1, this, this.onRefreshDraw);
    }

    initTexts()
    { 
        this.chart.polygonNum = this.polygonNum;
        this.chart.calculationPoints(this.chart.radiusTextRate * this.chart.radius);

        for(let item of this.textItems)
        {
            item.removeFromParent();
            this.textItemPool.push(item);
        }

        this.textItems.length = 0;

        
        this.chart.calculationPoints(this.textRadius);
        let item : ChartPolygonPropertyText;
        for(let i = 0; i < this.polygonNum; i ++)
        {
            let item : ChartPolygonPropertyText;
            if(i < this.textItemPool.length)
            {
                item = this.textItemPool[i];
            }
            else
            {
                item = this.textClass.createInstance();
            }
            this.addChild(item);
            this.textItems.push(item);
            item.x = this.centerX + this.chart.points[i].x;
            item.y = this.centerY + this.chart.points[i].y;
        }
    }

    onRefreshDraw()
    {
        if(this.chart.isTweenEnd)
            Laya.timer.clearAll(this);

        for(let i = 0; i < this.polygonNum; i ++)
        {
            let item = this.textItems[i];
            item.setProp(this.chart.props[i]);
        }
    }
}