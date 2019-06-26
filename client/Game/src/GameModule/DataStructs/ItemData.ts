import ItemConfig from "../../Config/ConfigExtends/ItemConfig";
import Game from "../../Game";
import DTItemNum from "../../Config/ConfigExtends/DTItemNum";
import IGameItem = proto.IGameItem;

//======================
// 物品 数据
//----------------------
export default class ItemData {
    // 唯一ID
    uid: string;

    // 物品ID
    id: number = 0;

    // 物品数量
    count: number = 0;

    // 创建(获得)时间
    obtainTime: number = 0;

    setProtoData(data: IGameItem)
    {
        this.id = data.id;
        this.count = data.count;
        this.obtainTime = data.obtainTime; 
    }



    // 数字文本
    get itemNumTxt(): string  {
        let fix = this.count > 1000 ? 1 : 0;
        return formatNumberUnit(this.count, fix);
    }

    // 物品配置
    get itemConfig(): ItemConfig  {
        return Game.config.item.getConfig(this.id);
    }

    // 物品类型
    get itemType(): proto.ItemType  {
        if (this.itemConfig)  {
            return this.itemConfig.type;
        }

        return 0;
    }

    // 物品名称
    get itemName(): string  {
        if (this.itemConfig)  {
            return this.itemConfig.name;
        }

        return `${this.id}没配置该物品`;
    }

    // 物品描述
    get itemDes(): string  {
        if (this.itemConfig)  {
            return this.itemConfig.item_des;
        }
        return `${this.id}没配置该物品`;
    }

    // 物品星级
    get itemStar(): number  {
        if (this.itemConfig)  {
            let propertyCfg = Game.config.property.getConfig(this.itemConfig.id);
            if (propertyCfg)  {
                let star = Number(propertyCfg.zh_cn_name);
                if (star == null)  {
                    console.log("Error Item Star");
                    return 0;
                }
                star = star < 0 ? 0 : star;
                star = star > 6 ? 6 : star;
                return star;
            }
        }
        return 0;
    }

    // 物品图标
    get itemIconUrl(): string  {
        if (this.itemConfig)  {
            let avatarConfig = Game.config.avatar.getConfig(this.itemConfig.icon);
            if (avatarConfig)  {
                return avatarConfig.iconUrl;
            }
        }
        return null;
    }

    get itemBodyIconUrl(): string  {
        if (this.itemConfig)  {
            let avatarConfig = Game.config.avatar.getConfig(this.itemConfig.icon);
            if (avatarConfig)  {
                return avatarConfig.bodyIconUrl;
            }
        }
        return null;
    }


    get compoundItem(): DTItemNum  {
        if (this.itemConfig)  {
            let compoundConfig = Game.config.compound.getConfig(this.itemConfig.syn_id);
            if (compoundConfig && compoundConfig.syn_item != 0)  {
                let item = new DTItemNum();
                item.itemId = compoundConfig.syn_item;
                item.itemNum = compoundConfig.num_req;
                return item;
            }
            return null;
        }
        return null;
    }
    get compoundNum(): number  {
        if (this.compoundItem)  {
            let num = this.compoundItem.itemNum;
            return Math.floor(this.count / num);
        }
        return 0;
    }

    get splitItem(): DTItemNum[]  {
        if (this.itemConfig)  {
            let compoundConfig = Game.config.compound.getConfig(this.itemConfig.syn_id);
            if (compoundConfig)  {
                let splitList = compoundConfig.split_list
                if (splitList.length == 1 && splitList[0].itemId == 0)  {
                    return []
                }
                return splitList;
            }
            return null;
        }
        return null;
    }


    get compoundActor(): DTItemNum  {
        if (this.itemConfig)  {
            let item = new DTItemNum();
            item.itemId = this.itemConfig.actor_id;
            item.itemNum = this.itemConfig.actor_num;
            return item;
        }
        return null;
    }
    get compoundActorNum(): number  {
        if (this.compoundActor)  {
            let num = this.compoundActor.itemNum;
            return Math.floor(this.count / num);
        }
        return 0;
    }
    get canUse(): boolean  {
        if (this.itemConfig)  {
            return this.itemConfig.rewardid != 0;
        }
        return false;
    }

    get canSell(): boolean  {
        if (this.itemConfig)  {
            return this.itemConfig.can_sell;
        }
        return false;
    }

    get canCompound(): boolean  {

        return this.compoundItem != null;
    }

    get canSplit(): boolean  {
        return this.splitItem != null && this.splitItem.length > 0;
    }

    get red(): boolean  {
        return this.itemType == 8 || this.itemType == 17;
    }

    // 创建物品数据结构，使用物品ID和数量
    static Create(itemId: number, itemNum: number): ItemData  {
        let item = new ItemData();
        item.id = itemId;
        item.count = itemNum;
        return item;
    }

    static GetIconUrl(id: number)  {
        let itemConfig = Game.config.item.getConfig(id);
        if (itemConfig)  {
            let avatarConfig = Game.config.avatar.getConfig(itemConfig.icon);
            if (avatarConfig)  {
                return avatarConfig.iconUrl;
            }
        }
        return "";
    }


    static GetName(id: number)  {
        let itemConfig = Game.config.item.getConfig(id);
        if (itemConfig)  {
            return itemConfig.name;
        }
        return "";
    }
}