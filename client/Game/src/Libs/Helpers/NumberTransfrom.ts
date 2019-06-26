export default class NumberTransfrom
{
    public unms: string[] = ["零","一","二","三","四","五","六","七","八","九"];
    public digits: string[] = [ "","十","百","千" ];
    public units: string[] = ["","万","亿","万亿","亿亿"];

    
	//检查字符串s是否全为数字
	public checkIsNumbers( x:string ): boolean
	{
		if (null == x)
		{
			return false;
        }
        
		for( let i = 0; i < x.length; i ++ )
		{
            let c = parseInt(x[i]);
			if(isNaN(c))
			{
				return false;
			}
		}
		return true;
	}
	
	transfrom2(num: number): string {
		if( null==num )
		{
			return "您输入的字符串地址为null！";
		}
		let str = num
	}
    
    
    // 转换
	public transfrom( num: number ): string
	{

		if( null==num )
		{
			return "您输入的字符串地址为null！";
        }
        
        let x = num.toString();
		if( 0==x.length )
		{
			return "您输入的字符串长度为0，请输入要转换的数字！";
        }

		if( x.length>16 )
		{
			return "您输入的字符串长度大于16，无法转换！";
		}
		//去除字符串首部的0，例如：0010->10
		let fm;
		for( fm=0 ; fm<x.length ; fm++ )
		{
			if ( x.charAt(fm)!='0')
			{
				break;
			}
		}
		x = x.substring(fm);//去除完毕
		
		//把字符串看作一些组，例如：123456789->1,2345,6789
		let result  = "";
		let p:int = 0;
		let m:int = x.length%4; 
		let k:int = ( m>0 ? Math.floor(x.length/4)+1 : Math.floor(x.length/4) );
		//从最左边的那组开始，向右循环
		for( let i=k; i>0; i-- )
		{
			let len=4;
			if ( i==k && m!=0 )//当i为最左边的那组时，组长度可能有变化
			{
				len=m;
			}
			let s:string = x.substring( p, p+len );
			let le:int = s.length;
			for( let j=0; j<le; j++ )
			{
				let n:int = parseInt( s.substring(j,j+1) );
				if ( 0==n )
				{
					if(j<le-1 && parseInt(s.substring(j+1,j+2))>0 && !result.endsWith(this.unms[0]))
					{//加零的条件：不为最后一位 && 下一位数字大于0 && 以前没有加过“零”
						result += this.unms[0];
					}
				}
				else
				{
					if( !(n==1 && (result.endsWith(this.unms[0])||result.length==0) && j==le-2) )
					{//处理1013一千零"十三"，1113 一千一百"一十三"
						result += this.unms[n];
					}
					result += this.digits[le-j-1];
				}
			}
			if ( 0!=parseInt(s) )//如果这组数字不全是 0 ，则加上单位：万，亿，万亿
			{
				result += this.units[i-1];
			}
			p += len;
		}
		return result;
	}

}