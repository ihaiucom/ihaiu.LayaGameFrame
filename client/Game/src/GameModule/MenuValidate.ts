import Dictionary from "../Libs/Helpers/Dictionary";
import { MenuId } from "./MenuId";


//=========================
// 验证基类
//-------------------------
export default class MenuValidate
{

	/**
	 * 获取单例实例
	 */
	public static getInstance(): MenuValidate
	{
		var Class: any = this;
		if (Class.__instance == null)
		{
			Class.__instance = new Class();
			(<MenuValidate>Class.__instance).install();
		}
		return <MenuValidate>Class.__instance;
	}


	dict: Dictionary<MenuId, Function> = new Dictionary<MenuId, Function>();
	validate(menuId: MenuId): boolean | number
	{
		if (this.dict.hasKey(menuId))
		{
			return this.dict.getValue(menuId).apply(this);
		}
		return true;
	}

	add(menuId: MenuId, fun: Function)
	{
		this.dict.add(menuId, fun);
	}

	install()
	{
	}


}





