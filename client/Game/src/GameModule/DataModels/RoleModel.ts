import MModel from "../../GameFrame/Module/MModel";
import Dictionary from "../../Libs/Helpers/Dictionary";
import RoleData from "../DataStructs/RoleData";

export default class RoleModel extends MModel
{
	// 角色字典 by id
    private dictById: Dictionary<number, RoleData> = new Dictionary<number, RoleData>();
	// 角色字典 by id
    private dictByUid: Dictionary<string, RoleData> = new Dictionary<string, RoleData>();

    // 获取角色数据，使用id
    public getRoleById(id: number): RoleData
    {
		if (this.dictById.hasKey(id))
		{
			return this.dictById.getValue(id);
		}
    }

    // 获取角色数据，使用uid
    public getRoleByUid(uid: string): RoleData
    {
		if (this.dictByUid.hasKey(uid))
		{
			return this.dictByUid.getValue(uid);
		}
    }

    // 添加角色数据
    public addRole(role: RoleData)
    {
        this.dictById.add(role.id, role);
        
        if(role.uid)
            this.dictByUid.add(role.uid, role);
    }

    


    

}