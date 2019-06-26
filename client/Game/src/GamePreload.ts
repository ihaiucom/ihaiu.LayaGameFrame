import AssetItemInfo from "./GameFrame/AssetManagers/AssetItemInfo";
import Game from "./Game";
import GuiSetting from "./FGUI/GuiSetting";
import GuiResPackageConfig from "./FGUI/GuiResPackageConfig";
import { AssetItemType } from "./GameFrame/AssetManagers/AssetItemType";
import AvatarConfig from "./Config/ConfigExtends/AvatarConfig";
import GuiPackageNames from "./FGUI/Generates/GuiPackageNames";
import Dictionary from "./Libs/Helpers/Dictionary";
import AssetHelper from "./GameFrame/AssetManagers/AssetHelper";

/** 游戏预加载资源 */
export default class GamePreload
{
    /** 资源列表 */
    private list: AssetItemInfo[];
    
    /** Fgui包 */
    private packageConfigs: GuiResPackageConfig[] = [];
    // 依赖资源列表
    protected assets: AssetItemInfo[] = [];

    
    // 添加依赖资源--fgui 包名
    addAssetForFguiPackagename(packagename: string)
    {
        this.assets.push({ url: packagename, type: AssetItemType.FguiPackage });
    }

    // 添加依赖资源--组件
    addAssetForFguiComponent<T extends fairygui.GComponent>(fguiCom: { new (): T })
    {
        let names: string[] = fguiCom["DependPackages"];
        for (let i = 0; i < names.length; i++)
        {
            this.addAssetForFguiPackagename(names[i]);
        }
    }


    // 添加动态资源--AvatarConfig里的所有
    addDynmicAssetForAvatarAll(avatarConfig: AvatarConfig)
    {
        avatarConfig.getAllAssset(this.assets);
    }
    
    
    /** 生成 */
    generate()
    {
        if(this.list)
            return;

        this.addAssetForFguiPackagename(GuiPackageNames.Sound);


        let packageConfig = Game.guiRes.getconfig(GuiPackageNames.Sound);
        if(packageConfig)
        {
            let packageRes = packageConfig.loadList;
            let willRemoves = [];
            for(let packageItem of packageRes)
            {
                if(packageItem.url.endsWith(".mp3") || packageItem.url.endsWith(".ogg") || packageItem.url.endsWith(".wav"))
                {
                    willRemoves.push(packageItem);
                }
            }

            for(let packageItem of willRemoves)
            {
                arrayRemoveItem(packageRes, packageItem);
            }
        }

        let dict: Dictionary<TKey, AssetItemInfo> = new Dictionary<TKey, AssetItemInfo>();
        let packageDict: Dictionary<TKey, GuiResPackageConfig> = new Dictionary<TKey, GuiResPackageConfig>();
        for (let i = 0; i < this.assets.length; i++)
        {
            let item = this.assets[i];
            let packageConfig: GuiResPackageConfig = null;
            switch (item.type)
            {
                case AssetItemType.FguiPackage:
                    packageConfig = Game.guiRes.getconfig(item.url);
                    break;
                case AssetItemType.FspritePackage:
                    packageConfig = Game.spriteRes.getconfig(item.url);
                    break;
            }

            if (packageConfig)
            {
                if (!packageDict.hasKey(packageConfig.packagePath))
                {
                    packageDict.add(packageConfig.packagePath, packageConfig);
                }

                let packageRes = packageConfig.loadList;
                for (let packageItem of packageRes)
                {
                    if (!dict.hasKey(packageItem.url))
                    {
                        let mitem = { url: packageItem.url, type: AssetHelper.layaLoaderType2AssetItemType(packageItem.type) }
                        dict.add(mitem.url, mitem);
                    }
                }

            }
            else
            {
                if (!dict.hasKey(item.url))
                {
                    dict.add(item.url, item);
                }
            }

        }

        this.list = dict.getValues();
        this.packageConfigs = packageDict.getValues();
    }

    /** 是否运行中 */
    isRuning = false;
    /** 是否完成 */
    isComplete = false;

    /** 检查完成函数 */
    private completeCallbackList: Function[] = [];
    /** 启动 */
    async start():Promise<boolean>
    {
        return new Promise<boolean>((resolve)=>
        {
            if(this.isComplete)
            {
                resolve(true);
            }
            else
            {
                let fun = ()=>
                {
                    resolve(true);
                };

                this.completeCallbackList.push(fun);

                if(!this.isRuning)
                {
                    this.generate();
                    Game.asset.loadList(this.list, this, this.onComplete, this.onProgress);
                }
            }
         });
    }

    /** 加载进度 */
    private onProgress(rate, index: number, count: number, item)
    {
        Game.loaderSettingHandler.onLoadedFgui(index, count);
    }

    /** 加载完成 */
    private onComplete()
    {
        
        for (let packageConfig of this.packageConfigs)
        {
            GuiSetting.addPackage(packageConfig.packagePath);
        }


        for(let fun of this.completeCallbackList)
        {
            fun.apply(this);
        }
            
        this.isComplete = true;
    }
}