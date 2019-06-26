/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import StudioCPDialogContextStruct from "../../Generates/ModuleStudio/StudioCPDialogContextStruct";

export default class StudioCPDialogContext extends StudioCPDialogContextStruct
{
    get graphics(): Laya.Graphics {
        return this.displayObject.graphics;
    }

    dataList: int[] = [];
    /**柱状图总宽度 */
    private totalWidth: int = 300;
    private totalHeight: int = 150;

    /** 柱间隔 */
    private readonly cMargin: int = 8;
    /** 柱宽度 */
    private get cWidth(): int {
        let l = this.dataList.length;
        let w = (this.totalWidth -(l-1)*this.cMargin )/l;
        return w;
    }
    
    drawChart(data: int[]) {
        let sp = new Laya.Sprite();
        sp.pivot(0,100);
        this.displayObject.addChild(sp)
        sp.graphics.drawPoly(0, 0,[0,0,0,60,40,60,40,0],"#ff0000");
        sp.graphics.drawPoly(100, 0,[0,0,0,70,40,70,40,0],"#ff0000");
        
    }
    
}