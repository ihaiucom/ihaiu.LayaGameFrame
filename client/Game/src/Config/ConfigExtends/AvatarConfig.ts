/////////////////////////////////////
// ExportXlsx生成
// http://blog.ihaiu.com/tool-ExportXlsx
/////////////////////////////////////

import AvatarConfigStruct from "../ConfigStructs/AvatarConfigStruct";
import Game from "../../Game";
import LangType from "../LangType";
import AssetItemInfo from "../../GameFrame/AssetManagers/AssetItemInfo";
import { AssetItemType } from "../../GameFrame/AssetManagers/AssetItemType";
import Dictionary from "../../Libs/Helpers/Dictionary";
import AssetHelper from "../../GameFrame/AssetManagers/AssetHelper";
import Res from "../Keys/Res";

export default class AvatarConfig extends AvatarConfigStruct
{
	
    get icon(): string
    {
        let value = this.zh_cn_icon;
        switch (Game.lang.lang)
        {
            case LangType.en:
                value = this.en_icon;
                break;
        }
        if (!isNullOrEmpty(value))
        {
            return value;
        }
        return this.zh_cn_icon
    }



    get modelPath(): string
    {
        let arr = this.model_skin.split("/");
        return this.model_skin.replace("Unit/", "") + "/" + arr[arr.length - 1];
    }

    // 模型_皮肤
    private _modelSkinUrl: string;
    get modelSkinUrl(): string
    {
        if (!this.model_skin)
        {
            return null;
        }

        if (!this._modelSkinUrl)
        {
            this._modelSkinUrl = Res.getSpinePngPath(this.model_skin);
        }
        return this._modelSkinUrl;
    }

    // 模型_骨骼
    private _modelBoneUrl: string;
    get modelBoneUrl(): string
    {
        if (!this.model_bones)
        {
            return null;
        }

        if (!this._modelBoneUrl)
        {

            this._modelBoneUrl = Res.getSpineSKPath(this.model_bones);
        }
        return this._modelBoneUrl;
    }



