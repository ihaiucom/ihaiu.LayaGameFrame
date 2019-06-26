import Vector3 = Laya.Vector3;

export default class Mathf
{
    /** 小数点多少位 */
    public static  FloatLength(num: number, floatM: number = 100): number
    {
        if(floatM == 0)
        {
            return Math.floor(num);
        }
        return Math.floor(num * floatM) / floatM;
    }


	static clamp(num: number, min: number, max: number)
	{
		return Math.max(Math.min(num, Math.max(min, max)), Math.min(min, max));
	}
	static Clamp01(value: number): number
	{
		if (value < 0.0)
			return 0.0;
		if (value > 1.0)
			return 1;
		return value;
	}


	/// <summary>
	///   <para>Linearly interpolates between a and b by t.</para>
	/// </summary>
	/// <param name="a"></param>
	/// <param name="b"></param>
	/// <param name="t"></param>
	static Lerp(a: number, b: number, t: number): number
	{
		return a + (b - a) * Mathf.Clamp01(t);
	}



	/** 弧度, 计算2个点 */
	public static radian(fromX: number, fromY: number, toX: number, toY: number): number
	{
		let dx = toX - fromX;
		let dy = toY - fromY;
		return Math.atan2(dy, dx);
	}

	
		
	/** 角度, 计算2个点 */
	public static angle(fromX: number, fromY: number, toX: number, toY: number): number
	{
		return this.radian(fromX, fromY, toX, toY) * 180 / Math.PI ;
	}

	
	/** 角度 转 弧度 */
	public static angleToRadian(angle: number): number
	{
		return angle * Math.PI / 180;
	}
	
	
	/** 弧度 转 角度 */
	public static radianToAngle(radian: number): number
	{
		return radian * 180 / Math.PI;
	}
	
	/** 距离, 计算2个点 */
	public static distanceangle(fromX: number, fromY: number, toX: number, toY: number): number
	{
		let dx = toX - fromX;
		let dy = toY - fromY;
		return Math.sqrt(dx * dx + dy * dy);
	}

	/** 方向延迟点 */
	public static directionPoint(fromX: number, fromY: number, toX: number, toY: number,  length:number): Laya.Point
	{
		let angle = this.radian(fromX, fromY, toX, toY);
		let point = new Laya.Point();
		
		point.x = Math.cos(angle) * length;
		point.y = Math.sin(angle) * length;
		point.x += fromX;
		point.y += fromY;
		return point;
	}

	
	public static directionPointX(fromX: number, fromY: number, toX: number, toY: number,  length:number): number
	{
		return Math.cos(this.radian(fromX, fromY, toX, toY)) * length + fromX ;
	}
	
	public static directionPointY(fromX: number, fromY: number, toX: number, toY: number,  length:number): number
	{
		return Math.sin(this.radian(fromX, fromY, toX, toY)) * length + fromY ;
	}

	
	/** 弧度方向 点 */
	public static radianPointX(radian: number, length: number, fromX: number): number
	{
		return Math.cos(radian) * length + fromX ;
	}
	
	public static radianPointY(radian: number, length: number, fromY: number): number
	{
		return Math.sin(radian) * length + fromY ;
	}

	
	
	/** 弧度方向 点 */
	public static anglePointX(angle: number, length: number, fromX: number): number
	{
		return Math.cos(this.angleToRadian(angle)) * length + fromX ;
	}
	
	public static anglePointY(angle: number, length: number, fromY: number): number
	{
		return Math.sin(this.angleToRadian(angle)) * length + fromY ;
	}

	
	/** 角度方向 点 */
	public static PointAngle(o: Laya.Point, angle: number, length: number): Laya.Point
	{
		return this.PointRadian(o, this.angleToRadian(angle), length);
	}

	public static PointRadian(o: Laya.Point, radian: number, length: number): Laya.Point
	{
		let p = new Laya.Point();
		p.x = o.x + Math.sin(radian) * length;
		p.y = o.y + Math.cos(radian) * length;
		return p;
	}



	

	/** 点到直线的距离 */
	public static distancePointToLine(point: Vector3 , lineFrom: Vector3, lineTo: Vector3): number
	{

		let ab = new Vector3();
		Vector3.subtract(lineTo, lineFrom, ab);
		let ac = point;
		
		let cross = new Vector3();
		Vector3.cross(ab, ac, cross);

		Vector3.distanceSquared(Vector3.ZERO, cross);
		let wd = Vector3.distanceSquared(Vector3.ZERO, cross) /
			Vector3.distanceSquared(Vector3.ZERO, ab)
		
		return wd;
	}


	/** 直线与圆相交。圆半径和直线的相交点 */
	public static IntersectionPoint(point:Vector3 , hit: Vector3 , radius: number, lineFrom:Vector3 , lineTo:Vector3 ): Vector3
	{
		let c = radius;
		let a = this.distancePointToLine(point, lineFrom, lineTo);
		let b = Math.sqrt( c * c - a * a);
		
		let sub = new Vector3();
		Vector3.subtract(lineTo, lineFrom, sub);

		let normalized =new Vector3();
		Vector3.normalize(sub, normalized);

		let mul = new Vector3();
		Vector3.scale(normalized, b, mul);

		let add = new Vector3();
		Vector3.add(hit, mul, add);
		
		return add;
	}

	
	/** 点到直线的垂直线和直线的相交点 */
	public static IntersectionPoint2(point:Vector3 ,lineFrom: Vector3 , lineTo: Vector3 ): Vector3
	{
		
		let line = new Vector3();
		Vector3.subtract(lineTo, lineFrom, line);
		
		let normalized =new Vector3();
		Vector3.normalize(line, normalized);

		let sub =  new Vector3();
		Vector3.subtract(point, lineFrom, sub);

		let dot = Vector3.dot(sub, line);

		let mul =  new Vector3();
		Vector3.scale(normalized, dot, mul);

		let add = new Vector3();
		Vector3.add(lineFrom, mul, add);

		return add;
	}


}