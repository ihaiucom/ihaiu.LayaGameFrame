import { Node } from "./Node";
 
 /**
 * 图形数据
 */
export class GraphData
{
    // 边--from
    x: number[];
    // 边--to
    y: number[];
    // 边--危险值
    w: number[];

    // 节点数量
    nodeNum = 0;

    // 边数
    edegeNum = 0;

    // 节点
    nodes: Node[] = [];

    public init(): GraphData
    {
        this.x = [];
        this.y = [];
        this.w = [];
        return this;
    }

    // 添加边
    public addEdge(x: number, y:number, w: number): GraphData
    {
        this.x.push(x);
        this.y.push(y);
        this.w.push(w);
        return this;
    }

    public check()
    {
        this.checkNodeNum();
        this.edegeNum = this.x.length;
        // if(this.nodes != null && this.nodes.length >= this.nodeNum)
        // {
        //     return;
        // }

        // let list: Node[] = [];
        // for(let i = 0; i < this.nodeNum; i ++)
        // {

        //     let node : Node;
            
        //     if(i < this.nodes.length )
        //     {
        //         node = this.nodes[i];
        //     } 
        //     else
        //     {
        //         node = new Node();
        //         node.pos.x = Math.floor( Math.random() * 200 + 50 ) ;
        //         node.pos.y = Math.floor( Math.random() * 200 + 50 );

        //     }
        //     node.index = i;
        //     list.push(node);
        // }
        // this.nodes = list;
    }

    // 矫正顶点数量
    public checkNodeNum()
    {
        let x = this.x;
        let y = this.y;
        let num = 0;
        for(let i = 0; i < x.length; i ++)
        {  
            num = Math.max(x[i], num);
            num = Math.max(y[i], num);
        }
        this.nodeNum = Math.max(num + 1, this.nodeNum);
    }

    static parse(json:string)
    {
        let g = new GraphData();
        try 
        {
            let o = JSON.parse(json);
            g.edegeNum = o.edegeNum;
            g.nodeNum = o.nodeNum;
            g.x = o.x;
            g.y = o.y;
            g.w = o.w;

            let list: Node[] = [];
            for(let i = 0; i < o.nodes.length; i ++)
            {
                let item = o.nodes[i];

                let node : Node = new Node();
                node.index = item.index;
                node.pos.x = item.pos.x;
                node.pos.y = item.pos.y;
                list.push(node);
            }
            g.nodes = list;

        } 
        catch (error) 
        {
            alert("解析json数据错误：" + error);
        }
        return g;
    }


}