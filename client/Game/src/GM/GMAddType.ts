
import EItemCategory = proto.ItemType;

/** 添加下拉菜单 */
export default class GMAddType
{
    static Actor = "艺人";
    static Story = "剧本";
    static Information = "情报";
    static Item = "物品--所有";
    static Item_Money = "物品--货币";
    static Item_Other = "物品--周边产品";
    static Item_Normal = "物品--普通道具";
    static Item_Asset = "物品--资产";
    static Item_Contract = "物品--合同";
    static Item_Giftbag = "物品--礼包";
    static Item_Build = "物品--建筑材料";


    static list :string[]= [
        GMAddType.Actor,
        GMAddType.Story,
        GMAddType.Information,
        GMAddType.Item,
        GMAddType.Item_Money,
        GMAddType.Item_Other,
        GMAddType.Item_Normal,
        GMAddType.Item_Asset,
        GMAddType.Item_Contract,
        GMAddType.Item_Giftbag,
        GMAddType.Item_Build
    ];



    static getItemTypes(itemAddType: string): number[]
    {
        let types = [];
        switch (itemAddType)
        {
            case GMAddType.Item_Money:
                types.push(EItemCategory.diamond);
                types.push(EItemCategory.gold);
                types.push(EItemCategory.dollar);
                types.push(10); // 许可证
                types.push(11); // 粉丝
                types.push(12); // 点赞
                types.push(13); // 期待
                break;
            case GMAddType.Item_Other:
                types.push(EItemCategory.product);
                break;
            case GMAddType.Item_Normal:
                types.push(EItemCategory.Item);
                break;
            case GMAddType.Item_Asset:
                types.push(EItemCategory.property);
                break;
            case GMAddType.Item_Contract:
                types.push(EItemCategory.artistContract);
                break;
            case GMAddType.Item_Giftbag:
                types.push(EItemCategory.gift);
                break;
            case GMAddType.Item_Build:
                types.push(9);
                break;
        }
        return types;
    }
}