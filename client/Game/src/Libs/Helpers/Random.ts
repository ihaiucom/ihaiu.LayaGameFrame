export default class Random
{
	// int
	// min <= r < max
	static range(min: number, max: number)
	{
		let range = max - min;
		let rand = Math.random();
		return min + Math.floor(range * rand);
	}

	// int
	// min <= r <= max
	static rangeBoth(min: number, max: number)
	{
		let range = max - min;
		let rand = Math.random();
		return min + Math.round(range * rand);
	}

	// int
	// min < r < max
	static rangeBetween(min: number, max: number)
	{
		let range = max - min;
		let rand = Math.random();
		if (Math.round(rand * range) == 0)
		{
			return min + 1;
		}
		else if (Math.round(rand * max) == max)
		{
			return max - 1;
		}
		else
		{
			return min + Math.round(rand * range) - 1;
		}
	}


	/// <summary>
	/// 乱序排列一个数组
	/// </summary>
	static GetDisorderList<T>(list: Array<T>): Array<T>
	{
		let countNum = list.length;
		let listA = new Array<T>();
		let listB = new Array<T>();
		for (let i = 0; i < countNum; i++)
		{
			listA.push(list[i]);
		}
		while (listB.length < countNum)
		{
			let index = Random.range(0, listA.length);
			if (listB.indexOf(listA[index]) === -1)
			{
				listB.push(listA[index]);
				listA.splice(index, 1);
			}
		}
		return listB;
	}

}