import ModelManagerList from "./ModelManagerList";

//======================
// 模块 数据模型 管理器
//----------------------
export default class ModelManager extends ModelManagerList
{
    // 初始化
    install()
    {
        this.initList();

        for(let i = 0; i < this.list.length; i ++)
        {
            this.list[i].install();
        }
    }
}