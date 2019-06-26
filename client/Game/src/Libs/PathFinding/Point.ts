/**
 * 路径点
 */
export class Point
{
    x: number = 0;
    y: number = 0;

    /** 获取到目标点距离 */
    public getDistance(to: Point): number
    {
        let dx  = to.x - this.x;
        let dy  = to.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /** 获取到目标点弧度 */
    public getRadian(to: Point) : number
    {
        let dx  = to.x - this.x;
        let dy  = to.y - this.y;
        return Math.atan2(dy, dx);
    }

    /** 获取到目标点角度 */
    public getAngle(to: Point) : number
    {
        return this.getRadian(to) * 180 / Math.PI ;
    }

    /** 获取中心点 */
    public static center(a: Point, b: Point): Point
    {
        let p = new Point();
        p.x = a.x + (b.x - a.x) * 0.5;
        p.y = a.y + (b.y - a.y) * 0.5;
        return p;
    }


    /** 获取相对A中心点 */
    public static centerRelative(a: Point, b: Point): Point
    {
        let p = new Point();
        p.x = (b.x - a.x) * 0.5;
        p.y = (b.y - a.y) * 0.5;
        return p;
    }

}