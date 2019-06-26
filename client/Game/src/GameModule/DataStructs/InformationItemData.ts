import InformationData from "./InformationData";

export default class InformationItemData {
    // 情报类型
    type: number;

    // 情报一
    oneInfo: InformationData;

    // 情报二
    twoInfo: InformationData;

    static Create(oneInfo: InformationData = null, twoInfo: InformationData = null): InformationItemData {
        let informationItemdata = new InformationItemData();
        if (oneInfo) {
            informationItemdata.type = oneInfo.type;
        }
        informationItemdata.oneInfo = oneInfo;
        informationItemdata.twoInfo = twoInfo;            

        return informationItemdata;
    }
}