    // 场景_图片
    private _picUrl: string;
    get picUrl(): string
    {
        if (!this.bg_pic)
        {
            return null;
        }

        if (!this._picUrl)
        {
            this._picUrl = Res.getSpritePath(this.bg_pic);
        }
        return this._picUrl;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */

    // 模型_皮肤
    private _modelSkinAssetItem: AssetItemInfo;
    get modelSkinAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.model_skin))
        {
            return null;
        }

        if (!this._modelSkinAssetItem)
        {
            this._modelSkinAssetItem = { url: this.modelSkinUrl, type: AssetItemType.Image };
        }

        return this._modelSkinAssetItem;
    }

    // 模型_骨骼
    private _modelBoneAssetItem: AssetItemInfo;
    get modelBoneAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.model_bones))
        {
            return null;
        }

        if (!this._modelBoneAssetItem)
        {
            this._modelBoneAssetItem = { url: this.modelBoneUrl, type: AssetItemType.Buffer };
        }

        return this._modelBoneAssetItem;
    }

    // 场景_图片
    private _picAssetItem: AssetItemInfo;
    get picAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.bg_pic))
        {
            return null;
        }

        if (!this._picAssetItem)
        {
            this._picAssetItem = { url: this.picUrl, type: AssetItemType.Image };
        }

        return this._picAssetItem;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */


    private getPackagenameByUrl(url: string)
    {
        return url.split("/")[0];
    }

    // 图标
    private _iconUrl: string;
    get iconUrl(): string
    {
        if (!this._iconUrl)
        {
            // let packageName = this.getPackagenameByUrl(this.icon);
            // if (packageName == "ActorBodyIcon")
            {
                this._iconUrl = "res/fspriteassets/" + this.icon + ".png";
            }
            // else
            // {
            // 	this._iconUrl = "ui://" + this.icon;
            // }

        }
        return this._iconUrl;
    }

    //
    private _iconUrl2: string;
    get iconUrl2(): string
    {
        if (!this._iconUrl2)
        {
            this._iconUrl2 = "res/fspriteassets/" + this.icon + "2.png";
        }
        return this._iconUrl2;
    }

    // 半身像
    private _bodyIconUrl: string;
    get bodyIconUrl(): string
    {
        if (!this._bodyIconUrl)
        {
            // let packageName = this.getPackagenameByUrl(this.body_icon);
            // if (packageName == "ActorBodyIcon")
            {
                this._bodyIconUrl = "res/fspriteassets/" + this.body_icon + ".png";
            }
            // else
            // {
            // 	this._bodyIconUrl = "ui://" + this.body_icon;
            // }
        }
        return this._bodyIconUrl;
    }

    // 碎片图标
    private _pieceIconUrl: string;
    get pieceIconUrl(): string
    {
        if (!this._pieceIconUrl)
        {
            this._pieceIconUrl = "res/fspriteassets/" + this.piece_icon + ".png";

            // this._pieceIconUrl = "ui://" + this.piece_icon;
        }
        return this._pieceIconUrl;
    }

    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */


    // 获取fgui包配置 -- 图标
    private _iconPackagename: string;
    private get iconPackagename(): string
    {
        if (isNullOrEmpty(this.icon))
        {
            return null;
        }

        if (!this._iconPackagename)
        {
            this._iconPackagename = this.icon.split("/")[0];
        }

        return this._iconPackagename;
    }


    // 获取fgui包配置 -- 半身像
    private _bodyIconPackageName: string;
    private get bodyIconPackageName(): string
    {
        if (isNullOrEmpty(this.body_icon))
        {
            return null;
        }

        if (!this._bodyIconPackageName)
        {
            this._bodyIconPackageName = this.body_icon.split("/")[0];
        }

        return this._bodyIconPackageName;
    }


    // 获取fgui包配置 -- 碎片图标
    private _pieceIconPackageName: string;
    private get pieceIconPackageName(): string
    {
        if (isNullOrEmpty(this.piece_icon))
        {
            return null;
        }

        if (!this._pieceIconPackageName)
        {
            this._pieceIconPackageName = this.piece_icon.split("/")[0];
        }

        return this._pieceIconPackageName;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */
    // 获取fgui包配置 -- 图标
    private _iconAssetItem: AssetItemInfo;
    get iconAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.icon))
        {
            return null;
        }

        if (!this._iconAssetItem)
        {
            this._iconAssetItem = { url: this.iconPackagename, type: AssetItemType.FspritePackage };
        }

        return this._iconAssetItem;
    }




    // 获取fgui包配置 -- 半身像
    private _bodyIconAssetItem: AssetItemInfo;
    get bodyIconAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.body_icon))
        {
            return null;
        }

        if (!this._bodyIconAssetItem)
        {
            this._bodyIconAssetItem = { url: this.bodyIconPackageName, type: AssetItemType.FspritePackage };
        }

        return this._bodyIconAssetItem;
    }


    // 获取fgui包配置 -- 碎片图标
    private _pieceIconAssetItem: AssetItemInfo;
    get pieceIconAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.piece_icon))
        {
            return null;
        }

        if (!this._pieceIconAssetItem)
        {
            this._pieceIconAssetItem = { url: this.pieceIconPackageName, type: AssetItemType.FspritePackage };
        }

        return this._pieceIconAssetItem;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */

    private _assetList: AssetItemInfo[] = [];

    get assetList(): AssetItemInfo[]
    {
        if (!this._assetList)
        {
            this._assetList = [];
            if (this.iconAssetItem)
                this._assetList.push(this.iconAssetItem);


            if (this.bodyIconAssetItem)
                this._assetList.push(this.bodyIconAssetItem);


            if (this.pieceIconAssetItem)
                this._assetList.push(this.pieceIconAssetItem);


            if (this.modelSkinAssetItem)
                this._assetList.push(this.modelSkinAssetItem);


            if (this.modelBoneAssetItem)
                this._assetList.push(this.modelBoneAssetItem);


            if (this.picAssetItem)
                this._assetList.push(this.picAssetItem);

        }
        return this._assetList;
    }


    // 获取预加载的资源列表
    getAllAssset(list?: AssetItemInfo[], dict?: Dictionary<TKey, AssetItemInfo>): AssetItemInfo[]
    {
        if (!list)
        {
            return this.assetList;
        }

        for (let i = 0; i < this.assetList.length; i++)
        {
            let item = this.assetList[i];

            if (dict)
            {
                let key = AssetHelper.getAssetItemKey(item);

                if (!dict.hasKey(key))
                {
                    list.push(item);
                    dict.add(key, item);
                }
            }
            else
            {
                list.push(item);
            }
        }

        return list;
    }
}