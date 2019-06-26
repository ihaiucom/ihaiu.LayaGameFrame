import MapWalk from "../FGUI/Extends/SystemModuleHomeMap/MapWalk";

export default class GrideView extends Laya.Sprite
{
    cellWidth = 100;
    cellHeight = 100;
    width = 4996;
    height = 4616;

    cellNumH = 0;
    cellNumV = 0;

    constructor()
    {
        super();
        this.width = 4996;
        this.height = 4616;
        window['grideView'] = this;
    }
    

    refresh()
    {
        this.graphics.clear();
        this.cellNumH = Math.ceil(this.width / this.cellWidth);
        this.cellNumV = Math.ceil(this.height / this.cellHeight);
        let fillColor = '#FFFFFF33';
        let lineColor = '#00000099';
        for(let h = 0; h < this.cellNumH; h ++)
        {
            for(let v = 0; v < this.cellNumV; v ++)
            {
                let x = h * this.cellWidth;
                let y = v * this.cellHeight;
                let xx = x + this.cellWidth * 0.5;
                let yy = y + this.cellHeight * 0.5;
                let hit = MapWalk.Instance.hit(xx, yy);
                fillColor = hit ? '#00FF0033' : '#FF000033';

                this.graphics.drawRect(x, y, this.cellWidth, this.cellHeight, fillColor, lineColor, 1);
            }
        }
    }
}