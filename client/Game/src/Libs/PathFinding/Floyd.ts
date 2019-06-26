import { GraphData } from "./GraphData";

/** 最短寻路算法之Floyd */
export class Floyd
{
    constructor()
    {

    }

    // 顶点数
    nodeNum: number= 0;

    // 成本矩阵
    arcs: number[][];

    // 路径字典
    pathMap: number[][][];

    /** 获取路径 */
    public getPath(from: number, to: number): number[]
    {
        return this.pathMap[from][to];
    }


    /** 获取路径成本 */
    public getArcs(from: number, to: number): number
    {
        return this.arcs[from][to];
    }

    /** 是否有连接线 */
    public hasEdge(from: number, to: number): boolean
    {
        let arc = this.getArcs(from, to);
        return arc != Number.MAX_VALUE && arc != 0;
    }

    /** 获取路径中最大成本 */
    public getPathMaxArc(from: number, to: number): number
    {
        return this.getPathMaxArcByPath(this.getPath(from, to));
    }

    public getPathMaxArcByPath(ponts: number[]): number
    {
        let max = -1;
        for(let i = 0; i < ponts.length - 1; i ++)
        {
            let u = ponts[i];
            let v = ponts[i + 1];
            let d = this.arcs[u][v];
            if(d > max)
            {
                max = d;
            }
        }
        return max;
    }


    public getPathPointsMaxArcByPath(ponts: number[]): number[]
    {
        let from = 0;
        let to = 0;
        let max = -1;
        for(let i = 0; i < ponts.length - 1; i ++)
        {
            let u = ponts[i];
            let v = ponts[i + 1];
            let d = this.arcs[u][v];
            if(d > max)
            {
                max = d;
                from = u;
                to = v;
            }
        }
        return [from, to];
    }

    public calculationByGraphData(g: GraphData)
    {
        g.check();
        this.calculation(
            g.nodeNum, 
            g.edegeNum,
            g.x,
            g.y,
            g.w
            );
    }

    /** 计算寻路 */
    public calculation(nodeNum: number, edegeNum: number, x: number[], y: number[], w: number[])
    {
        // 成本矩阵
        let arcs: number[][] = [];
        // 路径矩阵
        let path: number[][] = [];

        // 矫正顶点数量
        let num = 0;
        for(let i = 0; i < x.length; i ++)
        {  
            num = Math.max(x[i], num);
            num = Math.max(y[i], num);
        }
        nodeNum = Math.max(num + 1, nodeNum);
        this.nodeNum = nodeNum;
        


        // 初始化矩阵值
        for(let u = 0; u < nodeNum; u ++)
        {
            arcs[u] = [];
            path[u] = [];

            for(let v = 0; v < nodeNum; v ++)
            {
                if( u != v)
                {
                    arcs[u][v] = Number.MAX_VALUE;
                }
                else
                {
                    // 同一个点，成本是0
                    arcs[u][v] = 0;
                }
                path[u][v] = v;
            }
        }


        this.print(arcs, nodeNum, -1);

        // 输入边
        for(let i = 0; i < x.length; i ++)
        {
            let u = x[i];
            let v = y[i];
            arcs[u][v] = w[i];
            arcs[v][u] = w[i];
        }

        this.arcs = [];
        for(let u = 0; u < arcs.length; u ++)
        {
            this.arcs[u] = [];

            for(let v = 0; v < arcs[u].length; v ++)
            {
                this.arcs[u][v] = arcs[u][v];
            }
        }
        
        // floyd算法
        // if ( arcs[i][k]  + arcs[k][j] < arcs[i][j] )
        //     arcs[i][j] = arcs[i][k] + arcs[k][j]

        for(let k = 0; k < nodeNum; k ++)
        {
            for(let i = 0; i < nodeNum; i ++)
            {
                for(let j = 0; j < nodeNum; j ++)
                {
                    if( arcs[i][k] < Number.MAX_VALUE && arcs[k][j] < Number.MAX_VALUE )
                    {
                        let d = arcs[i][k] + arcs[k][j];
                        if(d < arcs[i][j])
                        {
                            arcs[i][j] = d;
                            path[i][j] = path[i][k];
                        }
                    }
                }
            }

            // this.print(arcs, nodeNum, k);
        }
        

        // 路径字典
        let pathMap: number[][][] = this.generatePathMap(arcs, path, nodeNum);

        // this.printPathMap(arcs, pathMap, nodeNum);

        this.pathMap = pathMap;
    }


    // 生存路径字典
    generatePathMap(arcs: number[][], path: number[][], nodeNum: number): number[][][]
    {
        // 路径字典
        let pathMap: number[][][] = [];
        let temp = 0;
        for(let u = 0; u < nodeNum; u ++)
        {
            pathMap[u] = [];
            let str = "";
            for(let v = 0; v < nodeNum; v ++)
            {
                let points = pathMap[u][v]=[];
                points.push(u);
                temp = path[u][v];
                while(temp != v)
                {
                    points.push(temp);
                    temp = path[temp][v];
                }
                points.push(v);
            }

        }

        return pathMap;
    }

    // 打印矩阵
    print(arcs: number[][], nodeNum: number, index: number)
    {
        return;
        console.log("step of %d:", index);
        for(let u = 0; u < nodeNum; u ++)
        {
            let str = "";
            for(let v = 0; v < nodeNum; v ++)
            {
                if(arcs[u][v] < Number.MAX_VALUE)
                {
                    str += arcs[u][v] + "  ";
                }
                else
                {
                    str +=  "∞  ";
                }
            }
            str += "\n";
            console.log(str);
        }
    }

    // 打印路径
    printPath(arcs: number[][], path: number[][], nodeNum: number)
    {
        console.log("path:");
        let temp = 0;
        for(let u = 0; u < nodeNum; u ++)
        {
            let str = "";
            for(let v = 0; v < nodeNum; v ++)
            {
                str += u + " -> " + v + ", weight:" + arcs[u][v] + ":" + u;

                temp = path[u][v];
                while(temp != v)
                {
                    str += "->" + temp;
                    temp = path[temp][v];
                }
                str += "->" + v + "\n";
            }

            console.log(str);

        }
    }

    // 打印路径字典
    printPathMap(arcs: number[][], pathMap: number[][][], nodeNum: number)
    {
        console.log("pathMap:");
        let temp = 0;
        for(let u = 0; u < nodeNum; u ++)
        {
            let str = "";
            for(let v = 0; v < nodeNum; v ++)
            {
                str += u + " -> " + v + ", weight:" + arcs[u][v] + ":" ;

                let points = pathMap[u][v];
                if(points.length < 2)
                    console;

                str += points[0];
                for(let i = 1; i < points.length - 1; i ++)
                {
                    str += "->" + points[i];
                }

                str += "->" + points[points.length - 1] + "\n";
            }

            console.log(str);

        }
    }





}