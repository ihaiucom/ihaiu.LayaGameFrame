import MModel from "../../GameFrame/Module/MModel";
import Dictionary from "../../Libs/Helpers/Dictionary";

export default class ActivityModel extends MModel {
    private dict: Dictionary<number, any>;
	constructor() {
		super();
		this.dict = new Dictionary<number, any>();
    }
    
    //存储已开启活动信息
    setActivityList(msg: any): void {
        if (msg.countActivity) {
            this.dict.add(msg.countActivity.id ,msg.countActivity)
        }
    }

    //获取活动内容
    getActivity(id: number): any {
        return this.dict.getValue(id);
    }
}