import MenuValidate from "./MenuValidate";
import { MenuId } from "./MenuId";
import MenuValidateOpening from "./MenuValidateOpening";

//=========================
// 验证是否解锁
//-------------------------
export default class MenuValidateUnlock extends MenuValidate
{

	install()
	{

	}


	validate(menuId: MenuId): boolean | number
	{
		return MenuValidateOpening.getInstance().validate(menuId);
	}
}