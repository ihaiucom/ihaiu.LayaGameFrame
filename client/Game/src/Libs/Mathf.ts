export default class Mathf
{
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
}