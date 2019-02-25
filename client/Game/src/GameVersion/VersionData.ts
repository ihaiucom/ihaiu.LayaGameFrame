
/**
 * 版本号数据结构
 */
export default class VersionData
{
	// 第一部分为主版本号
	master = 0;

	// 第二部分为次版本号, 需要更新app版本
	minor = 0;

	// 第三部分为修订版
	revised = 0;

	// 第四部分为修订版
	revised2 = 0;

	get isZero(): boolean
	{
		return this.master == 0 &&
			this.minor == 0 &&
			this.revised == 0 &&
			this.revised2 == 0;
	}

	setVersionTxt(versionTxt: string): VersionData
	{
		if (versionTxt === undefined || versionTxt === null)
			return this;

		if (isNullOrEmpty(versionTxt.trim()))
			return this;

		versionTxt = versionTxt.toLowerCase();
		versionTxt = versionTxt.replace("version:", "").replace("version", "").replace("ver", "").replace("v", "");



		var arr = versionTxt.split('.');
		this.master = parseInt(arr[0]);

		if (arr.length > 1)
			this.minor = parseInt(arr[1]);

		if (arr.length > 2)
			this.revised = parseInt(arr[2]);

		if (arr.length > 3)
			this.revised2 = parseInt(arr[3]);

		return this;
	}

	equal(target: VersionData)
	{
		return this.master == target.master
			&& this.minor == target.minor
			&& this.revised == target.revised
			&& this.revised2 == target.revised2;
	}



	toString(): string
	{
		return `v${this.master}.${this.minor}.${this.revised}.${this.revised2}`
	}
}