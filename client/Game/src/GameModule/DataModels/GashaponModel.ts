import MModel from "../../GameFrame/Module/MModel";
import Dictionary from "../../Libs/Helpers/Dictionary";
import GashaponData from "../DataStructs/GashaponData";
import Game from "../../Game";

export default class GashaponModel extends MModel {
    private dict: Dictionary<string, GashaponData>;
    constructor() {
        super();   
        this.dict = new Dictionary<string, GashaponData>();
    }

    /**
     * 设置抽奖信息
     * @param msg 
     */
    setGashaponList(msg: Array<any>): void{
        // this.dict.clear();
        for (let i: number = 0; i < msg.length; i++) {
			let gashapon: GashaponData = GashaponData.Create(msg[i]);
            this.dict.add(gashapon.id, gashapon);
            
            // TODO
            // Game.moduleModel.storyLottery.updateProtoData( gashapon );
		}
    }

    /**
     * 获取抽奖
     * @param gashaponId 
     */
    getGashapon(gashaponId: number): GashaponData {
        return this.dict.getValue(gashaponId);
    }

    /**
     * 根据模块 获取抽奖
     * @param menuId 
     */
    getGashaponByMenuId(menuId: number): Array<GashaponData> {
        let list: Array<GashaponData> = [];
		let gashapons = this.dict.getValues();
		for (let i = 0; i < gashapons.length; i++) {

            if (gashapons[i].menuId == menuId){
                list.push(gashapons[i]);                
            }
        }

        list.sort(function (a: any, b:any):number {
			return a.id - b.id;
		});
        
        return list;
    }    
}