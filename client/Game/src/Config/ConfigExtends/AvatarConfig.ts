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



    // 模型_皮肤_前
    
    private _modelSkinUrlF: string;
    get modelSkinUrlF(): string
    {
        if(isNullOrEmpty(this.modelBones) || isNullOrEmpty(this.modelSkin))
            return null;

        if (!this._modelSkinUrlF)
        {
            this._modelSkinUrlF = Res.getSpinePngPathF(this.modelBones, this.modelSkin);
        }
        return this._modelSkinUrlF;
    }
    
    // 模型_皮肤_背面
    private _modelSkinUrlB: string;
    get modelSkinUrlB(): string
    {
        if(isNullOrEmpty(this.modelBones) || isNullOrEmpty(this.modelSkin))
            return null;

        if (!this._modelSkinUrlB)
        {
            this._modelSkinUrlB = Res.getSpinePngPathB(this.modelBones, this.modelSkin);
        }
        return this._modelSkinUrlB;
    }


    // 模型_骨骼_前
    private _modelBoneUrlF: string;
    get modelBoneUrlF(): string
    {
        if(isNullOrEmpty(this.modelBones) || isNullOrEmpty(this.modelSkin))
            return null;
        
        if(!this._modelBoneUrlF)
        {
            this._modelBoneUrlF = Res.getSpineSKPathF(this.modelBones, this.modelSkin);
        }
        return this._modelBoneUrlF;
    }

    
    // 模型_骨骼_背面
    private _modelBoneUrlB: string;
    get modelBoneUrlB(): string
    {
        if(isNullOrEmpty(this.modelBones) || isNullOrEmpty(this.modelSkin))
            return null;
        
        if(!this._modelBoneUrlB)
        {
            this._modelBoneUrlB = Res.getSpineSKPathB(this.modelBones, this.modelSkin);
        }
        return this._modelBoneUrlB;
    }






    // 场景_图片
    private _picUrl: string;
    get picUrl(): string
    {
        if (!this.bgPic)
        {
            return null;
        }

        if (!this._picUrl)
        {
            this._picUrl = Res.getSpritePath(this.bgPic);
        }
        return this._picUrl;
    }


    /* ---------------------------------------  我是漂亮的分割线  --------------------------------------- */

    // 模型_皮肤
    private _modelSkinAssetItemF: AssetItemInfo;
    get modelSkinAssetItemF(): AssetItemInfo
    {
        if (!this.modelSkinUrlF)
        {
            return null;
        }

        if (!this._modelSkinAssetItemF)
        {
            this._modelSkinAssetItemF = { url: this.modelSkinUrlF, type: AssetItemType.Image };
        }

        return this._modelSkinAssetItemF;
    }
    
    private _modelSkinAssetItemB: AssetItemInfo;
    get modelSkinAssetItemB(): AssetItemInfo
    {
        if (!this.modelSkinUrlB)
        {
            return null;
        }

        if (!this._modelSkinAssetItemB)
        {
            this._modelSkinAssetItemB = { url: this.modelSkinUrlB, type: AssetItemType.Image };
        }

        return this._modelSkinAssetItemB;
    }

    // 模型_骨骼
    private _modelBoneAssetItemF: AssetItemInfo;
    get modelBoneAssetItemF(): AssetItemInfo
    {
        if (!this.modelBoneUrlF)
        {
            return null;
        }

        if (!this._modelBoneAssetItemF)
        {
            this._modelBoneAssetItemF = { url: this.modelBoneUrlF, type: AssetItemType.Buffer };
        }

        return this._modelBoneAssetItemF;
    }
    
    private _modelBoneAssetItemB: AssetItemInfo;
    get modelBoneAssetItemB(): AssetItemInfo
    {
        if (!this.modelBoneUrlB)
        {
            return null;
        }

        if (!this._modelBoneAssetItemB)
        {
            this._modelBoneAssetItemB = { url: this.modelBoneUrlB, type: AssetItemType.Buffer };
        }

        return this._modelBoneAssetItemB;
    }

    // 场景_图片
    private _picAssetItem: AssetItemInfo;
    get picAssetItem(): AssetItemInfo
    {
        if (isNullOrEmpty(this.bgPic))
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
    private _halfIconUrl: string;
    get halfIconUrl(): string
    {
        if (!this._halfIconUrl)
        {
            this._halfIconUrl = "res/fspriteassets/" + this.halfIcon + ".png";
        }
        return this._halfIconUrl;
    }
    //全身像
    private _bodyIconUrl: string;
    get bodyIconUrl(): string
    {
        if (!this._bodyIconUrl)
        {
            // let packageName = this.getPackagenameByUrl(this.bodyIcon);
            // if (packageName == "ActorBodyIcon")
            {
                this._bodyIconUrl = "res/fspriteassets/" + this.bodyIcon + ".png";
            }
            // else
            // {
            // 	this._bodyIconUrl = "ui://" + this.bodyIcon;
            // }
        }
        return this._bodyIconUrl;
    }

      //全身像
      private _diamondIconUrl: string = null;
      get diamondIconUrl(): string
      {
          if (!this._diamondIconUrl)
          {
              {
                  this._diamondIconUrl = "res/fspriteassets/" + this.diamondHeadIcon + ".png";
              }
          }
          return this._diamondIconUrl;
      }

    // 碎片图标
    private _pieceIconUrl: string;
    get pieceIconUrl(): string
    {
        if (!this._pieceIconUrl)
        {
            this._pieceIconUrl = "res/fspriteassets/" + this.pieceIcon + ".png";

            // this._pieceIconUrl = "ui://" + this.pieceIcon;
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
        if (isNullOrEmpty(this.bodyIcon))
        {
            return null;
        }

        if (!this._bodyIconPackageName)
        {
            this._bodyIconPackageName = this.bodyIcon.split("/")[0];
        }

        return this._bodyIconPackageName;
    }


    // 获取fgui包配置 -- 碎片图标
    private _pieceIconPackageName: string;
    private get pieceIconPackageName(): string
    {
        if (isNullOrEmpty(this.pieceIcon))
        {
            return null;
        }

        if (!this._pieceIconPackageName)
        {
            this._pieceIconPackageName = this.pieceIcon.split("/")[0];
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
        if (isNullOrEmpty(this.bodyIcon))
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
        if (isNullOrEmpty(this.pieceIcon))
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


            // if (this.modelBoneAssetItemF)
            // {
            //     this._assetList.push(this.modelBoneAssetItemF);
            //     this._assetList.push(this.modelSkinAssetItemF);
            //     this._assetList.push(this.modelBoneAssetItemB);
            //     this._assetList.push(this.modelSkinAssetItemB);
            // }




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