import { GraphData } from "./GraphData";
import { Floyd } from "./Floyd";
import Dictionary from "../Helpers/Dictionary";
import Random from "../Helpers/Random";
import UnOrderMultiMap from "../Helpers/UnOrderMultiMap";
import DoubleKeyMap from "../Helpers/DoubleKeyMap";
import DoubleKeyList from "../Helpers/DoubleKeyList";

/** 节点 */
class Node
{
    id: number = 0;
    x:number = 0;
    y:number = 0;
}

/** 路线节点 */
export class RouteNode extends Node
{
    size = 0;
    // 建筑ID
    buildId: number = 0;
    // 摆设类型
    decorationType: number = 0;
    // 朝向
    orientationType: number = 0;
    // 摆件区域
    decorationRegion: number = 0;
    // 摆件区域是否开发了
    decorationRegionEnable: boolean = true;

    
    /** 获取到目标点距离 */
    public getDistance(x: number, y: number): number
    {
        let dx  = x - this.x;
        let dy  = y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

/** 连线 */
class Line
{
    a = 0;
    b = 0;
    cost = 100;
}



/** 寻路数据 */
export class PathFindingData
{
    /** 路线节点 */
    routeNodes: RouteNode[] = [];
    private routeNodeDict: Dictionary<number, RouteNode> = new Dictionary<number, RouteNode>();
    /** 连线 */
    lines: Line[] = [];

    /** 区域节点ID列表字典 */
    areaIdDict: UnOrderMultiMap<number, number> = new UnOrderMultiMap<number, number>();
    /** 区域可以行走节点ID列表字典 */
    areaEnableIdDict: UnOrderMultiMap<number, number> = new UnOrderMultiMap<number, number>();
    
    /** 区域摆设节点ID列表字典 */
    areaDecorationIdDict: DoubleKeyList<number, number, number> = new DoubleKeyList<number, number, number> ();

    /** 摆设节点ID列表字典 */
    decorationIdDict:UnOrderMultiMap<number, number> = new UnOrderMultiMap<number, number>();

    /** 摆设节点ID连接点 */
    decorationLineIdDict:Dictionary<number, number> = new Dictionary<number, number>();
    
    /** 摆设区域列表字典, 摆件区域ID， 路点ID列表 */
    decorationRegionDict:UnOrderMultiMap<number, number> = new UnOrderMultiMap<number, number>();


    /** 设置摆件区域 开放/关闭 */
    setDDecorationRegionEnable(regionId: int, isOpened: boolean)
    {
        let list = this.decorationRegionDict.get(regionId);
        if(list)
        {
            for(let routeId of list)
            {
                let node = this.getRouteNode(routeId);
                if(node)
                {
                    node.decorationRegionEnable = isOpened;
                }
            }
        }
    }

    



    /** 获取区域ID列表 */
    getAreaIds(buildId: number = 0): number[]
    {
        return this.areaIdDict.get(buildId);
    }

    
    /** 获取区域可行走ID列表 */
    getAreaEnableIds(buildId: number = 0): number[]
    {
        return this.areaEnableIdDict.get(buildId);
    }

    /** 随机节点ID */
    randomNodeId(buildId: number = 0): number
    {
        let ids = this.getAreaEnableIds(buildId);
        if(!ids || ids.length == 0)
        {
            return  -1;
        }
        let index = Random.range(0, ids.length);
        return ids[index];
    }

    /** 获取路线节点 */
    getRouteNode(id:number): RouteNode
    {
        return this.routeNodeDict.getValue(id);
    }

    /** 获取 前往摆设 需要到的最后一个点 */
    getDecorationLastRouteNodeId(id: number): number
    {
        return this.decorationLineIdDict.getValueOrDefault(id, -1);
    }

    






    /** 解析Json */
    static parseJson(jsonData: any): PathFindingData
    {
        let result = new PathFindingData();
        for(let jsonNode of jsonData.routeNodes)
        {
            let node = new RouteNode();
            node.id = jsonNode.id;
            node.x = jsonNode.x;
            node.y = jsonNode.y * -1;
            node.size = jsonNode.size;
            node.buildId = jsonNode.buildId;
            node.decorationType = jsonNode.decorationType;
            node.orientationType = jsonNode.orientationType;
            node.decorationRegion = jsonNode.decorationRegion;
            result.routeNodes.push(node);
            result.routeNodeDict.add(node.id, node);

            if(node.decorationType == 0)
            {
                result.areaIdDict.addItem(node.buildId, node.id);
            }
            else
            {
                result.decorationIdDict.addItem(node.decorationType, node.id);
                result.areaDecorationIdDict.addItem(node.buildId, node.decorationType, node.id);
            }

            if(node.decorationRegion > 0)
            {
                result.decorationRegionDict.addItem(node.decorationRegion, node.id);
                
            }
            else
            {
                if(node.decorationType == 0)
                {
                    result.areaEnableIdDict.addItem(node.buildId, node.id);
                }
            }
        }

        for(let jsonLine of jsonData.lines)
        {
            let line = new Line();
            line.a = jsonLine.a;
            line.b = jsonLine.b;
            line.cost = jsonLine.cost;
            
            result.lines.push(line);

            let a = result.getRouteNode(line.a);
            let b = result.getRouteNode(line.b);
            if(a.decorationType != 0)
            {
                result.decorationLineIdDict.add(a.id, line.b);
            }
            
            if(b.decorationType != 0)
            {
                result.decorationLineIdDict.add(b.id, line.a);
            }
        }
        return result;
    }
}