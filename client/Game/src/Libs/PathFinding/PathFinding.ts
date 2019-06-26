import { GraphData } from "./GraphData";
import { Floyd } from "./Floyd";
import { PathFindingData, RouteNode } from "./PathFindingData";
import Dictionary from "../Helpers/Dictionary";
import Random from "../Helpers/Random";
import Game from "../../Game";
import { AssetItemType } from "../../GameFrame/AssetManagers/AssetItemType";

/** 寻路 */
export class PathFinding
{
    /** 寻路数据 */
    pathFindingData: PathFindingData;

    /** 图形数据 */
    private _graphData: GraphData;
    get graphData()
    {
        if(!this._graphData)
            this.generateGraphData();
        return this._graphData;
    }

    /** 寻路算法 */
    private _floyd: Floyd;
    get floyd(): Floyd
    {
        if(!this._floyd)
        {
            this.generateFloyd();
        }
        return this._floyd;
    }


    /** 生成图形数据 */
    generateGraphData()
    {
        let graphData = new GraphData();
        graphData.init();
        for(let line of this.pathFindingData.lines)
        {
            graphData.addEdge(line.a, line.b, line.cost);
        }
        this._graphData = graphData;
    }

    /** 生成寻路 */
    generateFloyd()
    {
        let g = this.graphData;
        let floyd = new Floyd();
        floyd.calculationByGraphData(g);
        this._floyd = floyd;
    }

    /** 寻路缓存 */
    private pathCache = new Dictionary<number, RouteNode[]>();
    private PATH_EMPTY = [];

    /** 获取路径 */
    getPaths(from: number, to: number):RouteNode[]
    {
        let key = this.getPathKey(from, to);
        let paths = this.pathCache.getValue(key);
        if(!paths)
        {
            let ids = this.floyd.getPath(from, to);
            if(ids)
            {
                paths = [];
                for(let id of ids)
                {
                    paths.push(this.pathFindingData.getRouteNode(id));
                }
                this.pathCache.add(key, paths);
            }
            else
            {
                paths = this.PATH_EMPTY;
            }
        }
        return paths;
    }

    
    /** 获取KEY */
    private getPathKey(a: number, b: number): number
    {
        return a * 10000 + b;
    }

    /** 开放区域ID列表 */
    private areaOpendIds: number[] = [0];

    /**
     * 重置 开放区域
     * @param openIds 开放区域ID列表
     */
    resetAreaOpen(openIds: number[])
    {
        this.areaOpendIds.splice(0, this.areaOpendIds.length);
        this.areaOpendIds.push(0);
        for(let id of openIds)
        {
            this.areaOpendIds.push(id);
        }
    }

    /** 设置该区域开放 */
    setAreaOpen(buildId: number)
    {
        let index = this.areaOpendIds.indexOf(buildId);
        if(index == -1)
            this.areaOpendIds.push(buildId);
    }

    /** 设置该区域关闭 */
    setAreaClose(buildId: number)
    {
        let index = this.areaOpendIds.indexOf(buildId);
        if(index != -1)
            this.areaOpendIds.splice(index, 1);
    }

    /** 节点是否开放 */
    isNodeOpened(routeId: int): boolean
    {
        let node = this.pathFindingData.getRouteNode(routeId);
        if(node)
        {
            if(node.decorationRegionEnable)
            {
                if(this.areaOpendIds.indexOf(node.buildId) != -1)
                {
                    return true;
                }
            }
        }
        return false;
    }

    /** 设置摆件区域 开放/关闭 */
    setDDecorationRegionEnable(regionId: int, isOpened: boolean)
    {
        this.pathFindingData.setDDecorationRegionEnable(regionId, isOpened);
    }

    /** 随机节点ID */
    randomNodeId(): number
    {
        let areaId = this.areaOpendIds[Random.range(0, this.areaOpendIds.length)];
        return this.pathFindingData.randomNodeId(areaId);
    }

    /** 随机路径 */
    randomPaths(from: number): RouteNode[]
    {
        let to = this.randomNodeId();
        return this.getPaths(from, to);
    }

    /** 获取寻路节点 */
    getRouteNode(id: number):RouteNode
    {
        return this.pathFindingData.getRouteNode(id);
    }
    /** 随机寻路节点 */
    randomRouteNode():RouteNode
    {
        return this.getRouteNode(this.randomNodeId());
    }

    
    /** 获取 前往摆设 需要到的最后一个点 */
    getDecorationLastRouteNodeId(id: number): number
    {
        return this.pathFindingData.getDecorationLastRouteNodeId(id);
    }
    
    /** 获取 前往摆设 需要到的最后一个点 */
    getDecorationLastRouteNode(id: number): RouteNode
    {
        let preId = this.getDecorationLastRouteNodeId(id);
        if(preId > 0)
        {
            return this.getRouteNode(preId);
        }
        return this.getRouteNode(id);
    }

    /** 获取摆设点列表，根据摆设类型 */
    getDecorationIds(decorationType: number): number[]
    {
        return this.pathFindingData.decorationIdDict.get(decorationType);
    }

    /** 获取摆设点列表，根据摆设类型和区域 */
    getAreaDecorationIds(buildId: number, decorationType: number): number[]
    {
        return this.pathFindingData.areaDecorationIdDict.getItemList(buildId,decorationType);
    }

    
    /** 随机节点摆设点ID */
    randomDecorationId(decorationType: number, isAll: boolean = false): number
    {
        let i = 0;
        
        if(isAll)
        {
            let list = this.getDecorationIds(decorationType);
            if(list && list.length > 0)
            {
                return list[Random.range(0, list.length)];
            }

        }
        else if(this.areaOpendIds.length > 0)
        {
            while(i < 10)
            {
                i ++;
                let areaId = this.areaOpendIds[Random.range(0, this.areaOpendIds.length)];
                let list = this.getAreaDecorationIds(areaId, decorationType);
                if(list && list.length > 0)
                {
                    let routeId = list[Random.range(0, list.length)];
                    if(this.isNodeOpened(routeId))
                        return routeId;
                }
    
            }
        }
        return -1;
    }


    /** 初始化数据 */
    initJsonData(jsonData)
    {
        this.pathFindingData = PathFindingData.parseJson(jsonData);
        this.generateGraphData();
        this.generateFloyd();
    }

    /** 加载寻路数据 */
    async loadPathDataAsync(path: string)
    {
        let jsonData = await Game.asset.loadAsync(path, AssetItemType.Json);
        this.initJsonData(jsonData);
    }


}