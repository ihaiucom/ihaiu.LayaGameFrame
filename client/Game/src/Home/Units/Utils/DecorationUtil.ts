import HomeWorld from "../Worlds/HomeWorld";
import { PathFinding } from "../../../Libs/PathFinding/PathFinding";
import { DecorationType } from "../ExtEnums/DecorationType";
import { RouteNode } from "../../../Libs/PathFinding/PathFindingData";
import Mathf from "../../../Libs/Mathf";
import Point = Laya.Point;
import MapBuilding from "../../../FGUI/Customs/MapBuilding";

/** 摆件辅助工具 */
export default class DecorationUtil
{
    engine: HomeWorld;
    
    // 寻路
    get path(): PathFinding
    {
        return this.engine.path;
    }

    // 建筑列表
    get buildings(): MapBuilding[]
    {
        if(this.engine.scene && this.engine.scene.scene2D && this.engine.scene.scene2D.map)
        {
            return this.engine.scene.scene2D.map.buildings;
        }
        return null;
    }

    install(engine: HomeWorld)
    {
        this.engine = engine;
    }

    /** 碰撞 建筑 */
    hitBuilding(x: number, y: number): MapBuilding
    {
        let p = Point.TEMP.setTo(x,y);
        p = this.engine.scene.scene2D.localToGlobal(p, false);
        x = p.x;
        y = p.y;
        let isHit: boolean;
        let list = this.buildings;
        if(list)
        {
            for(let item of list)
            {
                if(item.picComponent)
                {
                    isHit =  item.picComponent.displayObject.hitTestPoint(x, y);
                    if(isHit)
                    {
                        return item;
                    }
                }
            }
        }
        return null;
    }

    

    /** 检测penzhang */
    hitArea(x: number, y: number, radius: number, decorationType: DecorationType): RouteNode
    {


        let nodeIds = this.path.getDecorationIds(decorationType);
        let node: RouteNode;
        let distance: number;
        let minNode: RouteNode;
        let minDistance: number = 99999;
        for(let nodeId of nodeIds)
        {
            node = this.path.getRouteNode(nodeId);
            if(!this.path.isNodeOpened(node.id)) continue;

            distance = Mathf.distanceangle(x, y, node.x, node.y);
            if(distance < radius)
            {
                if(distance < minDistance)
                {
                    minNode = node;
                    minDistance = distance;
                }
            }
        }
        return minNode;
    }

    /** 查找最近的寻路点 */
    findNearestRouteNode(x: number, y: number): RouteNode
    {

        let distance: number;
        let minNode: RouteNode;
        let minDistance: number = 99999;
        for(let node of this.path.pathFindingData.routeNodes)
        {
            if(!this.path.isNodeOpened(node.id)) continue;
            
            distance = Mathf.distanceangle(x, y, node.x, node.y);
            if(distance < minDistance)
            {
                minNode = node;
                minDistance = distance;
            }
        }
        return minNode;
    }


}