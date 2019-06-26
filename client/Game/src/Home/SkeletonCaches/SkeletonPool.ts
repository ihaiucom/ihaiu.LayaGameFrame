import Skeleton = Laya.Skeleton;
import Templet = Laya.Templet;
import GameSkeleton from "./GameSkeleton";

/**
 * 骨骼动画 对象池
 */
export default class SkeletonPool
{
    /** 贴图也是Key */
    texturePath: string;

    /** 骨骼数据路径 */
    skPath: string;

    
    /** 骨骼动画模板 */
    private templet: Templet;

    
    /** 所有对象 */
    private allList: Skeleton[] = [];

    /** 没有使用的对象列表 */
    private list: Skeleton[] = [];

    
    /**
     * 总数
     */
    get totalNum(): number
    {
        return this.allList.length;
    }

    /**
     * 没有使用的数量
     */
    get poolNum(): number
    {
        return this.list.length;
    }

    /**
     * 正在被使用的数量
     */
    get useNum(): number
    {
        return this.totalNum - this.poolNum;
    }

    /**
     * 被清理数量
     */
    clearNum: number = 0;


    
    /**
     * 创建对象
     */
    private createItem(): Skeleton
    {
        let item: Skeleton;
        if (this.templet)
        {
            item = this.templet.buildArmature(0);
            this.allList.push(item);
        }
        return item;
    }


    /** 获取对象 */
    private getItem(): Skeleton
    {
        let item: Skeleton;
        if (this.list.length > 0)
        {
            item = this.list.pop();
        }
        return item;
    }

    /**
     * 获取或者创建对象
     */
    private getItemOrCreate(): Skeleton
    {
        let item: Skeleton = this.getItem();
        if (!item)
        {
            if (this.templet)
            {
                item = this.createItem();
            }
        }
        return item;
    }


    /**
     * 异步获取骨骼动画对象
     */
    async requrestItemAsync():  Promise<Skeleton>
    {
        if(!this.templet)
        {
            this.templet = await  GameSkeleton.templetCache.requrestItemAsync(this.texturePath, this.skPath);
            if(!this.templet)
            {
                return null;
            }
        }

        let item: Skeleton = this.getItemOrCreate();
        if (item)
        {
            return item;
        }

        return null;
    }

    
    /** 返回对象 */
    recover(skeleton: Skeleton)
    {
        if (this.list.indexOf(skeleton) == -1)
        {
            this.list.push(skeleton);
        }
        else
        {
            console.error("该对象已经返还对象池了:" + this.texturePath);
        }
    }

    
    toString(): string
    {
        return `SkeletonPool  totalNum:${this.totalNum}, poolNum:${this.poolNum}, useNum:${this.useNum}: ${this.texturePath}`;
    }

    clearNoUse(): number
    {
        let clearNum = 0;

        while (this.list.length > 0)
        {
            let skeleton = this.list.pop();

            let i = this.allList.indexOf(skeleton);
            this.allList.splice(i, 1);

            skeleton.destroy();
            this.clearNum++;
            clearNum++;
        }

        if (this.totalNum <= 0)
        {
            GameSkeleton.templetCache.recoverItem(this.texturePath, this.skPath);
            this.templet = null;
        }
        return clearNum;
    }
}